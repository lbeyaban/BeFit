const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKeys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ''
});

const db = admin.firestore();

module.exports = db;
