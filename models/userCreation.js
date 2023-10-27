require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_ACCESS_URL)

const userSetupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        lowercase: true,
        required: true
    },

    password: {
        type: String,
    },

    googleId: {
        type: String
    },

    verified: {
        type: Boolean,
        default: false
    }

})
const userStuff = mongoose.model('userInfo', userSetupSchema)
module.exports = userStuff
