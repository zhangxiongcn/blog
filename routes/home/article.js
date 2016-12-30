const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
	
	res.render('home/article.ejs',{title: "article"});
});

module.exports = router;