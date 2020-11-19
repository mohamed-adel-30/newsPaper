import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {WebserviceService} from './webservice.service'
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient , private config:WebserviceService ) { }


  getAllnews(){
    const url = this.config.url+this.config.getAllNews

    return this.http.get(url)
  }

  getAnArticle(id){
    const url = this.config.url+this.config.getAnArticle.replace("{0}",id)
    return this.http.get(url)
  }

  getRelatedTopics(catId){
    const url = this.config.url+this.config.getRelatedTobics.replace("{0}",catId)
    return this.http.get(url)
  }

  getAllCategories(){
    const url = this.config.url+this.config.getCategories
    return this.http.get(url)
  }
}
