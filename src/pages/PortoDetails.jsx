import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/project";
import PhotoGallery from "../component/ProjectGallery";
import ghIcn from "../assets/img/25231.png";

const PortoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <section className="animate-fade-in flex-1 flex items-center  text-white px-6 lg:px-24 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* LEFT SIDE - LIST PROJECT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-[#FFFFF]">{project.title}</h1>
          <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-[#e29e6d]/50 to-transparent"></div>
          <div className="flex-1">
            <h2 className="text-orange-400 text-2xl font-semibold mb-2">
              Summary
            </h2>

            <p className="text-gray-300 text-xl leading-relaxed mb-4">
              {project.summary}
            </p>
            <h2 className="text-orange-400 text-2xl font-semibold mb-5">
              Technology Used :
            </h2>
            <div className="flex flex-wrap gap-1 mb-2">
              {project.technology.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-[#e29e6d] hover:text-black transition-colors transition-all transform hover:-translate-y-1 inline-block"
            >
              <img src={ghIcn} alt="GitHub" className="h-7 w-7" />
            </a>
            <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-[#e29e6d]/50 to-transparent"></div>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 text-black px-4 py-2 mt-6 rounded-md hover:bg-white transition font-semibold transition-all transform hover:-translate-y-1 inline-block"
            >
              ← Back
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - REUSABLE SLIDESHOW */}
        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#e29e6d]/50 to-transparent pointer-events-none"></div>
        <div className="hidden md:block sticky top-65 self-start z-10">
          <PhotoGallery
            images={project.images}
            mode="static"
            autoSlide={false}
          />
        </div>
      </div>
    </section>
  );
};

export default PortoDetails;
