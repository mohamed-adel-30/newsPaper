import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NewsService} from '../../../providers/news.service'
import {News} from '../news.model'

@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.scss']
})
export class AllnewsComponent implements OnInit {
  allNews:any=[]
  anArticle;
  categories: any=[];
  displayNews:any=[];
  favorite:boolean=false
  share:boolean=false
  constructor(private news:NewsService) { }

  ngOnInit(): void {
    this.getNews()
    this.getCategories()
  }

  getNews(){
    this.news.getAllnews().subscribe(data =>{
      this.allNews = data

      this.allNews.forEach(e => {
        this.anArticle = new News(e.sourceID,e.id,e.title,e.description,e.content,e.publishedAt,e.urlToImage,e.ShowOnHomePage)
        this.displayNews.push(this.anArticle)
      });



    })

  }
      getCategories(){
        this.news.getAllCategories().subscribe(data=>{
          this.categories = data
          console.log(this.categories);

        })
      }



      // filter by categories

      searchByCategory(category){

        let selectedCategory ;
        let filteredData = []
         this.categories.forEach(e => {
          if(e.name === category.value){
            selectedCategory = e
          }
        });

        this.allNews.forEach(element => {
          if(element.sourceID === selectedCategory.id ){
            filteredData.push(element)
          }
        });
        this.displayNews = filteredData
        console.log(this.displayNews);

      }
      search(event,term){


        if(event.keyCode === 13){

          let text = term.value.toLowerCase()
          let result=[];
          let article;
          this.allNews.forEach(element => {
            article = new News(element.sourceID,element.id,element.title,element.description,element.content,element.publishedAt,element.urlToImage,element.ShowOnHomePage)

            if (article.title.toLowerCase().includes(text)){
             result.push(article)
            }
          });
          this.displayNews= result



        }
      }

      searchByName(term){
        let text = term.value.toLowerCase()
        let result=[];
        let article;
        this.allNews.forEach(element => {
          article = new News(element.sourceID,element.id,element.title,element.description,element.content,element.publishedAt,element.urlToImage,element.ShowOnHomePage)

          if (article.title.toLowerCase().includes(text)){
           result.push(article)
          }
        });
        this.displayNews= result







      }

        // this.allNews.forEach(element => {
        //   if(element.title.toLowerCase() === result ){
        //     console.log(element);

        //   }
        // });


}
