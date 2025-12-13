import SpotlightCard from "../effects/SpotlightCard";
import { ABOUT_ME } from "../../constants";
import { Github, Linkedin, Twitter } from "lucide-react"; 

const SocialsBlock = () => {
  return (
    <SpotlightCard className="col-span-1 row-span-1">
      <div className="p-6 h-full flex flex-col justify-center items-center gap-6">
        <h3 className="text-zinc-400 font-medium">Connect</h3>
        <div className="flex gap-4">
           <a href={ABOUT_ME.socials.github} className="text-zinc-300 hover:text-white transition-colors hover:scale-110 transform duration-200"><Github size={28}/></a>
           <a href={ABOUT_ME.socials.linkedin} className="text-zinc-300 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"><Linkedin size={28}/></a>
           <a href={ABOUT_ME.socials.twitter} className="text-zinc-300 hover:text-sky-400 transition-colors hover:scale-110 transform duration-200"><Twitter size={28}/></a>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default SocialsBlock;