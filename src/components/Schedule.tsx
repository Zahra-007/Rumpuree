import React from "react";
import { Clock, MapPin } from "lucide-react";

interface ScheduleItem {
  time: string;
  className: string;
  instructor: string;
  branch: string;
  bgClass: string;
  textClass: string;
}

interface DaySchedule {
  day: string;
  classes: ScheduleItem[];
}

export default function Schedule() {
  const scheduleData: DaySchedule[] = [
    {
      day: "Monday",
      classes: [
        {
          time: "19:00 - 20:00",
          className: "Salsa On2",
          instructor: "Carlos",
          branch: "Asok Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        {
          time: "18:00 - 19:15",
          className: "Adult Ballet",
          instructor: "Kru Pim",
          branch: "Asok Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
        {
          time: "20:00 - 21:00",
          className: "Bachata Sensual",
          instructor: "Carlos & Maria",
          branch: "Samyan Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        {
          time: "18:00 - 19:15",
          className: "Pole Dance & Flow",
          instructor: "Kru Kwan",
          branch: "Samyan Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
        {
          time: "19:00 - 20:00",
          className: "Salsa On2",
          instructor: "Carlos",
          branch: "Asok Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        {
          time: "19:30 - 20:45",
          className: "Adult Ballet",
          instructor: "Kru Pim",
          branch: "Asok Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
        {
          time: "20:00 - 21:30",
          className: "Argentine Tango",
          instructor: "Enrique",
          branch: "Asok Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
      ],
    },
    {
      day: "Friday",
      classes: [
        {
          time: "18:30 - 19:45",
          className: "Street Jazz / Hip Hop",
          instructor: "Jojo",
          branch: "Samyan Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
      ],
    },
    {
      day: "Saturday",
      classes: [
        {
          time: "11:00 - 12:15",
          className: "Pole Dance & Flow",
          instructor: "Kru Kwan",
          branch: "Samyan Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
        {
          time: "14:00 - 15:15",
          className: "Street Jazz / Hip Hop",
          instructor: "Jojo",
          branch: "Samyan Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
        {
          time: "17:00 - 18:15",
          className: "Bachata Sensual",
          instructor: "Carlos & Maria",
          branch: "Asok Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
      ],
    },
    {
      day: "Sunday",
      classes: [
        {
          time: "15:30 - 17:00",
          className: "Argentine Tango",
          instructor: "Enrique",
          branch: "Asok Branch",
          bgClass: "bg-brandYellow/5 border-brandYellow/20",
          textClass: "text-brandYellow",
        },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-24 bg-[#0A0A0F] border-b border-brandYellow/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brandYellow font-bold text-xs uppercase tracking-widest bg-brandYellow/10 px-4 py-1.5 rounded-full border border-brandYellow/20">
            Timetable
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-4">
            Weekly Class Schedule
          </h2>
          <div className="h-1 w-20 bg-brandYellow mx-auto rounded-full mb-4"></div>
          <p className="text-white/60 text-base">
            Plan your dance week. Check out the timetables for both our Asok and Samyan Mitrtown branches below.
          </p>
        </div>

        {/* Weekly Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
          {scheduleData.map((dayObj) => (
            <div
              key={dayObj.day}
              className="bg-[#1C1C28] rounded-2xl p-4 border border-brandYellow/10 flex flex-col h-full hover:border-brandYellow/30 transition-all duration-300 shadow-sm"
            >
              <h3 className="font-heading font-extrabold text-sm text-white border-b border-white/10 pb-2 mb-3 tracking-wide uppercase">
                {dayObj.day}
              </h3>
              
              <div className="space-y-3 flex-grow">
                {dayObj.classes.length > 0 ? (
                  dayObj.classes.map((cls, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border ${cls.bgClass} text-left flex flex-col gap-1 hover:scale-[1.02] transition-transform duration-200`}
                    >
                      <span className={`text-[10px] font-extrabold tracking-wider uppercase ${cls.textClass}`}>
                        {cls.className}
                      </span>
                      <div className="flex items-center text-[10px] text-white/50 font-semibold mt-1">
                        <Clock className="w-3 h-3 mr-1 text-white/30" />
                        <span>{cls.time}</span>
                      </div>
                      <div className="flex items-center text-[10px] text-white/40 font-medium">
                        <MapPin className="w-3 h-3 mr-1 text-white/20" />
                        <span>{cls.branch.replace(" Branch", "")}</span>
                      </div>
                      <span className="text-[10px] font-bold text-white/70 mt-1">
                        By {cls.instructor}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-white/30 italic py-4">No classes scheduled</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
