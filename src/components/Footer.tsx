import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-cycle.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={40} height={40} className="w-10 h-10" />
            <div>
              <div className="font-display text-2xl tracking-wider">OCTRI</div>
              <div className="text-[10px] tracking-[0.2em] text-primary uppercase">Together We Tri</div>
            </div>
          </div>
          <p className="mt-5 text-muted-foreground max-w-md">
            Ocean Triathlon Team — Egypt's home for swim, bike, and run athletes.
            Building stronger bodies and sharper minds since 2017.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-foreground">Explore</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-smooth">About</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-smooth">Services</Link></li>
            <li><Link to="/schedule" className="hover:text-primary transition-smooth">Schedule</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-foreground">Connect</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Cairo, Egypt</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> info@octri-egypt.com</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ocean Triathlon Team. All rights reserved.
      </div>
    </footer>
  );
}
