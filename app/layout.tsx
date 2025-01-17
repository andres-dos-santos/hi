/* eslint-disable camelcase */
import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["500"],
	variable: "--font-code",
});

const TTDemiBold = localFont({
	src: "../public/fonts/tt-firs-neue/demi-bold.ttf",
	variable: "--font-tt-demi-bold",
});

export const metadata: Metadata = {
	title: "Andres dos Santos - Portfolio",
	description:
		"Portfolio created by Andreas to show who I am, what I have done and what I study.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${TTDemiBold.variable} ${plexMono.variable} relative`}
		>
			<body>{children}</body>
		</html>
	);
}
