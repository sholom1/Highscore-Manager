const { FunctionParser } = require('firebase-backend');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }));
app.use('/', require('./Scores/api'));
exports.scores = functions.https.onRequest(app);
