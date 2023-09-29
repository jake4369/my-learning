const Flashcard = ({ letter, color }) => {
  let audio = new Audio(`/assets/sounds/${letter}.mp3`);
  const playAudio = () => {
    audio.play();
  };

  return (
    <div
      className="flashcard"
      style={{
        borderColor: color,
      }}
    >
      <span className="flashcard__letter" style={{ color }}>
        {letter}
      </span>

      <button
        onClick={() => playAudio()}
        className="audio-btn"
        style={{
          backgroundColor: color,
        }}
      >
        Play Sound
      </button>
    </div>
  );
};

export default Flashcard;
