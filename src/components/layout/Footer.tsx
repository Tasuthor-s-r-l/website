import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="font-heading text-xl font-bold tracking-tight">
            <img src="/tasuthor.svg" alt="Tasuthor" className="h-14 w-auto" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            AI Operational Systems Company.<br />
            Automazioni operative per PMI.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Navigazione</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Soluzioni", path: "/soluzioni" },
              { label: "Agendo", path: "/agendo" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Risorse</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Casi d'uso", path: "/casi-duso" },
              { label: "Metodo", path: "/metodo" },
              { label: "Contatti", path: "/contatti" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Legale</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/termini-di-servizio" className="hover:text-primary transition-colors">Termini di servizio</Link>
            <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <button
              onClick={() => window.dispatchEvent(new Event("tasuthor:open-cookie-banner"))}
              className="flex items-center gap-1.5 text-left hover:text-primary transition-colors"
            >
              <Cookie className="h-3.5 w-3.5" />
              Gestisci cookie
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border/50 pt-6">
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          © {new Date().getFullYear()} TASUTHOR. Tutti i diritti riservati. I risultati descritti sono indicativi e dipendono dal contesto operativo specifico. Nessuna promessa di risultato assoluto.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
