import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './Components/events/events.component';
import { HomeComponent } from './Components/home/home.component';
import { Page404Component } from './Components/page404/page404.component';
import { LoginPageComponent } from './UI/login-page/login-page.component';
import { MainComponent } from './UI/main/main.component';

const routes: Routes = [
  {path:'', component:MainComponent, children:[
    {path:'',redirectTo:"/home", pathMatch:"full"},
    {path:'home', component:HomeComponent},
    {path:'events', component:EventsComponent},

  ]},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginPageComponent},
  
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
