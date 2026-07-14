import { Trophy, Target, Heart, Zap } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { useDocumentTitle } from "@/hooks/use-document-title";

const values = [
  { icon: Trophy, title: "Performance", desc: "Race-ready training programs designed to deliver podium results." },
  { icon: Heart, title: "Community", desc: "A team that pushes each other and celebrates every finish line together." },
  { icon: Target, title: "Discipline", desc: "Structured plans for every level — from first-timers to seasoned pros." },
  { icon: Zap, title: "Energy", desc: "Recharge from daily life through outdoor training and shared goals." },
];

export default function About() {
  useDocumentTitle("About — OCTRI Ocean Triathlon Team");
  return (
    <div className="pt-32 pb-16">
      <section className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            <span className="w-8 h-px bg-primary" /> About Us
          </div>
          <h1 className="font-display text-5xl md:text-7xl uppercase">
            Built for those who <span className="text-gradient">refuse to quit.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16 items-start">
          <img src={teamImg} alt="OCTRI team" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-card w-full" />
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Established in <span className="text-foreground font-semibold">2017</span>,
              Ocean Triathlon Team (OCTRI) focuses on enabling competitive professional
              and amateur athletes. We build your strength, fitness, and agility to be
              able to compete and enjoy being fit and strong.
            </p>
            <p>
              Our athletes compete strongly in all local Triathlon and sports events.
              OCTRI's professionally designed training programs empower you to get over
              the day-to-day pressures of life and recharge your positive energy.
            </p>
            <p className="text-foreground font-medium">
              Get outdoors and join us to build a strong YOU.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading center eyebrow="What We Stand For" title="Our Values" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <v.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-display text-xl uppercase mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
