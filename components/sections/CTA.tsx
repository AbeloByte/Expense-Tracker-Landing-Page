import Image from "next/image";
import { MdDownloadForOffline } from "react-icons/md";
import { FaApple } from "react-icons/fa";
const CTA = () => {
  return (
    <div className="hero-container  bg-[url(/images/BottomSectionDotsBk.png)] bg-center bg-no-repeat inset-ring-2 inset-ring-white rounded-b-[50px]    bg-[#8C96A9]/4  shadow-[0_0_6px_#ffffff99,0_22px_30px_#8C96A91A,0_7px_6px_#8C96A91A] ">
      <div className="hero-shadow-bg">
        <div className="container md:flex">
          <div className="md:flex md:flex-col gap-21">
            <div className="mt-20">Ready to make every birr count?</div>
            <div>
              <div className="md:flex gap-7 items-center">
                <h1 className="text-6xl font-bold">Download</h1>
                <MdDownloadForOffline size={50} />
              </div>
              <h1 className="text-6xl font-bold">Mobile App</h1>
            </div>
            <div className="">
              <div className="md:flex gap-2">
                <div className="flex items-center justify-center gap-3 bg-foreground border-4 p-4 py-1 border-white rounded-[40px] pl-6  max-w-[220px] ">
                  <FaApple color="white" size={23} />
                  <div className="flex flex-col leading-none">
                    <p className="text-[10px] text-gray-300">Download on the</p>
                    <h3 className="text-white text-sm font-semibold">
                      App Store
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-foreground border-4 border-white rounded-[40px] pl-6  p-4 py-1 max-w-[220px] ">
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
              <div className="mt-3">
                Download and watch your spending get smarter.
              </div>
            </div>
          </div>

          <div className=" md:flex  md:gap-20 ">
            <div className="">
              <Image
                src="/images/mobile in hand.svg"
                alt="Download App"
                width={848}
                height={592}
                className="relative  -right-30 rounded-[50px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
