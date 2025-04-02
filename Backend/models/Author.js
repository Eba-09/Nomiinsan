const mongoose = require('mongoose')
const AuthorSchema = new mongoose.Schema({
    AuthorFname: {
        type: String,
        required: [true, 'Зохиолчийн нэрийг оруулна уу'],
    },
    AuthorLname: {
        type: String,
        required: [true, 'Зохиолчийн овгийг оруулна уy'],
    },
    AuthorPhone: {
        type: Number,
        required: [true, 'Зохиолчийн утасны дугаарыг оруулна уу'],
        
    },
})
module.exports = mongoose.model("Authors", AuthorSchema)