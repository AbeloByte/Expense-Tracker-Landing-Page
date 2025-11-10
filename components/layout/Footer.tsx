import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoGoogleplus } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="md:flex gap-50 md:mt-40 space-y-16">
          <div className="md:flex md:flex-col md:gap-8">
            <h2 className="text-2xl">Links</h2>
            <div className="grid grid-cols-2 md:gap-x-2 md:gap-y-2 md:max-w-[210px]">
              <span>Features</span>
              <span>Terms</span>
              <span>Testimonials</span>
              <span>Privacy</span>
            </div>
          </div>

          <div className="grid  place-content-center">
            <div>
              <div className="flex flex-col items-center gap-4 mb-4">
                <Image
                  src="/Icons/Logomark.svg"
                  alt="Expense Scout Logo"
                  width={64}
                  height={64}
                />
                <h2 className="text-center">Expense Scout</h2>
              </div>
              <p className="text-center w-[300px]">
                <span className="font-bold">Expense Scout</span> is a company
                based in Addis Ababa, Ethiopia. 
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Social Networks</h2>
            <div className="grid grid-cols-3 md:gap-x-4 md:gap-y-6 mt-4 max-w-40 md:mt-8">
              <div>
                <RiInstagramFill size={20} />
              </div>
              <div>
                <IoLogoWhatsapp size={20} />
              </div>
              <div>
                <IoLogoGoogleplus size={20} />
              </div>
              <div>
                <SiLinkedin size={20} />
              </div>
              <div>
                <FaFacebook size={20} />
              </div>
              <span>
                <BsTwitterX size={20} />
              </span>
            </div>
          </div>
        </div>
        <div className="text-center my-6">
          <span className="font-semibold">©Out-Source</span>, All rights
          reserved 2025
        </div>
      </div>
    </>
  );
};

export default Footer;
