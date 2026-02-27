import type { Metadata } from 'next';
import { Inter, Playfair_Display, Yatra_One } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const yatra = Yatra_One({
  weight: '400',
  subsets: ['devanagari', 'latin'],
  variable: '--font-marathi',
});

export const metadata: Metadata = {
  title: 'Nrutyarang 2026 | Dance Program & Events in Nashik',
  description: 'Looking for events near me? Join Nrutyarang 2026, a grand Marathi cultural dance program in Nashik at Kalidas Kalamandir. Book your ₹50 tickets today!',
  keywords: [
    'Events near me',
    'Dance program near me',
    'Events in Nashik',
    'Kalidas events',
    'Marathi cultural event Nashik',
    'Nashik dance competition',
    'Cultural program Nashik 2026',
    'Things to do in Nashik'
  ],
  authors: [{ name: 'Gagan Bharari' }, { name: 'A-Cube Holidays and Events' }],
  openGraph: {
    title: 'Nrutyarang 2026 | Grand Dance Event in Nashik',
    description: 'Experience the magic of Marathi culture at Mahakavi Kalidas Kalamandir. Book your tickets for the best dance program near you!',
    // UPDATED URL BELOW
    url: 'https://nrutyarang.gaganbharari.com', 
    siteName: 'Nrutyarang Nashik',
    images: [
      {
        url: '/nrutya.png', 
        width: 1200,
        height: 630,
        alt: 'Nrutyarang 2026 Marathi Dance Event Poster',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nrutyarang 2026 | Kalidas Events Nashik',
    description: 'Join the grandest Marathi dance program in Nashik on March 5, 2026.',
    images: ['/nrutya.png'],
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nashik',
    'geo.position': '19.9975;73.7898',
    'ICBM': '19.9975, 73.7898',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${yatra.variable}`}>
      <body className="font-sans bg-black text-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}