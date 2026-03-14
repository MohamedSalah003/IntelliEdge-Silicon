import { Link, useLocation } from "wouter";
import { Menu, X, Mail } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/products", label: "Products & IPs" },
    { href: "/tools", label: "Tools" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-primary/20">
      {/* Navigation Bar - Height 72px, Pure Black */}
      <header className="fixed top-0 w-full z-50 bg-black h-[72px] border-b border-[#2A2A2A]">
        <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-[1280px]">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              {/* Logo: White Monochrome */}
              <span className="font-display font-bold text-xl tracking-tight text-white">
                IntelliEdge Silicon
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium transition-colors ${
                    location === link.href ? "text-white" : "text-[#B3B3B3] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            {/* CTA: Accent outline or accent text only. No filled solid accent buttons. */}
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-transparent hover:brightness-110 hover:text-primary rounded-[4px] h-10 px-6 bg-transparent"
            >
              Request Custom Chip
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-black border-l border-[#2A2A2A] text-white">
                <div className="flex flex-col gap-8 mt-10">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-display font-bold ${
                          location === link.href ? "text-primary" : "text-white"
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

      <main className="flex-1 pt-[72px]">
        {children}
      </main>

      <footer className="border-t border-[#2A2A2A] bg-black py-20 mt-20">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <span className="font-display font-bold text-lg text-white block mb-4">IntelliEdge Silicon</span>
              <p className="text-[#B3B3B3] max-w-md text-sm leading-relaxed mb-6">
                Technical. Precise. Modern. <br/>
                Democratizing ASIC design with 130nm nodes and Agentic AI.
              </p>
              <div className="flex items-center gap-3 text-[#B3B3B3]">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@intelliedgesilicon.systems" className="text-sm hover:text-white transition-colors">
                  info@intelliedgesilicon.systems
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-[#B3B3B3]">
                <li><Link href="/"><a className="hover:text-white transition-colors">Home</a></Link></li>
                <li><Link href="/who-we-are"><a className="hover:text-white transition-colors">Who We Are</a></Link></li>
                <li><Link href="/products"><a className="hover:text-white transition-colors">Products & IPs</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm mb-6">Connect</h4>
              <ul className="space-y-3 text-sm text-[#B3B3B3]">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact Form</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#6A6A6A]">
            <p>&copy; {new Date().getFullYear()} IntelliEdge Silicon. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#B3B3B3]">Privacy</a>
              <a href="#" className="hover:text-[#B3B3B3]">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
