export const NavItems: object[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Services",
    link: "/services",
    list: [
      {
        name: "Custom Software Development",
        link: "/services/web-development",
      },
      { name: "Software Consultancy", link: "/services/mobile-development" },
      { name: "UI/UX Design", link: "/services/ui-ux-design" },
      {
        name: "Testing and Quality Assurance ",
        link: "/services/digital-marketing",
      },
    ],
    icon: true,
  },
  { name: "Contact", link: "/contact" },
];

export const heroStatics: Object[] = [
  {
    title: "$100k+",
    description: "Our clients earned with us",
  },
  {
    title: "9+ years",
    description: "Of industry experience",
  },
  {
    title: "100+",
    description: "Technical questions answered",
  },
];
