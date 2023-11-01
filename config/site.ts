export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ne X pro",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "projects",
    },
  ],
  links: {
    twitter: "https://twitter.com/xspacestation/",
    github: "https://github.com/patgpt/sh-nextjs",
    docs: "https://ui.shadcn.com",
  },
}
