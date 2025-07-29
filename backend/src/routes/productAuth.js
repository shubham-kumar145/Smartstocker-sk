const express = require('express');
const {addProduct,deleteproduct, getAllProduct, updateProductDetails, getProductByid} = require('../controllers/productAuthent');
const staffMiddleware = require('../middleware/staffMiddleware');
const userMiddleware = require('../middleware/userMiddleware');

const productRouter = express.Router();
console.log("99");

productRouter.get('/allproduct',userMiddleware,getAllProduct)
productRouter.post('/admin/addproduct',staffMiddleware,addProduct)
productRouter.delete('/staff/deleteproduct/:id',staffMiddleware,deleteproduct)
productRouter.put('/update-product-details/:id',staffMiddleware,updateProductDetails)
productRouter.get('/get-product-of/:id',userMiddleware,getProductByid)


module.exports = productRouter