const Sanch = require("../models/nomiinsanch")
const Error = require("../middleware/error")
const asyncHandler = require("../middleware/asyncHandler")

exports.getSanchud = asyncHandler(async(req,res,next)=>{
    const sanchud = await Sanch.find()
    res.status(200).json({
        success: true,
        count: sanchud.length,
        data: sanchud
    })
})
// sanch burtgeh
exports.register = asyncHandler(async(req, res, next)=>{
    const sanch = await Sanch.create(req.body)
    //const token = sanch.getJsonWebToken();
    res.status(200).json({
        success: true,
        //token: token,
        data: sanch,
    })
})
// sanch newtreh 
exports.login = asyncHandler(async(req, res, next)=>{
    const {sanchMail, sanchPassword} = req.body
    //shalgana
    if (!sanchMail || !sanchPassword){
        throw new Error("gmail bolon nuuts ugee oruulna uu", 400)
    }
    //tuhain hereglegchiig haina
    const sanch = await Sanch.findOne({sanchMail: sanchMail})
    
        if(sanch){
            const pass = await Sanch.findOne({sanchPassword})
            if(pass){
                
                res.status(200).json("Success")
            }
            else{
                res.status(200).json("Email or password buruu baina")
            }
        }
        else{
            res.status(200).json("Burtguulegui baina")
        }
    //const pass = await sanch.checkPassword(sanchPassword)
    // if(!pass) {
    //     throw new Error("gmail bolon nuuts ugee zuw oruulna uu", 401)
    // }
    // res.status(200).json({
    //     success: true,
    //     //token: sanch.getJsonWebToken(),
    //     data: sanch
    // })
})

//1sanch haruulah
exports.getSanch = asyncHandler(async(req,res,next)=>{
    const sanch = await Sanch.findById(req.params.id)
    if(!sanch){
        throw new Error(req.params.id + 'ID tai sanch baihgui baina',400)
    }
    res.status(200).json({
        success: true,
        data: sanch,
    })
})


//sanch ustgah
exports.deleteSanch = asyncHandler(async(req,res,next)=>{
    const sanch = await Sanch.findByIdAndDelete(req.params.id)
        if(!sanch){
            throw new Error(req.params.id + 'Id tai sanch baihgui baina.',400)
        }
        res.status(200).json({
            success: true,
            data: sanch
        })
})

//sanch Update
exports.updateSanch = asyncHandler(async(req,res,next)=>{
    const sanch = await Sanch.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
            runValidators: true,
        })
    if(!sanch){
        throw new Error(req.params.id + 'ID tai sanch baihgui baina')
    }
    res.status(200).json({
        success: true,
        data: sanch
    })
})