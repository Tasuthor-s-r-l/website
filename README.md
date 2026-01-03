# TASUTHOR - Sito Vetrina

Sito vetrina professionale per **TASUTHOR**, team specializzato in soluzioni AI operative per aziende.

## Anteprima

Il sito presenta:
- **Agendo**: Agente AI telefonico 24/7
- **Chatbot AI**: Assistenti virtuali per siti web e canali digitali
- **Strategie**: Guide e automazioni commerciali (accesso tramite form)

## Struttura del Progetto

```
tasuthor-website/
├── index.html              # Pagina principale
├── privacy.html            # Privacy Policy
├── termini.html            # Termini di Servizio
├── css/
│   └── style.css           # Stili personalizzati
├── js/
│   └── main.js             # JavaScript (tema, animazioni)
├── assets/
│   ├── images/             # Immagini (placeholder)
│   └── pdf/
│       └── esempio-strategico.html  # Guida strategica di esempio (accesso tramite form)
└── README.md
```

## Tecnologie Utilizzate

- **Bootstrap 5.3** (CDN)
- **Font Awesome 6** (CDN)
- **Google Fonts** (Outfit, Space Grotesk)
- **Vanilla JavaScript**

## Funzionalità

### Tema Chiaro/Scuro
Il sito supporta la modalità dark (default) e light. Il toggle è nella navbar e la preferenza viene salvata in localStorage.

### Animazioni
- Fade-in al scroll (Intersection Observer API)
- Hover effects su cards e buttons
- Navbar trasparente che diventa solida allo scroll

### Responsive Design
- Mobile-first approach
- Menu hamburger per dispositivi mobili
- Layout ottimizzato per tutti i dispositivi

## Sviluppo Locale

1. Clona o scarica il repository
2. Apri `index.html` nel browser
3. Nessun build process richiesto!

```bash
# Opzionale: usa un server locale
npx serve .
# oppure
python -m http.server 8000
```

## Deploy su GitHub Pages

### Opzione 1: Branch principale

1. Vai su Settings > Pages nel tuo repository
2. Seleziona "Deploy from a branch"
3. Scegli `main` (o `master`) e cartella `/ (root)`
4. Salva e attendi il deploy

### Opzione 2: Cartella docs

1. Rinomina la cartella in `docs`
2. Vai su Settings > Pages
3. Seleziona la cartella `/docs`

### Opzione 3: Branch gh-pages

```bash
git checkout -b gh-pages
git push origin gh-pages
```

## Personalizzazione

### Colori
Modifica le variabili CSS in `css/style.css`:

```css
:root {
    --primary-blue: #1e3a8a;
    --accent-yellow: #fbbf24;
    /* ... altre variabili */
}
```

### Contatti
Cerca e sostituisci in tutti i file:
- Email: `tasuthor@gmail.com`
- WhatsApp: `+39 371 136 9107` / `393711369107`

### Immagini
Sostituisci i placeholder in:
- Hero section (sfondo animato CSS)
- Sezione Agendo (screenshot)
- Sezione Chatbot (demo)

Le dimensioni consigliate sono indicate nei commenti HTML.

### Strategie
Il file `assets/pdf/esempio-strategico.html` è una guida interattiva che può essere:
1. Usata così com'è (gli utenti possono stamparla come PDF dopo aver compilato il form)
2. Sostituita con un vero file PDF rinominato `esempio-strategico.pdf`

Le guide sono ora accessibili solo tramite il form di contatto in `index.html` per rispettare le normative sulla privacy.

## Link Esterni

- **Agendo Demo**: https://ai.tasuthor.com
- **WhatsApp**: https://wa.me/393711369107

## Browser Supportati

- Chrome (ultimi 2 versioni)
- Firefox (ultimi 2 versioni)
- Safari (ultimi 2 versioni)
- Edge (ultimi 2 versioni)

## Crediti

- Font: [Outfit](https://fonts.google.com/specimen/Outfit), [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- Icons: [Font Awesome](https://fontawesome.com/)
- Framework: [Bootstrap 5](https://getbootstrap.com/)

## Licenza

© 2026 TASUTHOR. Tutti i diritti riservati.

---

**Contatti**
- Email: tasuthor@gmail.com
- WhatsApp: +39 371 136 9107
- Sede: Italia

