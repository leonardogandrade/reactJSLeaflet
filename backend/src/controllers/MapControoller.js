const mongoose = require('mongoose');
const Map = mongoose.model('Map');

module.exports = {
    async store(req,res){
        const payload = await Map.create(req.body);
        return res.json(payload);
    },
    async listAll(req,res){
        const response = await Map.find();
        res.json(response);
    }

}