// Make sure you turn on "Automatically expose System Environment Variables" in the Vercel console here:
// https://vercel.com/<username>/<app-name>/settings/environment-variables
let isLocalDev = process.env.VERCEL_ENV !== 'production' && process.env.VERCEL_ENV !== 'preview';

module.exports = {
  /**
   * The path to the `app` directory, relative to remix.config.js. Defaults to
   * "app". All code in this directory is part of your app and will be compiled
   * by Remix.
   *
   * We prevent vercel from building when it deploys because it chokes on the
   * typescript files that Remix already built.
   */
  appDirectory: isLocalDev ? 'app' : 'app-build',

  /**
   * The path to the browser build, relative to remix.config.js. Defaults to
   * `public/build`. The browser build contains all public JavaScript and CSS
   * files that are created when building your routes.
   */
  browserBuildDirectory: 'public/build',

  /**
   * The URL prefix of the browser build with a trailing slash. Defaults to
   * `/build/`.
   */
  publicPath: '/build/',

  /**
   * The path to the server build directory, relative to remix.config.js.
   * Defaults to `build`. The server build is a collection of JavaScript modules
   * that are created from building your routes. They are used on the server to
   * generate HTML.
   */
  serverBuildDirectory: 'app-build',

  /**
   * MDX Plugins
   */
  mdx: {
    rehypePlugins: [
      require('rehype-slug'),
      [
        require('rehype-autolink-headings'),
        {
          content: {
            type: 'element',
            tagName: 'span',
            properties: { className: ['text-hot-pink'] },
            children: [
              {
                type: 'jsx',
                value:
                  '<svg xmlns="http://www.w3.org/2000/svg" className="absolute w-6 h-6 -translate-x-10 translate-y-1.5 fill-current transform-gpu hover:block" viewBox="0 0 512.09 512.09"><path d="M312.45 199.6a119.47 119.47 0 00-84.48-34.99 118.95 118.95 0 00-84.48 35L34.95 308.22A119.47 119.47 0 00.04 392.55c-.04 65.98 53.4 119.5 119.39 119.54a118.7 118.7 0 0084.4-34.82l89.6-89.6a8.53 8.53 0 00-6.07-14.59h-3.4a143.63 143.63 0 01-54.62-10.58 8.53 8.53 0 00-9.3 1.88l-64.43 64.51a51.23 51.23 0 11-72.45-72.45l108.97-108.88a51.2 51.2 0 0172.37 0 34.99 34.99 0 0047.95 0c5.8-5.8 9.31-13.5 9.9-21.68a34.14 34.14 0 00-9.9-26.28z" /><path d="M477.06 35c-46.66-46.66-122.3-46.66-168.96 0l-89.51 89.42a8.53 8.53 0 00-1.8 9.39 8.53 8.53 0 008.03 5.2h3.15c18.7-.03 37.22 3.6 54.53 10.67a8.53 8.53 0 009.3-1.88l64.26-64.17a51.23 51.23 0 1172.44 72.45l-80.04 79.96-.68.77-27.99 27.81a51.2 51.2 0 01-72.36 0 34.99 34.99 0 00-47.96 0 34.14 34.14 0 00-9.9 21.85 34.14 34.14 0 009.9 26.28c9.88 9.92 21.43 18.01 34.13 23.9 1.8.85 3.59 1.53 5.38 2.3 1.8.77 3.67 1.37 5.46 2.05a67.8 67.8 0 005.46 1.79l5.04 1.36c3.4.86 6.82 1.54 10.32 2.14 4.22.62 8.46 1.02 12.72 1.2H284.46l5.12-.6c1.88-.09 3.84-.52 6.06-.52h2.9l5.89-.85 2.73-.51 4.95-1.02h.94a119.46 119.46 0 0055.38-31.4l108.63-108.64c46.66-46.65 46.66-122.3 0-168.96z" /></svg>',
              },
            ],
          },
        },
      ],
    ],
    remarkPlugins: [require('remark-squeeze-paragraphs')],
  },
  /**
   * The port to use when running `remix run`. Defaults to 8002.
   */
  devServerPort: 8002,
};
