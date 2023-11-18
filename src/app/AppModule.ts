import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms'
import { MessagesService } from './services/messages.service';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { SocialComponent } from './components/social/social.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostComponent,
    FooterComponent,
    TweetComponent,
    HomeComponent,
    AvatarComponent,
    SidbarComponent,
    SocialComponent,
    TabsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
