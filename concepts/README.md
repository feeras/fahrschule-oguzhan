# Konzeptphase – NICHT für Deployment

Dieser Ordner enthält **11 neue Design-Konzepte plus das ursprüngliche Live-Design**
(Kategorie 00) für die Fahrschule-Oguzhan-Website, die dem Klienten zur Auswahl
vorgelegt werden. Es handelt sich um eine reine **lokale Vorschau- und
Entscheidungsphase**.

## Wichtig

- **Nichts hier wird auf Netlify/Fly deployed.** Diese Seiten werden lokal per
  `file://`-Pfad im Browser geöffnet und angeschaut – kein Build, kein Push,
  keine Deploy-Kosten.
- Die Root-`index.html` zeigt aktuell **temporär die Konzept-Galerie** statt
  der Live-Seite, damit man beim Öffnen des Projekts sofort alle Entwürfe
  sieht und per Klick zum jeweiligen Konzept weitergeleitet wird. Die Anzahl
  im Titel (`X Konzepte zur Auswahl`) wird per Skript automatisch aus der
  Kartenanzahl berechnet – sie muss beim Hinzufügen neuer Konzepte **nicht**
  mehr manuell angepasst werden.
- Die bisherige Live-Seite (Dark-Theme, Orange-Akzent, v3) ist unverändert
  unter [`index.production.html`](../index.production.html) im Repo-Root
  gesichert.
- Erst wenn der Klient sich für ein Konzept entschieden hat, wird dessen Inhalt
  zurück in die echte `index.html` überführt (oder als neue Basis übernommen)
  und dann regulär deployed. `index.production.html` kann danach gelöscht
  oder als Referenz behalten werden.

## Struktur

- [`../index.html`](../index.html) – **aktueller Einstiegspunkt**: Galerie
  aller Konzepte zum Durchklicken (temporär anstelle der Live-Seite)
- [`index.html`](index.html) – identische Galerie, zusätzlich hier im Ordner
- [`../index.production.html`](../index.production.html) – das ursprüngliche
  Live-Design, als Kategorie 00 in der Galerie eingebunden
- `konzept-01-*.html` … `konzept-11-*.html` – einzelne, in sich geschlossene
  Konzeptseiten (eigenes Inline-CSS, nutzen Bilder aus `../images/`)

## Konzepte im Überblick

| # | Name | Charakter |
|---|------|-----------|
| 00 | Original (Aktuell Live) | Das bisherige Design, unverändert, zum Vergleich |
| 01 | Minimal Zero | Ein Screen, kaum Text, ein CTA |
| 02 | Klassisch & Vertrauenswürdig | Helles Corporate-Layout, gewohnte Fahrschul-Struktur |
| 03 | Warm & Persönlich | Cremefarben, rund, familiär, storytelling |
| 04 | Ausführlich & Informativ | Textlastig, FAQ, Detailwissen zum CH-Führerschein |
| 05 | Bold Statement | Dunkel, laut, grosse Typografie, Marquee |
| 06 | Preise zuerst | Preis-Karten direkt above the fold |
| 07 | Editorial Magazin | Grosse Fotos, Serif, Zitate, Reportage-Stil |
| 08 | Amtlich & Sachlich | Sie-Form, nüchtern, tabellarisch, behördlich |
| 09 | WhatsApp Funnel | Ein Screen, ein Button, fertig |
| 10 | Social Proof zuerst | Bewertungen/Sterne im Zentrum |
| 11 | Bojan-Style (Video-Hero) | Angelehnt an bojan-fahrschule.ch, Vollbild-Video zu Beginn |
| 12 | Bojan-Style Dunkel/Rot | Gleiches Layout-Pattern, modern &amp; dunkel, schwarzer Grundton mit Rot als Akzent |

Jede Seite nutzt echte Inhalte (Preise, Adresse, Leistungen) der Fahrschule
Oguzhan, damit der Vergleich realistisch ist – kein Lorem Ipsum.

## Hinweis zu Konzept 11 (Video-Hero)

Das Video im Hero von Konzept 11 ist ein **Platzhalter** – eine lizenzfreie
Stock-Aufnahme von Mixkit ("Blonde woman driving on road", Rücksitz-/
Beifahrer-Perspektive beim Autofahren, kostenlose Mixkit-Lizenz, keine
Namensnennung nötig, extern eingebunden, keine lokale Datei). Sie zeigt
bewusst eine Fahrszene, aber noch nicht Oguzhan oder sein echtes
Schulungsfahrzeug. Für die Produktivversion braucht es echtes Filmmaterial
von Oguzhan/der Fahrschule – das Video wird dann lokal unter `videos/`
abgelegt und referenziert.
