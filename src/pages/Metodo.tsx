import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Users, MessageSquare, Settings, Workflow, Brain, Handshake, TrendingUp } from "lucide-react";

const Metodo = () => (
  <Layout>
    <section className="py-24 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Il nostro metodo</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Non arriviamo con soluzioni preconfezionate. Prima capiamo come lavori tu, poi costruiamo un sistema automatico che si adatta alla tua realtà — e cresce con te.
          </p>
        </div>
      </div>
    </section>

    {/* 4 step */}
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Dal primo contatto ai risultati</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Ogni fase è pensata per essere concreta, veloce e misurabile. Niente mesi di consulenza teorica.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery & Mappatura",
              desc: "Call gratuita di 30–60 minuti. Non parliamo solo di strumenti — capiamo come lavori, dove stai perdendo tempo, e quali processi puoi delegare a un sistema. Il tuo referente operativo è fondamentale in questa fase.",
              tag: "Giorno 1",
              color: "text-primary",
            },
            {
              step: "02",
              title: "Sprint di implementazione",
              desc: "In 7–14 giorni costruiamo le automazioni, le integriamo con i tuoi strumenti esistenti e le testiamo con dati reali. Tu non cambi nulla — il sistema si adatta a come lavori già.",
              tag: "Giorni 2–14",
              color: "text-tech-blue",
            },
            {
              step: "03",
              title: "Testing & ottimizzazione",
              desc: "2–4 settimane di utilizzo reale. Monitoriamo i KPI, raccogliamo il feedback tuo e del tuo team, e ottimizziamo i flussi. I numeri prima/dopo sono il tuo punto di riferimento.",
              tag: "Settimane 2–4",
              color: "text-accent",
            },
            {
              step: "04",
              title: "Crescita continua",
              desc: "Una volta validato il primo processo, si scala. Nuovi flussi, nuovi reparti, nuovi obiettivi. Il percorso è tuo — noi siamo il partner tecnico che lo realizza.",
              tag: "In continuo",
              color: "text-primary",
            },
          ].map(({ step, title, desc, tag, color }) => (
            <div key={step} className="rounded-lg border border-border/50 bg-card p-6">
              <span className={`text-3xl font-bold ${color} opacity-30`}>{step}</span>
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <span className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Elemento umano */}
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">L'IA potenzia le persone — non le sostituisce</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Automatizziamo le attività ripetitive e a basso valore. Il tuo team continua a fare il lavoro che richiede competenza, relazione e giudizio — solo con meno peso sulle spalle.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "Il referente operativo conta",
                desc: "C'è sempre una persona interna che collabora con noi. La sua conoscenza del business è insostituibile — noi forniamo il sistema, lei lo conosce dall'interno.",
              },
              {
                icon: Handshake,
                title: "Un percorso condiviso",
                desc: "Non consegniamo automazioni e spariam. Costruiamo il sistema insieme, passo dopo passo, adattandolo al modo in cui già lavora il tuo team.",
              },
              {
                icon: TrendingUp,
                title: "Crescita, non sostituzione",
                desc: "L'obiettivo non è eliminare lavoro — è permettere al tuo team di fare di più, meglio, con meno attrito. Ogni ora recuperata è un'ora reinvestita in ciò che conta.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-lg border border-border/50 bg-card p-6">
                <Icon size={28} className="text-primary mb-3" />
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Cosa consegniamo */}
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Cosa consegniamo</h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            { icon: Workflow, label: "Automazioni operative", desc: "Flussi di automazione funzionanti e documentati" },
            { icon: FileText, label: "Documentazione", desc: "Schema flussi, configurazioni, accessi" },
            { icon: Users, label: "Training", desc: "Sessione operativa per il tuo team" },
            { icon: Settings, label: "Monitoraggio", desc: "Dashboard KPI e alert automatici" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-5">
              <Icon size={20} className="mt-0.5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Governance */}
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <MessageSquare size={40} className="mx-auto text-tech-blue mb-4" />
          <h2 className="text-3xl font-bold">Come rimaniamo allineati</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Call settimanale breve con il tuo referente operativo. Report KPI condiviso. Feedback loop continuo. Nessun meeting inutile — solo allineamento su ciò che conta.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Il tuo referente interno è il ponte tra la tua realtà operativa e il sistema che costruiamo insieme. È la figura più importante del progetto.
          </p>
        </div>
      </div>
    </section>

    {/* Requisiti minimi */}
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Requisiti minimi per partire</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
            {[
              "Almeno un processo ripetitivo identificato",
              "Strumenti base in uso (calendar, CRM o gestionale)",
              "Un referente operativo interno",
              "Disponibilità per call settimanale breve",
            ].map((r) => (
              <div key={r} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={14} className="text-primary shrink-0" /> {r}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/contatti">
              <Button variant="hero" size="lg">Prenota la mappatura <ArrowRight size={18} /></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Metodo;
