import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const StripeContainer = () => {
   const PUBLIC_KEY = 'pk_test_51LQwRsFZMGtUIX9dXG1PR3L6YxXHCUoAKDHXa3EU5KcKiMegpFlUkJhmK4769Rvy6aZFxMbpD23PXQNqtFNC8GDf00ogW7iezP'
   const stripeTestPromise = loadStripe(PUBLIC_KEY)
   
   return (
      <Elements stripe={stripeTestPromise}>
         <PaymentForm />
      </Elements>
   )
}

export default StripeContainer;