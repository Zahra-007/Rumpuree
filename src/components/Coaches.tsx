import React from "react";
import Image from "next/image";
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
    <section id="coaches" className="py-24 bg-[#0A0A0F] border-b border-brandYellow/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brandYellow font-bold text-xs uppercase tracking-widest bg-brandYellow/10 px-4 py-1.5 rounded-full border border-brandYellow/20">
            Meet the Masters
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-4">
            Our Elite Coaches
          </h2>
          <div className="h-1 w-20 bg-brandYellow mx-auto rounded-full mb-4"></div>
          <p className="text-white/60 text-base">
            Our certified, international, and award-winning instructors are dedicated to helping you reach your dance and fitness goals safely and joyfully.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="group bg-[#1C1C28] rounded-2xl overflow-hidden border border-brandYellow/10 shadow-sm hover:border-brandYellow/30 hover:shadow-yellow-500/5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Photo using Next.js Image component */}
              <div className="relative h-80 w-full overflow-hidden bg-black">
                <Image
                  src={coach.photo}
                  alt={coach.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-[#1C1C28]/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 border border-brandYellow/20">
                  <Star className="w-3.5 h-3.5 fill-brandYellow text-brandYellow" />
                  <span className="text-xs font-bold text-brandYellow">Top Coach</span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-xl text-white">
                  {coach.name}
                </h3>
                <p className="text-sm font-semibold text-brandYellow mb-4">
                  {coach.title}
                </p>
                
                <p className="text-sm text-white/60 leading-relaxed mb-6 flex-grow font-normal">
                  {coach.bio}
                </p>

                {/* Specialties Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {coach.specialties.map((spec, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#111118] text-white/70 font-semibold px-3 py-1 rounded-md border border-brandYellow/10"
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
