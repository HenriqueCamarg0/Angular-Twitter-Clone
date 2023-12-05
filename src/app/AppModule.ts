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
import { NewsComponent } from './components/news/news.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { ProflieComponent } from './toolbar/proflie/proflie.component';
import { FrendsComponent } from './toolbar/frends/frends.component';
import { ReelsComponent } from './toolbar/reels/reels.component';
import { SettingsComponent } from './toolbar/settings/settings.component';

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
    LoginComponent,
    NewsComponent,
    FeedsComponent,
    ProflieComponent,
    FrendsComponent,
    ProflieComponent,
    ReelsComponent,
    SettingsComponent
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
