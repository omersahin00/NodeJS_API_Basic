const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        return res.status(200)
        .send({
            message: "API is working"
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

module.exports = router;