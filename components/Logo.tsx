import Image from "next/image";
import logo from "../assets/images/logo.png";
const Logo = () => {
  return (
    <Image
      src={logo}
      alt="https://www.hawisoftware.com/"
      className="flex w-30 items-centerjustify-center"
    />
  );
};

export default Logo;
