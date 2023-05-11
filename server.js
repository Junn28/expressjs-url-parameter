const express = require('express');
const biodata = require('./biodata');

const app = express();
const port = 3300;

app.use('/biodata', biodata);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/biodata', (req, res) => {
  const name = req.body['nama'];
  const placeBirth = req.body['tempat-lahir'];
  const dateBirth = req.body['tanggal-lahir'];
  const address = req.body['alamat'];

  res.send({
    'nama': name,
    'tempat-lahir': placeBirth,
    'tanggal-lahir': dateBirth,
    'alamat': address,
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
