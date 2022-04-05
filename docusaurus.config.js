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
  trailingSlash: false,
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
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "product",
    //     path: "product",
    //     routeBasePath: "product",
    //     breadcrumbs: false,
    //   },
    // ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "templates",
    //     path: "templates",
    //     routeBasePath: "templates",
    //     breadcrumbs: false,
    //   },
    // ],
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
          { to: "/pricing", label: "Pricing", position: "left" },
          { to: "/docs/guides", label: "Guides", position: "left" },
          { to: "/docs/templates", label: "Templates", position: "left" },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/docs", label: "Docs", position: "right" },
        ],
      },
      algolia: {
        appId: "291Q7ITAVJ",
        apiKey: "e0fa29c5c372199c5b407b3c177d50b3",
        indexName: "website",
        contextualSearch: false,
        searchPagePath: false,
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
                to: "/docs",
              },
              {
                label: "Services",
                to: "/docs/services",
              },
              {
                label: "Guides",
                to: "/docs/guides",
              },
              {
                label: "Templates",
                to: "/docs/templates",
              },
            ],
          },
          {
            title: "Templates",
            items: [
              {
                label: "Wordpress",
                to: "/docs/templates/wordpress",
              },
              {
                label: "phpMyAdmin",
                to: "/docs/templates/phpmyadmin",
              },
              {
                label: "Adminer",
                to: "/docs/templates/adminer",
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
                label: "Portal",
                href: "https://portal.easypanel.io",
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
        additionalLanguages: ["php"],
      },
    }),
};

module.exports = config;
