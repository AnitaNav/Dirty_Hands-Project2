const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const plantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    variety: {
        type: String,
        enum: ['Herb', 'Shrub','Tree','Succulent','Climber','Creeper'],
        required: true
    },
    area: {
        type: String,
        enum: ['Indoor','Outdoor'],
        required: true
    },
    cycle: {
        type: String,
        enum: ['Annual','Perennial', 'Biennial'],
        required: true,
        comments: [commentSchema]
    },

}, {
    timestamps: true
});
module.exports = mongoose.model('Plant', plantSchema);