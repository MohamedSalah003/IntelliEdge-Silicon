import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export default function Tools() {
  return (
    <Layout>
      <div className="py-[100px] container mx-auto px-6 max-w-[1280px]">
        <div className="max-w-3xl mb-20">
          <h1 className="text-[42px] md:text-[64px] font-display font-bold text-white mb-6">Open Tools</h1>
          <p className="text-[#B3B3B3] text-[18px]">
            We contribute to the open-source EDA ecosystem and provide 
            free tools to help you evaluate your designs on our 130nm nodes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-black border border-[#2A2A2A] rounded-[4px] p-10 flex flex-col">
            <div className="mb-6">
              <Terminal className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-[24px] font-display font-bold text-white mb-4">PDK-130 Open Bundle</h2>
            <p className="text-[#B3B3B3] mb-8 flex-1 leading-relaxed">
              A completely open-source Process Design Kit for our 130nm node. Compatible with OpenLane and Magic. 
              Includes standard cell libraries, IO pads, and memory macros.
            </p>
            <div className="bg-[#0D0D0D] rounded-[4px] p-4 font-mono text-xs text-[#B3B3B3] mb-8 border border-[#2A2A2A]">
              $ git clone https://github.com/intelliedge/pdk-130<br/>
              $ cd pdk-130<br/>
              $ ./install.sh --toolchain=openlane
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-[#B3B3B3] text-white hover:bg-transparent hover:border-white rounded-[4px]">
                 View on GitHub
              </Button>
            </div>
          </div>

          <div className="bg-black border border-[#2A2A2A] rounded-[4px] p-10 flex flex-col">
            <div className="mb-6">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-[24px] font-display font-bold text-white mb-4">PowerEstimator CLI</h2>
            <p className="text-[#B3B3B3] mb-8 flex-1 leading-relaxed">
              A command-line tool to estimate power consumption of your verilog designs before synthesis. 
              Uses our proprietary ML models trained on 130nm silicon data.
            </p>
            <div className="bg-[#0D0D0D] rounded-[4px] p-4 font-mono text-xs text-[#B3B3B3] mb-8 border border-[#2A2A2A]">
              $ npm install -g ie-power-cli<br/>
              $ ie-power estimate ./design/core.v --clock 50MHz
            </div>
            <div className="flex gap-4">
               <Button variant="outline" className="border-[#B3B3B3] text-white hover:bg-transparent hover:border-white rounded-[4px]">
                 Download Binaries
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
