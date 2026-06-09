export interface LinkItem {
  id: number;
  title: string;
  url: string;
  icon?: string;
  iconBgColor?: string;
}

export const links: LinkItem[] = [
  {
    id: 1,
    title: "My Website",
    url: "https://zyahya.dev",
    icon: "fa-solid fa-globe",
    iconBgColor: "bg-gray-900",
  },
  {
    id: 2,
    title: "Kashida (+1.3K Downloads)",
    url: "https://www.nuget.org/packages/kashida",
    icon: "fa-solid fa-box-open",
    iconBgColor: "bg-gray-900",
  },
  {
    id: 3,
    title: "Qabilah",
    url: "https://qabilah.com/profile/zyahya",
    iconBgColor: "bg-gray-900",
  },
  {
    id: 4,
    title: "Leetcode",
    url: "https://leetcode.com/u/zyahya/",
    icon: "fa-brands fa-leetcode",
  },
  {
    id: 5,
    title: "HackerRank",
    url: "https://www.hackerrank.com/profile/ziadyahya",
    icon: "fa-brands fa-hackerrank",
  },
];
