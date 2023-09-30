import Image from "next/image";

import { FaPlay } from "react-icons/fa";

const SingAlong = ({ img, song, arr, color }) => {
  const lyrics = arr.map((lyric) => (
    <p key={lyric} className="song-lyric">
      {lyric}
    </p>
  ));

  const audio = new Audio(song);
  const playAudio = () => {
    audio.play();
  };

  return (
    <div
      className="song-container"
      style={{
        borderColor: color,
      }}
    >
      <Image src={img} alt="" width={50} height={50} className="song-img" />
      {lyrics}
      <button
        onClick={playAudio}
        className="play-song-btn"
        style={{
          backgroundColor: color,
        }}
      >
        <FaPlay />
      </button>
    </div>
  );
};

export default SingAlong;
