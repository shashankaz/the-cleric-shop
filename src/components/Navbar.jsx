"use client";

import Link from "next/link";
import { User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

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
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const pathname = usePathname();

  const [cartItems, setCartItems] = useState([]);
  const { user } = useUser();
  const userId = user?.id;

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`/api/cart/${userId}`);
        const data = await response.json();
        setCartItems(data.cart.items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (userId) {
      fetchCartItems();
    }
  }, [userId]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 max-w-7xl mx-auto h-20">
        <div onClick={handleToggle} className="cursor-pointer">
          <Menu strokeWidth={1.5} size={20} />
        </div>
        <div>
          <Link href="/">
            {/* <h1 className="font-mono uppercase md:text-3xl text-2xl font-bold">
              The Cleric
            </h1> */}
            <Image
              src="/logo.png"
              width={160}
              height={160}
              className="-translate-y-3"
              draggable="false"
            />
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/wishlist" className="hidden sm:flex">
            <Heart strokeWidth={1.5} size={20} />
          </Link>
          <Link href="/profile">
            <User strokeWidth={1.5} size={20} />
          </Link>
          <Link href="/cart" className="relative inline-flex items-center">
            <ShoppingCart strokeWidth={1.5} size={20} />
            {cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cartItems.length}
              </div>
            )}
          </Link>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-10"
            onClick={handleClose}
          />
          <div
            ref={sidebarRef}
            className={`fixed inset-y-0 left-0 z-20 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } sm:w-72 md:w-96 w-full`}
          >
            <div className="flex justify-between items-center py-6 sm:py-8 px-4 sm:px-8 md:px-16">
              <div onClick={handleClose} className="cursor-pointer">
                <X strokeWidth={1.5} size={20} />
              </div>
              <div>
                <Link href="/">
                  <h1 className="font-mono uppercase md:text-3xl text-2xl font-bold flex sm:hidden">
                    The Cleric
                  </h1>
                </Link>
              </div>
              <div className="flex sm:hidden gap-4">
                <Link href="/wishlist" className="hidden sm:flex">
                  <Heart strokeWidth={1.5} size={20} />
                </Link>
                <Link href="/profile">
                  <User strokeWidth={1.5} size={20} />
                </Link>
              </div>
            </div>
            <ul className="mt-4 px-4 sm:px-8 md:px-16 space-y-4">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href={`/${category.toLowerCase()}`}>
                    <p
                      className={`block text-xl px-4 py-2 rounded-md transition-colors duration-200 ${
                        pathname === `/${category.toLowerCase()}`
                          ? "bg-black text-white"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={handleClose}
                    >
                      {category}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
