const express = require('express')
const bodyParser = require('body-parser')
const plantsController = require('./controllers/plantsController')

const app = express();
app.use(bodyParser.json());
app.use('/plants',plantsController)



app.post('/purchase', (req, res) => {
  const { name, email, address } = req.body;
  const qrCodeUrl = `https://venmo.com/qrcode/12345?txn=pay&amount=${req.query.amount}`;
  res.json({ qrCodeUrl });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
