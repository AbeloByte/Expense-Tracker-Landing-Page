interface TrustCardProps {
  headingTitle: string;
  trustDescription: string;
  image: string;
  furtherClass: string;
}
import Image from "next/image";

const TrustCard = ({
  image,
  headingTitle,
  trustDescription,
  furtherClass,
}: TrustCardProps) => {
  return (
    <div className="md:w-[563px] flex flex-col gap-5 ">
      <div className="flex flex-col justify-between  items-center lg:items-start">
        <Image src={image} width={56} height={56} alt="" />
      </div>
      <div className="flex flex-col text-center gap-2 sm:text-left">
        <p className="text-2xl font-bold ">{headingTitle}</p>
        <p className={`text-lg  text-foreground-muted ${furtherClass}`}>
          {trustDescription}
        </p>
      </div>
    </div>
  );
};

export default TrustCard;
