import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Clock, Globe, ChevronRight } from "lucide-react";

export default function Contact() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-[100px] max-w-[1280px]">
        <h1 className="text-[42px] md:text-[64px] font-display font-bold text-white mb-4 leading-tight text-center">
          Get In Touch
        </h1>
        <p className="text-[#B3B3B3] text-lg mb-16 text-center max-w-2xl mx-auto">
          Book a time with our engineering team to discuss your custom silicon needs or reach out directly via email.
        </p>

        {/* Cal.com Style Widget Container */}
        <div className="max-w-5xl mx-auto bg-black border border-[#2A2A2A] rounded-[8px] overflow-hidden shadow-2xl mb-24 flex flex-col md:flex-row min-h-[600px]">
          
          {/* Left Panel: Meeting Details */}
          <div className="md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-[#2A2A2A] bg-[#050505]">
            <div className="mb-6">
              <span className="text-[#6A6A6A] text-sm font-semibold uppercase tracking-wider">IntelliEdge Silicon</span>
              <h2 className="text-2xl font-bold text-white mt-2 mb-4">Discovery Call</h2>
              <div className="flex items-center gap-3 text-[#B3B3B3] mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">30 min</span>
              </div>
              <div className="flex items-center gap-3 text-[#B3B3B3]">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Google Meet</span>
              </div>
            </div>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">
              A preliminary discussion to understand your application requirements (latency, power, cost) and determine how our custom silicon solutions can accelerate your edge AI workloads.
            </p>
          </div>

          {/* Middle Panel: Calendar */}
          <div className="md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-[#2A2A2A] flex flex-col items-center justify-start pt-10">
             <h3 className="text-white font-medium mb-6 w-full text-left pl-4">Select a Date</h3>
             <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md text-white w-full flex justify-center"
                classNames={{
                  head_cell: "text-[#6A6A6A] font-normal text-[0.8rem]",
                  cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[#1A1A1A] first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-normal text-white aria-selected:opacity-100 hover:bg-[#1A1A1A] rounded-full",
                  day_selected: "bg-white text-black hover:bg-white hover:text-black focus:bg-white focus:text-black",
                  day_today: "bg-[#1A1A1A] text-white",
                }}
              />
          </div>

          {/* Right Panel: Time Slots */}
          <div className="md:w-1/3 p-6 bg-black overflow-y-auto h-[600px]">
            <h3 className="text-white font-medium mb-6">Select a Time</h3>
            {date ? (
              <div className="flex flex-col gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full py-3 px-4 rounded-[4px] border text-sm font-medium transition-all flex justify-between items-center group ${
                      selectedTime === time
                        ? "bg-white text-black border-white"
                        : "bg-transparent border-[#2A2A2A] text-white hover:border-white"
                    }`}
                  >
                    {time}
                    {selectedTime === time && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-[#6A6A6A] text-sm">
                Please select a date first
              </div>
            )}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto">
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
    </Layout>
  );
}
