/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icon`,
        path: `${__dirname}/src/components/icon/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // 删除无效的选项
        exclude: ["node_modules", ".cache", "public"], // 确保这部分是正确的
        stages: ["develop"],
        // 删除不支持的选项字段
        // options: {
        //   emitWarning: true,
        //   failOnError: false,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-babel`,
      options: {
        plugins: [
          [
            "import",
            {
              libraryName: "antd",
              libraryDirectory: "es",
              style: "css", // 使用 `css` 加载实际的 CSS
            },
          ],
        ],
      },
    },
  ],
};
