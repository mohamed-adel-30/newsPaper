import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {NewsModule} from './news/news.module'

import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { HelpingComponent } from './home/helping/helping.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, HeroComponent, HelpingComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NewsModule,
    SharedModule
  ]
})
export class PagesModule { }
