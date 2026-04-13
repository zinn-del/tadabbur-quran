import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import tadabburLogo from "@/assets/tadabbur-logo.png";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    localStorage.setItem("onboarding_complete", "true");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8">
      {/* Logo */}
      <div className="animate-fade-in-up">
        <div className="w-28 h-28 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 mx-auto shadow-sm">
          <img
            src={tadabburLogo}
            alt="Tadabbur logo"
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      {/* App name & tagline */}
      <div className="animate-fade-in-up-delay text-center">
        <h1 className="text-4xl font-bold text-foreground tracking-tight">
          Tadabbur
        </h1>
        <p className="text-muted-foreground text-base mt-3 leading-relaxed max-w-[260px] mx-auto">
          Revive your heart through the Quran
        </p>
      </div>

      {/* Decorative dots */}
      <div className="flex items-center gap-2 mt-10 animate-fade-in-up-delay">
        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
      </div>

      {/* CTA Button */}
      <div className="fixed bottom-12 left-0 right-0 px-8 animate-fade-in-up-delay-2">
        <button
          onClick={handleGetStarted}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-base font-semibold hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
        >
          Get Started
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
