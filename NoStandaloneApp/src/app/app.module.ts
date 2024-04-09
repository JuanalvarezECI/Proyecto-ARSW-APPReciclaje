import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    // tus componentes aquí
    AppComponent,
    UserComponent
  ],
  imports: [
    // otros módulos aquí
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule

     // Asegúrate de que estás añadiendo RouterModule a la lista de imports
    // otros módulos aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }