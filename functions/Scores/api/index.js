const router = require('express').Router();

//Mount routes;
router.get('/fetchScores', require('./fetchScore'));
router.post('/postScore', require('./postScore'));

router.use((req, res, next) => {
	const error = new Error('Not found!');
	error.status = 404;
	next(error);
});

module.exports = router;
