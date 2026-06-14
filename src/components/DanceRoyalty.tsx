import React from "react";
import { Award, CheckCircle } from "lucide-react";

interface Tier {
  name: string;
  points: string;
  multiplier: string;
  colorClass: string;
  borderClass: string;
  bgClass: string;
  benefits: string[];
}

export default function DanceRoyalty() {
  const tiers: Tier[] = [
    {
      name: "Bronze",
      points: "Entry Level",
      multiplier: "1.0x Points",
      colorClass: "text-white/70",
      borderClass: "border-brandYellow/10",
      bgClass: "bg-brandYellow/5",
      benefits: [
        "Earn 1 point per 100 THB spent",
        "Standard class booking window",
        "Digital membership pass",
        "Access to member-only newsletters",
      ],
    },
    {
      name: "Silver",
      points: "1,000 Points",
      multiplier: "1.2x Points Boost",
      colorClass: "text-brandYellow/80",
      borderClass: "border-brandYellow/20",
      bgClass: "bg-brandYellow/5",
      benefits: [
        "Earn 1.2 points per 100 THB spent",
        "1 Complimentary guest pass / quarter",
        "5% Birthday discount on packages",
        "Exclusive monthly workshop access",
      ],
    },
    {
      name: "Gold",
      points: "3,000 Points",
      multiplier: "1.5x Points Boost",
      colorClass: "text-brandYellow",
      borderClass: "border-brandYellow/30",
      bgClass: "bg-brandYellow/5",
      benefits: [
        "Earn 1.5 points per 100 THB spent",
        "Priority 48h booking window",
        "2 Complimentary guest passes / quarter",
        "10% Birthday & merchandise discount",
        "Complimentary locker & bottled water",
      ],
    },
    {
      name: "Diamond",
      points: "6,000 Points",
      multiplier: "2.0x Points Boost",
      colorClass: "text-brandYellow font-extrabold",
      borderClass: "border-brandYellow",
      bgClass: "bg-brandYellow/10",
      benefits: [
        "Earn 2.0 points per 100 THB spent",
        "Unlimited priority booking window",
        "Complimentary guest pass every month",
        "15% Discount on all packages & events",
        "Private VIP studio showcase invitations",
        "Custom branded rumPUREE merchandise",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0F] border-b border-brandYellow/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brandYellow font-bold text-xs uppercase tracking-widest bg-brandYellow/10 px-4 py-1.5 rounded-full border border-brandYellow/20">
            Loyalty Rewards
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-4">
            Dance Royalty Program
          </h2>
          <div className="h-1 w-20 bg-brandYellow mx-auto rounded-full mb-4"></div>
          <p className="text-white/60 text-base leading-relaxed">
            Every step is rewarded. Earn points on every class booking, package renewal, and workshop. Level up your tier to unlock VIP benefits and exclusive discounts.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-[#1C1C28] rounded-3xl p-6 border-2 ${tier.borderClass} ${tier.bgClass} flex flex-col justify-between hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 relative group overflow-hidden`}
            >
              {/* Card Header */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className={`font-heading font-black text-2xl ${tier.name === "Diamond" ? "text-brandYellow" : "text-white"}`}>
                      {tier.name}
                    </h3>
                    <p className="text-xs text-white/40 font-bold tracking-wider uppercase mt-1">
                      {tier.points}
                    </p>
                  </div>
                  <Award className={`w-8 h-8 ${tier.name === "Diamond" || tier.name === "Gold" ? "text-brandYellow" : "text-white/70"} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                <div className="inline-block bg-[#111118] px-3.5 py-1.5 rounded-full border border-brandYellow/10 text-xs font-bold text-brandYellow shadow-sm mb-6">
                  {tier.multiplier}
                </div>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 mr-2.5 mt-0.5 flex-shrink-0 text-brandYellow" />
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tier Call-to-action */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  tier.name === "Diamond" 
                    ? "bg-brandYellow hover:bg-[#e0b310] text-black shadow-md shadow-yellow-500/10" 
                    : "bg-[#111118] hover:bg-[#1C1C28] text-white border border-white/10"
                }`}>
                  {tier.name === "Diamond" ? "Join the VIPs" : `Explore ${tier.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
