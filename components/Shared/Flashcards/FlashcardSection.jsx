import Flashcard from "./Flashcard";

const FlashcardSection = ({ arr, color, isDisabled }) => {
  return (
    <section className="flashcard-section">
      <h2>Flashcards</h2>
      <Flashcard arr={arr} color={color} disabled={isDisabled} />
    </section>
  );
};

export default FlashcardSection;
