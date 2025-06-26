///-------In this code many errors----///

// import React from 'react'
// import { HiArrowPath, HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2'

// const FeaturedSection = () => {
//     return (
//         <section className='py-16 px-4 bg-white'>
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//                 {/* Feature 1 */}
//                 <div className="flex flex-col items-center">
//                     <div className="p-4 rounded-full mb-4">
//                         <HiShoppingBag className='text-xl' />
//                     </div>
//                     <h4 className=' tracking-tighter mb-2 '>
//                         FREE INTERNATIONAL SHIPPING
//                     </h4>
//                     <p className=' text-gray-600 text-sm tracking-tighter'>
//                         On all orders over $100.00
//                     </p>
//                 </div>
//                 {/* Feature 2 */}
//                 <div className="flex flex-col items-center">
//                     <div className="p-4 rounded-full mb-4">
//                         <HiArrowPathRoundedSquare className='text-xl' />
//                     </div>
//                     <h4 className=' tracking-tighter mb-2 '>
//                         45 DAYS RETURN 
//                     </h4>
//                     <p className=' text-gray-600 text-sm tracking-tighter'>
//                         Money Back Guarantee
//                     </p>
//                 </div>
//                 {/* Feature 3 */}
//                 <div className="flex flex-col items-center">
//                     <div className="p-4 rounded-full mb-4">
//                         <HiOutlineCreditCard className='text-xl' />
//                     </div>
//                     <h4 className=' tracking-tighter mb-2 '>
//                         SECURE CHECKOUT
//                     </h4>
//                     <p className=' text-gray-600 text-sm tracking-tighter'>
//                         100% secured checkout process
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default FeaturedSection


// this is fix code 

import React from 'react'
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from 'react-icons/hi2'

const FeaturedSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full shadow mb-4">
            <HiShoppingBag className="text-3xl text-gray-800" />
          </div>
          <h4 className="text-lg font-semibold tracking-tight text-gray-900 mb-1">
            FREE INTERNATIONAL SHIPPING
          </h4>
          <p className="text-sm text-gray-600 tracking-tight">
            On all orders over $100.00
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full shadow mb-4">
            <HiArrowPathRoundedSquare className="text-3xl text-gray-800" />
          </div>
          <h4 className="text-lg font-semibold tracking-tight text-gray-900 mb-1">
            45 DAYS RETURN
          </h4>
          <p className="text-sm text-gray-600 tracking-tight">
            Money Back Guarantee
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 bg-gray-100 rounded-full shadow mb-4">
            <HiOutlineCreditCard className="text-3xl text-gray-800" />
          </div>
          <h4 className="text-lg font-semibold tracking-tight text-gray-900 mb-1">
            SECURE CHECKOUT
          </h4>
          <p className="text-sm text-gray-600 tracking-tight">
            100% secured checkout process
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
