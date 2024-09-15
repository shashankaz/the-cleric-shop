const ProductTabs = ({ activeTab, handleTabClick }) => {
  return (
    <div className="py-10">
      <div className="flex gap-4 mb-4">
        {["description", "comments"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 font-semibold text-sm md:text-base ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === "description" && (
        <div className="text-sm md:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          blanditiis quidem provident voluptates vel omnis ratione aspernatur
          officia repudiandae vero ad eaque impedit veritatis totam aliquid
          facilis enim doloremque, ut nesciunt, quam pariatur deserunt eveniet
          autem quisquam. Repellendus blanditiis dolores numquam, atque ratione
          repellat ex fugit accusantium delectus, commodi nobis.
        </div>
      )}

      {activeTab === "comments" && (
        <div className="text-sm md:text-base text-gray-700">
          <p>Coming Soon!!</p>
        </div>
      )}
    </div>
  );
};

export default ProductTabs;
