const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
        type: String
    },
    variety: {
        type: String,
        enum: ['Herb', 'Shrub','Tree','Succulent','Climber','Creeper']
    },
    area: {
        type: String,
        enum: ['Indoor','Outdoor']
    },
    cycle: {
        type: String,
        enum: ['Annual','Perennial', 'Biennial']
    },

}, {
    timestamps: true
});
module.exports = mongoose.model('Plant', plantSchema);