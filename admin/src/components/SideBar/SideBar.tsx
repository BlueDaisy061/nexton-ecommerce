import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';

function SideBar() {
  return (
    <div className="bg-default flex flex-row w-full lg:max-w-[250px] lg:flex-col lg:h-min-[100vh]">
      <Link to={'/add-product'} className="no-underline w-[50vw] lg:w-auto">
        <div className="w-full flex items-center justify-center gap-4 py-7 px-6 border-b-[1px] border-border lg:justify-start">
          <PlusCircleIcon className="w-5 h-5" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/'} className="no-underline w-[50vw] lg:w-auto">
        <div className="flex items-center justify-center gap-4 py-7 px-6 border-b-[1px] border-l-[1px] border-border lg:justify-start">
          <BuildingStorefrontIcon className="w-5 h-5" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}

export default SideBar;
