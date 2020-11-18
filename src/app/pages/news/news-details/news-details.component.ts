import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NewsService } from '../../../providers/news.service'

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  id
  article
  allNews
  categories: any = []
  favorite = false;
  share = false;
  relatedTobics: any = [];
  categoryName: any;
  constructor(private router: ActivatedRoute, private news: NewsService) { }

  ngOnInit(): void {


    this.id = this.router.snapshot.paramMap.get('id')
    this.news.getAllnews().subscribe(a => {
      this.allNews = a
      this.allNews.forEach(element => {
        if (element.id == this.id) {
          this.article = element
        }
        if(element.sourceID == this.article.sourceID){
              this.relatedTobics.push(element)
          }
      });
      console.log(this.relatedTobics);

      this.getCategories()
    })


  }






  getCategories() {
    this.news.getAllCategories().subscribe(cats => {
      this.categories = cats
      this.categories.find(element => {
        if (element.id == this.article.sourceID) {
          this.categoryName = element.name
        }

      });
    })
  }

}
