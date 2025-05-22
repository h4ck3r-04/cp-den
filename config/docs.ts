import { MainNavItem, SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs/introduction",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
      ],
    },
    {
      title: "Data Structures",
      items: [
        {
          title: "Stack",
          href: "/docs/data-structures/stack",
          items: [],
        },
      ],
    },
    {
      title: "Algorithms",
      items: [
        {
          title: "Bubble Sort",
          href: "/docs/algorithms/bubble-sort",
          items: [],
        },
        {
          title: "Binary Search",
          href: "/docs/algorithms/binary-search",
          items: [],
        },
      ],
    },
  ],

}
