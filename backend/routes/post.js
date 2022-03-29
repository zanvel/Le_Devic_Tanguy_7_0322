const router = require('express').Router();
const postCtrl = require('../controllers/post');
const commentCtrl = require('../controllers/comments');
const multer = require('../middlewares/multer');
const auth = require('../middlewares/auth');

//routes pour le CRUD des posts

router.get('/',auth,postCtrl.getAllPosts);
router.get('/:id',auth, postCtrl.getOnePost);
router.post('/' ,auth, multer, postCtrl.createPost);
router.put('/:id',auth, multer, postCtrl.updatePost);
router.delete('/:id',auth, postCtrl.deletePost);

//routes pour les commentaires

router.get('/:id/comments',auth, commentCtrl.getComments);
router.post('/:id/comments',auth, commentCtrl.createComment);

module.exports = router;
