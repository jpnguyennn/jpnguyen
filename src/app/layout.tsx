import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"],
  variable: "--font-inter"
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-quicksand"
})

export const metadata: Metadata = {
	title: "johnpaul nguyen",
	description: "Portfolio Website of JohnPaul Nguyen",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${quicksand.variable}`}>
				{children}
			</body>
		</html>
	);
}
