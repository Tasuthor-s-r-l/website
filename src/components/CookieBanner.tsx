import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "tasuthor-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);

    const handleReset = () => {
      localStorage.removeItem(STORAGE_KEY);
      setVisible(true);
    };

    window.addEventListener("tasuthor:open-cookie-banner", handleReset);
    return () => window.removeEventListener("tasuthor:open-cookie-banner", handleReset);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border/60 bg-card/95 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:gap-6 md:p-6">
          {/* Icon */}
          <div className="flex-shrink-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
            <Cookie className="h-5 w-5 text-primary" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground mb-1">
              Questo sito utilizza i cookie
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Utilizziamo cookie tecnici essenziali al funzionamento del sito e localStorage per
              memorizzare le tue preferenze. Non utilizziamo cookie di profilazione o advertising.{" "}
              <Link
                to="/cookie-policy"
                className="underline underline-offset-2 hover:text-primary transition-colors"
                onClick={reject}
              >
                Leggi la Cookie Policy
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-shrink-0 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={reject}
              className="gap-1.5 text-xs"
            >
              <X className="h-3.5 w-3.5" />
              Rifiuta
            </Button>
            <Button
              size="sm"
              onClick={accept}
              className="gap-1.5 text-xs"
            >
              <Check className="h-3.5 w-3.5" />
              Accetta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
