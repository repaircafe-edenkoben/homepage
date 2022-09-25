/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Repaircafe Edenkoben",
  url: "https://pages.github.com",
  baseUrl: "/repaircafe-edenkoben/homepage/",
  favicon: '/img/favicon.ico',
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"), // Image Zoom
    require.resolve("docusaurus-tailwindcss"), // Styling component
    ["docusaurus2-dotenv", { systemvars: true }], // Environment Variables
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "content/guides",
        routeBasePath: "guides/",
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "about",
        path: "content/about",
        routeBasePath: "about/",
        breadcrumbs: false,
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    zoom: {
      selector: ".markdown :not(em) > img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/vsDark"),
      additionalLanguages: ["java", "jsx"],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "Repaircafe Edenkoben",
      logo: {
        alt: "Repaircafe Edenkoben",
        src: "img/logo.png",
      },
      items: [
        {
          to: "about/",
          activeBasePath: "about/",
          label: "Über uns",
          position: "left",
        },
        {
          to: "events/",
          activeBasePath: "events/",
          label: "Termine",
          position: "left",
        },
        {
          to: "join/",
          activeBasePath: "join/",
          label: "Mitmachen",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Repaircafe Logo",
        src: "/img/repair.png",
        width: 300,
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

module.exports = config;
