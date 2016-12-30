const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
	res.render('home/archive.ejs',{title: '归档'});
});

module.exports = router;