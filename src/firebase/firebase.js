import * as firebase from 'firebase';
import {prodConfig, devConfig } from '../config/firebaseconfig'


const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const fs = firebase.firestore();

export {
  db,
  auth,
  fs,
};
