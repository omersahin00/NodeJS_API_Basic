const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const schema = require("../validation/product/product");

router.get("/api/product", async (req, res) => {
    try {
        const products = await Product.findAll();

        if (!products) {
            return res.status(404)
            .send({
                message: "Ürün bilgileri alınamadı!"
            });
        }

        return res.status(200)
        .send ({
            products: products,
            message: "Ürün bilgileri gönderildi.",
        });
    }
    catch (error) {
        console.log(error);
    }
});

router.post("/api/product", async (req, res) => {
    const result = schema.validate(req.body);

    if (result.error) {
        return res.status(400)
        .send({
            message: result.error.details[0].message
        });
    }

    const product = await Product.create({
        name: req.body.name,
        price: req.body.price
    });
    
    return res.status(200)
    .send({
        product: product,
        message: "Ürün başarıyla kaydedildi."
    });
});

module.exports = router;
