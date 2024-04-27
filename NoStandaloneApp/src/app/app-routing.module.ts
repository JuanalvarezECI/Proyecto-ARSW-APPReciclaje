import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { ReciclajeComponent } from './reciclaje/reciclaje.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';




const routes: Routes = [
  { path: 'createuser', component: UserComponent},
  { path: 'user/:id', component: UserProfileComponent}, 
  { path: 'users', component: UserListComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'reciclaje', component: ReciclajeComponent },
  { path: 'create-offer', component: CreateOfferComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
   
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
