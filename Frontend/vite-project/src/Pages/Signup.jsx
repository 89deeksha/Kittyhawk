import React, { useState } from 'react'
import axios from "axios";

function Signup() {

  const [credential, setCredential] = useState(true);

  // Signup form states (unchanged)
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    password: ""
  });

  // 🔥 Signin state added
  const [signinData, setSigninData] = useState({
    name: "",
    password: ""
  });

  // ================= SIGNUP API (YOUR CODE) ===================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData || !formData.name || !formData.lastname || !formData.password) {
      alert("All fields are required")
      return;
    }

    console.log(formData);

    try {
      const res = await axios.post('http://localhost:8000/api/user/signup', {
        name: formData.name,
        lastname: formData.lastname,
        password: formData.password
      });

      console.log(res.data);
      alert("Signup Successful!");
    } catch (error) {
      console.error(error);
      alert("Signup Failed!");
    }

    setFormData({ name: "", lastname: "", password: "" });
  };

  // ================= SIGNIN API Added ==================
  const handleSignin = async (e) => {
    e.preventDefault();
    if (!signinData.name || !signinData.password) {
      alert("Enter name & password")
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/user/signin", {
        name: signinData.name,
        password: signinData.password
      });

      localStorage.setItem("authToken", res.data.token);  // Token stored
      alert("Logged in Successfully!");

      setSigninData({ name: "", password: "" });

    } catch (error) {
      console.error(error);
      alert("Signin Failed!");
    }
  };

  // ================= LOGOUT ==================
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Logged Out");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-auto w-[400px] border p-6 bg-white rounded-lg shadow-lg">

        <h1 className='text-center text-2xl font-semibold'>Auth</h1>

        {/* Switch Buttons */}
        <div className='flex gap-2 mb-3'>
          <button onClick={() => setCredential(true)} className={`${credential ? "bg-blue-500 text-white" : ""} border rounded-sm p-2 w-full`}>Signup</button>
          <button onClick={() => setCredential(false)} className={`${!credential ? "bg-blue-500 text-white" : ""} border rounded-sm p-2 w-full`}>Signin</button>
        </div>

        {/* 🔥 Form changes automatically based on credential */}
        <form onSubmit={credential ? handleSubmit : handleSignin}>

          {/* ========== SIGNUP FORM (UNCHANGED) ========== */}
          {credential ?
            <>
              <label className='font-semibold'>Name:</label>
              <input className='border rounded-sm py-1 px-3 w-full mb-3'
                type="text" placeholder='Enter name ' value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

              <label className='font-semibold'>lastname:</label>
              <input className='border rounded-sm py-1 px-3 w-full mb-3'
                type="text" placeholder='Enter lastname' value={formData.lastname}
                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />

              <label className='font-semibold'>Password:</label>
              <input className='border rounded-sm py-1 px-3 w-full'
                type="password" placeholder='Enter password' value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

              <button type='submit' className='w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded'>
                Signup
              </button>
            </>
            :
            <>
              {/* ========== SIGNIN FORM Added WITHOUT altering your design ========== */}
              <label className='font-semibold'>name:</label>
              <input className='border rounded-sm py-1 px-3 w-full mb-3'
                type="text" placeholder='Enter name' value={signinData.name}
                onChange={(e) => setSigninData({ ...signinData, name: e.target.value })} />

              <label className='font-semibold'>password:</label>
              <input className='border rounded-sm py-1 px-3 w-full'
                type="password" placeholder='Enter password' value={signinData.password}
                onChange={(e) => setSigninData({ ...signinData, password: e.target.value })} />

              <button type="submit" className='w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded'>
                Signin
              </button>

              {/* 🔥 LOGOUT BUTTON Added */}
              <button type="button" onClick={handleLogout}
                className='w-full mt-2 px-4 py-2 bg-red-500 text-white rounded'>
                Logout
              </button>
            </>
          }
        </form>

      </div>
    </div>
  )
}

export default Signup;
