import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

const StripeContainer = () => {
   const PUBLIC_KEY = ''
   const stripeTestPromise = loadStripe(PUBLIC_KEY)
   
   return (
      <div>
      <Elements stripe={stripeTestPromise}>
         <PaymentForm />
      </Elements>
      </div>
   )
}

export default StripeContainer;