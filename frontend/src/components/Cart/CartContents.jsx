///-------In this code many errors----///

// import React from 'react'
// import { RiDeleteBin3Line } from 'react-icons/ri'
// import { useDispatch } from 'react-redux';
// import { removeFromCart, updateCartItemQuantity } from '../../redux/slices/cartSlice';

// const CartContents = ({ cart, userId, guestId }) => {
//     const dispatch = useDispatch();

//     ///Handle adding or substractiong to cart
//     const handleAddToCart = (productId, delta, quantity, size, color) => {
//         const newQuantity = quantity + delta;
//         if (newQuantity >= 1) {
//             dispatch(
//                 updateCartItemQuantity({
//                     productId,
//                     guestId,
//                     quantity,
//                     userId,
//                     size,
//                     color
//                 })
//             );
//         }
//     };

//     const handleRemoveFromeCart = (productId, size, color) => {
//         dispatch(removeFromCart({ productId, guestId, userId, size, color }));
//     }


//     /////delete this lines after complte pj
//     // const cartProducts = [
//     //     {
//     //         productId: 1,
//     //         name: "T-shirt",
//     //         size: "M",
//     //         color: "Red",
//     //         quantity: 1,
//     //         price: 15,
//     //         image: "https://picsum.photos/200?random=1",
//     //     },
//     //     {
//     //         productId: 2,
//     //         name: "Jeans",
//     //         size: "M",
//     //         color: "Blue",
//     //         quantity: 1,
//     //         price: 25,
//     //         image: "https://picsum.photos/200?random=2",
//     //     },
//     // ]



//     return (
//         <div>
//             {
//                 cart.products.map((product, index) => (
//                     <div
//                         key={index}
//                         className='flex items-start justify-between py-4 border-b'
//                     >
//                         <div className="flex items-start">
//                             <img
//                                src={product.image || (product.images && product.images[0]?.url)}  
//                                 alt={product.name}
//                                 className='w-20 h-24 object-cover mr-4 rounded'
//                             />
//                             <div>
//                                 <h3>{product.name}</h3>
//                                 <p className='text-sm text-gray-500'>
//                                     size:{product.size} | color:{product.color}
//                                 </p>
//                                 <div className="flex items-center mt-2 ">
//                                     <button onClick={() => handleAddToCart(
//                                         product.productId,
//                                         -1,
//                                         product.quantity,
//                                         product.size,
//                                         product.color
//                                     )}
//                                         className=' border rounded px-2 py-1 text-xl font-medium'>
//                                         -
//                                     </button>
//                                     <span className='mx-4'>{product.quantity}</span>
//                                     <button
//                                         onClick={() => handleAddToCart(
//                                             product.productId,
//                                             1,
//                                             product.quantity,
//                                             product.size,
//                                             product.color
//                                         )}
//                                         className=' border rounded px-2 py-1 text-xl font-medium'>
//                                         +
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <p>${product.price.toLocaleString()}</p>
//                             <button onClick={() => handleRemoveFromeCart(
//                                 product.productId,
//                                 product.size,
//                                 product.color
//                                 )}>
//                                 <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600' />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//         </div>
//     )
// }

// export default CartContents


// this is fix code
import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../../redux/slices/cartSlice';

const CartContents = ({ cart, userId, guestId }) => {
    const dispatch = useDispatch();

    /// Handle quantity updates
    const handleAddToCart = (productId, delta, quantity, size, color) => {
        const newQuantity = quantity + delta;
        if (newQuantity >= 1) {
            dispatch(
                updateCartItemQuantity({
                    productId,
                    guestId,
                    quantity: newQuantity, // ✅ correct value
                    userId,
                    size,
                    color
                })
            );
        }
    };

    const handleRemoveFromeCart = (productId, size, color) => {
        dispatch(removeFromCart({ productId, guestId, userId, size, color }));
    };

    return (
        <div>
            {cart.products.map((product, index) => (
                <div
                    key={index}
                    className='flex items-start justify-between py-4 border-b'
                >
                    <div className="flex items-start">
                        <img
                            src={
                                product.image || 
                                product.Image || // ✅ added fix for capitalized field
                                (product.images && product.images[0]?.url) || 
                                "https://via.placeholder.com/100"
                            }
                            alt={product.name}
                            className='w-20 h-24 object-cover mr-4 rounded'
                        />
                        <div>
                            <h3>{product.name}</h3>
                            <p className='text-sm text-gray-500'>
                                size: {product.size} | color: {product.color}
                            </p>
                            <div className="flex items-center mt-2">
                                <button
                                    onClick={() =>
                                        handleAddToCart(
                                            product.productId,
                                            -1,
                                            product.quantity,
                                            product.size,
                                            product.color
                                        )
                                    }
                                    className='border rounded px-2 py-1 text-xl font-medium'
                                >
                                    -
                                </button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button
                                    onClick={() =>
                                        handleAddToCart(
                                            product.productId,
                                            1,
                                            product.quantity,
                                            product.size,
                                            product.color
                                        )
                                    }
                                    className='border rounded px-2 py-1 text-xl font-medium'
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>${product.price.toLocaleString()}</p>
                        <button
                            onClick={() =>
                                handleRemoveFromeCart(
                                    product.productId,
                                    product.size,
                                    product.color
                                )
                            }
                        >
                            <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600' />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContents;


/////////14:09:34 min