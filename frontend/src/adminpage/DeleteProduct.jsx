// import React from 'react'
// import { useEffect, useState } from 'react';
// import axiosClient from '../utils/axiosClients'
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router'


// const DeleteProduct = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const { user } = useSelector((state) => state.auth);

//     useEffect(() => {
//         fetchProduct();
//     }, []);

//     const fetchProduct = async () => {
//         try {
//             setLoading(true);
//             const { data } = await axiosClient.get('/product/allproduct');
//             const filteredProducts = data.filter(product => product.createdBy === user._id);
//             console.log(filteredProducts);

//             setProducts(filteredProducts);
//         } catch (err) {
//             setError('Failed to fetch products');
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (productId) => {
//         console.log(productId);
//         try {
//             await axiosClient.delete(`/product/staff/deleteproduct/${productId}`);   // here i use back tick
//             alert("Deleted successfully");
//             fetchProduct();
//         } catch (err) {
//             setError('Failed to delete product');
//             console.error(err);
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

//     return (
//         <div className="container mx-auto px-4 py-6">
//             <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-2">

//                 <NavLink
//                     to="/admin-panal"
//                     className="text-base sm:text-lg font-semibold hover:text-blue-400 transition duration-200"
//                 >
//                     Admin Panel
//                 </NavLink>
//                 <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Remove Product</h1>
//                 <div>
//                     <p className=' first-letter:uppercase'>
//                         welcome <span className='uppercase'>{user?.firstName}</span></p>
//                     <p>{user?.emailId}</p>
//                 </div>
//             </div>

//             <div className="overflow-x-auto rounded-lg shadow-md bg-white dark:bg-base-200">
//                 <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
//                     <thead className="bg-black/70 dark:bg-base-300 text-xs uppercase text-gray-600 dark:text-gray-400 border-b">
//                         <tr>
//                             <th className="px-4 py-3 w-1/12">#</th>
//                             <th className="px-4 py-3 w-4/12">Name</th>
//                             <th className="px-4 py-3 w-2/12">Image</th>
//                             <th className="px-4 py-3 w-2/12">Brand</th>
//                             <th className="px-4 py-3 w-3/12">Category</th>
//                             <th className="px-4 py-3 w-2/12">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 dark:divide-base-300">
//                         {products.map((product, index) => (
//                             <tr key={product._id} className="hover:bg-gray-50 dark:hover:bg-base-100 transition">
//                                 <td className="px-4 py-3">{index + 1}</td>
//                                 <td className="px-4 py-3 uppercase">{product.name}</td>
//                                 <td className="px-4 py-3"><img src={product.photo.url} alt="img" /></td>
//                                 <td className="px-4 py-3">
//                                     <span className={`px-2 py-1 rounded-2xl text-xs font-medium uppercase`}>
//                                         {product.brand}
//                                     </span>
//                                 </td>
//                                 <td className="px-4 py-3">
//                                     <span className='uppercase'>
//                                         {product.category}
//                                     </span>
//                                 </td>
//                                 <td className="px-4 py-3">
//                                     <div className="flex space-x-2">
//                                         <button
//                                             onClick={() => handleDelete(product._id)}
//                                             className="btn btn-sm bg-red-500 hover:bg-red-700 text-white rounded-md transition duration-150"
//                                         >
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default DeleteProduct;
import React from 'react'
import { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClients'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router'


const DeleteProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const { data } = await axiosClient.get('/product/allproduct');
            const filteredProducts = data.filter(product => product.createdBy === user._id);
            console.log(filteredProducts);

            setProducts(filteredProducts);
        } catch (err) {
            setError('Failed to fetch products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (productId) => {
        console.log(productId);
        try {
            await axiosClient.delete(`/product/staff/deleteproduct/${productId}`);   // here i use back tick
            alert("Deleted successfully");
            fetchProduct();
        } catch (err) {
            setError('Failed to delete product');
            console.error(err);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-error shadow-lg my-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#1c1c3c] text-white px-6 py-8">
            <div className="flex justify-between items-center mb-6 border-b border-[#3a3a60] pb-4">
                <div className="flex items-center gap-2">
                    <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Admin Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <NavLink
                        to="/admin-panal"
                        className="text-base sm:text-lg font-semibold hover:text-blue-400 transition duration-200"
                    >
                        Admin Panel
                    </NavLink>
                </div>
                <h1 className="text-3xl font-bold text-white">REMOVE PRODUCT</h1>
                <div className="text-right">
                    <p className="capitalize text-white">
                        Welcome <span className="uppercase">{user?.firstName}</span>
                    </p>
                    <p className="text-sm text-gray-400">{user?.emailId}</p>
                </div>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-lg bg-[#28284a] border border-[#37375d]">
                <table className="min-w-full text-sm text-left text-white">
                    <thead className="bg-[#30305a] text-xs uppercase text-gray-300 border-b border-[#47476d]">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">Brand</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#38385c]">
                        {products.map((product, index) => (
                            <tr
                                key={product._id}
                                className="hover:bg-[#3a3a5f] transition duration-200"
                            >
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3 uppercase">{product.name}</td>
                                <td className="px-4 py-3">
                                    <img
                                        src={product.photo.url}
                                        alt="img"
                                        className="w-14 h-14 object-cover rounded-lg border border-[#444]"
                                    />
                                </td>
                                <td className="px-4 py-3">
                                    {product.brand}
                                </td>
                                <td className="px-4 py-3 uppercase">{product.category}</td>
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="bg-red-600 hover:bg-red-800 text-white text-xs px-3 py-1 rounded-md shadow-sm transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DeleteProduct;
