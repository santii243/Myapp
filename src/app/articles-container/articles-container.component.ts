import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.scss'],
})
export class ArticlesContainerComponent implements OnInit {

  articles = [
    {
      id: 2, name: 'Articulo 1'
    },
    {
      id: 2, name: 'Articulo 2'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
