import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NewsService } from '../../../providers/news.service'
import { News } from '../news.model'

@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.scss']
})
export class AllnewsComponent implements OnInit {

  activePage: number = 0;
  paginationData: any;

  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber
  }
  p
  allNews: any = []
  anArticle;
  categories: any = [];
  displayNews: any = [];
  filterNews: any = []
  favorite: boolean = false
  share: boolean = false





  constructor(private news: NewsService) { }

  ngOnInit(): void {
    this.getNews()
    this.getCategories()
  }

  getNews() {
    this.news.getAllnews().subscribe(data => {
      this.allNews = data
      this.allNews.forEach(e => {
        this.anArticle = new News(e.sourceID, e.id, e.title, e.description, e.content, e.publishedAt, e.urlToImage, e.ShowOnHomePage)
        this.displayNews.push(this.anArticle)
        this.filterNews.push(this.anArticle)

      });

      this.displayNews.sort(this.sortFunction);
    })




  }

  sortFunction(a, b) {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA < dateB ? 1 : -1;
  };

  sortBynameAtoZ(a,b){
    var dateA = a.title;
    var dateB = b.title;
    return dateA > dateB ? 1 : -1;
  }
  sortBynameZtoA(a,b){
    var dateA = a.title;
    var dateB = b.title;
    return dateA < dateB ? 1 : -1;
  }

  sortAsc(){
    this.displayNews.sort(this.sortBynameAtoZ)
  }

  sortDesc(){
    this.displayNews.sort(this.sortBynameZtoA)
  }



  showSocial(e) {
    if (e.target.nextSibling.style.display == "none") {
      e.target.nextSibling.style.display = "flex"
    } else if (e.target.nextSibling.style.display == "flex") {
      e.target.nextSibling.style.display = "none"
    }

  }

  unfav(e) {
    e.target.style.display = "none";
    e.target.previousSibling.style.display = "inline";
  }

  fav(e) {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "inline";
  }

  getCategories() {
    this.news.getAllCategories().subscribe(data => {
      this.categories = data

    })
  }



  // filter by categories

  searchByCategory(category) {
    let selectedCategory;
    let filteredData = []
    this.categories.forEach(e => {
      if (e.name === category.value) {
        selectedCategory = e
      }
    });
    this.filterNews.forEach(element => {
      if (element.categoryId === selectedCategory.id) {
        filteredData.push(element)
      }
    });
    this.displayNews = filteredData
  }



  // filter by name

  search(event, term) {
    if (event.keyCode === 13) {
      let text = term.value.toLowerCase()
      let result = [];
      let article;
      this.allNews.forEach(element => {
        article = new News(element.sourceID, element.id, element.title, element.description, element.content, element.publishedAt, element.urlToImage, element.ShowOnHomePage)

        if (article.title.toLowerCase().includes(text)) {
          result.push(article)
        }
      });
      this.displayNews = result
    }
  }

  searchByName(term) {
    let text = term.value.toLowerCase()
    let result = [];
    let article;
    this.allNews.forEach(element => {
      article = new News(element.sourceID, element.id, element.title, element.description, element.content, element.publishedAt, element.urlToImage, element.ShowOnHomePage)

      if (article.title.toLowerCase().includes(text)) {
        result.push(article)
      }
    });
    this.displayNews = result
  }




}
