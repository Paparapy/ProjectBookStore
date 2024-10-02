import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container max-w-screen-xl px-4 pt-10 mx-auto md:px-20">
        <div>
          <h1 className="text-2xl font-semibold">Mon Projet React</h1>
          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            est!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
