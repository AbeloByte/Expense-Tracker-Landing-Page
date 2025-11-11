"use client";
import React, { useRef } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowRightCircleFill } from "react-icons/bs";

import { BsArrowLeftCircleFill } from "react-icons/bs";

const testimonialData = [
  {
    image: "/User Profile/user1Profile.svg",
    description:
      "“This app completely changed how I manage my money. I can finally see where my expenses go, and the insights help me plan better every month. Simple, fast, and genuinely life-improving!”",
    fullname: "Sarah Mulu",
    position: "Freelancer & Small Business Owner",
    furtherClass: "",
  },
  {
    image: "/User Profile/user2Profile.svg",
    description:
      "“As a student, budgeting used to be overwhelming. This app makes it so easy to track every birr I spend. It’s like having a personal finance coach in my pocket!”",
    fullname: "Lidya Tadesse",
    position: "University Student",
    furtherClass: "border-primary bg-primary/10",
  },
  {
    image: "/User Profile/user3Profile.svg",
    description:
      "“We use it to track team expenses and manage monthly reports. The multi-platform access and real-time syncing save us hours every week. Highly recommended for any growing team!”",
    fullname: "Yonas Bekele",
    position: "Finance Manager at TechNova PLC",
    furtherClass: "",
  },
  {
    image: "/User Profile/user4Profile.svg",
    description:
      "“Finally, an app that speaks my language! Clean interface, no clutter, and I always know where my money goes. It’s made budgeting feel empowering, not stressful.”",
    fullname: "Buzayew Girma",
    position: "Retired Teacher",
    furtherClass: "",
  },
  {
    image: "/User Profile/user3Profile.svg",
    description:
      "“We use it to track team expenses and manage monthly reports. The multi-platform access and real-time syncing save us hours every week. Highly recommended for any growing team!”",
    fullname: "Yonas Bekele",
    position: "Finance Manager at TechNova PLC",
    furtherClass: "",
  },
  {
    image: "/User Profile/user4Profile.svg",
    description:
      "“Finally, an app that speaks my language! Clean interface, no clutter, and I always know where my money goes. It’s made budgeting feel empowering, not stressful.”",
    fullname: "Buzayew Girma",
    position: "Retired Teacher",
    furtherClass: "",
  },
  {
    image: "/User Profile/user3Profile.svg",
    description:
      "“We use it to track team expenses and manage monthly reports. The multi-platform access and real-time syncing save us hours every week. Highly recommended for any growing team!”",
    fullname: "Yonas Bekele",
    position: "Finance Manager at TechNova PLC",
    furtherClass: "",
  },
  {
    image: "/User Profile/user4Profile.svg",
    description:
      "“Finally, an app that speaks my language! Clean interface, no clutter, and I always know where my money goes. It’s made budgeting feel empowering, not stressful.”",
    fullname: "Buzayew Girma",
    position: "Retired Teacher",
    furtherClass: "",
  },
  {
    image: "/User Profile/user3Profile.svg",
    description:
      "“We use it to track team expenses and manage monthly reports. The multi-platform access and real-time syncing save us hours every week. Highly recommended for any growing team!”",
    fullname: "Yonas Bekele",
    position: "Finance Manager at TechNova PLC",
    furtherClass: "",
  },
  {
    image: "/User Profile/user4Profile.svg",
    description:
      "“Finally, an app that speaks my language! Clean interface, no clutter, and I always know where my money goes. It’s made budgeting feel empowering, not stressful.”",
    fullname: "Buzayew Girma",
    position: "Retired Teacher",
    furtherClass: "",
  },
  {
    image: "/User Profile/user3Profile.svg",
    description:
      "“We use it to track team expenses and manage monthly reports. The multi-platform access and real-time syncing save us hours every week. Highly recommended for any growing team!”",
    fullname: "Yonas Bekele",
    position: "Finance Manager at TechNova PLC",
    furtherClass: "",
  },
  {
    image: "/User Profile/user4Profile.svg",
    description:
      "“Finally, an app that speaks my language! Clean interface, no clutter, and I always know where my money goes. It’s made budgeting feel empowering, not stressful.”",
    fullname: "Buzayew Girma",
    position: "Retired Teacher",
    furtherClass: "",
  },
];

const Testimonial = ({}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="mt-16">
      <div className="md:mb-32 mb-16 flex flex-col gap-16  min-w-[400px] container ">
        <div className="md:max-w-[807px] ">
          <div>
            {" "}
            {/* Heading Content */}
            <p className="text-xs mb-2">TESTIMONIALS</p>
            <div className="flex flex-col md:flex-row gap-10 justify-between">
              <div>
                <h2 className="font-bold text-5xl">
                  Don’t Take Our Word For It! <br />
                  Hear It From Our Customers.
                </h2>
              </div>

              <div className="flex flex-row justify-center gap-1 py-1   border border-black/10 rounded-4xl w-[90px] ">
                <button className="hover:cursor-pointer custom-prev">
                  {" "}
                  <BsArrowLeftCircleFill
                    size={40}
                    color="#454746"
                    className="text-black"
                  />
                </button>
                <button className="hover:cursor-pointer ring-offset-black custom-next">
                  {" "}
                  <BsArrowRightCircleFill size={40} color="#34BC68" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="">
            <Swiper
              modules={[Pagination, Navigation]}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1} // Default: mobile view shows 1 card
              breakpoints={{
                640: { slidesPerView: 1.3 }, // small screens (≥640px)
                768: { slidesPerView: 2 }, // tablets (≥768px)
                1024: { slidesPerView: 3 }, // desktops (≥1024px)
              }}
              className="mySwiper"
              style={
                { "--swiper-theme-color": "#10B981" } as React.CSSProperties
              }
            >
              {testimonialData.map((t, index) => (
                <SwiperSlide
                  key={index}
                  className="h-full flex w-[350px] sm:w-[380px]"
                >
                  <TestimonialCard
                    image={t.image}
                    description={t.description}
                    fullname={t.fullname}
                    position={t.position}
                    furtherClass={t.furtherClass}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
