import { Play, ArrowLeft, Bookmark, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AyahReflection = () => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4">
        <button
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
          Surah Al-Inshirah
        </span>
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center"
        >
          <Bookmark
            className={`w-4 h-4 transition-colors ${isBookmarked ? "text-primary fill-primary" : "text-foreground"}`}
          />
        </button>
      </div>

      {/* Main content — centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-10">
        {/* Surah & Ayah badge */}
        <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-10 animate-fade-in-up">
          <span className="text-xs font-medium text-gold">Ayah 5 – 6</span>
        </div>

        {/* Arabic text */}
        <p
          className="font-arabic text-3xl sm:text-4xl leading-[2.6] text-foreground text-center max-w-lg animate-fade-in-up"
          dir="rtl"
        >
          فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا
        </p>

        <div className="my-6 animate-fade-in-up">
          <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mx-auto" />
        </div>

        <p
          className="font-arabic text-3xl sm:text-4xl leading-[2.6] text-foreground text-center max-w-lg animate-fade-in-up"
          dir="rtl"
        >
          إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 my-8 animate-fade-in-up-delay">
          <div className="w-10 h-px bg-border" />
          <div className="w-2 h-2 rounded-full bg-primary/20" />
          <div className="w-10 h-px bg-border" />
        </div>

        {/* Translation */}
        <p className="text-base leading-relaxed text-muted-foreground text-center max-w-sm italic animate-fade-in-up-delay">
          "So surely with hardship comes ease. Surely with that hardship comes more ease."
        </p>

        {/* Play audio button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="mt-8 inline-flex items-center gap-2 bg-card border border-border/50 rounded-full px-5 py-2.5 hover:border-primary/30 transition-colors animate-fade-in-up-delay"
        >
          <div className={`w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center ${isPlaying ? "animate-gentle-pulse" : ""}`}>
            <Play className="w-3 h-3 text-primary ml-0.5" fill="hsl(var(--primary))" />
          </div>
          <span className="text-xs font-medium text-foreground">
            {isPlaying ? "Playing..." : "Listen to recitation"}
          </span>
        </button>
      </div>

      {/* Bottom CTA */}
      <div className="px-5 pb-10 animate-fade-in-up-delay-2">
        <button
          onClick={() => navigate("/reflect")}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-sm font-semibold hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
        >
          Reflect on this Ayah
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AyahReflection;
