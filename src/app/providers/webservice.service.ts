import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor() { }

  url=" http://localhost:3000/";

  getAllNews="articles"
  getCategories='sourceCategory'
}
