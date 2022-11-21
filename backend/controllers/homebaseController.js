const HomeBaseModel = require('../models/homebaseModel');

const getHomeBaseInfo = async (req, res) => {

    const { id } = req.params
    const query = {
        section_type: id
    }
    const homebaseinfo = await HomeBaseModel.find(query)
    if (!homebaseinfo){
        return res.status(404).json({err:'no such homebaseinfo'})
    }
    res.status(200).json(homebaseinfo)
}

module.exports = { getHomeBaseInfo };