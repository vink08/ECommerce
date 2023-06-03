// const asyncHandler=require('express-async-handler');
// const Stripe=require('stripe');

// exports.processPayment=asyncHandler(async(req,res,next)=>{
//     const stripe=Stripe("")

//     const paymentIntent=await stripe.paymentIntents.create({
//         amount:req.body.amount,
//         currency:'inr',
//         automatic_payment_methods:{enabled:true}
//     });
//     res.status(200).json({clientSecret:""});
// })

// exports.sendStripePublishableKey=asyncHandler(async(req,res,next)=>{
//     res.status(200).json({success:true,publishableKey:""})
const asyncHandler = require('express-async-handler');
const Stripe = require('stripe');

exports.processPayment = asyncHandler(async (req, res, next) => {
  const stripe = Stripe("sk_test_****************************************************************************************");

  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: 'inr',
    automatic_payment_methods:{enabled:true}
  });

  res.status(200).json({ clientSecret: paymentIntent.client_secret });
});

exports.sendStripePublishableKey = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, publishableKey: "pk_test_***************************************************************" });
});
