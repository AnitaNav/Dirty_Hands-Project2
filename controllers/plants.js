const Plant = require('../models/plant');

module.exports = {
    index,
    show,
    new: newPlant,
    create,
};

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
    const plant = new Plant(req.body);
    plant.save(function(err) {
        if (err) return res.redirect('/plants/new');
        res.redirect('/plants');
    });
    }



