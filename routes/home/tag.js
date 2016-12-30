const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
	res.render('home/tag.ejs',{title: '标签'});
});

module.exports = router;