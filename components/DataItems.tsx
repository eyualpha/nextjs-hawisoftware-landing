import { Trophy } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { BicepsFlexed } from "lucide-react";

import AnddroidIcon from "../assets/svgs/icons8-android.svg";
import BootstrapIcon from "../assets/svgs/icons8-bootstrap.svg";
import DockerIcon from "../assets/svgs/icons8-docker.svg";
import ExpressIcon from "../assets/svgs/icons8-express-js.svg";
import FlutterIcon from "../assets/svgs/icons8-flutter.svg";
import IosIcon from "../assets/svgs/icons8-ios-logo.svg";
import JQueryIcon from "../assets/svgs/icons8-jquery.svg";
import NodeJsIcon from "../assets/svgs/icons8-node-js.svg";
import ReactIcon from "../assets/svgs/icons8-react-native.svg";
import WordPressIcon from "../assets/svgs/icons8-wordpress.svg";
import PythonIcon from "../assets/svgs/icons8-python.svg";
import TypeScriptIcon from "../assets/svgs/icons8-typescript.svg";
import JavaIcon from "../assets/svgs/icons8-java.svg";
import DjangoIcon from "../assets/svgs/icons8-django.svg";

export const NavItems = [
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
  { name: "Contact", link: "#contact" },
];

export const heroStatics = [
  {
    title: "Experianced",
    description: "Flexible developers",
  },
  {
    title: "4+ years",
    description: "Of industry experience",
  },
  {
    title: "100+",
    description: "Technical questions answered",
  },
];

export const FeaturesData = [
  {
    icon: Trophy,
    title: "Top Quality",
    description:
      "We’ll divide your goal into tasks and solve it step by step, using Agile and Jira, so you can easily control the progress. ",
  },
  {
    icon: MessagesSquare,
    title: "Healthy communication",
    description:
      "Communication is essential for a mutually beneficial relationship. Our engineers speak English and share statuses on daily stand-ups. ",
  },
  {
    icon: TrendingUp,
    title: "High motivation",
    description:
      "We’re keeping our knowledge up to date cause we’re passionate about web technologies and learning new languages, methodologies, and libraries. ",
  },
  {
    icon: BicepsFlexed,
    title: "Flexibility",
    description:
      "We’re flexible with the working hours, and we’d like to find the most suitable technology stack concerning your wishes, budget, and deadlines. ",
  },
];

export const TechStackData = [
  { icon: AnddroidIcon, title: "Android" },
  { icon: DockerIcon, title: "Docker" },
  { icon: ExpressIcon, title: "Express" },
  { icon: FlutterIcon, title: "Flutter" },
  { icon: IosIcon, title: "IOS" },
  { icon: JQueryIcon, title: "JQuery" },
  { icon: NodeJsIcon, title: "NodeJs" },
  { icon: PythonIcon, title: "Python" },
  { icon: ReactIcon, title: "React" },
  { icon: WordPressIcon, title: "WordPress" },
  { icon: BootstrapIcon, title: "Bootstrap" },
  { icon: TypeScriptIcon, title: "TypeScript" },
  { icon: JavaIcon, title: "Java" },
  { icon: DjangoIcon, title: "Django" },
];

export const TestimonialData = [
  {
    name: "John Doe",
    position: "CEO, Example Company",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    testimonial:
      "The team at this company exceeded our expectations. Their attention to detail and commitment to quality is unmatched.",
  },
  {
    name: "Jane Smith",
    position: "CTO, Tech Innovations",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    testimonial:
      "We were impressed with their ability to adapt to our changing requirements. They delivered a top-notch product on time.",
  },
  {
    name: "Michael Johnson",
    position: "Product Manager, Startup Inc.",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    testimonial:
      "Their expertise in software development helped us launch our product successfully. Highly recommend!",
  },
];
export const serviceData = [
  {
    title: "End-to-end development",
    description: "Develop a Product",
  },
  {
    title: "Team Extension",
    description: "Hire Outsourced Developers",
  },
  {
    title: "IT consulting",
    description: "Resolve tech questions",
  },
];
