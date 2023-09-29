import Link from "next/link";

const SubjectLink = ({ subject, children }) => {
  return (
    <Link href={`/${subject}`} className="subject-link">
      {children}
    </Link>
  );
};

export default SubjectLink;
