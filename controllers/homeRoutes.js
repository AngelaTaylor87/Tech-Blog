const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    
    res.render('homepage', {
     
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
const postData = Post.findByPk(req.params.id, {
  include: [
    {
      model: User,
      attributes: ['name'],
    },
    {
      model: Comment,
      attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['name']
      }
    },
  ],
});

    const post = postData.get({ plain: true });
    res.render('single-post', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('signup');
});

router.get('/post', (req, res) => {
  res.render('post')
})

module.exports = router;