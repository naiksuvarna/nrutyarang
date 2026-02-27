import Hero from '@/components/Hero';
import About from '@/components/About';
import LuckyDraw from '@/components/LuckyDraw';
import Sponsors from '@/components/Sponsors';
import Venue from '@/components/Venue';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Nrutyarang 2026 - Marathi Cultural Dance Program",
    "startDate": "2026-03-05T16:00:00+05:30",
    "endDate": "2026-03-05T19:00:00+05:30",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "image": [
      // UPDATED IMAGE URL BELOW
      "https://nrutyarang.gaganbharari.com/nrutya.png" 
    ],
    "location": {
      "@type": "Place",
      "name": "Mahakavi Kalidas Kalamandir",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shalimar",
        "addressLocality": "Nashik",
        "postalCode": "422001",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "description": "Looking for events near you? Nrutyarang 2026 is a grand Marathi cultural dance competition and event in Nashik at Kalidas Kalamandir.",
    "offers": {
      "@type": "Offer",
      // UPDATED BOOKING URL BELOW
      "url": "https://nrutyarang.gaganbharari.com/#booking",
      "price": "50",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-02-01T00:00:00+05:30"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Gagan Bharari Group & A-Cube Holidays and Events"
    }
  };

  return (
    <main className="min-h-screen bg-[#0f0518] text-white selection:bg-yellow-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      <About />
      <LuckyDraw />
      <Sponsors />
      <Venue />
      <FinalCTA />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 bg-[#0f0518]">
        <p>© {new Date().getFullYear()} Nrutyarang. All rights reserved.</p>
        <p className="mt-2">Organized by Gagan Bharari Group & A-Cube Holidays and Events</p>
      </footer>
    </main>
  );
}