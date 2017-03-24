import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
	
	todo: string = "scheduled";
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, desc: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Title Item ' + i,
        desc: 'This is desc #' + i,
        note: 'this is note about item #' +i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  getItems(ev) {

  alert('to do');
  }

}
