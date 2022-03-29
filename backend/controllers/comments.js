const commentModel = require('../models/comments');
const User = require('../models/user');


module.exports.createComment = (req, res) => {
 const postId = req.params.id
    const commentItem = new commentModel({

        userId: req.user.id,
        postId: postId,
        message: req.body.message
    });
    commentItem.save()
        .then(res.status(201).json({
            message: 'Commentaire posté !'
        })).catch(error => console.log(error))
}

module.exports.getComments = (req, res) => {
    commentModel.findAll( {
        where: {
        postId: req.params.id},
        include: User
    })

        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({
            message: error
        }))
}

module.exports.deleteComment = (req, res) => {
    commentModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).json({
            message: 'Commentaire supprimé !'
        }))
        .catch(error => res.status(400).json({
            message: 'Mauvaise requête !'
        }));
}