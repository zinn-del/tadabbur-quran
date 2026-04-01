import VerseCard from "@/components/VerseCard";
import ReflectionPrompt from "@/components/ReflectionPrompt";
import ReflectionEntry from "@/components/ReflectionEntry";
import BottomNav from "@/components/BottomNav";
import ornamentalPattern from "@/assets/ornamental-pattern.png";

const recentReflections = [
  {
    date: "Mar 30",
    surah: "Al-Baqarah 2:286",
    preview: "A reminder that Allah does not burden a soul beyond what it can bear. This gave me peace during a difficult week...",
  },
  {
    date: "Mar 28",
    surah: "Ar-Rahman 55:13",
    preview: "Which of the favors of your Lord will you deny? I started listing the blessings I often overlook...",
  },
  {
    date: "Mar 25",
    surah: "Al-Inshirah 94:6",
    preview: "With hardship comes ease. I reflected on how past struggles led to growth and clarity...",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header */}
      <div className="relative overflow-hidden px-6 pt-12 pb-6">
        <img
          src={ornamentalPattern}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
          width={800}
          height={512}
        />
        <div className="relative">
          <p className="text-xs text-gold font-medium tracking-widest uppercase mb-1 animate-fade-in-up">
            Bismillah
          </p>
          <h1 className="text-2xl font-semibold text-foreground animate-fade-in-up">
            Quran Reflections
          </h1>
          <p className="text-sm text-muted-foreground mt-1 animate-fade-in-up-delay">
            Your daily space for contemplation
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 space-y-5">
        <VerseCard
          arabicText="إِنَّ مَعَ الْعُسْرِ يُسْرًا"
          translation="Indeed, with hardship comes ease."
          surah="Al-Inshirah"
          ayah="6"
        />

        <ReflectionPrompt />

        {/* Recent Reflections */}
        <div className="animate-fade-in-up-delay-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground">Recent Reflections</h2>
            <button className="text-xs text-primary font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {recentReflections.map((entry, i) => (
              <ReflectionEntry key={i} {...entry} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
