const express = require("express")
const {createBook,getBooks,getBook,updateBook,deleteBook} = require("../controller/book");
const router = express.Router();
router.route("/").get(getBooks).post(createBook);
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);
module.exports = router;