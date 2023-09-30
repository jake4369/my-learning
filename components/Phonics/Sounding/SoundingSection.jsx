import Image from "next/image";

const SoundingSection = ({ letter, arr }) => {
  const images = arr.map((img) => (
    <Image key={img} src={img} alt="" width={100} height={100} />
  ));

  return (
    <section className="sounding-section">
      <h2>Sounding</h2>

      <p>
        Which of these words does <strong>NOT</strong> contain the {letter}{" "}
        sound
      </p>

      <div className="sounding-section__images">{images}</div>
    </section>
  );
};

export default SoundingSection;
