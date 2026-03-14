import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Users, Target, Globe2, Cpu, TestTube, Code2, Microchip } from "lucide-react";

export default function WhoWeAre() {
  return (
    <Layout>
      <div className="py-[100px] container mx-auto px-6 max-w-[1280px]">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-[42px] md:text-[64px] font-display font-bold text-white mb-6 leading-tight">
            The Team
          </h1>
          <p className="text-[#B3B3B3] text-[18px] md:text-[24px] max-w-3xl leading-relaxed">
            Final Year Engineering Students
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Intro Section */}
            <section>
              <p className="text-[#B3B3B3] text-[18px] leading-relaxed mb-10">
                We are a team of passionate final-year engineering students specializing in ASIC design, 
                digital system architecture, and AI/ML hardware acceleration. Our research focuses on 
                bridging the gap between cutting-edge AI algorithms and efficient silicon 
                implementations—creating chips that think at the edge.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {["ASIC Design", "Digital Design", "AI/ML", "Hardware-Software Co-Design", "RTL Verification"].map((skill) => (
                  <span key={skill} className="px-4 py-2 border border-[#2A2A2A] rounded-[4px] text-sm text-white bg-[#050505]">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-10">
              <div className="p-10 bg-black border border-[#2A2A2A] rounded-[4px] relative overflow-hidden group hover:border-[#4DA3FF] transition-colors">
                <Target className="w-8 h-8 text-primary mb-6" />
                <h2 className="text-[24px] font-display font-bold text-white mb-4">Mission</h2>
                <h3 className="text-[#B3B3B3] font-medium mb-4 uppercase tracking-wider text-xs">Democratize Silicon-Level AI</h3>
                <p className="text-[#6A6A6A] text-sm leading-relaxed group-hover:text-[#B3B3B3] transition-colors">
                  To make custom AI silicon accessible to every industry—from healthcare to agriculture, 
                  from sports to security—by eliminating the cost and complexity barriers of 
                  traditional chip development through modern tooling and AI-assisted design.
                </p>
              </div>

              <div className="p-10 bg-black border border-[#2A2A2A] rounded-[4px] relative overflow-hidden group hover:border-[#4DA3FF] transition-colors">
                <Globe2 className="w-8 h-8 text-primary mb-6" />
                <h2 className="text-[24px] font-display font-bold text-white mb-4">Vision</h2>
                <h3 className="text-[#B3B3B3] font-medium mb-4 uppercase tracking-wider text-xs">A World Without Cloud Dependency</h3>
                <p className="text-[#6A6A6A] text-sm leading-relaxed group-hover:text-[#B3B3B3] transition-colors">
                  We envision a future where every device is intelligent by default—where AI 
                  processing happens at the point of action, not in a distant data center. 
                  Privacy-first, latency-free, and always available.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-[100px] p-8 border border-[#2A2A2A] rounded-[4px] bg-[#050505]">
              <h3 className="text-[20px] font-display font-bold text-white mb-8 flex items-center gap-3">
                <TestTube className="w-5 h-5 text-primary" />
                Research Focus
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-4 h-4 text-[#6A6A6A]" />
                    <h4 className="text-white font-medium">ASIC Architecture</h4>
                  </div>
                  <p className="text-sm text-[#6A6A6A] pl-6">Custom NPU design for edge inference</p>
                </div>
                
                <div className="w-full h-px bg-[#2A2A2A]" />
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Microchip className="w-4 h-4 text-[#6A6A6A]" />
                    <h4 className="text-white font-medium">Digital Design</h4>
                  </div>
                  <p className="text-sm text-[#6A6A6A] pl-6">RTL-to-GDSII flow optimization</p>
                </div>
                
                <div className="w-full h-px bg-[#2A2A2A]" />
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-[#6A6A6A]" />
                    <h4 className="text-white font-medium">AI Algorithms</h4>
                  </div>
                  <p className="text-sm text-[#6A6A6A] pl-6">Model compression & quantization</p>
                </div>
                
                <div className="w-full h-px bg-[#2A2A2A]" />
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-[#6A6A6A]" />
                    <h4 className="text-white font-medium">Agent AI</h4>
                  </div>
                  <p className="text-sm text-[#6A6A6A] pl-6">Automated design space exploration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
