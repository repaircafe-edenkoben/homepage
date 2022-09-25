import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLogo from "@theme/Footer/Logo";

function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { logo } = footer;

  return (
    <footer className="bg-gray-900 text-white py-12 px-12">
      <div className="grid xl:grid-cols-3">
        Impressum
      </div>
    </footer>
  );
}
export default React.memo(Footer);
