const admin=require("../controllers/admin");
const express=require('express');
const router=express.Router();
router.post('/add',admin.add);
router.post('/login',admin.login);
module.exports=router;
