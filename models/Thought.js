const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

//Schema to crete User model
const thoughtSchema = new Schema(
  {
    thoughtText: { 
        type: String, 
        required: true, 
        minLength: 1, 
        maxLength: 280 
    }, 
    createdAt: { 
        type: Date, 
        default: Date.now
    },
    username: { 
        type: String, 
        required: true
    },
    reactions: [Reaction],
    }, 
{
 
// Adding a virtual to include additional fields 
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Creating a virtual property `reactionCount` that retrieves the length of the thought's reactions array field on query
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })


// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
