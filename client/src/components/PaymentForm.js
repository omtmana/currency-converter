import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from 'axios'
import React, { useState } from 'react'
import { Form } from "react-router-dom";

const PaymentForm = () => {
   const [success, setSuccess] = useState(false)
   const stripe = useStripe()
   const elements = useElements()

   const handleSubmit = async (e) => {
      e.preventDefault()
      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: "card",
         card: elements.getElement(CardElement)
      })

      if (!error) {
         try {
            const (id) = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
               amount: 1000,
               id
            })
            if (response.data.success) {
               console.log("Successful Payment")
               setSuccess(true)
            }
         } catch (error) {
            console.log('Error', error)
         }
      } else {
         console.log(error.message)
      }
   }

   return (
      <div>
         {
         !success ?
         <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
               .pk_test_51LQwRsFZMGtUIX9dXG1PR3L6YxXHCUoAKDHXa3EU5KcKiMegpFlUkJhmK4769Rvy6aZFxMbpD23PXQNqtFNC8GDf00ogW7iezP
            </fieldset>
         </form>
      }
      </div>
   )
}

export default PaymentForm;