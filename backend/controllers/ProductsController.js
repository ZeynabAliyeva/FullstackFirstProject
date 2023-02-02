const { product } = require("../models/ Product");

const productController = {
    //get
    getAll: (req,res) =>{
        product.find({},(err,docs)=>{
            if (!err) {
                res.json(docs)
                console.log(docs);
            }
            else {
                res.status(500).json(err);
            }
        })
    },
    //post
    add: (req,res) =>{
        let newProduct = new product({
            name: req.body.name,
            description: req.body.description,
            date: req.body.date
        })
        newProduct.save((err,docs)=>{
            if (!err) {
                res.json(docs)
                console.log(docs);
            }
            else {
                res.status(500).json(err);
            }
        })
    },
    //get
    getByID: (req, res)=>{
        let id = req.params.id; //serach
        product.findById(id,(err,docs)=>{
            if (!err) {
                res.json(docs)
                console.log(docs);
            }
            else {
                res.status(500).json(err);
            }})
    },
    //delete
    delete: (req, res)=>{
        let id = req.params.id; //serach
        product.findByIdAndDelete(id,(err,docs)=>{
            if (!err) {
                res.json(docs)
                console.log(docs);
            }
            else {
                res.status(500).json(err);
            }})
    },
    //put
    update: (req,res) =>{
        let id = req.params.id;
        let newProduct = new product({
            _id:id,
            name: req.body.name,
            description: req.body.description,
            date: Date.now()
        })
        product.findByIdAndUpdate(id,newProduct,(err,docs)=>{
            if (!err) {
                res.json(docs)
                console.log(docs);
            }
            else {
                res.status(500).json(err);
            }
        })
    },
    
}
module.exports = {
    productController
}
