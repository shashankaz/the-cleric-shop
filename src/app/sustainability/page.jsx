import Link from "next/link";

const Sustainability = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen py-8">
      <h1 className="text-3xl font-medium mb-6">
        Our Commitment to Sustainability
      </h1>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
        <p className="mb-4">
          At The Cleric, we are dedicated to promoting sustainability in every
          aspect of our business. As an affiliate-based e-commerce platform, we
          strive to work with retailers and partners who share our commitment to
          environmental and social responsibility.
        </p>
        <p className="mb-4">
          Our mission is to contribute to a greener future by advocating for
          sustainable products and practices, while also supporting initiatives
          that reduce our carbon footprint and promote ethical business
          practices.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Sustainable Practices</h3>
        <ul className="list-disc list-inside mb-4 flex flex-col gap-1">
          <li>
            <strong>Partnering with Eco-Friendly Retailers:</strong> We
            carefully select affiliate partners who prioritize sustainability
            and offer products with minimal environmental impact.
          </li>
          <li>
            <strong>Promoting Ethical Products:</strong> Our product
            recommendations focus on items that are produced using sustainable
            materials and fair labor practices.
          </li>
          <li>
            <strong>Reducing Carbon Footprint:</strong> By operating online, we
            reduce the need for physical storefronts and associated energy
            consumption.
          </li>
          <li>
            <strong>Supporting Green Initiatives:</strong> We support and
            participate in initiatives aimed at reducing waste, conserving
            resources, and promoting environmental stewardship.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">How You Can Help</h3>
        <p className="mb-4">
          As our valued customer, you can also contribute to sustainability by
          making informed choices. Here’s how you can make a difference:
        </p>
        <ul className="list-disc list-inside mb-4 flex flex-col gap-1">
          <li>
            <strong>Choose Sustainable Products:</strong> Look for products
            labeled as eco-friendly, organic, or made from recycled materials.
          </li>
          <li>
            <strong>Reduce Waste:</strong> Opt for products with minimal
            packaging and consider reusable alternatives.
          </li>
          <li>
            <strong>Support Ethical Brands:</strong> Buy from brands that are
            committed to fair labor practices and social responsibility.
          </li>
          <li>
            <strong>Stay Informed:</strong> Educate yourself about
            sustainability issues and how your choices impact the environment.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
        <p className="mb-4">
          We believe that together, we can make a positive impact on the planet.
          If you have ideas or want to learn more about our sustainability
          efforts, feel free to{" "}
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
            contact us
          </Link>
          .
        </p>
        <p>
          Join us in our commitment to sustainability and help us create a
          better future for generations to come.
        </p>
      </section>
    </div>
  );
};

export default Sustainability;
