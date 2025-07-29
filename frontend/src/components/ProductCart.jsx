// import React, { useEffect, useState } from 'react';

// export default function ProductCard({ product }) {
//   const [timeLeft, setTimeLeft] = useState(3 * 3600 + 21 * 60 + 53); // total seconds

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (totalSeconds) => {
//     const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
//     const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
//     const seconds = String(totalSeconds % 60).padStart(2, '0');
//     return `${ hours } h: ${ minutes } m: ${ seconds } s`;
//   };

//   const randomRating = (Math.random() * (4.5 - 3) + 3).toFixed(1);
//   const randomReviews = Math.floor(Math.random() * (40000 - 500 + 1)) + 500;

//   return (
//     <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden relative bg-white">

//       {/* Countdown Badge (outside image area) */}
//       <div className="px-2 pt-2">
//         <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">
//           🕐 {formatTime(timeLeft)}
//         </div>
//       </div>

//       {/* Product Image */}
//       <div className="pt-2 px-2">
//         <img
//           src={product.photo?.url || '/no-image.png'}
//           alt={product.name}
//           className="w-full h-40 object-contain"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="px-2 pb-2 mt-2">
//         <h3 className="text-sm font-semibold line-clamp-2 capitalize text-gray-900">{product.name}</h3>
//         <p className="text-gray-500 text-xs capitalize mb-1">{product.brand}</p>

//         {/* Price Section */}
//         <div className="flex items-center gap-2">
//           <p className="text-black font-bold text-sm">₹{product.price}</p>
//           {product.discount > 0 && (
//             <>
//               <p className="text-gray-400 line-through text-xs">₹{(
//                 product.price / (1 - product.discount / 100)
//               ).toFixed(0)}</p>
//               <p className="text-green-600 text-xs font-semibold">{product.discount}% off</p>
//             </>
//           )}
//         </div>

//         {/* Delivery & Rating */}
//         <div className="text-xs mt-1">
//           <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium text-[10px]">Free Delivery</span>
//         </div>

//         <div className="flex items-center gap-1 mt-1">
//           <span className="text-white text-[11px] bg-green-600 px-1.5 py-0.5 rounded-md font-semibold">{randomRating}★</span>
//           <span className="text-xs text-gray-600 font-medium">{randomReviews.toLocaleString()} Reviews</span>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { randomRating, randomReviews } = useMemo(() => {
    const rating = (Math.random() * (4.5 - 3) + 3).toFixed(1);
    const reviews = Math.floor(Math.random() * (40000 - 100 + 1)) + 100;
    return { randomRating: rating, randomReviews: reviews };
  }, []);


  return (
    <NavLink
      to={`/product-details/${product._id}`}
      // to={`/product/${product._id}`}
      className="bg-white rounded-md overflow-hidden p-2 text-sm w-full transition-all hover:-translate-y-1"
      style={{
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)', // custom black shadow
      }}
    >
      {/* Image First */}
      <div className="w-full h-48 flex items-center justify-center mb-2">
        <img
          src={product.photo?.url || '/no-image.png'}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Sponsored */}
      <p className="text-xs text-gray-400 mb-1 text-left">Sponsored</p>

      {/* Brand & Assurance */}
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-800 first-letter:uppercase text-left">{product.brand}</p>
        <img
          src="/hero_photo/logo.jpg"
          alt="Assured"
          className="w-12 h-8 object-contain"
        />
      </div>

      {/* Title */}
      <p className="text-gray-700 font-medium line-clamp-2 mt-1 mb-1 first-letter:uppercase text-left">{product.name}</p>

      {/* Price & Discount */}
      <div className="flex items-center gap-2 mt-2">
        <p className="text-black font-bold text-sm">₹{product.price}</p>
        {product.discount > 0 && (
          <>
            <p className="text-gray-400 line-through text-xs">
              ₹{(product.price / (1 - product.discount / 100)).toFixed(0)}
            </p>
            <p className="text-green-600 text-xs font-semibold">{product.discount}% off</p>
          </>
        )}
      </div>

      {/* Delivery */}
      <div className="text-xs mt-1 text-left">
        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium text-[10px] text-left">Free Delivery</span>
      </div>

      {/* Rating & Reviews */}
      <div className="flex items-center gap-1 mt-1">
        <span className="text-white text-[11px] bg-green-600 px-1.5 py-0.5 rounded-md font-semibold">
          {randomRating}★
        </span>
        <span className="text-xs text-gray-600 font-medium">
          {Number(randomReviews).toLocaleString()} Reviews
        </span>
      </div>
    </NavLink>
  );
}