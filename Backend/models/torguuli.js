const mongoose = require("mongoose")
const TorguuliSchema = new mongoose.Schema({
    userCode:{
        type:mongoose.Schema.ObjectId,
        ref: 't2.users',
    },
    zeelCode:{
        type:mongoose.Schema.ObjectId,
        ref: 't2.zeels',
    },
    tailbar: {
        type: String,
        required: [true, 'Торгуулийн тайлбарыг оруулна уу'],
        trim: true,
    },
    sanchCode:{
        type:mongoose.Schema.ObjectId,
        ref: 't2.nomsanches',
    },
    dun:{
        type: Number,
        min: [5000, 'hamgiin bagada 5000 baina'],
        max: [100000, 'hamgin ihdee 100000 baina'],
        required:[true, 'Torguulin hemjeeg oruul']
    },
    tulsun:{
        type: Boolean,
        defualt: false
    },
});
module.exports = mongoose.model('Torguuli', TorguuliSchema);