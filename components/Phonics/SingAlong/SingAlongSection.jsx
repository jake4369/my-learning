import SingAlong from "./SingAlong";

const SingAlongSection = ({ img, song, arr, color }) => {
  return (
    <section className="sing-along-section">
      <h2>Sing Along With Me</h2>

      <SingAlong song={song} arr={arr} img={img} color={color} />
    </section>
  );
};

export default SingAlongSection;
