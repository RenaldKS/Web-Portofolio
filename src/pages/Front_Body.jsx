import githubicn from "../assets/img/25231.png";
import linkedicn from "../assets/img/linked.png";
import profileimg from "../assets/img/pasfoto5.png";
import steamicn from "../assets/img/steam.png";

const Front_Body = () => {
  return (
    <section className="animate-fade-in flex-1 flex items-center text-white px-6 lg:px-24 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-[#33333] rounded border pr-2 pb-2 border-[#5c3d2e] px-2 py-2 ">
        {/* KOLOM KIRI: Teks & Button */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-4xl font-bold text-[#e29e6d]">
            Hello and Welcome !
          </h1>

          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">It's Me, Renaldi</h2>
            <p className="text-white font-medium text-sm italic">
              renaldikaryas@gmail.com
            </p>

            <p className="text-[#e29e6d] font-medium text-lg italic">
              Informatic Engineering Fresh Graduate
            </p>

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
            <a
              href="/CV_Renaldi Karya Surbakti_2026_Reworked.pdf"
              download="CV_Renaldi_Karya_Surbakti.pdf"
              className="px-8 py-3 bg-[#e29e6d] text-black font-bold rounded shadow-lg hover:bg-[#d18d5c] transition-all transform hover:-translate-y-1 inline-block text-center"
            >
              Get my CV
            </a>
            <a
              href="/aboutme"
              className="px-8 py-3 bg-white text-black font-bold rounded shadow-lg hover:bg-gray-200 transition-all transform hover:-translate-y-1"
            >
              More
            </a>
          </div>
        </div>

        <div className="hidden md:block w-px h-80 bg-gradient-to-b from-transparent via-[#e29e6d]/50 to-transparent mx-4"></div>

        {/* KOLOM KANAN: Foto & Sosmed */}
        <div className="flex-1 flex flex-col items-center gap-8 py-3">
          {/* Container Foto */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#e29e6d] shadow-[0_0_50px_rgba(226,158,109,0.2)]">
            <img
              src={profileimg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left w-full md:pl-12">
            <p className="font-bold mb-4 text-lg text-gray-300">Find me :</p>
            <div className="flex justify-center md:justify-start gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/renaldi-karya-surbakti/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#e29e6d] hover:text-black transition-colors transition-all transform hover:-translate-y-1 inline-block"
              >
                <img src={linkedicn} alt="LinkedIn" className="h-7 w-7" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/RenaldKS"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#e29e6d] hover:text-black transition-colors transition-all transform hover:-translate-y-1 inline-block"
              >
                <img src={githubicn} alt="GitHub" className="h-7 w-7" />
              </a>

              {/* Steam */}
              <a
                href="https://steamcommunity.com/id/Zeyrex/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#e29e6d] hover:text-black transition-colors transition-all transform hover:-translate-y-1 inline-block"
              >
                <img src={steamicn} alt="Steam" className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Front_Body;
