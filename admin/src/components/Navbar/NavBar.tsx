import React from 'react';
import navLogo from '../../../../public/logo.svg';
import mobileNavLogo from '../../../../public/favicon.svg';
import userLogo from '../../../../public/user-icon.svg';

function NavBar() {
  return (
    <div className="flex items-center justify-between bg-default mb-[1px] shadow-md z-10 top-0 left-0 right-0 px-6 py-5 md:md:px-[3.5rem] md:py-4 lg:px-[4.5rem]">
      <img src={navLogo} alt="logo" className="hidden md:block" />
      <img src={mobileNavLogo} alt="mobile-nav-logo" className="md:hidden" />
      <img src={userLogo} alt="profile-image" className="w-6 h-6" />
    </div>
  );
}

export default NavBar;
