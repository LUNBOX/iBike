import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import {QrPage} from "../qr/qr";
// import {MapsPage} from "../maps/maps";


/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {


  homeRoot = 'UserHomePage';
  searchRoot = 'SearchPage';
  uploadBikeDetailsRoot = 'EventListPage';
  settingsRoot = 'SettingsPage';
  myIndex:number;

  constructor(public navCtrl: NavController) {}


}


