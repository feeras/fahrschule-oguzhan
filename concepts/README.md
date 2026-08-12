# Konzeptphase – NICHT für Deployment

Der Klient hat aus der ersten Runde **Konzept 03 „Warm & Persönlich"** als
Favoriten gewählt. Dieser Ordner enthält jetzt **13 Farbvarianten dieses
Favoriten** (gleicher Aufbau, jeweils andere Palette) sowie **13 archivierte
Konzepte** aus der ersten Runde, die nicht mehr im Fokus stehen. Es handelt
sich weiterhin um eine reine **lokale Vorschau- und Entscheidungsphase**.

## Wichtig

- **Nichts hier wird auf Netlify/Fly deployed.** Diese Seiten werden lokal per
  `file://`-Pfad im Browser geöffnet und angeschaut.
- Die Root-`index.html` zeigt aktuell **temporär die Favoriten-Galerie** statt
  der Live-Seite: 13 Farbvarianten von „Warm & Persönlich" prominent oben,
  die 13 ursprünglichen Konzepte darunter, sichtbar abgesetzt als „Archiv /
  nicht Favoriten". Die Kartenzahl (`X Farbvarianten`) wird per Skript
  automatisch berechnet.
- Die bisherige Live-Seite (Dark-Theme, Orange-Akzent, v3) ist unverändert
  unter [`index.production.html`](../index.production.html) im Repo-Root
  gesichert.
- Erst wenn der Klient sich final entschieden hat, wird der gewählte Inhalt
  zurück in die echte `index.html` überführt und dann regulär deployed.

## Struktur

- [`../index.html`](../index.html) – **aktueller Einstiegspunkt**: Favoriten
  zuerst, Archiv darunter (temporär anstelle der Live-Seite)
- [`index.html`](index.html) – identische Galerie, zusätzlich hier im Ordner
- `favorit-01-*.html` … `favorit-13-*.html` – die 13 Farbvarianten des
  Favoriten (Basis: Konzept 03), identischer HTML-Aufbau, nur die
  CSS-Variablen `--bg / --card / --accent / --accent-dark / --ink / --muted /
  --blob-shadow` unterscheiden sich pro Datei
- `konzept-00…12-*.html` bzw. [`../index.production.html`](../index.production.html)
  – die 13 archivierten Konzepte aus der ersten Runde (nicht mehr Favorit)

## Die 13 Favoriten-Varianten

Die Farben wurden bewusst auf **Fahrschul-/Verkehrs-passende Töne**
eingegrenzt (Sicherheits-, Signal- und Vertrauensfarben) – keine
Pastell-/Lifestyle-Töne wie Lavendel, Altrosa oder Koralle mehr, die in
einer früheren Version noch dabei waren.

| # | Name | Akzentfarbe | Assoziation |
|---|------|-------------|-------------|
| 01 | Terracotta | `#E0703F` | Originalton des Favoriten |
| 02 | Ozeanblau | `#2E6FA7` | Vertrauen, Ruhe |
| 03 | Tannengrün | `#2F6B45` | Sicherheit, Seriosität |
| 04 | Bernstein | `#A66C10` | Warnfarbe, Achtung |
| 05 | Signalrot | `#C13B2E` | Stopp-/Warnrot aus dem Strassenverkehr |
| 06 | Ampelgrün | `#2E8B3D` | „Freie Fahrt", Go-Signal |
| 07 | Petrolblau | `#17707A` | Modern, seriös |
| 08 | Sicherheitsorange | `#D4551F` | Warnweste, Sichtbarkeit |
| 09 | Navy & Gold | `#1F3A5F` | Autorität, Vertrauen |
| 10 | Anthrazit | `#3B434B` | Modern, automotiv |
| 11 | Schiefergrau | `#4C5B6E` | Minimalistisch, kühl |
| 12 | Dunkel/Rot | `#D9695C` auf `#120E0D` | **identische Palette wie Konzept 12** (Bojan-Style Dunkel/Rot) |
| 13 | Bordeaux | `#7A2E3D` | Premium, seriös |

Alle Weiss-auf-Akzent-Kombinationen (Buttons, CTA-Band) wurden gegen die
WCAG-Kontrastformel geprüft (alle ≥ 3.2:1, die meisten ≥ 4.3:1). Bernstein
wurde deswegen von `#D69A2D` (Kontrast 2.46:1, zu blass) auf `#A66C10`
(4.4:1) abgedunkelt.

## Archivierte Konzepte (nicht mehr Favorit)

| # | Name |
|---|------|
| 00 | Original (Aktuell Live) |
| 01 | Minimal Zero |
| 02 | Klassisch & Vertrauenswürdig |
| 03 | Warm & Persönlich (Original – der gewählte Favorit, siehe oben) |
| 04 | Ausführlich & Informativ |
| 05 | Bold Statement |
| 06 | Preise zuerst |
| 07 | Editorial Magazin |
| 08 | Amtlich & Sachlich |
| 09 | WhatsApp Funnel |
| 10 | Social Proof zuerst |
| 11 | Bojan-Style (Video-Hero) |
| 12 | Bojan-Style Dunkel/Rot |

## Hinweis zu Konzept 11 (Video-Hero, archiviert)

Das Video im Hero von Konzept 11 ist ein **Platzhalter** – eine lizenzfreie
Stock-Aufnahme von Mixkit ("Blonde woman driving on road"), extern
eingebunden, keine lokale Datei. Für eine Produktivversion bräuchte es
echtes Filmmaterial von Oguzhan/der Fahrschule.
