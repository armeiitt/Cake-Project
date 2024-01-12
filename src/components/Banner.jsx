import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Banner() {
  useEffect(() => {
    const swiperScript = document.createElement("script");
    swiperScript.src = "../public/js/swiper.js";
    swiperScript.defer = true;
    document.body.appendChild(swiperScript);
    return () => {
    
      document.body.removeChild(swiperScript);
    };
  }, []);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <div>
          <img
            src="https://skins.minimog.co/cdn/shop/files/cake_slide_1.jpg"
            alt="Slide 1"
          />
          <div>
            <div>
              <h4>
                Little bliss in
                <br />
                Every bite
              </h4>
              <p>
                Special fluffiness for your loved one! A thoughtful expression
                through good food and warm experiences.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-slide">
          <img
            src="https://skins.minimog.co/cdn/shop/files/cake_slide_2.jpg"
            alt="Slide 2"
          />
          <div className="swiper-slide-transform">
            <div>
              <h4>
                Little bliss in
                <br />
                Every bite
              </h4>
              <p>
                Special fluffiness for your loved one! A thoughtful expression
                through good food and warm experiences.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <img
            src="https://skins.minimog.co/cdn/shop/files/cake_slide_3.jpg"
            alt="Slide 3"
          />
          <div className="swiper-slide-transform">
            <div>
              <h4>
                Little bliss in
                <br />
                Every bite
              </h4>
              <p>
                Special fluffiness for your loved one! A thoughtful expression
                through good food and warm experiences.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Add more slides as needed */}
    </Swiper>
  );
}

export default Banner;
