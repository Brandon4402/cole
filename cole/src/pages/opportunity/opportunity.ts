import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the OpportunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opportunity',
  templateUrl: 'opportunity.html',
})
export class OpportunityPage {

  opportunities: FirebaseListObservable<any[]>;
  newOpportunity = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.opportunities = this.firebaseProvider.getOpportunities();
  }

  addOpportunity() {
    this.firebaseProvider.addOpportunity(this.newOpportunity);
  }

  removeOpportunity(oid) {
    this.firebaseProvider.removeOpportunity(oid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpportunityPage');
  }

}
