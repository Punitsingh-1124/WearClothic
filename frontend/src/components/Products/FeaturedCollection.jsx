///-------In this code many errors----///

// import React from 'react'
// import { Link } from 'react-router-dom'
// import featured from '../../assets/featured.jpg'


// const FeaturedCollection = () => {
//     return (
//         <section className='py-16 px-4 lg:px-0'>
//             <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
//                 {/* left content */}
//                 <div className="lg:w-1/2 p-8 text-center lg:text-left">
//                     <h2 className="text-lg font-semibold text-gray-700 mb-2">
//                         Comfort and Style
//                     </h2>
//                     <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
//                         Apparel made for your everyday life
//                     </h2>
//                     <p className="text-lg text-gray-600 mb-6">
//                         Discover high-quality, comfortable clothing that effortlessly blends fashion and function. Designed to make you look and feel great every day.
//                     </p>
//                     <Link to="/collections/all" className='bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800'>
//                         Shop Now
//                     </Link>
//                 </div>
//                 {/* Right content */}
//                 <div className='lg:w-1/2'>
//                     <img src={featured}
//                         alt="Featured Collection"
//                         className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl'
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default FeaturedCollection


// this is fix code 
import React from 'react';
import { Link } from 'react-router-dom';
import featured from '../../assets/featured.jpg';

const FeaturedCollection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="mx-auto flex flex-col-reverse items-center overflow-hidden rounded-3xl bg-green-50 shadow-md lg:flex-row">
        {/* Text block ------------------------------------------------ */}
        <div className="w-full px-6 py-10 text-center lg:w-1/2 lg:px-12 lg:py-16 lg:text-left">
          <h2 className="mb-2 text-base font-semibold tracking-wider text-gray-700">
            Comfort&nbsp;and&nbsp;Style
          </h2>
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Apparel made for your everyday&nbsp;life
          </h1>
          <p className="mx-auto mb-8 max-w-prose text-gray-600 lg:mx-0 lg:text-lg">
            Discover high-quality, comfortable clothing that effortlessly blends
            fashion and function—designed to make you look and feel great every
            day.
          </p>
          <Link
            to="/collections/all"
            className="inline-block rounded-lg bg-black px-6 py-3 text-lg font-medium text-white transition hover:bg-gray-800"
          >
            Shop&nbsp;Now
          </Link>
        </div>

        {/* Image block ---------------------------------------------- */}
        <div className="w-full lg:w-1/2">
          <img
            src={featured}
            alt="Featured Collection"
            className="h-72 w-full object-cover sm:h-96 lg:h-full lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
