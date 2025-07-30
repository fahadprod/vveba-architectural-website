import Image from "next/image";

export default function HeroHeader() {
  return (
    <section className="landing">
      <div className="landing-img">
        <Image 
          src="/images/landing-bg.jpg" 
          alt="Dream House"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="banner">
        <h1 className="banner-heading"><span>DREAM</span> HOUSE</h1>
        <div className="banner-content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, eveniet culpa numquam </p>
          <button>READ MORE</button>
        </div>
      </div>
    </section>
  );
}