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
    <section id="contacts" className="py-24 bg-gray-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brandPink font-bold text-xs uppercase tracking-widest bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100/50">
            Find Us
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 mb-4">
            Our Studio Locations
          </h2>
          <div className="h-1 w-20 bg-brandPink mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-base">
            Conveniently located in the heart of Bangkok with easy access via mass transit. Visit our world-class facilities today.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center border border-pink-100">
                    <MapPin className="w-6 h-6 text-brandPink" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-gray-900">
                    {branch.name}
                  </h3>
                </div>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-5 mt-1 flex-shrink-0 flex justify-center text-gray-400">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <p className="ml-3 text-sm text-gray-600 leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  {/* Transit */}
                  <div className="flex items-start">
                    <div className="w-5 mt-1 flex-shrink-0 flex justify-center text-brandPink">
                      <Train className="w-4.5 h-4.5" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700 font-semibold">
                      {branch.transit}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-5 mt-1 flex-shrink-0 flex justify-center text-gray-400">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <p className="ml-3 text-sm text-gray-600">
                      {branch.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-gray-50">
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-gray-50 hover:bg-brandPink hover:text-white text-gray-800 font-bold py-3.5 px-6 rounded-2xl text-sm transition-all duration-200 border border-gray-100 hover:border-brandPink"
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
