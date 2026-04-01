import { BookOpen } from "lucide-react";

interface VerseCardProps {
  arabicText: string;
  translation: string;
  surah: string;
  ayah: string;
}

const VerseCard = ({ arabicText, translation, surah, ayah }: VerseCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 animate-fade-in-up">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <BookOpen className="w-4 h-4 text-primary" />
        </div>
        <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
          Verse of the Day
        </span>
      </div>

      <p className="font-arabic text-2xl leading-[2.2] text-foreground text-right mb-5" dir="rtl">
        {arabicText}
      </p>

      <div className="w-12 h-px bg-gold mx-auto mb-4" />

      <p className="text-sm leading-relaxed text-muted-foreground text-center italic">
        "{translation}"
      </p>

      <p className="text-xs text-gold font-medium text-center mt-3">
        {surah} · Ayah {ayah}
      </p>
    </div>
  );
};

export default VerseCard;
