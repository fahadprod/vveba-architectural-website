import Image from "next/image";

export default function About() {
  return (
    <section className="about">
      <div className="about-left">
        <h1>WE ARE CREATIVE BUILDING - DESIGN COMPANY</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat et similique facere expedita voluptates, fuga accusamus quasi hic recusandae.</p>
        <button>READ MORE</button>
      </div>
      <div className="about-right">
        <div className="frame"></div>
        <div className="about-img-wrapper">
         <Image
            src="/images/about.jpg" 
            alt="Creative Building Design"
            width={600} 
            height={400}
            layout="responsive"
          />
        </div>
      </div>
      <div className="experience section-bottom">
        <h1>20 YEARS</h1>
        <h3>EXPERIENCE WORKING</h3>
      </div>
    </section>
  );
}