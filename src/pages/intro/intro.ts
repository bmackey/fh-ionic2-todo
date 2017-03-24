import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { TabsPage } from '../tabs/tabs';
 
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
 
  sliderOptions: any;
  iosDevice: any;
 
  constructor(public platform: Platform,
    public navCtrl: NavController) {
       if (this.platform.is('ios')) {
      this.iosDevice = true;

    }else {
      this.iosDevice = false;
    }
    this.sliderOptions = {
      pager: true
    };
 
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
 
  goToHome(){
    if(this.iosDevice){
      this.navCtrl.setRoot(TabsPage);
    }else {
      this.navCtrl.setRoot(DashboardPage);  
    }
    
  }
 
}