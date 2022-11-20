const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homebaseSchema = new Schema ({
    section_type: { type: String, required: true},
    title_head: { type: String, required: true },
    title_sub: { type: String, required: true },
    base_image: { type: String, require: false },
    base_link: { type: String, requried: false },
    base_title: { type: String, requred: false },
    base_subtitle: { type: String, required: false },
    base_cont: [{ type: String, required: false }]
})

const HomeBaseModel = mongoose.model('homebaseinfo', homebaseSchema);

module.exports= HomeBaseModel;