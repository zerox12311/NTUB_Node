var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // res.send('respond with a resource');
  let result = await db.Blog.findAll({});
  res.send(result);
});

router.post('/', async (req, res, next) => {
  let result = await db.Blog.create({
    title: req.body.title,
    content: req.body.content,
    remark: req.body.remark,
  });
  res.send(result);
});

module.exports = router;
