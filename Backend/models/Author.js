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
    Aemail: {
        type: String,
        required: [true, 'Зохиолчын email-ийг оруулна уу.'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/, "Эмэйл хаяг буруу байна"]
   },
})
const newUser = new Authors({ AuthorFname: "hello", AuthorLname:"myname" ,AuthorPhone: "80786009",  Aemail: "john@example.com" });
newUser.save().then(() => console.log("User хадгалагдлаа"));
module.exports = mongoose.model("Authors", AuthorSchema)