import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';

function SideBar() {
  return (
    <div className="">
      <Link to={'/add-product'} className="no-underline">
        <div className="flex gap-2">
          <PlusCircleIcon className="w-5 h-5" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/list-products'} className="no-underline">
        <div className="flex gap-2">
          <BuildingStorefrontIcon className="w-5 h-5" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}

export default SideBar;
