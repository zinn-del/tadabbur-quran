import { Flame, Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReflectionComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8">
      {/* Success glow */}
      <div className="relative mb-10 animate-fade-in-up">
        <div className="w-28 h-28 rounded-full bg-primary/8 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/12 flex items-center justify-center">
            <Heart className="w-9 h-9 text-primary" fill="hsl(var(--primary))" fillOpacity={0.2} />
          </div>
        </div>
        {/* Subtle ring pulse */}
        <div className="absolute inset-0 w-28 h-28 rounded-full border-2 border-primary/10 animate-pulse" />
      </div>

      {/* Message */}
      <h1 className="text-2xl font-semibold text-foreground animate-fade-in-up">
        Reflection complete 🤍
      </h1>
      <p className="text-sm text-muted-foreground text-center mt-3 leading-relaxed max-w-[260px] animate-fade-in-up-delay">
        You've taken a beautiful step today. May it stay with you.
      </p>

      {/* Streak */}
      <div className="mt-8 animate-fade-in-up-delay">
        <div className="inline-flex items-center gap-2.5 bg-card rounded-full px-5 py-2.5 border border-border/50 shadow-sm">
          <Flame className="w-5 h-5 text-streak" />
          <span className="text-sm font-semibold text-foreground">4 day streak</span>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mt-10 mb-10 animate-fade-in-up-delay">
        <div className="w-8 h-px bg-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
        <div className="w-8 h-px bg-gold/40" />
      </div>

      {/* CTA */}
      <div className="w-full max-w-xs animate-fade-in-up-delay-2">
        <button
          onClick={() => navigate("/")}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-sm font-semibold transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
        >
          Come back tomorrow
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ReflectionComplete;
