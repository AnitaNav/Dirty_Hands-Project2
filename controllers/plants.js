const Plant = require('../models/plant');

module.exports = {
    index,
    show,
    new: newPlant,
    create,
    update,
    edit
};

function edit(req, res) {
    Plant.findOne({_id: req.params.id}, function(err, plant) {
      if (err || !plant) return res.redirect(`/plants/${req.params.id}`);
      res.render('plants/edit', {plant, title:"edit plant"});
    });
  }

function update(req, res) {
    console.log(req.params.id);
    Plant.findOneAndUpdate(
      {_id: req.params.id, userId: req.user._id},
      req.body,
      {new: true},
      function(err, plant) {
        console.log(err);
        if (err || !plant) return res.redirect('/plants');
        res.redirect(`/plants/${plant._id}`);
      }
    );
  }

function index(req, res) {
    Plant.find({}, function(err, plants){
        res.render('plants/index', { title: 'Dashboard', plants });
    });
}

function show(req, res) {
    Plant.findById(req.params.id, function(err, plant){
        res.render('plants/show', {title: 'Gardening Tips', plant});
    });

}

function newPlant(req, res) {
    res.render('plants/new', {title: 'New Plants'});
}

function create (req, res) {
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
    const plant = new Plant(req.body);
    plant.save(function(err) {
        if (err) return res.redirect('/plants/new');
        res.redirect('/plants');
    });
    }



