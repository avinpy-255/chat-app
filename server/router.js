const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({"message": "server is running you are in root directory for\n your join component in clinet\n ilove you "});
})

module.exports = router;