import Image from "next/image";

import SubjectLinkContainer from "@components/Shared/SubjectLinks/SubjectLinkContainer";
import SubjectLink from "@components/Shared/SubjectLinks/SubjectLink";

const EnglishSubjects = () => {
  return (
    <div className="english-subjects__homepage">
      <h1>Welcome To Your English Class</h1>

      <h2>What would you like to study today?</h2>

      <SubjectLinkContainer>
        <SubjectLink subject="English/Phonics">
          <Image
            src="/assets/images/english/phonics/phonics.png"
            alt=""
            width={200}
            height={100}
            className="subject-img subject-img__phonics"
            priority={true}
          />
        </SubjectLink>
      </SubjectLinkContainer>
    </div>
  );
};

export default EnglishSubjects;
