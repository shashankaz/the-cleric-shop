const ShippingReturns = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen py-8">
      <h1 className="text-3xl font-medium mb-6">Shipping & Returns</h1>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Shipping Policy</h3>
        <p className="mb-4">
          Please note that we are an affiliate site, meaning that we provide
          links to products on other retailers&apos; websites. As such, the
          shipping of products is handled by the respective retailer. Here are
          the general guidelines:
        </p>
        <ul className="list-disc list-inside mb-4 flex flex-col gap-2">
          <li>
            <strong>Processing Time:</strong> Orders are processed by the
            retailer according to their own timeline, typically within 1-2
            business days.
          </li>
          <li>
            <strong>Shipping Time:</strong> Delivery times vary based on the
            retailer&apos;s shipping method and your location. Check the
            retailer&apos;s site for estimated delivery times.
          </li>
          <li>
            <strong>Shipping Costs:</strong> Shipping costs are calculated by
            the retailer based on the shipping method selected and the delivery
            address. These costs will be shown at checkout on the
            retailer&apos;s site.
          </li>
          <li>
            <strong>International Shipping:</strong> Many retailers offer
            international shipping. Please refer to the retailer&apos;s website
            for specific details on international shipping options and costs.
          </li>
          <li>
            <strong>Order Tracking:</strong> After placing an order, you will
            receive tracking information directly from the retailer to monitor
            your shipment.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Returns Policy</h3>
        <p className="mb-4">
          As we operate on an affiliate model, returns and exchanges are managed
          by the retailer. Here&apos;s what you should know:
        </p>
        <ul className="list-disc list-inside mb-4 flex flex-col gap-2">
          <li>
            <strong>Return Window:</strong> Most retailers accept returns within
            30 days of receipt. Please ensure the product is in its original
            condition and packaging.
          </li>
          <li>
            <strong>Return Process:</strong> To return a product, follow the
            retailer&apos;s return instructions provided on their website.
            Typically, you will need to contact their customer service or use
            their online return portal.
          </li>
          <li>
            <strong>Return Shipping:</strong> Return shipping costs are
            generally the responsibility of the customer, unless the item is
            defective or incorrect. Check the retailer&apos;s return policy for
            details.
          </li>
          <li>
            <strong>Refunds:</strong> Refunds will be processed by the retailer
            once the returned item is received and inspected. This process can
            take 5-7 business days from the receipt of the return.
          </li>
          <li>
            <strong>Exchanges:</strong> For exchanges, please refer to the
            retailer&apos;s policy. Contact their customer service for
            assistance with exchanging a product.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ShippingReturns;
