import Layout from "@/components/layout/Layout";

const sections = [
  {
    title: "0. Titolare del Servizio e contatti",
    content: `I presenti Termini regolano l'uso del sito e dei servizi offerti con il brand TASUTHOR ("TASUTHOR", "noi", "Fornitore").\nTitolare: Davide Tasuhiro – P.IVA 04737580987\nSede: Gussago (Italia)\nContatti: tasuthor@gmail.com – WhatsApp +39 371 136 9107`,
  },
  {
    title: "1. Definizioni",
    content: `Sito: il sito web TASUTHOR e le sue pagine.\nServizi: soluzioni AI e automazioni, incluse (a titolo esemplificativo) agente AI telefonico ("Agendo"), chatbot AI, consulenza, implementazione e materiali premium (PDF/guide).\nCliente / Utente: chi utilizza il Sito o acquista/usa i Servizi (persona fisica o giuridica).\nOrdine / Proposta / Contratto di servizio: documento che definisce prezzi, durata, deliverable e condizioni specifiche (preventivo, email, proposta firmata, ordine).\nOutput: risultati generati dai Servizi (testi, risposte, automazioni, report, configurazioni, ecc.).`,
  },
  {
    title: "2. Ambito di applicazione e accettazione",
    content: `2.1. Usando il Sito o i Servizi, accetti questi Termini.\n2.2. Se non accetti i Termini, non utilizzare Sito e Servizi.\n2.3. In caso di conflitto tra questi Termini e un Contratto di servizio specifico, prevale il Contratto di servizio limitatamente alle parti in conflitto.`,
  },
  {
    title: "3. Descrizione dei Servizi",
    content: `3.1. Agente AI telefonico (Agendo): assistente automatico per gestione chiamate, raccolta informazioni, qualificazione richieste, smistamento e prenotazione appuntamenti (anche tramite integrazioni come calendari e CRM).\n3.2. Chatbot AI: assistenti virtuali integrabili su sito e canali di messaggistica (es. WhatsApp/Telegram), con personalizzazione e funzioni di supporto, lead generation e automazioni.\n3.3. Materiali premium / PDF: guide operative e documentazione strategica.\n3.4. Consulenza e implementazione: analisi, setup, personalizzazione, ottimizzazione e assistenza.`,
  },
  {
    title: "4. Collaborazione e responsabilità operative",
    content: `4.1. Per erogare correttamente i Servizi, TASUTHOR può richiedere dati, accessi, contenuti (FAQ, script, policy) e feedback.\n4.2. Ritardi o mancate risposte del Cliente possono incidere su tempi e risultati: in tali casi i termini possono slittare senza responsabilità per TASUTHOR.`,
  },
  {
    title: "5. Uso consentito e divieti",
    content: `È vietato usare i Servizi per:\n• attività illecite, fraudolente o lesive di diritti di terzi;\n• spam o campagne non conformi a consensi/opt-out;\n• trattare dati personali senza adeguata base giuridica e informativa;\n• violare sicurezza, aggirare limiti tecnici, fare reverse engineering o interferire con sistemi.\nTASUTHOR può sospendere o interrompere i Servizi in caso di violazioni o rischi di sicurezza/legali.`,
  },
  {
    title: "6. Regole specifiche per servizi telefonici (Agendo)",
    content: `6.1. Trasparenza: il Cliente è responsabile di informare gli utenti/contatti che interagiscono con sistemi automatizzati e di gestire informative/consensi ove necessari (es. registrazioni, marketing).\n6.2. Chiamate in uscita: se abilitate, il Cliente garantisce base giuridica, rispetto opt-out e normativa applicabile.\n6.3. No emergenze: il servizio non sostituisce numeri di emergenza. Il Cliente deve predisporre fallback per casi critici.`,
  },
  {
    title: "7. Regole specifiche per Chatbot e canali di messaggistica",
    content: `7.1. Il Cliente è responsabile dei contenuti forniti al chatbot e della conformità delle conversazioni alle normative applicabili.\n7.2. Il Cliente è responsabile anche del rispetto dei termini dei provider dei canali (es. WhatsApp/Telegram).`,
  },
  {
    title: "8. Natura dell'AI, limiti degli Output",
    content: `8.1. Gli Output possono essere inesatti, incompleti o non aggiornati.\n8.2. Il Cliente deve verificare gli Output prima di usarli per decisioni operative o comunicazioni vincolanti.\n8.3. Salvo accordo scritto, i Servizi non costituiscono consulenza legale/fiscale/medica.`,
  },
  {
    title: "9. Integrazioni con terze parti",
    content: `9.1. Alcune funzioni dipendono da strumenti terzi (API, provider, CRM, calendari, piattaforme).\n9.2. Modifiche o disservizi dei terzi possono incidere sulle integrazioni senza responsabilità di TASUTHOR.\n9.3. Il Cliente gestisce licenze, account e costi dei servizi terzi.`,
  },
  {
    title: "10. Prezzi, pagamenti e fatturazione",
    content: `10.1. Prezzi, modalità e scadenze sono definiti nel Contratto di servizio/preventivo.\n10.2. Il mancato pagamento può comportare sospensione dei Servizi fino a saldo.\n10.3. Costi di terze parti (licenze/API/crediti) restano a carico del Cliente, salvo diverso accordo.`,
  },
  {
    title: "11. Recesso, cancellazione e rimborsi",
    content: `11.1. B2B: salvo diverso accordo scritto, attività su misura già avviate non sono rimborsabili.\n11.2. B2C: se applicabile, valgono le norme sul recesso; per contenuti digitali/servizi iniziati, il recesso può essere escluso o limitato nei casi previsti dalla legge.\n11.3. Costi "pass-through" di terze parti già maturati non sono rimborsabili.`,
  },
  {
    title: "12. Proprietà intellettuale e licenze",
    content: `12.1. TASUTHOR mantiene i diritti su tecnologia, template, prompt, framework, workflow e know-how preesistenti.\n12.2. Materiali premium/PDF: licenza d'uso non esclusiva e non trasferibile per uso interno; vietata redistribuzione senza autorizzazione.\n12.3. Deliverable su misura: licenza d'uso al Cliente per le finalità concordate; componenti riutilizzabili restano di TASUTHOR salvo diverso accordo scritto.`,
  },
  {
    title: "13. Riservatezza",
    content: `Le parti si impegnano a non divulgare informazioni confidenziali apprese durante il rapporto, salvo obblighi di legge.`,
  },
  {
    title: "14. Privacy e protezione dei dati",
    content: `Il trattamento dei dati personali è disciplinato dalla Privacy Policy pubblicata sul Sito.\nQuando TASUTHOR tratta dati per conto del Cliente, le parti possono formalizzare ruoli e istruzioni (es. accordo/nomina/DPA) se necessario.`,
  },
  {
    title: "15. Disponibilità, manutenzione e modifiche",
    content: `Il servizio può essere soggetto a manutenzioni e aggiornamenti. Non si garantisce continuità ininterrotta o assenza di errori.`,
  },
  {
    title: "16. Limitazioni di responsabilità",
    content: `Nei limiti consentiti dalla legge:\n• TASUTHOR non è responsabile per danni indiretti, perdita di profitto o danno reputazionale;\n• TASUTHOR non è responsabile per disservizi imputabili a terze parti;\n• il Cliente resta responsabile dell'uso finale degli Output e della conformità delle proprie campagne/comunicazioni.\n\nSalvo dolo o colpa grave e norme inderogabili, la responsabilità complessiva di TASUTHOR è limitata agli importi pagati dal Cliente nei 12 mesi precedenti l'evento (o al valore del Contratto, se inferiore).`,
  },
  {
    title: "17. Manleva",
    content: `Il Cliente manleva TASUTHOR da reclami/sanzioni derivanti da uso illecito dei Servizi, mancanza di consensi/informative, contenuti forniti dal Cliente o violazioni di policy di terze parti.`,
  },
  {
    title: "18. Sospensione e cessazione",
    content: `TASUTHOR può sospendere/terminare l'accesso ai Servizi per violazioni, rischi di sicurezza o richieste dell'autorità. Restano dovuti gli importi maturati.`,
  },
  {
    title: "19. Modifiche ai Termini",
    content: `TASUTHOR può modificare i Termini pubblicando la versione aggiornata sul Sito. L'uso continuato dei Servizi implica accettazione.`,
  },
  {
    title: "20. Legge applicabile e foro competente",
    content: `20.1. I Termini sono regolati dalla legge italiana.\n20.2. Per i rapporti B2B, per ogni controversia è competente in via esclusiva il Foro di Brescia.\n20.3. Per i consumatori (B2C), il foro competente è quello previsto dalla normativa a tutela del consumatore.`,
  },
  {
    title: "21. Contatti",
    content: `Titolare: Davide Tasuhiro – P.IVA 04737580987\nSede: Gussago (Italia)\nContatti: tasuthor@gmail.com – WhatsApp +39 371 136 9107`,
  },
];

const TerminiServizio = () => (
  <Layout>
    <section className="py-24 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Termini di Servizio</h1>
          <p className="mt-4 text-muted-foreground text-sm">
            Ultimo aggiornamento: 6 gennaio 2026
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            I presenti Termini regolano l'uso del sito e dei servizi offerti con il brand TASUTHOR.
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

export default TerminiServizio;
