import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

const JOIN_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfzicOHqX6LkamRcFyRHbIZ3gbmTRE59wWYfCZcBcfRComlsw/viewform";

export default function Contact() {
  useDocumentTitle("Contact OCTRI — Join the Team");
  return (
    <div className="pt-32 pb-16">
      <section className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            <span className="w-8 h-px bg-primary" /> Get In Touch
          </div>
          <h1 className="font-display text-5xl md:text-7xl uppercase">
            Let's <span className="text-gradient">talk.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Questions about programs, schedules, or joining the team? We're here.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Location", value: "Cairo, Egypt" },
              { icon: Mail, label: "Email", value: "info@octri-egypt.com" },
              { icon: Phone, label: "Phone", value: "+20 (0) 100 000 0000" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-semibold text-lg mt-1">{c.value}</div>
                </div>
              </div>
            ))}

            <a
              href={JOIN_FORM}
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-2xl bg-gradient-primary text-primary-foreground font-bold shadow-elegant hover:shadow-glow transition-smooth"
            >
              <span className="text-lg">Join Us Today</span>
              <ArrowRight className="group-hover:translate-x-1 transition-smooth" />
            </a>
          </div>

          <form className="p-8 rounded-2xl bg-card border border-border space-y-4">
            <h2 className="font-display text-2xl uppercase mb-4">Send a Message</h2>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input type="text" className="mt-2 w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-smooth" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input type="email" className="mt-2 w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-smooth" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={5} className="mt-2 w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary outline-none transition-smooth resize-none" placeholder="Tell us about your goals..." />
            </div>
            <button type="button" className="w-full px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-bold shadow-elegant hover:shadow-glow transition-smooth">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
