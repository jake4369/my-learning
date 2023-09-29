"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

import letterData from "./../../../../../data/letters.json";

import Flashcard from "@components/Phonics/Flashcards/Flashcard";

import TracingComponent from "@components/TracingComponent";

const page = () => {
  const { letter } = useParams();

  const color = letterData[0][letter].color;

  return (
    <div className="letter-page">
      <h1
        className="letter-page__letter"
        style={{
          backgroundColor: color,
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

      <Flashcard letter={letter} color={color} />

      <TracingComponent
        letter={letter}
        width={400}
        height={400}
        color={color}
      />
    </div>
  );
};

export default page;
