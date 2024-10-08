export type SiteConfig = typeof siteConfig;
import SApp from "../assets/ss-app.gif";
import MAutoComplete from "../assets/mm-autocomplete.gif";
import LApp from "../assets/UEDEMO_500w.gif";

export const siteConfig = {
  name: "Ruben Freire Andrade",
  profile:
    "I hold a degree in Games programming with passion for web and software development. I have a fascination with the dynamic world of programming. Eager to immerse myself in collaborative environments working alongside skilled programmers, I am driven to succeed in the field. My aim is to secure a challenging position and gain valuable experience in order to grow both personally and professionally.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      children: [
        {
          label: "Lucid Forms",
          href: "/projects/lucid-forms",
        },
        {
          label: "SecureShare",
          href: "/projects/secureshare",
        },
        {
          label: "Majestic Miles",
          href: "/projects/majestic-miles",
        },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  carouselItems: [
    {
      label: "Lucid Forms",
      href: "/projects/lucid-forms",
      src: LApp,
    },
    {
      label: "SecureShare",
      href: "/projects/secureshare",
      src: SApp,
    },
    {
      label: "Majestic Miles",
      href: "/projects/majestic-miles",
      src: MAutoComplete,
    },
  ],
  links: {
    github: "https://github.com/RubenFreireAndrade",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
