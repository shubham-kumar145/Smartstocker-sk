// // import React, { useEffect, useState } from "react";
// // import axios from "../utils/axiosClients";
// // import {
// //   LineChart,
// //   Line,
// //   ResponsiveContainer,
// //   Tooltip,
// //   XAxis,
// //   YAxis,
// // } from "recharts";
// // import axiosClient from "../utils/axiosClients";

// // const DashboardStats = () => {
// //   const [totalSales, setTotalSales] = useState(0);
// //   const [totalAccounts, setTotalAccounts] = useState(0);

// //   const [salesData, setSalesData] = useState([]);
// //   const [accountData, setAccountData] = useState([]);

// //   useEffect(() => {
// //     fetchStats();
// //   }, []);

// //   const fetchStats = async () => {
// //     try {
// //       const [userRes, productRes] = await Promise.all([
// //         axiosClient.get("/user/get-all-member"),
// //         axiosClient.get("/product/allproduct"),


// //     ]);
// //     console.log("hello");
// //     console.log(userRes);

// //     console.log("hello");
// //     console.log(productRes);

// //     console.log("hello");

// //       // Total Accounts
// //       setTotalAccounts(userRes.data.length);

// //       // Total Sales (simulated by summing price * stock)
// //       const total = productRes.data.reduce((acc, p) => acc + (p.price * (p.stock || 0)), 0);
// //       setTotalSales(total);

// //       // Mock chart trend data: Simulate 7-day trend (random for demo)
// //       const trend = Array.from({ length: 7 }).map((_, i) => ({
// //         day: Day `${i + 1}`,
// //         value: Math.floor(Math.random() * 1000) + 100,
// //       }));
// //       setSalesData(trend);
// //       setAccountData(trend.map(d => ({ ...d, value: d.value + 500 }))); // shift upward
// //     } catch (err) {
// //       console.error("Error fetching stats", err);
// //     }
// //   };

// //   const StatCard = ({ title, value, data, color, delta, iconColor }) => (
// //     <div className="bg-[#151c2c] rounded-xl p-6 shadow-md text-white w-full">
// //       <div className="flex items-center justify-between mb-2">
// //         <div className="text-2xl font-bold">${value.toLocaleString()}</div>
// //         <div className={`text-sm px-2 py-1 rounded-md ${delta > 0 ? 'bg-green-600' : 'bg-red-600'} text-white`}>
// //           {delta > 0 ? '↑' : '↓'} {Math.abs(delta)}%
// //         </div>
// //       </div>
// //       <p className="text-sm text-gray-400">{title}</p>
// //       <ResponsiveContainer width="100%" height={60}>
// //         <LineChart data={data}>
// //           <Line
// //             type="monotone"
// //             dataKey="value"
// //             stroke={color}
// //             strokeWidth={2}
// //             dot={false}
// //           />
// //           <Tooltip />
// //           <XAxis dataKey="day" hide />
// //           <YAxis hide />
// //         </LineChart>
// //       </ResponsiveContainer>
// //     </div>
// //   );

// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto my-10">
// //       <StatCard
// //         title="Total Sales"
// //         value={totalSales}
// //         data={salesData}
// //         color="#a855f7"
// //         delta={-8.6}
// //       />
// //       <StatCard
// //         title="Total Accounts"
// //         value={totalAccounts}
// //         data={accountData}
// //         color="#facc15"
// //         delta={23.7}
// //       />
// //     </div>
// //   );
// // };

// // export default DashboardStats;


// import React, { useEffect, useState } from "react";
// import axiosClient from "../utils/axiosClients";
// import {
//     LineChart,
//     Line,
//     ResponsiveContainer,
//     Tooltip,
//     XAxis,
//     YAxis,
// } from "recharts";

// const DashboardStats = () => {
//     const [totalSales, setTotalSales] = useState(0);
//     const [totalAccounts, setTotalAccounts] = useState(0);
//     const [salesData, setSalesData] = useState([]);
//     const [accountData, setAccountData] = useState([]);

//     useEffect(() => {
//         fetchStats();
//     }, []);

//     const fetchStats = async () => {
//         try {
//             const [userRes, productRes] = await Promise.all([
//                 axiosClient.get("/user/get-all-member"),
//                 axiosClient.get("/product/allproduct"),
//             ]);

//             const users = userRes.data;
//             const products = productRes.data;

//             setTotalAccounts(users.length);

//             const total = products.reduce((acc, p) => acc + (p.price * (p.stock || 0)), 0);
//             setTotalSales(total);

//             // Simulated 7-day trend data
//             const trend = Array.from({ length: 7 }).map((_, i) => ({
//                 day: `Day ${i + 1}`,
//                 value: Math.floor(Math.random() * 1000) + 100,
//             }));

//             setSalesData(trend);
//             setAccountData(trend.map(d => ({ ...d, value: d.value + 300 })));

//         } catch (err) {
//             console.error("Error fetching dashboard stats:", err);
//         }
//     };

//     const StatCard = ({ title, value, data, color, delta }) => (
//         <div className="bg-[#151c2c] rounded-xl p-6 shadow-md text-white w-full">
//             <div className="flex items-center justify-between mb-2">
//                 <div className="text-2xl font-bold">
//                     {title === "Total Sales" ? `$${value.toLocaleString()}` : value}
//                 </div>
//                 <div
//                     className={`text-sm px-2 py-1 rounded-md ${delta > 0 ? "bg-green-600" : "bg-red-600"
//                         } text-white`}
//                 >
//                     {delta > 0 ? "↑" : "↓"} {Math.abs(delta)}%
//                 </div>
//             </div>
//             <p className="text-sm text-gray-400">{title}</p>
//             <ResponsiveContainer width="100%" height={60}>
//                 <LineChart data={data}>
//                     <Line
//                         type="monotone"
//                         dataKey="value"
//                         stroke={color}
//                         strokeWidth={2}
//                         dot={false}
//                     />
//                     <Tooltip />
//                     <XAxis dataKey="day" hide />
//                     <YAxis hide />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     );

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto my-10">
//             <StatCard
//                 title="Total Sales"
//                 value={totalSales}
//                 data={salesData}
//                 color="#a855f7"
//                 delta={-8.6}
//             />
//             <StatCard
//                 title="Total Accounts"
//                 value={totalAccounts}
//                 data={accountData}
//                 color="#facc15"
//                 delta={12.3}
//             />
//         </div>
//     );
// };

// export default DashboardStats;


import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClients";
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const DashboardStats = () => {
    const [totalSales, setTotalSales] = useState(0);
    const [totalAccounts, setTotalAccounts] = useState(0);
    const [salesData, setSalesData] = useState([]);
    const [accountData, setAccountData] = useState([]);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [userRes, productRes] = await Promise.all([
                axiosClient.get("/user/get-all-member"),
                axiosClient.get("/product/allproduct"),
            ]);

            const users = userRes.data;
            const products = productRes.data;

            setTotalAccounts(users.length);

            const total = products.reduce((acc, p) => acc + (p.price * (p.stock || 0)), 0);
            setTotalSales(total);

            const trend = Array.from({ length: 7 }).map((_, i) => ({
                day: `Day ${i + 1}`,
                value: Math.floor(Math.random() * 1000) + 100,
            }));

            setSalesData(trend);
            setAccountData(trend.map(d => ({ ...d, value: d.value + 300 })));
        } catch (err) {
            console.error("Error fetching dashboard stats:", err);
        }
    };

    const StatCard = ({ title, value, data, color, gradientId, delta }) => (
        <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg w-full text-white flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
                <div className="text-2xl font-bold">
                    {title === "Total Sales" ? `$${value.toLocaleString()}` : value}
                </div>
                <div
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${delta > 0 ? "bg-green-600" : "bg-red-600"
                        }`}
                >
                    {delta > 0 ? "↑" : "↓"} {Math.abs(delta)}%
                </div>
            </div>
            <p className="text-sm text-gray-400 mb-3">{title}</p>
            <ResponsiveContainer width="100%" height={100}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke={color}
                        fillOpacity={1}
                        fill={`url(#${gradientId})`}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1e293b", borderRadius: "0.5rem", border: "none" }}
                        labelStyle={{ color: "#94a3b8" }}
                    />
                    <XAxis dataKey="day" hide />
                    <YAxis hide />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto my-8">
            <StatCard
                title="Total Sales"
                value={totalSales}
                data={salesData}
                color="#a855f7"
                gradientId="salesGradient"
                delta={-8.6}
            />
            <StatCard
                title="Total Accounts"
                value={totalAccounts}
                data={accountData}
                color="#facc15"
                gradientId="accountsGradient"
                delta={23.7}
            />
            <StatCard
                title="Weekly Sales"
                value={69452}
                data={salesData.map(d => ({ ...d, value: d.value - 200 }))}
                color="#0ea5e9"
                gradientId="weeklySalesGradient"
                delta={-8.6}
            />
        </div>
    );
};

export default DashboardStats;
