const UserModel = require('../models/products.model');

exports.saveCategory = (req, res) => {
    UserModel.saveCategoryData(req.body)
        .then((result) => {
            res.status(201).send({ msg: "Category added successfully" });
        });
}

exports.getCategoryData = (req, res) => {
    UserModel.getCategoryData(req.body)
        .then((result) => {
            res.status(200).send(result);
        });
}

exports.saveSubCatData = (req, res) => {
    UserModel.saveSubCatData(req.body)
        .then((result) => {
            res.status(201).send({ msg: "Sub Category added successfully" });
        });
}

exports.getSubCategoryData = (req, res) => {
    UserModel.getSubCategoryData(req.body)
        .then((result) => {
            res.status(200).send(result);
        });
}

exports.saveProductData = (req, res) => {
    UserModel.saveProductData(req.body)
        .then((result) => {
            res.status(201).send({ msg: "Product added successfully" });
        });
}

exports.getProductData = (req, res) => {
    UserModel.getProductData(req.body)
        .then((result) => {
            res.status(200).send(result);
        });
}