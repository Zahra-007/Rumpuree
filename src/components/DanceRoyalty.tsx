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
      colorClass: "text-amber-700",
      borderClass: "border-amber-100",
      bgClass: "bg-amber-50/20",
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
      colorClass: "text-slate-400",
      borderClass: "border-slate-200",
      bgClass: "bg-slate-50/20",
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
      colorClass: "text-amber-500",
      borderClass: "border-amber-200",
      bgClass: "bg-amber-50/35",
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
      colorClass: "text-brandPink",
      borderClass: "border-pink-200",
      bgClass: "bg-pink-50/25",
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
    <section className="py-24 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brandPink font-bold text-xs uppercase tracking-widest bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100/50">
            Loyalty Rewards
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-4 mb-4">
            Dance Royalty Program
          </h2>
          <div className="h-1 w-20 bg-brandPink mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-base leading-relaxed">
            Every step is rewarded. Earn points on every class booking, package renewal, and workshop. Level up your tier to unlock VIP benefits and exclusive discounts.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-3xl p-6 border-2 ${tier.borderClass} ${tier.bgClass} flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group overflow-hidden`}
            >
              {/* Card Header */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className={`font-heading font-black text-2xl ${tier.colorClass}`}>
                      {tier.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-bold tracking-wider uppercase mt-1">
                      {tier.points}
                    </p>
                  </div>
                  <Award className={`w-8 h-8 ${tier.colorClass} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                <div className="inline-block bg-white px-3.5 py-1.5 rounded-full border border-gray-100 text-xs font-bold text-gray-700 shadow-sm mb-6">
                  {tier.multiplier}
                </div>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className={`w-4 h-4 mr-2.5 mt-0.5 flex-shrink-0 ${tier.colorClass}`} />
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tier Call-to-action */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  tier.name === "Diamond" 
                    ? "bg-brandPink text-white shadow-md shadow-pink-500/25" 
                    : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
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
