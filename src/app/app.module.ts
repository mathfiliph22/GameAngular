import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './views/contatos/contatos.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './views/header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './views/footer/footer.component';
import { SmartphoneComponent } from './views/smartphone/smartphone.component';
import { XboxComponent } from './views/xbox/xbox.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { NotFOundComponent } from './views/not-found/not-found.component';





@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    HeaderComponent,
    FooterComponent,
    SmartphoneComponent,
    XboxComponent,
    HomeComponent,
    LoginComponent,
    NotFOundComponent
   
 
   
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule

   

  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
