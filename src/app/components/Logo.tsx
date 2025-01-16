import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/images/heart_beating.png" alt="logo" width={32} height={32} className=""/>
          <span className="hidden lg:block text-black">Cebu Hospital</span>
        </Link>
    );
}

export default Logo;