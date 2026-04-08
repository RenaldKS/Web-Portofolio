import Games from "../data/games";
import Fp from "../data/futureplan";

const AboutMe = () => {
  return (
    <section className="animate-fade-in flex-1 flex items-center text-white px-6 lg:px-24 py-12 md:py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-10 text-center md:text-left">
          More About Me
        </h1>

        {/* CARDS CONTAINER */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* FUTURE PLAN CARD */}
          <div className="flex-1">
            <div className="w-full p-6 bg-[#33333] border border-[#5c3d2e] rounded shadow-xs">
              <h5 className="text-xl font-semibold mb-4">
                Future Projects Plan :
              </h5>

              {Fp.map((fp, i) => (
                <div key={i} className="py-4 border-b border-[#5c3d2e]/30">
                  <p className="font-medium">{fp.title}</p>
                  <p className="text-[#EE9761] font-bold text-sm">{fp.desc}</p>
                  <p className="text-sm font-bold">Technology : {fp.techno}</p>
                </div>
              ))}
            </div>
          </div>

          {/* GAMES CARD */}
          <div className="flex-1">
            <div className="w-full p-6 bg-[#33333] border border-[#5c3d2e] rounded shadow-xs">
              <h5 className="text-xl font-semibold mb-4">
                More Details About Me :
              </h5>

              <div className="py-4 border-b border-[#5c3d2e]/30">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-medium">Name :</p>
                    <p className="text-[#EE9761] font-bold ">
                      Renaldi Karya Surbakti
                    </p>
                    <p className="font-medium">Age :</p>
                    <p className="text-[#EE9761] font-bold ">24 Year Old</p>
                    <p className="font-medium">University :</p>
                    <p className="text-[#EE9761] font-bold ">
                      Universitas Komputer Indonesia
                    </p>
                    <p className="font-medium">Jurusan/Degree :</p>
                    <p className="text-[#EE9761] font-bold ">
                      Teknik Informatika
                    </p>
                    <p className="font-medium">Skripsi/Thesis :</p>
                    <p className="text-[#EE9761] font-bold ">
                      Perancangan Aplikasi Monitor Individu dengan Skizofernia
                      Memanfaatkan Teknologi Smartband
                    </p>
                    <p className="font-medium">Location :</p>
                    <p className="text-[#EE9761] font-bold ">Bandar Lampung</p>
                    <p className="font-medium">Zodiac :</p>
                    <p className="text-[#EE9761] font-bold ">Gemini</p>
                    <p className="font-medium">MBTI Personality :</p>
                    <p className="text-[#EE9761] font-bold ">ENTP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
