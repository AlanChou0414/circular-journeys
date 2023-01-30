import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = 'pk_test_51MVV2XL9vOMbHljwYxDpUN8irGCzLHgUXSxQamceHfPCY7BdMKVaNLkzubYd2kKozQGY5Lh3EVPp6LYcrmVNy4ft00KqpV0vfV'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}

// import { Elements } from "@stripe/react-stripe-js"
// import { loadStripe } from "@stripe/stripe-js"
// import React from "react"
// import PaymentForm from "./PaymentForm"


// const PUBLIC_KEY = 'pk_test_51MVV2XL9vOMbHljwYxDpUN8irGCzLHgUXSxQamceHfPCY7BdMKVaNLkzubYd2kKozQGY5Lh3EVPp6LYcrmVNy4ft00KqpV0vfV'

// const stripeTestPromise = loadStripe(PUBLIC_KEY)

// const StripeContainer = () => {
//   return (
//     <Elements stripe={stripeTestPromise}>
//       <PaymentForm />
//     </Elements>
//   )
// }
// export default StripeContainer