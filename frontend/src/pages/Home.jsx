// // import Navbar from '../components/Navbar'
// // import React, { useEffect, useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import axiosClient from '../utils/axiosClients';
// // import ProductCard from '../components/ProductCart';

// // export default function Home() {
// //     const { user } = useSelector((state) => state.auth);
// //     const [allProducts, setAllProducts] = useState([]);
// //     const [electronics, setElectronics] = useState([]);
// //     const [clothing, setClothing] = useState([]);
// //     const [grocery, setGrocery] = useState([]);

// //     useEffect(() => {
// //         if (!user) return;

// //         const fetchAllProducts = async () => {
// //             try {
// //                 const { data } = await axiosClient.get('/product/allproduct');
// //                 setAllProducts(data);
// //                 console.log(data);

// //                 setElectronics(data.filter(item => item.category?.toLowerCase() === 'toy'));
// //                 setClothing(data.filter(item => item.category?.toLowerCase() === 'bag'));
// //                 setGrocery(data.filter(item => item.category?.toLowerCase() === 'car'));
// //             } catch (err) {
// //                 console.error("Error fetching products:", err);
// //             }
// //         };

// //         fetchAllProducts();
// //     }, [user]);

// //     if (!user) {
// //         return <div className="p-4 text-xl text-center">Please log in to view products</div>;
// //     }

// //     return (
// //         <div>

// //             <Navbar></Navbar>
// //             <div className="p-4 space-y-12">
// //                 {/* Electronics */}
// //                 <CategorySection title="Best of Electronics" products={electronics} />

// //                 {/* Clothing */}
// //                 <CategorySection title="Best of Clothing" products={clothing} />

// //                 {/* Grocery */}
// //                 <CategorySection title="Best of Grocery" products={grocery} />
// //             </div>
// //         </div>
// //     );
// // }

// // function CategorySection({ title, products }) {
// //     if (products.length === 0) return null;

// //     return (
// //         <section>
// //             <h2 className="text-2xl font-bold mb-4">{title}</h2>
// //             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
// //                 {products.map(product => (
// //                     <ProductCard key={product._id} product={product} />
// //                 ))}
// //             </div>
// //         </section>
// //     );
// // }


// import Navbar from '../components/Navbar';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axiosClient from '../utils/axiosClients';
// import ProductCard from '../components/ProductCart';

// export default function Home() {
//     const { user } = useSelector((state) => state.auth);
//     const [electronics, setElectronics] = useState([]);
//     const [grocery, setGrocery] = useState([]);
//     const [menswear, setMenswear] = useState([]);
//     const [womenwear, setWomenwear] = useState([]);
//     const [furniture, setFurniture] = useState([]);

//     useEffect(() => {
//         if (!user) return;

//         const fetchAllProducts = async () => {
//             try {
//                 const { data } = await axiosClient.get('/product/allproduct');

//                 setElectronics(data.filter(item => item.category?.toLowerCase() === 'toy'));
//                 setGrocery(data.filter(item => item.category?.toLowerCase() === 'grocery'));
//                 setMenswear(data.filter(item => item.category?.toLowerCase() === 'men\'s wear'));
//                 setWomenwear(data.filter(item => item.category?.toLowerCase() === 'womenwear'));
//                 setFurniture(data.filter(item => item.category?.toLowerCase() === 'furniture'));
//             } catch (err) {
//                 console.error("Error fetching products:", err);
//             }
//         };

//         fetchAllProducts();
//     }, [user]);

//     if (!user) {
//         return <div className="p-4 text-xl text-center">Please log in to view products</div>;
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className="p-4 space-y-12">
//                 <CategorySection title="Best of Electronics" products={electronics} />
//                 <CategorySection title="Top Grocery Picks" products={grocery} />
//                 <CategorySection title="Men's wear" products={menswear} />
//                 <CategorySection title="Women's Fashion" products={womenwear} />
//                 <CategorySection title="Stylish Furniture" products={furniture} />
//             </div>
//         </div>
//     );
// }

// function CategorySection({ title, products }) {
//     if (products.length === 0) return null;

//     return (
//         <section>
//             <h2 className="text-2xl font-bold mb-4">{title}</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//                 {products.map(product => (
//                     <ProductCard key={product._id} product={product} />
//                 ))}
//             </div>
//         </section>
//     );
// }

import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosClient from '../utils/axiosClients';
import ProductCard from '../components/ProductCart';
import MainCarousel from '../components/MainCarousel ';
import Footer from '../components/Footer';
import CategoryCardGrid from '../components/CategoryCardGrid';
import Chatbot from '../chatbot/Chatbot ';

export default function Home() {
    const { user } = useSelector((state) => state.auth);
    const [electronics, setElectronics] = useState([]);
    const [grocery, setGrocery] = useState([]);
    const [menswear, setMenswear] = useState([]);
    const [womenwear, setWomenwear] = useState([]);
    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        if (!user) return;

        const fetchAllProducts = async () => {
            try {
                const { data } = await axiosClient.get('/product/allproduct');

                setFurniture(data.filter(item => item.category?.toLowerCase() === 'furniture'));
                setMenswear(data.filter(item => item.category?.toLowerCase() === 'men\'s wear'));
                setGrocery(data.filter(item => item.category?.toLowerCase() === 'grocery'));
                setElectronics(data.filter(item => item.category?.toLowerCase() === 'toy'));
                setWomenwear(data.filter(item => item.category?.toLowerCase() === 'womenwear'));
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchAllProducts();
    }, [user]);

    if (!user) {
        return <div className="p-4 text-xl text-center">Please log in to view products</div>;
    }
    console.log("vbhascv h");

    // console.log(...electronics.photo.url);

    return (
        <div className=' bg-white/95'>
            <Navbar />
            <div className='h-[30%]  mt-2  bg-white/95'>
                <MainCarousel />
            </div>
            <div className='flex justify-center items-center'>
                <CategoryCardGrid
                    products={[...electronics, ...grocery, ...menswear, ...womenwear, ...furniture]}

                />
            </div>

            <div className="p-4 space-y-12 bg-white/95">
                <CategorySection title="Stylish Furniture" products={furniture} />
                <CategorySection title="Top Grocery Picks" products={grocery} />
                <CategorySection title="Men's wear" products={menswear} />
                <CategorySection title="Best of Toys" products={electronics} />
                <CategorySection title="Women's Fashion" products={womenwear} />
            </div>
            <Chatbot />
            <Footer />
        </div>
    );
}

function CategorySection({ title, products }) {
    if (products.length === 0) return null;

    return (
        <section className=''>
            <h2 className="text-2xl  text-black font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </section>
    );
}