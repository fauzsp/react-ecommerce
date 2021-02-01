import React from "react";
import { ReactComponent as StripeImage } from "../../assets/images/shopping-bag.svg";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token, "token 1");
    alert("payment successfull");
  };
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51IEgA1CUsnq3tnjUtJZyix5XahmxTmiIOSpNW4zxasS5yowLqwqfgitRdR1UE9rbHobdiQMrkFvz5rvBfeqooQmD00tLyd7Eh4";
  return (
    <StripeCheckout
      label="Pay Now"
      name="react Ecommerce"
      bilingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
