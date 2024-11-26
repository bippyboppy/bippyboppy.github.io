// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Samsaric",
  tagline: "Noise",
  favicon: "img/favicon.ico",

  // Production URL of your site
  url: "https://bippyboppy.github.io",
  // Pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "bippyboppy", // GitHub organization/user name
  projectName: "bippyboppy.github.io", // GitHub repo name
  deploymentBranch: "gh-pages", // Replace 'main' with your target branch

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/bippyboppy/bippyboppy.github.io/tree/main",
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/", // Set the blog to be served at the root URL
          postsPerPage: 5,
          exclude: ["drafts/**"],
          editUrl:
            "https://github.com/bippyboppy/bippyboppy.github.io/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Samsaric",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/tags", label: "Tags", position: "left" },
          {
            href: "https://github.com/bippyboppy/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
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
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
    }),
};

export default config;
