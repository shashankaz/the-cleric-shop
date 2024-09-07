import Link from "next/link";

const OurStory = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen py-8">
      <h1 className="text-3xl font-medium mb-6">Our Story</h1>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
        <p className="mb-4">
          Welcome to The Cleric, your go-to destination for discovering amazing
          products from top retailers. We are passionate about bringing you the
          best deals and high-quality items through our carefully curated
          affiliate links.
        </p>
        <p className="mb-4">
          Our mission is to make online shopping easier and more enjoyable by
          connecting you with reputable retailers and providing you with
          valuable insights and recommendations. Although we don&apos;t handle
          product shipping or customer service directly, we work hard to ensure
          you find what you need and have a seamless shopping experience.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
        <p className="mb-4">
          At The Cleric, our mission is to simplify your shopping journey by
          offering a curated selection of products through trusted retailers. We
          strive to provide you with:
        </p>
        <ul className="list-disc list-inside mb-4 flex flex-col gap-1">
          <li>
            <strong>Expert Recommendations:</strong> Our team works diligently
            to research and recommend the best products to suit your needs.
          </li>
          <li>
            <strong>Exclusive Deals:</strong> By partnering with top retailers,
            we aim to bring you exclusive offers and promotions.
          </li>
          <li>
            <strong>Seamless Shopping Experience:</strong> We focus on creating
            a user-friendly platform that makes finding and purchasing products
            easy and enjoyable.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Our Values</h3>
        <p className="mb-4">
          We are committed to upholding the following values in everything we
          do:
        </p>
        <ul className="list-disc list-inside mb-4 flex flex-col gap-1">
          <li>
            <strong>Integrity:</strong> We provide honest and transparent
            recommendations to help you make informed decisions.
          </li>
          <li>
            <strong>Customer Focus:</strong> Your satisfaction is our priority.
            We are dedicated to ensuring a positive shopping experience.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously seek new ways to
            improve and enhance our platform to better serve you.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
        <p className="mb-4">
          We love hearing from our users and are here to help with any questions
          or feedback you may have. Feel free to{" "}
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
            contact us
          </Link>{" "}
          anytime.
        </p>
      </section>
    </div>
  );
};

export default OurStory;
