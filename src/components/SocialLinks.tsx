import { Linkedin, Github, Mail } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/allewia-thomas",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/allewiathomas",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:allewiathomas1420@gmail.com",
    label: "Gmail",
  },
];

const SocialLinks = ({ className = "", iconClassName = "" }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 ${iconClassName}`}
        >
          <s.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
