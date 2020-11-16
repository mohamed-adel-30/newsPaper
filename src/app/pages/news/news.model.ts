export class News {
  public categoryId:string;
  public id:string;
  public title:string;
  public desc:string;
  public content:string;
  public date:any;
  public img:string
  public showOnHomePage:boolean;
  public formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }


  constructor(sourceId:string,id:string,title:string,desc:string,content:string,date:any, image:string, showOnHomePage:boolean){
    this.categoryId=sourceId;
    this.id=id;
    this.title=title;
    this.desc=desc;
    this.content=content;
    this.date=this.formatDate(date);
    this.img=image;
    this.showOnHomePage=showOnHomePage;

  }
}
