import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Script from 'next/script'
import "./globals.css"

export const metadata: Metadata = {
  title: "Blackbox - Chrome Extension for Session Recording & Debugging",
  description:
    "Record user interactions, console logs, and network requests. Export sessions as JSON and replay them for comprehensive debugging and QA analysis.",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://umami.anudeepreddy.dev/script.js"
          data-website-id="8239a00a-5374-4bfe-8997-fa00bd6b2598"
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
