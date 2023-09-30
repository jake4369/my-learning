"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

import data from "./../../../../../data/letters.json";

import Soundcard from "@components/Phonics/Soundcard/Soundcard";
import TracingComponent from "@components/Phonics/TracingComponent";
import SoundingSection from "@components/Phonics/Sounding/SoundingSection";
import FlashcardSection from "@components/Shared/Flashcards/FlashcardSection";
import SingAlongSection from "@components/Phonics/SingAlong/SingAlongSection";

const page = () => {
  const { letter } = useParams();

  const letterData = data[0][letter];

  return (
    <div className="letter-page">
      <h1
        className="letter-page__letter"
        style={{
          backgroundColor: letterData.color,
        }}
      >
        {letter}
      </h1>

      <section className="story-section">
        <h2>Story Time</h2>

        <Image
          src={letterData.storyImgUrl}
          alt=""
          width={100}
          height={100}
          className="story-img"
          priority={true}
        />

        <p>{letterData.story}</p>
      </section>

      <Soundcard letter={letter} color={letterData.color} />

      <TracingComponent
        letter={letter}
        width={400}
        height={400}
        color={letterData.color}
      />

      <SoundingSection letter={letter} arr={letterData.soundingImages} />

      <FlashcardSection
        arr={letterData.flashcardWords}
        color={letterData.color}
      />

      <SingAlongSection
        img={letterData.songImg}
        song={letterData.song}
        arr={letterData.songLyrics}
        color={letterData.color}
      />
    </div>
  );
};

export default page;
