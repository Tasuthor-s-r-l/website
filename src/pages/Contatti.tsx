import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const Contatti = () => {
  const [form, setForm] = useState({
    nome: "", azienda: "", settore: "", problema: "", strumenti: "", email: "", telefono: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder — in production connect to backend
    alert("Grazie! Ti contatteremo entro 24 ore per fissare la mappatura.");
  };

  return (
    <Layout>
      <section className="py-24 bg-gradient-dark">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Prenota la tua mappatura</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              30 minuti per analizzare i tuoi processi e capire dove possiamo portare valore. Gratuita, senza impegno.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Contattaci</h2>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:tasuthor@gmail.com" className="hover:text-primary transition-colors">
                    tasuthor@gmail.com
                  </a>
                </div>

                {/* WhatsApp */}
                <button
                  onClick={() => window.open("https://wa.me/39371136107", "_blank")}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-whatsapp transition-colors cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.22 8.22 0 0 1 2.42 5.82c0 4.54-3.69 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.19-.32A8.16 8.16 0 0 1 3.8 11.9c.01-4.54 3.7-8.23 8.24-8.23zM8.53 7.33c-.16 0-.43.06-.66.31C7.65 7.89 7 8.5 7 9.71c0 1.22.89 2.39 1.02 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.3-.25-.13-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.13-.11.11-.41.45-.62.69-.14.14-.3.16-.52.07-.25-.12-1-.37-1.89-1.17-.71-.64-1.2-1.43-1.33-1.68-.13-.25-.01-.39.11-.52.15-.17.33-.42.47-.57.1-.12.16-.22.25-.39.09-.18.03-.34-.04-.47-.06-.12-.56-1.34-.79-1.84-.19-.44-.41-.43-.57-.44-.13 0-.35 0-.53 0z"/>
                  </svg>
                  +39 371 136 9107
                </button>

                {/* Location */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={18} className="text-primary shrink-0" />
                  Gussago (Italia)
                </div>
              </div>

              <div className="rounded-lg border border-border/50 bg-card p-6">
                <h3 className="font-semibold text-sm">Calendario</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Embed calendario in arrivo. Per ora, compila il form e ti proporremo uno slot entro 24h.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { key: "nome", label: "Nome e cognome", type: "text" },
                    { key: "azienda", label: "Azienda", type: "text" },
                    { key: "email", label: "Email", type: "email" },
                    { key: "telefono", label: "Telefono", type: "tel" },
                  ].map(({ key, label, type }) => (
                    <div key={key}>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">{label}</label>
                      <input
                        type={type}
                        required
                        value={(form as any)[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Settore</label>
                  <select
                    value={form.settore}
                    onChange={(e) => setForm({ ...form, settore: e.target.value })}
                    className="w-full rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Seleziona...</option>
                    <option>CAF / Servizi</option>
                    <option>Hospitality / B&B</option>
                    <option>Studio professionale</option>
                    <option>Retail / Commercio</option>
                    <option>Artigianato strutturato</option>
                    <option>Altro</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Problema principale</label>
                  <textarea
                    rows={3}
                    value={form.problema}
                    onChange={(e) => setForm({ ...form, problema: e.target.value })}
                    className="w-full rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Descrivi brevemente il processo o la sfida principale..."
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Strumenti usati</label>
                  <input
                    type="text"
                    value={form.strumenti}
                    onChange={(e) => setForm({ ...form, strumenti: e.target.value })}
                    className="w-full rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="CRM, calendario, gestionale..."
                  />
                </div>

                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                  Prenota la mappatura <ArrowRight size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
