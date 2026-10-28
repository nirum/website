# Niru Maheswaranathan's website

[niru.dev](https://niru.dev), built with Next.js and Tailwind CSS. Everything is
exported as static files: no runtime server, database, CMS, or Pages Functions.

## Development

Use Node.js 22 (see `.node-version`).

```sh
npm install
npm run dev
npm test
npm run build
```

`npm run build` exports the site to `out/`, then generates `rss.xml`, `sitemap.xml`,
and `robots.txt` inside it. Production builds explicitly use Webpack: browser
testing of Next.js 16.2.6's default Turbopack export surfaced an intermittent
client middleware-manifest loading failure that blocked hydration. The Webpack
export passed reload, theme-toggle, and client-navigation checks.
`npm run export` is an alias for the full build; modern
Next.js no longer has a separate `next export` command. `next start` is not a
static-file preview server. To check the exact export locally, run:

```sh
python3 -m http.server 3000 --directory out
```

Visit `http://localhost:3000/`. Python is only a local preview convenience, not a
build or hosting requirement. RSS and sitemap are generated during production
builds, so they are not available in `npm run dev`.

## Publishing a post

1. Add `content/blog/my-post.md`. The filename becomes `/blog/my-post/`; use
   lowercase letters, numbers, and hyphens. Keep published filenames stable to
   preserve URLs.
2. Use the frontmatter below and write Markdown after it. See
   [the example post](content/blog/welcome.md) for headings, links, images,
   lists, quotes, and a highlighted code block.
3. Preview with `npm run dev`, run `npm test` and `npm run build`, and commit the
   post and any images. Once Cloudflare Git integration is connected, pushing to
   the production branch automatically publishes the change. A pull request
   provides a preview before merging.

```markdown
---
title: 'My post'
date: '2026-10-28'
description: 'A short summary for search engines, the blog index, and RSS.'
tags:
  - research
draft: false
---

## A heading

Write the post here.
```

`title`, `date` (quoted `YYYY-MM-DD`, UTC), and `description` are required. `tags`
is an optional list of strings. `draft: true`, a `draft` tag, and dates after the
build's UTC date exclude a post from the index, routes, RSS, and sitemap. Invalid
frontmatter fails the build with a filename-specific error. Future posts need a
new build on or after their date; there is no automatic scheduled publishing.
Drafts are excluded locally too; change the flag to preview one.

Put images in `public/blog/` and reference them as
`![Descriptive alternative text](/blog/image.png)`. Files in `public/` keep their
paths in the export. Commit these files so clean Cloudflare builds have them.
Use fenced code blocks with a language such as `python`, `javascript`, or `bash`.
Unknown languages render as plain code. Rendering and syntax highlighting happen
at build time. Raw HTML and executable MDX are intentionally unsupported; the
Markdown content remains portable and generated HTML is sanitized.

Titles, descriptions, canonical links, and Open Graph metadata are generated for
each page and post. The canonical production origin is defined once in
`lib/site.js` as `https://niru.dev`; preview deployments retain this origin.
RSS at `/rss.xml` contains post summaries and links. The sitemap includes all
existing content pages, the blog index, and published posts.

## Cloudflare Pages setup (account owner)

No Cloudflare account or GitHub authorization has been configured by this change.
Use Cloudflare's native Git integration; no deployment tokens, FTP, Wrangler,
Workers adapter, or extra GitHub deployment workflow are needed.

1. Push these changes to a branch in `nirum/website` and open a pull request.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Import
   an existing Git repository**. Authorize the Cloudflare GitHub App for this
   repository and select it. Choose Git integration when creating the project.
3. Use these settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Next.js (Static HTML Export) |
   | Production branch | `master` (the current default branch) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | Repository root |
   | Node version | 22, read from `.node-version` |

   If you intentionally change the default branch to `main`, select `main`
   instead. No branch rename is needed for Pages. Leave runtime bindings and
   Functions unset, and choose the free plan. Cloudflare installs dependencies
   from the committed package files.
4. Under **Settings → Builds → Branch control**, enable automatic production
   deployments and preview builds for nonproduction branches. Allow the PR
   branch. GitHub checks and PR preview links appear after authorization.
5. Keep Linode and existing DNS unchanged. First deploy and test on
   `https://<project>.pages.dev`. The current `master` lacks these blog changes
   until merged; test the feature branch's preview deployment before merging.
6. Verify the checklist below, then merge to the selected production branch to
   enable automatic production updates on the Pages URL. Attaching the existing
   domain is a separate, explicitly approved step.

Cloudflare documents the [static Next.js preset](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
and [Git integration and previews](https://developers.cloudflare.com/pages/configuration/git-integration/).
The free plan currently permits 500 builds/month, one concurrent build, 20,000
files per site, and 25 MiB per file; production and preview builds share the build
allowance. See [Pages limits](https://developers.cloudflare.com/pages/platform/limits/).
Keep large downloads within the asset limit and avoid committing secrets to
public assets or content. No paid service is required by this implementation.

## Verification before domain cutover

- Run `npm test` and `npm run build`; check `out/` contains `index.html`,
  `about/index.html`, `research/index.html`, `code/index.html`, `blog/index.html`,
  each published post's `index.html`, `404.html`, `rss.xml`, and `sitemap.xml`.
- On Pages, open and reload every existing route and a post URL directly. Test
  `/about` and `/about/`, post links, RSS, and a nonexistent URL (must be a 404).
  Existing trailing-slash paths remain unchanged.
- Compare home, About, Research, and Code with Linode. Check fonts, all publication
  images, the profile photo, favicon, external/PDF links, light/dark mode, mobile
  navigation, keyboard focus, and horizontally scrollable code blocks.
- Inspect page source for unique titles/descriptions, canonical URLs under
  `https://niru.dev/`, and `og:type=article` on posts. Parse RSS/sitemap as XML and
  confirm that only published posts appear. Subscribe to `/rss.xml` in a reader.
- The profile photo, favicon, and all ten publication images are now committed
  at their original paths. Inventory the live site's other downloads and URLs
  before cutover. The recovered `thesis.pdf` is 35,620,123 bytes, above Pages'
  25 MiB per-file limit; lossless stream recompression did not bring it below
  that limit. It is not included in the export. Before cutover, provide a smaller
  approved web copy at `/thesis.pdf` or arrange separate hosting and a redirect
  preserving that URL. Keep the original PDF and Linode copy until resolved.
- Preview deployments receive Cloudflare's `X-Robots-Tag: noindex` by default.
  The production `pages.dev` URL is different: if needed, protect it during
  staging with Cloudflare Access. Canonical links already point to `niru.dev`.

## Domain migration (only after explicit approval)

Do not change live DNS or remove Linode until the Pages preview is verified and
the domain migration is approved. First export the current DNS zone and record
the Linode web IPs, record types, TTLs, existing redirects, and authoritative
nameservers for rollback.

1. For the apex `niru.dev`, Pages requires the domain to be a zone in the same
   Cloudflare account using Cloudflare authoritative nameservers. If DNS is
   currently elsewhere, add the zone on the **Free** plan and reconcile every
   record before any nameserver change. Cloudflare's automatic import may be
   incomplete. Keep web records pointing to Linode while preparing the zone.
2. Preserve all MX records, mail-host A/AAAA/CNAME records, SPF/DKIM/DMARC TXT
   records, verification TXT records, CAA, SRV, and unrelated subdomains. Keep
   mail hosts DNS-only. If mail records point at the website's apex, separate
   the mail destination before replacing that web record. Review DNSSEC with
   the registrar: stale DS records from the old provider can break the entire
   domain when nameservers change. Coordinate disabling/re-enabling DNSSEC.
3. After approval, switch nameservers at the registrar if required, and verify
   the unchanged Linode website and email still work through the new DNS zone.
   Transferring domain registration is unnecessary.
4. In **Pages project → Custom domains → Set up a domain**, add `niru.dev`.
   Follow the wizard to replace conflicting apex web A/AAAA/CNAME records with
   its Pages CNAME target (`<project>.pages.dev`, flattened at the apex).
   Change only the web records; preserve mail and unrelated records.
5. Add `www.niru.dev` separately if it exists today. For a subdomain with an
   external DNS provider, register it in Pages first, then create its CNAME to
   `<project>.pages.dev` at that provider. Do not create the CNAME without first
   associating the domain with Pages. Reproduce any existing `www`/apex or
   legacy-path redirects and select the canonical host `niru.dev`.
6. Wait for domain activation and HTTPS issuance; restrictive CAA records can
   block certificates. Test HTTPS, old URLs, assets, RSS, sitemap, and email from
   outside your network. Allow DNS caches to expire. Keep Linode available
   through this verification window and retain its files and configuration.
7. If validation fails, restore the saved Linode web DNS records. Pages rollback
   can restore a previous Pages deployment after later content regressions.
   Decommission Linode only with separate approval, after confirming it serves
   no other sites, email, or services. Any existing Linode bill continues until
   that separately approved decommissioning.

See Cloudflare's [custom domain requirements](https://developers.cloudflare.com/pages/configuration/custom-domains/).
No DNS changes or production deployment actions are performed by `npm run build`.

## Audit notes and remaining risks

- Baseline: Next.js 16.2.6, React 19.2.3, Tailwind CSS 4.1.18, Pages Router.
  `next.config.js` already had `output: 'export'` and `trailingSlash: true`;
  these settings and existing page URLs are preserved. There are no API routes,
  middleware, SSR, ISR, server actions, cookies, or `next/image` optimization.
  `getStaticProps` uses the filesystem and GitHub only at build time.
- The old unfinished blog read an absent `posts/` directory, used an obsolete
  date-fns import, and had no post route. It now reads `content/blog/` and uses
  the already installed gray-matter and remark, with rehype plugins for safe
  HTML generation and highlighting. No framework migration was needed.
- `/code/` retains its existing live GitHub API requests at build time. GitHub
  downtime/rate limits or changed repository data can affect builds; a failed
  build leaves the last successful Pages deployment in place. Review the Code
  page in every preview. Repository snapshots under `repositories/` are not used
  by the existing loader.
- `public/` was ignored; it is now trackable and the referenced images have
  been restored so they reach Git builds.
  `CLAUDE.md`, referenced by AGENTS.md, is absent from this checkout. Existing
  CodeQL configuration is preserved; no FTP/Linode deployment configuration was
  found in the tracked files.
- `npm audit` reports existing dependency advisories, including Next.js server
  features and build tooling. The export runs no Next.js server, so server-route
  advisories do not describe a deployed Pages endpoint. Dependency remediation
  still deserves a separate maintenance change; no broad upgrades or automatic
  `npm audit fix --force` were applied as part of this migration.
