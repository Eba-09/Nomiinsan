const mongoose = require("mongoose")
const ZeelSchema = new mongoose.Schema({
    nomCode:{
            type: mongoose.Schema.ObjectId,
            ref: 't2.books', //reference buyu zaagch torol
            required: true,
        },
    userCode:{
        type: mongoose.Schema.ObjectId,
        ref: 't2.users', //reference buyu zaagch torol
        required: true
    },
    sanchCode:{
        type: mongoose.Schema.ObjectId,
        ref: 't2.nomsanches', //reference buyu zaagch torol
        required: true
    },
    zeelsenDate: {
        type: Date,
        required: [true, 'Ном авсан хугацааг оруулна уу'],
    },
    butsaasnDate: {
        type: Date,
        required: [true, 'Буцааж өгөх хугацааг оруулна уу'],
    },
    hugatsaaHetreh:{
        type: Boolean,
        defualt: false
    },
});

module.exports = mongoose.model('Zeels', ZeelSchema);
   
