import type {Metadata} from 'next';
import { Inter, Playfair_Display, Yatra_One } from 'next/font/google';
import './globals.css'; // Global styles

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
  title: 'Nrutyarang 2026 – Dance Event in Nashik | Kalidas Kalamandir Cultural Program',
  description: 'Join Nrutyarang 2026, a grand Marathi dance event in Nashik at Kalidas Kalamandir. Book your seats now for this cultural dance program near you.',
  keywords: [
    'Events near me',
    'Dance program near me',
    'Events in Nashik',
    'Kalidas events',
    'Marathi cultural event Nashik',
    'Nashik dance competition',
    'Cultural program Nashik 2026'
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${yatra.variable}`}>
      <body className="font-sans bg-black text-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
