import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, BookOpen, Feather, Heart, Sparkles, Sunrise, Sun, Moon, Clock } from "lucide-react";
import tadabburLogo from "@/assets/tadabbur-logo.png";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [reflectionTime, setReflectionTime] = useState<string | null>(null);
  const [customTime, setCustomTime] = useState("07:00");
  const totalSteps = 6;

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      const finalTime = reflectionTime === "custom" ? customTime : reflectionTime;
      if (finalTime) localStorage.setItem("reflection_time", finalTime);
      localStorage.setItem("onboarding_complete", "true");
      navigate("/");
    }
  };

  const isTimeStep = step === 5;
  const canProceed = !isTimeStep || reflectionTime !== null;

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
        {step === 5 && (
          <StepReflectionTime
            selected={reflectionTime}
            onSelect={setReflectionTime}
            customTime={customTime}
            onCustomTimeChange={setCustomTime}
          />
        )}
      </div>

      {/* CTA Button */}
      <div className="px-8 pb-12 animate-fade-in-up-delay-2">
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-base font-semibold hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
        >
          {step === 0 ? "Get Started" : isTimeStep ? "Start My Journey" : "Continue"}
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

const StepDua = () => (
  <div className="flex flex-col items-center animate-fade-in-up text-center max-w-sm w-full px-2">
    {/* Top ornamental divider */}
    <div className="flex items-center gap-3 mb-12">
      <div className="w-10 h-px bg-gold/40" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
      <div className="w-10 h-px bg-gold/40" />
    </div>

    {/* Arabic dua — primary focus */}
    <p
      dir="rtl"
      lang="ar"
      className="font-arabic text-4xl sm:text-5xl text-foreground leading-[1.8] tracking-wide"
    >
      اللّٰهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي
    </p>

    {/* English translation */}
    <p className="text-base text-muted-foreground mt-12 leading-relaxed italic px-4">
      "O Allah, make the Quran the spring of my heart."
    </p>

    {/* Bottom ornamental divider */}
    <div className="flex items-center gap-3 my-8">
      <div className="w-8 h-px bg-gold/30" />
      <div className="w-1 h-1 rounded-full bg-gold/40" />
      <div className="w-8 h-px bg-gold/30" />
    </div>

    {/* Optional small text */}
    <p className="text-sm text-muted-foreground/80 leading-relaxed px-6">
      Bring life to my heart, like rain brings life to the earth.
    </p>
  </div>
);

const reflectionTimeOptions = [
  { id: "fajr", label: "After Fajr", hint: "Begin the day in light", icon: Sunrise },
  { id: "asr", label: "After Asr", hint: "A pause in the afternoon", icon: Sun },
  { id: "maghrib", label: "After Maghrib", hint: "Settle into the evening", icon: Moon },
];

interface StepReflectionTimeProps {
  selected: string | null;
  onSelect: (id: string) => void;
  customTime: string;
  onCustomTimeChange: (time: string) => void;
}

const StepReflectionTime = ({
  selected,
  onSelect,
  customTime,
  onCustomTimeChange,
}: StepReflectionTimeProps) => (
  <div className="flex flex-col items-center animate-fade-in-up text-center max-w-sm w-full">
    <h2 className="text-2xl font-semibold text-foreground leading-snug px-2">
      When would you like to reconnect?
    </h2>
    <p className="text-sm text-muted-foreground mt-3 px-4">
      Choose a moment in your day to pause with the Quran.
    </p>

    <div className="flex items-center gap-3 my-7">
      <div className="w-8 h-px bg-gold/40" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
      <div className="w-8 h-px bg-gold/40" />
    </div>

    <div className="space-y-3 w-full text-left">
      {reflectionTimeOptions.map(({ id, label, hint, icon: Icon }) => {
        const isActive = selected === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className={`w-full flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all active:scale-[0.99] ${
              isActive
                ? "bg-primary/10 border-primary/40 shadow-sm shadow-primary/10"
                : "bg-card border-border/50 hover:border-primary/20"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                isActive ? "bg-primary/20" : "bg-primary/10"
              }`}
            >
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-foreground">{label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{hint}</div>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 transition-colors shrink-0 ${
                isActive ? "border-primary bg-primary" : "border-border"
              }`}
            >
              {isActive && (
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                </div>
              )}
            </div>
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onSelect("custom")}
        className={`w-full flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all active:scale-[0.99] ${
          selected === "custom"
            ? "bg-primary/10 border-primary/40 shadow-sm shadow-primary/10"
            : "bg-card border-border/50 hover:border-primary/20"
        }`}
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            selected === "custom" ? "bg-primary/20" : "bg-primary/10"
          }`}
        >
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-foreground">Custom time</div>
          {selected === "custom" ? (
            <input
              type="time"
              value={customTime}
              onChange={(e) => onCustomTimeChange(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="mt-1 bg-transparent text-xs text-muted-foreground focus:outline-none focus:text-foreground"
            />
          ) : (
            <div className="text-xs text-muted-foreground mt-0.5">Pick your own moment</div>
          )}
        </div>
        <div
          className={`w-5 h-5 rounded-full border-2 transition-colors shrink-0 ${
            selected === "custom" ? "border-primary bg-primary" : "border-border"
          }`}
        >
          {selected === "custom" && (
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
            </div>
          )}
        </div>
      </button>
    </div>
  </div>
);

export default Onboarding;

