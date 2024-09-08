"use client";

import Link from "next/link";
import { User, Heart, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
            <h1 className="font-mono uppercase md:text-3xl text-2xl font-bold">
              The Cleric
            </h1>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/wishlist" className="hidden sm:flex">
            <Heart strokeWidth={1.5} size={20} />
          </Link>
          <Link href="/profile">
            <User strokeWidth={1.5} size={20} />
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
            <ul className="mt-4 px-4 sm:px-8 md:px-16">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href={`/${category.toLowerCase()}`}>
                    <p className="text-xl mb-6" onClick={handleClose}>
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
