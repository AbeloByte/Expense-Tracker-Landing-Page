import Image from "next/image";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="mx-auto w-[920px] h-[72px] bg-white rounded-full border-[#DEE5ED] border flex items-center justify-between  pl-[20px] pr-[14px] mt-8">
      <div className="flex gap-2 items-center justify-center">
        <Image src="/images/Logo.png" alt="Logo" width={38} height={38} />
        <span className="font-semibold text-[20px]">Expense Scout</span>
      </div>
      <div className="font-(family-name:--font-inter) flex gap-5 items-center justify-center font-medium text-foreground-secondary ">
        <p>Features</p>
        <p>Testimonials</p>
      </div>
      <div>
        <Button className="" variant="default" size="lg">
          Get the App
        </Button>
      </div>
    </div>
  );
};

export default Header;
