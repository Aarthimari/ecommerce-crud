
// const Product = require("../models/product.models")


// const getproducts=async(req,res)=>{
//     try
//     {
//      const product=await Product.find({});
//      res.status(200).json(product);
//     }
//     catch(error)
//     {
//         res.status(500).json({message: error.messge})
//     }
// };

// const getproduct=async(req,res)=>{
//     try
//     {
//     const {id} = req.params;
//      const product= await Product.findById (id);
//      res.status(200).json(product);
//     }
//     catch(error)
//     {
//         res.status(500).json({message: error.messge})
//     }

// };

// const Createproduct=async(req,res)=>{
//     try{
//         const product=await Product.create(req.body);
//         res.status(200).json(product);
//     }
//     catch(error){
//         res.status(500).json({message: error.messge});
//     }
// };

// const Updateproduct=async(req,res)=>{


//     try
//     {
//         const {id} = req.params; 
//         const product=await Product. findByIdAndUpdate(id,req.body);
//         if(!product)
//         {
//           return res.status(404).json({message: "product not found"});
//         }
//          const updatedproduct = await Product .findById(id);
//          res.status(200).json(updatedproduct);
//     }
//     catch(error)
//     {
//         res.status(500).json({message: error.messge})
//     }
// };
// const deleteproduct=async(req,res)=>{
//     try {
//         const { id } = req.params; 
//         const product = await Product.findByIdAndDelete(id);  
//         if (!product) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json({ message: "Product deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });  
//     }

// };

// module.exports = {
//     getproducts,
//     getproduct,
//     Createproduct,
//     Updateproduct,
//     deleteproduct
//  };
 const Product = require("../models/product.models");

const getproducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });  // Fixed typo here
    }
};

const getproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });  // Fixed typo here
    }
};

const Createproduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });  // Fixed typo here
    }
};

const Updateproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });  // Fixed typo here
    }
};

const deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });  // Fixed typo here
    }
};

module.exports = {
    getproducts,
    getproduct,
    Createproduct,
    Updateproduct,
    deleteproduct
};
