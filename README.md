# onlabsorg.github.io

Landing page of <https://www.onlabs.org>: a static "work in progress" page.

GitHub Pages serves the `docs/` folder as is; there is no build step.

- `docs/index.html`: the page.
- `docs/assets/texl.css`, `landing.css`, `texl-highlight.js`: verbatim copies
  from the Texl documentation (<https://www.onlabs.org/texl/assets/>), so the
  two sites share one look. Refresh them from there when the Texl style
  changes.
- `docs/assets/onlabs.css`: additions specific to this page.

The Texl documentation at <https://www.onlabs.org/texl/> is published from
the [texl](https://github.com/onlabsorg/texl) repository, not from here.

To preview locally: `python3 -m http.server -d docs` (the `texl/` links only
work on the live site).
