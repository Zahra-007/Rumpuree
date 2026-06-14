import React from "react";
import { Star } from "lucide-react";

interface Coach {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  specialties: string[];
}

export default function Coaches() {
  const coaches: Coach[] = [
    {
      id: "pim",
      name: "Kru Pim",
      title: "Head of Ballet & Contemporary",
      photo: "/images/human1.png",
      bio: "Pim has over 15 years of classical ballet experience training at national academies. She specializes in adult ballet, focus technique, posture, and expressive grace.",
      specialties: ["Classical Ballet", "Contemporary", "Flexibility"],
    },
    {
      id: "carlos",
      name: "Carlos",
      title: "Senior Latin Dance Instructor",
      photo: "/images/human2.png",
      bio: "An international Salsa dancer from Colombia, Carlos brings authentic Latin flavor and rhythm to Bangkok. His energetic teaching style makes learning Salsa and Bachata highly engaging.",
      specialties: ["Salsa On1/On2", "Bachata Sensual", "Cha Cha"],
    },
    {
      id: "kwan",
      name: "Kru Kwan",
      title: "Lead Pole Art & Floorwork Coach",
      photo: "/images/human3.png",
      bio: "Kwan is a certified Pole Art instructor and former gymnast with a passion for creative expression and core strengthening. She teaches fluidity, safety, and advanced technique.",
      specialties: ["Pole Dance", "Floorwork Flow", "Gymnastic Conditioning"],
    },
  ];

  return (
    <section id="coaches" className="py-24 bg-white border-b border-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brandPink font-bold text-xs uppercase tracking-widest bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100/50">
            Meet the Masters
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 mb-4">
            Our Elite Coaches
          </h2>
          <div className="h-1 w-20 bg-brandPink mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-base">
            Our certified, international, and award-winning instructors are dedicated to helping you reach your dance and fitness goals safely and joyfully.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Photo */}
              <div className="relative h-80 w-full overflow-hidden bg-gray-50">
                <img
                  src={coach.photo}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 object-top"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 border border-gray-100">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-gray-700">Top Coach</span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-xl text-gray-900">
                  {coach.name}
                </h3>
                <p className="text-sm font-semibold text-brandPink mb-4">
                  {coach.title}
                </p>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                  {coach.bio}
                </p>

                {/* Specialties Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {coach.specialties.map((spec, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-50 text-gray-500 font-semibold px-3 py-1 rounded-md border border-gray-100/50"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
