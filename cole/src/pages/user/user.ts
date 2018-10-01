import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  users: FirebaseListObservable<any[]>;
  newUser = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.users = this.firebaseProvider.getUsers();
  }

  addUser() {
    this.firebaseProvider.addUser(this.newUser);
  }

  removeUser(uid) {
    this.firebaseProvider.removeUser(uid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
