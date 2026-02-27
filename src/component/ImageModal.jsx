import { useEffect } from "react";

const ImageModal = ({ image, onClose }) => {
  // close pakai ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      {/* Stop click propagation */}
      <div
        className="max-w-5xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt=""
          className="max-h-[85vh] w-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ImageModal;
