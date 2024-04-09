import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: 'createuser', component: UserComponent},
  { path: 'user/:id', component: UserProfileComponent}, // usa el nuevo componente aquí
  { path: 'users', component: UserListComponent}, // nueva ruta aquí

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