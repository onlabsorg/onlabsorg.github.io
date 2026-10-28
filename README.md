# onlabsorg.github.io

The OnLabs.org site, <https://www.onlabs.org>: the hub of the OnLabs.org
documentation, and the home of the look that all OnLabs.org sites share.

GitHub Pages serves the `docs/` folder as is; there is no build step.

- `docs/index.html`: the landing page. It links to the product docs, which
  are published from their own repositories:
  [Texl](https://github.com/onlabsorg/texl) at <https://www.onlabs.org/texl/>
  and [Stilo](https://github.com/onlabsorg/stilo) at
  <https://www.onlabs.org/stilo/>.
- `docs/assets/v1/`: the shared look (tokens, accents, layout, mdBook
  mapping, highlighter, site list), loaded by all three sites from
  <https://www.onlabs.org/assets/v1/>. A change here goes live everywhere.
- `docs/assets/onlabs.css`: additions specific to the landing page.
- `STYLE.md`: the style guide of all three sites.
- `.github/workflows/links.yml`: checks the links of all three sites,
  weekly.

To preview locally: `python3 -m http.server -d docs` (the `texl/` and
`stilo/` links only work on the live site).
