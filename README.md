# Build on Claw — Autonomous Agent Gallery

A community-curated showcase of 33 real-world use cases for [OpenClaw](https://github.com/openclaw), an open-source AI agent that runs on your computer and connects to messaging apps.

**Live site:** https://jkurn.github.io/autonomous-agent-gallery/

## What's Inside

- **33 use cases** across 5 categories: Everyday Life, Work, Multi-Agent, Smart Home, and Unhinged
- **Interactive Risk/Reward Matrix** — scatter plot visualizing capability vs. risk for each use case
- **Money Section** — highlights cases with quantified financial impact
- **Security Callout** — real-world warnings about autonomous agent risks

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Deployed via GitHub Pages

## Local Development

```sh
# Install dependencies
bun install

# Start dev server on port 8080
bun run dev

# Build for production
bun run build

# Run tests
bun run test
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
