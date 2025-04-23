export const NavItems: object[] = [
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
    icon: true,
  },
  { name: "Contact", link: "/contact" },
];
