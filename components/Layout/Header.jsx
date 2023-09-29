import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="My Learning logo"
          width={70}
          height={110}
          className="logo"
        />
      </Link>
    </header>
  );
};

export default Header;
