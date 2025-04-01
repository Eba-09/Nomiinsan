const User = require ('../models/user.js')
const MyError = require ('../middleware/error.js')
const asyncHandler = require ('../middleware/asyncHandler.js')

//buh hereglegcdyg harah
exports.getUser = asyncHandler(async (req,res,next) =>{
    const user = await User.find()
    res.status(200).json({
        success: true,
        count: user.length,
        user: user,
    })
})
// hereglegch burtgeh
exports.register = asyncHandler(async(req, res, next)=>{
    const user = await User.create(req.body)
    //const token = user.getJsonWebToken()
    res.status(200).json({
        success: true,
        //token: token,
        data: user
    })
})
// hereglegch newtreh 
exports.login = asyncHandler(async(req, res, next)=>{
    const {email, password} = req.body
    //shalgana
    if (!email || !password){
        throw new MyError("gmail bolon nuuts ugee oruulna uu", 400)
    }
    //tuhain hereglegchiig haina
    const user = await User.findOne({email: email})
    if(user){
        const pass = await User.findOne({password: password})
        if(pass){
            res.status(200).json("Success")
        }
        else{
            res.status(200).json("password buruu")
        }
    }
    else{
        res.status(200).json("Burtguulegui baina")
    }
})
//1 hereglegch haruulah
exports.getOneUser = asyncHandler(async (req,res,next)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        throw new MyError(req.params.id + 'ID tai hereglegch baihgui baina')
    }
    res.status(200).json({
        success: true,
        user: user,
    })
})
//1 hereglegchin medeelel ustgah
exports.deleteUser = asyncHandler(async (req,res,next)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user){
        throw new MyError(req.params.id + 'ID tai hereglegch baihgui baina.', 400)
    }
    res.status(200).json({
        success: true,
        user: user,
    })
})
//1 hereglegchin medeelel zasah
exports.updateUser = asyncHandler(async(req,res,next)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{
        new: true, 
        runValidators: true
    })
    if(!user) {
        throw new MyError(req.params.id + 'ID tai hereglegch baihgui', 400)
    }
    res.status(200).json({
        success: true, 
        user: user,
    })
})