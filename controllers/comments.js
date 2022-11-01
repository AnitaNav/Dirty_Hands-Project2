const Plant = require('../models/plant');

module.exports ={
    create
};

function create(req, res) {
    Plant.findById(req.params.id, function(err, plant) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        plant.comments.push(req.body);
    plant.save(function(err) {
        res.redirect(`/plants/${plant._id}`);
    });
  });
}