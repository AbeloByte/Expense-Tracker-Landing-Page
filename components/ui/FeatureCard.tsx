interface FeatureCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

import HeadingTitle from "../layout/CardHeadingTitle";
const FeatureCard = ({ title, description, children }: FeatureCardProps) => {
  return (
    <div className="max-w-[388px] rounded-[44px] border pt-8 px-10 bg-[#F8FAFC] border-[#DFECE7] ">
      <div className="flex flex-col gap-6 ">
        <HeadingTitle title={title} description={description} />
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
