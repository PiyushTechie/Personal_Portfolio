import React from 'react';
import SpotlightCard from "../effects/SpotlightCard";
import RotatingGreeting from "../effects/RotatingGreeting"; 
import { ABOUT_ME } from "../../constants";

const AboutBlock = () => {
  return (
    <SpotlightCard className="col-span-1 md:col-span-2 row-span-2">
      <div className="p-8 flex flex-col justify-between h-full min-h-[300px] font-['EB_Garamond',_serif]">
        <div className="space-y-6">
          
          <div className="inline-block px-3 py-1 text-xs font-bold font-sans text-sky-400 bg-sky-500/10 rounded-full border border-sky-500/20 tracking-wide uppercase">
            Available for work
          </div>

          <RotatingGreeting />

          <h2 className="text-3xl md:text-4xl text-zinc-400 leading-tight">
            I'm <span className="text-white font-bold">{ABOUT_ME.name}</span>, a {ABOUT_ME.role}
          </h2>
        </div>
        
        <p className="text-xl text-zinc-300 max-w-lg mt-6 border-t border-zinc-800 pt-6 leading-relaxed">
          {ABOUT_ME.bio}
        </p>
      </div>
    </SpotlightCard>
  );
};

export default AboutBlock;