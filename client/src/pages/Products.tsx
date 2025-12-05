import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Zap, Database, Microchip } from "lucide-react";
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

  const memoryIps = [
    { name: "High-Density SRAM", desc: "Optimized for low leakage, sizes from 4KB to 512KB." },
    { name: "Embedded DRAM", desc: "High bandwidth memory macro for cache applications." },
    { name: "Async FIFO", desc: "Robust clock domain crossing buffers." },
    { name: "vUART", desc: "Virtual UART for efficient debug logging." }
  ];

  const algoIps = [
    { name: "Kalman Filter", desc: "Hardware accelerator for sensor fusion and estimation." },
    { name: "FFT Engine", desc: "Radix-2/4 fast fourier transform for signal processing." },
    { name: "TinyCNN", desc: "Lightweight convolution accelerator for 3x3 kernels." },
    { name: "PID Controller", desc: "Hardened control loop logic for motor drivers." }
  ];

  return (
    <Layout>
      <div className="py-[100px] container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 border-b border-[#2A2A2A] pb-10">
          <div>
            <h1 className="text-[42px] md:text-[64px] font-display font-bold text-white mb-6 leading-tight">Products & IPs</h1>
            <p className="text-[#B3B3B3] text-[18px] max-w-2xl">
              Hardened IP blocks and ready-to-integrate ASICs designed for cost-sensitive edge applications.
            </p>
          </div>
          <Button 
            variant="outline"
            className="mt-6 md:mt-0 border-[#B3B3B3] text-white hover:border-white bg-transparent rounded-[4px]"
          >
            Download Catalog <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          {/* Featured Product - Takes up 5 columns */}
          <div className="lg:col-span-5">
            <div className="bg-black border border-[#2A2A2A] p-10 rounded-[4px] h-full flex flex-col justify-between">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-4 block">Flagship Product</span>
                <h2 className="text-[32px] font-display font-bold text-white mb-4">IntelliCore-X1 Dev Kit</h2>
                <p className="text-[#B3B3B3] mb-8 leading-relaxed">
                  Complete development board featuring our signature X1 accelerator. Ideal for prototyping smart IoT devices with minimal power overhead.
                </p>
              </div>
              <Button className="w-fit border border-primary text-primary bg-transparent hover:bg-transparent hover:brightness-110 rounded-[4px]">
                View Specifications
              </Button>
            </div>
          </div>
          
          {/* Product List - Takes up 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                className="p-8 bg-black border border-[#2A2A2A] rounded-[4px] hover:border-[#6A6A6A] transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[24px] font-display font-bold text-white">{product.name}</h3>
                  <span className="text-xs px-2 py-1 rounded border border-[#2A2A2A] text-[#B3B3B3] bg-[#0D0D0D]">
                    {product.status}
                  </span>
                </div>
                <p className="text-sm text-[#6A6A6A] uppercase tracking-wider mb-4">{product.category}</p>
                <p className="text-[#B3B3B3] text-sm mb-6">{product.desc}</p>
                <div className="flex gap-3 flex-wrap">
                  {product.specs.map((spec, i) => (
                    <span key={i} className="text-xs text-[#B3B3B3] border-r border-[#2A2A2A] pr-3 last:border-0">
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IP Library Section */}
        <div className="pt-20 border-t border-[#2A2A2A]">
          <h2 className="text-[32px] font-display font-bold text-white mb-10">IP Core Library</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Memory & Peripherals */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-primary" />
                <h3 className="text-[24px] font-display font-bold text-white">Memory & Peripherals</h3>
              </div>
              <div className="grid gap-4">
                {memoryIps.map((ip, i) => (
                  <div key={i} className="p-6 bg-black border border-[#2A2A2A] rounded-[4px] hover:border-[#4DA3FF] transition-colors group">
                    <h4 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{ip.name}</h4>
                    <p className="text-sm text-[#B3B3B3]">{ip.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Algorithms */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-[24px] font-display font-bold text-white">Algorithmic Accelerators</h3>
              </div>
              <div className="grid gap-4">
                {algoIps.map((ip, i) => (
                  <div key={i} className="p-6 bg-black border border-[#2A2A2A] rounded-[4px] hover:border-[#4DA3FF] transition-colors group">
                    <h4 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{ip.name}</h4>
                    <p className="text-sm text-[#B3B3B3]">{ip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
}
