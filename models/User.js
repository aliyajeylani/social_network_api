const { Schema, model } = require('mongoose');

//Schema to crete User model
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true }, 
    email: { 
        type: String, 
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"] 
    }, 
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
  },
  {
 
// Adding a virtual to include additional fields 
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//Creating a virtual property `friendCount` that retrieves the length of the user's friends array field on query
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })


// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
