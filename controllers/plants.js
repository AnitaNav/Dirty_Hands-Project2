const Plant = require('../models/plant');

module.exports = {
    index
};

function index(req, res) {
    Plant.find({}, function(err, plants){
        res.render('plants/index', { title: 'Dashboard', plants });
    });
}