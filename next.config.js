const nextConfig = {
<<<<<<< HEAD
=======
  // i18n removed to prevent conflict with SPA routing
>>>>>>> develop
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
