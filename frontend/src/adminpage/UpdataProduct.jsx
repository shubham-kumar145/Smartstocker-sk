// import React, { useState, useEffect } from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import axiosClient from "../utils/axiosClients";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router";
// import { useParams } from "react-router-dom";
// // Zod schema
// const productSchema = z.object({
//     name: z.string().min(1, "Product name is required"),
//     brand: z.string().min(1, "Brand is required"),
//     category: z.string().min(1, "Category is required"),
//     price: z.coerce.number().min(0, "Price must be non-negative"),
//     discount: z.coerce.number().min(0, "Discount must be non-negative").optional(),
//     stock: z.coerce.number().min(0, "Stock must be non-negative"),
//     location: z.string().min(1, "Location is required"),
//     photo: z.any().refine((file) => file?.[0], { message: "Photo is required" }),
//     discriptiondetails: z
//         .array(z.object({ input: z.string().optional(), output: z.string().optional() }))
//         .optional(),
// });

// const UpdataProduct = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [loding, setloading] = useState(false);
//     const {
//         register,
//         handleSubmit,
//         control,
//         reset,
//         formState: { errors },
//     } = useForm({
//         resolver: zodResolver(productSchema),
//         defaultValues: {
//             discriptiondetails: [{ input: "", output: "" }],
//         },
//     });


//     useEffect(() => {
//         fetchProduct();
//     }, []);

//     const fetchProduct = async () => {
//         try {
//             const { id } = useParams();
//             setLoading(true);
//             const { data } = await axiosClient.get(`/get-product-of/${id}`);
//             console.log(filteredProducts);

//             setProducts(data);
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



//     const { fields, append, remove } = useFieldArray({
//         control,
//         name: "discriptiondetails",
//     });

//     const onSubmit = async (data) => {
//         setloading(true);
//         try {
//             const formData = new FormData();
//             formData.append("name", data.name);
//             formData.append("brand", data.brand);
//             formData.append("category", data.category);
//             formData.append("price", data.price);
//             formData.append("discount", data.discount || 0);
//             formData.append("stock", data.stock);
//             formData.append("location", data.location);
//             formData.append("photo", data.photo[0]);

//             if (data.discriptiondetails) {
//                 const mapped = data.discriptiondetails.map(({ input, output }) => ({
//                     title: input,
//                     value: output,
//                 }));
//                 formData.append("description", JSON.stringify(mapped));
//             }

//             await axiosClient.post("/product/admin/addproduct", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });

//             alert("Product added successfully");
//             reset();
//         } catch (err) {
//             console.error(err);
//             alert("Failed to add product");
//         } finally {
//             setloading(false);
//         }
//     };

//     const { user } = useSelector((state) => state.auth);

//     return (
//         <div className="min-h-screen bg-gray-900 text-white">
//             <div className="flex items-center justify-between bg-gray-800 px-6 py-4 border-b border-gray-700">
//                 <div className="flex items-center gap-2">
//                     <img
//                         src="https://www.w3schools.com/howto/img_avatar.png"
//                         alt="Admin Avatar"
//                         className="w-10 h-10 rounded-full"
//                     />
//                     <NavLink
//                         to="/admin-panal"
//                         className="text-base sm:text-lg font-semibold hover:text-blue-400 transition duration-200"
//                     >
//                         Admin Panel
//                     </NavLink>
//                 </div>
//                 <h1 className="text-2xl font-bold hidden sm:flex uppercase">update your product</h1>
//                 <div className="text-right">
//                     <p className="font-semibold">Welcome <span className="uppercase">{user?.firstName}</span></p>
//                     <p className="text-sm text-gray-300">{user?.emailId}</p>
//                 </div>
//             </div>

//             <div className="flex items-center justify-center p-8">
//                 <div className="w-full bg-gray-800 text-white rounded-xl shadow-lg p-8">
//                     <h2 className="text-xl font-semibold mb-6 underline underline-offset-4 decoration-white">
//                         Basic Information
//                     </h2>

//                     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                         {[
//                             { label: "Product Name", name: "name" },
//                             { label: "Brand", name: "brand" },
//                             { label: "Category", name: "category" },
//                             { label: "Location", name: "location" },
//                         ].map(({ label, name }) => (
//                             <div key={name}>
//                                 <label className="block mb-1">{label}</label>
//                                 <input
//                                     {...register(name)}
//                                     className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
//                                 />
//                                 <p className="text-red-500">{errors[name]?.message}</p>
//                             </div>
//                         ))}

//                         <div>
//                             <label className="block mb-1">Price</label>
//                             <input
//                                 type="number"
//                                 {...register("price")}
//                                 className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
//                             />
//                             <p className="text-red-500">{errors.price?.message}</p>
//                         </div>

//                         <div>
//                             <label className="block mb-1">Discount</label>
//                             <input
//                                 type="number"
//                                 {...register("discount")}
//                                 className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
//                             />
//                             <p className="text-red-500">{errors.discount?.message}</p>
//                         </div>

//                         <div>
//                             <label className="block mb-1">Stock</label>
//                             <input
//                                 type="number"
//                                 {...register("stock")}
//                                 className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
//                             />
//                             <p className="text-red-500">{errors.stock?.message}</p>
//                         </div>

//                         <div>
//                             <label className="block mb-1">Product Image</label>
//                             <input
//                                 type="file"
//                                 {...register("photo")}
//                                 className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
//                             />
//                             <p className="text-red-500">{errors.photo?.message}</p>
//                         </div>

//                         <div>
//                             <h2 className="text-lg font-semibold mb-2">Description Details</h2>
//                             {fields.map((field, index) => (
//                                 <div key={field.id} className="mb-4 space-y-2">
//                                     <input
//                                         {...register(`discriptiondetails.${index}.input`)}
//                                         placeholder="Title"
//                                         className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
//                                     />
//                                     <input
//                                         {...register(`discriptiondetails.${index}.output`)}
//                                         placeholder="Value"
//                                         className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => remove(index)}
//                                         className="px-4 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm"
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             ))}
//                             <button
//                                 type="button"
//                                 onClick={() => append({ input: "", output: "" })}
//                                 className="px-4 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
//                             >
//                                 Add Description
//                             </button>
//                         </div>

//                         <div className="flex justify-center">
//                             <button
//                                 type="submit"
//                                 className="w-[50%] bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 rounded transition duration-200"
//                             >
//                                 {loding ? "Updateing Product.........." : "update product"}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdataProduct;
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosClient from "../utils/axiosClients";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

// Zod schema
const productSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    brand: z.string().min(1, "Brand is required"),
    category: z.string().min(1, "Category is required"),
    price: z.coerce.number().min(0, "Price must be non-negative"),
    discount: z.coerce.number().min(0, "Discount must be non-negative").optional(),
    stock: z.coerce.number().min(0, "Stock must be non-negative"),
    location: z.string().min(1, "Location is required"),
    photo: z.any().refine((file) => file?.[0], { message: "Photo is required" }),
    discriptiondetails: z
        .array(z.object({ input: z.string().optional(), output: z.string().optional() }))
        .optional(),
});

const UpdataProduct = () => {
    const { id } = useParams(); // Get product ID from URL
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loding, setloding] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            discriptiondetails: [{ input: "", output: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "discriptiondetails",
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const { data } = await axiosClient.get(`product/get-product-of/${id}`);

                reset({
                    name: data.name,
                    brand: data.brand,
                    category: data.category,
                    price: data.price,
                    discount: data.discount || 0,
                    stock: data.stock,
                    location: data.location,
                    discriptiondetails: data.description?.map((d) => ({
                        input: d.title || "",
                        output: d.value || "",
                    })) || [{ input: "", output: "" }],
                });
            } catch (err) {
                setError("Failed to fetch product");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id, reset]);

    const onSubmit = async (data) => {
        setloding(true);
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("brand", data.brand);
            formData.append("category", data.category);
            formData.append("price", data.price);
            formData.append("discount", data.discount || 0);
            formData.append("stock", data.stock);
            formData.append("location", data.location);
            formData.append("photo", data.photo[0]);

            if (data.discriptiondetails) {
                const mapped = data.discriptiondetails.map(({ input, output }) => ({
                    title: input,
                    value: output,
                }));
                formData.append("description", JSON.stringify(mapped));
            }

            await axiosClient.put(`/product/update-product-details/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Product updated successfully");
        } catch (err) {
            console.error(err);
            alert("Failed to update product");
        } finally {
            setloding(false);
        }
    };

    const { user } = useSelector((state) => state.auth);

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
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="flex items-center justify-between bg-gray-800 px-6 py-4 border-b border-gray-700">
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
                <h1 className="text-2xl font-bold hidden sm:flex uppercase">update your product</h1>
                <div className="text-right">
                    <p className="font-semibold">Welcome <span className="uppercase">{user?.firstName}</span></p>
                    <p className="text-sm text-gray-300">{user?.emailId}</p>
                </div>
            </div>

            <div className="flex items-center justify-center p-8">
                <div className="w-full bg-gray-800 text-white rounded-xl shadow-lg p-8">
                    <h2 className="text-xl font-semibold mb-6 underline underline-offset-4 decoration-white">
                        Basic Information
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {[{ label: "Product Name", name: "name" }, { label: "Brand", name: "brand" }, { label: "Category", name: "category" }, { label: "Location", name: "location" }].map(({ label, name }) => (
                            <div key={name}>
                                <label className="block mb-1">{label}</label>
                                <input
                                    {...register(name)}
                                    className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                                />
                                <p className="text-red-500">{errors[name]?.message}</p>
                            </div>
                        ))}

                        <div>
                            <label className="block mb-1">Price</label>
                            <input
                                type="number"
                                {...register("price")}
                                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                            />
                            <p className="text-red-500">{errors.price?.message}</p>
                        </div>

                        <div>
                            <label className="block mb-1">Discount</label>
                            <input
                                type="number"
                                {...register("discount")}
                                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                            />
                            <p className="text-red-500">{errors.discount?.message}</p>
                        </div>

                        <div>
                            <label className="block mb-1">Stock</label>
                            <input
                                type="number"
                                {...register("stock")}
                                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                            />
                            <p className="text-red-500">{errors.stock?.message}</p>
                        </div>

                        <div>
                            <label className="block mb-1">Product Image</label>
                            <input
                                type="file"
                                {...register("photo")}
                                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                            />
                            <p className="text-red-500">{errors.photo?.message}</p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-2">Description Details</h2>
                            {fields.map((field, index) => (
                                <div key={field.id} className="mb-4 space-y-2">
                                    <input
                                        {...register(`discriptiondetails.${index}.input`)}
                                        placeholder="Title"
                                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                                    />
                                    <input
                                        {...register(`discriptiondetails.${index}.output`)}
                                        placeholder="Value"
                                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="px-4 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => append({ input: "", output: "" })}
                                className="px-4 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
                            >
                                Add Description
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-[50%] bg-green-600 hover:bg-green-700 text-white text-center font-bold py-2 rounded transition duration-200"
                            >
                                {loding ? "Updating Product.........." : "Update Product"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdataProduct;
