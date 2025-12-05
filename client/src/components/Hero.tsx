import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap, Clock } from "lucide-react";
import heroImage from "@assets/generated_images/silicon_wafer_macro_shot_with_glowing_blue_circuits.png";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden border-b border-white/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Silicon Wafer Macro" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-tech tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Next Gen ASIC Design
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-white">
              Democratizing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">
                Silicon Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Building low-cost, high-efficiency ASICs on 130nm nodes for Edge AI and Robotics. 
              Powered by Agentic AI and Multi-Project Wafer technology for rapid deployment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-cyan-400 font-medium text-md px-8">
                Explore Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white">
                Our Technology
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-8">
            {[
              { icon: Cpu, label: "130nm Nodes", desc: "Cost-Effective" },
              { icon: Zap, label: "Edge AI", desc: "Low Latency" },
              { icon: Clock, label: "4-6 Months", desc: "Time to Market" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex flex-col gap-2"
              >
                <item.icon className="w-6 h-6 text-primary mb-1" />
                <h3 className="font-display font-bold text-lg">{item.label}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-tech">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
