import {
  UserCircleIcon,
  CodeBracketIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import githubicn from "../src/img/25231.png";
import linkedicn from "../src/img/linked.png";
import profileimg from "../src/img/ME12.jpeg";

const Front_Body = () => {
  return (
    <section className="animate-fade-in flex-1 flex items-center bg-[#0A0A0A] text-white px-6 lg:px-24 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* KOLOM KIRI: Teks & Button */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-4xl font-bold text-[#e29e6d]">
            Hello and Welcome !
          </h1>

          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">It's Me, Renaldi</h2>
            <p className="text-[#e29e6d] font-medium text-lg italic">
              Informatic Engineering Fresh Graduate
            </p>
            {/* Dekorasi menggunakan Heroicons */}
            <div className="flex items-center gap-2 text-gray-500">
              <span>🦆_________</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-xl">
            An Informatics Engineer Fresh Graduate at University of Computer
            Bandung (UNIKOM) and will graduate. Have a strong passion for
            technology and about development of Android Software or Web
            Software. As to contribute to technology development in Indonesia
            and the world. Really love about learning how technology advances
            and how it works.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-[#e29e6d] text-black font-bold rounded shadow-lg hover:bg-[#d18d5c] transition-all transform hover:-translate-y-1">
              Get my CV
            </button>
            <button className="px-8 py-3 bg-white text-black font-bold rounded shadow-lg hover:bg-gray-200 transition-all transform hover:-translate-y-1">
              More
            </button>
          </div>
        </div>

        {/* GARIS PEMBATAS VERTIKAL */}
        <div className="hidden md:block w-px h-80 bg-gradient-to-b from-transparent via-[#e29e6d]/50 to-transparent mx-4"></div>

        {/* KOLOM KANAN: Foto & Sosmed */}
        <div className="flex-1 flex flex-col items-center gap-8">
          {/* Container Foto */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#e29e6d] shadow-[0_0_50px_rgba(226,158,109,0.2)]">
            <img
              src={profileimg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Social Media menggunakan Heroicons */}
          <div className="text-center md:text-left w-full md:pl-12">
            <p className="font-bold mb-4 text-lg text-gray-300">Find me :</p>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/renaldi-karya-surbakti/"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#e29e6d] hover:text-black transition-colors"
              >
                <img src={linkedicn} alt="LinkedIn" className="h-7 w-7" />
              </a>
              <a
                href="https://github.com/RenaldKS"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#e29e6d] hover:text-black transition-colors"
              >
                <img src={githubicn} className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Front_Body;
