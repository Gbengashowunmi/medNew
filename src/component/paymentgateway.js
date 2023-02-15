import React from 'react';
import PaystackPop from "@paystack/inline-js"

export const handlePayment =(email, amount, purpose) =>{
    const handler = PaystackPop.setup({
        key: 'pk_test_691843ae251562fce2b01dc4f3c41c8543b20168',
        email,
        amount: amount * 100,
        purpose,
        ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function(){
          alert('Window closed.');
        },
        callback: function(response){
          let message = `Payment for ${purpose} completed! Kindly check your Email for Invoice... Reference: ` + response.reference;
          alert(message);
        }
      });
      handler.openIframe();

}

// import { usePaystackPayment } from 'react-paystack';

// const config = {
//     reference: (new Date()).getTime().toString(),
//     email: "user@example.com",
//     amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
//     publicKey: 'pk_test_691843ae251562fce2b01dc4f3c41c8543b20168',
// };

// you can call this function anything
// const onSuccess = (reference) => {
//   // Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
// };

// you can call this function anything
// const onClose = () => {
//   // implementation for  whatever you want to do when the Paystack dialog closed.
//   console.log('closed')
// }

// const HandlePayment = (email, amount, purpose) => {
//   const initializePayment = usePaystackPayment(config);
//   return (
//     <div>
//         <button onClick={() => {
//             initializePayment(onSuccess, onClose)
//         }}>Paystack Hooks Implementation</button>
//     </div>
//   );
// };

// export default HandlePayment;