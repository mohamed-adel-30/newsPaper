import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from "@angular/router";

import { NewsService } from '../../../providers/news.service'

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  indx;
  article;
  allNews;
  categories: any = []
  favorite = false;
  share = false;
  relatedTopics: any = [];
  relatedTopicsDisplayed;
  categoryName: any;
  id: any;
  catID: any;
  constructor(private ActivateRouter: ActivatedRoute, private news: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.ActivateRouter.snapshot.paramMap.get('id')
    this.getAnArticle()
    this.getCategories()
  }







// get news details //


  getAnArticle() {
    this.news.getAnArticle(this.id).subscribe(article => {
      this.article = article
      this.catID = this.article[0].sourceID
      this.getRelatedTopics()


    })
  }




  reload(id){
    location.href =`details/${id}`
  }




  // get related topics //

  getRelatedTopics(){
     this.news.getRelatedTopics(this.catID).subscribe(related => {
        this.relatedTopics = related
        this.relatedTopicsDisplayed = this.relatedTopics.splice(1,3)

      })
  }

  // get category Name //

  getCategories() {
    this.news.getAllCategories().subscribe(cats => {
      this.categories = cats
      this.categories.find(element => {
        if (element.id == this.article[0].sourceID) {
          this.categoryName = element.name
        }

      });
    })
  }

}
