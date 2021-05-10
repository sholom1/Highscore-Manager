const { Endpoint, RequestType } = require('firebase-backend');
const { db } = require('../../config/firebase').default;

exports.default = new Endpoint('fetchScores', RequestType.GET, (req, res) => {
	const { game } = req.query;
	try {
		db.collection(game)
			.get()
			.then(
				(value) => {
					const allEntries = [];
					value.forEach((doc) => allEntries.push(doc.data()));
					res.status(200).json(allEntries);
				},
				(error) => res.status(500).json(error.message)
			);
	} catch (error) {
		res.status(500).json(error.message);
	}
});
