import { useEffect, useState } from "react";
import { siteConfig } from "../config";

const NAV_LINKS = [
  { label: "Reviews", href: "#reviews" },
  { label: "Results", href: "#before-after" },
  { label: "Services", href: "#project-types" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [showCallButton, setShowCallButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setShowCallButton(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}${showCallButton ? " show-call" : ""}`}
    >
      <div className="container header-inner">
        <a href="#hero" className="header-logo" aria-label={`${siteConfig.businessName} home`}>
          {siteConfig.logoPath ? (
            <img
              src={siteConfig.logoPath}
              alt={siteConfig.businessName}
              width={768}
              height={240}
            />
          ) : (
            <strong>{siteConfig.businessName}</strong>
          )}
        </a>

        <nav className="header-nav" aria-label="Page sections">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          id="call-button-header"
          className="header-call"
          data-event="cleaning_call_click"
        >
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
