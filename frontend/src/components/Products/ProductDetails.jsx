///-------In this code many errors----///

// import React, { useEffect, useState } from 'react'
// import { toast } from 'sonner';
// import ProductGrid from './ProductGrid';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProductDetails, fetchSimilarProducts } from '../../redux/slices/productsSlice';
// import { addToCart } from '../../redux/slices/cartSlice';


// //////delete after comple pj
// // const selectedProducts = {
// //     name: "Stylish Jacket",
// //     price: 120,
// //     originalPrice: 150,
// //     description: "This is a stylish Jacket perfect for any occation",
// //     brand: "FashionBrand",
// //     material: "Leather",
// //     sizes: ["S", "M", "L", "XL"],
// //     colors: ["Red", "Black"],
// //     images: [
// //         {
// //             url: "https://picsum.photos/500/500?random=1",
// //             altText: "Stylish Jacket",
// //         },
// //         {
// //             url: "https://picsum.photos/500/500?random=2",
// //             altText: "Stylish Jacket",
// //         },
// //     ]
// // };

// // const similarProducts = [
// //     {
// //         _id: 1,
// //         name: "product 1",
// //         price: 100,
// //         image: [
// //             {
// //                 url: "https://picsum.photos/500/500?random=1"
// //             }
// //         ]
// //     },
// //     {
// //         _id: 2,
// //         name: "product 1",
// //         price: 100,
// //         image: [
// //             {
// //                 url: "https://picsum.photos/500/500?random=2"
// //             }
// //         ]
// //     },
// //     {
// //         _id: 3,
// //         name: "product 1",
// //         price: 100,
// //         image: [
// //             {
// //                 url: "https://picsum.photos/500/500?random=3"
// //             }
// //         ]
// //     },
// //     {
// //         _id: 4,
// //         name: "product 1",
// //         price: 100,
// //         image: [
// //             {
// //                 url: "https://picsum.photos/500/500?random=4"
// //             }
// //         ]
// //     },
// // ]



// const ProductDetails = (productId) => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const { selectedProducts, loading, error, similarProducts } = useSelector((state) => state.products);
//     const { user, guestId } = useSelector((state) => state.auth);
//     const [mainImage, setMaainImage] = useState("");
//     const [selectedSize, setSelectedSize] = useState("");
//     const [selectedColor, setSelectedColor] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [isButtonDisable, setIsButtonDisabled] = useState(false);

//     const productFetchId = productId || id;

//     useEffect(() => {
//         if (productFetchId) {
//             dispatch(fetchProductDetails(productFetchId));
//             dispatch(fetchSimilarProducts(productFetchId));
//         }
//     }, [dispatch, productFetchId]);

//     useEffect(() => {
//         if (selectedProducts?.images?.length > 0) {
//             setMaainImage(selectedProducts.images[0].url);
//         }
//     }, [selectedProducts])

//     const handleQuantityChanges = (action) => {
//         if (action === "plus") setQuantity((prev) => prev + 1);
//         if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);

//     }

//     const handleAddToCart = () => {
//         if (!selectedSize || !selectedColor) {
//             toast.error("Please select a size and color before adding to cart.", {
//                 duration: 1000,
//             });
//             return
//         }

//         setIsButtonDisabled(true);

//         dispatch(
//             addToCart({
//                 productId: productFetchId,
//                 quantity,
//                 size: selectedSize,
//                 color: selectedColor,
//                 guestId,
//                 userId: user?._id,
//             })
//         ).then(() => {
//             toast.success("Product added to cart!", {
//                 duration: 1000,
//             });
//         })
//             .finally(() => {
//                 setIsButtonDisabled(false);
//             });
//     };

//     if (loading) {
//         return <p>Loading...</p>
//     }

//     if (error) {
//         return <p>Error: {error}</p>

//     }

//     return (
//         <div className='p-6'>
//             {selectedProducts && (
//                 <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
//                     <div className="flex flex-col md:flex-row">
//                         {/* Left Thumbnails */}
//                         <div className="hidden md:flex flex-col space-y-4 mr-6">
//                             {selectedProducts.images.map((image, index) => (
//                                 <img
//                                     key={index}
//                                     src={image.url}
//                                     alt={image.altText || `Thumbnail ${index}`}
//                                     className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
//                                     onClick={() => setMaainImage(image.url)}
//                                 />
//                             ))}
//                         </div>
//                         {/* Main Image */}
//                         <div className='md:w-1/2'>
//                             <div className="mb-4">
//                                 {/* <img src={mainImage}
//                                 alt=""
//                                 className='w-full h-auto object-cover rounded-lg'
//                             /> */}
//                                 {/* new code for console.error */}
//                                 {mainImage && (
//                                     <img src={mainImage} alt="" className='w-full h-auto object-cover rounded-lg' />
//                                 )}
//                             </div>
//                         </div>
//                         {/* Mobile Thumbnail */}
//                         <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4 '>
//                             {selectedProducts.images.map((image, index) => (
//                                 <img
//                                     key={index}
//                                     src={image.url}
//                                     alt={image.altText || `Thumbnail ${index}`}
//                                     className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
//                                     onClick={() => setMaainImage(image.url)}
//                                 />
//                             ))}
//                         </div>

//                         {/* Right Side */}
//                         <div className="md:w-1/2 md:ml-10">
//                             <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
//                                 {selectedProducts.name}
//                             </h1>

//                             <p className='text-lg text-gray-600 mb-1 line-through'>
//                                 {selectedProducts.originalPrice &&
//                                     `${selectedProducts.originalPrice}`}
//                             </p>
//                             <p className='text-xl text-gray-500 mb-2'>
//                                 ${selectedProducts.price}
//                             </p>
//                             <p className='text-gray-600 mb-4'>
//                                 {selectedProducts.description}
//                             </p>

//                             <div className="mb-4">
//                                 <p className='text-gray-700'>Color:</p>
//                                 <div className='flex gap-2 mt-2'>
//                                     {selectedProducts.colors.map((color) => (
//                                         <button
//                                             key={color}
//                                             onClick={() => setSelectedColor(color)}
//                                             className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
//                                             style={{
//                                                 background: color.toLocaleLowerCase(),
//                                                 filter: "brightness(0.5)",
//                                             }}
//                                         ></button>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className='mb-4'>
//                                 <p className="text-gray-700">Size:</p>
//                                 <div className='flex gap-2 mt-2'>
//                                     {selectedProducts.sizes.map((size) => (
//                                         <button
//                                             key={size}
//                                             onClick={() => setSelectedSize(size)}
//                                             className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : ""}`}>{size}</button>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="mb-6">
//                                 <p className='text-gray-700'>Quantity:</p>
//                                 <div className='flex items-center space-x-4 mt-2'>
//                                     {/* Quantity controls can go here */}
//                                     <button onClick={() => handleQuantityChanges("minus")} className='px-2 py-1 bg-gray-200 rounded text-lg'>
//                                         -
//                                     </button>
//                                     <span className='text-lg'>{quantity}</span>
//                                     <button onClick={() => handleQuantityChanges("plus")} className='px-2 py-1 bg-gray-200 rounded text-lg'>
//                                         +
//                                     </button>
//                                 </div>
//                             </div>

//                             <button
//                                 onClick={handleAddToCart}
//                                 disabled={isButtonDisable}
//                                 className={`bg-black text-white py-2 px-6 rounded w-full 
//                             ${isButtonDisable ? " cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}
//                             >
//                                 {isButtonDisable ? "Adding..." : "ADD TO CART"}
//                             </button>

//                             <div className="mt-10 text-gray-700 ">
//                                 <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
//                                 <table className='w-full text-left text-sm text-gray-600'>
//                                     <tbody>
//                                         <tr>
//                                             <td className='py-1'>Brand</td>
//                                             <td className='py-1'>{selectedProducts.brand}</td>
//                                         </tr>
//                                         <tr>
//                                             <td className='py-1'>Material</td>
//                                             <td className='py-1'>{selectedProducts.material}</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='mt-20'>
//                         <h2 className='text-2xl text-center font-medium mb-4'>
//                             You May Also Like
//                         </h2>
//                         <ProductGrid products={similarProducts} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }



// export default ProductDetails;


/// this is fix code


import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails, fetchSimilarProducts } from '../../redux/slices/productsSlice';
import { addToCart } from '../../redux/slices/cartSlice';

const ProductDetails = ({ productId }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct, loading, error, similarProducts } = useSelector((state) => state.products);
    const { user, guestId } = useSelector((state) => state.auth);
    const [mainImage, setMainImage] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const productFetchId = productId || id;

    useEffect(() => {
        if (productFetchId) {
            dispatch(fetchProductDetails(productFetchId));
            dispatch(fetchSimilarProducts({ id: productFetchId }));
        }
    }, [dispatch, productFetchId]);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);

    const handleQuantityChanges = (action) => {
        if (action === 'plus') setQuantity((prev) => prev + 1);
        if (action === 'minus' && quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error('Please select a size and color before adding to cart.', {
                duration: 1000,
            });
            return;
        }

        setIsButtonDisabled(true);

        dispatch(
            addToCart({
                productId: productFetchId,
                quantity,
                size: selectedSize,
                color: selectedColor,
                guestId,
                userId: user?._id,
            })
        )
            .then(() => {
                toast.success('Product added to cart!', { duration: 1000 });
            })
            .finally(() => {
                setIsButtonDisabled(false);
            });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='p-6'>
            {selectedProduct && (
                <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                    <div className='flex flex-col md:flex-row'>
                        {/* Thumbnails */}
                        <div className='hidden md:flex flex-col space-y-4 mr-6'>
                            {selectedProduct.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt={image.altText || `Thumbnail ${index}`}
                                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
                                    onClick={() => setMainImage(image.url)}
                                />
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className='md:w-1/2'>
                            <div className='mb-4'>
                                {mainImage && (
                                    <img src={mainImage} alt='' className='w-full h-auto object-cover rounded-lg' />
                                )}
                            </div>
                        </div>

                        {/* Mobile Thumbnails */}
                        <div className='md:hidden flex overflow-x-scroll space-x-4 mb-4'>
                            {selectedProduct.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt={image.altText || `Thumbnail ${index}`}
                                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
                                    onClick={() => setMainImage(image.url)}
                                />
                            ))}
                        </div>

                        {/* Product Details */}
                        <div className='md:w-1/2 md:ml-10'>
                            <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                                {selectedProduct.name}
                            </h1>

                            <p className='text-lg text-gray-600 mb-1 line-through'>
                                {selectedProduct.originalPrice && `$${selectedProduct.originalPrice}`}
                            </p>
                            <p className='text-xl text-gray-500 mb-2'>
                                ${selectedProduct.price}
                            </p>
                            <p className='text-gray-600 mb-4'>
                                {selectedProduct.description}
                            </p>

                            {/* Color Options */}
                            <div className='mb-4'>
                                <p className='text-gray-700'>Color:</p>
                                <div className='flex gap-2 mt-2'>
                                    {selectedProduct.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'border-4 border-black' : 'border-gray-300'}`}
                                            style={{ background: color.toLowerCase(), filter: 'brightness(0.5)' }}
                                        ></button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Options */}
                            <div className='mb-4'>
                                <p className='text-gray-700'>Size:</p>
                                <div className='flex gap-2 mt-2'>
                                    {selectedProduct.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded border ${selectedSize === size ? 'bg-black text-white' : ''}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className='mb-6'>
                                <p className='text-gray-700'>Quantity:</p>
                                <div className='flex items-center space-x-4 mt-2'>
                                    <button onClick={() => handleQuantityChanges('minus')} className='px-2 py-1 bg-gray-200 rounded text-lg'>
                                        -
                                    </button>
                                    <span className='text-lg'>{quantity}</span>
                                    <button onClick={() => handleQuantityChanges('plus')} className='px-2 py-1 bg-gray-200 rounded text-lg'>
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={handleAddToCart}
                                disabled={isButtonDisabled}
                                className={`bg-black text-white py-2 px-6 rounded w-full ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-900'}`}
                            >
                                {isButtonDisabled ? 'Adding...' : 'ADD TO CART'}
                            </button>

                            {/* Product Characteristics */}
                            <div className='mt-10 text-gray-700'>
                                <h3 className='text-xl font-bold mb-4'>Characteristics:</h3>
                                <table className='w-full text-left text-sm text-gray-600'>
                                    <tbody>
                                        <tr>
                                            <td className='py-1'>Brand</td>
                                            <td className='py-1'>{selectedProduct.brand}</td>
                                        </tr>
                                        <tr>
                                            <td className='py-1'>Material</td>
                                            <td className='py-1'>{selectedProduct.material}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Similar Products */}
                    <div className='mt-20'>
                        <h2 className='text-2xl text-center font-medium mb-4'>
                            You May Also Like
                        </h2>
                        <ProductGrid products={similarProducts} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
