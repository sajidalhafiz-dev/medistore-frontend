import { cn } from "@/lib/utils";

// import { Logo, LogoImage, LogoText } from "@/components/shadcnblocks/logo";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "medistore-logo.svg",
    alt: "medistore logo",
    title: "",
    url: "",
  },
  className,
  tagline = "Components made easy.",
  menuItems = [
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    }
  ],
  copyright = "© 2026 MediStore All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: FooterProps) => {
  return (
    <section className={cn("py-12", className)}>
      <div className="mx-auto px-4 sm:px-10 max-w-5xl">
        <footer>
          <div className="flex flex-col items-center gap-8">
            <div className="">
              <div className="flex items-center gap-2  justify-center">
                {/* Logo */}
                <a href={logo.url} className="flex items-center gap-2">
                  <img
                    src={logo.src}
                    className="max-h-8 dark:invert"
                    alt={logo.alt}
                  />
                  <span className="text-lg font-semibold tracking-tighter">
                    {logo.title}
                  </span>
                </a>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx} className="flex flex-col items-center gap-2">
                <h3 className="font-bold">{section.title}</h3>
                <ul className="flex space-x-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-24 flex flex-col justify-between gap-4  pt-8 text-sm font-medium text-muted-foreground md:flex-row items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
