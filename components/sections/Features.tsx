import FeatureCard from "@/components/ui/FeatureCard";
import Image from "next/image";
import SectionHeadingTitle from "../layout/SectionHeadingTitle";
const featureData = [
  {
    title: "Synced Transactions",
    description: "All your income and expenses in one place",
    imageSrc: "/images/miniflowCards.svg",
    imageAlt: "Feature 1 Image",
  },
  {
    title: "Cash Overview",
    description: "See how your money moves with simple, clear charts.",
    imageSrc: "/images/analysisGraph.svg",
    imageAlt: "Feature 2 Image",
  },
  {
    title: "All In One",
    description:
      "Link all your wallets and accounts to track everything in one app.",
    imageSrc: "/images/wallet mobile page ui.svg",
    imageAlt: "Feature 3 Image",
  },
];

const Features = () => {
  return (
    <section id="features" className="scroll-mt-24 md:scroll-mt-28 flex flex-col gap-16">
      {/* Heading Content */}
      <SectionHeadingTitle
        title="Take Control of Your Finances"
        description="Your all-in-one personal finance tracker built to simplify your money life — effortlessly log expenses, stay on top of income, and visualize your financial health in real time."
      />

      <div className="flex sm:flex-row   justify-center gap-6 flex-wrap">
        {/* Features Grid */}
        {/* Card 1 */}
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index} // always add a unique key when mapping
            title={feature.title}
            description={feature.description}
          >
            <Image
              src={feature.imageSrc}
              alt={feature.imageAlt}
              width={310}
              height={238}
              quality={100}
            />
          </FeatureCard>
        ))}
      </div>
    </section>
  );
};

export default Features;
