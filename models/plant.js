const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
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
        
    }, 
    soil: {
        type: String,
        enum: ['Yes', 'No'],
        required: true,
      },
    
      water: {
        type: String,
        enum: ['Regularly', 'Occassionally'],
        required: true
      },
      
      fertilizer: {
        type: String,
        enum: ['Yes', 'No'],
        required: true
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      userName: {
        type: String
      },
      comments: [commentSchema]
    },
 {
    timestamps: true
});
module.exports = mongoose.model('Plant', plantSchema);