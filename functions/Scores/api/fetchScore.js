const { Endpoint, RequestType } = require('firebase-backend');
const { db } = require('../../config/firebase').default;

module.exports = (req, res, next) => {
	const { game } = req.query;
	try {
		db.collection(game)
			.get()
			.then((value) => {
				const allEntries = [];
				value.forEach((doc) => allEntries.push(doc.data()));
				res.status(200).json(allEntries);
			})
			.catch((error) => next(error));
	} catch (error) {
		next(error);
	}
};
