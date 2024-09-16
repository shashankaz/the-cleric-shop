import Image from "next/image";
import { images } from "./images";

const ProductImageGallery = ({
  mainImage = "https://images.pexels.com/photos/3642047/pexels-photo-3642047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
}) => {
  return (
    <div className="h-[452px] w-full md:w-1/2 flex flex-col justify-between">
      <div className="h-[340px] w-full rounded-md overflow-hidden">
        <Image
          src={mainImage}
          height={1000}
          width={1000}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        {images.map((image) => (
          <div key={image.id} className="h-24 w-36 rounded-md overflow-hidden">
            <Image
              src={image.src}
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
