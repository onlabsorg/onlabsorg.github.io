# onlabsorg.github.io

The OnLabs.org site, <https://www.onlabs.org>: the landing page and the
user manual of Stilo, Texl and Swan. It is written for users, not
programmers; the developer documentation lives in the `docs/` folder of
each repository ([texl](https://github.com/onlabsorg/texl),
[stilo](https://github.com/onlabsorg/stilo)).

- `site/index.html`: the landing page.
- `manual/`: the manual (mdBook), published at <https://www.onlabs.org/manual/>.
- `assets/`: the look (tokens, layouts, mdBook mapping, highlighter, icon).
- `build.sh`: builds everything into `target/site`, with redirects from the
  former `/texl/` and `/stilo/` sites. Requires mdBook 0.4.
- `.github/workflows/pages.yml`: builds and publishes the site on every
  push (Pages source: GitHub Actions).
- `STYLE.md`: the style guide. `SYNC.md`: the texl and stilo commits the
  manual reflects.

To preview locally: `./build.sh && python3 -m http.server -d target/site`.
