import Games from "../data/games";
import Fp from "../data/futureplan";
const aboutme = () => {
  return (
    <>
      <section className="animate-fade-in flex-1 flex items-center  text-white px-6 lg:px-24 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
          {/* LEFT SIDE - LIST PROJECT */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl font-bold text-[#FFFFF]">More About Me</h1>
            {/* Middle Side */}
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#e29e6d]/50 to-transparent"></div>
            <div className="hidden md:block sticky top-80 self-start">
              <div class="w-full max-w-sm p-6 bg-[#33333] border border-[#5c3d2e] rounded shadow-xs">
                <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-semibold leading-none text-heading">
                    Future Projects Plan :
                  </h5>
                </div>
                {Fp.map((fp) => (
                  <div class="flow-root">
                    <ul role="list" class="divide-y divide-default">
                      <li class="py-4 sm:py-4">
                        <div class="flex items-center gap-2">
                          <div class="flex-1 min-w-0 ms-2">
                            <p class="font-medium text-heading truncate">
                              {fp.title}
                            </p>
                            <p class="text-sm text-body truncate text-[#EE9761] font-bold">
                              {fp.desc}
                            </p>
                            <p class="text-sm text-body truncate font-bold">
                              Techno : {fp.techno}
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
          {/* Right Side */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#e29e6d]/50 to-transparent"></div>
          <div className="hidden md:block sticky top-80 self-start">
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#e29e6d]/50 to-transparent"></div>
            <div className="hidden md:block sticky top-80 self-start">
              <div class="w-full max-w-sm p-6 bg-[#33333] border border-[#5c3d2e] rounded shadow-xs">
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
                              class="w-8 h-8 rounded-full bg-white"
                              src={game.img}
                              alt={game.alt}
                            />
                          </div>
                          <div class="flex-1 min-w-0 ms-2">
                            <p class="font-medium text-heading truncate">
                              {game.id}
                            </p>
                            <p class="text-sm text-body text-[#EE9761] font-bold">
                              {game.playtime}
                            </p>
                            <p class="text-sm text-body truncate  font-bold text-white break-words">
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
        </div>
      </section>
    </>
  );
};

export default aboutme;
