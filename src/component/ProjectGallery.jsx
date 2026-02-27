import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";

const PhotoGallery = ({
  images = [],
  autoSlide = true,
  intervalTime = 3000,
  mode = "slideshow", // 🔥 NEW PROP
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // =============================
  // SLIDESHOW MODE
  // =============================
  useEffect(() => {
    if (mode !== "slideshow") return;
    if (!autoSlide || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, autoSlide, intervalTime, mode]);

  if (!images || images.length === 0) return null;

  // =============================
  // STATIC MODE (DETAIL PAGE)
  // =============================
  if (mode === "static") {
    const staticImages = images.slice(0, 3);

    return (
      <div className="relative w-[420px] h-[650px] flex items-center justify-center">
        {staticImages.map((img, i) => {
          const positions = [
            { transform: "translateX(-140px) scale(0.85)", zIndex: 1 },
            { transform: "translateX(0px) scale(1)", zIndex: 2 },
            { transform: "translateX(140px) scale(0.85)", zIndex: 1 },
          ];

          return (
            <div
              key={i}
              className="absolute transition-all duration-700 ease-in-out"
              style={positions[i]}
            >
              <div
                className={`${
                  i === 1 ? "w-52" : "w-40"
                } aspect-[9/16] rounded-xl overflow-hidden shadow-xl`}
              >
                <img
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          );
        })}
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    );
  }

  // =============================
  // SLIDESHOW MODE (PORTOFOLIO)
  // =============================

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
            onClick={() => setSelectedImage(images[left])}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
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
            onClick={() => setSelectedImage(images[currentIndex])}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
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
            onClick={() => setSelectedImage(images[right])}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default PhotoGallery;
