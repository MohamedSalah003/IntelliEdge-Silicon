import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Zap, Users, Rocket, Cpu, Activity, ShieldCheck, Server } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Mission / Strategy Section */}
      <section className="py-[100px] bg-black">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[42px] font-display font-bold text-white mb-6 leading-[1.2] tracking-[-0.01em]">
                Pioneering the Era of <br />
                <span className="text-[#B3B3B3]">Silicon Intelligence</span>
              </h2>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-6">
              <p className="text-[#B3B3B3] text-[16px] md:text-[18px] leading-relaxed mb-6">
                True intelligence doesn't just live in the cloud—it is forged in silicon. We partner with visionaries to embed highly optimized, custom AI directly into the physical world, bringing unmatched efficiency to every device.
              </p>
              <p className="text-[#B3B3B3] text-[16px] md:text-[18px] leading-relaxed mb-8">
                By co-designing the algorithm and the architecture, we bypass the limitations of generic hardware. The result is a transformative leap in performance, privacy, and power efficiency for the edge.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="p-8 border border-[#2A2A2A] bg-black rounded-[4px] hover:border-[#4DA3FF] transition-colors">
                  <h3 className="font-display font-bold text-white text-[24px] mb-2">Absolute Privacy</h3>
                  <p className="text-[#B3B3B3] text-sm">Processing happens entirely on-device, ensuring zero data leaves your system.</p>
                </div>
                <div className="p-8 border border-[#2A2A2A] bg-black rounded-[4px] hover:border-[#4DA3FF] transition-colors">
                  <h3 className="font-display font-bold text-white text-[24px] mb-2">Zero Latency</h3>
                  <p className="text-[#B3B3B3] text-sm">Instantaneous decision-making without the overhead of cloud connectivity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Use Cases */}
      <section className="py-[100px] border-t border-[#2A2A2A] bg-[#050505]">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-[32px] md:text-[42px] font-display font-bold text-white mb-6">Applications at the Edge</h2>
            <p className="text-[#B3B3B3] text-lg">
              Who needs a custom ASIC? Any system requiring high-performance computing within strict power and cost envelopes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Rocket, 
                title: "UAVs & Drones", 
                useCase: "Optical Flow & SLAM",
                desc: "Offload navigation stack from the main CPU to handle high-speed obstacle avoidance with milliwatt power consumption." 
              },
              { 
                icon: Activity, 
                title: "Wearable Health", 
                useCase: "Real-time ECG Analysis",
                desc: "Continuous anomaly detection on-device, preserving privacy and extending battery life from days to months." 
              },
              { 
                icon: Server, 
                title: "Industrial Gateways", 
                useCase: "Predictive Maintenance",
                desc: "Process vibration and acoustic data locally to detect equipment failure before it happens, reducing cloud bandwidth." 
              },
              { 
                icon: Cpu, 
                title: "Smart Home", 
                useCase: "Voice Wake-Word",
                desc: "Always-on listening for custom wake words without sending audio data to the cloud, ensuring user privacy." 
              },
              { 
                icon: ShieldCheck, 
                title: "Security Cameras", 
                useCase: "Person Detection",
                desc: "Filter false positives at the sensor level, triggering recording only when human motion is verified." 
              },
              { 
                icon: Users, 
                title: "Collaborative Robots", 
                useCase: "Force Sensing",
                desc: "Ultra-low latency feedback loops for safe human-robot interaction in manufacturing environments." 
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-8 bg-black border border-[#2A2A2A] hover:border-[#4DA3FF] hover:brightness-110 transition-all group rounded-[4px]"
              >
                <div className="w-12 h-12 border border-[#2A2A2A] bg-[#0D0D0D] rounded-[4px] flex items-center justify-center mb-6 group-hover:border-[#4DA3FF] transition-colors">
                  <item.icon className="w-6 h-6 text-white group-hover:text-[#4DA3FF]" />
                </div>
                <h3 className="text-[20px] font-display font-bold text-white mb-2">{item.title}</h3>
                <span className="text-xs font-mono text-[#4DA3FF] bg-[#4DA3FF]/10 px-2 py-1 rounded-[2px] mb-4 inline-block">
                  {item.useCase}
                </span>
                <p className="text-[#B3B3B3] text-[15px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
