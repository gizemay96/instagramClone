import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { ImgListComponent } from './components/img-list/img-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfilePageComponent,
    ProfileCardComponent,
    StoryCardComponent,
    ImgListComponent,
    NavBarComponent,
    UserListComponent,
    TabMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
