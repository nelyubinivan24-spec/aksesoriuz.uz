# Technical Decisions

This file records important technical decisions and the reasoning behind them.

## Decision 001: Static-first architecture

Status: proposed

Decision:

Use a static-first architecture for the marketing website and catalog.

Reasoning:

- The site is primarily content, SEO, and lead generation oriented.
- Static output improves speed, reliability, and hosting flexibility.
- Structured content can still support a large catalog.
- Interactive features can be isolated to focused client-side components.

## Decision 002: Astro + TypeScript + React islands

Status: proposed

Decision:

Use Astro as the primary framework, TypeScript for code quality, and React islands for interactive components such as filters, quote forms, and calculators.

Reasoning:

- Astro is strong for SEO-heavy marketing websites.
- React can be used only where interactivity is actually needed.
- The result is lighter than a full single-page application.
- Content collections and structured data fit the product catalog model.

## Decision 003: Tailwind CSS with project design tokens

Status: proposed

Decision:

Use Tailwind CSS with a deliberate project-level design system.

Reasoning:

- Fast iteration for responsive UI.
- Easy component consistency.
- Allows custom brand tokens rather than generic theme styling.

