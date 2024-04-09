import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: 'createuser', component: UserComponent},
  { path: 'user', component: UserComponent }, // Asegúrate de tener una ruta para 'user'
  // otras rutas aquí...
];

@NgModule({
  declarations: [
    // tus componentes aquí
  ],
  imports: [
    // otros módulos aquí
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes) // Añade esto
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }