import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {AllnewsComponent} from './allnews/allnews.component'
import {NewsDetailsComponent} from './news-details/news-details.component'


const routes: Routes = [
  {
    path:'',
    component:AllnewsComponent,
  },
  {
    path:'details/:id',
    component:NewsDetailsComponent
  },
  {
    path:'details/:id/:id',
    redirectTo:"details/:id",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
