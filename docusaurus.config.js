module.exports = {
  title: 'Yumechi - VDS Pages',
  tagline: 'Happy Hacking!',
  url: 'https://vds.yumechi.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'eternal-flame-AD', // Usually your GitHub org/user name.
  projectName: 'vds-yumechi-top', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yumechi',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documents',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/eternal-flame-AD/vds-yumechi-top',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'UTBox Folder',
              href: 'https://utexas.app.box.com/folder/121369283675',
            },
          ],
        },
        {
          title: 'More',
          items: [
            /*{
              label: 'Blog',
              to: 'blog',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/eternal-flame-AD',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yumechi & VDS Stream. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        "docs": {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/eternal-flame-AD/vds-yumechi-top/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/eternal-flame-AD/vds-yumechi-top/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: ["https://use.fontawesome.com/releases/v5.14.0/js/all.js"],
};
