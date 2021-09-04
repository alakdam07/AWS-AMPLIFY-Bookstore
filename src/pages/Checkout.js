import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51JNYEcGLGfjve8kt1CGKXxVYh0f6KClVCwUHylfdwskpAx9QX1X2J1m78IbdeuTZidLxKpgRXleS5vREwmPJDU0i009fevyK7o"
  );

  return (
    <section className="checkout-wrapper">
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Checkout;
