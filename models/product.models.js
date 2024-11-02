// const mongoose = require ('mongoose');
// const ProductSchema = mongoose.Schema
// (
//     {
//        Bookname:{
//          type : String,
//          required: true
//        },
//        Booktype:{
//         type: String,
//         required: true
//        },
//        author:{
//           type : String,
//           required: true
//        },
//        ratings:{
//         type :String,
//         required: true
//        },
//        covertype:{
//          type:String,
//          required: true
//        },
//        price:{
//         type: String,
//         required: true
//       },
//       image:{
//        type: String,
//        required: true
//       },
//       stockQuantity:{
//        type:String,
//        required: true
//       },
//       Deliverytype:{
//         type: String,
//         required: true
//       },
//       Discount:{
//         type:String,
//         required: true
//       },
//       Description:{
//         type: String,
//         required: true
//       }
//     }
// );
// const Product = mongoose.model("Product",ProductSchema);
// module.exports = Product;const mongoose = require('mongoose');
const mongoose = require ('mongoose');
const ProductSchema = mongoose.Schema({
    Bookname: {
        type: String,
        required: true
    },
    Booktype: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    },
    covertype: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: String,
        required: true
    },
    Deliverytype: {
        type: String,
        required: true
    },
    Discount: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
