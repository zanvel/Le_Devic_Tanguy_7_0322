const router = require('express').Router();
const commentCtrl = require('../controllers/comments');
const auth = require('../middlewares/auth');

router.delete('/:id',auth, commentCtrl.deleteComment);

module.exports = router