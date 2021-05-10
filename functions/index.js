const { FunctionParser } = require('firebase-backend');
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
app.use(new FunctionParser(__dirname, exports).exports);
exports = functions.https.onRequest(app);
