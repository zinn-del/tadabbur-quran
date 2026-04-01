import { Home, BookOpen, Feather, Heart } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: BookOpen, label: "Verses" },
  { icon: Feather, label: "Journal" },
  { icon: Heart, label: "Saved" },
];

const BottomNav = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-border/50 px-6 pb-6 pt-3 z-50">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = active === i;
          return (
            <button
              key={item.label}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-1 py-1 px-3 transition-colors"
            >
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground/50"
                }`}
                strokeWidth={isActive ? 2.2 : 1.8}
              />
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground/50"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
