import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Firebase config
import { collection, getDocs } from 'firebase/firestore'; // Firestore functions

const Table = () => {
    const [users, setUsers] = useState([]);

    // Fetch Users from Firestore
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Users'));
                const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="bg-gray-900 container mx-auto p-4 mt-6">
            <h1 className="text-2xl font-bold mb-4">Registered Students</h1>
            <table className="min-w-full border border-gray-200 shadow-md">
                <thead>
                    <tr className="text-left">
                    <th className="py-2 px-4 border-b border-r-2">S.No</th>
                        <th className="py-2 px-4 border-b border-r-2">Name</th>
                        <th className="py-2 px-4 border-b border-r-2">Email</th>
                        <th className="py-2 px-4 border-b border-r-2">Phone Number</th>
                        <th className="py-2 px-4 border-b border-r-2">College</th>
                        <th className="py-2 px-4 border-b border-r-2">Course</th>
                        <th className="py-2 px-4 border-b border-r-2">Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id} className="border-b">
                            <td className="py-2 px-4 border-r-2">{index + 1}</td>
                            <td className="py-2 px-4 border-r-2">{user.fullName}</td>
                            <td className="py-2 px-4 border-r-2">{user.email}</td>
                            <td className="py-2 px-4 border-r-2">{user.contactNumber}</td>
                            <td className="py-2 px-4 border-r-2">{user.college}</td>
                            <td className="py-2 px-4 border-r-2">{user.course}</td>
                            <td className="py-2 px-4 border-r-2">
                                {user.paymentDetails[0]?.paymentStatus ? (
                                    <span className="text-green-500 font-bold">Paid</span>
                                ) : (
                                    <span className="text-red-500 font-bold">Not Paid</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
