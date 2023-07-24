// const { response } = require("express");
const products = require("../models/product.model")


module.exports = {


    //TEST COMMAND
    testTest: (req, res) => {
        res.json({msg: "ITS WORKING!!!"})
    },

    //READ ALL
    findAllProducts: (req, res) => {
        products.find()
            .then((allProducts) => {
                res.json({ products: allProducts })
            })
            .catch((err) => {
                res.json(err)
            });
    },

    //READ ONE DATUM (product) BY ID
    findOneProduct: (req, res) => {
        products.findOne({ _id: req.params.id })
            .then(oneProduct => {
                res.json( oneProduct )
            })
            .catch((err) => [
                res.json(err)
            ]);
    },


    //CREATE A PRODUCT
    createProduct: (req, res) => {
        const {title, price, description} = req.body
        products.create({title, price, description})
            .then(createdProduct => {
                res.json(createdProduct)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    //UPDATE A Product BY FINDING IT'S ID
    updateProduct: (req, res) => {
        products.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => {
                res.json({ products: updatedProduct })
            })
            .catch((err) => {
                res.json(err)
            });
    },

    //DELETE A PRODUCT
    deleteProduct: (req, res) => {
        products.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json(err)
            });
    }
};