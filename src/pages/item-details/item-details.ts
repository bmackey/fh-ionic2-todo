import { Component } from '@angular/core';

import { Platform, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  tabBarElement: any;
  iosDevice: any;
  public event = {
  	allDay: false,
    date: '2017-03-24',
    timeStarts: '09:00',
    timeEnds: '17:00'
  }

  constructor(public platform: Platform, 
	  	public navCtrl: NavController, 
	  	public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
			this.selectedItem = navParams.get('item');
			this.tabBarElement = document.querySelector('.tabbar');

			if (this.platform.is('ios')) {
		  		this.iosDevice = true;
			}
	}

  
   ionViewWillEnter() 
    {	
		if(this.iosDevice) {
		    this.tabBarElement.style.display = 'none';
		}
    }

    ionViewWillLeave()
    {
		if(this.iosDevice) {
		    this.tabBarElement.style.display = 'flex';
		}
    }
}

