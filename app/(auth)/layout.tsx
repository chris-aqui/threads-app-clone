import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Threads Clone',
	description: 'A clone of the popular threads app built using Nextjs 13',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} bg-dark-1`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}