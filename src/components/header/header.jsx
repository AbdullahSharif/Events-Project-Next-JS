import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <Image src="" alt="" className="logo" />
      <Link href="/" passHref>
        Home
      </Link>
      <Link href="/about-us" passHref>
        About US
      </Link>
      <Link href="/events/" passHref>
        Events
      </Link>
    </header>
  );
};

export default Header;
