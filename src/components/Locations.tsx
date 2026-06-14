import React from "react";
import { MapPin, Train, Phone, ExternalLink } from "lucide-react";

interface Branch {
  id: string;
  name: string;
  address: string;
  transit: string;
  phone: string;
  mapLink: string;
}

export default function Locations() {
  const branches: Branch[] = [
    {
      id: "asok",
      name: "Asok Branch",
      address: "Jasmine City Building, 2nd Floor, Sukhumvit Soi 23, Khlong Toei Nuea, Watthana, Bangkok 10110",
      transit: "BTS Asok (Exit 6) or MRT Sukhumvit (Exit 2) - 3 mins walk",
      phone: "02-262-0010",
      mapLink: "https://maps.google.com/?q=rumPUREE+Asok+Jasmine+City",
    },
    {
      id: "samyan",
      name: "Samyan Mitrtown Branch",
      address: "Samyan Mitrtown, 3rd Floor, Zone House of Commons, Rama IV Rd, Wang Mai, Pathum Wan, Bangkok 10330",
      transit: "MRT Sam Yan (Exit 2) - Direct underground connection",
      phone: "092-262-0010",
      mapLink: "https://maps.google.com/?q=rumPUREE+Samyan+Mitrtown",
    },
  ];

  return (
    <section id="contacts" className="py-24 bg-[#111118] border-b border-brandYellow/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brandYellow font-bold text-xs uppercase tracking-widest bg-brandYellow/10 px-4 py-1.5 rounded-full border border-brandYellow/20">
            Find Us
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-4">
            Our Studio Locations
          </h2>
          <div className="h-1 w-20 bg-brandYellow mx-auto rounded-full mb-4"></div>
          <p className="text-white/60 text-base">
            Conveniently located in the heart of Bangkok with easy access via mass transit. Visit our world-class facilities today.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-[#1C1C28] rounded-3xl p-8 border border-brandYellow/10 shadow-md hover:border-brandYellow/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brandYellow/10 flex items-center justify-center border border-brandYellow/20">
                    <MapPin className="w-6 h-6 text-brandYellow" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white">
                    {branch.name}
                  </h3>
                </div>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-5 mt-1 flex-shrink-0 flex justify-center text-white/30">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <p className="ml-3 text-sm text-white/60 leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  {/* Transit */}
                  <div className="flex items-start">
                    <div className="w-5 mt-1 flex-shrink-0 flex justify-center text-brandYellow">
                      <Train className="w-4.5 h-4.5" />
                    </div>
                    <p className="ml-3 text-sm text-white font-semibold">
                      {branch.transit}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-5 mt-1 flex-shrink-0 flex justify-center text-white/30">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <p className="ml-3 text-sm text-white/60">
                      {branch.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-[#111118] hover:bg-brandYellow hover:text-black text-brandYellow font-bold py-3.5 px-6 rounded-2xl text-sm transition-all duration-200 border border-brandYellow/20 hover:border-brandYellow"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
