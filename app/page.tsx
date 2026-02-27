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
    "name": "Nrutyarang 2026",
    "startDate": "2026-03-05T16:00",
    "endDate": "2026-03-05T19:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Mahakavi Kalidas Kalamandir",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nashik",
        "addressCountry": "India"
      }
    },
    "description": "A grand Marathi cultural dance event in Nashik.",
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
