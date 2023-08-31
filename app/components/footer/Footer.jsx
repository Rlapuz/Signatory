import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-10 font-medium flex items-center justify-center gap-10 p-5">
      <div>
        <p>@2023 Raymund All rights reserved.</p>
      </div>
      {/* icon */}
      <div className="flex items-center gap-3">
        <Link href="https://www.facebook.com/raymund.lapuz.p">
          <BsFacebook />
        </Link>
        <Link href="https://github.com/Rlapuz">
          <BsGithub />
        </Link>
        <Link href="https://www.instagram.com/lapuzraymund/">
          <BsInstagram />
        </Link>
        <Link href="https://www.twitter.com/">
          <BsTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
