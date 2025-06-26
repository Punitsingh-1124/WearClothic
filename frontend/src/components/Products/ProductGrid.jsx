///-------In this code many errors----///

// import React from 'react'
// import { Link } from 'react-router-dom'

// const ProductGrid = ({ products, loading, error }) => {
//     if (loading) {
//         return <p>Loading...</p>
//     }

//     if (error) {
//         return <p>Error: {error}</p>
//     }
//     return (
//         <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//             {products.map((product, index) => (
//                 <Link key={index} to={`/product/${product._id}`}
//                     className=' block'>
//                     <div className='bg-white p-4 rounded-lg'>
//                         <div className="w-full h-96 mb-4">
//                             <img
//                                 src={product.image[0].url}
//                                 alt={product.image[0].altText || product.name}
//                                 className='w-full h-full object-cover rounded-lg'
//                             />
//                         </div>
//                         <h3 className='text-sm mb-2'>{product.name}</h3>
//                         <p className="text-gray-500 font-medium text-sm tracking-tighter">
//                             ${product.price}
//                         </p>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     )
// }

// export default ProductGrid

// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductGrid = ({ products, loading, error }) => {
//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     if (!products || products.length === 0) {
//         return <p>No products found.</p>;
//     }

//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//             {products.map((product, index) => (
//                 <Link key={index} to={`/product/${product._id}`} className='block'>
//                     <div className='bg-white p-4 rounded-lg'>
//                         <div className="w-full h-96 mb-4">
//                             <img
//                                 src={product.image?.[0]?.url || 'https://via.placeholder.com/500'}
//                                 alt={product.image?.[0]?.altText || product.name}
//                                 className='w-full h-full object-cover rounded-lg'
//                             />
//                         </div>
//                         <h3 className='text-sm mb-2'>{product.name}</h3>
//                         <p className="text-gray-500 font-medium text-sm tracking-tighter">
//                             ${product.price}
//                         </p>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// };

// export default ProductGrid;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductGrid = ({ products = [], loading, error }) => {
//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     if (!products.length) {
//         return <p className="text-center text-gray-500">No products found.</p>;
//     }

//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//             {products.map((product) => (
//                 <Link key={product._id} to={`/product/${product._id}`} className='block'>
//                     <div className='bg-white p-4 rounded-lg shadow hover:shadow-md transition'>
//                         <div className="w-full h-96 mb-4">
//                             <img
//                                 src={product.image?.[0]?.url || 'https://via.placeholder.com/500'}
//                                 alt={product.image?.[0]?.altText || product.name}
//                                 className='w-full h-full object-cover rounded-lg'
//                             />
//                         </div>
//                         <h3 className='text-sm mb-2 font-medium'>{product.name}</h3>
//                         <p className="text-gray-500 font-medium text-sm tracking-tighter">
//                             ${product.price}
//                         </p>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     );
// };

// export default ProductGrid;


// this is fix code

import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products, loading, error }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!products || products.length === 0) return <p>No products found.</p>;

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products.map((product, index) => {
                const imageUrl = product.images?.[0]?.url || product.image?.[0]?.url || 'https://via.placeholder.com/500';
                const altText = product.images?.[0]?.altText || product.image?.[0]?.altText || product.name;

                return (
                    <Link key={index} to={`/product/${product._id}`} className='block'>
                        <div className='bg-white p-4 rounded-lg'>
                            <div className="w-full h-96 mb-4">
                                <img
                                    src={imageUrl}
                                    alt={altText}
                                    className='w-full h-full object-cover rounded-lg'
                                />
                            </div>
                            <h3 className='text-sm mb-2'>{product.name}</h3>
                            <p className="text-gray-500 font-medium text-sm tracking-tighter">
                                ${product.price}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProductGrid;

