import imageData from '../data.json';

export default function ImageGrid() {
  return (
    <section className="p-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {imageData.map((image) => (
            <div key={image.id} className="p-2">
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
