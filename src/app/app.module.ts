import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './core/contact/contact.component';
import { ProfileComponent } from './core/profile/profile.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { CakesComponent } from './cakes/cakes.component';
import { HttpClientModule } from '@angular/common/http';
import { CakeItemComponent } from './cakes/cake-item/cake-item.component';
import { FormsModule } from '@angular/forms';
import { CakeDetailComponent } from './cakes/cake-detail/cake-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProfileComponent,
    NavBarComponent,
    CakesComponent,
    CakeItemComponent,
    CakeDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
