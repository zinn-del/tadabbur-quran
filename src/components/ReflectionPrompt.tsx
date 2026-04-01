import { Feather } from "lucide-react";
import { useState } from "react";

const ReflectionPrompt = () => {
  const [reflection, setReflection] = useState("");

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 animate-fade-in-up-delay">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
          <Feather className="w-4 h-4 text-gold" />
        </div>
        <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
          Reflect
        </span>
      </div>

      <p className="text-sm text-foreground font-medium mb-3">
        How does this verse speak to you today?
      </p>

      <textarea
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        placeholder="Write your thoughts..."
        className="w-full bg-secondary/50 rounded-xl p-4 text-sm text-foreground placeholder:text-muted-foreground/50 border-none outline-none resize-none min-h-[100px] focus:ring-2 focus:ring-primary/20 transition-shadow"
      />

      <button className="mt-3 w-full bg-primary text-primary-foreground rounded-xl py-3 text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.98]">
        Save Reflection
      </button>
    </div>
  );
};

export default ReflectionPrompt;
