const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('function.html');
});


module.exports = router;