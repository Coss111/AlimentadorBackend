import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactos = [
    {
      id: 1,
      imageSrc: 'https://i.ibb.co/LxCGnDs/jose.jpg',
      nombre: 'Jose Condori',
      phone: '74080986',
      //linkelin: 'https://www.linkedin.com/in/amadeo-condori-890bb3257',
      linkelin: 'https://estaticos-cdn.prensaiberica.es/clip/41adfb51-5bf4-4691-82d5-bf7d8f1cacef_16-9-discover-aspect-ratio_default_0.jpg',
      
      
    },
    {
      id: 2,
      imageSrc: 'https://i.ibb.co/WxXZPTV/cos.jpg',
      nombre: 'Cosette Guevara',
      phone: '73249474',
      linkelin: 'https://www.linkedin.com/in/coss-guevara-a53121204',
      
    },
    {
      id: 3,
      imageSrc: 'https://i.ibb.co/GTXnbRL/ede.jpg',
      nombre: 'Edely Tito',
      phone: '65636141',
      linkelin: 'https://www.linkedin.com/in/edely-tito-99b6461aa/',
      
    }
  ];

  nacho = [
    {
      id: 1,
      imageSrc: 'https://i.ibb.co/FHf9K1Z/nachopengueno.jpg',
      nombre: 'Ignacio Agramont',
      phone: '78978984',
      linkelin: 'https://www.linkedin.com/in/ignacioagramont',
      
    }

  ];
  
}
