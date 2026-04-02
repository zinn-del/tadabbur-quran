import { ArrowLeft, Mic, MicOff, ChevronRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ReflectionWrite = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-12 pb-2">
        <button
          onClick={() => navigate("/ayah")}
          className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <span className="text-xs text-muted-foreground font-medium">
          {text.length > 0 ? `${text.length} characters` : ""}
        </span>
        <div className="w-10" />
      </div>

      {/* Prompt section */}
      <div className="px-7 pt-8 pb-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-1.5 bg-primary/8 rounded-full px-3 py-1 mb-4">
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-semibold text-primary tracking-widest uppercase">
            Reflect
          </span>
        </div>
        <h1 className="text-xl font-semibold text-foreground leading-snug">
          What is Allah teaching you
          <br />
          in this ayah?
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Take your time. There are no wrong answers.
        </p>
      </div>

      {/* Journal input */}
      <div className="flex-1 px-5 animate-fade-in-up-delay">
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-5 min-h-[240px] flex flex-col">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Begin writing your thoughts..."
            className="flex-1 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/40 outline-none resize-none leading-relaxed min-h-[200px]"
            autoFocus
          />

          {/* Mic button inside card */}
          <div className="flex items-center justify-between pt-3 border-t border-border/30 mt-2">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                isRecording
                  ? "bg-destructive/10 text-destructive"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {isRecording ? (
                <>
                  <MicOff className="w-3.5 h-3.5" />
                  Stop recording
                </>
              ) : (
                <>
                  <Mic className="w-3.5 h-3.5" />
                  Voice note
                </>
              )}
            </button>
            <span className="text-[10px] text-muted-foreground/50">
              Private & secure
            </span>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-5 pt-6 pb-10 animate-fade-in-up-delay-2">
        <button
          onClick={() => navigate("/action")}
          disabled={text.length === 0}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-sm font-semibold transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-40 disabled:shadow-none disabled:active:scale-100"
        >
          Continue
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ReflectionWrite;
