import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, ShieldCheck, Microchip } from "lucide-react";
import chipImage from "@assets/generated_images/edge_ai_asic_chip_on_pcb.png";
import { Button } from "@/components/ui/button";

export default function Products() {
  const products = [
    {
      id: "ie-100",
      name: "IntelliCore-X1",
      category: "Edge AI Accelerator",
      desc: "A dedicated neural network accelerator optimized for quantized inference on 130nm.",
      specs: ["0.5 TOPS/W", "SPI/I2C Interface", "On-chip SRAM"],
      status: "Tape-out Ready"
    },
    {
      id: "ie-200",
      name: "MotionSense MCU",
      category: "Robotics Control",
      desc: "Real-time motor control unit with integrated sensor fusion hardware logic.",
      specs: ["6-Axis Motion Support", "Hard-Realtime", "Low Jitter"],
      status: "In Development"
    },
    {
      id: "ie-300",
      name: "VisionEdge ISP",
      category: "Image Processing",
      desc: "Low-power Image Signal Processor for industrial inspection cameras.",
      specs: ["Global Shutter Support", "Edge Detection HW", "MIPI CSI-2"],
      status: "Available IP"
    }
  ];

  return (
    <Layout>
      <div className="pt-12 pb-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Products & IPs</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Our portfolio of hardened IP blocks and ready-to-integrate ASICs designed for cost-sensitive edge applications.
            </p>
          </div>
          <Button className="hidden md:flex gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10">
            Download Catalog <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img src={chipImage} alt="Chip" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 z-20 p-8">
              <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-3 inline-block">Flagship</span>
              <h2 className="text-3xl font-bold mb-2">IntelliCore-X1 Dev Kit</h2>
              <p className="text-gray-300 mb-6 max-w-md">Complete development board featuring our signature X1 accelerator. Ideal for prototyping smart IoT devices.</p>
              <Button>View Specs</Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-colors flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded border ${
                      product.status === 'Available IP' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 
                      'bg-amber-500/10 border-amber-500/20 text-amber-400'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-sm text-primary/80 font-tech uppercase tracking-wider mb-2">{product.category}</p>
                  <p className="text-muted-foreground text-sm mb-4">{product.desc}</p>
                  <div className="flex gap-3 flex-wrap">
                    {product.specs.map((spec, i) => (
                      <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400 border border-white/5">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IP Library Section */}
        <div className="bg-secondary/20 rounded-2xl p-12 border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Soft IP Library</h2>
            <p className="text-muted-foreground">Verified RTL blocks ready for integration into your custom SoC.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {["RISC-V Cores", "SPI/I2C Controllers", "DMA Engines", "Crypto Accelerators", "PWM Generators", "ADC Interfaces"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-white/5">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
