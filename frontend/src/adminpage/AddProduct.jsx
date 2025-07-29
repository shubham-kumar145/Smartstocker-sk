// // // import React from "react";
// // // import { useForm } from "react-hook-form";
// // // import { zodResolver } from "@hookform/resolvers/zod";
// // // import * as z from "zod";

// // // // Zod schema
// // // const productSchema = z.object({
// // //     name: z.string().min(1, "Product name is required"),
// // //     brand: z.string().min(1, "Brand is required"),
// // //     category: z.string().min(1, "Category is required"),
// // //     price: z.number({ invalid_type_error: "Price must be a number" }).min(0),
// // //     stock: z.number({ invalid_type_error: "Stock must be a number" }).min(0),
// // //     location: z.string().min(1, "Location is required"),
// // //     description: z.string().min(1, "Description is required"),
// // //     photo: z.any().refine((file) => file?.[0], { message: "Photo is required" }),
// // // });

// // // const AddProduct = () => {
// // //     const {
// // //         register,
// // //         handleSubmit,
// // //         reset,
// // //         formState: { errors },
// // //     } = useForm({
// // //         resolver: zodResolver(productSchema),
// // //     });

// // //     const onSubmit = async (data) => {
// // //         try {
// // //             const formData = new FormData();
// // //             formData.append("name", data.name);
// // //             formData.append("brand", data.brand);
// // //             formData.append("category", data.category);
// // //             formData.append("price", data.price);
// // //             formData.append("stock", data.stock);
// // //             formData.append("location", data.location);
// // //             formData.append("description", data.description);
// // //             formData.append("photo", data.photo[0]);

// // //             // await axiosClient.post("/product/admin/addproduct", formData);
// // //             alert("Product added successfully!");
// // //             reset();
// // //         } catch (err) {
// // //             alert("Failed to add product");
// // //         }
// // //     };
// // //     const { fields: Adddiscription, append: adddis, remove: removedis } = useFieldArray({
// // //         control,
// // //         name: 'discriptiondetails'
// // //     });
// // //     return (
// // //         <div className="min-h-screen bg-[#1e1e2f] text-white">
// // //             {/* Header */}
// // //             <div className="flex items-center justify-between bg-[#2a2a40] px-6 py-4 border-b border-gray-700">
// // //                 <div className="flex items-center gap-2">
// // //                     <img
// // //                         src="https://www.w3schools.com/howto/img_avatar.png"
// // //                         alt="Admin Avatar"
// // //                         className="w-10 h-10 rounded-full"
// // //                     />
// // //                     <h2 className="text-lg font-semibold">Admin Panel</h2>
// // //                 </div>
// // //                 <h1 className="text-2xl font-bold">ADD TO CART</h1>
// // //                 <div className="text-right">
// // //                     <p className="font-semibold">Welcome Admin</p>
// // //                     <p className="text-sm text-gray-300">admin@example.com</p>

// // //                     {/* <p className="font-semibold">Welcome {user?.firstName} {user?.lastName}</p>
// // // //           <p className="text-sm text-gray-300">{user?.emailId}</p> */}
// // //                 </div>
// // //             </div>

// // //             {/* Form */}
// // //             <div className="flex items-center justify-center p-8">
// // //                 <div className="w-full  bg-[#2a2a40] text-white rounded-xl shadow-lg p-8">
// // //                     <h2 className="text-xl font-semibold mb-6 underline underline-offset-4 decoration-white"> Basic Information</h2>


// // //                     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
// // //                         {/* Name */}
// // //                         <div>
// // //                             <label className="block mb-1 font-medium"><span className="text-white">●</span> Product Name</label>
// // //                             <input
// // //                                 type="text"
// // //                                 placeholder="Product Name"
// // //                                 {...register("name")}
// // //                                 className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-500 hover:border-white"
// // //                             />
// // //                             {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
// // //                         </div>

// // //                         {/* Brand */}
// // //                         <div>
// // //                             <label className="block mb-1 font-medium"><span className="text-white">●</span> Brand</label>
// // //                             <input
// // //                                 type="text"
// // //                                 placeholder="Brand"
// // //                                 {...register("brand")}
// // //                                 className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-500 hover:border-white"
// // //                             />
// // //                             {errors.brand && <p className="text-red-400 text-sm">{errors.brand.message}</p>}
// // //                         </div>

// // //                         {/* Category */}
// // //                         <div>
// // //                             <label className="block mb-1 font-medium"><span className="text-white">●</span> Category</label>
// // //                             <select
// // //                                 {...register("category")}
// // //                                 className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-600 text-white focus:outline-none  hover:border-white"
// // //                             >
// // //                                 <option value="">Select a Category</option>
// // //                                 <option className="text-white" value="men_wear">Men Wear</option>
// // //                                 <option className="text-white" value="women_wear">Women Wear</option>
// // //                                 <option className="text-white" value="electronics">Electronics</option>
// // //                                 <option className="text-white" value="grocery">Grocery</option>
// // //                                 <option className="text-white" value="furniture">Furniture</option>
// // //                                 <option className="text-white" value="stationary">Stationary</option>
// // //                             </select>
// // //                             {errors.category && <p className="text-red-400 text-sm">{errors.category.message}</p>}
// // //                         </div>

// // //                         {/* Price */}
// // //                         <div>
// // //                             <label className="block mb-1 font-medium"><span className="text-white">●</span> Price</label>
// // //                             <input
// // //                                 type="number"
// // //                                 placeholder="Price"
// // //                                 {...register("price", { valueAsNumber: true })}
// // //                                 className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-600 placeholder-gray-400 text-white focus:outline-none  hover:border-white"
// // //                             />
// // //                             {errors.price && <p className="text-red-400 text-sm">{errors.price.message}</p>}
// // //                         </div>

// // //                         {/* Discount */}
// // //                         <div>
// // //                             <label className="block mb-1 font-medium"><span className="text-white">●</span> Discount</label>
// // //                             <input
// // //                                 type="number"
// // //                                 placeholder="Discount (%)"
// // //                                 {...register("discount", { valueAsNumber: true })}
// // //                                 className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-600 placeholder-gray-400 text-white focus:outline-none hover:border-white"
// // //                             />
// // //                             {errors.discount && <p className="text-red-400 text-sm">{errors.discount.message}</p>}
// // //                         </div>

// // //                         {/* Description */}
// // //                         <div>
// // //                             <h2 className="text-lg font-semibold mb-2">Discription</h2>
// // //                             {Adddiscription.map((field, index) => (
// // //                                 <div key={field.id} className="mb-4 space-y-2">
// // //                                     <input {...register(`discriptiondetails.${index}.input`)} placeholder="Input" className="input input-bordered w-full" />
// // //                                     <input {...register(`discriptiondetails.${index}.output`)} placeholder="Output" className="input input-bordered w-full" />
// // //                                     <button type="button" onClick={() => removedis(index)} className="btn btn-sm btn-error">Remove</button>
// // //                                 </div>
// // //                             ))}
// // //                             <button type="button" onClick={() => adddis({ input: '', output: '' })} className="btn btn-sm btn-primary">Add Hidden Case</button>
// // //                         </div>

// // //                         <div>
// // //                             <label className="block mb-1 font-medium"><span className="text-white">●</span> Description</label>
// // //                             <textarea
// // //                                 placeholder="Enter product description..."
// // //                                 {...register("description")}
// // //                                 className="w-full px-4 py-2 h-24 rounded bg-[#1e1e2f] border border-gray-600 placeholder-gray-400 text-white resize-none focus:outline-none  hover:border-white"
// // //                             />
// // //                             {errors.description && <p className="text-red-400 text-sm">{errors.description.message}</p>}
// // //                         </div>




// // //                         {/* Stock */}
// // //                         <div>
// // //                             <label className="block mb-1 font-medium"><span className="text-white">●</span> Stock</label>
// // //                             <input
// // //                                 type="number"
// // //                                 placeholder="Stock"
// // //                                 {...register("stock", { valueAsNumber: true })}
// // //                                 className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-600 placeholder-gray-400 text-white focus:outline-none  hover:border-white"
// // //                             />
// // //                             {errors.stock && <p className="text-red-400 text-sm">{errors.stock.message}</p>}
// // //                         </div>

// // //                         {/* Location */}
// // //                         <div>
// // //                             <label className="block mb-1 font-medium"><span className="text-white">●</span> Location</label>
// // //                             <input
// // //                                 type="text"
// // //                                 placeholder="Location"
// // //                                 {...register("location")}
// // //                                 className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-600 placeholder-gray-400 text-white focus:outline-none  hover:border-white"
// // //                             />
// // //                             {errors.location && <p className="text-red-400 text-sm">{errors.location.message}</p>}
// // //                         </div>



// // //                         {/* Photo */}
// // //                         <div>
// // //                             <label className="block mb-1 font-medium"><span className="text-white">●</span> Upload Photo</label>
// // //                             <input
// // //                                 type="file"
// // //                                 accept="image/*"
// // //                                 {...register("photo")}
// // //                                 className="w-full px-4 py-2 rounded bg-[#1e1e2f] border border-gray-600 text-white focus:outline-none  hover:border-white"
// // //                             />
// // //                             {errors.photo && <p className="text-red-400 text-sm">{errors.photo.message}</p>}
// // //                         </div>

// // //                         {/* Submit */}
// // //                         <div className="flex justify-center">
// // //                             <button
// // //                                 type="submit"
// // //                                 className="w-[50%] bg-red-600 hover:bg-red-700 text-white text-center font-bold py-2 rounded transition duration-200"
// // //                             >
// // //                                 Add Product
// // //                             </button>
// // //                         </div>

// // //                     </form>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AddProduct;

// // import React from "react";
// // import { useForm, useFieldArray } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";
// // import axiosClient from "../utils/axiosClients";

// // const productSchema = z.object({
// //     name: z.string().min(1, "Product name is required"),
// //     brand: z.string().min(1, "Brand is required"),
// //     category: z.string().min(1, "Category is required"),
// //     price: z.coerce.number().min(0),
// //     discount: z.coerce.number().min(0).optional(),
// //     stock: z.coerce.number().min(0),
// //     location: z.string().min(1, "Location is required"),

// //     photo: z.any().refine((file) => file?.[0], { message: "Photo is required" }),
// //     discriptiondetails: z
// //         .array(
// //             z.object({
// //                 input: z.string().optional(),
// //                 output: z.string().optional(),
// //             })
// //         )
// //         .optional(),
// // });

// // const AddProduct = () => {
// //     const {
// //         register,
// //         handleSubmit,
// //         reset,
// //         control,
// //         formState: { errors },
// //     } = useForm({
// //         resolver: zodResolver(productSchema),
// //         defaultValues: {
// //             discriptiondetails: [{ input: "", output: "" }],
// //         },
// //     });

// //     const {
// //         fields: Adddiscription,
// //         append: adddis,
// //         remove: removedis,
// //     } = useFieldArray({
// //         control,
// //         name: "discriptiondetails",
// //     });

// //     const onSubmit = async (data) => {
// //         try {
// //             const formData = new FormData();
// //             formData.append("name", data.name);
// //             formData.append("brand", data.brand);
// //             formData.append("category", data.category);
// //             formData.append("price", data.price);
// //             formData.append("discount", data.discount || 0);
// //             formData.append("stock", data.stock);
// //             formData.append("location", data.location);
// //             formData.append("description", data.description);
// //             formData.append("photo", data.photo[0]);

// //             if (data.discriptiondetails) {
// //                 formData.append(
// //                     "description",
// //                     JSON.stringify(
// //                         data.discriptiondetails.map((item) => ({
// //                             title: item.input,
// //                             value: item.output,
// //                         }))
// //                     )
// //                 );
// //             }

// //             // Replace with your API endpoint
// //             // await axios.post("/product/admin/addproduct", formData);
// //             await axiosClient.post("/product/admin/addproduct", formData);

// //             alert("Product added successfully");
// //             reset();
// //         } catch (err) {
// //             alert("Failed to add product");
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen bg-[#1e1e2f] text-white">
// //             <div className="flex items-center justify-between bg-[#2a2a40] px-6 py-4 border-b border-gray-700">
// //                 <div className="flex items-center gap-2">
// //                     <img
// //                         src="https://www.w3schools.com/howto/img_avatar.png"
// //                         alt="Admin Avatar"
// //                         className="w-10 h-10 rounded-full"
// //                     />
// //                     <h2 className="text-lg font-semibold">Admin Panel</h2>
// //                 </div>
// //                 <h1 className="text-2xl font-bold">ADD TO CART</h1>
// //                 <div className="text-right">
// //                     <p className="font-semibold">Welcome Admin</p>
// //                     <p className="text-sm text-gray-300">admin@example.com</p>
// //                 </div>
// //             </div>

// //             <div className="flex items-center justify-center p-8">
// //                 <div className="w-full bg-[#2a2a40] text-white rounded-xl shadow-lg p-8">
// //                     <h2 className="text-xl font-semibold mb-6 underline underline-offset-4 decoration-white">
// //                         Basic Information
// //                     </h2>

// //                     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
// //                         <div>
// //                             <label>Product Name</label>
// //                             <input
// //                                 {...register("name")}
// //                                 className="input input-bordered w-full text-black"
// //                             />
// //                             <p className="text-red-500">{errors.name?.message}</p>
// //                         </div>

// //                         <div>
// //                             <label>Brand</label>
// //                             <input
// //                                 {...register("brand")}
// //                                 className="input input-bordered w-full text-black"
// //                             />
// //                             <p className="text-red-500">{errors.brand?.message}</p>
// //                         </div>

// //                         <div>
// //                             <label>Category</label>
// //                             <input
// //                                 {...register("category")}
// //                                 className="input input-bordered w-full text-black"
// //                             />
// //                             <p className="text-red-500">{errors.category?.message}</p>
// //                         </div>

// //                         <div>
// //                             <label>Price</label>
// //                             <input
// //                                 type="number"
// //                                 {...register("price")}
// //                                 className="input input-bordered w-full text-black"
// //                             />
// //                             <p className="text-red-500">{errors.price?.message}</p>
// //                         </div>

// //                         <div>
// //                             <label>Discount</label>
// //                             <input
// //                                 type="number"
// //                                 {...register("discount")}
// //                                 className="input input-bordered w-full text-black"
// //                             />
// //                             <p className="text-red-500">{errors.discount?.message}</p>
// //                         </div>

// //                         <div>
// //                             <label>Stock</label>
// //                             <input
// //                                 type="number"
// //                                 {...register("stock")}
// //                                 className="input input-bordered w-full text-black"
// //                             />
// //                             <p className="text-red-500">{errors.stock?.message}</p>
// //                         </div>

// //                         <div>
// //                             <label>Location</label>
// //                             <input
// //                                 {...register("location")}
// //                                 className="input input-bordered w-full text-black"
// //                             />
// //                             <p className="text-red-500">{errors.location?.message}</p>
// //                         </div>

// //                         <div>
// //                             <label>Description</label>
// //                             <textarea
// //                                 {...register("description")}
// //                                 className="textarea textarea-bordered w-full text-black"
// //                             ></textarea>
// //                             <p className="text-red-500">{errors.description?.message}</p>
// //                         </div>

// //                         <div>
// //                             <label>Product Image</label>
// //                             <input
// //                                 type="file"
// //                                 {...register("photo")}
// //                                 className="file-input file-input-bordered w-full"
// //                             />
// //                             <p className="text-red-500">{errors.photo?.message}</p>
// //                         </div>

// //                         <div>
// //                             <h2 className="text-lg font-semibold mb-2">Discription Details</h2>
// //                             {Adddiscription.map((field, index) => (
// //                                 <div key={field.id} className="mb-4 space-y-2">
// //                                     <input
// //                                         {...register(`discriptiondetails.${index}.input`)}
// //                                         placeholder="Title"
// //                                         className="input input-bordered w-full text-black"
// //                                     />
// //                                     <input
// //                                         {...register(`discriptiondetails.${index}.output`)}
// //                                         placeholder="Value"
// //                                         className="input input-bordered w-full text-black"
// //                                     />
// //                                     <button
// //                                         type="button"
// //                                         onClick={() => removedis(index)}
// //                                         className="btn btn-sm btn-error"
// //                                     >
// //                                         Remove
// //                                     </button>
// //                                 </div>
// //                             ))}
// //                             <button
// //                                 type="button"
// //                                 onClick={() => adddis({ input: "", output: "" })}
// //                                 className="btn btn-sm btn-primary"
// //                             >
// //                                 Add Description
// //                             </button>
// //                         </div>

// //                         <div className="flex justify-center">
// //                             <button
// //                                 type="submit"
// //                                 className="w-[50%] bg-red-600 hover:bg-red-700 text-white text-center font-bold py-2 rounded transition duration-200"
// //                             >
// //                                 Add Product
// //                             </button>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AddProduct;
// import React from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import axiosClient from "../utils/axiosClients";

// const productSchema = z.object({
//     name: z.string().min(1, "Product name is required"),
//     brand: z.string().min(1, "Brand is required"),
//     category: z.string().min(1, "Category is required"),
//     price: z.coerce.number().min(0),
//     discount: z.coerce.number().min(0).optional(),
//     stock: z.coerce.number().min(0),
//     location: z.string().min(1, "Location is required"),
//     photo: z.any().refine((file) => file?.[0], { message: "Photo is required" }),
//     discriptiondetails: z
//         .array(
//             z.object({
//                 input: z.string().optional(),
//                 output: z.string().optional(),
//             })
//         )
//         .optional(),
// });

// const AddProduct = () => {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         control,
//         formState: { errors },
//     } = useForm({
//         resolver: zodResolver(productSchema),
//         defaultValues: {
//             discriptiondetails: [{ input: "", output: "" }],
//         },
//     });

//     const {
//         fields: Adddiscription,
//         append: adddis,
//         remove: removedis,
//     } = useFieldArray({
//         control,
//         name: "discriptiondetails",
//     });

//     const onSubmit = async (data) => {
//         console.log("1");

//         try {
//             console.log("2");
//             const formData = new FormData();
//             formData.append("name", data.name);
//             formData.append("brand", data.brand);
//             formData.append("category", data.category);
//             formData.append("price", data.price);
//             formData.append("discount", data.discount || 0);
//             formData.append("stock", data.stock);
//             formData.append("location", data.location);
//             formData.append("photo", data.photo[0]);

//             console.log("3");
//             if (data.discriptiondetails) {
//                 formData.append(
//                     "description",
//                     JSON.stringify(
//                         data.discriptiondetails.map((item) => ({
//                             title: item.input,
//                             value: item.output,
//                         }))
//                     )
//                 );
//             }
//             console.log("4");
//             console.log(data);

//             await axiosClient.post("/product/admin/addproduct", formData);
//             console.log("5");

//             alert("Product added successfully");
//             reset();
//         } catch (err) {
//             console.log("6");
//             alert("Failed to add product");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-[#1e1e2f] text-white">
//             <div className="flex items-center justify-between bg-[#2a2a40] px-6 py-4 border-b border-gray-700">
//                 <div className="flex items-center gap-2">
//                     <img
//                         src="https://www.w3schools.com/howto/img_avatar.png"
//                         alt="Admin Avatar"
//                         className="w-10 h-10 rounded-full"
//                     />
//                     <h2 className="text-lg font-semibold">Admin Panel</h2>
//                 </div>
//                 <h1 className="text-2xl font-bold">ADD TO CART</h1>
//                 <div className="text-right">
//                     <p className="font-semibold">Welcome Admin</p>
//                     <p className="text-sm text-gray-300">admin@example.com</p>
//                 </div>
//             </div>

//             <div className="flex items-center justify-center p-8">
//                 <div className="w-full bg-[#2a2a40] text-white rounded-xl shadow-lg p-8">
//                     <h2 className="text-xl font-semibold mb-6 underline underline-offset-4 decoration-white">
//                         Basic Information
//                     </h2>

//                     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                         <div>
//                             <label>Product Name</label>
//                             <input
//                                 {...register("name")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.name?.message}</p>
//                         </div>

//                         <div>
//                             <label>Brand</label>
//                             <input
//                                 {...register("brand")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.brand?.message}</p>
//                         </div>

//                         <div>
//                             <label>Category</label>
//                             <input
//                                 {...register("category")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.category?.message}</p>
//                         </div>

//                         <div>
//                             <label>Price</label>
//                             <input
//                                 type="number"
//                                 {...register("price")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.price?.message}</p>
//                         </div>

//                         <div>
//                             <label>Discount</label>
//                             <input
//                                 type="number"
//                                 {...register("discount")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.discount?.message}</p>
//                         </div>

//                         <div>
//                             <label>Stock</label>
//                             <input
//                                 type="number"
//                                 {...register("stock")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.stock?.message}</p>
//                         </div>

//                         <div>
//                             <label>Location</label>
//                             <input
//                                 {...register("location")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.location?.message}</p>
//                         </div>

//                         <div>
//                             <label>Product Image</label>
//                             <input
//                                 type="file"
//                                 {...register("photo")}
//                                 className="file-input file-input-bordered w-full"
//                             />
//                             <p className="text-red-500">{errors.photo?.message}</p>
//                         </div>

//                         <div>
//                             <h2 className="text-lg font-semibold mb-2">Discription Details</h2>
//                             {Adddiscription.map((field, index) => (
//                                 <div key={field.id} className="mb-4 space-y-2">
//                                     <input
//                                         {...register(`discriptiondetails.${index}.input`)}
//                                         placeholder="Title"
//                                         className="input input-bordered w-full text-black"
//                                     />
//                                     <input
//                                         {...register(`discriptiondetails.${index}.output`)}
//                                         placeholder="Value"
//                                         className="input input-bordered w-full text-black"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => removedis(index)}
//                                         className="btn btn-sm btn-error"
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             ))}
//                             <button
//                                 type="button"
//                                 onClick={() => adddis({ input: "", output: "" })}
//                                 className="btn btn-sm btn-primary"
//                             >
//                                 Add Description
//                             </button>
//                         </div>

//                         <div className="flex justify-center">
//                             <button
//                                 type="submit"
//                                 className="w-[50%] bg-red-600 hover:bg-red-700 text-white text-center font-bold py-2 rounded transition duration-200"
//                             >
//                                 Add Product
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // export default AddProduct;
// import React, { useState } from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import axiosClient from "../utils/axiosClients";
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router'

// // Zod schema for product validation
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

// const AddProduct = () => {
//     const [loding,setloading] = useState(false)
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

//     const { fields, append, remove } = useFieldArray({
//         control,
//         name: "discriptiondetails",
//     });

//     const onSubmit = async (data) => {
//         setloading(true)
//         console.log(data);

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

//             console.log(data);
//             await axiosClient.post("/product/admin/addproduct", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });

//             alert("Product added successfully");
//             reset();
//             setloading(false)
//         } catch (err) {
//             console.error(err);
//             alert("Failed to add product");
//             setloading(false)
//         }
//     };
//     const { user } = useSelector((state) => state.auth);

//     return (
//         <div className="min-h-screen bg-[#1e1e2f] text-white">
//             <div className="flex items-center justify-between bg-[#2a2a40] px-6 py-4 border-b border-gray-700">
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
//                 <h1 className="text-2xl font-bold hidden sm:flex">ADD TO CART</h1>
//                 <div className="text-right">
//                     <p className="font-semibold">Welcome <span className="uppercase">{user?.firstName}</span></p>
//                     <p className="text-sm text-gray-300">{user?.emailId}</p>
//                 </div>
//             </div>

//             <div className="flex items-center justify-center p-8">
//                 <div className="w-full bg-[#2a2a40] text-white rounded-xl shadow-lg p-8">
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
//                                 <label>{label}</label>
//                                 <input
//                                     {...register(name)}
//                                     className="input input-bordered w-full text-black"
//                                 />
//                                 <p className="text-red-500">{errors[name]?.message}</p>
//                             </div>
//                         ))}

//                         <div>
//                             <label>Price</label>
//                             <input
//                                 type="number"
//                                 {...register("price")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.price?.message}</p>
//                         </div>

//                         <div>
//                             <label>Discount</label>
//                             <input
//                                 type="number"
//                                 {...register("discount")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.discount?.message}</p>
//                         </div>

//                         <div>
//                             <label>Stock</label>
//                             <input
//                                 type="number"
//                                 {...register("stock")}
//                                 className="input input-bordered w-full text-black"
//                             />
//                             <p className="text-red-500">{errors.stock?.message}</p>
//                         </div>

//                         <div>
//                             <label>Product Image</label>
//                             <input
//                                 type="file"
//                                 {...register("photo")}
//                                 className="file-input file-input-bordered w-full"
//                             />
//                             <p className="text-red-500">{errors.photo?.message}</p>
//                         </div>

//                         <div>
//                             <h2 className="text-lg font-semibold mb-2">Discription Details</h2>
//                             {fields.map((field, index) => (
//                                 <div key={field.id} className="mb-4 space-y-2">
//                                     <input
//                                         {...register(`discriptiondetails.${index}.input`)}
//                                         placeholder="Title"
//                                         className="input input-bordered w-full text-black"
//                                     />
//                                     <input
//                                         {...register(`discriptiondetails.${index}.output`)}
//                                         placeholder="Value"
//                                         className="input input-bordered w-full text-black"
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => remove(index)}
//                                         className="btn btn-sm btn-error"
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             ))}
//                             <button
//                                 type="button"
//                                 onClick={() => append({ input: "", output: "" })}
//                                 className="btn btn-sm btn-primary"
//                             >
//                                 Add Description
//                             </button>
//                         </div>

//                         <div className="flex justify-center">
//                             <button
//                                 type="submit"
//                                 className="w-[50%] bg-red-600 hover:bg-red-700 text-white text-center font-bold py-2 rounded transition duration-200"
//                             >
//                                 {loding ? "Adding Product..........":"Add product"}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddProduct;
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosClient from "../utils/axiosClients";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

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

const AddProduct = () => {
    const [loding, setloading] = useState(false);
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

    const onSubmit = async (data) => {
        setloading(true);
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

            await axiosClient.post("/product/admin/addproduct", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Product added successfully");
            reset();
        } catch (err) {
            console.error(err);
            alert("Failed to add product");
        } finally {
            setloading(false);
        }
    };

    const { user } = useSelector((state) => state.auth);

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
                <h1 className="text-2xl font-bold hidden sm:flex uppercase">ADD Your product</h1>
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
                        {[
                            { label: "Product Name", name: "name" },
                            { label: "Brand", name: "brand" },
                            { label: "Category", name: "category" },
                            { label: "Location", name: "location" },
                        ].map(({ label, name }) => (
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
                                {loding ? "Adding Product.........." : "Add product"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
