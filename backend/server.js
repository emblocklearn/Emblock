const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const cors = require('cors');

const app = express(); 
app.use(express.json());
app.use(cors())
const razorpay = new Razorpay({
  key_id: 'rzp_test_7B8acwKj7CrvtI',
  key_secret: '8OqR4nPJQrxTLkWh2VzjZVAA',
});

app.post('/create-order', async (req, res) => {
    const { amount } = req.body;
    const options = {
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: 'receipt_order_74394', // Any unique ID
    };
  
    try {
      const order = await razorpay.orders.create(options);
      res.json({
        success: true,
        order, // Ensure order is correctly sent in the response
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unable to create order',
        error,
      });
    }
  });
  

// Endpoint to verify payment
app.post('/verify-payment', (req, res) => {
  const { order_id, razorpay_payment_id, razorpay_signature } = req.body;

  if (!order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const body = order_id + "|" + razorpay_payment_id;
  const secret = '8OqR4nPJQrxTLkWh2VzjZVAA'; // Use the correct secret from Razorpay Dashboard
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  if (expectedSignature === razorpay_signature) {
    res.status(200).json({ success: true, message: 'Payment Verified Successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Payment Verification Failed' });
  }
});
  

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
