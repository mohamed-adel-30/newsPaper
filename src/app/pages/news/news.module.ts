import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { AllnewsComponent } from './allnews/allnews.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { SearchPipe } from './search.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AllnewsComponent, NewsDetailsComponent, SearchPipe],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
