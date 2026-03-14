import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] w-full flex items-center justify-center bg-black relative overflow-hidden">
        {/* Abstract Background Element to match branding */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
          <div className="w-[600px] h-[600px] rounded-full border border-white/40 scale-150 rotate-45" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-white/30 scale-150 -rotate-12" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 relative z-10 text-center max-w-2xl"
        >
          <div className="mb-6 flex justify-center">
            <span className="text-[#6A6A6A] font-mono text-sm tracking-widest border border-[#2A2A2A] px-4 py-1.5 rounded-full bg-[#050505]">
              ERROR 404
            </span>
          </div>
          
          <h1 className="text-[48px] md:text-[80px] font-display font-bold text-white leading-none tracking-tight mb-6">
            Signal Lost.
          </h1>
          
          <p className="text-[#B3B3B3] text-lg mb-10 leading-relaxed font-light">
            The neural pathway you are searching for does not exist in our silicon architecture. Let's get you back to the core.
          </p>
          
          <Link href="/">
            <Button 
              size="lg" 
              className="bg-transparent border border-primary text-primary hover:brightness-110 hover:bg-transparent rounded-[4px] px-8 font-medium text-[16px] cursor-pointer"
            >
              RETURN TO HOME
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
