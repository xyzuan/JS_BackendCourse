const express = require('express')
const router = express.Router()

// routing endpoint users utama
router.get('/', (req, res) => {
    res.json("HAHAHA")
})

module.exports = router