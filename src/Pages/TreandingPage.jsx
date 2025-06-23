// import React from "react";
// import { ArrowRight } from "lucide-react";
// import mobifest from "../assets/images/mobifest.jpg";

// const TrendingOffers = () => {
//   return (
//     <>
//       <style>
//         {`
//           @keyframes floatUpDown {
//             0%, 100% {
//               transform: translateY(0);
//             }
//             50% {
//               transform: translateY(-15px);
//             }
//           }
//           .float-animation {
//             animation: floatUpDown 4s ease-in-out infinite;
//           }
//         `}
//       </style>

//       <div className="text-gray-800 px-6 sm:px-16 py-12 bg-transparent max-w-6xl mx-auto">
//         <div className="text-center">
//           <h2 className="text-3xl sm:text-4xl font-playfair text-blue-900 font-semibold tracking-tight">
//             Discover the Hottest Deals of the Season
//           </h2>
//           <h3 className="text-xl sm:text-2xl font-bold mt-2 text-blue-800">
//             Trending Offers
//           </h3>
//         </div>

//         <div className="flex justify-center mt-6">
//           <button className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-2 rounded-full shadow-md hover:from-blue-800 hover:to-blue-950 transition duration-300">
//             View All <ArrowRight size={20} />
//           </button>
//         </div>

//         <div className="flex justify-center gap-8 py-10">
//           {[1, 2, 3].map((id) => (
//             <div
//               key={id}
//               className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-3xl p-0 cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 float-animation"
//             >
//               <img
//                 src={mobifest}
//                 alt="MobiKwik Offer"
//                 className="w-full h-40 object-cover rounded-3xl"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TrendingOffers;
