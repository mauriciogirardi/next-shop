import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY || "";

export type PriceProps = Stripe.Price;
export type ProductStripeProps = Stripe.Product;

export const stripe = new Stripe(secretKey, {
  apiVersion: "2022-08-01",
  appInfo: {
    name: "Ignite Shop",
  },
});
