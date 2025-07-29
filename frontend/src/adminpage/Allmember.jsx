// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import axiosClient from '../utils/axiosClients';

// const Allmember = () => {
//     const [member, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [memberrole, setmemberrole] = useState('');
//     const { user } = useSelector((state) => state.auth);
// console.log(memberrole+"feadwe");

// // if(memberrole){
// //      useEffect(() => {
// //         fetchMember(memberrole);
// //     }, []);
// // }else{
// //      useEffect(() => {
// //         fetchMember();
// //     }, [])
// // }




//     useEffect(() => {
//         fetchMember();
//     }, []);

//     const fetchMember = async () => {
//         try {
//             setLoading(true);
//             const { data } = await axiosClient.get('/user/get-all-member');
//             setProducts(data);
//         } catch (err) {
//             setError('Failed to fetch members');
//         } finally {
//             setLoading(false);
//         }
//     };
//     const handleDelete = async (merberid) => {
//         console.log(merberid);
//         try {
//             await axiosClient.delete(`/admin/delete-member/${merberid}`);   // here i use back tick
//             alert("Deleted successfully");
//             fetchMember();
//         } catch (err) {
//             setError('Failed to delete member');
//             console.error(err);
//         }
//     };

//     // if(memberrole === 'user'){

//     // }


//     const filterdata = memberrole
//         ? member.filter((data) => data.role === memberrole)
//         : member;
//     // const filterdata =member

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
//                     <span>{error}</span>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-[#f0f0f0] text-black px-4 py-6">
//             <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-2">
//                 <NavLink
//                     to="/admin-panal"
//                     className="text-lg font-semibold hover:text-blue-600 transition"
//                 >
//                     Admin Panel
//                 </NavLink>
//                 <h1 className="text-2xl font-bold">All Members</h1>
//                 <div className="text-right">
//                     <p>Welcome, <span className="uppercase">{user?.firstName}</span></p>
//                     <p className="text-sm text-gray-600">{user?.emailId}</p>
//                     <p className="text-sm text-gray-600">{user?.mobileNo}</p>
//                 </div>
//             </div>

//             <div className="mb-6">
//                 <label htmlFor="filter" className="mr-2 font-medium">Filter by Role:</label>
//                 <select
//                     name="filter"
//                     id="filter"
//                     value={memberrole}
//                     onChange={(e) => setmemberrole(e.target.value)}
//                     className="px-3 py-2 border rounded"
//                 >
//                     <option value="">All</option>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                     <option value="staff">Staff</option>
//                 </select>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {filterdata.length > 0 ? (
//                     filterdata.map((user) => (
//                         <div key={user._id} className="bg-white p-4 rounded shadow">
//                             <h3 className="text-lg font-semibold capitalize">
//                                 {user.firstName} {user.lastName}
//                             </h3>
//                             <p>Email: {user.emailId}</p>
//                             <p>Role: {user.role}</p>
//                             <button
//                                 onClick={() => handleDelete(user._id)}
//                                 className="bg-red-600 hover:bg-red-800 text-white text-xs px-3 py-1 rounded-md shadow-sm transition"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-center col-span-full">No members found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Allmember;





// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import axiosClient from '../utils/axiosClients';

// const Allmember = () => {
//     const [member, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [memberrole, setmemberrole] = useState('');
//     const { user } = useSelector((state) => state.auth);

//     const fetchMember = async () => {
//         try {
//             setLoading(true);
//             const endpoint = memberrole
//                 ? `/admin/get-all-${memberrole}`
//                 : '/user/get-all-member';
//             const { data } = await axiosClient.get(endpoint);
//             setProducts(data);
//         } catch (err) {
//             setError('Failed to fetch members');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchMember();
//     }, [memberrole]);

//     const handleDelete = async (memberId) => {
//         try {
//             await axiosClient.delete(`/admin/delete-member/${memberId}`);
//             alert('Deleted successfully');
//             fetchMember(); // Refresh list
//         } catch (err) {
//             setError('Failed to delete member');
//             console.error(err);
//         }
//     };

//     const filterdata = member;

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
//                     <span>{error}</span>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-[#f0f0f0] text-black px-4 py-6">
//             <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-2">
//                 <NavLink
//                     to="/admin-panal"
//                     className="text-lg font-semibold hover:text-blue-600 transition"
//                 >
//                     Admin Panel
//                 </NavLink>
//                 <h1 className="text-2xl font-bold">All Members</h1>
//                 <div className="text-right">
//                     <p>Welcome, <span className="uppercase">{user?.firstName}</span></p>
//                     <p className="text-sm text-gray-600">{user?.emailId}</p>
//                     <p className="text-sm text-gray-600">{user?.mobileNo}</p>
//                 </div>
//             </div>

//             <div className="mb-6">
//                 <label htmlFor="filter" className="mr-2 font-medium">Filter by Role:</label>
//                 <select
//                     name="filter"
//                     id="filter"
//                     value={memberrole}
//                     onChange={(e) => setmemberrole(e.target.value)}
//                     className="px-3 py-2 border rounded"
//                 >
//                     <option value="">All</option>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                     <option value="staff">Staff</option>
//                 </select>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {filterdata.length > 0 ? (
//                     filterdata.map((user) => (
//                         <div key={user._id} className="bg-white p-4 rounded shadow">
//                             <h3 className="text-lg font-semibold capitalize">
//                                 {user.firstName} {user.lastName}
//                             </h3>
//                             <p>Email: {user.emailId}</p>
//                             <p>Role: {user.role}</p>
//                             <button
//                                 onClick={() => handleDelete(user._id)}
//                                 className="bg-red-600 hover:bg-red-800 text-white text-xs px-3 py-1 rounded-md shadow-sm transition"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-center col-span-full">No members found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Allmember;



import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axiosClient from '../utils/axiosClients';

const Allmember = () => {
    const [member, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [memberrole, setmemberrole] = useState('');
    const { user } = useSelector((state) => state.auth);

    const fetchMember = async () => {
        try {
            setLoading(true);
            const endpoint = memberrole
                ? `/admin/get-all-${memberrole}`
                : '/user/get-all-member';
            const { data } = await axiosClient.get(endpoint);
            setProducts(data);
        } catch (err) {
            setError('Failed to fetch members');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMember();
    }, [memberrole]);

    const handleDelete = async (memberId) => {
        try {
            await axiosClient.delete(`/admin/delete-member/${memberId}`);
            alert('Deleted successfully');
            fetchMember(); // Refresh list
        } catch (err) {
            setError('Failed to delete member');
            console.error(err);
        }
    };

    const filterdata = member;

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
                    <span>{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#111827] text-white px-6 py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                <NavLink
                    to="/admin-panal"
                    className="text-lg font-semibold text-blue-400 hover:text-blue-500 transition"
                >
                    Admin Panel
                </NavLink>
                <h1 className="text-2xl font-bold uppercase text-white">All Members</h1>
                <div className="text-right">
                    <p>
                        Welcome,{" "}
                        <span className="uppercase font-semibold text-blue-300">
                            {user?.firstName}
                        </span>
                    </p>
                    <p className="text-sm text-gray-400">{user?.emailId}</p>
                    <p className="text-sm text-gray-400">{user?.mobileNo}</p>
                </div>
            </div>

            {/* Filter Dropdown */}
            <div className="mb-6">
                <label htmlFor="filter" className="mr-2 font-medium text-white">
                    Filter by Role:
                </label>
                <select
                    name="filter"
                    id="filter"
                    value={memberrole}
                    onChange={(e) => setmemberrole(e.target.value)}
                    className="px-3 py-2 bg-[#1f2937] text-white border border-gray-600 rounded-lg"
                >
                    <option value="">All</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                </select>
            </div>

            {/* Member List */}
            {filterdata.length > 0 ? (
                <div className="space-y-4">
                    {filterdata.map((user) => (
                        <div
                            key={user._id}
                            className="flex justify-between items-center bg-[#1f2937] border border-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
                                <div>
                                    <p className="text-lg font-semibold capitalize">
                                        {user.firstName} {user.lastName}
                                    </p>
                                    <p className="text-sm text-gray-400">Email: {user.emailId}</p>
                                    <p className="text-sm text-gray-400">
                                        Role:{" "}
                                        <span className="capitalize text-blue-400">{user.role}</span>
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDelete(user._id)}
                                className="ml-4 bg-red-600 hover:bg-red-800 text-white text-sm px-4 py-1 rounded-md transition"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-400">No members found.</p>
            )}
        </div>

    );
};

export default Allmember;
