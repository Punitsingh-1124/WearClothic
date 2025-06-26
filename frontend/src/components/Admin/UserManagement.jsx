///-------In this code many errors----///

// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addUser, deleteUser, fetchUsers, updateUser } from '../../redux/slices/adminSlice';

// const UserManagement = () => {
//     ///delete this 
//     // const users = [
//     //     {
//     //         _id: 12345,
//     //         name: "John doe",
//     //         email: "John@example.comm",
//     //         role: "admin",
//     //     },
//     // ]

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const { user } = useSelector((state) => state.auth);
//     const { users, loading, error } = useSelector((state) => state.admin);

//     useEffect(() => {
//         if (user && user.role !== "admin") {
//             navigate("/");
//         }
//     }, [user, navigate]);

//     useEffect(() => {
//     if(user && user.role === "admin"){
//          dispatch(fetchUsers());
//     }
//     }, [dispatch, user])

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         role: "customer", // Default role
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(addUser(formData));

//         //Reset the form after submission
//         setFormData({
//             name: "",
//             email: "",
//             password: "",
//             role: "",
//         });
//     };

//     const handleRoleChange = (userId, newRole) => {
//         dispatch(updateUser({ id: userId, role: newRole }));
//     }

//     const handleDeleteUser = (userId) => {
//         if (window.confirm("Are you sure you want to delete this user?")) {
//             dispatch(deleteUser(userId));
//         }
//     }


//     return (
//         <div className='max-w-7xl mx-auto p-6'>
//             <h2 className="text-2xl font-bold mb-4">User Management</h2>
//             {loading && <p>loading...</p>}
//             {error && <p>Error: {error}</p>}
//             {/* Add New User Form */}
//             <div className="p-6 rounded-lg mb-6">
//                 <h3 className="text-lg font-bold mb-4">Add New Users</h3>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Name</label>
//                         <input
//                             type="text"
//                             name='name'
//                             value={formData.name}
//                             onChange={handleChange}
//                             className='w-full p-2 border rounded'
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             name='email'
//                             value={formData.email}
//                             onChange={handleChange}
//                             className='w-full p-2 border rounded'
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             name='password'
//                             value={formData.password}
//                             onChange={handleChange}
//                             className='w-full p-2 border rounded'
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Role</label>
//                         <select
//                             name="role"
//                             value={formData.role}
//                             onChange={handleChange}
//                             className='w-full p-2 border rounded'
//                         >
//                             <option value="customer">Customer</option>
//                             <option value="Admin">Admin</option>
//                         </select>
//                     </div>
//                     <button
//                         type='submit'
//                         className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//                     >
//                         Add User
//                     </button>
//                 </form>
//             </div>

//             {/* User List Management */}
//             <div className="overflow-x-auto shadow-md sm:rounded-lg">
//                 <table className='min-w-full text-left text-gray-500'>
//                     <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
//                         <tr>
//                             <th className="py-3 px-4">Name</th>
//                             <th className="py-3 px-4">Email</th>
//                             <th className="py-3 px-4">Role</th>
//                             <th className="py-3 px-4">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr
//                                 key={user._id}
//                                 className='border-b hover:bg-gray-50'>
//                                 <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
//                                     {user.name}
//                                 </td>
//                                 <td className="p-4">
//                                     {user.email}
//                                 </td>
//                                 <td className="p-4">
//                                     <select
//                                         name='role'
//                                         value={user.role}
//                                         className='p-2 border rounded'
//                                         onChange={(e) => handleRoleChange(user._id, e.target.value)}
//                                     >
//                                         <option value="customer" className="">Customer</option>
//                                         <option value="admin" className="">Admin</option>
//                                     </select>
//                                 </td>
//                                 <td className="p-4">
//                                     <button
//                                         onClick={() => handleDeleteUser(user._id)}
//                                         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default UserManagement

/// this is fix code

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addUser,
  deleteUser,
  fetchUsers,
  updateUser,
} from "../../redux/slices/adminSlice";

const UserManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { users = [], loading, error } = useSelector((state) => state.admin);

  /* ------------------------------------------------------------------ */
  /* 1. Guard: only admins may view this page                            */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  /* ------------------------------------------------------------------ */
  /* 2. Fetch current users list                                         */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (user && user.role === "admin") {
      dispatch(fetchUsers());
    }
  }, [dispatch, user]);

  /* ------------------------------------------------------------------ */
  /* 3. Local form state for adding a new user                           */
  /* ------------------------------------------------------------------ */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addUser resolves to the created user – we await it, then refetch list
    await dispatch(addUser(formData));
    dispatch(fetchUsers());
    setFormData({ name: "", email: "", password: "", role: "customer" });
  };

  /* ------------------------------------------------------------------ */
  /* 4. Helpers for role update / delete                                 */
  /* ------------------------------------------------------------------ */
  const handleRoleChange = async (userId, newRole) => {
    await dispatch(updateUser({ id: userId, role: newRole }));
    dispatch(fetchUsers());
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  /* ------------------------------------------------------------------ */
  /* 5. Render                                                           */
  /* ------------------------------------------------------------------ */
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {loading && <p>Loading …</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {/* ---------- Add-user form ---------- */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              {/* backend expects lower-case values */}
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add User
          </button>
        </form>
      </div>

      {/* ---------- Users table ---------- */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {u.name}
                </td>
                <td className="p-4">{u.email}</td>
                <td className="p-4">
                  <select
                    value={u.role}
                    className="p-2 border rounded"
                    onChange={(e) => handleRoleChange(u._id, e.target.value)}
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleDeleteUser(u._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && !loading && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;

