import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden py-20">
      {/* Optional subtle arch or abstract shape - Low opacity outline */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-5">
        <div className="w-[800px] h-[800px] rounded-full border border-white/20 scale-150" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/20 scale-150" />
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-white/10 scale-150" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-white font-display font-bold text-[36px] md:text-[64px] leading-[1.1] tracking-[-0.02em] mb-8">
            Intelligence, <br />
            Forged in Silicon.
          </h1>
          
          <p className="text-[#B3B3B3] text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            We don't just build chips—we are an intelligence company. We partner with you to embed your AI directly into custom silicon, breaking free from the cloud to deliver zero latency, absolute privacy, and unmatched efficiency at the edge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button: Accent outline, accent text, transparent bg */}
            <Button 
              size="lg" 
              className="bg-transparent border border-primary text-primary hover:brightness-110 hover:bg-transparent rounded-[4px] px-8 font-medium text-[16px]"
            >
              EXPLORE PRODUCTS
            </Button>
            
            {/* Secondary Button: Monochrome outline */}
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#B3B3B3] text-white bg-transparent hover:border-white hover:bg-transparent hover:text-white rounded-[4px] px-8 font-medium text-[16px]"
            >
              OUR TECHNOLOGY
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
