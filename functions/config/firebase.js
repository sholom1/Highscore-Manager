const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp({
	databaseURL: 'https://highscore-manager.firebaseio.com',
});

const db = admin.firestore();
exports.default = { admin, db };
