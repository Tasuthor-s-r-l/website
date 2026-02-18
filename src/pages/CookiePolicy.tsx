import Layout from "@/components/layout/Layout";

const sections = [
  {
    title: "1. Titolare del trattamento",
    content: `Titolare: Davide Tasuhiro – P.IVA 04737580987\nSede: Gussago (Italia)\nContatti: tasuthor@gmail.com – WhatsApp +39 371 136 9107`,
  },
  {
    title: "2. Cosa sono i cookie",
    content: `I cookie sono piccoli file di testo che un sito può salvare sul tuo dispositivo (computer/smartphone/tablet) mentre navighi. Servono, per esempio, a far funzionare correttamente il sito, ricordare preferenze (come il tema chiaro/scuro) o migliorare l'esperienza di navigazione.\n\nOltre ai cookie, esistono tecnologie simili, come:\n• localStorage (memorizzazione nel browser di preferenze e impostazioni);\n• sessionStorage (memorizzazione valida solo per la sessione).`,
  },
  {
    title: "3. Quali cookie/tecnologie usa TASUTHOR",
    content: `Attualmente, tasuthor.com utilizza solo cookie tecnici (in particolare cookie di sessione) per il funzionamento del sito e per migliorare l'esperienza di navigazione.\n\nInoltre:\n• utilizziamo cookie tecnici anche per gestire preferenze (es. tema chiaro/scuro);\n• utilizziamo localStorage per salvare preferenze di visualizzazione;\n• non utilizziamo cookie di profilazione o cookie di terze parti per scopi pubblicitari.`,
  },
  {
    title: "3.1 Cookie tecnici (necessari)",
    content: `Questi cookie servono a:\n• consentire la navigazione e il corretto caricamento delle pagine;\n• gestire funzionalità essenziali del sito (es. sessione);\n• memorizzare preferenze tecniche (es. tema).\n\nDurata:\n• i cookie di sessione di norma durano fino alla chiusura del browser;\n• i cookie di preferenza durano fino a scadenza o cancellazione manuale.`,
  },
  {
    title: "3.2 localStorage (tecnologia simile ai cookie)",
    content: `Usiamo il localStorage per memorizzare preferenze di visualizzazione (ad esempio impostazioni dell'interfaccia).\n\nDurata: resta memorizzato fino a quando non viene cancellato dall'utente (o dal browser).`,
  },
  {
    title: "4. Consenso: serve o non serve?",
    content: `Per i cookie tecnici normalmente non è richiesto un consenso preventivo, perché sono necessari al funzionamento del sito.\n\nSul sito è presente un banner informativo ("Accetta / Rifiuta").\n• Se clicchi Accetta, confermi la presa visione e il banner non verrà più mostrato (salvo cancellazione delle preferenze).\n• Se clicchi Rifiuta, continueremo comunque a utilizzare solo i cookie tecnici strettamente necessari. Alcune preferenze "non essenziali" (es. memorizzazione tema) potrebbero non essere ricordate.`,
  },
  {
    title: "5. Cookie di terze parti",
    content: `Attualmente non risultano cookie di profilazione o di terze parti per advertising sul dominio tasuthor.com.\n\nAttenzione ai link esterni: quando clicchi collegamenti verso servizi esterni (es. WhatsApp), atterri su piattaforme di terzi che applicano le loro informative e possono impostare cookie/tecnologie proprie.`,
  },
  {
    title: "6. Come gestire, disabilitare o cancellare cookie e localStorage",
    content: `Puoi gestire i cookie in due modi:\n\nA) Dal banner (quando disponibile)\nPuoi usare le opzioni Accetta / Rifiuta mostrate sul sito.\n\nB) Dal browser\nPuoi eliminare cookie esistenti o bloccare cookie futuri (anche tecnici).\n\nPercorsi rapidi:\n• Chrome: Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti\n• Firefox: Impostazioni → Privacy e sicurezza → Cookie e dati dei siti\n• Edge: Impostazioni → Cookie e autorizzazioni sito → Cookie e dati dei siti\n• Safari (macOS/iOS): Preferenze/Impostazioni → Privacy → Gestisci dati siti web\n\nNota: se blocchi o cancelli i cookie tecnici/localStorage, alcune funzioni (es. preferenza tema) potrebbero non funzionare correttamente.`,
  },
  {
    title: "7. Modifiche a questa Cookie Policy",
    content: `Potremmo aggiornare questa Cookie Policy per adeguamenti tecnici o normativi. La versione aggiornata verrà pubblicata sul sito indicando la data di "Ultimo aggiornamento".`,
  },
  {
    title: "8. Contatti",
    content: `Per domande su cookie e privacy:\ntasuthor@gmail.com – WhatsApp +39 371 136 9107`,
  },
];

const CookiePolicy = () => (
  <Layout>
    <section className="py-24 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Cookie Policy</h1>
          <p className="mt-4 text-muted-foreground text-sm">
            Ultimo aggiornamento: 6 gennaio 2026
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Informativa sull'uso dei cookie e delle tecnologie simili sul sito tasuthor.com.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="rounded-xl border border-border/50 bg-card p-8">
              <h2 className="mb-4 text-lg font-bold text-foreground">{s.title}</h2>
              <p className="whitespace-pre-line text-sm text-muted-foreground leading-relaxed">
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default CookiePolicy;
