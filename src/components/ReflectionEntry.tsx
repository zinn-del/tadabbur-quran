interface ReflectionEntryProps {
  date: string;
  surah: string;
  preview: string;
}

const ReflectionEntry = ({ date, surah, preview }: ReflectionEntryProps) => {
  return (
    <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors cursor-pointer">
      <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-xs font-semibold text-primary">{date}</span>
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gold font-medium mb-1">{surah}</p>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{preview}</p>
      </div>
    </div>
  );
};

export default ReflectionEntry;
