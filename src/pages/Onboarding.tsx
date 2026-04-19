import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, BookOpen, Feather, Heart, Sparkles } from "lucide-react";
import tadabburLogo from "@/assets/tadabbur-logo.png";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const totalSteps = 5;

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
        {step === 2 && <StepPurpose />}
        {step === 3 && <StepHowItWorks />}
        {step === 4 && <StepDua />}
      </div>

      {/* CTA Button */}
      <div className="px-8 pb-12 animate-fade-in-up-delay-2">
        <button
          onClick={handleNext}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-base font-semibold hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
        >
          {step === 0 ? "Get Started" : step === totalSteps - 1 ? "Begin" : "Continue"}
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

const purposeItems = [
  { icon: BookOpen, label: "Understand the message" },
  { icon: Feather, label: "Reflect personally" },
  { icon: Heart, label: "Apply it in your life" },
];

const StepPurpose = () => (
  <div className="flex flex-col items-center animate-fade-in-up text-center max-w-sm">
    <h2 className="text-2xl font-semibold text-foreground leading-snug px-2">
      The Quran is not just to be read… but lived.
    </h2>

    <div className="flex items-center gap-3 my-8">
      <div className="w-8 h-px bg-gold/40" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
      <div className="w-8 h-px bg-gold/40" />
    </div>

    <div className="space-y-5 w-full">
      {purposeItems.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-4 bg-card rounded-xl px-5 py-4 border border-border/50">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">{label}</span>
        </div>
      ))}
    </div>
  </div>
);

const howItWorksSteps = [
  {
    icon: BookOpen,
    title: "Read an ayah",
    description: "A verse from the Quran, chosen for today.",
  },
  {
    icon: Feather,
    title: "Reflect on its meaning",
    description: "Pause and let the words speak to your heart.",
  },
  {
    icon: Sparkles,
    title: "Take a small action",
    description: "Carry one intention into your day.",
  },
];

const StepHowItWorks = () => (
  <div className="flex flex-col items-center animate-fade-in-up text-center max-w-sm w-full">
    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
      <Sparkles className="w-6 h-6 text-primary" />
    </div>

    <h2 className="text-2xl font-semibold text-foreground leading-snug px-2">
      Just a few minutes a day
    </h2>

    <div className="flex items-center gap-3 my-7">
      <div className="w-8 h-px bg-gold/40" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
      <div className="w-8 h-px bg-gold/40" />
    </div>

    <div className="relative w-full text-left">
      {/* Vertical connecting line */}
      <div className="absolute left-[1.4rem] top-6 bottom-6 w-px bg-primary/15" />

      <div className="space-y-5">
        {howItWorksSteps.map((item, idx) => (
          <div key={item.title} className="flex items-start gap-4 relative">
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 relative z-10">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 pt-1.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-semibold text-gold tracking-wider">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Onboarding;
