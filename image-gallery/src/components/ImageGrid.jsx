import imageData from '../data.json';

export default function ImageGrid () {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {imageData.map((image) => (
            <div
              key={image.id}
              className={`${
                image.category === 'Nature'
                  ? 'col-span-2'
                  : 'col-span-1'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

