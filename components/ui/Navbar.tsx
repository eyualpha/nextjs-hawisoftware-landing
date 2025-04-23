import Logo from "../Logo";

const Navbar = () => {
  const NavItems: any = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
      link: "/services",
      list: [
        { name: "Web Development", link: "/services/web-development" },
        { name: "Mobile Development", link: "/services/mobile-development" },
        { name: "UI/UX Design", link: "/services/ui-ux-design" },
        { name: "Digital Marketing", link: "/services/digital-marketing" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="w-full flex justify-between items-center  h-[80px]  ">
      <div className="max-w-[1440px] flex flex-col  mx-auto w-full p-4 ">
        <div className="flex items-start py-2 gap-4 border-b border-b-gray-400">
          Need Help ? Talk to an Expert
          <span className="hover:text-red-500 duration-300 text-black">
            +251987654321
          </span>
        </div>

        <div className="">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
