const db = require('../models')

const Product = db.products
const Review = db.reviews

// create product
const addProduct = async (req, res) => {

    let data = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    let product = await Product.create(data)
    res.status(200).send({ product })

}

// get all products
const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)

}

// get single product
const getOneProduct = async (req, res) => {

    let id = req.params.id;
    let product = await Product.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(product)

}

// update product
const updateProduct = async (req, res) => {

    let id = req.params.id;
    let product = await Product.update(req.body, {
        where: {
            id: id
        }
    })
    res.status(200).send(product)

}

// delete product
const deleteProduct = async (req, res) => {

    let id = req.params.id;
    let product = await Product.destroy({
        where: {
            id: id
        }
    })
    res.status(200).send('Product was deleted with success')

}


// get published products
const publishedProduct = async (req, res) => {

    let products = await Product.findAll({
        where: {
            published: true
        }
    })
    res.status(200).send(products)

}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    publishedProduct
}