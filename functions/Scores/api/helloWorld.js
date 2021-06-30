const { Request, Response } = require('express');
const { Endpoint, RequestType } = require('firebase-backend');

exports.default = new Endpoint('helloWorld', RequestType.GET, (req, res) => {
	return res.send('Hello World!');
});
