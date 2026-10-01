# Architecture
- Home sections live one-per-file in src/components/home and are ordered only in src/routes/index.tsx — keeps sections independently editable.
- Navigation, anchors and CTA are defined in src/config/site.ts — future internal pages only change hrefs there.
- Shared chrome (Header, Footer, Container, Section) lives in src/components/layout — consistent responsive spacing.
