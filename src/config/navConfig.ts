import type { CardNavItem } from '../components/CardNav'

export const navItems: CardNavItem[] = [
  {
    label: "Products",
    bgColor: "#0d0716",
    textColor: "#ffffff",
    links: [
      { label: "Feature 1", href: "#", ariaLabel: "Feature 1" },
      { label: "Feature 2", href: "#", ariaLabel: "Feature 2" },
      { label: "Feature 3", href: "#", ariaLabel: "Feature 3" },
    ]
  },
  {
    label: "Services",
    bgColor: "#170d27",
    textColor: "#ffffff",
    links: [
      { label: "Service 1", href: "#", ariaLabel: "Service 1" },
      { label: "Service 2", href: "#", ariaLabel: "Service 2" },
      { label: "Service 3", href: "#", ariaLabel: "Service 3" },
    ]
  },
  {
    label: "About",
    bgColor: "#271e37",
    textColor: "#ffffff",
    links: [
      { label: "Our Story", href: "#", ariaLabel: "Our Story" },
      { label: "Team", href: "#", ariaLabel: "Team" },
      { label: "Contact", href: "#", ariaLabel: "Contact" },
    ]
  }
];

export const navConfig = {
  logo: "/next.svg",
  logoAlt: "ADVAIT Logo",
  baseColor: "rgba(255, 255, 255, 0.1)",
  menuColor: "#ffffff",
  buttonBgColor: "#ffffff",
  buttonTextColor: "#000000"
};

