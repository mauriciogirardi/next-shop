import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY || "";

export type PriceProps = Stripe.Price;

export const stripe = new Stripe(secretKey, {
  apiVersion: "2022-08-01",
  appInfo: {
    name: "Ignite Shop",
  },
});
