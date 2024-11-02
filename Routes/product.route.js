const express = require('express');
const product = require("../models/product.models.js");
const router = express.Router();
const {getproducts,getproduct,Createproduct,Updateproduct,deleteproduct} = require("../controllers/product.controller.js");
//get product
router.get('/',getproducts);
router.get('/:id', getproduct);


//post product
router.post("/", Createproduct);

//put product
router.put("/:id", Updateproduct);


//delete product
router.delete("/:id", deleteproduct);

module.exports=router;