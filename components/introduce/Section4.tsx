import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";

import Section from "../Section";
import Title from "../Title";

const Section4 = () => {
  return (
    <S4>
      <Title>AISM 갤러리</Title>
      <Swiper
        className="swiper"
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide>
          <GalleryImage>
            <img src="/static/image/introduce/1.png" />
            <p>물리 치료 교육 현장</p>
          </GalleryImage>
        </SwiperSlide>
        <SwiperSlide>
          <GalleryImage>
            <img src="/static/image/introduce/2.png" />
            <p>제임스 킬 짐 트로피</p>
          </GalleryImage>
        </SwiperSlide>
        <SwiperSlide>
          <GalleryImage>
            <img src="/static/image/introduce/3.png" />
            <p>실제 물리 치료 현장</p>
          </GalleryImage>
        </SwiperSlide>
        <SwiperSlide>
          <GalleryImage>
            <img src="/static/image/introduce/4.png" />
            <p>제임스 킬 짐 트로피</p>
          </GalleryImage>
        </SwiperSlide>
        <SwiperSlide>
          <GalleryImage>
            <img src="/static/image/introduce/5.png" />
            <p>물리 치료 교육 현장</p>
          </GalleryImage>
        </SwiperSlide>
        <SwiperSlide>
          <GalleryImage>
            <img src="/static/image/introduce/6.png" />
            <p>제임스 킬 짐 트로피</p>
          </GalleryImage>
        </SwiperSlide>
        <SwiperSlide>
          <GalleryImage>
            <img src="/static/image/introduce/7.png" />
            <p>물리 치료 교육 현장</p>
          </GalleryImage>
        </SwiperSlide>
        <SwiperSlide>
          <GalleryImage>
            <img src="/static/image/introduce/8.png" />
            <p>제임스 킬 짐 트로피</p>
          </GalleryImage>
        </SwiperSlide>
      </Swiper>
    </S4>
  );
};

export default Section4;

const S4 = styled(Section)`
  flex-direction: column;

  @media screen and (max-width: 960px) {
  }

  .swiper {
    width: 100%;
  }

  .gallery {
    display: flex;
  }
`;

const GalleryImage = styled.div`
  img {
    border-radius: 10px;
  }

  p {
    position: absolute;
    bottom: 0.3rem;
    right: 1rem;
    font-family: "Nanum Square R";
    font-size: 0.9rem;
    color: #fff;
  }
`;
