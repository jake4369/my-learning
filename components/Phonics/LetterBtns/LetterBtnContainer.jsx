import LetterBtn from "./LetterBtn";

const LetterBtnContainer = ({ arr, set }) => {
  return (
    <section className="letter-btns__container">
      {arr.map((letter, index) => (
        <LetterBtn key={letter} letter={letter} index={index} set={set} />
      ))}
    </section>
  );
};

export default LetterBtnContainer;
