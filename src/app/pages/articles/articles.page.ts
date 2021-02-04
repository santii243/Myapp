import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  articles: any[];

  constructor() { }

  ngOnInit() {
    this.articles = [{id: 1, name: 'Articulo 1'}, {id: 2, name: 'Articulo 2'}];
  }

}
