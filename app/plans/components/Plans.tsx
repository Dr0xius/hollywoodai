import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PlanButton from "./PlanButton";

const Plans = () => {
  const plans = [
    {
      name: "Premium",
      price: "19",
      priceId: "price_1TDsexFVCu2bcAnsMBT73WvU",
      period: "Monthly",
      features: [
        "Premium Support",
        "Access 100+ Summaries",
        "Higher Quality Audio",
        "License For Commercial Use",
        "2 Supported Devices",
      ],
    },
    {
      name: "VIP+",
      price: "190",
      priceId: "price_1TDsfSFVCu2bcAnshr7EMKrV",
      period: "Yearly",
      features: [
        "2 Months Free",
        "Access 100+ Summaries",
        "Highest Quality Audio",
        "License For Commercial Use",
        "3 Supported Devices",
      ],
    },
  ];

  return (
    <>
      <div className="pt-3 border-b border-white/10 mx-auto w-full">
        <div className="px-8 lg:px-20 mx-auto max-w-385">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
            Plans
          </h1>
          <h3 className="text-sm text-white/60 mb-4">
            Get unlimited access to our extensive library of movie summaries.
          </h3>
        </div>
      </div>
      <section className="pt-3 mx-auto w-full">
        <div className="px-8 lg:px-20 mx-auto max-w-385">
          <h2 className="text-2xl font-bold mb-5 text-center sm:text-left tracking-tight">
            Subscription Plans:
          </h2>
        </div>

        <div className="flex flex-col px-8 lg:px-20 mx-auto max-w-385 sm:flex-row gap-6 items-stretch justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col bg-[#121214] border border-white/40 rounded-4xl p-6 hover:border-blue-400/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-semibold mr-1">
                    $
                  </span>
                  <span className="text-4xl md:text-5xl font-bold ">
                    {plan.price}
                  </span>
                </div>
                <span className="text-zinc-500 text-xs font-medium uppercase mt-4">
                  {plan.period}
                </span>
              </div>

              <p className="text-zinc-400 font-bold mb-8 text-xs uppercase tracking-widest">
                {plan.name}
              </p>

              <ul className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base leading-tight"
                  >
                    <FaCheckCircle className="text-blue-100 text-sm mt-0.5 shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <PlanButton priceId={plan.priceId} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Plans;
