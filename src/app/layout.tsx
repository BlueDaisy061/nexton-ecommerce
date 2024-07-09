'use client';

import Image from 'next/image';
import './globals.css';
import { poppins } from './ui/fonts';
import { PrimaryButton, SecondaryButton } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavLinks } from './ui/navlinks';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = true;
  const pathname = usePathname();
  const numberOfProducts = 3;
  const [menuIsOpen, setMenuIsOpen] = useState<Boolean>(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <header className="flex justify-between content-center bg-default px-4 py-5 top-0 left-0 right-0 fixed z-10 md:px-[80px] md:py-4">
          <Image
            src="logo.svg"
            alt="nexton-logo"
            width={100}
            height={42}
            className="hidden md:block"
          />
          <Image src="favicon.svg" alt="favicon" width={24} height={24} className="md:hidden" />
          <NavLinks
            classNames="hidden md:text-sm md:flex md:flex-row md:leading-10"
            pathname={pathname}
          />
          <div className="bg-gray w-[200px] h-10 px-4 rounded-full flex items-center md:w-[250px] lg:w-[350px]">
            <Image
              src="search-icon.svg"
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
          <div>
            {isLoggedIn ? (
              <div className="hidden md:w-[80px] md:flex md:items-center">
                <>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                      <div>
                        <Image src="user-icon.svg" alt="user-icon" width={24} height={24} />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-default rounded-box z-[1] mt-3 w-48 p-2 shadow"
                    >
                      <li>
                        <Link href={'/login'}>Logout</Link>
                      </li>
                    </ul>
                  </div>

                  <Link href={'/checkout'} className="relative">
                    <Image
                      src="cart-icon.svg"
                      alt="cart-icon"
                      width={24}
                      height={24}
                      className="ml-[1vw]"
                    />
                    <div className="rounded-full bg-vibrant w-5 h-5 text-xs text-default text-center leading-5 absolute -top-3 -right-4">
                      {numberOfProducts}
                    </div>
                  </Link>
                </>
              </div>
            ) : (
              <div className="hidden md:w-[190px] md:flex md:justify-between">
                <PrimaryButton title="Sign up" />
                <SecondaryButton title="Log in" />
              </div>
            )}
            {menuIsOpen ? (
              <button className="py-1 md:hidden " onClick={closeMenu}>
                <Image
                  src="close-icon.svg"
                  alt="close-icon"
                  width={32}
                  height={28}
                  className="px-[9px] py-[7px]"
                />
              </button>
            ) : (
              <button className="py-1 md:hidden " onClick={openMenu}>
                <Image src="hamburger-menu.svg" alt="hamburger-menu" width={32} height={28} />
              </button>
            )}
          </div>
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
                      Cart ({numberOfProducts})
                    </Link>
                  </li>
                  <li className={pathname === '/login' ? 'font-semibold' : ''}>
                    <Link className="px-4" href={'/login'}>
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
        <div>{children}</div>
        <footer className="bg-default pt-6 left-0 right-0 border-t border-t-border">
          <div className="grid grid-cols-1 gap-[60px] px-6 py-6 md:grid-cols-4 md:px-[80px]">
            <div>
              <Image src="logo.svg" alt="Nexton-logo" width={100} height={42} className="mb-5" />
              <div className="grid grid-cols-1 gap-3">
                <div className="flex gap-2">
                  <Image src="facebook-logo.svg" alt="facebook-logo" width={16} height={16} />
                  <p>Facebook</p>
                </div>
                <div className="flex gap-2">
                  <Image src="youtube-logo.svg" alt="youtube-logo" width={16} height={16} />
                  <p>Youtube</p>
                </div>
                <div className="flex gap-2">
                  <Image src="telegram-logo.svg" alt="telegram-logo" width={16} height={16} />
                  <p>Telegram</p>
                </div>
                <div className="flex gap-2">
                  <Image src="twitter-logo.svg" alt="twitter-logo" width={16} height={16} />
                  <p>Twitter</p>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-5">Getting started</h5>
              <div className="grid grid-cols-1 gap-3">
                <p>Release Notes</p>
                <p>Upgrade Guide</p>
                <p>Browser Support</p>
                <p>Dark Mode</p>
              </div>
            </div>
            <div>
              <h5 className="mb-5">Explore</h5>
              <div className="grid grid-cols-1 gap-3">
                <p>Prototyping</p>
                <p>Design systems</p>
                <p>Pricing</p>
                <p>Security</p>
              </div>
            </div>
            <div>
              <h5 className="mb-5">Getting started</h5>
              <div className="grid grid-cols-1 gap-3">
                <p>Discussion Forums</p>
                <p>Code of Conduct</p>
                <p>Contributing</p>
                <p>API Reference</p>
              </div>
            </div>
          </div>
          <div className="py-5 text-center flex flex-col gap-3 border-t border-t-border md:flex-row md:justify-between md:px-[80px]">
            <p>Nexton eCommerce. © 2024</p>
            <div className="flex justify-center gap-1">
              {['visa', 'paypal', 'stripe', 'verisign'].map((paymentMethod, key) => (
                <Image
                  key={key}
                  src={`${paymentMethod}.svg`}
                  alt={paymentMethod}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
