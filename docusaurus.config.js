/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Samsaric",
  tagline: "Noise",
  favicon: "img/favicon.ico",
  plugins: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

  url: "https://bippyboppy.github.io",
  baseUrl: "/",

  organizationName: "bippyboppy",
  projectName: "bippyboppy.github.io",
  deploymentBranch: "gh-pages",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/bippyboppy/bippyboppy.github.io/tree/main",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          postsPerPage: 5,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
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
      },
    ],
  ],

  themeConfig: {
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
              to: "/docs/category/reading/",
            },
          ],
        },
        {
          title: "Reading",
          items: [
            {
              label: "2024",
              to: "/docs/reading/reading2024/",
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
      indexName: "bippyboppyio",
      contextualSearch: true,
    },
    tableOfContents: {
      minHeadingLevel: 2, // Include headings starting from `#`
      maxHeadingLevel: 4, // Include up to `###`
    },
  },

  scripts: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "bippyboppy.github.io",
    },
  ],
};

export default config;
