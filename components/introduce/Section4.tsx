import styled from "styled-components";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "../Section";
import Title from "../Title";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Section4 = () => {
  return (
    <S4>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        <Title>AISM 갤러리</Title>
      </div>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        <Swiper
          className="swiper"
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
        >
          <SwiperSlide>
            <img src="/static/image/introduce/1.png" />
            <p>물리 치료 교육 현장</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/static/image/introduce/2.png" />
            <p>제임스 킬 짐 트로피</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/static/image/introduce/3.png" />
            <p>실제 물리 치료 현장</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/static/image/introduce/4.png" />
            <p>제임스 킬 짐 트로피</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/static/image/introduce/5.png" />
            <p>물리 치료 교육 현장</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/static/image/introduce/6.png" />
            <p>제임스 킬 짐 트로피</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/static/image/introduce/7.png" />
            <p>물리 치료 교육 현장</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/static/image/introduce/8.png" />
            <p>제임스 킬 짐 트로피</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </S4>
  );
};

export default Section4;

const S4 = styled(Section)`
  flex-direction: column;

  .swiper {
    width: 100%;
  }

  img {
    border-radius: 10px;
  }

  p {
    position: absolute;
    bottom: 0.3rem;
    right: 1rem;
    font-family: "Nanum Square R";
    font-size: 0.8rem;
    color: #fff;
  }
`;
