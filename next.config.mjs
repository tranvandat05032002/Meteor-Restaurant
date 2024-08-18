/** @type {import('next').NextConfig} */
// import autoCert from "anchor-pki/auto-cert/integrations/next";

// const withAutoCert = autoCert({
//   enabledEnv: "development",
// });
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/**',
      },
    ],
  },
};

// export default withAutoCert(nextConfig);
export default nextConfig;
