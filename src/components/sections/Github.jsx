import React from "react";
import { GitHubCalendar } from 'react-github-calendar';
import SpotlightCard from "../effects/SpotlightCard";

export default function Github() {
  return (
    <section id="github" className="py-20 relative overflow-hidden font-['EB_Garamond',_serif]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Coding <span className="text-sky-500">Activity</span>
          </h2>
          <p className="text-zinc-300 italic text-2xl">
            My daily contributions and open source statistics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SpotlightCard className="h-full">
            <div className="h-full p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 flex items-center justify-center">
              <img
                src="https://github-readme-stats-eight-theta.vercel.app/api?username=PiyushTechie&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000"
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>
          </SpotlightCard>

          <SpotlightCard className="h-full">
            <div className="h-full p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 flex items-center justify-center">
              <img
                src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=PiyushTechie&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000"
                alt="Top Languages"
                className="w-full h-auto"
              />
            </div>
          </SpotlightCard>
        </div>

        <SpotlightCard>
          <div className="p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 overflow-x-auto">
            <div className="min-w-[800px] flex flex-col items-center gap-6">
              
              <GitHubCalendar 
                username="PiyushTechie" 
                colorScheme="dark"
                fontSize={14}
                blockSize={14}
                blockMargin={4}
                theme={{
                  dark: [
                    "#27272a", // Level 0 (Zinc-800)
                    "#0c4a6e", // Level 1 (Sky-900)
                    "#0284c7", // Level 2 (Sky-600)
                    "#0ea5e9", // Level 3 (Sky-500)
                    "#38bdf8", // Level 4 (Sky-400)
                  ],
                }}
              />
              
              <p className="text-zinc-500 text-sm mt-4 font-sans">
                Hover over the blocks to see contribution details.
              </p>

            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}