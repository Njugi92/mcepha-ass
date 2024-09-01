import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: "./realestate.jpg",
      name: "Fabulex Investments Ltd",
      review:
        " Choosing to work with Mcepha & Associates on Filling tax our company....",
    },
    {
      img: "./audit-img.jpg",
      name: "Reward Computers Systems Ltd",
      review:
        " Choosing to work with Mcepha & Associates on Filling tax our company....",
    },
    {
      img: "./drycleaner.jpg",
      name: "Pioneer Dry Cleaners Ltd",
      review:
        " Choosing to work with Mcepha & Associates on Filling tax our company....",
    },
    {
      img: "./tax.jpg",
      name: "Gichuke Ribathi Advocates",
      review:
        " Choosing to work with Mcepha & Associates on Filling tax our company....",
    },
    {
      img: "./hospital.jpg",
      name: "Central Memorial Hospital",
      review:
        " Choosing to work with Mcepha & Associates on Filling tax our company....",
    },
  ];
  return (
    <div className="t-wrapper contain" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Services</span>
        <span>from Us...</span>
        <div
          className="blur t-blur1"
          style={{ background: "rgb(238 210 255)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <h3>{client.name}</h3>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
