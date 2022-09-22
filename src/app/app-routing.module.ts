import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { CompetitionComponent } from './competition/competition.component';
import { CalenderComponent } from './calender/calender.component';
import { AuthGuard } from './auth.guard';
import { LhomeComponent } from './land-page/lhome/lhome.component';
import { LifesComponent } from './land-page/subjects/lifes/lifes.component';
import { PhysicalComponent } from './land-page/subjects/physical/physical.component';
import { SubpageComponent } from './land-page/subpage/subpage.component';

const routes: Routes = [
  {path:'',pathMatch:'full',  redirectTo:'/home-page'},
  {path:'home-page', component:HomePageComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'contact', component:ContactUsComponent},
  {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'quiz', component:QuizComponent},
  {path: 'competition', component:CompetitionComponent},
  {path: 'calender', component:CalenderComponent},
  {path:'lhome',component:LhomeComponent},
  {path:'lhome/:id',component:SubpageComponent},
  {path:'physical',component:PhysicalComponent},
  {path:'lifes',component:LifesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
