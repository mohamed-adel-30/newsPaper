import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {PagesModule} from './pages/pages.module';
import {HomeService} from './providers/home.service'
import {NewsService} from './providers/news.service'

import {WebserviceService} from './providers/webservice.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PagesModule
  ],
  providers: [WebserviceService,HomeService,NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
