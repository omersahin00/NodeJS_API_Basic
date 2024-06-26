const express = require("express");
const router = express.Router();
const Product = require("../../models/product");
const validateProduct = require("../../validation/product/product");

router.get("/", async (req, res) => {
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
        return res.status(500)
        .send({
            message: "Bir hata oluştu!"
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const result = validateProduct(req.body);
        
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
    }
    catch (error) {
        console.log(error);
        return res.status(500)
        .send({
            message: "Bir hata oluştu!"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({
            where: {
                id: id
            }
        });

        if (!product) {
            return res.status(404)
            .send({
                message: "Aradığınız ürün bulunamadı."
            });
        }

        return res.status(200)
        .send({
            product: product,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500)
        .send({
            message: "Bir hata oluştu!"
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const result = validateProduct(req.body);

        if (result.error) {
            return res.status(400)
            .send({
                message: result.error.details[0].message
            });
        }

        const id = req.params.id;

        const [count, product] = await Product.update({
            name: req.body.name,
            price: req.body.price
        }, {
            where: {
                id: id
            },
            returning: true, // Güncellenen model geri döndürülüyor.
            raw: true // Sadece model bilgisi ve adetinin geri döndürülmesini sağlıyor.
        });

        if (!product) {
            return res.status(404)
            .send({
                message: "Ürün bulunamadı!"
            });
        }

        return res.status(200)
        .send({
            product: product[0],
            message: `#${id} id numaralı ürün bilgileri güncellendi.`
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500)
        .send({
            message: "Bir hata oluştu!"
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const result = await Product.destroy({
            where: {
                id: id
            }
        });
 
        if (result === 1) {
            return res.status(200)
            .send({
                message: `#${id} id'li ürün silindi.`
            });
        }
        else {
            return res.status(404)
            .send({
                message: `#${id} id'li ürün bulunamadı!`
            });
        }        
    }
    catch (error) {
        console.log(error);
        return res.status(500)
        .send({
            message: "Bir hata oluştu!"
        });
    }
});

module.exports = router;
