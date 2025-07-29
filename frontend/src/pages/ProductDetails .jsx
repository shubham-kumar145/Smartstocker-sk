// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import axiosClient from "../utils/axiosClients";

// const ProductDetails = ({ productId }) => {
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const { user } = useSelector((state) => state.auth);



//     useEffect(() => {
//         fetchProduct(productId);
//     }, [productId]);

//     const fetchProduct = async (productId) => {
//         try {
//             setLoading(true);
//             const { data } = await axiosClient.get(`/product/get-product-of/${productId}`);
//             setProduct(filteredProducts);
//         } catch (err) {
//             setError('Failed to fetch products');
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-64">
//                 <span className="loading loading-spinner loading-lg"></span>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="alert alert-error shadow-lg my-4">
//                 <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span>{error}</span>
//                 </div>
//             </div>
//         );
//     }
//     if (!product) {
//         return <div className="text-center mt-10">Loading...</div>;
//     }

//     const originalPrice = Math.round(product.price / (1 - product.discount / 100));

//     return (
//         <div className="flex h-screen overflow-hidden">
//             {/* Left - Image */}
//             <div className="w-2/5 bg-gray-100 flex items-center justify-center border-r sticky top-0 h-full">
//                 <img
//                     src={product.photo?.url || "/placeholder.jpg"}
//                     alt={product.name}
//                     className="max-h-[90%] max-w-[90%] object-contain"
//                 />
//             </div>

//             {/* Right - Scrollable Details */}
//             <div className="w-3/5 overflow-y-auto p-8 space-y-6">
//                 <h1 className="text-3xl font-bold">{product.name}</h1>
//                 <p className="text-xl text-gray-600">Brand: {product.brand}</p>

//                 <div className="text-2xl text-red-600 font-semibold">
//                     ₹{product.price}
//                     <span className="text-gray-500 line-through ml-4 text-lg">
//                         ₹{originalPrice}
//                     </span>
//                     <span className="ml-2 text-green-600">({product.discount}% OFF)</span>
//                 </div>

//                 <p className="font-semibold mt-4">Stock: <span className="text-gray-700">{product.stock}</span></p>
//                 <p className="text-gray-500">Location: {product.location}</p>

//                 <div className="mt-6">
//                     <h2 className="text-xl font-semibold mb-2">Description</h2>
//                     <ul className="list-disc list-inside text-gray-700 space-y-1">
//                         {product.description.map((item, index) => (
//                             <li key={index}>
//                                 <strong>{item.title}:</strong> {item.value}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;


// import React, { useEffect, useState } from "react";
// import axiosClient from "../utils/axiosClients";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//     const productId = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(async () => {
//         const { data } = await axiosClient.get(`product/get-product-of/${productId}`);
//         setProduct(data)
//     }, [productId]);

//     if (!product) {
//         return <div className="text-center mt-10">Loading...</div>;
//     }

//     const originalPrice = Math.round(product.price / (1 - product.discount / 100));

//     return (
//         <div className="flex h-screen overflow-hidden">
//             {/* Left - Image */}
//             <div className="w-2/5 bg-gray-100 flex items-center justify-center border-r sticky top-0 h-full">
//                 <img
//                     src={product.photo?.url || "/placeholder.jpg"}
//                     alt={product.name}
//                     className="max-h-[90%] max-w-[90%] object-contain"
//                 />
//             </div>

//             {/* Right - Scrollable Details */}
//             <div className="w-3/5 overflow-y-auto p-8 space-y-6">
//                 <h1 className="text-3xl font-bold">{product.name}</h1>
//                 <p className="text-xl text-gray-600">Brand: {product.brand}</p>

//                 <div className="text-2xl text-red-600 font-semibold">
//                     ₹{product.price}
//                     <span className="text-gray-500 line-through ml-4 text-lg">
//                         ₹{originalPrice}
//                     </span>
//                     <span className="ml-2 text-green-600">({product.discount}% OFF)</span>
//                 </div>

//                 <p className="font-semibold mt-4">Stock: <span className="text-gray-700">{product.stock}</span></p>
//                 <p className="text-gray-500">Location: {product.location}</p>

//                 <div className="mt-6">
//                     <h2 className="text-xl font-semibold mb-2">Description</h2>
//                     <ul className="list-disc list-inside text-gray-700 space-y-1">
//                         {product.description.map((item, index) => (
//                             <li key={index}>
//                                 <strong>{item.title}:</strong> {item.value}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;


// import React from 'react'

// const ProductDetails  = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default ProductDetails 


import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClients";
import { NavLink, useParams } from "react-router-dom";
import DeliveryForm from "../components/DeliveryForm";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axiosClient.get(`/product/get-product-of/${id}`);
                setProduct(data);
            } catch (err) {
                console.error("Failed to fetch product", err);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    const originalPrice = Math.round(product.price / (1 - product.discount / 100));

    return (
        <div>
            <Navbar />
            <div className="flex overflow-hidden px-6 py-6 bg-white/95">
                {/* Left - Image */}
                <div className="w-2/5 bg-gray-100 flex items-center justify-center border-r sticky top-0 h-full">
                    <img
                        src={product.photo?.url || "/placeholder.jpg"}
                        alt={product.name}
                        className="max-h-[90%] max-w-[90%] object-contain"
                    />
                </div>

                {/* Right - Scrollable Details */}
                <div className="w-3/5 overflow-y-auto p-8 space-y-6 bg-white">
                    <h1 className="text-3xl font-bold uppercase text-black">{product.name}</h1>
                    <p className="text-xl text-gray-600">
                        Brand: <span className="first-letter:uppercase">{product.brand}</span>
                    </p>
                    <div className="text-2xl text-green-600 font-semibold">
                        ₹{product.price}
                        <span className="text-gray-500 line-through ml-4 text-lg">
                            ₹{originalPrice}
                        </span>
                        <span className="ml-2 text-green-600">({product.discount}% OFF)</span>
                    </div>

                    <p className="font-semibold mt-4">Stock: <span className="text-gray-700">{product.stock}</span></p>
                    <p className="text-gray-500">Location: {product.location}</p>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {product.description?.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.title}:</strong> {item.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <NavLink
                            to="/profile-page"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-200"
                        >
                            Add Address
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
