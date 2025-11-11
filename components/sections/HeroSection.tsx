import Header from "../layout/Header";
import { Button } from "../ui/button";
import { CiCircleInfo } from "react-icons/ci";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <main>
        <div className="hero-container  bg-[url(/images/herodots.png)] bg-center bg-no-repeat inset-ring-2 inset-ring-white rounded-b-[50px]    bg-[#8C96A9]/4  shadow-[0_0_6px_#ffffff99,0_22px_30px_#8C96A91A,0_7px_6px_#8C96A91A]">
          {/* Header Section */}
          <div className="flex flex-row justify-center ">
            <Header />
          </div>

          <div className="text-center mt-[70px] flex flex-col gap-8">
            {/* Hero Section Heading Texts */}
            <div className="flex flex-col gap-5">
              {/* label text */}
              <div>
                <div className="w-2xs inline-flex items-center  gap-3 bg-gray-100 border border-gray-200 rounded-full px-1.5 py-2 inset-shadow-sm ring-4 ring-white">
                  {/* Left "Beta" label */}
                  <span className="bg-primary text-white text-sm font-semibold pl-2 pr-4 py-1.5 rounded-full">
                    Beta
                  </span>

                  {/* Text and arrow */}
                  <span className="text-gray-800 font-medium text-base flex items-center gap-1">
                    Make Every Birr Count
                  </span>
                </div>
              </div>

              <div className="">
                <h1 className="md:text-6xl text-5xl font-semibold  px-25 text-center leading-[1.2] ">
                  Master Every Penny. Simplify Your Spending.
                </h1>
              </div>
              <div className="">
                <p className="mx-auto text-center max-w-[639px] text-lg">
                  Track every birr, budget smarter, and reach your goals—whether
                  you’re at home, at work, or on the move.
                </p>
              </div>
            </div>

            {/* Hero Section Button */}
            <div className="flex flex-col gap-4 mb-16">
              <div>
                <Button variant="default" size="lg">
                  Download App!
                </Button>
              </div>

              <div className="">
                <span>
                  <CiCircleInfo className="inline-block mr-1" />A Free Plan is
                  Available full access
                </span>
              </div>
            </div>
          </div>

          {/* Hero Section Image */}
          <div className="hero-shadow-bg">
            <Image
              src="/images/HeroSectionMobileImage.svg"
              alt="Hero Section Image"
              width={1440}
              height={497}
              quality={100}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
