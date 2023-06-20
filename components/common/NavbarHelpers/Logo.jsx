import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="logo h-[56px] w-[164px] relative">
      <Image src="/images/logo/logo.svg" alt="arrivo" fill />
    </Link>
  );
};

export default Logo;
