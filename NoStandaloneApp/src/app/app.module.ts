import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { ReciclajeComponent } from './reciclaje/reciclaje.component';
import { RouterModule } from '@angular/router';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { RewardsComponent } from './rewards/rewards.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserProfileComponent,
    UserListComponent,
    LoginComponent,
    ReciclajeComponent,
    CreateOfferComponent,
    ListOfferComponent,
    RewardsComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
