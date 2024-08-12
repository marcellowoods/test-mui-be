const Product = require('../models/product');
const products = require('../dummy-data')

exports.postAddProducts = (req, res, next) => {
  const data = Product.findAll();
  if(data) {
    return res.status(202).json({"message": "Data already exists."});
  }
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    console.log(p);
    const title = p.title;
    const category = p.category;
    const price = p.price;
    const rating = p.rating;
    const brand = p.brand;
    Product.create({
      title: title,
      category: category,
      price: price,
      rating: rating,
      brand: brand
    })
      .then(result => {
        // console.log(result);
        console.log('Created Product');
      })
      .catch(err => {
        console.log(err);
      });
  }
  // const title = req.body.title;
  // const category = req.body.category;
  // const price = req.body.price;
  // const rating = req.body.rating;
  // const brand = req.body.brand;

  console.log("postAddProducts")
  return res.status(200).json({ "message": "OK" })
};
