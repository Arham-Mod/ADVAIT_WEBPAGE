import type { CardNavItem } from '../components/CardNav'

export const navItems: CardNavItem[] = [
  {
    label: "Events",
    bgColor: "#0d0716",
    textColor: "#ffffff",
    links: [
      { label: "Event 1", href: "#", ariaLabel: "Event 1" },
      { label: "Event 2", href: "#", ariaLabel: "Event 2" },
      { label: "Event 3", href: "#", ariaLabel: "Event 3" },
    ]
  },
  {
    label: "People",
    bgColor: "#170d27",
    textColor: "#ffffff",
    links: [
      { label: "Wall of Builders", href: "#", ariaLabel: "Wall of Builders" },
      { label: "Hall of Flames", href: "#", ariaLabel: "Hall of Flames" },
      { label: "Our Projects", href: "#", ariaLabel: "Our Projects" },
    ]
  },
  {
    label: "Services",
    bgColor: "#271e37",
    textColor: "#ffffff",
    links: [
      { label: "Our Story", href: "#", ariaLabel: "Our Story" },
      { label: "Social Networks", href: "#", ariaLabel: "Social Networks" },
      { label: "Newsletter", href: "#", ariaLabel: "Newsletter" },
    ]
  }
];

export const navConfig = {
  logo: "/advait-logo.png",
  logoAlt: "ADVAIT Logo",
  baseColor: "rgba(249, 249, 249, 0.1)",
  menuColor: "#ffffff",
  buttonBgColor: "#ffffff",
  buttonTextColor: "#000000"
};

