import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes:Routes=[
  {
    path:'',component:HeaderComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'playlist',component:PlaylistComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
