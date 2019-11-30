const express = require('express');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
  return res
    .status(200)
    .json({
      data: [],
    });
});

// GET /:id
router.get('/:id', (req, res) => {
  return res
    .status(200)
    .json({});
});

// POST /
router.post('/', (req, res) => {
  return res
    .status(201)
    .json();
});

// PUT /:id
router.put('/:id', (req, res) => {
  return res
    .status(200)
    .json();
});

// DELETE /:id
router.delete('/:id', (req, res) => {
  return res
    .status(200)
    .json();
});

module.exports = router;
