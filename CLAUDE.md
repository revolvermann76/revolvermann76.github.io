# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Überblick

Statische persönliche Website (revolvermann76.github.io), gebaut mit [Eleventy](https://www.11ty.dev/) (11ty v3). Inhalte liegen als Markdown/Nunjucks in `src/`, das Build-Ergebnis landet in `dist/` und wird per GitHub Actions auf GitHub Pages deployt.

## Commands

```bash
npm run serve
```
Startet den Eleventy-Dev-Server mit Live-Reload (räumt vorher `dist/` auf und erzeugt Thumbnails neu).

```bash
npm run build
```
Production-Build: löscht `dist/`, erzeugt Thumbnails, baut die Seite nach `dist/`.

```bash
npm run build:thumbnails
```
Erzeugt nur die Thumbnails (250x250, cover-crop) aus `src/images/` nach `dist/thumbnails/` via [build/thumbnail.mjs](build/thumbnail.mjs) (Sharp).

Es gibt keine Tests und keinen Linter in diesem Projekt.

## Architektur

- **Eleventy-Konfiguration**: [.eleventy.js](.eleventy.js) setzt `input: src`, `output: dist` und kopiert `src/images` und `src/assets` unverändert durch (Passthrough Copy). Neue statische Assets müssen ggf. hier als Passthrough ergänzt werden, sonst landen sie nicht in `dist/`.
- **Templates/Layout**: Ein einziges Basis-Layout [src/_includes/layout.njk](src/_includes/layout.njk) bindet Header/Footer-Snippets aus `src/_includes/snippets/` ein und rendert `content` der Seiten. Seiten sind Markdown-Dateien (`src/*.md`) mit Front-Matter (`title`, `layout: layout.njk`).
- **Styling**: Reines CSS ohne Präprozessor-Build im Skript-Flow (obwohl `sass` als Dependency vorhanden ist) — Stylesheets liegen einzeln unter `src/assets/css/` (`reset.css`, `basic.css`, `headings.css`, `header.css`, `footer.css`, `table.css`, `gallery.css`, `artwork.css`) und werden pro Snippet/Layout einzeln per `<link>` eingebunden statt zentral gebündelt.
- **Thumbnails**: Der Thumbnail-Build ([build/thumbnail.mjs](build/thumbnail.mjs)) ist ein eigenständiges Node-Skript (ESM, `sharp`), das **vor** dem eigentlichen Eleventy-Build läuft und unabhängig von der Eleventy-Pipeline direkt nach `dist/thumbnails` schreibt.
- **Deployment**: [.github/workflows/static.yml](.github/workflows/static.yml) baut und deployt bei jedem Push auf `main` automatisch nach GitHub Pages (`npm ci` → `npm run build` → Upload von `dist/`). Der lokale `master`-Branch ist nicht der Deploy-Branch — Deployment erfolgt über `main`.
