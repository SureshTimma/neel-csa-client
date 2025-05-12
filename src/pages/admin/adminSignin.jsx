import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "/src/config";

const AdminSignin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const url = `${config.apiUrl}/admin/signin`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onFormSubmission = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const fetchData = await fetch(url, options);
    const response = await fetchData.json();
    console.log(response);
    if (response.token){
      console.log("yes")
      localStorage.setItem("adminToken",response.token)
      navigate("/admin/Home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-sky-500 px-4 py-8">
        <form onSubmit={onFormSubmission} className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Admin Signin</h1>

            <div className="mb-5">
            <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>

            <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-700">
                Password
            </label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>

            <button type="submit" className="w-full bg-blue-700 text-white font-bold py-2 rounded-lg hover:bg-blue-800 transition-all duration-300">
            Submit
            </button>

            <p className="mt-6 text-center text-sm text-gray-700">
            Not registered yet?
            <span onClick={() => navigate("/admin/signup")} className="text-blue-700 font-semibold hover:underline ml-1 cursor-pointer">
                Sign Up
            </span>
            </p>
        </form>
    </div>

  );
};

export default AdminSignin;
