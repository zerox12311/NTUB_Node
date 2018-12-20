var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // res.send('respond with a resource');
  let result = await db.Blog.findAll({});
  res.send(result);
});


router.get('/:id', async function (req, res, next) {
  // res.send('respond with a resource');
  console.log(req.params.id);
  let result = await db.Blog.findById(req.params.id);
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

router.put('/:id', async (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  let result = await db.Blog.update(
    {
      title: req.body.title,
      content: req.body.content,
      remark: req.body.remark,
    }, {
      where: {
        id: req.params.id
      }
    }
  );

  res.send(result);
});

router.delete('/:id', async (req, res, next) => {
  let result = await db.Blog.destroy({
    where: {
      id: req.params.id
    }
  });
  res.send(result.toString());
});

module.exports = router;
