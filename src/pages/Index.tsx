import BottomNav from "@/components/BottomNav";
import ornamentalPattern from "@/assets/ornamental-pattern.png";
import { Flame, ChevronRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("onboarding_complete")) {
      navigate("/onboarding", { replace: true });
    }
  }, [navigate]);

  const currentHour = new Date().getHours();
  const timeGreeting = currentHour < 12 ? "Good Morning" : currentHour < 17 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header with pattern */}
      <div className="relative overflow-hidden px-6 pt-14 pb-8">
        <img
          src={ornamentalPattern}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover opacity-15 pointer-events-none"
          width={800}
          height={512}
        />
        <div className="relative animate-fade-in-up">
          <p className="text-sm text-gold font-medium tracking-wide">
            {timeGreeting}
          </p>
          <h1 className="text-[1.7rem] font-semibold text-foreground mt-1 leading-tight">
            Assalamu Alaikum 👋
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Take a moment to reflect today.
          </p>
        </div>

        {/* Streak indicator */}
        <div className="relative mt-5 animate-fade-in-up-delay">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm border border-border/50">
            <Flame className="w-4 h-4 text-streak" />
            <span className="text-xs font-semibold text-foreground">3 day streak</span>
            <span className="text-xs text-muted-foreground">· Keep going!</span>
          </div>
        </div>
      </div>

      {/* Today's Reflection */}
      <div className="px-5 space-y-5">
        <div className="animate-fade-in-up-delay">
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 relative overflow-hidden">
            {/* Subtle decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem]" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                  Today's Reflection
                </span>
              </div>

              {/* Arabic Ayah */}
              <p
                className="font-arabic text-[1.65rem] leading-[2.4] text-foreground text-center mb-5"
                dir="rtl"
              >
                فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-gold/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                <div className="w-8 h-px bg-gold/40" />
              </div>

              {/* Translation */}
              <p className="text-sm leading-relaxed text-muted-foreground text-center italic px-2">
                "So surely with hardship comes ease. Surely with that hardship comes more ease."
              </p>

              <p className="text-xs text-gold font-medium text-center mt-3">
                Surah Al-Inshirah · 94:5-6
              </p>

              {/* CTA Button */}
              <button onClick={() => navigate("/ayah")} className="mt-6 w-full bg-primary text-primary-foreground rounded-xl py-3.5 text-sm font-semibold hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-md shadow-primary/20">
                Start Reflection
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 animate-fade-in-up-delay-2">
          <div className="bg-card rounded-xl p-4 border border-border/50 text-center">
            <p className="text-lg font-semibold text-primary">12</p>
            <p className="text-[10px] text-muted-foreground font-medium mt-0.5 uppercase tracking-wide">Reflections</p>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border/50 text-center">
            <p className="text-lg font-semibold text-primary">3</p>
            <p className="text-[10px] text-muted-foreground font-medium mt-0.5 uppercase tracking-wide">Day Streak</p>
          </div>
          <div className="bg-card rounded-xl p-4 border border-border/50 text-center">
            <p className="text-lg font-semibold text-primary">5</p>
            <p className="text-[10px] text-muted-foreground font-medium mt-0.5 uppercase tracking-wide">Bookmarks</p>
          </div>
        </div>

        {/* Gentle reminder */}
        <div className="animate-fade-in-up-delay-2 bg-gold/10 rounded-2xl p-5 border border-gold/20">
          <p className="text-xs font-medium text-accent-foreground/70 mb-1">💡 Daily Reminder</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            "The best among you are those who learn the Quran and teach it."
          </p>
          <p className="text-xs text-gold font-medium mt-2">— Sahih Al-Bukhari</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
