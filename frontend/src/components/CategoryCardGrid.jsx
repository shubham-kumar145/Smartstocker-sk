// // // // import { useState, useMemo } from 'react'

// // // // export default function CategoryCardGrid({ products }) {
// // // //   // Group products by category
// // // //   const categoryMap = useMemo(() => {
// // // //     const map = {}
// // // //     for (const p of products) {
// // // //       if (!map[p.category]) map[p.category] = []
// // // //       map[p.category].push(p.name) // Using product name as subItem
// // // //     }
// // // //     return map
// // // //   }, [products])

// // // //   // Unique categories
// // // //   const categories = Object.keys(categoryMap)

// // // //   // Create exactly 8 cards, repeat categories if needed
// // // //   const cards = []
// // // //   for (let i = 0; i < 8; i++) {
// // // //     const category = categories[i % categories.length]
// // // //     cards.push({ category, subItems: categoryMap[category] })
// // // //   }

// // // //   return (
// // // //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
// // // //       {cards.map((card, idx) => (
// // // //         <CategoryCard key={`${card.category}-${idx}`} category={card.category} subItems={card.subItems} />
// // // //       ))}
// // // //     </div>
// // // //   )
// // // // }

// // // // function CategoryCard({ category, subItems }) {
// // // //   const [open, setOpen] = useState(false)

// // // //   return (
// // // //     <div className="border p-4 rounded shadow-sm">
// // // //       <button
// // // //         onClick={() => setOpen(!open)}
// // // //         className="font-semibold text-left w-full text-gray-800 hover:text-indigo-600"
// // // //       >
// // // //         {category}
// // // //       </button>
// // // //       {open && (
// // // //         <ul className="mt-2 pl-4 space-y-1">
// // // //           {subItems.map((item) => (
// // // //             <li key={item} className="text-gray-600 hover:text-black cursor-pointer">
// // // //               {item}
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       )}
// // // //     </div>
// // // //   )
// // // // }



// // // import { useState, useMemo } from 'react'

// // // export default function CategoryCardGrid({ products }) {
// // //     // Group products by category
// // //     const categoryMap = useMemo(() => {
// // //         const map = {}
// // //         for (const p of products) {
// // //             if (!map[p.category]) map[p.category] = []
// // //             map[p.category].push(p.name)
// // //         }
// // //         return map
// // //     }, [products])

// // //     const categories = Object.keys(categoryMap)

// // //     // Create exactly 8 cards, repeat categories if needed
// // //     const cards = []
// // //     for (let i = 0; i < 8; i++) {
// // //         const category = categories[i % categories.length]
// // //         cards.push({ category, subItems: categoryMap[category] })
// // //     }

// // //     return (
// // //         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-6">
// // //             {cards.map((card, idx) => (
// // //                 <CategoryCard
// // //                     key={`${card.category}- ${ idx }`}
// // //             category={card.category}
// // //             subItems={card.subItems}
// // //         />
// // //       ))}
// // //         </div>
// // //     )
// // // }

// // // function CategoryCard({ category, subItems }) {
// // //     const [open, setOpen] = useState(false)

// // //     return (
// // //         <div className="border p-4 rounded shadow-sm bg-white">
// // //             <button
// // //                 onClick={() => setOpen(!open)}
// // //                 className="font-semibold text-left w-full text-gray-800 hover:text-indigo-600"
// // //             >
// // //                 {category}
// // //             </button>
// // //             {open && (
// // //                 <ul className="mt-2 pl-4 space-y-1">
// // //                     {subItems.map((item) => (
// // //                         <li key={item} className="text-gray-600 hover:text-black cursor-pointer">
// // //                             {item}
// // //                         </li>
// // //                     ))}
// // //                 </ul>
// // //             )}
// // //         </div>
// // //     )
// // // }


// // // import { useMemo, useState } from 'react';

// // // export default function CategoryCardGrid({ products }) {
// // //     // Group products by category
// // //     const categoryMap = useMemo(() => {
// // //         const map = {};
// // //         for (const p of products) {
// // //             if (!map[p.category]) map[p.category] = [];
// // //             map[p.category].push(p.name);
// // //         }
// // //         return map;
// // //     }, [products]);

// // //     const categories = Object.keys(categoryMap);

// // //     // Create exactly 8 cards, repeat categories if needed
// // //     const cards = [];
// // //     for (let i = 0; i < 8; i++) {
// // //         const category = categories[i % categories.length];
// // //         cards.push({ category, subItems: categoryMap[category] });
// // //     }

// // //     return (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-8">
// // //             {cards.map((card, idx) => (
// // //                 <CategoryCard
// // //                     key={`${card.category}-${idx}`}
// // //                     category={card.category}
// // //                     subItems={card.subItems}
// // //                 />
// // //             ))}
// // //         </div>
// // //     );
// // // }

// // // function CategoryCard({ category, subItems }) {
// // //     const [selected, setSelected] = useState("");

// // //     return (
// // //         <div className="bg-white p-4 rounded-lg shadow-md border">
// // //             <label className="block text-gray-700 font-semibold mb-2">
// // //                 {category}
// // //             </label>
// // //             <select
// // //                 value={selected}
// // //                 onChange={(e) => setSelected(e.target.value)}
// // //                 className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //             >
// // //                 <option value="" disabled>
// // //                     Select a product
// // //                 </option>
// // //                 {subItems.map((item) => (
// // //                     <option key={item} value={item}>
// // //                         {item}
// // //                     </option>
// // //                 ))}
// // //             </select>
// // //         </div>
// // //     );
// // // }
// // import { useMemo, useState } from 'react';

// // export default function CategoryCardGrid({ products }) {
// //     // Group products by category
// //     const categoryMap = useMemo(() => {
// //         const map = {};
// //         for (const p of products) {
// //             const category = p.category?.toLowerCase();
// //             if (!map[category]) map[category] = [];
// //             map[category].push(p.name);
// //         }
// //         return map;
// //     }, [products]);

// //     const categories = Object.keys(categoryMap);

// //     // Create exactly 8 cards, repeat categories if needed
// //     const cards = [];
// //     for (let i = 0; i < 8; i++) {
// //         const category = categories[i % categories.length];
// //         cards.push({ category, subItems: categoryMap[category] });
// //     }

// //     return (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-8 px-4">
// //             {cards.map((card, idx) => (
// //                 <CategoryCard
// //                     key={`${card.category}-${idx}`}
// //                     category={card.category}
// //                     subItems={card.subItems}
// //                 />
// //             ))}
// //         </div>
// //     );
// // }

// // function CategoryCard({ category, subItems }) {
// //     const [selected, setSelected] = useState("");

// //     return (
// //         <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
// //             <label className="block text-lg font-semibold text-gray-800 capitalize mb-2">
// //                 {category}
// //             </label>
// //             <select
// //                 value={selected}
// //                 onChange={(e) => setSelected(e.target.value)}
// //                 className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             >
// //                 <option value="" disabled>
// //                     Select a product
// //                 </option>
// //                 {subItems.map((item) => (
// //                     <option key={item} value={item}>
// //                         {item}
// //                     </option>
// //                 ))}
// //             </select>
// //         </div>
// //     );
// // }
// import { useMemo, useState } from 'react';

// export default function CategoryCardGrid({ products }) {
//     const categoryMap = useMemo(() => {
//         const map = {};
//         for (const p of products) {
//             const category = p.category?.toLowerCase() || "uncategorized";
//             if (!map[category]) map[category] = [];
//             map[category].push(p.name || "Unnamed Product");
//         }
//         return map;
//     }, [products]);

//     const categories = Object.keys(categoryMap);

//     const cards = [];
//     for (let i = 0; i < 8; i++) {
//         const category = categories[i % categories.length];
//         cards.push({ category, subItems: categoryMap[category] || [] });
//     }

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-8 px-4 ">
//             {cards.map((card, idx) => (
//                 <CategoryCard
//                     key={`${card.category}-${idx}`}
//                     category={card.category}
//                     subItems={Array.isArray(card.subItems) ? card.subItems : []}
//                 />
//             ))}
//         </div>
//     );
// }

// function CategoryCard({ category = "Unknown", subItems = [] }) {
//     const [selected, setSelected] = useState("");

//     return (
//         <div className="bg-gray-50 p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
//             <label className="block text-lg font-semibold text-gray-800 capitalize mb-2">
//                 {category}
//             </label>
//             <select
//                 value={selected}
//                 onChange={(e) => setSelected(e.target.value)}
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//                 <option value="" disabled>
//                     Select a product
//                 </option>
//                 {subItems.map((item, index) => (
//                     <option key={`${item}-${index}`} value={item}>
//                         {item}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// }


import { useMemo, useState } from 'react';

export default function CategoryCardGrid({ products }) {
    const categoryMap = useMemo(() => {
        const map = {};
        for (const p of products) {
            const category = p.category?.toLowerCase() || "uncategorized";
            if (!map[category]) map[category] = [];
            map[category].push(p.name || "Unnamed Product");
        }
        return map;
    }, [products]);

    const categories = Object.keys(categoryMap);

    const cards = [];
    for (let i = 0; i < 8; i++) {
        const category = categories[i % categories.length];
        cards.push({ category, subItems: categoryMap[category] || [] });
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
            {cards.map((card, idx) => (
                <CategoryCard
                    key={`${card.category}-${idx}`}
                    category={card.category}
                    subItems={Array.isArray(card.subItems) ? card.subItems : []}
                />
            ))}
        </div>
    );
}

function CategoryCard({ category = "Unknown", subItems = [] }) {
    const [selected, setSelected] = useState("");

    return (
        <div className="bg-gray-50 p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 w-full">
            <label className="block text-base md:text-lg font-semibold text-gray-800 capitalize mb-2">
                {category}
            </label>
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <option value="" disabled>
                    Select a product
                </option>
                {subItems.map((item, index) => (
                    <option key={`${item}-${index}`} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}
