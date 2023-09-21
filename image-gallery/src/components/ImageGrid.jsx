import imageData from '../data.json';
import { useState } from 'react';

export default function ImageGrid() {
  const [images, setImages] = useState(imageData);
  const [draggedImage, setDraggedImage] = useState(null);

  const handleDragStart = (e, image) => {
    setDraggedImage(image);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetImage) => {
    e.preventDefault();

    const updatedImages = [...images];

    const draggedIndex = updatedImages.findIndex((img) => img.id === draggedImage.id);
    const targetIndex = updatedImages.findIndex((img) => img.id === targetImage.id);

    [updatedImages[draggedIndex], updatedImages[targetIndex]] = [updatedImages[targetIndex], updatedImages[draggedIndex]];

    setImages(updatedImages);
  };

  return (
    <section className="p-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {images.map((image) => (
            <div
              key={image.id}
              className="p-2"
              draggable
              onDragStart={(e) => handleDragStart(e, image)}
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, image)}
            >
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">{image.description}</p>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 mr-2 text-xs font-semibold text-white bg-blue-500 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
