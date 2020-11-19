import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor() { }

  url=" http://localhost:3000/";

  getAllNews="articles"
  getAnArticle = 'articles?id={0}'
  getRelatedTobics ="articles?sourceID={0}"
  getCategories='sourceCategory'
}
