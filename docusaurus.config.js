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
  stylesheets: [
    // "https://fonts.googleapis.com/css2?family=Inter:wght@583&display=block",
    // "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=block",
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/easypanel-io/website/tree/main",
          breadcrumbs: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/easypanel-io/website/tree/main",
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

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "product",
        path: "product",
        routeBasePath: "product",
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "templates",
        path: "templates",
        routeBasePath: "templates",
        breadcrumbs: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        // title: "My Site",
        // hideOnScroll: true,
        logo: {
          alt: "Easypanel Logo",
          src: "img/logo_light.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          { to: "/product", label: "Product", position: "left" },
          { to: "/templates", label: "Templates", position: "left" },
          { to: "/pricing", label: "Pricing", position: "left" },
          { to: "/docs", label: "Docs", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
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
                label: "Get Started",
                to: "/docs/get-started",
              },
              {
                label: "Services",
                to: "/docs/services",
              },
              {
                label: "Builders",
                to: "/docs/builders",
              },
              {
                label: "Guides",
                to: "/docs/guides",
              },
            ],
          },
          {
            title: "Templates",
            items: [
              {
                label: "Wordpress",
                to: "/templates/wordpress",
              },
              {
                label: "phpMyAdmin",
                to: "/templates/phpmyadmin",
              },
              {
                label: "Adminer",
                to: "/templates/adminer",
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
                href: "https://github.com/easypanel-io",
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
};

module.exports = config;
