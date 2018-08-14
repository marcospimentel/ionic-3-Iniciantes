import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUser:string = "Marcos Levi";	


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public soma(n1:number,n2:number){
  		alert(n1 + n2);	
  }

  ionViewDidLoad() {
   
  }

}
