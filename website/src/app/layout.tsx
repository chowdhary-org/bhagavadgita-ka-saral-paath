import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'भगवद्गीता का सरल पाठ - Bhagavadgītā Kā Saral Pāṭh',
  description:
    'भगवद्गीता का सरल पाठ - एक सरल और सुलभ हिंदी अनुवाद जो भगवद्गीता के गूढ़ रहस्यों को समझने में मदद करता है।',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="hi"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
