///-------In this code many errors----///

// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import PaypalButton from './PaypalButton';
// import { useDispatch, useSelector } from 'react-redux';
// import { createCheckout } from '../../redux/slices/checkoutSlice';
// import axios from 'axios';


// ////delete this 
// // const cart = {
// //     products: [
// //         {
// //             name: "Style Jacket",
// //             size: "M",
// //             color: "Black",
// //             price: 120,
// //             image: "https://picsum.photos/500/500?random=8",
// //         },
// //         {
// //             name: "Style Jacket",
// //             size: "42",
// //             color: "White",
// //             price: 120,
// //             image: "https://picsum.photos/500/500?random=9",
// //         },
// //     ],
// //     totalPrice: 195,
// // };


// const Checkout = () => {

//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { cart, loading, error } = useSelector((state) => state.cart);
//     const { user } = useSelector((state) => state.auth);


//     const [checkoutId, setCheckoutId] = useState(null)
//     const [shippingAddress, setShippingAddress] = useState({
//         firstName: "",
//         lastName: "",
//         address: "",
//         city: "",
//         postalCode: "",
//         country: "",
//         phone: "",
//     });

//     //Ensure cart is loaded before proceeding
//     useEffect(() => {
//         if (!cart || !cart.products || cart.products.length === 0) {
//             navigate("/");
//         }
//     }, [cart, navigate]);

//     const handleCreateCheckout = async (e) => {
//         e.preventDefault();
//         if (cart && cart.products.length > 0) {
//             const res = await dispatch(createCheckout({
//                 checkoutItems: cart.products,
//                 shippingAddress,
//                 paymentMethod: "Paypal",
//                 totalPrice: cart.totalPrice,
//             }));
//             if (res.payload && res.payload._id) {
//                 setCheckoutId(res.payload._id);  ///Set checkout ID checkout was successful
//             }
//         }
//     };

//     const handlePaymentSuccess = async (details) => {
//         try {
//             const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/pay`,
//                 { paymentStatus: "paid", paymentDetails: details },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//                     },
//                 }
//             );
//             if (response.status === 200) {
//                 await handleFinalizeCheckout(checkoutId);   ///Finalize checkout if payment is successful
//             } else {
//                 console.error(error);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleFinalizeCheckout = async (checkoutId) => {
//         try {
//             const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`,
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//                     },
//                 }
//             );
//             if (response.status === 200) {
//                 navigate("/order-confirmation");
//             } else {
//                 console.error(error);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     if (loading) return <p>Loading Cart ...</p>
//     if (error) return <p>Error: {error}</p>
//     if (!cart || !cart.products || cart.products.length === 0) {
//         return <p>Your Cart Is Empty.</p>
//     }

//     return (
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
//             {/* Left Section */}
//             <div className=" bg-white rounded-lg p-6">
//                 <h2 className="text-2xl uppercase mb-6">CheckOut</h2>
//                 <form
//                     onSubmit={handleCreateCheckout}
//                     className="">
//                     <h3 className="text-lg mb-4">Contact Details</h3>
//                     <div className="mb-4">
//                         <label className='block text-gray-700'>Email</label>
//                         <input
//                             value={user ? user.email : ""}
//                             type="email" className="w-full p-2 border rounded"
//                             disabled
//                         />
//                     </div>
//                     <h3 className="text-lg mb-4 ">Delivery</h3>
//                     <div className="mb-4 grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-gray-700">
//                                 First Name
//                             </label>
//                             <input
//                                 type="text"
//                                 value={shippingAddress.firstName}
//                                 onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value, })}
//                                 className='w-full p-2 border rounded'
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700">
//                                 Last Name
//                             </label>
//                             <input
//                                 type="text"
//                                 value={shippingAddress.lastName}
//                                 onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value, })}
//                                 className='w-full p-2 border rounded'
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label className=' block text-gray-700'>Address</label>
//                         <input
//                             type="text"
//                             value={shippingAddress.address}
//                             onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value, })}
//                             className='w-full p-2 border rounded'
//                             required
//                         />
//                     </div>
//                     <div className="mb-4 grid grid-cols-3 gap-4 ">
//                         <div>
//                             <label className="block text-gray-700">
//                                 City
//                             </label>
//                             <input
//                                 type="text"
//                                 value={shippingAddress.city}
//                                 onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value, })}
//                                 className='w-full p-2 border rounded'
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700">
//                                 Posttal Code
//                             </label>
//                             <input
//                                 type="text"
//                                 value={shippingAddress.postalCode}
//                                 onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value, })}
//                                 className='w-full p-2 border rounded'
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label className=' block text-gray-700'>Country</label>
//                         <input
//                             type="text"
//                             value={shippingAddress.country}
//                             onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value, })}
//                             className='w-full p-2 border rounded'
//                             required
//                         />
//                     </div>  <div className="mb-4">
//                         <label className=' block text-gray-700'>Phone Number</label>
//                         <input
//                             type="tel"
//                             value={shippingAddress.phone}
//                             onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value, })}
//                             className='w-full p-2 border rounded'
//                             required
//                         />
//                     </div>
//                     <div className="mt-6">
//                         {!checkoutId ? (
//                             <button
//                                 type='submit'
//                                 className='w-full bg-black text-white py-3 rounded'
//                             >
//                                 Continue to Payment
//                             </button>
//                         ) : (
//                             <div className="">
//                                 <h3 className="text-lg mb-4">Pay with Paypal</h3>
//                                 {/* Paypal component */}
//                                 <PaypalButton
//                                     amount={cart.totalPrice}
//                                     onSuccess={handlePaymentSuccess}
//                                     onError={(err) => alert("Payment failed. Try again.")}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </form>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className='text-lg mb-4'>Order Summary</h3>
//                 <div className="border-t py-4 mb-4">
//                     {cart.products.map((product, index) => (
//                         <div
//                             key={index}
//                             className="flex items-start justify-between py-2 border-b">
//                             <div className="flex items-start">
//                                 <img
//                                     src={product.image || product.Image || "https://via.placeholder.com/100"}
//                                     alt={product.name}
//                                     className='w-20 h-24 object-cover mr-4'
//                                 />

//                                 <div className="">
//                                     <h3 className='text-md'>{product.name}</h3>
//                                     <p className="text-gray-50">{product.size}</p>
//                                     <p className="text-gray-50">{product.color}</p>
//                                 </div>
//                             </div>
//                             <p className='text-xl'>${product.price?.toLocaleString()}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="flex justify-between items-center text-lg mb-4">
//                     <p>Subtotal</p>
//                     <p>${cart.totalPrice?.toLocaleString()}</p>
//                 </div>
//                 <div className="flex justify-between items-center text-lg">
//                     <p>Shipping</p>
//                     <p>Free</p>
//                 </div>
//                 <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
//                     <p>Total</p>
//                     <p>${cart.totalPrice?.toLocaleString()}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Checkout


///-------In this also code many errors----/// 

// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import PaypalButton from './PaypalButton';
// import { useDispatch, useSelector } from 'react-redux';
// import { createCheckout } from '../../redux/slices/checkoutSlice';
// import axios from 'axios';

// const Checkout = () => {

//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { cart, loading, error } = useSelector((state) => state.cart);
//     const { user } = useSelector((state) => state.auth);

//     const [checkoutId, setCheckoutId] = useState(null)
//     const [shippingAddress, setShippingAddress] = useState({
//         firstName: "",
//         lastName: "",
//         address: "",
//         city: "",
//         postalCode: "",
//         country: "",
//         phone: "",
//     });

//     useEffect(() => {
//         if (!cart || !cart.products || cart.products.length === 0) {
//             navigate("/");
//         }
//     }, [cart, navigate]);

//     const handleCreateCheckout = async (e) => {
//         e.preventDefault();

//         if (cart && cart.products.length > 0) {
//             // ✅ FIX: ensure every checkoutItem has an image field
//             const checkoutItems = cart.products.map((item) => ({
//                 ...item,
//                 image:
//                     item.image ||
//                     item.images?.[0]?.url ||
//                     item.productId?.images?.[0]?.url ||
//                     "https://via.placeholder.com/150",
//             }));

//             const res = await dispatch(createCheckout({
//                 checkoutItems,
//                 shippingAddress,
//                 paymentMethod: "Paypal",
//                 totalPrice: cart.totalPrice,
//             }));

//             if (res.payload && res.payload._id) {
//                 setCheckoutId(res.payload._id);
//             }
//         }
//     };

//     const handlePaymentSuccess = async (details) => {
//         try {
//             const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`,
//                 { paymentStatus: "paid", paymentDetails: details },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//                     },
//                 }
//             );

//             await handleFinalizeCheckout(checkoutId);

//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleFinalizeCheckout = async (checkoutId) => {
//         try {
//             const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`,
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//                     },
//                 }
//             );
//             navigate("/order-confirmation");
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     if (loading) return <p>Loading Cart ...</p>
//     if (error) return <p>Error: {error}</p>
//     if (!cart || !cart.products || cart.products.length === 0) {
//         return <p>Your Cart Is Empty.</p>
//     }

//     return (
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
//             {/* Left Section */}
//             <div className=" bg-white rounded-lg p-6">
//                 <h2 className="text-2xl uppercase mb-6">CheckOut</h2>
//                 <form onSubmit={handleCreateCheckout}>
//                     <h3 className="text-lg mb-4">Contact Details</h3>
//                     <div className="mb-4">
//                         <label className='block text-gray-700'>Email</label>
//                         <input
//                             value={user ? user.email : ""}
//                             type="email"
//                             className="w-full p-2 border rounded"
//                             disabled
//                         />
//                     </div>
//                     <h3 className="text-lg mb-4 ">Delivery</h3>
//                     <div className="mb-4 grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-gray-700">First Name</label>
//                             <input
//                                 type="text"
//                                 value={shippingAddress.firstName}
//                                 onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
//                                 className='w-full p-2 border rounded'
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700">Last Name</label>
//                             <input
//                                 type="text"
//                                 value={shippingAddress.lastName}
//                                 onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
//                                 className='w-full p-2 border rounded'
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label className='block text-gray-700'>Address</label>
//                         <input
//                             type="text"
//                             value={shippingAddress.address}
//                             onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
//                             className='w-full p-2 border rounded'
//                             required
//                         />
//                     </div>
//                     <div className="mb-4 grid grid-cols-3 gap-4">
//                         <div>
//                             <label className="block text-gray-700">City</label>
//                             <input
//                                 type="text"
//                                 value={shippingAddress.city}
//                                 onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
//                                 className='w-full p-2 border rounded'
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700">Posttal Code</label>
//                             <input
//                                 type="text"
//                                 value={shippingAddress.postalCode}
//                                 onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
//                                 className='w-full p-2 border rounded'
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label className='block text-gray-700'>Country</label>
//                         <input
//                             type="text"
//                             value={shippingAddress.country}
//                             onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
//                             className='w-full p-2 border rounded'
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className='block text-gray-700'>Phone Number</label>
//                         <input
//                             type="tel"
//                             value={shippingAddress.phone}
//                             onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
//                             className='w-full p-2 border rounded'
//                             required
//                         />
//                     </div>
//                     <div className="mt-6">
//                         {!checkoutId ? (
//                             <button
//                                 type='submit'
//                                 className='w-full bg-black text-white py-3 rounded'
//                             >
//                                 Continue to Payment
//                             </button>
//                         ) : (
//                             <div>
//                                 <h3 className="text-lg mb-4">Pay with Paypal</h3>
//                                 <PaypalButton
//                                     amount={cart.totalPrice}
//                                     onSuccess={handlePaymentSuccess}
//                                     onError={(err) => alert("Payment failed. Try again.")}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </form>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className='text-lg mb-4'>Order Summary</h3>
//                 <div className="border-t py-4 mb-4">
//                     {cart.products.map((product, index) => (
//                         <div key={index} className="flex items-start justify-between py-2 border-b">
//                             <div className="flex items-start">
//                                 <img
//                                     src={product.image || product.Image || "https://via.placeholder.com/100"}
//                                     alt={product.name}
//                                     className='w-20 h-24 object-cover mr-4'
//                                 />
//                                 <div>
//                                     <h3 className='text-md'>{product.name}</h3>
//                                     <p className="text-gray-50">{product.size}</p>
//                                     <p className="text-gray-50">{product.color}</p>
//                                 </div>
//                             </div>
//                             <p className='text-xl'>${product.price?.toLocaleString()}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="flex justify-between items-center text-lg mb-4">
//                     <p>Subtotal</p>
//                     <p>${cart.totalPrice?.toLocaleString()}</p>
//                 </div>
//                 <div className="flex justify-between items-center text-lg">
//                     <p>Shipping</p>
//                     <p>Free</p>
//                 </div>
//                 <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
//                     <p>Total</p>
//                     <p>${cart.totalPrice?.toLocaleString()}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Checkout;

//this is fix code but sensetive 

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PaypalButton from './PaypalButton';
import { useDispatch, useSelector } from 'react-redux';
import { createCheckout } from '../../redux/slices/checkoutSlice';
import axios from 'axios';

const Checkout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart, loading, error } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    const [checkoutId, setCheckoutId] = useState(null)
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

    useEffect(() => {
        if (!cart || !cart.products || cart.products.length === 0) {
            navigate("/");
        }
    }, [cart, navigate]);

    const handleCreateCheckout = async (e) => {
        e.preventDefault();

        if (cart && cart.products.length > 0) {
            // ✅ FIXED: Ensuring correct image is passed
            const checkoutItems = cart.products.map((item) => ({
                ...item,
                image:
                    item.image ||                 // already lowercase?
                    item.Image ||                 // from cart model (capital "I")
                    item.images?.[0]?.url ||      // fallback if product object nested
                    item.productId?.images?.[0]?.url ||
                    "https://via.placeholder.com/150", // final fallback
            }));

            const res = await dispatch(createCheckout({
                checkoutItems,
                shippingAddress,
                paymentMethod: "Paypal",
                totalPrice: cart.totalPrice,
            }));

            if (res.payload && res.payload._id) {
                setCheckoutId(res.payload._id);
            }
        }
    };

    const handlePaymentSuccess = async (details) => {
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`,
                { paymentStatus: "paid", paymentDetails: details },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                }
            );

            await handleFinalizeCheckout(checkoutId);

        } catch (error) {
            console.error(error);
        }
    };

    const handleFinalizeCheckout = async (checkoutId) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                }
            );
            navigate("/order-confirmation");
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <p>Loading Cart ...</p>
    if (error) return <p>Error: {error}</p>
    if (!cart || !cart.products || cart.products.length === 0) {
        return <p>Your Cart Is Empty.</p>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
            {/* Left Section */}
            <div className=" bg-white rounded-lg p-6">
                <h2 className="text-2xl uppercase mb-6">CheckOut</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className="text-lg mb-4">Contact Details</h3>
                    <div className="mb-4">
                        <label className='block text-gray-700'>Email</label>
                        <input
                            value={user ? user.email : ""}
                            type="email"
                            className="w-full p-2 border rounded"
                            disabled
                        />
                    </div>
                    <h3 className="text-lg mb-4 ">Delivery</h3>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                value={shippingAddress.firstName}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                                className='w-full p-2 border rounded'
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Last Name</label>
                            <input
                                type="text"
                                value={shippingAddress.lastName}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                                className='w-full p-2 border rounded'
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700'>Address</label>
                        <input
                            type="text"
                            value={shippingAddress.address}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                            className='w-full p-2 border rounded'
                            required
                        />
                    </div>
                    <div className="mb-4 grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input
                                type="text"
                                value={shippingAddress.city}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                                className='w-full p-2 border rounded'
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Posttal Code</label>
                            <input
                                type="text"
                                value={shippingAddress.postalCode}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                                className='w-full p-2 border rounded'
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700'>Country</label>
                        <input
                            type="text"
                            value={shippingAddress.country}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                            className='w-full p-2 border rounded'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700'>Phone Number</label>
                        <input
                            type="tel"
                            value={shippingAddress.phone}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                            className='w-full p-2 border rounded'
                            required
                        />
                    </div>
                    <div className="mt-6">
                        {!checkoutId ? (
                            <button
                                type='submit'
                                className='w-full bg-black text-white py-3 rounded'
                            >
                                Continue to Payment
                            </button>
                        ) : (
                            <div>
                                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                                <PaypalButton
                                    amount={cart.totalPrice}
                                    onSuccess={handlePaymentSuccess}
                                    onError={(err) => alert("Payment failed. Try again.")}
                                />
                            </div>
                        )}
                    </div>
                </form>
            </div>

            {/* Right Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className='text-lg mb-4'>Order Summary</h3>
                <div className="border-t py-4 mb-4">
                    {cart.products.map((product, index) => (
                        <div key={index} className="flex items-start justify-between py-2 border-b">
                            <div className="flex items-start">
                                <img
                                    src={product.image || product.Image || "https://via.placeholder.com/100"}
                                    alt={product.name}
                                    className='w-20 h-24 object-cover mr-4'
                                />
                                <div>
                                    <h3 className='text-md'>{product.name}</h3>
                                    <p className="text-gray-50">{product.size}</p>
                                    <p className="text-gray-50">{product.color}</p>
                                </div>
                            </div>
                            <p className='text-xl'>${product.price?.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-lg mb-4">
                    <p>Subtotal</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                    <p>Total</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
