# OnLabs.org manual style guide

This guide keeps the OnLabs.org site consistent: the landing page
(`site/index.html`) and the manual (`manual/`), published at
<https://www.onlabs.org> (decision D21 of the OnLabs.org coordination
folder).

## Who it is for

The manual is for **users**: engineers, finance people and other knowledge
workers who write documents, not programmers. It covers Stilo, Texl and
Swan from the user's side: how to install and use the editor, how to write
formulas, the language, the built-in functions.

It does not cover how the software is built or how to program against it
(APIs, architecture, protocol, embedding, internals). That is in the
developer documentation in each repository's `docs/` folder on GitHub,
which the manual reaches only through the GitHub link in the menu bar and
an occasional "programmers: see the repository" sentence.

## Where things live

| What                       | Where                                         |
|----------------------------|-----------------------------------------------|
| Landing page               | `site/index.html`, plus `assets/onlabs.css`   |
| Manual                     | `manual/src` (mdBook; `manual/book.toml`)     |
| Look: tokens, components   | `assets/theme.css`                            |
| Landing page layout        | `assets/landing.css`                          |
| Tokens mapped onto mdBook  | `assets/book.css`                             |
| Menu bar of the manual     | `assets/book.js`                              |
| Highlighting of `swan` and `texl` code | `assets/highlight.js`             |
| Build                      | `build.sh` into `target/site`; `.github/workflows/pages.yml` publishes it |
| Last subproject commits the manual reflects | `SYNC.md`                    |

Parts of the manual and their sources of truth:

| Part                        | Folder                        | Follows       |
|-----------------------------|-------------------------------|---------------|
| Getting started, Using Stilo | `getting-started.md`, `editor/`, `cli/`, `file-format.md` | stilo |
| Writing documents with Texl | `templates/`                  | texl          |
| The Swan language           | `swan/`                       | texl          |
| Reference                   | `swan/builtins/`              | texl          |

## Look and feel

- One look for the whole site: the Texl theme, teal accent, template tags
  and the wordmark delimiters (`.org`) in orange. No part has a color of
  its own.
- All pages use the design tokens of `assets/theme.css`, in a light and a
  dark variant. Do not add colors or fonts in a page; add a token instead.
- The menu bar shows the `onlabs.org` wordmark (to the landing page), the
  parts of the manual, and the GitHub link at the far right.

## Narrative style

- Write for a user who has never programmed. No jargon; explain a term the
  first time it appears, or avoid it. "Host", "engine", "global" appear only
  where unavoidable, with a short explanation.
- Address the reader as "you". Use the present tense and the active voice.
- Prefer short sentences and short paragraphs. One idea per paragraph.
- Show an example first, then explain it. Prefer examples from engineering
  and business documents (a beam check, an invoice) over abstract ones.
- Describe what the software does today. Describe planned features only as
  "coming soon".
- When the behavior is surprising, say so plainly and show the fix.
- Use American spelling. Wrap Markdown lines at about 80 characters.

## Terms

| Use                | For                                                              |
|--------------------|------------------------------------------------------------------|
| document           | one `.texl` file                                                 |
| folder             | the folder that `stilo serve` serves; its documents             |
| the web editor     | Stilo's user interface in the browser                            |
| line               | a cell, as the user sees it, by its number                       |
| formula            | a `<% %>` tag, in the Stilo part                                 |
| tag                | a `<% %>` tag, in the Texl and Swan parts ("formula" is introduced there as the same thing) |
| template           | text with tags, in the Texl part                                 |
| name               | a Swan identifier (not "variable", except in passing)            |
| `Nothing`, `Undefined`, `Numb`, `Text`, ... | Swan types, always in code font         |

Write "Stilo", "Texl" and "Swan" capitalized in prose, `stilo` in code font
for the command, `TRUE` and `FALSE` in code font. Write keys as
`Ctrl+Enter`, with Mac keys mentioned once per page ("⌘ instead of Ctrl").

## Code examples

- Documents and templates go in ```` ```texl ```` blocks, Swan code in
  ```` ```swan ```` blocks, shell commands in ```` ```sh ```` blocks, and
  output in ```` ```text ```` blocks.
- A ```` ```texl ```` block followed by a ```` ```text ```` block shows a
  document and its exact rendering.
- In a Swan block, a line can end with `# => result`, the value of that
  line, optionally followed by a short explanation after a comma. Results
  use Swan notation: `42`, `"text"`, `TRUE`, `(1, 2)`, `[1, 2]`,
  `{a: 1, b: 2}`.
- Keep examples small and runnable. Every result and every rendering must
  be the real output of the current Texl and Stilo; check them with
  `stilo render` before publishing.
- Render examples with Stilo (the editor or `stilo render`), never with a
  programming library.

## Reference entries

Every built-in function has the same shape: a heading with the name in code
font, a signature (`text.find needle haystack -> Numb`), a one-sentence
summary that starts with a verb in the third person ("Returns ..."),
details, and an example.

## Keeping the manual current

The texl and stilo repositories know nothing about this site. The manual
follows them from a session in the OnLabs.org coordination folder, which
reads (never writes) `texl/` and `stilo/`, with the `/update-manual` skill:

1. `SYNC.md` records the last commit of each repository that the manual
   reflects.
2. The skill lists the commits since then, reads their messages, the
   changed user-facing behavior and the developer docs, and updates the
   manual parts that follow that repository.
3. It checks the examples, builds the site, and updates `SYNC.md`.
