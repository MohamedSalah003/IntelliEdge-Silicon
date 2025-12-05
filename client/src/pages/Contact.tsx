import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, User } from "lucide-react";
import teamImage from "@assets/generated_images/modern_engineering_lab_environment.png";

export default function Contact() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">Get In Touch</h1>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info & Calendar */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="text-primary" /> Book a Meeting
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a 30-minute consultation with our engineering team to discuss your ASIC requirements or funding opportunities.
            </p>

            <div className="bg-card border border-white/10 rounded-xl p-6 max-w-md mx-auto lg:mx-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border border-white/5 bg-background"
              />
              <div className="mt-6 space-y-2">
                <div className="p-3 bg-white/5 rounded border border-white/5 flex justify-between items-center cursor-pointer hover:bg-primary/10 hover:border-primary/30 transition-colors">
                  <span className="text-sm">10:00 AM - Discovery Call</span>
                  <Button size="sm" variant="outline" className="h-7 text-xs">Select</Button>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/5 flex justify-between items-center cursor-pointer hover:bg-primary/10 hover:border-primary/30 transition-colors">
                  <span className="text-sm">02:00 PM - Technical Deep Dive</span>
                  <Button size="sm" variant="outline" className="h-7 text-xs">Select</Button>
                </div>
              </div>
            </div>
            
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">Email Us</p>
                  <p className="text-muted-foreground">contact@intelliedge.silicon</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">HQ Location</p>
                  <p className="text-muted-foreground">Tech Park, Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/10 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Interest</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>Custom ASIC Design</option>
                  <option>IP Licensing</option>
                  <option>Investor Relations</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us about your project..." className="bg-background/50 min-h-[150px]" />
              </div>
              <Button className="w-full text-lg py-6">Send Message</Button>
            </form>
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-white/10 pt-16">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Our Polymath Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
             {/* Using a single image to represent the team vibe for now, or individual cards */}
             {[
               { name: "Dr. Sarah Lin", role: "Chief Architect", bg: "bg-blue-500/20" },
               { name: "James Chen", role: "Lead Analog Designer", bg: "bg-cyan-500/20" },
               { name: "Elena Rodriguez", role: "AI/ML Engineer", bg: "bg-purple-500/20" },
               { name: "David Kim", role: "Operations & Fab", bg: "bg-emerald-500/20" }
             ].map((member, i) => (
               <div key={i} className="group relative overflow-hidden rounded-xl aspect-[3/4] border border-white/10">
                 <div className={`absolute inset-0 ${member.bg} opacity-50 group-hover:opacity-70 transition-opacity`} />
                 <img src={teamImage} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-overlay" />
                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
