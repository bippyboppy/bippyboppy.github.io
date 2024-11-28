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
  plugins: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

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
          versions: {
            current: {
              label: "Next",
              path: "next",
              banner: "unreleased",
            },
          },
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/bippyboppy/bippyboppy.github.io/tree/main",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true, // Show the last edit time
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
                label: "Predictions",
                to: "/docs/predictions",
              },
              {
                label: "Reading Logs",
                to: "/docs/reading",
              },
            ],
          },
          {
            title: "Reading",
            items: [
              {
                label: "2024",
                to: "/docs/reading2024",
              },
            ],
          },
          {
            title: "Blog posts",
            items: [
              {
                label: "k/acc manifesto",
                to: "/2024/03/15/kacc-manifesto",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/bippyboppy",
              },
            ],
          },
        ],
        copyright: `Copyleft © ${new Date().getFullYear()} Samsaric, Inc. Built with Docusaurus.`,
      },
      algolia: {
        appId: "SUKJBSPLKI",
        apiKey: "6c8d79d31af3e94783226da5e2e45389",
        indexName: "bippyboppyio", // Replace with your actual Algolia index name
        contextualSearch: true, // Enable contextual search for docs
        searchParameters: {}, // Optional search parameters
      },
    }),
};

export default config;
