///-------In this code many errors----///

// import React, { useEffect, useState } from 'react'
// import Hero from '../components/Layout/Hero'
// import GenderCollectionSection from '../components/Products/GenderCollectionSection'
// import NewArrivals from '../components/Products/NewArrivals'
// import ProductDetails from '../components/Products/ProductDetails'
// import ProductGrid from '../components/Products/ProductGrid'
// import FeaturedCollection from '../components/Products/FeaturedCollection'
// import FeaturedSection from '../components/Products/FeaturedSection'
// import { fetchProductsByFilters } from "../redux/slices/productsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import axios from 'axios'

// ////Delete this after comple pj
// // const placeholderProducts = [
// //   {
// //     _id: 1,
// //     name: "product 1",
// //     price: 100,
// //     image: [
// //       {
// //         url: "https://picsum.photos/500/500?random=1"
// //       }
// //     ]
// //   },
// //   {
// //     _id: 2,
// //     name: "product 1",
// //     price: 100,
// //     image: [
// //       {
// //         url: "https://picsum.photos/500/500?random=2"
// //       }
// //     ]
// //   },
// //   {
// //     _id: 3,
// //     name: "product 1",
// //     price: 100,
// //     image: [
// //       {
// //         url: "https://picsum.photos/500/500?random=3"
// //       }
// //     ]
// //   },
// //   {
// //     _id: 4,
// //     name: "product 1",
// //     price: 100,
// //     image: [
// //       {
// //         url: "https://picsum.photos/500/500?random=4"
// //       }
// //     ]
// //   },
// //    {
// //         _id: 5,
// //         name: "product 1",
// //         price: 100,
// //         image: [
// //             {
// //                 url: "https://picsum.photos/500/500?random=5"
// //             }
// //         ]
// //     },
// //     {
// //         _id: 6,
// //         name: "product 1",
// //         price: 100,
// //         image: [
// //             {
// //                 url: "https://picsum.photos/500/500?random=6"
// //             }
// //         ]
// //     },
// //     {
// //         _id: 7,
// //         name: "product 1",
// //         price: 100,
// //         image: [
// //             {
// //                 url: "https://picsum.photos/500/500?random=7"
// //             }
// //         ]
// //     },
// //     {
// //         _id: 8,
// //         name: "product 1",
// //         price: 100,
// //         image: [
// //             {
// //                 url: "https://picsum.photos/500/500?random=8"
// //             }
// //         ]
// //     },
// // ]


// const Home = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.products);
//   const [bestSellerProduct, setBestSellerProducts] = useState(null);

//   useEffect(() => {
//     //Fetch products from a specific collection
//     dispatch(
//       fetchProductsByFilters({
//         gender: "Women",
//         category: "Buttom Wear",
//         limit: 8,
//       })
//     );
//     //Fetch best seller products
//     const fetchBestSeller = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
//         );
//         setBestSellerProducts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchBestSeller();
//   }, [dispatch]);

//   return (
//     <div>
//       <Hero />
//       <GenderCollectionSection />
//       <NewArrivals />

//       {/* Best seller section */}
//       <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
//       {bestSellerProduct ? (
//         <ProductDetails productId={bestSellerProduct._id} />
//       ) : (
//         <p className='text-center'>Loading Best Seller Products ...</p>
//       )}
//       <div className="container mx-auto">
//         <h2 className="text-3xl text-center font-bold mb-4">
//           Top Wears For Women
//         </h2>
//         <ProductGrid products={products} loading={loading} error={error} />
//       </div>
//       <FeaturedCollection />
//       <FeaturedSection />


//     </div>
//   )
// }

// export default Home

// import React, { useEffect, useState } from 'react';
// import Hero from '../components/Layout/Hero';
// import GenderCollectionSection from '../components/Products/GenderCollectionSection';
// import NewArrivals from '../components/Products/NewArrivals';
// import ProductDetails from '../components/Products/ProductDetails';
// import ProductGrid from '../components/Products/ProductGrid';
// import FeaturedCollection from '../components/Products/FeaturedCollection';
// import FeaturedSection from '../components/Products/FeaturedSection';
// import { fetchProductsByFilters } from "../redux/slices/productsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import axios from 'axios';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { products = [], loading, error } = useSelector((state) => state.products);
//   const [bestSellerProduct, setBestSellerProducts] = useState(null);

//   useEffect(() => {
//     // Fetch products from a specific collection
//     dispatch(
//       fetchProductsByFilters({
//         gender: "Women",
//         category: "Buttom Wear",
//         limit: 8,
//       })
//     );

//     // Fetch best seller product
//     const fetchBestSeller = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
//         );
//         setBestSellerProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching best seller:", error);
//       }
//     };

//     fetchBestSeller();
//   }, [dispatch]);

//   return (
//     <div>
//       <Hero />
//       <GenderCollectionSection />
//       <NewArrivals />

//       {/* Best Seller Section */}
//       <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
//       {bestSellerProduct && bestSellerProduct._id ? (
//         <ProductDetails productId={bestSellerProduct._id} />
//       ) : (
//         <p className='text-center'>Loading Best Seller Products...</p>
//       )}

//       {/* Top Wears Section */}
//       <div className="container mx-auto">
//         <h2 className="text-3xl text-center font-bold mb-4">
//           Top Wears For Women
//         </h2>
//         <ProductGrid products={products} loading={loading} error={error} />
//       </div>

//       <FeaturedCollection />
//       <FeaturedSection />
//     </div>
//   );
// };

// export default Home;



//// this is fix code
 
import React, { useEffect, useState } from 'react';
import Hero from '../components/Layout/Hero';
import GenderCollectionSection from '../components/Products/GenderCollectionSection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import ProductGrid from '../components/Products/ProductGrid';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import FeaturedSection from '../components/Products/FeaturedSection';
import { fetchProductsByFilters } from "../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProducts] = useState(null);

  useEffect(() => {
    // ✅ FIXED: Corrected spelling of category
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );

    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProducts(response.data);
      } catch (error) {
        console.error("Error fetching best seller:", error);
      }
    };

    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller Section */}
      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      {bestSellerProduct && bestSellerProduct._id ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className='text-center'>Loading Best Seller Products...</p>
      )}

      {/* Top Wears Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Bottom Wears For Women
        </h2>
        {/* ✅ handles loading and error states */}
        <ProductGrid products={products} loading={loading} error={error} />
      </div>

      <FeaturedCollection />
      <FeaturedSection />
      
    </div>
  );
};

export default Home;

