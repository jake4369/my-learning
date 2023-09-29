import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__heading-container">
        <h1>Hello Michaela</h1>

        <Image
          src={"/assets/images/homepage/girl-waving.png"}
          alt="girl-waving"
          width={50}
          height={50}
          className="img__waving"
        />
      </div>

      <p>Welcome to your very own learning website made by daddy!</p>
    </section>
  );
};

export default Hero;
