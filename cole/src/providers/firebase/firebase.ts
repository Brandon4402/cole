import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getUsers() {
    return this.afd.list('/users/');
  }

  getOpportunities() {
    return this.afd.list('/opportunities/');
  }

  addUser(data) {
    this.afd.list('/users/').push(data)
  }

  addOpportunity(data) {
    this.afd.list('/opportunities/').push(data)
  }

  removeUser(uid) {
    this.afd.list('/users/').remove(uid);
  }

  removeOpportunity(oid) {
    this.afd.list('/opportunities/').remove(oid);
  }



}
