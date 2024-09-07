import Link from "next/link";

const Blog = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen py-8">
      <h1 className="text-3xl font-medium mb-6">Blog Coming Soon!</h1>
      <p className="mb-6">
        We're excited to announce that our blog is on its way! We&apos;re
        working hard to bring you insightful and engaging content related to the
        latest trends, product reviews, and shopping tips.
      </p>
      <p className="mb-6">Here&apos;s a sneak peek of what you can expect:</p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Product Reviews:</strong> In-depth reviews and comparisons of
          the latest products from top retailers.
        </li>
        <li>
          <strong>Shopping Tips:</strong> Expert advice and tips to help you
          make informed purchasing decisions.
        </li>
        <li>
          <strong>Industry Insights:</strong> Updates and insights into trends
          and developments in the e-commerce and affiliate marketing world.
        </li>
        <li>
          <strong>Exclusive Deals:</strong> Information on special offers and
          discounts available through our affiliate links.
        </li>
      </ul>
      <p className="mb-6">
        Stay tuned for more updates! We can&apos;t wait to share our content
        with you. In the meantime, feel free to{" "}
        <Link href="/contact" className="text-blue-600 hover:text-blue-800">
          contact us
        </Link>{" "}
        if you have any questions or need assistance.
      </p>
      <p>Thank you for your patience and support!</p>
    </div>
  );
};

export default Blog;
