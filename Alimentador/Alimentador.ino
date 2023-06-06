#include <WiFi.h>
#include <HTTPClient.h>
#include <ESP32Servo.h>
#include <ESPAsyncWebServer.h>

Servo myServo;
constexpr uint8_t relayPin = 17;

// Ultrasonic Sensor Comida
const int trigPin1 = 23;
const int echoPin1 = 22;

// Ultrasonic Sensor Agua
const int trigPin2 = 19;
const int echoPin2 = 18;

// Potentiometer
const int potPin = 27;

// Dispensing counters
int waterDispensed = 0;
int foodDispensed = 0;

const char* ssid     = "AXS_2.4G_nuNb5H";
const char* password = "yzuM5NLD";
const char* serverName = "http://192.168.1.204:3000/";

WiFiClient client;

void setup() {
  Serial.begin(115200);
  delay(10);
  
  pinMode(relayPin, OUTPUT);
  pinMode(trigPin1, OUTPUT);
  pinMode(echoPin1, INPUT);
  pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);

  myServo.attach(13); // Attach the servo on pin 13
  
  // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  // Print the IP address
  Serial.println(WiFi.localIP());
}

void loop() {
  int potValue = analogRead(potPin);
  Serial.print("Potentiometer Value: ");
  Serial.println(potValue);

  long duration, distance;
  
  // Sensor 1 for Food
  digitalWrite(trigPin1, LOW);  
  delayMicroseconds(2); 
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10); 
  digitalWrite(trigPin1, LOW);
  duration = pulseIn(echoPin1, HIGH);
  distance = (duration/2) / 29.1;
  Serial.print("Sensor 1 Distance: ");
  Serial.println(distance);
  if (distance < 14) {
    Serial.println("Turning servo to 90 degrees");
    myServo.write(90);
    delay(3000);
    Serial.println("Turning servo back to 0 degrees");
    myServo.write(0);
    postRequest("dispensinglog/agregar", "tipo=comida");
    foodDispensed++;
  }

  // Sensor 2 for Water
  digitalWrite(trigPin2, LOW);  
  delayMicroseconds(2); 
  digitalWrite(trigPin2, HIGH);
  delayMicroseconds(10); 
  digitalWrite(trigPin2, LOW);
  duration = pulseIn(echoPin2, HIGH);
  distance = (duration/2) / 29.1;
  Serial.print("Sensor 2 Distance: ");
  Serial.println(distance);
  if (distance < 14 && potValue <= 3000) {
    Serial.println("Turning on water pump");
    digitalWrite(relayPin, HIGH);
    delay(5000);
    Serial.println("Turning off water pump");
    digitalWrite(relayPin, LOW);
    postRequest("dispensinglog/agregar", "tipo=agua");
    waterDispensed++;
  } else if (potValue > 3000) {
    Serial.println("Potentiometer value > 3000. Sending cleaning alert and blocking water pump");
    postRequest("cleaningalerts/agregar", "limpio=no");
  }
  delay(1000);
}

void postRequest(const char* apiEndpoint, const char* message) {
  HTTPClient http;

  String serverPath = String(serverName) + String(apiEndpoint);

  // Your Domain name with URL path or IP address with path
  http.begin(client, serverPath.c_str());
  
  // Specify content-type header
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");
  
  // Send HTTP POST request
  int httpResponseCode = http.POST(message);
  
  if (httpResponseCode>0) {
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
  }
  else {
    Serial.print("Error code: ");
    Serial.println(httpResponseCode);
  }
  // Free resources
  http.end();
}
