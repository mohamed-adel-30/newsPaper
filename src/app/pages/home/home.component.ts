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
  anArticle;


  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.getHomeNews()
  }
  getHomeNews(){
    this.service.getAllNews().subscribe(data=>{
      this.allNews =data

      this.allNews.forEach(element => {
        if(element.showOnHomepage === true && element.description !==""){
          this.homeArticles.push(element)
        }

      });

      this.homeArticles.sort(this.sortFunction)
      console.log(this.homeArticles);

    })
  }



  sortFunction(a, b) {
    var dateA = new Date(a.publishedAt).getTime();
    var dateB = new Date(b.publishedAt).getTime();
    return dateA < dateB ? 1 : -1;
  };

  unfav(e) {
    e.target.style.display = "none";
    e.target.previousSibling.style.display = "inline";
  }

  fav(e) {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "inline";
  }


  showSocial(e) {
    if (e.target.nextSibling.style.display == "none") {
      e.target.nextSibling.style.display = "flex"
    } else if (e.target.nextSibling.style.display == "flex") {
      e.target.nextSibling.style.display = "none"
    }

  }

}
