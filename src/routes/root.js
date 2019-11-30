const express = require('express');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
  return res
    .status(200)
    .json({ message: 'Welcome to my first Express Application' });
});

module.exports = router;
