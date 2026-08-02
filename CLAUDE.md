# Fahrschule Oguzhan – Projektregeln

## Verbindliche Regel: Responsive auf allen 3 Geräteklassen

**Jede Änderung an einer HTML/CSS-Seite in diesem Projekt (Live-Seite,
`index.production.html`, oder ein Konzept unter `concepts/`) muss auf allen
drei Breakpoints geprüft werden, bevor sie als fertig gilt:**

| Geräteklasse | Breite (Richtwert) |
|---|---|
| Mobile | 375px |
| Tablet | 768px |
| Desktop | 1280px+ |

Konkret heisst das:
- Kein horizontales Scrollen auf keiner der drei Breiten.
- Text bleibt lesbar (keine abgeschnittenen/überlappenden Wörter, keine zu
  kleine Schrift).
- Grids/Spalten brechen sinnvoll um (z. B. 3-spaltig → 1-spaltig auf Mobile,
  nicht erst bei sehr kleinen Breiten).
- Buttons/Touch-Targets bleiben auf Mobile gut antippbar (min. ~44px Höhe).
- Bilder/Videos skalieren mit, ohne Layout zu sprengen.
- Bei neuen Konzepten: mindestens ein `@media (max-width: …)`-Block für
  Mobile/Tablet einbauen, nicht nur für Desktop optimieren.

Vor dem Abschluss einer Aufgabe: mit dem Browser-Tool `resize_window`
(Presets `mobile`, `tablet`, `desktop`) die betroffene(n) Seite(n) tatsächlich
in allen drei Grössen ansehen/screenshotten – nicht nur den CSS-Code lesen
und annehmen, dass es passt.

## Kontext

Dieses Projekt befindet sich aktuell in der **Konzeptphase** (siehe
[`concepts/README.md`](concepts/README.md)). Alle Konzeptseiten sind
in sich geschlossene, statische HTML-Dateien mit Inline-CSS – kein Build,
kein Deployment während dieser Phase.
