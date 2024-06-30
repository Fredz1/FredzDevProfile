"use client"

import React, { useState, useLayoutEffect } from 'react';
import "../style/page.css";

const DashboardPage = () => {

  // State variables
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  //check if user is logged in
  useLayoutEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch('/api/v1/auth/checkLogin');
        const data = await response.json();
        if (data.success) {
          setData(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);
  

  
  return (
    <div className=''>
      <h1>Dashboard</h1>

    </div>
  );
};

export default DashboardPage;