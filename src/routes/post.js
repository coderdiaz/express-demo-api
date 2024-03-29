const express = require('express');
const router = express.Router();
const models = require('../../models');

// GET /
router.get('/', async (req, res) => {
  const posts = await models.Post.findAll();
  return res
    .status(200)
    .json({
      data: posts,
    });
});

// GET /:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const post = await models.Post.findOne({ where: { id } });
  if (!post) {
    return res.status(404).json({
      code: 404,
      message: "Post not found"
    })
  }
  return res.status(200).json(post);
});

// POST /
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  await models.Post.create({ title, content });
  return res
    .status(201)
    .json();
});

// PUT /:id
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  await models.Post.update({ title, content });
  return res
    .status(204)
    .json();
});

// DELETE /:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await models.Post.destroy({ where: { id }});
  return res
    .status(204)
    .json();
});

module.exports = router;
