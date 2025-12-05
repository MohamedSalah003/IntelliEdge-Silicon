import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Brain, Layers, Zap, Code, Users, Rocket } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Mission Section */}
      <section className="py-[100px] bg-black">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[42px] font-display font-bold text-white mb-6 leading-[1.2] tracking-[-0.01em]">
                Bridging the Gap Between <br />
                Algorithm & Silicon
              </h2>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-6">
              <p className="text-[#B3B3B3] text-[16px] md:text-[18px] leading-relaxed mb-6">
                Current market solutions are either too expensive or too slow. 
                At IntelliEdge Silicon, we empower robotics and IoT with custom, 
                low-cost ASICs optimized for specific algorithms.
              </p>
              <p className="text-[#B3B3B3] text-[16px] md:text-[18px] leading-relaxed mb-8">
                Leveraging mature 130nm nodes and agentic AI design flows, we slash costs and time-to-market.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <div className="p-8 border border-[#2A2A2A] bg-black rounded-[4px]">
                  <h3 className="font-display font-bold text-white text-[24px] mb-2">Agentic AI</h3>
                  <p className="text-[#B3B3B3] text-sm">Automated layout & verification reducing engineering hours by 70%.</p>
                </div>
                <div className="p-8 border border-[#2A2A2A] bg-black rounded-[4px]">
                  <h3 className="font-display font-bold text-white text-[24px] mb-2">MPW Aggregation</h3>
                  <p className="text-[#B3B3B3] text-sm">Multi-Project Wafers split manufacturing costs among clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience - Grid Layout */}
      <section className="py-[100px] border-t border-[#2A2A2A]">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="grid md:grid-cols-12 gap-6 mb-16">
            <div className="md:col-span-12">
              <h2 className="text-[32px] md:text-[42px] font-display font-bold text-white">Powering The Edge</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Robotics", desc: "Real-time motion control and sensor fusion with sub-ms latency." },
              { title: "Autonomous Systems", desc: "Hardware acceleration for SLAM and path planning algorithms." },
              { title: "Industrial IoT", desc: "Ultra-low power monitoring chips with 10-year battery life." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-10 bg-black border border-[#2A2A2A] hover:border-[#4DA3FF] hover:brightness-110 transition-colors rounded-[4px]"
              >
                <h3 className="text-[24px] font-display font-bold text-white mb-4">{item.title}</h3>
                <p className="text-[#B3B3B3] text-[16px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
