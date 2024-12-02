import mongoose from "mongoose";


/**
 * User model
 * @module models/user
 * @requires mongoose
 * @exports UserModel
 * @type {Object}
 * @property {string} name - The name of the user.
 * @property {string} password - The password of the user.
 * @property {Array} favorites - The list of favorite plants of the user.
 * 
 */
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant'
    }]
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;