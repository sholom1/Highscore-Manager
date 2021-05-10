const { Endpoint, RequestType } = require('firebase-backend');
const { db } = require('../../config/firebase').default;

exports.default = new Endpoint('postScore', RequestType.POST, (req, res) => {
	const { game, playerName, score } = req.query;
	try {
		const entry = db.collection(game).doc();
		entry
			.set({
				id: entry.id,
				playerName: playerName,
				score: score,
			})
			.then(
				(value) =>
					res.status(201).send({
						status: 'success',
						message: 'score added successfully',
					}),
				(error) => res.status(500).json(error.message)
			)
			.catch((error) => res.status(500).json(error.message));
	} catch (error) {
		res.status(500).json(error.message);
	}
});
