import React from "react";
import SectionHeadingTitle from "../layout/SectionHeadingTitle";
import TrustCard from "../ui/TrustCard";

const trustData = [
  {
    image: "/Icons/key-lock.svg",
    headingTitle: "Privacy",
    trustDescription:
      "Your financial data is yours alone. With strict privacy controls and zero data sharing without consent, we make sure your information stays confidential and under your full control.",
    furtherClass: "",
  },
  {
    image: "/Icons/small security Icon.svg",
    headingTitle: "Security",
    trustDescription:
      "Top-grade encryption keeps your financial data safe. Only you can access your spending history and sensitive information.",
    furtherClass: "w-[526px]",
  },
  {
    image: "/Icons/status-up.svg",
    headingTitle: "Insight",
    trustDescription:
      "Understand your spending like never before with intuitive analytics and personalized tips — turning raw data into smart financial decisions.",
    furtherClass: "",
  },
  {
    image: "/Icons/setting.svg",
    headingTitle: "Automation",
    trustDescription:
      "Automatically categorize expenses, detect patterns in spending, and handle recurring transactions — minimizing manual effort and maximizing efficiency.",
    furtherClass: "",
  },
];
const Confidentiality = () => {
  return (
    <div className="flex flex-col gap-18">
      <div>
        <SectionHeadingTitle
          title="Confidential and Efficient"
          description="Digital expense trackers help users take control of their finances with ease, offering powerful tools to manage money, stay on budget, and achieve financial goals effortlessly."
        />
      </div>

      <div className="grid grid-cols-2 gap-16">
        {trustData.map((trust, index) => (
          <TrustCard
            key={index}
            image={trust.image}
            headingTitle={trust.headingTitle}
            trustDescription={trust.trustDescription}
            furtherClass={trust.furtherClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Confidentiality;
