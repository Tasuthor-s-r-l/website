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
    <section className="relative -mt-2 pb-10 md:-mt-3 md:pb-12 bg-background overflow-hidden z-20">
      <div className="container">
        <p className="text-sm md:text-base text-muted-foreground mb-4 text-center tracking-wide uppercase">Integriamo con i migliori strumenti</p>
        {/* Marquee Container con effetto WOW - compatto */}
        <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-card/30 p-4 shadow-[0_0_40px_hsl(var(--primary)/0.12)] backdrop-blur-md">
          <div className="scrolling-brands-track-wow scrolling-brands-no-pause">
            {brandsList.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="scrolling-brands-item-wow"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border/20 bg-card/50 backdrop-blur whitespace-nowrap select-none">
                  <span className={brand.lightBadge ? "inline-flex h-6 w-6 items-center justify-center rounded-md bg-white" : "inline-flex"}>
                    <svg
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: brand.color ?? `#${brand.icon.hex}` }}
                      dangerouslySetInnerHTML={{ __html: brand.icon.svg }}
                    />
                  </span>
                  <span className="font-medium text-foreground text-xs">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient masks per effetto fade - più sottili */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
