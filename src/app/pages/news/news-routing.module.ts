import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {AllnewsComponent} from './allnews/allnews.component'
import {NewsDetailsComponent} from './news-details/news-details.component'


const routes: Routes = [
  {
    path:'news',
    component:AllnewsComponent
  },
  {
    path:'news/details',
    component:NewsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
