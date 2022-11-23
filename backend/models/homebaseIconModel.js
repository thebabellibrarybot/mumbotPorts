const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homebarSchema = new Schema ({
    icon_title: { type: String, required: true},
    icon_url: { type: String, required: true },
    icon_message: { type: String, required: true }
})

const HomeBaseIconModel = mongoose.model('homebaricons', homebarSchema);

module.exports= HomeBaseIconModel;