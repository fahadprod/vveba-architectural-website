'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';

const heroSlides = [
  {
    id: 1,
    title: "DREAM HOUSE",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, eveniet culpa numquam",
    image: "/images/landing-bg.jpg",
    buttonText: "READ MORE"
  },
  {
    id: 2,
    title: "MODERN DESIGN",
    description: "Experience contemporary architecture with clean lines and open spaces",
    image: "/images/card1.jpg",
    buttonText: "VIEW PROJECTS"
  },
  {
    id: 3,
    title: "LUXURY LIVING",
    description: "Premium materials and craftsmanship for your dream home",
    image: "/images/card2.jpg",
    buttonText: "EXPLORE"
  },
  {
    id: 4,
    title: "SUSTAINABLE HOMES",
    description: "Eco-friendly designs that reduce environmental impact",
    image: "/images/card3.jpg",
    buttonText: "LEARN MORE"
  }
];

export default function HeroHeader() {
  return (
    <section className="landing">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="landing-img">
              <Image 
                src={slide.image} 
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="banner">
              <h1 className="banner-heading"><span>{slide.title.split(' ')[0]}</span> {slide.title.split(' ').slice(1).join(' ')}</h1>
              <div className="banner-content">
                <p>{slide.description}</p>
                <button>{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}