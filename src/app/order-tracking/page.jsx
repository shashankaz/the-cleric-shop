import Link from "next/link";

const OrderTracking = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen py-8">
      <h1 className="text-3xl font-medium mb-6">Order Tracking</h1>

      <section>
        <h3 className="text-xl font-semibold mb-4">How to Track Your Order</h3>
        <p className="mb-4">
          Since we operate as an affiliate site, the orders are fulfilled and
          shipped by the retailer. To track your order, follow these general
          steps:
        </p>
        <ol className="list-decimal list-inside mb-4 flex flex-col gap-2">
          <li>
            <strong>Check Your Confirmation Email:</strong> After placing an
            order, you will receive a confirmation email from the retailer. This
            email typically includes your order number and a link to track your
            shipment.
          </li>
          <li>
            <strong>Visit the Retailer&apos;s Website:</strong> Go to the
            retailer's website and navigate to their order tracking page. Enter
            your order number or tracking number to get the status of your
            shipment.
          </li>
          <li>
            <strong>Use the Tracking Number:</strong> The confirmation email or
            retailer&apos;s website will provide a tracking number. You can use
            this number on the retailer&apos;s tracking page to view the
            delivery status.
          </li>
          <li>
            <strong>Contact Retailer&apos;s Customer Service:</strong> If you
            encounter any issues with tracking your order, or if you have
            questions about the status of your shipment, contact the
            retailer&apos;s customer service directly for assistance.
          </li>
        </ol>
        <p className="mb-4">
          Please note that tracking details and procedures may vary depending on
          the retailer. If you need additional help, refer to the
          retailer&apos;s help or FAQ sections on their website.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Need Further Assistance?</h3>
        <p className="mb-4">
          If you have any other questions or need help with anything else, feel
          free to{" "}
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
            contact us
          </Link>
          . We&apos;re here to help!
        </p>
      </section>
    </div>
  );
};

export default OrderTracking;
