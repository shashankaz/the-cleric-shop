"use client";

import Image from "next/image";
import { images } from "./images";
import { useState, useEffect } from "react";

const ProductImageGallery = ({
  mainImage = "https://images.pexels.com/photos/3642047/pexels-photo-3642047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
}) => {
  const [modelOpen, setModelOpen] = useState(false);
  const [modalImage, setModalImage] = useState(mainImage);

  const openModal = (src) => {
    setModalImage(src);
    setModelOpen(true);
  };

  const closeModal = () => setModelOpen(false);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="h-[452px] w-full md:w-1/2 flex flex-col justify-between">
      <div className="h-[340px] w-full rounded-md overflow-hidden">
        <Image
          src={mainImage}
          height={1000}
          width={1000}
          className="h-full w-full object-cover cursor-pointer"
          draggable={false}
          onClick={() => openModal(mainImage)}
        />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="h-24 w-36 rounded-md overflow-hidden cursor-pointer"
          >
            <Image
              src={image.src}
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
              draggable={false}
              onClick={() => openModal(image.src)}
            />
          </div>
        ))}
      </div>
      {modelOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[70vh] w-[70vw]" onClick={closeModal}>
              <Image
                src={modalImage}
                height={1000}
                width={1000}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
