import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-applieds',
  templateUrl: './my-applieds.page.html',
  styleUrls: ['./my-applieds.page.scss'],
})
export class MyAppliedsPage implements OnInit {

  applieds: any[];

  constructor() { }

  ngOnInit() {
    this.applieds = [{id: 1, name: 'Applied 1'}, {id: 2, name: 'Applied 2'}];
  }

}
