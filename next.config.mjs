/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    async start() {
      const app = require("./koaServer/index.ts");
      await app.listen(3000);
    },
  },
};

export default nextConfig;
