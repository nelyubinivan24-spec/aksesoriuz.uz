# GitHub Workflow

## Branching

Default working branch prefix:

- `codex/`

Current foundation branch:

- `codex/site-rebuild-foundation`

Recommended branch pattern:

- `codex/strategy-docs`
- `codex/technical-foundation`
- `codex/homepage`
- `codex/catalog`
- `codex/product-pages`
- `codex/forms-analytics`
- `codex/qa-launch`

## Pull Requests

Each meaningful stage should be delivered through a pull request.

PRs should include:

- summary of changes;
- affected pages or documents;
- validation performed;
- open questions or known limitations.

## Commit Style

Use concise, descriptive commits:

- `docs: add project master plan`
- `docs: define conversion architecture`
- `feat: add product catalog model`
- `feat: implement homepage hero`
- `fix: improve mobile catalog filters`

## Review Gates

Approval is required before moving between major stages:

1. Strategy approval.
2. Sitemap approval.
3. UX wireframe approval.
4. UI system approval.
5. Technical foundation approval.
6. Page production approval.
7. Launch approval.

## Current Limitation

Git is available locally. GitHub CLI is not currently installed in this environment, and no remote repository is connected yet.

To push and open pull requests, connect a GitHub remote:

```bash
git remote add origin <repository-url>
git push -u origin codex/site-rebuild-foundation
```

