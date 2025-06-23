// import React from "react";
// import { motion } from "framer-motion";
// import Tajmahal from "../assets/images/Tajmahal.jpg";

// const BusTicketHeader = () => {
//   return (
//     <div className="text-gray-800 relative">
//       {/* Background Image Section */}
//       <div className="relative w-full h-[40vh] sm:h-[80vh]">
//         <img
//           src={Tajmahal}
//           alt="Taj Mahal"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0"></div>

//         {/* Animated Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center space-y-5 z-10"
//         >
//           <motion.h1
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow-xl"
//           >
//             We provide bus services to
//             <br className="hidden sm:block" />
//             popular destinations in North India
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//             className="flex items-center space-x-2 text-yellow-400 font-semibold text-lg drop-shadow-md"
//           >
//             <span>★ 3.5</span>
//             <span className="text-white font-normal">248 Google reviews</span>
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.5 }}
//             className="text-lg sm:text-xl font-medium drop-shadow-md"
//           >
//             Search bus tickets to Indian destinations
//           </motion.p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default BusTicketHeader;
