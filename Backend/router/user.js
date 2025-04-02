const express = require("express");
const {getUser, userRegister, getOneUser, deleteUser, updateUser, userLogin} = require('../controller/Users');
const {getUserTorguulis, createTorguuli} = require("../controller/torguuli")
const {getUserZahialga, createZahialga} = require("../controller/zahialga");
const {getUserZeels, createZeel} = require("../controller/zeel");
const router = express.Router();
router.route('/').get(getUser).post(userRegister);
router.route('/:id').get(getOneUser).delete(deleteUser).put(updateUser)
//login hiih
router.route('/login').post(userLogin);
router.route("/torguuli/:userCodeId").get(getUserTorguulis).post(createTorguuli);
router.route("/zahialga/:userCodeId").get(getUserZahialga).post(createZahialga);
router.route("/zeel/:userCodeId").get(getUserZeels).post(createZeel);
module.exports = router