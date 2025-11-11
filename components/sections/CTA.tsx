import Image from "next/image";
import { MdDownloadForOffline } from "react-icons/md";
import { FaApple } from "react-icons/fa";

const CTA = () => {
  return (
    <div className="hero-container bottom-section-dot bg-center bg-no-repeat rounded-b-[50px] bg-[#8C96A9]/4 shadow-[0_0_6px_#ffffff99,0_22px_30px_#8C96A91A,0_7px_6px_#8C96A91A]">
      <div className="hero-shadow-bg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] xl:max-w-[1600px] flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="mt-20 text-2xl font-medium">
              Ready to make every birr count?
            </div>

            <div className="flex flex-col md:flex-col gap-2 mt-4">
              <div className="flex gap-7 items-center justify-center md:justify-start">
                <h1 className="text-6xl font-bold">Download</h1>
                <MdDownloadForOffline size={50} />
              </div>
              <h1 className="text-6xl font-bold">Mobile App</h1>
            </div>

            {/* Download Buttons */}
            <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center md:justify-start">
              <div className="flex items-center gap-3 bg-foreground border-4 border-white rounded-[40px] px-6 py-2 max-w-[220px]">
                <FaApple color="white" size={23} />
                <div className="flex flex-col leading-none">
                  <p className="text-[10px] text-gray-300">Download on the</p>
                  <h3 className="text-white text-sm font-semibold">
                    App Store
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-foreground border-4 border-white rounded-[40px] px-6 py-2 max-w-[220px]">
                <Image
                  src="/Icons/playStore.svg"
                  alt="Google Play"
                  width={23}
                  height={23}
                />
                <div className="flex flex-col leading-none">
                  <p className="text-xs text-gray-300">Get it on</p>
                  <h3 className="text-white text-sm font-semibold">
                    Google Play
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-3 text-black mb-9 text-center md:text-left">
              Download and watch your spending get smarter.
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex -mr-4 lg:-mr-6 xl:-mr-8">
            <Image
              src="/images/mobile in hand.svg"
              alt="Download App"
              width={848}
              height={592}
              className="rounded-b-[50px] w-full max-w-[848px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
