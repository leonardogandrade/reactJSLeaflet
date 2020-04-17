const mongoose = require('mongoose');

const mapSchema = mongoose.Schema({
    local : String,
    lat : String,
    lon : String
},{
    timestamps : true
});

module.exports = mongoose.model('Map',mapSchema);