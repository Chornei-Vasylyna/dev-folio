import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  TelegramLogoIcon,
} from "@phosphor-icons/react";

export const student = {
  title: "Frontend Developer",
  full_name: "Ivan Petrenko",
  email: "ivan.petrenko@example.com",
  phone: "+380 12 345 6789",
  photo_url: "",
  github_url: "https://github.com/example",
  linkedin_url: "https://linkedin.com/in/example",
  telegram_url: "https://t.me/example",
};

export const socials = [
  {
    show: student.github_url,
    href: student.github_url,
    icon: GithubLogoIcon,
    label: "GitHub",
  },
  {
    show: student.linkedin_url,
    href: student.linkedin_url,
    icon: LinkedinLogoIcon,
    label: "LinkedIn",
  },
  {
    show: student.telegram_url,
    href: student.telegram_url,
    icon: TelegramLogoIcon,
    label: "Telegram",
  },
].filter((s) => s.show);