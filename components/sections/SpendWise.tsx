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

      <div className="flex flex-col gap-16">
        {/* Wide Bento */}
        <div className="flex rounded-[44px] border gap-17  bg-[#F8FAFC] border-[#DFECE7] px-10.5 py-10.5 ">
          <div className="flex flex-col justify-between  ">
            <Image
              src="/images/clip path group Icon.svg"
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
            <div className="flex gap-12">
              <Image
                src="/images/mobile chart ui.svg"
                alt="Description of image"
                className="w-full h-auto"
                width={309}
                height={317}
                style={{ objectFit: "cover", objectPosition: "bottom" }}
              />

              <Image
                src="/images/mobile list of spends.svg"
                alt="Description of image"
                className="w-full h-auto relative -top-11"
                width={309}
                height={360}
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* smaller Bento */}
          <div className="w-[593px] flex rounded-[44px] border gap-17  bg-[#F8FAFC] border-[#DFECE7] px-10.5 py-10.5 ">
            <div className="flex gap-11">
              {" "}
              <div className="flex flex-col justify-between  ">
                <Image
                  src="/images/clip path group Icon.svg"
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
                src="/images/crypto Exchange.svg"
                alt="Description of image"
                className="w-full h-auto"
                width={309}
                height={317}
                style={{ objectFit: "cover", objectPosition: "bottom" }}
              />
            </div>
          </div>
          {/* smaller Bento */}
          <div className="w-[593px] flex rounded-[44px] border gap-17  bg-[#F8FAFC] border-[#DFECE7] px-10.5 py-10.5 ">
            <div className="">
              {" "}
              <div className="flex flex-row   gap-23.5">
                <div className="flex flex-col justify-between  ">
                  <Image
                    src="/images/clip path group Icon.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <Image
                  src="/images/Flight Ticket Cards.svg"
                  alt="Description of image"
                  className=" "
                  width={360}
                  height={173}
                />
              </div>
              <CardHeadingTitle
                title="Saving Plans"
                description="Set goals and watch your savings grow."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendWise;
