import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface TestimonialCardProps {
  image?: string;
  description?: string;
  fullname?: string;
  position?: string;
  furtherClass?: string;
}
const TestimonialCard = ({
  image,
  description,
  fullname,
  position,
  furtherClass,
}: TestimonialCardProps) => {
  return (
    <div
      className={`px-6 rounded-[44px] border bg-[#F8FAFC] border-[#DFECE7] py-6 md:h-[420px] flex flex-col justify-between ${furtherClass}`}
    >
      <div className="flex flex-col gap-4">
        <Avatar className="w-32 h-32">
          <AvatarImage src={image} alt={fullname} />
          <AvatarFallback>{fullname?.charAt(0)}</AvatarFallback>
        </Avatar>

        <p className="text-black text-lg font-medium">{description}</p>
      </div>

      <div className="mt-4">
        <p className="script-font text-3xl">{fullname}</p>
        <p className="text-foreground-muted text-sm">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
