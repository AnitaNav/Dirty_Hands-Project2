const Plant = require('../models/plant');

module.exports = {
    index,
    new: newPlant
};

function newPlant(req, res) {
    res.render('plants/new', {title: 'New Plants'});
}

function index(req, res) {
    Plant.find({}, function(err, plants){
        res.render('plants/index', { title: 'Dashboard', plants });
    });
}