import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from './navlinks';
import { Dropdown, MenuProps, Space } from 'antd';
import { PrimaryButton, SecondaryButton } from './button';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import React from 'react';
import { ProductContext } from '../(context)/context';

export const Header = () => {
  const { isLoggedIn, loggedInHandler } = useContext(ProductContext);
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState<Boolean>(false);
  const listOfProducts = [];

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <Link href={'/login'} onClick={loggedInHandler}>
          Logout
        </Link>
      ),
      key: '0',
    },
  ];
  return (
    <>
      <header className="flex justify-between content-center bg-default px-6 py-5 top-0 left-0 right-0 fixed z-10 drop-shadow-sm md:px-[3.5rem] md:py-4 lg:px-[4.5rem]">
        <Link href={'/'} className="hidden md:block">
          <Image src="/logo.svg" alt="nexton-logo" width={100} height={42} />
        </Link>
        <Link href={'/'} className="self-center md:hidden">
          <Image src="/favicon.svg" alt="favicon" width={24} height={24} />
        </Link>
        <NavLinks
          classNames="hidden md:text-sm md:flex md:flex-row md:leading-10"
          pathname={pathname}
        />
        <div className="bg-gray w-[200px] h-10 px-4 rounded-full flex items-center md:w-[250px] lg:w-[350px]">
          <Image
            src="/search-icon.svg"
            alt="search-icon"
            width={14}
            height={14}
            className="mr-1.5"
          />
          <input
            type="text"
            placeholder="Search in products..."
            className="w-full bg-inherit text-xs placeholder:bg-gray focus:outline-none bg-gray"
          />
        </div>
        {isLoggedIn ? (
          <div className="hidden md:w-[80px] md:flex md:items-center">
            <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="hover:cursor-pointer">
                  <Image src="/user-icon.svg" alt="user-icon" width={24} height={24} />
                </Space>
              </a>
            </Dropdown>

            <Link href={'/checkout'} className="relative">
              <Image
                src="/cart-icon.svg"
                alt="cart-icon"
                width={24}
                height={24}
                className="ml-[1vw]"
              />
              <div className="rounded-full bg-vibrant w-5 h-5 text-xs text-default text-center leading-5 absolute -top-3 -right-4">
                {listOfProducts.length}
              </div>
            </Link>
          </div>
        ) : (
          <div className="hidden md:w-[190px] md:flex md:justify-end md:self-center md:gap-3 md:h-8 lg:w-[250px] lg:h-12 lg:gap-4">
            <Link href={'/register'}>
              <PrimaryButton title="Sign up" style="md:text-xs md:px-3 lg:py-[10px] lg:text-sm" />
            </Link>
            <Link href={'/login'}>
              <SecondaryButton title="Log in" style="md:text-xs md:px-3 lg:px-7 lg:text-sm" />
            </Link>
          </div>
        )}
        {menuIsOpen ? (
          <button className="py-1 md:hidden" onClick={closeMenu}>
            <Image
              src="/close-icon.svg"
              alt="close-icon"
              width={32}
              height={28}
              className="px-[9px] py-[7px]"
            />
          </button>
        ) : (
          <button className="py-1 md:hidden " onClick={openMenu}>
            <Image src="/hamburger-menu.svg" alt="hamburger-menu" width={32} height={28} />
          </button>
        )}
      </header>
      {menuIsOpen && (
        <nav
          className="bg-gray z-50 block w-auto h-auto fixed top-20 bottom-0 right-0 left-0"
          onClick={closeMenu}
        >
          <NavLinks
            classNames="flex flex-col text-center pt-11 gap-8 text-sm"
            pathname={pathname}
            onClick={openMenu}
          />
          <ul className="flex flex-col text-center pt-14 gap-8 text-sm">
            {isLoggedIn ? (
              <>
                <li className={pathname === '/checkout' ? 'font-semibold' : ''}>
                  <Link className="px-4" href={'/checkout'}>
                    Cart ({listOfProducts.length})
                  </Link>
                </li>
                <li className={pathname === '/login' ? 'font-semibold' : ''}>
                  <Link className="px-4" href={'/login'} onClick={loggedInHandler}>
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className={pathname === '/register' ? 'font-semibold' : ''}>
                  <Link className="px-4" href={'/register'}>
                    Sign up
                  </Link>
                </li>
                <li className={pathname === '/login' ? 'font-semibold' : ''}>
                  <Link className="px-4" href={'/login'}>
                    Log in
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};
