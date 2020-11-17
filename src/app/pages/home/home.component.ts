import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../providers/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allNews:any=[]
  homeArticles: any=[];
  favorite:boolean=false
  share:boolean=false
  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.getHomeNews()
  }
  getHomeNews(){
    let sortedArticals
    this.service.getAllNews().subscribe(data=>{
      this.allNews =data
      this.allNews.forEach(element => {
        if(element.showOnHomepage === true && element.description !==""){
          this.homeArticles.push(element)
        }

      });
    })
  }

}
