const router = require('express').Router();
const models = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {

      const postData = await models.Post.findAll({
        order: [['date_created', 'ASC']],
      });
      
  
        const posts = postData.map((post) => post.get({ plain: true }));
  
        res.render('homepage', {
          posts, 
        });
      
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    if(req.session.logged_in){
      return res.redirect('/profile');
    }
    res.render('login');
  });

  router.get('/profile', withAuth, async (req, res) => {
    console.log(req.session);
    const posts = await getPostByUser(req.session.user_id);
    res.render('profile', { posts, user: req.session.user_name });
  });


  module.exports = router;