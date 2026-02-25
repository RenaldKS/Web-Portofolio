import { useEffect, useState } from "react";

const PhotoGallery = ({
  images = [],
  autoSlide = true,
  intervalTime = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, autoSlide, intervalTime]);

  if (images.length === 0) return null;

  const left = currentIndex === 0 ? images.length - 1 : currentIndex - 1;

  const right = (currentIndex + 1) % images.length;

  return (
    <div className="relative w-[420px] h-[650px] flex items-center justify-center">
      {/* LEFT */}
      <div
        className="absolute transition-all duration-700 ease-in-out"
        style={{ transform: "translateX(-140px) scale(0.85)", zIndex: 1 }}
      >
        <div className="w-40 aspect-[9/16] rounded-xl overflow-hidden shadow-xl">
          <img
            src={images[left]}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            alt=""
          />
        </div>
      </div>

      {/* CENTER */}
      <div
        className="absolute transition-all duration-700 ease-in-out"
        style={{ transform: "translateX(0px) scale(1)", zIndex: 2 }}
      >
        <div className="w-52 aspect-[9/16] rounded-xl overflow-hidden shadow-2xl">
          <img
            src={images[currentIndex]}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            alt=""
          />
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="absolute transition-all duration-700 ease-in-out"
        style={{ transform: "translateX(140px) scale(0.85)", zIndex: 1 }}
      >
        <div className="w-40 aspect-[9/16] rounded-xl overflow-hidden shadow-xl">
          <img
            src={images[right]}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
