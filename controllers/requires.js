const Require = require('../models/require');
const Plant = require('../models/plant');

module.exports = {
  new: newRequirement,
    create
  };

  function create(req, res) {
    req.body.plant = req.params.id;
    Require.create(req.body, function(err, require) {
        res.redirect(`/plants/${req.params.id}`);
    });
  }
  
  function newRequirement(req, res) {
    res.render('requires/new', {
      title: 'Requirement',
      plantId: req.params.id
  }); 
}