import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="flex flex-col gap-8 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto py-10">
        <Image
          src="/logo.png"
          alt="Cleric"
          width={140}
          height={140}
          className="-translate-x-5 filter invert"
          draggable="false"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Shop</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link prefetch={false} href="/new-arrivals">
                  <span className="hover:text-gray-400 transition duration-200">
                    New Arrivals
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/best-sellers">
                  <span className="hover:text-gray-400 transition duration-200">
                    Best Sellers
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/categories">
                  <span className="hover:text-gray-400 transition duration-200">
                    Categories
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/sale">
                  <span className="hover:text-gray-400 transition duration-200">
                    Sale
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link prefetch={false} href="/contact">
                  <span className="hover:text-gray-400 transition duration-200">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/faqs">
                  <span className="hover:text-gray-400 transition duration-200">
                    FAQs
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/shipping-returns">
                  <span className="hover:text-gray-400 transition duration-200">
                    Shipping & Returns
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/order-tracking">
                  <span className="hover:text-gray-400 transition duration-200">
                    Order Tracking
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link prefetch={false} href="/our-story">
                  <span className="hover:text-gray-400 transition duration-200">
                    Our Story
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/careers">
                  <span className="hover:text-gray-400 transition duration-200">
                    Careers
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/sustainability">
                  <span className="hover:text-gray-400 transition duration-200">
                    Sustainability
                  </span>
                </Link>
              </li>
              <li>
                <Link prefetch={false} href="/blog">
                  <span className="hover:text-gray-400 transition duration-200">
                    Blog
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Social</h2>
            <ul className="flex gap-4 text-2xl">
              <li>
                <Link
                  prefetch={false}
                  href="https://facebook.com/yourpage"
                  passHref
                >
                  <FaFacebook className="hover:text-gray-400 transition duration-200" />
                </Link>
              </li>
              <li>
                <Link
                  prefetch={false}
                  href="https://instagram.com/yourprofile"
                  passHref
                >
                  <FaInstagram className="hover:text-gray-400 transition duration-200" />
                </Link>
              </li>
              <li>
                <Link
                  prefetch={false}
                  href="https://twitter.com/yourprofile"
                  passHref
                >
                  <FaXTwitter className="hover:text-gray-400 transition duration-200" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between gap-4 text-sm">
          <h1>
            &copy; {new Date().getFullYear()} Cleric. All rights reserved.
          </h1>
          <ul className="flex gap-4 text-center">
            <li>
              <Link prefetch={false} href="/privacy-policy">
                <span className="hover:text-gray-400 transition duration-200">
                  Privacy Policy
                </span>
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/terms-of-service">
                <span className="hover:text-gray-400 transition duration-200">
                  Terms of Service
                </span>
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/cookie-policy">
                <span className="hover:text-gray-400 transition duration-200">
                  Cookie Policy
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
