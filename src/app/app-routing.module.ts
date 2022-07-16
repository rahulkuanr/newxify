import { BusinessNewsComponent } from './business-news/business-news.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
  {path:'', component:TopHeadingComponent},//home
  {path:'technology', component:TechNewsComponent}, //techNews
  {path:'business', component:BusinessNewsComponent}, //techNews
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
