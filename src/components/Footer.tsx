import SocialLinks from "./SocialLinks";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} Allewia Elizabeth Thomas. All rights reserved.
      </p>
      <SocialLinks />
    </div>
  </footer>
);

export default Footer;
