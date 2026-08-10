import { siteConfig } from "../config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {siteConfig.logoPath ? (
              <img src={siteConfig.logoPath} alt={siteConfig.businessName} width={768} height={240} />
            ) : (
              <p>
                <strong>{siteConfig.businessName}</strong>
              </p>
            )}
            <p>{siteConfig.serviceAreaLabel}</p>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li>Recurring cleaning</li>
              <li>Deep cleaning</li>
              <li>Move-in / move-out cleaning</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="footer-phone"
                  data-event="cleaning_call_click"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={siteConfig.privacyPolicyUrl}>Privacy Policy</a>
              </li>
              <li>
                <a href={siteConfig.termsUrl}>Terms</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
