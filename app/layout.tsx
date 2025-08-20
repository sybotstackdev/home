import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { headers } from 'next/headers';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

// Dynamic metadata generation
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  
  // Get metadata from headers set by middleware
  const title = headersList.get('x-page-title') || "Sybotstack - Full-Spectrum Digital Product Studio";
  const description = headersList.get('x-page-description') || "Sybotstack is a full-spectrum digital product studio crafting future-ready digital experiences.";
  const keywords = headersList.get('x-page-keywords') || "digital product studio, web development, mobile apps, UI/UX design, digital transformation, technology consulting";
  const ogTitle = headersList.get('x-page-og-title') || "Sybotstack - Full-Spectrum Digital Product Studio";
  const ogDescription = headersList.get('x-page-og-description') || "Crafting future-ready digital experiences with innovative technology solutions.";
  const canonical = headersList.get('x-page-canonical') || "/"; 
  
  return {
    title: title,
    description: description,
    keywords: keywords.split(', '),
    authors: [{ name: "Sybotstack Team" }],
    creator: "Sybotstack",
    publisher: "Sybotstack",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://myweb-iota-lemon.vercel.app'),  
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://myweb-iota-lemon.vercel.app${canonical}`,
      title: ogTitle,
      description: ogDescription,
      siteName: 'Sybotstack',
      images: [
        {
          url: '/favicons/apple-touch-icon.png', // <-- your Apple chat icon
          width: 1200,
          height: 630,
          alt: 'Sybotstack - Digital Product Studio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: ['/favicons/apple-touch-icon.png'], // <-- your Apple chat icon
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>  
        <link rel="icon" href="/favicons/apple-touch-icon.png" />
      </head>
      <body
        className={`${poppins.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
