import "./ScrollingBrands.css";
import {
  siZapier,
  siMake,
  siN8n,
  siHubspot,
  siGooglesheets,
  siWhatsapp,
  siTelegram,
  siGmail,
  siCalendly,
  siStripe,
  siPaypal,
  siGithub,
  siNotion,
  siAirtable,
  siTrello,
  siTypeform,
  siIntercom,
  siJira,
  siClickup,
  siGoogledrive,
  siGooglecalendar,
  siGoogledocs,
} from "simple-icons";

interface Brand {
  name: string;
  icon: { svg: string; hex: string };
  color?: string;
  lightBadge?: boolean;
}

const BRANDS: Brand[] = [
  { name: "Zapier", icon: siZapier },
  { name: "Make", icon: siMake },
  { name: "n8n", icon: siN8n },
  { name: "HubSpot", icon: siHubspot },
  { name: "Google Sheets", icon: siGooglesheets },
  { name: "WhatsApp", icon: siWhatsapp },
  { name: "Telegram", icon: siTelegram },
  { name: "Gmail", icon: siGmail },
  { name: "Calendly", icon: siCalendly },
  { name: "Stripe", icon: siStripe },
  { name: "PayPal", icon: siPaypal },
  { name: "GitHub", icon: siGithub, lightBadge: true },
  { name: "Notion", icon: siNotion, lightBadge: true },
  { name: "Airtable", icon: siAirtable },
  { name: "Trello", icon: siTrello },
  { name: "Typeform", icon: siTypeform, lightBadge: true },
  { name: "Intercom", icon: siIntercom },
  { name: "Jira", icon: siJira },
  { name: "ClickUp", icon: siClickup },
  { name: "Google Drive", icon: siGoogledrive },
  { name: "Google Calendar", icon: siGooglecalendar },
  { name: "Google Docs", icon: siGoogledocs },
];

export const ScrollingBrands = () => {
  // Duplica i brand per creare effetto infinito seamless
  const brandsList = [...BRANDS, ...BRANDS];

  return (
    <section className="py-16 bg-gradient-to-r from-background via-background to-background overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            Strumenti che integriamo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Colleghiamo le automazioni con 400+ piattaforme e servizi. Questi sono i tool più utilizzati dai nostri clienti.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="scrolling-brands-track">
            {brandsList.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="scrolling-brands-item"
              >
                <div className="flex items-center gap-3 px-6 py-4 rounded-lg border border-border/30 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 whitespace-nowrap group">
                  <span className={brand.lightBadge ? "inline-flex h-6 w-6 items-center justify-center rounded-md bg-white" : "inline-flex"}>
                    <svg
                      className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: brand.color ?? `#${brand.icon.hex}` }}
                      dangerouslySetInnerHTML={{ __html: brand.icon.svg }}
                    />
                  </span>
                  <span className="font-medium text-foreground text-sm">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient masks per effetto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
