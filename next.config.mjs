/** @type {import('next').NextConfig} */
const repo = "profil-uzytkownika";

const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
