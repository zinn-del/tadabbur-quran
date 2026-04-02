import { ArrowLeft, Leaf, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ActionStep = () => {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="px-5 pt-12 pb-2">
        <button
          onClick={() => navigate("/reflect")}
          className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 -mt-10">
        {/* Icon */}
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 transition-all duration-500 ${
            done
              ? "bg-green-500/10 scale-110"
              : "bg-primary/8"
          } animate-fade-in-up`}
        >
          {done ? (
            <Check className="w-8 h-8 text-green-500" />
          ) : (
            <Leaf className="w-8 h-8 text-primary" />
          )}
        </div>

        {/* Title */}
        <h1
          className="text-lg font-semibold text-foreground tracking-wide uppercase animate-fade-in-up"
          style={{ letterSpacing: "0.15em", fontSize: "0.7rem" }}
        >
          Today's Action
        </h1>

        {/* Suggestion */}
        <p className="text-xl font-semibold text-foreground text-center mt-4 leading-relaxed animate-fade-in-up-delay max-w-[280px]">
          Practice patience in your conversations today
        </p>

        <p className="text-sm text-muted-foreground text-center mt-3 leading-relaxed animate-fade-in-up-delay max-w-[260px]">
          Small steps lead to lasting change. You've got this.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 mt-8 mb-8 animate-fade-in-up-delay">
          <div className="w-8 h-px bg-gold/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
          <div className="w-8 h-px bg-gold/40" />
        </div>

        {/* Done state message */}
        {done && (
          <p className="text-sm text-green-600 font-medium mb-6 animate-fade-in-up">
            ✨ Beautifully done. Keep going!
          </p>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="px-5 pt-4 pb-10 animate-fade-in-up-delay-2">
        {done ? (
          <button
            onClick={() => navigate("/")}
            className="w-full bg-card border border-border/50 text-foreground rounded-2xl py-4 text-sm font-semibold transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Back to Home
          </button>
        ) : (
          <button
            onClick={() => setDone(true)}
            className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-sm font-semibold transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            <Check className="w-4 h-4" />
            Mark as Done
          </button>
        )}
      </div>
    </div>
  );
};

export default ActionStep;
