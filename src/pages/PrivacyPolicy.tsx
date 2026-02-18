import Layout from "@/components/layout/Layout";

const sections = [
  {
    title: "1. Titolare del Trattamento",
    content: `Davide Tasuhiro – brand TASUTHOR\nP.IVA 04737580987 – Sede: Gussago (Italia)\nEmail: tasuthor@gmail.com – WhatsApp: +39 371 136 9107`,
  },
  {
    title: "2. Tipologie di dati trattati",
    content: `Raccogliamo i seguenti dati personali:\n• Dati di contatto: nome, cognome, indirizzo email, numero di telefono, ragione sociale.\n• Dati di navigazione: indirizzo IP, tipo di browser, pagine visitate, orari di accesso (tramite log di sistema e cookie tecnici).\n• Dati forniti volontariamente: messaggi, richieste di contatto, informazioni sui processi aziendali condivise durante le consulenze.\n• Dati relativi all'uso dei Servizi: interazioni con agenti AI telefonici, chatbot e automazioni.`,
  },
  {
    title: "3. Finalità e basi giuridiche del trattamento",
    content: `I dati sono trattati per le seguenti finalità:\n• Erogazione dei Servizi richiesti (base: esecuzione contrattuale – art. 6.1.b GDPR).\n• Risposta a richieste di contatto e informazioni (base: interesse legittimo / esecuzione pre-contrattuale).\n• Adempimenti fiscali e contabili (base: obbligo legale – art. 6.1.c GDPR).\n• Invio di comunicazioni commerciali, solo previo consenso esplicito (base: consenso – art. 6.1.a GDPR).\n• Miglioramento dei Servizi e sicurezza dei sistemi (base: interesse legittimo – art. 6.1.f GDPR).`,
  },
  {
    title: "4. Modalità di trattamento e conservazione",
    content: `I dati sono trattati con strumenti elettronici, nel rispetto di misure di sicurezza adeguate. I dati sono conservati per il tempo strettamente necessario alle finalità indicate e comunque non oltre:\n• 10 anni per dati fiscali/contabili (obbligo di legge).\n• 2 anni dall'ultimo contatto per dati di prospect/lead.\n• Per la durata del contratto + 5 anni per dati contrattuali.\nAlla scadenza, i dati vengono cancellati o anonimizzati.`,
  },
  {
    title: "5. Destinatari e trasferimento dei dati",
    content: `I dati possono essere comunicati a:\n• Fornitori di servizi tecnici e infrastrutturali (es. hosting, CRM, piattaforme AI/API) che agiscono come Responsabili del Trattamento.\n• Professionisti e consulenti (commercialisti, legali) vincolati da obblighi di riservatezza.\n• Autorità pubbliche, nei casi previsti dalla legge.\nAlcuni fornitori potrebbero operare al di fuori dello SEE: in tal caso il trasferimento avviene nel rispetto delle garanzie previste dal GDPR (es. Clausole Contrattuali Standard).`,
  },
  {
    title: "6. Diritti dell'interessato",
    content: `Ai sensi degli artt. 15-22 GDPR, hai il diritto di:\n• Accedere ai tuoi dati personali.\n• Richiedere la rettifica di dati inesatti.\n• Richiedere la cancellazione ("diritto all'oblio").\n• Richiedere la limitazione del trattamento.\n• Opporti al trattamento basato su interesse legittimo.\n• Richiedere la portabilità dei dati.\n• Revocare il consenso in qualsiasi momento (senza pregiudicare la liceità del trattamento precedente).\n\nPer esercitare i tuoi diritti, scrivi a tasuthor@gmail.com. Hai inoltre diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).`,
  },
  {
    title: "7. Cookie e tecnologie di tracciamento",
    content: `Il Sito utilizza cookie tecnici essenziali al funzionamento. Per ulteriori dettagli, consulta la Cookie Policy. Non utilizziamo cookie di profilazione senza il tuo consenso.`,
  },
  {
    title: "8. Sicurezza",
    content: `Adottiamo misure tecniche e organizzative adeguate a proteggere i dati da accessi non autorizzati, perdita, distruzione o divulgazione. Tuttavia, nessun sistema è infallibile: in caso di violazione che comporti rischi elevati, ti informeremo tempestivamente.`,
  },
  {
    title: "9. Modifiche alla Privacy Policy",
    content: `Questa Privacy Policy può essere aggiornata periodicamente. La versione aggiornata sarà pubblicata su questa pagina con indicazione della data di revisione. Ti invitiamo a consultarla regolarmente.`,
  },
  {
    title: "10. Contatti",
    content: `Per qualsiasi domanda relativa al trattamento dei tuoi dati:\nEmail: tasuthor@gmail.com\nWhatsApp: +39 371 136 9107\nTitolare: Davide Tasuhiro – TASUTHOR, Gussago (Italia)`,
  },
];

const PrivacyPolicy = () => (
  <Layout>
    <section className="py-24 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground text-sm">
            Ultimo aggiornamento: 6 gennaio 2026
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR).
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

export default PrivacyPolicy;
