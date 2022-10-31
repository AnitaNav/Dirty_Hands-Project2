const Plant = require('../models/plant');

module.exports = {
    index,
    new: newPlant,
    create
};

function create (req, res) {
    const plant = new Plant(req.body);
    plant.save(function(err) {
        if (err) return res.redirect('/plants/new');
        res.redirect('/plants/new');
    });
    }

function newPlant(req, res) {
    res.render('plants/new', {title: 'New Plants'});
}

function index(req, res) {
    Plant.find({}, function(err, plants){
        res.render('plants/index', { title: 'Dashboard', plants });
    });
}