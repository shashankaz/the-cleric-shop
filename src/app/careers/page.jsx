import Link from "next/link";

export const metadata = {
  title: "Careers",
};

const Careers = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen py-8">
      <h1 className="text-3xl font-medium mb-6">Careers at Cleric</h1>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
        <p className="mb-4">
          At Cleric, we are passionate about connecting customers with
          top-quality products through our affiliate partnerships. We are always
          looking for talented and motivated individuals to join our team and
          help us achieve our mission of enhancing the online shopping
          experience.
        </p>
        <p className="mb-4">
          Explore our current job openings and see if there&apos;s a role that
          fits your skills and interests. If you&apos;re enthusiastic about
          working in a dynamic and innovative environment, we&apos;d love to
          hear from you!
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Current Openings</h3>
        <div className="flex flex-col gap-4">
          <div className="border p-4 rounded-md shadow-sm">
            <h4 className="text-lg font-semibold mb-2">
              Affiliate Marketing Specialist
            </h4>
            <p className="mb-2">
              As an Affiliate Marketing Specialist, you will manage and optimize
              our affiliate partnerships, drive performance, and collaborate
              with retailers to enhance our affiliate programs.
            </p>
            <Link
              href="/apply/affiliate-marketing-specialist"
              className="text-blue-600 hover:text-blue-800"
            >
              Learn More & Apply
            </Link>
          </div>
          <div className="border p-4 rounded-md shadow-sm">
            <h4 className="text-lg font-semibold mb-2">
              Content Marketing Manager
            </h4>
            <p className="mb-2">
              In this role, you will create engaging content that drives traffic
              and conversions, manage content strategies, and work closely with
              our marketing team to build our brand presence.
            </p>
            <Link
              href="/apply/content-marketing-manager"
              className="text-blue-600 hover:text-blue-800"
            >
              Learn More & Apply
            </Link>
          </div>
          <div className="border p-4 rounded-md shadow-sm">
            <h4 className="text-lg font-semibold mb-2">
              Customer Experience Coordinator
            </h4>
            <p className="mb-2">
              The Customer Experience Coordinator will handle customer
              inquiries, ensure a positive experience on our site, and work with
              our partners to resolve any issues effectively.
            </p>
            <Link
              href="/apply/customer-experience-coordinator"
              className="text-blue-600 hover:text-blue-800"
            >
              Learn More & Apply
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>
        <ul className="list-disc list-inside mb-4 flex flex-col gap-1">
          <li>
            <strong>Innovative Environment:</strong> Be part of a
            forward-thinking team that values creativity and innovation.
          </li>
          <li>
            <strong>Career Growth:</strong> We offer opportunities for
            professional development and career advancement.
          </li>
          <li>
            <strong>Collaborative Culture:</strong> Work in a supportive and
            collaborative environment where your ideas are valued.
          </li>
          <li>
            <strong>Competitive Benefits:</strong> Enjoy a range of benefits,
            including flexible working arrangements and health coverage.
          </li>
        </ul>
        <p className="mb-4">
          If you&apos;re ready to make an impact and grow with us, check out our
          open positions and apply today!
        </p>
        <p>
          For any questions about career opportunities, feel free to{" "}
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
            contact us
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default Careers;
