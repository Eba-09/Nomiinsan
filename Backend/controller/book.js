const Book = require("../models/book")
const Error = require("../middleware/error")
const asyncHandler = require("../middleware/asyncHandler");
const Category = require("../models/Category");
const Author = require("../models/Author");
//buh nom harah
exports.getBooks = asyncHandler(async(req, res, next)=>{
    const books = await Book.find()
    res.status(200).json({
        success: true,
        count: books.length,
        data: books,
    })
})
//1 categort baiga buh nom
exports.getCategoryBooks= asyncHandler(async(req, res, next)=>{
    let books;
    if(req.params.categoryIdId === '675066c09a6c150358456885')
        books = await Book.find().populate('authorId')
    else
    books = await Book.find({categoryId: req.params.categoryIdId}).populate('authorId');
    res.status(200).json({
        success: true,
        count: books.length,
        data: books,
    })
}) 
//1 zohiolcin bicsen buh nomiig haruulah
exports.getAuthorBooks = asyncHandler(async(req,res,next)=>{
    let books;
        books = await Book.find({authorId: req.params.authorIdId})
    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    })
})
//1 nom id gaar 
exports.getBook = asyncHandler(async(req,res,next)=>{
    const book = await Book.findById(req.params.id)
        if(!book){
            throw new Error(req.params.id + 'ID tai nom baihgui baina',400)
        }
    res.status(200).json({
        success: true,
        data: book
    })
})
//1nom medeelel uusgeh
exports.createBook = asyncHandler(async(req,res,next)=>{
    // const category = await Category.findById(req.params.categoryIdId)
    //     if(!category){
    //         throw new Error(req.params.categoryIdId + 'ID tai category baihgui baina',404);
    //     }
    const book = await Book.create(req.body)
    res.status(200).json({
        success: true,
        data: book
    })
})
// 1 nom medeelel uurcluh
exports.updateBook = asyncHandler(async(req,res,next)=>{
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
    if(!book){
        throw new Error(req.params.id + 'ID tai nom baihgui baina.',400)
    }
    res.status(200).json({
        success: true,
        data: book
    })
})
//1nom ustgah 
exports.deleteBook = asyncHandler(async(req,res,next)=>{
    const book = await Book.findById(req.params.id)
        if(!book){
            throw new Error(req.params.id + 'ID tai nom baihgui baina',400)
        }
        res.status(200).json({
            success: true,
            data: book
        })
})
