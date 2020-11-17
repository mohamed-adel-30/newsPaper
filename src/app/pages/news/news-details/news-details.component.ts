import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {NewsService} from '../../../providers/news.service'

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  id
  article
  allNews
  favorite=false;
  share=false;
  constructor(private router:ActivatedRoute , private news:NewsService ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
    this.news.getAllnews().subscribe(a => {
      this.allNews = a
      this.allNews.forEach(element => {
        if(element.id == this.id){
          this.article = element
        }
      });
      console.log(this.article);

    })

  }

}
