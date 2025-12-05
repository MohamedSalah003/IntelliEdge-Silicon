import { Link, useLocation } from "wouter";
import { Cpu, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Mission" },
    { href: "/products", label: "Products & IPs" },
    { href: "/tools", label: "Tools" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20">
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-sm flex items-center justify-center group-hover:border-primary/80 transition-colors">
                <Cpu className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight leading-none">IntelliEdge</span>
                <span className="font-tech text-xs text-muted-foreground tracking-widest uppercase">Silicon</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-tech uppercase tracking-widest text-xs">
              Get Access
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background border-l border-white/10">
                <div className="flex flex-col gap-8 mt-10">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-display font-bold ${
                          location === link.href ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="border-t border-white/10 bg-black/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-primary" />
                <span className="font-display font-bold text-lg">IntelliEdge Silicon</span>
              </div>
              <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                Democratizing ASIC design with 130nm nodes, Agentic AI, and MPW technology. 
                Building the nervous system for the next generation of robotics and IoT.
              </p>
            </div>
            <div>
              <h4 className="font-tech text-primary uppercase tracking-widest text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/"><a className="hover:text-white transition-colors">Mission</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-white transition-colors">Team</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-white transition-colors">Careers</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-tech text-primary uppercase tracking-widest text-sm mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>&copy; 2025 IntelliEdge Silicon. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
