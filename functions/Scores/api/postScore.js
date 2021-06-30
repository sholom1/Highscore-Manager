const { Endpoint, RequestType } = require('firebase-backend');
const { db } = require('../../config/firebase').default;

module.exports = (req, res, next) => {
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
				(error) => next(error)
			)
			.catch((error) => next(error));
	} catch (error) {
		next(error);
	}
};
