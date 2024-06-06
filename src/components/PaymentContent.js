import { useState } from "react";


function PaymentContent() {
    const [selectedPayment, setSelectedPayment] = useState('card');

    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
    };

    const key1 = "rzp_test_dTl39yx1h7zSnl"

 


    const loadScript = (src) => {
        return new Promise( (resovle) => {
        const script = document. createElement('script');
        script.src = src;
        script.onload = () => {
        resovle(true)
        }
        script.onerror = () => {
        resovle (false)
        }
        document.body.appendChild(script)
        });
    }
    const razorPay = async (amount) =>{
        //const res = await loadScript("https://pmny.in/yrz5HA0GJgxs")
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
         if (!res) {
            alert('You are offline... Failed to load Razorpay SDK');
            return;
         }
        
         const options = {
            key:key1,
            currency:"INR",
            amount:100,
            name: "Doctor", 
            description: "Ordering 1 thumbnail", 
            image: 'xyz',
  
            handler: function (response) {
            alert ("Payment Successfully");
            // placeorder(false);
            // alert ("payment id: " + response.razorpay_payment_id)
            }, 
            prefill: {
            name:
            "Doctor"
            }
            };
  
            const paymentObject = new window.Razorpay(options);
            paymentObject.open()
     }

     const renderPaymentForm = () => {
        switch (selectedPayment) {
            case 'card':
                return (
                    <div className='mt-4 relative z-10 p-4 '>
                    <div className='space-y-4'>
                      <div className='flex flex-col md:flex-row gap-3'>
                       
                        <label className='w-full'>
                          <span className='text-[#007569] bg-white mb-1 text-sm px-1 ml-4 absolute'>Name on Card</span>
                          <input type='text'  className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' />
                        </label>
                        <label className='w-full'>
                          <span className='text-[#007569] bg-white mb-1 text-sm px-1 ml-4 absolute'>Card Number</span>
                          <input type="text"  className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' />
                        </label>


                      </div>
                      <div className='flex  flex-col md:flex-row space-x-4'>
                        <label className='md:w-1/2'>
                        <span className='text-[#007569] bg-white mb-1 text-sm px-1 ml-4 absolute'>Expiry Date (MM/YY)</span>
                          <input type="text"  className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' />
                          
                        </label>


                        <label className='md:w-1/2'>
                        <span className='text-[#007569] bg-white mb-1 text-sm px-1 ml-4 absolute'>CVV</span>
                          <input type="text"  className='w-full p-2  mt-2 border-[2px] border-[#BEBEBE] rounded-md' />
                        </label>
                      </div>
                    </div>
                    <div className='mt-6 flex justify-end gap-4 space-x-4'>
                      <button className='px-4 py-1 border-[2px] border-[#007569] text-xl  rounded-md text-[#007569]'>Cancel</button>
                      <button className='px-4 py-1 bg-[#276A7B] text-white text-xl rounded-md' onClick={(e)=>razorPay(500)}>Next</button>
                    </div>
                  </div>
                  
                );
            case 'paypal':
                return (
                    <div className='mt-4 p-4 border rounded-md'>
                        <h3 className='text-xl font-semibold mb-2'>PayPal</h3>
                        <p className='text-gray-700'>You will be redirected to PayPal to complete your payment.</p>
                        <div className='mt-6 flex justify-end gap-4 space-x-4'>
                      <button className='px-4 py-1 border-[2px] border-[#007569] text-xl  rounded-md text-[#007569]'>Cancel</button>
                      <button className='px-4 py-1 bg-[#276A7B] text-white text-xl rounded-md' onClick={(e)=>razorPay(500)}>Next</button>
                    </div>
                    </div>
                );
            case 'prepayment':
                return (
                    <div className='mt-4 p-4 border rounded-md'>
                        <h3 className='text-xl font-semibold mb-2'>PrePayment</h3>
                        <p className='text-gray-700'>You will receive instructions on how to complete the prepayment.</p>
                        <div className='mt-6 flex justify-end gap-4 space-x-4'>
                      <button className='px-4 py-1 border-[2px] border-[#007569] text-xl  rounded-md text-[#007569]'>Cancel</button>
                      <button className='px-4 py-1 bg-[#276A7B] text-white text-xl rounded-md' onClick={(e)=>razorPay(500)}>Next</button>
                    </div> 
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className=' md:w-[55%]  w-full mt-20'>
                <h2 className='text-3xl pl-10 font-bold text-[#007569]'>
                    Payment Method
                </h2>
                <div className='mt-6  px-10'>
                    <div className='space-y-4'>
                        <label className='flex items-center text-xl font-semibold mb-2 pb-5 border-b-[2px] border-[#007569]'>
                            <input
                                type='radio'
                                value='card'
                                checked={selectedPayment === 'card'}
                                onChange={handlePaymentChange}
                                className='text-2xl  font-semibold  mr-2'
                            />
                            Credit/Debit Card
                        </label>
                        {selectedPayment === 'card' && renderPaymentForm()}

                        <label className='flex items-center text-xl font-semibold mb-2 pb-5 border-b-[2px] border-[#007569]'>
                            <input
                                type='radio'
                                value='paypal'
                                checked={selectedPayment === 'paypal'}
                                onChange={handlePaymentChange}
                                className=' checked:bg-green-500 text-green-500 mr-2'
                            />
                            PayPal
                        </label>
                        {selectedPayment === 'paypal' && renderPaymentForm()}

                        <label className='flex items-center text-xl font-semibold mb-2 pb-5 border-b-[2px] border-[#007569]'>
                            <input
                                type='radio'
                                value='prepayment'
                                checked={selectedPayment === 'prepayment'}
                                onChange={handlePaymentChange}
                                className='mr-2'
                            />
                            PrePayment
                        </label>
                        {selectedPayment === 'prepayment' && renderPaymentForm()}
                    </div>

                </div>
            </div>
        </>
    );
}

export default PaymentContent;
