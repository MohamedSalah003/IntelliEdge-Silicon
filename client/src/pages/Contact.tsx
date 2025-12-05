import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Contact() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Layout>
      <div className="container mx-auto px-6 py-[100px] max-w-[1280px]">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <h1 className="text-[42px] md:text-[64px] font-display font-bold text-white mb-8 leading-tight">
              Get In Touch
            </h1>
            <p className="text-[#B3B3B3] text-lg mb-12">
              Schedule a consultation with our engineering team to discuss your ASIC requirements.
            </p>

            <div className="bg-black border border-[#2A2A2A] rounded-[4px] p-8">
              <h3 className="text-white font-bold mb-4">Book a Meeting</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-[4px] border border-[#2A2A2A] bg-black text-white mb-6"
              />
              <div className="space-y-2">
                <div className="p-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-[4px] flex justify-between items-center cursor-pointer hover:border-[#4DA3FF] transition-colors">
                  <span className="text-sm text-[#B3B3B3]">10:00 AM - Discovery Call</span>
                  <Button size="sm" variant="outline" className="h-7 text-xs border-[#2A2A2A] text-white">Select</Button>
                </div>
              </div>
            </div>
            
            <div className="mt-12 space-y-2 text-[#B3B3B3]">
              <p>contact@intelliedge.silicon</p>
              <p>Tech Park, Silicon Valley, CA</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
             <div className="bg-black p-10 rounded-[4px] border border-[#2A2A2A]">
              <h2 className="text-[24px] font-display font-bold text-white mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#B3B3B3]">First Name</label>
                    <Input placeholder="John" className="bg-[#0D0D0D] border-[#2A2A2A] text-white h-12 rounded-[4px] focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#B3B3B3]">Last Name</label>
                    <Input placeholder="Doe" className="bg-[#0D0D0D] border-[#2A2A2A] text-white h-12 rounded-[4px] focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#B3B3B3]">Email</label>
                  <Input type="email" placeholder="john@company.com" className="bg-[#0D0D0D] border-[#2A2A2A] text-white h-12 rounded-[4px] focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#B3B3B3]">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="bg-[#0D0D0D] border-[#2A2A2A] text-white min-h-[150px] rounded-[4px] focus-visible:ring-primary" />
                </div>
                <Button className="w-full h-12 border border-primary text-primary bg-transparent hover:bg-transparent hover:brightness-110 rounded-[4px] font-medium">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
