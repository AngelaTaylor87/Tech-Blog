const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
//const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./api/commentRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;