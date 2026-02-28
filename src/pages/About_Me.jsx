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
                Games I Played The Most :
              </h5>

              {Games.map((game, i) => (
                <div key={i} className="py-4 border-b border-[#5c3d2e]/30">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-8 h-8 rounded-full bg-white"
                      src={game.img}
                      alt={game.alt}
                    />

                    <div>
                      <p className="font-medium">{game.id}</p>
                      <p className="text-[#EE9761] font-bold text-sm">
                        {game.playtime}
                      </p>
                      <p className="text-sm font-bold break-words">
                        Thoughts : {game.thoughts}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
