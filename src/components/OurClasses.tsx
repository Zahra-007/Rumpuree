import React from "react";
import { Clock, User } from "lucide-react";

interface ClassItem {
  id: string;
  name: string;
  image: string;
  badge: {
    text: string;
    bgClass: string;
  };
  instructor: {
    name: string;
    avatarBg: string;
    initials: string;
  };
  schedule: string[];
}

export default function OurClasses() {
  const classes: ClassItem[] = [
    {
      id: "ballet",
      name: "Adult Ballet",
      image: "/images/dancestyle/01_ballet_adult.jpeg",
      badge: { text: "Ballet & Grace", bgClass: "bg-rose-100 text-rose-800 border-rose-200" },
      instructor: { name: "Kru Pim", avatarBg: "bg-rose-500", initials: "KP" },
      schedule: ["Tuesday: 18:00 - 19:15", "Thursday: 19:30 - 20:45"],
    },
    {
      id: "salsa",
      name: "Salsa On2",
      image: "/images/dancestyle/19_salsa_on2.jpeg",
      badge: { text: "Sultry Latin", bgClass: "bg-purple-100 text-purple-800 border-purple-200" },
      instructor: { name: "Carlos", avatarBg: "bg-purple-500", initials: "C" },
      schedule: ["Monday: 19:00 - 20:00", "Wednesday: 19:00 - 20:00"],
    },
    {
      id: "hiphop",
      name: "Street Jazz / Hip Hop",
      image: "/images/dancestyle/03_street_jazz.jpeg",
      badge: { text: "Urban Vibe", bgClass: "bg-pink-100 text-pink-800 border-pink-200" },
      instructor: { name: "Jojo", avatarBg: "bg-pink-500", initials: "J" },
      schedule: ["Friday: 18:30 - 19:45", "Saturday: 14:00 - 15:15"],
    },
    {
      id: "bachata",
      name: "Bachata Sensual",
      image: "/images/dancestyle/33_bachata.jpeg",
      badge: { text: "Romantic Latin", bgClass: "bg-indigo-100 text-indigo-800 border-indigo-200" },
      instructor: { name: "Carlos & Maria", avatarBg: "bg-indigo-500", initials: "CM" },
      schedule: ["Tuesday: 20:00 - 21:00", "Saturday: 17:00 - 18:15"],
    },
    {
      id: "tango",
      name: "Argentine Tango",
      image: "/images/dancestyle/06_argentine_tango.jpeg",
      badge: { text: "Classic Passion", bgClass: "bg-amber-100 text-amber-800 border-amber-200" },
      instructor: { name: "Enrique", avatarBg: "bg-amber-500", initials: "E" },
      schedule: ["Thursday: 20:00 - 21:30", "Sunday: 15:30 - 17:00"],
    },
    {
      id: "poledance",
      name: "Pole Dance & Floorwork",
      image: "/images/dancestyle/24_floorwork.jpeg",
      badge: { text: "Strength & Flow", bgClass: "bg-violet-100 text-violet-800 border-violet-200" },
      instructor: { name: "Kru Kwan", avatarBg: "bg-violet-500", initials: "KK" },
      schedule: ["Wednesday: 18:00 - 19:15", "Saturday: 11:00 - 12:15"],
    },
  ];

  return (
    <section id="classes" className="py-24 bg-gray-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brandPink font-bold text-xs uppercase tracking-widest bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100/50">
            Learn From The Best
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 mb-4">
            Our Dance Classes
          </h2>
          <div className="h-1 w-20 bg-brandPink mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-base">
            From absolute beginners taking their first steps to advanced dancers refining their technique. Select a class and start dancing today!
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Colored Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${cls.badge.bgClass}`}>
                    {cls.badge.text}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-4 group-hover:text-brandPink transition-colors duration-200">
                  {cls.name}
                </h3>

                {/* Instructor details */}
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-gray-100">
                  <div className={`w-8 h-8 rounded-full ${cls.instructor.avatarBg} flex items-center justify-center text-white font-bold text-xs`}>
                    {cls.instructor.initials}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Instructor</p>
                    <p className="text-sm font-bold text-gray-800">{cls.instructor.name}</p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-gray-400 text-xs font-semibold tracking-wider uppercase">
                    <Clock className="w-4 h-4 mr-2 text-brandPink" />
                    <span>Weekly Schedule</span>
                  </div>
                  <div className="space-y-1.5 pl-6">
                    {cls.schedule.map((time, idx) => (
                      <p key={idx} className="text-sm text-gray-600 font-medium">
                        {time}
                      </p>
                    ))}
                  </div>
                </div>

                {/* CTA inside Card */}
                <button className="w-full py-3 bg-gray-50 group-hover:bg-brandPink text-gray-700 group-hover:text-white font-bold rounded-xl text-sm transition-all duration-200 border border-gray-100 group-hover:border-brandPink">
                  Book A Trial Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
