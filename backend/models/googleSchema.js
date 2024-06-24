const mongoose = require('mongoose');


const { Schema } = mongoose;

const googleSchema = new Schema({
    googleId: String,
    displayName: String,
    email: String,
    Image: String,
    },
    {
        timestamps: true
    }
);

const GoogleUser = mongoose.model("GoogleUser", googleSchema)

module.exports = GoogleUser;