const mongoose = require("mongoose")
const ZahialgaSchema = new mongoose.Schema({
    nomCode:{
        type: mongoose.Schema.ObjectId,
        ref: 't2.books', //reference buyu zaagch torol
        required: true,
    },
    userCode:{
        type: mongoose.Schema.ObjectId,
        ref: 't2.users', //reference buyu zaagch torol
        required: true,
    },
    tuluw:{
        type: Boolean,
        defualt: false,
    },
    zahialgaDate: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Zahialga", ZahialgaSchema)
