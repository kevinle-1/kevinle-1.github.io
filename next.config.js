/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  output: "export",
};

module.exports = nextConfig;
