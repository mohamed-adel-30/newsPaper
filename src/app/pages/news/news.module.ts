import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { AllnewsComponent } from './allnews/allnews.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [AllnewsComponent, NewsDetailsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class NewsModule { }
