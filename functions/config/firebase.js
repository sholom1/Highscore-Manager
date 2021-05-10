const admin = require('firebase-admin');
const functions = require('firebase-functions');
const serviceAccount = require('./highscore-manager-firebase-adminsdk-zewti-65f76c51ff.json');

const app = admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = app.firestore();
console.log(db);
exports.default = { admin, db };
