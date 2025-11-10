"use client";
import SectionHeadingTitle from "../layout/SectionHeadingTitle";
import TestimonialCard from "../ui/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    furtherClass: "ring-4 ring-primary",
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
  return (
    <div>
      <div className="md:mb-32 mb-16 flex flex-col gap-16  min-w-[400px] container">
        <div className="md:max-w-[807px] ">
          <div>
            {" "}
            {/* Heading Content */}
            <div className="">
              <p className="text-xs mb-2">TESTIMONIALS</p>
              <div className="flex flex-col gap-5">
                <h2 className="font-bold text-5xl">
                  Don’t Take Our Word For It! <br />
                  Hear It From Our Customers.
                </h2>

                <div>
                  <div>Left -- Right</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-w-[400px]">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={3.5}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {testimonialData.map((t, index) => (
              <SwiperSlide key={index} className="h-full flex">
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
  );
};

export default Testimonial;
