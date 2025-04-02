const express = require("express");
const {getSanchud, getSanch, sanchRegister,sanchLogin, deleteSanch, updateSanch} = require('../controller/nomiinSanch')
const router = express.Router();
router.route('/').get(getSanchud).post(sanchRegister);
router.route('/:id').get(getSanch).delete(deleteSanch).put(updateSanch);
//login hiih
router.route('/login').post(sanchLogin);
module.exports = router