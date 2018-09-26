const firebase = require('firebase-admin');
/*
Uncommment and replace with your credentials to use FireBase
const dbConfig = require('../../config/config').firebase;

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: dbConfig.projectId,
    clientEmail: dbConfig.clientEmail,
    privateKey: dbConfig.privateKey
  }),
  databaseURL: `https://${dbConfig.databaseURL}.firebaseio.com`
});
*/
module.exports = firebase;
