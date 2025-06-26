///-------In this code many errors----///

// import React from 'react'
// import mensCollectionImage from "../../assets/mens-collection.webp"
// import womensCollectionImage from "../../assets/womens-collection.jpeg"
// import { Link } from 'react-router-dom'

// const GenderCollectionSection = () => {
//   return (
//     <section className='py-16 px-4 lg:px-0'>
//       <div className="container mx-auto flex flex-col md:flex-row gap-8">
//         {/* Womens collection */}
//         <div className="relative flex-1 ">
//           <img
//             src={womensCollectionImage}
//             alt="Women's Collection"
//             className='w-full h-[700px] object-cover'
//           />
//           <div className=" absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
//             <h2 className="text-2xl font-bold text-gray-900 mb-3">
//               Women's Collection
//             </h2>
//             <Link to="/collections/all?gender=Women"
//             className='text-gray-900 underline'>
//               Shop Now
//             </Link>
//           </div>
//         </div>
//         {/* Men's collection */}
//         <div className="relative flex-1 ">
//           <img
//             src={mensCollectionImage}
//             alt="Men's Collection"
//             className='w-full h-[700px] object-cover'
//           />
//           <div className=" absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
//             <h2 className="text-2xl font-bold text-gray-900 mb-3">
//               Men's Collection
//             </h2>
//             <Link to="/collections/all?gender=Men"
//             className='text-gray-900 underline'>
//               Shop Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default GenderCollectionSection

/// this is fix code 

import React from 'react';
import mensCollectionImage from '../../assets/mens-collection.webp';
import womensCollectionImage from '../../assets/womens-collection.jpeg';
import { Link } from 'react-router-dom';

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:gap-12">
        {/* Women’s collection */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImage}
            alt="Women's Collection"
            className="h-72 w-full rounded-xl object-cover shadow-lg sm:h-96 lg:h-[550px] xl:h-[700px]"
          />
          <div className="absolute bottom-6 left-6 rounded-md bg-white/80 p-4 backdrop-blur-sm sm:bottom-10 sm:left-10">
            <h2 className="mb-3 text-xl font-extrabold text-gray-900 md:text-2xl">
              Women&apos;s Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-sm font-medium tracking-wide text-gray-900 underline underline-offset-2 transition hover:text-blue-600"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men’s collection */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImage}
            alt="Men's Collection"
            className="h-72 w-full rounded-xl object-cover shadow-lg sm:h-96 lg:h-[550px] xl:h-[700px]"
          />
          <div className="absolute bottom-6 left-6 rounded-md bg-white/80 p-4 backdrop-blur-sm sm:bottom-10 sm:left-10">
            <h2 className="mb-3 text-xl font-extrabold text-gray-900 md:text-2xl">
              Men&apos;s Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-sm font-medium tracking-wide text-gray-900 underline underline-offset-2 transition hover:text-blue-600"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
