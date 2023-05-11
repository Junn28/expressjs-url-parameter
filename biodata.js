const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('time: ', Date.now());
  next();
});

// define the home page route
router.get('/', (req, res) => {
  const name = req.query['nama'];
  const placeBirth = req.query['tempat-lahir'];
  const dateBirth = req.query['tanggal-lahir'];
  const address = req.query['alamat'];

  res.send({
    'nama': name,
    'tempat lahir': placeBirth,
    'tanggal lahir': dateBirth,
    'alamat': address,
  });
});

module.exports = router;
