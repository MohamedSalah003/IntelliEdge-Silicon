import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Brain, Layers, Zap, Code, Users, Rocket } from "lucide-react";
import roboticsImage from "@assets/generated_images/abstract_network_of_robotics_and_iot_devices.png";

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Mission Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Bridging the Gap Between <br />
                <span className="text-primary">Algorithm & Silicon</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At IntelliEdge Silicon, we are a team of polymaths revolutionizing the chip design industry. 
                Current market solutions are either too expensive (advanced nodes) or too slow to design. 
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our mission is to empower robotics, IoT, and industrial autonomous systems with custom, 
                low-cost ASICs optimized for their specific algorithms. By leveraging mature 130nm nodes 
                and agentic AI design flows, we slash costs and time-to-market.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 border border-white/5 bg-white/5 rounded-lg">
                  <Brain className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-1">Agentic AI Design</h3>
                  <p className="text-sm text-muted-foreground">Automated layout & verification reducing engineering hours by 70%.</p>
                </div>
                <div className="p-4 border border-white/5 bg-white/5 rounded-lg">
                  <Layers className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-1">MPW Aggregation</h3>
                  <p className="text-sm text-muted-foreground">Multi-Project Wafers split manufacturing costs among clients.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
              <img 
                src={roboticsImage} 
                alt="Robotics Network" 
                className="relative rounded-xl border border-white/10 shadow-2xl"
              />
              <div className="absolute bottom-8 -left-8 bg-card p-6 rounded-lg border border-white/10 shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  <span className="font-display font-bold">Fast Track</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  From concept to tape-out in just 4-6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-secondary/30 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-16">Powering The Edge</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Robotics", desc: "Real-time motion control and sensor fusion with sub-ms latency." },
              { icon: Users, title: "Autonomous Systems", desc: "Hardware acceleration for SLAM and path planning algorithms." },
              { icon: Code, title: "Industrial IoT", desc: "Ultra-low power monitoring chips with 10-year battery life." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
