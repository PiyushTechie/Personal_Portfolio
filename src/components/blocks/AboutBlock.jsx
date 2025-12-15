import SpotlightCard from "../effects/SpotlightCard";
import RotatingGreeting from "../effects/RotatingGreeting"; 
import { ABOUT_ME } from "../../constants";

const AboutBlock = () => {
  return (
    <SpotlightCard className="col-span-1 md:col-span-2 row-span-2">
      <div className="p-8 flex flex-col justify-between h-full min-h-[300px]">
        <div className="space-y-4">
          
          <div className="inline-block px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
            Available for work
          </div>

          <RotatingGreeting />

          <h2 className="text-xl text-zinc-400">
            I'm <span className="text-white font-semibold">{ABOUT_ME.name}</span>, a {ABOUT_ME.role}
          </h2>
        </div>
        
        <p className="text-lg text-zinc-300 max-w-lg mt-4 border-t border-zinc-800 pt-4">
          {ABOUT_ME.bio}
        </p>
      </div>
    </SpotlightCard>
  );
};

export default AboutBlock;