import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../components/AddProduct/AddProduct';
import ListProduct from '../../components/ListProduct/ListProduct';

function Admin() {
  return (
    <div className="flex flex-col lg:flex-row">
      <SideBar />
      <Routes>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/list-product" element={<ListProduct />} />
      </Routes>
    </div>
  );
}

export default Admin;
