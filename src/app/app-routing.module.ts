import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProflieComponent } from './toolbar/proflie/proflie.component';
import { FrendsComponent } from './toolbar/frends/frends.component';
import { ReelsComponent } from './toolbar/reels/reels.component';
import { SettingsComponent } from './toolbar/settings/settings.component';

const routes: Routes = [
  { path : 'home' , component: HomeComponent },
  { path : 'login' , component: LoginComponent },
  { path : 'profile' , component: ProflieComponent },
  { path : 'frends' , component: FrendsComponent },
  { path : 'reels' , component: ReelsComponent },
  { path : 'settings' , component: SettingsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
