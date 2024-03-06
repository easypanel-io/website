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
    () => ({
      name: "postcss-tailwindcss-loader",
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.unshift(require("tailwindcss"));
        return postcssOptions;
      },
    }),
    () => ({
      name: "lemonsqueezy-script",
      injectHtmlTags() {
        return {
          postBodyTags: [
            `<script>window.lemonSqueezyAffiliateConfig = { store: "easypanel" };</script>
<script src="https://lmsqueezy.com/affiliate.js" defer></script>`,
          ],
        };
      },
    }),
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
      announcementBar: {
        id: "dockerizer",
        content:
          '<a href="https://easypanel.io/dockerizer" style="font-weight: bold; text-decoration: none;">🚀 Introducing Dockerizer - The fastest way to dockerize your apps! 🚀</a>',
        backgroundColor: "#059669",
        textColor: "#fff",
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
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
          { to: "/docs", label: "Docs", position: "left" },
          { to: "/templates", label: "Templates", position: "left" },
          { to: "/pricing", label: "Pricing", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            to: "https://easypanel.io/dockerizer",
            label: "Dockerizer",
            position: "right",
          },
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
                label: "Builders",
                to: "/docs/builders",
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
                label: "Strapi",
                to: "/docs/templates/strapi",
              },
              {
                label: "Directus",
                to: "/docs/templates/directus",
              },
              {
                label: "Appsmith",
                to: "/docs/templates/appsmith",
              },
              {
                label: "More...",
                to: "/templates",
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
              {
                label: "Feedback",
                href: "https://feedback.easypanel.io/",
              },
              {
                label: "Roadmap",
                href: "https://feedback.easypanel.io/",
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
              {
                label: "Branding",
                href: "https://easypanel.io/brand",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms Of Service",
                href: "https://easypanel.io/terms",
              },
              {
                label: "Privacy Policy",
                href: "https://easypanel.io/privacy",
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
