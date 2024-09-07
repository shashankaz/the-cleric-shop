"use client";

import { useState } from "react";
import { User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";

const categories = [
  "Mens",
  "Womens",
  "Electronics",
  "Sports",
  "Courses",
  "Books",
  "Games",
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const user = true;

  const toggleMobileMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 max-w-7xl mx-auto h-20 relative">
      <div>
        <Link href="/">
          <h1 className="font-mono uppercase md:text-2xl text-xl">
            The Cleric
          </h1>
        </Link>
      </div>
      <div className="hidden lg:flex items-center">
        <ul className="flex gap-4 uppercase text-sm font-semibold">
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={`/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        {user ? (
          <div className="flex gap-4">
            <Link href="/wishlist">
              <Heart />
            </Link>
            <Link href="/profile">
              <User />
            </Link>
            {/* <Link href="/cart">
              <ShoppingCart />
            </Link> */}
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/sign-in">
              <button className="bg-black border-black border-2 text-white px-3 py-1 rounded text-sm">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="border-black border-2 px-3 py-1 rounded text-sm">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="flex lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
        {mobileMenu ? <X size={20} /> : <Menu size={20} />}
      </div>
      {mobileMenu && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg pb-4 px-4 sm:px-8 md:px-16 lg:hidden text-sm z-50">
          <div>
            <Link href="/" onClick={() => setMobileMenu(false)}>
              <h1 className="font-semibold uppercase">Home</h1>
            </Link>
          </div>
          <div>
            <ul className="flex flex-col gap-2 uppercase font-semibold mt-8">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/${category.toLowerCase()}`}
                    onClick={() => setMobileMenu(false)}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {user ? (
              <div className="flex gap-4 mt-6">
                <Link href="/wishlist" onClick={() => setMobileMenu(false)}>
                  <Heart />
                </Link>
                <Link href="/profile" onClick={() => setMobileMenu(false)}>
                  <User />
                </Link>
                {/* <Link href="/cart" onClick={() => setMobileMenu(false)}>
                  <ShoppingCart />
                </Link> */}
              </div>
            ) : (
              <div className="flex gap-2 mt-6">
                <Link href="/sign-in" onClick={() => setMobileMenu(false)}>
                  <button className="bg-black border-black border-2 text-white px-3 py-1 rounded text-sm">
                    Sign In
                  </button>
                </Link>
                <Link href="/sign-up" onClick={() => setMobileMenu(false)}>
                  <button className="border-black border-2 px-3 py-1 rounded text-sm">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
