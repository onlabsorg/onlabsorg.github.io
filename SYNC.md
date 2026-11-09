# Manual sync

The last commit of each repository that the manual reflects. The
`/update-manual` skill (OnLabs.org coordination folder) reads the commits
after these, updates the manual, and then updates this table.

| Repository | Commit    | Date       | Note                                     |
|------------|-----------|------------|------------------------------------------|
| texl       | `1d4b5e5` | 2026-11-09 | Texl 0.8.0: namespaces give their own text with `__text__`; an import that redirects is the document at its final address |
| stilo      | `ac6f609` | 2026-11-09 | Stilo 0.3.0: rich text cells (default), equations, data table cells, hidden cells, projects with `stilo init` and `~` in imports |
