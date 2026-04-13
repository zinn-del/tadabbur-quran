import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import tadabburLogo from "@/assets/tadabbur-logo.png";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const totalSteps = 2;

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("onboarding_complete", "true");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 pt-14">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === step
                ? "w-6 bg-primary"
                : i < step
                ? "w-1.5 bg-primary/40"
                : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>

      {/* Content area */}
      <div className="flex-1 flex items-center justify-center px-8">
        {step === 0 && <StepWelcome />}
        {step === 1 && <StepEmotional />}
      </div>

      {/* CTA Button */}
      <div className="px-8 pb-12 animate-fade-in-up-delay-2">
        <button
          onClick={handleNext}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-base font-semibold hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
        >
          {step === 0 ? "Get Started" : "Continue"}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const StepWelcome = () => (
  <div className="flex flex-col items-center animate-fade-in-up">
    <div className="w-28 h-28 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 shadow-sm">
      <img
        src={tadabburLogo}
        alt="Tadabbur logo"
        className="w-16 h-16 object-contain"
      />
    </div>
    <h1 className="text-4xl font-bold text-foreground tracking-tight text-center">
      Tadabbur
    </h1>
    <p className="text-muted-foreground text-base mt-3 leading-relaxed max-w-[260px] text-center">
      Revive your heart through the Quran
    </p>
    <div className="flex items-center gap-2 mt-10">
      <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
    </div>
  </div>
);

const StepEmotional = () => (
  <div className="flex flex-col items-center animate-fade-in-up text-center max-w-sm">
    {/* Decorative glow */}
    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-10">
      <div className="w-8 h-8 rounded-full bg-primary/20" />
    </div>

    <h2 className="text-2xl font-semibold text-foreground leading-snug px-2">
      Your heart was never meant to feel distant from the Quran.
    </h2>

    {/* Gold divider */}
    <div className="flex items-center gap-3 my-8">
      <div className="w-8 h-px bg-gold/40" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
      <div className="w-8 h-px bg-gold/40" />
    </div>

    <p className="text-muted-foreground text-base leading-relaxed px-4 italic">
      Just like the earth comes back to life… your heart can too.
    </p>
  </div>
);

export default Onboarding;
