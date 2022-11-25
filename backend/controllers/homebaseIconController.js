const HomeBaseIconModel = require('../models/homebaseIconModel');

const getHomeBaseIconInfo = async (req, res) => {

    const homebaseiconinfo = await HomeBaseIconModel.find({})
    if (!homebaseiconinfo){
        return res.status(404).json({err:'no such homebaseinfo'})
    }
    console.log(homebaseiconinfo, 'homebaseiconinfo')
    res.status(200).json(homebaseiconinfo)

}

module.exports = { getHomeBaseIconInfo };