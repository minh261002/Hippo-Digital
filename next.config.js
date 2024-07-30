/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "hippo-digital.onrender.com",
			},
		],
	},
};

module.exports = nextConfig;
