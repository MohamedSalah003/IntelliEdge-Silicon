import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Github, Terminal, BookOpen, Download } from "lucide-react";
import toolImage from "@assets/generated_images/modern_engineering_lab_environment.png"; // Reusing or can generate specific

export default function Tools() {
  return (
    <Layout>
      <div className="pt-16 pb-24 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Open Tools</h1>
          <p className="text-xl text-muted-foreground">
            We believe in open silicon. We contribute to the open-source EDA ecosystem and provide 
            free tools to help you evaluate your designs on our 130nm nodes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-card border border-white/10 rounded-2xl p-8 flex flex-col">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">PDK-130 Open Bundle</h2>
            <p className="text-muted-foreground mb-6 flex-1">
              A completely open-source Process Design Kit for our 130nm node. Compatible with OpenLane and Magic. 
              Includes standard cell libraries, IO pads, and memory macros.
            </p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-xs text-green-400 mb-6 border border-white/5">
              $ git clone https://github.com/intelliedge/pdk-130<br/>
              $ cd pdk-130<br/>
              $ ./install.sh --toolchain=openlane
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="gap-2 border-white/20">
                <Github className="w-4 h-4" /> View on GitHub
              </Button>
              <Button variant="secondary" className="gap-2">
                <BookOpen className="w-4 h-4" /> Documentation
              </Button>
            </div>
          </div>

          <div className="bg-card border border-white/10 rounded-2xl p-8 flex flex-col">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
              <Terminal className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">PowerEstimator CLI</h2>
            <p className="text-muted-foreground mb-6 flex-1">
              A command-line tool to estimate power consumption of your verilog designs before synthesis. 
              Uses our proprietary ML models trained on 130nm silicon data.
            </p>
            <div className="bg-black/30 rounded-lg p-4 font-mono text-xs text-purple-400 mb-6 border border-white/5">
              $ npm install -g ie-power-cli<br/>
              $ ie-power estimate ./design/core.v --clock 50MHz
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="gap-2 border-white/20">
                <Download className="w-4 h-4" /> Download Binaries
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden relative border border-white/10">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          <div className="bg-secondary/30 p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Community Contributions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team actively maintains several key repositories in the open silicon space. 
              Join our discord or contribute to our projects.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              {["OpenLane Plugins", "Verilog-A Models", "Sky130 Tutorials", "RISC-V Extensions"].map((tag, i) => (
                 <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono hover:border-primary/50 transition-colors cursor-default">
                   #{tag}
                 </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
