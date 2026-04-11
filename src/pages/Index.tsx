import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Zap, ArrowRight, Calendar, BarChart3, PhoneCall, Bot, Workflow, CheckCircle2, Users, Target, Timer, ShieldCheck, HelpCircle, ChevronDown, FileText, Smartphone, MessageSquare, Code2, Mic2, Zap as ZapIcon } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { ScrollingBrands } from "@/components/ScrollingBrands";

/* ─── HERO ─── */
const HeroSection = () => (
  <section className="relative overflow-hidden pt-16 pb-10 md:pt-20 md:pb-12">
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>
    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-foreground">
          <Workflow size={14} className="text-primary" />
          Automazioni operative per PMI · Brescia e provincia
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl leading-tight">
          Smetti di rincorrere<br />
          <span className="text-gradient-brand">il lavoro manuale</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Automazioni AI su misura per PMI italiane: dalla risposta ai lead alla qualificazione vendite, fino alla raccolta documenti. Senza che il tuo team debba toccare una riga di codice.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link to="/contatti">
            <Button variant="hero" size="lg">
              Prenota una call di analisi gratuita
              <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/soluzioni">
            <Button variant="heroOutline" size="lg">
              Scopri cosa possiamo automatizzare per te
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ─── CHI SIAMO ─── */
const ChiSiamoSection = () => (
  <section className="py-14 md:py-16 bg-gradient-dark">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Non siamo un'agenzia. Siamo il reparto tech che la tua azienda non ha ancora.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Tasuthor progetta e costruisce sistemi di automazione AI che si integrano con i tuoi strumenti esistenti — CRM, email, WhatsApp, fogli di calcolo — e li trasforma in macchine operative che lavorano 24/7. Il nostro obiettivo non è venderti tecnologia, ma restituirti tempo.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: FileText, label: "Raccolta Documenti Intelligente" },
          { icon: Smartphone, label: "Automazioni Multi-piattaforma" },
          { icon: MessageSquare, label: "Social Media Automation" },
          { icon: Workflow, label: "Workflow Personalizzati con n8n" },
          { icon: Phone, label: "Agenti AI Vocali (Lead Response 24/7)" },
          { icon: Target, label: "Qualificazione Vendite Automatica (AGENDO)" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-5">
            <Icon size={20} className="shrink-0 text-primary" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PROBLEMA ─── */
const ProblemaSection = () => (
  <section className="py-14 md:py-16 bg-gradient-dark">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Riconosci qualcuno di questi?</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Ogni giorno attività ripetitive rubano ore al lavoro che conta davvero. Non è un problema di impegno — è un problema di sistema.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Target, text: "Hai mandato un preventivo 3 giorni fa e non hai ancora fatto il follow-up" },
          { icon: Workflow, text: "CRM, calendario e gestionale non si parlano — aggiorni tutto a mano" },
          { icon: BarChart3, text: "I report li fai tu, ogni settimana, ricopiando dati da posti diversi" },
          { icon: Phone, text: "Il telefono suona mentre sei con un cliente — la chiamata va persa" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="rounded-lg border border-border/50 bg-card p-6 card-hover">
            <Icon size={24} className="text-destructive mb-3" />
            <p className="text-sm text-foreground">{text}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Se hai risposto sì anche a uno solo — stai perdendo tempo e clienti ogni giorno.
      </p>
    </div>
  </section>
);

/* ─── COSA FACCIAMO ─── */
const CosaFacciamoSection = () => (
  <section className="py-14 md:py-16">
    <div className="container">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Cosa facciamo</h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Automazioni Operative Su Misura",
            problem: "Ogni azienda ha processi unici che nessun software standard può coprire.",
            solution: "Progettiamo workflow personalizzati che collegano i tuoi strumenti (Google Sheets, Drive, CRM, Telegram, WhatsApp) in un sistema unico e automatico.",
            icon: Workflow,
          },
          {
            title: "Raccolta Documenti Senza Stress",
            problem: "Raccogliere documenti dai clienti è un inferno di email, reminder, file persi e formati sbagliati.",
            solution: "Un workflow automatico invia richieste personalizzate, raccoglie i file, li organizza e notifica il team quando tutto è completo.",
            icon: FileText,
          },
          {
            title: "Risposta Lead Immediata",
            problem: "Un lead compila un form alle 22:00. Nessuno risponde fino alle 9 del mattino dopo. Il lead è già andato dalla concorrenza.",
            solution: "Un agente AI vocale risponde in <60 secondi, qualifica il lead e prenota un appuntamento nel calendario del venditore.",
            badge: "+300% tasso di conversione lead",
            icon: Phone,
          },
        ].map(({ title, problem, solution, badge, icon: Icon }) => (
          <div key={title} className="rounded-xl border border-border/50 bg-card p-6">
            <Icon size={28} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs font-medium text-destructive mb-1">Problema</p>
                <p className="text-sm text-muted-foreground">"{problem}"</p>
              </div>
              <div>
                <p className="text-xs font-medium text-primary mb-1">Soluzione Tasuthor</p>
                <p className="text-sm text-foreground">{solution}</p>
              </div>
              {badge && (
                <div className="mt-3 pt-3 border-t border-border/50">
                  <span className="inline-block text-xs font-medium text-accent bg-accent/10 rounded-full px-3 py-1">{badge}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SOCIAL PROOF ─── */
const SocialProofSection = () => (
  <section className="py-14 md:py-16">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Chi l'ha già fatto</h2>
        <p className="mt-4 text-muted-foreground">PMI che hanno automatizzato i loro processi operativi</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            sector: "Studio commercialista",
            before: "3 ore/giorno su gestione appuntamenti e reminder",
            after: "+40% appuntamenti confermati, zero no-show",
            location: "Brescia"
          },
          {
            sector: "B&B / Hospitality",
            before: "Risposte manuali a prenotazioni e info 24/7",
            after: "Risposta automatica in 30 secondi, sempre disponibile",
            location: "Lombardia"
          },
          {
            sector: "CAF",
            before: "100+ telefonate al giorno per stato pratiche",
            after: "Gestite da AGENDO, personale si concentra su consulenza",
            location: "Nord Italia"
          },
        ].map(({ sector, before, after, location }) => (
          <div key={sector} className="rounded-lg border border-border/50 bg-card p-6">
            <p className="text-xs font-medium text-accent mb-2">{sector} • {location}</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Prima</p>
                <p className="text-sm text-foreground">"{before}"</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Dopo</p>
                <p className="text-sm text-foreground font-medium text-green-500">{after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          I risultati variano in base al contesto. Prenota una mappatura per capire cosa è possibile nel tuo caso.
        </p>
      </div>
    </div>
  </section>
);

/* ─── AGENDO PREVIEW ─── */
const AgendoPreview = () => (
  <section className="py-14 md:py-16 bg-gradient-dark">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-foreground">
          Beta privata · Accesso anticipato
        </div>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-gradient-agendo">AGENDO</span> in 30 secondi
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Voice agent per chiamate inbound/outbound, gestione appuntamenti e integrazione con i tuoi sistemi. In evoluzione continua, accesso su invito.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: PhoneCall, title: "Inbound", desc: "Risponde, qualifica, raccoglie dati e smista le chiamate in arrivo" },
          { icon: Phone, title: "Outbound", desc: "Campagne di richiamo, conferme appuntamento, follow-up automatici" },
          { icon: Calendar, title: "Agenda & Calendar", desc: "Prenota, modifica e cancella appuntamenti in autonomia" },
          { icon: Workflow, title: "CRM & Workflow", desc: "Si integra via API con CRM, gestionali e calendari" },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-lg border border-accent/20 bg-card p-6 card-hover">
            <Icon size={24} className="text-accent mb-3" />
            <h4 className="font-semibold">{title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Per chi è:</strong> attività con alto volume di telefonate e prenotazioni (CAF, hospitality, studi professionali).
        </p>
      </div>
    </div>
  </section>
);

/* ─── PROCESSO ─── */
const ProcessoSection = () => (
  <section className="py-14 md:py-16">
    <div className="container">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Come lavoriamo</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { step: "01", title: "Analisi (Gratis)", desc: "Una call di 30 minuti per capire dove il tuo team perde tempo. Mappiamo i processi, identifichiamo i colli di bottiglia e ti diciamo esattamente cosa possiamo automatizzare — e cosa no." },
          { step: "02", title: "Progettazione", desc: "Disegniamo l'architettura del sistema, scegliamo gli strumenti giusti e ti presentiamo un piano chiaro con tempi e costi definiti. Nessuna sorpresa." },
          { step: "03", title: "Costruzione e Consegna", desc: "Sviluppiamo il sistema, lo testiamo in ogni scenario, ti formiamo sull'uso e lo mettiamo in produzione. Poi restiamo disponibili per ottimizzazioni e supporto." },
        ].map(({ step, title, desc }) => (
          <div key={step} className="relative rounded-lg border border-border/50 bg-card p-6">
            <span className="text-3xl font-bold text-primary/20">{step}</span>
            <h4 className="mt-2 font-semibold">{title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PERCHÉ TASUTHOR ─── */
const PercheTasuthorSection = () => (
  <section className="py-14 md:py-16 bg-gradient-dark">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl">Perché Tasuthor</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          {
            title: "Soluzioni Pronte, Non Solo Custom",
            desc: "AGENDO e il Voice Agent sono prodotti già funzionanti. Non partiamo da zero: partiamo da qualcosa che funziona già e lo adattiamo a te.",
          },
          {
            title: "Specializzati su PMI Italiane",
            desc: "Non lavoriamo con enterprise da 500 dipendenti. Lavoriamo con aziende da 5 a 50 persone che hanno bisogno di risultati concreti, non di slide.",
          },
          {
            title: "Comunicazione Diretta",
            desc: "Parli con chi costruisce il sistema. Niente project manager, niente ticket. WhatsApp, Telegram, call — come preferisci.",
          },
          {
            title: "ROI Misurabile",
            desc: "Ogni sistema che costruiamo ha KPI chiari: ore risparmiate, lead qualificati, documenti raccolti. Se non possiamo misurarlo, non lo proponiamo.",
          },
        ].map(({ title, desc }) => (
          <div key={title} className="rounded-lg border border-border/50 bg-card p-6">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── KPI ─── */
const KpiSection = () => (
  <section className="py-14 md:py-16 bg-gradient-dark">
    <div className="container">
      <h2 className="text-center text-3xl font-bold md:text-4xl">I numeri del nostro impatto</h2>
      <p className="mt-4 text-center text-muted-foreground">I risultati variano in base al contesto. La call di analisi gratuita ti dà una stima realistica per la tua situazione.</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { icon: Clock, label: "+XXX ore", value: "risparmiate al mese dai clienti" },
          { icon: Target, label: "XX%", value: "dei lead qualificati convertiti" },
          { icon: FileText, label: "XXX", value: "documenti raccolti automaticamente (ultimo trimestre)" },
          { icon: Zap, label: "<60 sec", value: "risposta media del Voice Agent" },
          { icon: Workflow, label: "XX", value: "workflow attivi 24/7" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-lg border border-border/50 bg-card p-5 text-center card-hover">
            <Icon size={24} className="mx-auto text-primary mb-2" />
            <p className="text-lg font-bold text-foreground">{label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CASI D'USO TEASER ─── */
const CasiDusoTeaser = () => (
  <section className="py-14 md:py-16">
    <div className="container">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Casi d'uso</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Users, title: "CAF & Servizi", desc: "Gestione pratiche, smistamento chiamate, raccolta documenti e prenotazione appuntamenti." },
          { icon: BarChart3, title: "Hospitality", desc: "Prenotazioni, check-in info, conferme automatiche, gestione richieste ospiti 24/7." },
          { icon: Calendar, title: "Studi & Appuntamenti", desc: "Agende ordinate, reminder automatici, follow-up post-visita e raccolta feedback." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-border/50 bg-card p-8 card-hover">
            <Icon size={28} className="text-tech-blue mb-4" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/casi-duso">
          <Button variant="heroOutline">
            Vedi i casi d'uso <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

/* ─── ACCESSO ANTICIPATO ─── */
const AccessoAnticipatoSection = () => (
  <section className="py-14 md:py-16 bg-gradient-accent">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <ShieldCheck size={40} className="mx-auto text-accent mb-4" />
        <h2 className="text-3xl font-bold md:text-4xl">Vuoi partire con priorità alta?</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Se hai un processo chiaro o un alto volume di chiamate, puoi richiedere l'accesso anticipato al nostro percorso pilota. Posti limitati, selezione su requisiti minimi.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
          {["Strumenti base (calendar/CRM)", "Referente operativo interno", "Disponibilità feedback breve"].map((r) => (
            <div key={r} className="flex items-center gap-2 justify-center text-foreground">
              <CheckCircle2 size={14} className="text-accent shrink-0" /> {r}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/contatti">
            <Button variant="accent" size="lg">
              Richiedi accesso anticipato <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ─── FAQ ─── */
const faqData = [
  { q: "Quanto costa?", a: "Prezzo fisso basato sulla complessità. Nessun costo orario. La call di analisi è gratuita." },
  { q: "Servono competenze tecniche?", a: "No. Consegniamo il sistema funzionante + documentazione + training inclusi." },
  { q: "Quanto tempo ci vuole?", a: "Automazione singola: 3–7 giorni. Sistema integrato: 2–4 settimane." },
  { q: "Funziona con gli strumenti che usiamo già?", a: "Sì. Ci integriamo con qualsiasi cosa abbia un'API: Google Workspace, HubSpot, WhatsApp, Telegram, CRM proprietari." },
  { q: "E se qualcosa si rompe?", a: "I piani Growth e Scale includono monitoraggio proattivo. Interveniamo prima che tu te ne accorga." },
  { q: "Come misuro il ritorno sull'investimento?", a: "Ogni sistema ha KPI definiti. Report mensili su ore risparmiate, lead gestiti, documenti raccolti." },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-14 md:py-16 bg-gradient-dark">
      <div className="container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Domande frequenti</h2>
        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {faqData.map((faq, i) => (
            <div key={i} className="rounded-lg border border-border/50 bg-card overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-medium text-foreground">{faq.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-muted-foreground transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && (
                <div className="border-t border-border/50 px-5 pb-5 pt-3 animate-fade-in">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA FINALE ─── */
const CtaFinale = () => (
  <section className="py-14 md:py-16">
    <div className="container">
      <div className="mx-auto max-w-2xl rounded-2xl border border-primary/30 bg-card p-10 text-center glow-primary">
        <h2 className="text-3xl font-bold">Ogni giorno che passi senza automazione, il tuo team spreca ore. Parliamone.</h2>
        <p className="mt-3 text-muted-foreground">
          Prenota una call di analisi gratuita — 30 minuti, zero impegno
        </p>
        <div className="mt-6">
          <Link to="/contatti">
            <Button variant="hero" size="lg">
              Prenota una call di analisi gratuita <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Oltre XX aziende italiane hanno già automatizzato i loro processi con noi.
        </p>
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const Index = () => (
  <Layout>
    <HeroSection />
    <ScrollingBrands />
    <ChiSiamoSection />
    <ProblemaSection />
    <CosaFacciamoSection />
    <SocialProofSection />
    <AgendoPreview />
    <ProcessoSection />
    <PercheTasuthorSection />
    <KpiSection />
    <CasiDusoTeaser />
    <AccessoAnticipatoSection />
    <FaqSection />
    <CtaFinale />
  </Layout>
);

export default Index;
