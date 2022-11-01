const Plant = require('../models/plant');

module.exports ={
    create,
    delete: deleteComment
};

function deleteComment(req, res, next) {
    Plant.findOne({
      'reviews._id': req.params.id, 
      'reviews.user': req.user._id
    }).then(function(plant) {
      if (!plant) return res.redirect('/plants');
      plant.comments.remove(req.params.id);
      plant.save().then(function() {
        res.redirect(`/plants/${plant._id}`);
      }).catch(function(err){
        return next(err);
      });
    });
  }

function create(req, res) {
  req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
    Plant.findById(req.params.id, function(err, plant) {
        plant.comments.push(req.body);
    plant.save(function(err) {
        res.redirect(`/plants/${plant._id}`);
    });
  });
}