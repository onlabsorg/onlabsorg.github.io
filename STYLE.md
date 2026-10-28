# OnLabs.org documentation style guide

This is the master style guide of the three OnLabs.org documentation sites
(decision D20 of the OnLabs.org coordination folder):

| Site       | URL                              | Source                                        | Accent |
|------------|----------------------------------|-----------------------------------------------|--------|
| OnLabs.org | <https://www.onlabs.org/>        | this repository, `docs/`                      | slate  |
| Texl       | <https://www.onlabs.org/texl/>   | <https://github.com/onlabsorg/texl>, `docs/`  | teal   |
| Stilo      | <https://www.onlabs.org/stilo/>  | <https://github.com/onlabsorg/stilo>, `docs/` | blue   |

It covers what the three have in common. Each subproject keeps a short
`docs/STYLE.md` with what is its own (terms, where things live, API
conventions of its languages) and links here. Where the two disagree, this
guide wins; fix the local one.

## Roles of the sites

- **OnLabs.org is the hub.** It says what OnLabs.org is and links to every
  product's documentation. It does not document a product itself.
- **Each product documents only itself.** One topic has one home:
  - Texl syntax, the Swan language, its built-ins and the Texl libraries:
    the Texl docs.
  - The `stilo` command, the web editor, the document format as Stilo
    stores it, the protocol, the editor component: the Stilo docs.
- **Link, do not repeat.** When a page needs a topic that lives on another
  site, it gives at most one short example and links to the page there
  (a deep link, not the site's home). Stilo's pages never explain Texl or
  Swan syntax beyond such an example.
- Link to the other sites by absolute URL (`https://www.onlabs.org/texl/...`).

## Look and feel

The shared look lives in this repository and is served from
`https://www.onlabs.org/assets/v1/`. Every page of every site loads it from
there; no site keeps copies.

| File                | What                                                     |
|---------------------|----------------------------------------------------------|
| `theme.css`         | Design tokens (colors, fonts, sizes, code colors, light and dark), navigation bar, wordmark, code highlighting |
| `accent-onlabs.css`, `accent-texl.css`, `accent-stilo.css` | The site's accent, light and dark; load right after `theme.css` |
| `landing.css`       | Layout of the landing pages                              |
| `book.css`          | Maps the tokens onto mdBook                              |
| `highlight.js`      | Highlights `swan` and `texl` code blocks                 |
| `nav.js`            | The list of sites; fills `[data-ol-sites]` with links to all three |

Rules:

- **Only the accent differs between sites.** Links, buttons, borders on
  hover, highlights and the wordmark's delimiters take the site's accent.
  Code colors are the same everywhere, so code reads the same on every site.
- Do not add colors or fonts in a page or a site's own CSS; use the tokens
  of `theme.css`. A site's own CSS (`onlabs.css`, `stilo.css`, ...) holds
  only components that site needs.
- The wordmark is the site's name in the monospace font, with delimiters in
  the accent: `onlabs.org`, `<%texl%>`, `¶stilo`.
- The favicon is the site's glyph on a rounded square in the site's light
  accent: slate `#3a4a63`, teal `#0b6b6b`, blue `#1f5fa8`.
- Each site's navigation shows the links to the three sites (from
  `nav.js`) next to its own sections.
- **Changing the shared files:** change them here. A change in `v1/` goes
  live on all three sites at once, so it must not break any of them; check
  the three before pushing. A breaking change goes into a new `v2/` folder,
  and the sites move over one by one.
- The mdBook manuals load the files in `book.toml` by absolute URL, e.g.
  `additional-css = ["https://www.onlabs.org/assets/v1/theme.css", ...]`.
  A local preview needs a network connection.

## Narrative style

- Write for the reader of that page. User chapters speak to engineers and
  Word or Excel users, not to programmers: no jargon, no code they do not
  need. Developer and API chapters speak to programmers.
- Address the reader as "you". Use the present tense and the active voice.
- Prefer short sentences and short paragraphs. One idea per paragraph.
- Show an example first, then explain it.
- Describe what the software does today. Describe planned features only as
  "coming soon", and never in an API reference.
- When the behavior is surprising, say so plainly and show the fix.
- Use American spelling. Wrap Markdown lines at about 80 characters.
- Write "OnLabs.org", "Texl", "Swan" and "Stilo" capitalized in prose, and
  commands (`texl`, `stilo`) in code font.

## Code examples

- Template code goes in ```` ```texl ```` blocks, Swan code in
  ```` ```swan ```` blocks, shell commands in ```` ```sh ```` blocks, and
  output in ```` ```text ```` blocks.
- A ```` ```texl ```` block followed by a ```` ```text ```` block shows a
  template and its exact rendering.
- Keep examples small and runnable. Every result and every rendering must
  be the real output of the current implementation.

## API references

Every API entry, in every language, has the same shape: a heading with the
name in code font, a signature block, a one-sentence summary that starts
with a verb in the third person ("Returns ...", "Creates ..."), details
(arguments, return value, special cases, errors), and an example.
Signatures use the language's own notation. Each subproject's `STYLE.md`
gives the details for its languages.

## Keeping the sites in sync

- **Assets:** one copy, here (see above).
- **Links between sites:** `.github/workflows/links.yml` in this repository
  checks every link on the three live sites each week, and on every push
  here. A broken deep link (for instance after the Texl manual moved a page)
  shows up as a failed run; fix it in the site that links.
- **Writing:** the Texl and Stilo repositories each have a `write-docs`
  skill (`.claude/skills/write-docs/`) that a Claude session uses whenever
  it writes or changes documentation. It must:
  1. Read this guide (`../onlabsorg.github.io/STYLE.md` when the
     repositories sit side by side, else
     <https://github.com/onlabsorg/onlabsorg.github.io/blob/master/STYLE.md>)
     and the local `docs/STYLE.md`.
  2. Keep the page to its own site's topics, and link to the other sites
     for theirs (see "Roles of the sites").
  3. Use the tokens only, and never copy the shared assets into the
     repository.
  4. Build the docs and check the links before finishing.
