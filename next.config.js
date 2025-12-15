const nextConfig = {
  // i18n removed to prevent conflict with SPA routing
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
