import React, { useEffect, useState } from 'react';
import UserNavbar from '../../components/UserNavbar';

const UserPurchases = () => {
  const [purchases, setPurchases] = useState([]);

  const fetchPurchases = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/purchases', {
        headers: {
          'token': localStorage.getItem('userToken')
        },
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data)
      setPurchases(data.purchases);
    } catch (error) {
      console.error('Error fetching purchases:', error);
    }
  };

  useEffect(() => {
    fetchPurchases();
  }, []);

  return (
    <div>
      <UserNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Purchased Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchases.map((purchase) => (
            <div key={purchase._id} className="bg-white rounded-lg shadow-md p-6">
              
              {/* <h2 className="text-xl font-bold mb-2">{purchase.courseId}</h2> */}
              {/* Add more course details as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPurchases;