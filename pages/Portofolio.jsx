import { useNavigate } from "react-router-dom";
import projects from "../src/data/project";
import PhotoGallery from "../component/ProjectGallery";

const Portofolio = () => {
  const navigate = useNavigate();

  const showcaseImages = projects.flatMap((project) => project.images);

  return (
    <section className="animate-fade-in flex-1 flex items-center  text-white px-6 lg:px-24 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* LEFT SIDE - LIST PROJECT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-[#FFFFF]">My Projects :</h1>

          <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-[#e29e6d]/50 to-transparent"></div>

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="cursor-pointer w-full border border-gray-700 rounded-xl p-6 bg-black hover:border-orange-400 transition duration-300"
            >
              <div className="flex gap-6 items-start">
                {/* Thumbnail */}
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-orange-400 text-lg font-semibold mb-2">
                    {project.title}
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* <button className="bg-orange-400 text-black px-2 py-1 rounded-md hover:bg-white transition">
                    View More
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - REUSABLE SLIDESHOW */}
        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#e29e6d]/50 to-transparent"></div>
        <div className="hidden md:block sticky top-65 self-start">
          <PhotoGallery images={showcaseImages} />
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
