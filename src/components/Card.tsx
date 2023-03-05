import { SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Card = (props: any) => {
  return <SwiperSlide className="border rounded-2xl overflow-hidden">
        <LazyLoadImage width={200} src={props.pictureLink}/>
  </SwiperSlide>;
};

export default Card;
