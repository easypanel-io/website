// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Easypanel",
  tagline: "Manage your server without fighting the terminal",
  url: "https://easypanel.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "easypanel-io", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/easypanel-io/website",
          breadcrumbs: false,
          sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/easypanel-io/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-4JL0CD3631",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: "My Site",
        // hideOnScroll: true,
        logo: {
          alt: "Easypanel Logo",
          src: "img/logo_light.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          { to: "/docs", label: "Product", position: "left" },
          { to: "/docs", label: "Templates", position: "left" },
          { to: "/docs", label: "Pricing", position: "left" },
          { to: "/docs", label: "Docs", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
        ],
      },
      footer: {
        logo: {
          alt: "Easypanel Logo",
          src: "img/logo_light.svg",
          srcDark: "img/logo_dark.svg",
        },
        // style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/9bcDSXcZQ7",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/easypanel_io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Easypanel.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    () => ({
      name: "postcss-tailwindcss-loader",
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.unshift(require("tailwindcss"));
        return postcssOptions;
      },
    }),
  ],
};

module.exports = config;
