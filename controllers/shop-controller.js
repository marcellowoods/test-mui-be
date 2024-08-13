// import {
// 	ReasonPhrases,
// 	StatusCodes,
// 	getReasonPhrase,
// 	getStatusCode,
// } from 'http-status-codes';

const { StatusCodes, ReasonPhrases } = require('http-status-codes');


const Product = require('../models/product');


exports.getProducts = async (req, res, next) => {
    const data = await Product.findAll();
        
    // console.log(data);
    // TODO:
    // Add sorting
    // Add pagination
    // Add filtering

    return res.status(StatusCodes.OK).json({products: data});
}