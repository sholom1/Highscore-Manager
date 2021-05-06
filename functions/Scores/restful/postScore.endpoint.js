const { Endpoint, RequestType } = require('firebase-backend');
const { db } = require('../../config/firebase');

exports.default = new Endpoint('postScore', RequestType.POST, (req, res) => {
	const { game, playerName, score } = req.body;
	try {
		const entry = db.collection(game).doc();
		entry.set({
			id: entry.id,
			playerName,
			score,
		});
		res.status(201).send({
			status: 'success',
			message: 'score added successfully',
			data: entry,
		});
	} catch (error) {
		res.status(500).json(error.message);
	}
});
