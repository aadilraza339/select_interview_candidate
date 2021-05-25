const express = require('express');
const userControllers = require('../Controllers/users.controllers');
const router = express.Router();

router.post('/insertCan', userControllers.inser_candidat);

router.post('/insertScore', userControllers.inser_score);

router.get('/Score', userControllers.get_score);


module.exports = router
  