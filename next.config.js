const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
				reactStrictMode: true,
				images: {
								dangerouslyAllowSVG: true,
								remotePatterns: [
												{
																protocol: "https",
																hostname: "res.cloudinary.com",
																port: "",
																pathname: "/dutcp8qkx/**",
												},
												{
													protocol: "https",
													hostname: "media.licdn.com",
													port: "",
													pathname: "/dms/image/**",
									},
												{
																protocol: "https",
																hostname: "tailwindui.com",
																port: "",
																pathname: "/img/**",
												},
								],
								domains: ['images.unsplash.com',"media.licdn.com" ]
				},
};

module.exports = withNextVideo(nextConfig);
