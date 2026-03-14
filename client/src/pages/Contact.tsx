import { Layout } from "@/components/Layout";
import { useState, useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sendform-embed': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'form-id': string;
      };
    }
  }
}

export default function Contact() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    // Inject Calendly Widget
    const calendlyScript = document.createElement("script");
    calendlyScript.src = "https://assets.calendly.com/assets/external/widget.js";
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);

    // Inject SendForm Embed
    const sendformScript = document.createElement("script");
    sendformScript.src = "https://sendform.live/embed.js";
    sendformScript.defer = true;
    document.body.appendChild(sendformScript);

    return () => {
      if (document.body.contains(calendlyScript)) document.body.removeChild(calendlyScript);
      if (document.body.contains(sendformScript)) document.body.removeChild(sendformScript);
    };
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-[100px] max-w-[1280px]">
        <h1 className="text-[42px] md:text-[64px] font-display font-bold text-white mb-4 leading-tight text-center">
          Get In Touch
        </h1>
        <p className="text-[#B3B3B3] text-lg mb-16 text-center max-w-2xl mx-auto">
          Book a time with our engineering team to discuss your custom silicon needs or reach out directly via email.
        </p>

        {/* Calendly Widget Container */}
        <div className="max-w-5xl mx-auto rounded-[8px] overflow-hidden mb-24 min-h-[700px] border border-[#2A2A2A] bg-black">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/omarsliman37/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=B3B3B3" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-black p-10 rounded-[4px] border border-[#2A2A2A] min-h-[500px]">
            <h2 className="text-[24px] font-display font-bold text-white mb-8">Send a Message</h2>
            {/* The sendform-embed custom element */}
            <sendform-embed form-id="4zJ6WS0G9Lfv-aUW3mY3q"></sendform-embed>
          </div>
        </div>
      </div>
    </Layout>
  );
}
