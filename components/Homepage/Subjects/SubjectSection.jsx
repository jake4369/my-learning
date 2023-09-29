import Image from "next/image";
import Link from "next/link";

import SubjectLinkContainer from "@components/Shared/SubjectLinks/SubjectLinkContainer";
import SubjectLink from "@components/Shared/SubjectLinks/SubjectLink";

const SubjectSection = () => {
  return (
    <section className="subject-section">
      <h2>Choose your subject:</h2>

      <SubjectLinkContainer>
        <SubjectLink subject="English">
          <Image
            src="/assets/images/homepage/english.jpg"
            alt=""
            width={200}
            height={100}
            className="subject-img subject-img__english"
            priority={true}
          />
        </SubjectLink>
      </SubjectLinkContainer>
    </section>
  );
};

export default SubjectSection;
