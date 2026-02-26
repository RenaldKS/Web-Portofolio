import Games from "../data/games";
const aboutme = () => {
  return (
    <>
      <section className="animate-fade-in flex-1 flex items-center  text-white px-6 lg:px-24 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
          {/* LEFT SIDE - LIST PROJECT */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold text-[#FFFFF]">About Me</h1>
            <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-[#e29e6d]/50 to-transparent"></div>
            <div className="More About Me">
              <h1 className="text-2xl font-bold text-[#FFFFF]">
                More About Me
              </h1>
              <p>ENTP, Gemini</p>
            </div>
            <div className="Games">
              {/* CARD */}
              <div class="w-full max-w-sm p-6 bg-[#232323] border border-default rounded-base shadow-xs">
                <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-semibold leading-none text-heading">
                    Games I Played The Most :
                  </h5>
                </div>
                {Games.map((game) => (
                  <div class="flow-root">
                    <ul role="list" class="divide-y divide-default">
                      <li class="py-4 sm:py-4">
                        <div class="flex items-center gap-2">
                          <div class="shrink-0">
                            <img
                              class="w-8 h-8 rounded-full"
                              src={game.img}
                              alt={game.alt}
                            />
                          </div>
                          <div class="flex-1 min-w-0 ms-2">
                            <p class="font-medium text-heading truncate">
                              {game.id}
                            </p>
                            <p class="text-sm text-body truncate">
                              {game.playtime}
                            </p>
                            <p class="text-sm text-body truncate">
                              Thoughts : {game.thoughts}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-[#e29e6d]/50 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - REUSABLE SLIDESHOW */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#e29e6d]/50 to-transparent"></div>
          <div className="hidden md:block sticky top-65 self-start">
            <h1> Test</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutme;
