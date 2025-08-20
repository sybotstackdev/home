import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Metadata configuration for different routes
const routeMetadata = {
  '/': {
    title: "Home | Sybotstack - Full-Spectrum Digital Product Studio",
    description: "Sybotstack - Crafting future-ready digital experiences. We're a full-spectrum digital product studio turning bold ideas into market-ready solutions that drive real business impact.",
    keywords: ["digital product studio", "web development", "mobile apps", "UI/UX design", "digital transformation", "technology consulting", "startup solutions"],
    ogTitle: "Sybotstack - Full-Spectrum Digital Product Studio",
    ogDescription: "Crafting future-ready digital experiences with innovative technology solutions.",
    canonical: "/"
  },
  '/about-us': {
    title: "About Us | Sybotstack - Full-Spectrum Digital Product Studio",
    description: "Learn about Sybotstack's journey, our values, and the team behind our mission to transform businesses through innovative technology solutions.",
    keywords: ["about sybotstack", "our story", "company values", "team", "digital transformation", "technology company"],
    ogTitle: "About Us | Sybotstack",
    ogDescription: "Learn about Sybotstack's journey, our values, and the team behind our mission to transform businesses through innovative technology solutions.",
    canonical: "/about-us"
  },
  '/services': {
    title: "Our Services | Sybotstack - Full-Spectrum Digital Product Studio",
    description: "Explore Sybotstack's comprehensive range of digital services including web development, mobile apps, UI/UX design, and digital transformation solutions.",
    keywords: ["web development", "mobile app development", "UI/UX design", "digital transformation", "technology consulting", "software development", "custom solutions"],
    ogTitle: "Our Services | Sybotstack",
    ogDescription: "Explore Sybotstack's comprehensive range of digital services including web development, mobile apps, UI/UX design, and digital transformation solutions.",
    canonical: "/services"
  },
  '/contact': {
    title: "Contact Us | Sybotstack - Full-Spectrum Digital Product Studio",
    description: "Get in touch with Sybotstack for your next digital project. We're here to help transform your ideas into market-ready solutions.",
    keywords: ["contact sybotstack", "get quote", "digital project consultation", "technology consulting", "web development contact"],
    ogTitle: "Contact Us | Sybotstack",
    ogDescription: "Get in touch with Sybotstack for your next digital project. We're here to help transform your ideas into market-ready solutions.",
    canonical: "/contact"
  }
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const metadata = routeMetadata[pathname as keyof typeof routeMetadata] || routeMetadata['/'];
  
  // Create response
  const response = NextResponse.next();
  
  // Add metadata to headers for use in layout
  response.headers.set('x-page-title', metadata.title);
  response.headers.set('x-page-description', metadata.description);
  response.headers.set('x-page-keywords', metadata.keywords.join(', '));
  response.headers.set('x-page-og-title', metadata.ogTitle);
  response.headers.set('x-page-og-description', metadata.ogDescription);
  response.headers.set('x-page-canonical', metadata.canonical);
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 