import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { WebserviceService } from './webservice.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient, private config:WebserviceService) { }

  getAllNews(){
    const url = this.config.url+this.config.getAllNews
    return this.http.get(url)
  }

}
