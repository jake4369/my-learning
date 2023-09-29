"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

import letterData from "./../../../../../data/letters.json";

import Flashcard from "@components/Phonics/Flashcards/Flashcard";

const page = () => {
  const { letter } = useParams();

  // FLASHCARD

  return (
    <div className="letter-page">
      <h1
        className="letter-page__letter"
        style={{
          backgroundColor: letterData[0][letter].color,
        }}
      >
        {letter}
      </h1>

      <section className="story-section">
        <h2>Story Time</h2>

        <Image
          src={letterData[0][letter].storyImgUrl}
          alt=""
          width={100}
          height={100}
          className="story-img"
          priority={true}
        />

        <p>{letterData[0][letter].story}</p>
      </section>

      <Flashcard letter={letter} color={letterData[0][letter].color} />
    </div>
  );
};

export default page;
