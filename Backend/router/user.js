const express = require("express");
const {getUser, userRegister, getOneUser, deleteUser, updateUser, userLogin} = require('../controller/Users');
const { protect } = require("../middleware/authMiddleware");
const {getUserTorguulis, createTorguuli} = require("../controller/torguuli")
const {getUserZahialga, createZahialga} = require("../controller/zahialga");
const {getUserZeels} = require("../controller/zeel");
const router = express.Router();
router.route('/').get(getUser).post(userRegister);
router.route('/:id').delete(deleteUser).put(updateUser)
router.get("/me", protect, getOneUser); // токеноор хамгаалсан route
//login hiih
router.route('/login').post(userLogin);
router.route("/torguuli/:userCodeId").get(getUserTorguulis).post(createTorguuli);
router.route("/zahialga/:userCodeId").get(getUserZahialga).post(createZahialga);
router.route("/zeel/:userCodeId").get(getUserZeels);
module.exports = router