const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const portfolioSchema = new Schema ({
    section_type: { type: String, required: true},
    title_head: { type: String, required: true },
    title_sub: { type: String, required: true },
    base_image: [{ type: String, require: false }],
    base_link: { type: String, requried: false },
    base_title: { type: String, requred: false },
    base_subtitle: { type: String, required: false },
    base_cont: [{ type: Array, required: false }]
})

const PortfolioModel = mongoose.model('portfolio', portfolioSchema);

module.exports= PortfolioModel;