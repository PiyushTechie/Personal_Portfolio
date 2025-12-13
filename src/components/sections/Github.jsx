import { ActivityCalendar } from "react-activity-calendar";
import { useState } from "react";
import SpotlightCard from "../effects/SpotlightCard";

export default function Github() {
  const GITHUB_USERNAME = "PiyushTechie";
    const [calendarError, setCalendarError] = useState(false);
const [retryKey, setRetryKey] = useState(0);
  return (
    <section id="github" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Coding <span className="text-sky-500">Activity</span>
          </h2>
          <p className="text-zinc-400">
            My daily contributions and open source statistics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SpotlightCard className="h-full">
            <div className="h-full p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 flex items-center justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=PiyushTechie&&show_icons=true&theme=tokyonight`}
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </div>
          </SpotlightCard>

          <SpotlightCard className="h-full">
            <div className="h-full p-4 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 flex items-center justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=0ea5e9&text_color=a1a1aa`}
                alt="Top Languages"
                className="w-full h-auto"
              />
            </div>
          </SpotlightCard>
        </div>

        <SpotlightCard>
          <div className="p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 overflow-x-auto">
        <div className="min-w-[700px] flex flex-col items-center gap-4">
      <ActivityCalendar
        key={retryKey}
        username={GITHUB_USERNAME}
        blockSize={14}
        blockMargin={4}
        fontSize={14}
        colorScheme="dark"
        hideTotalCount
        loading
        errorBoundary
        theme={{
          dark: [
            "#27272a",
            "#0ea5e9",
            "#0284c7",
            "#0369a1",
            "#075985",
          ],
        }}
      />

      <div className="flex flex-col items-center gap-2">
        <p className="text-zinc-400 text-sm text-center">
          If contributions don’t appear, GitHub may be temporarily unavailable.
        </p>

        <button
          onClick={() => setRetryKey((k) => k + 1)}
          className="px-4 py-2 text-sm rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
        >
          Retry
        </button>
      </div>

    </div>
  </div>
</SpotlightCard>

      </div>
    </section>
  );
}
