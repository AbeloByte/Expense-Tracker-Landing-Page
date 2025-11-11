import React from "react";
import HeadingTitle from "../layout/CardHeadingTitle";
import SectionHeadingTitle from "../layout/SectionHeadingTitle";
import Image from "next/image";
import CardHeadingTitle from "../layout/CardHeadingTitle";
const SpendWise = () => {
  return (
    <div className="flex flex-col gap-16">
      <SectionHeadingTitle
        title="Save Smart. Spend Wise."
        description="Your finances, your way — track every expense, build better budgets, and hit your savings goals. With smart tools and simple visuals, managing money has never felt this easy or this rewarding."
      />

      <div className="flex flex-col gap-8">
        {/* Wide Bento */}
        <div className="flex flex-col md:flex-row rounded-[44px] border gap-17  bg-[#F8FAFC] border-[#DFECE7] px-10.5 py-10.5 ">
          <div className="flex flex-row md:flex-col justify-between gap-5 ">
            <Image
              src="/Icons/ClippathgroupIcon.svg"
              width={56}
              height={56}
              alt=""
            />

            <CardHeadingTitle
              title="Analysis Through Category"
              description="See where your money goes by category."
            />
          </div>
          <div>
            <div className="lg:flex gap-12">
              <Image
                src="/images/mobile chart ui.svg"
                alt="Description of image"
                className="w-full  relative top-11  sm:w-52 md:w-64 lg:w-80 h-auto"
                width={309}
                height={317}
              />

              <Image
                src="/images/mobile list of spends.svg"
                alt="Description of image"
                className="w-full h-auto relative -top-11 hidden lg:block"
                width={309}
                height={360}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center md:flex-row gap-8">
          {/* smaller Bento  1*/}
          <div className="w-[593px] flex justify-center md:justify-baseline rounded-[44px] border gap-17  bg-[#F8FAFC] border-[#DFECE7] px-10.5 py-10.5 ">
            <div className="flex gap-11 flex-col lg:flex-row  ">
              {" "}
              <div className="flex md:flex-col md:justify-between  gap-5">
                <Image
                  src="/Icons/SoketIcon.svg"
                  width={56}
                  height={56}
                  alt=""
                />
                <CardHeadingTitle
                  title="Bank/Wallet Connect"
                  description="Link wallets and accounts easily."
                />
              </div>
              <Image
                src="/images/CryptoExchange.svg"
                alt="Description of image"
                className="w-full h-auto relative top-10.5"
                width={309}
                height={317}
              
              />
            </div>
          </div>

          {/* smaller Bento 2*/}
          <div className="w-[593px] flex flex-col md:flex-row rounded-[44px] border gap-17  bg-[#F8FAFC] border-[#DFECE7] px-10.5 py-10.5 ">
            {" "}
            <div className="flex md:flex-col md:justify-between  gap-5">
              <Image
                src="/Icons/money path.svg"
                width={56}
                height={56}
                alt=""
              />

              <CardHeadingTitle
                title="Saving Plans"
                description="Set goals and watch your savings grow."
              />
            </div>
            <Image
              src="/images/Flight Ticket Cards.svg"
              alt="Description of image"
              className=""
              width={360}
              height={173}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:flex-row gap-8">
          {/* smaller Bento 3*/}
          <div className="w-[593px] flex rounded-[44px] border gap-17  bg-[#F8FAFC] border-[#DFECE7] px-10.5 py-10.5 ">
            <div className="flex gap-11">
              {" "}
              <Image
                src="/images/Budget plan ui.svg"
                alt="Description of image"
                className="w-full h-auto relative top-10.5"
                width={310}
                height={317}
              />
              <div className="flex flex-col justify-between ">
                <Image
                  src="/Icons/book icon.svg"
                  width={56}
                  height={56}
                  alt=""
                />

                <CardHeadingTitle
                  title="Budget Plans"
                  description="Create budgets that fit your life."
                  className="w-40 "
                />
              </div>
            </div>
          </div>
          {/* smaller Bento 4*/}
          <div className="w-[593px] flex rounded-[44px] border gap-17  bg-[#F8FAFC] border-[#DFECE7] px-10.5 py-10.5 ">
            <div className="">
              {" "}
              <div className="flex flex-row   gap-23.5">
                <div className="flex flex-col justify-between  ">
                  <Image
                    src="/Icons/security Icon.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <Image
                  src="/images/finger print.svg"
                  alt="Description of image"
                  className="relative -top-11"
                  width={360}
                  height={173}
                />
              </div>
              <CardHeadingTitle
                title="Security"
                description="Your data stays safe and private.."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendWise;
