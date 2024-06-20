const mongoose=require('mongoose');
const { Schema } = mongoose;

const signupSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;