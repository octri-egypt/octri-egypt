import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-cycle.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/services", label: "Services", end: false },
  { to: "/schedule", label: "Schedule", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

const JOIN_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfzicOHqX6LkamRcFyRHbIZ3gbmTRE59wWYfCZcBcfRComlsw/viewform";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="OCTRI logo" width={40} height={40} className="w-10 h-10 group-hover:scale-110 transition-smooth" />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wider text-foreground">OCTRI</div>
            <div className="text-[10px] tracking-[0.2em] text-primary uppercase">Together We Tri</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 text-sm font-medium text-primary transition-smooth"
                  : "px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={JOIN_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-elegant hover:shadow-glow transition-smooth"
          >
            Join Us
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={JOIN_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm text-center"
            >
              Join Us Today
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
