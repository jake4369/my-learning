import Link from "next/link";

const LetterBtn = ({ set, letter, index }) => {
  const colorMap = {
    0: "#CDB4DB",
    1: "#FFC8DD",
    2: "#FFAFCC",
    3: "#BDE0FE",
    4: "#A2D2FF",
  };

  const styles = {
    backgroundColor: colorMap[index],
  };

  return (
    <Link
      href={`/English/Phonics/set-${set}/${letter}`}
      className="letter-btn"
      style={styles}
    >
      {letter}
    </Link>
  );
};

export default LetterBtn;
