import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <-- NgModel lives here
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FunctionComponent } from './function/function.component';
//import { GraficosComponent } from './graficos/graficos.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { BDtablasComponent } from './bdtablas/bdtablas.component';
import { AlarmComponent } from './alarm/alarm.component';
import { ContactnachoComponent } from './contactnacho/contactnacho.component';
//import { CardGraficosComponent } from './card-graficos/card-graficos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    FunctionComponent,
    //GraficosComponent,
    ContactinfoComponent,
    BDtablasComponent,
    AlarmComponent,
    ContactnachoComponent,
    //CardGraficosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
