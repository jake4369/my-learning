import Image from "next/image";

import PhonicsSetHeader from "@components/Phonics/PhonicsSetHeader";
import LetterBtnContainer from "@components/Phonics/LetterBtns/LetterBtnContainer";

const Phonics = () => {
  const sets = [1, 2, 3, 4, 5];

  const setMap = {
    1: ["s", "a", "t", "p"],
    2: ["i", "n", "m", "d"],
    3: ["g", "o", "c", "k"],
    4: ["ck", "e", "u", "r"],
    5: ["h", "b", "f, ff", "l, ll", "ss"],
  };

  return (
    <div className="phonics-homepage">
      <h1>Welcome To Your Phonics Class</h1>

      <Image
        src="/assets/images/english/phonics/hero.png"
        alt=""
        width={100}
        height={100}
        priority={true}
        className="phonics-homepage__hero-img"
      />

      <section className="phonic-sets">
        {sets.map((set) => (
          <div key={set} className="phonic-set__container">
            <PhonicsSetHeader set={`set-${set}`}>Set {set}</PhonicsSetHeader>
            <LetterBtnContainer arr={setMap[set]} set={set} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Phonics;
