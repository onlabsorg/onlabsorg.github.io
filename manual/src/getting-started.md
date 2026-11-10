# Getting started

This page installs Stilo, opens the tutorial and the sample documents in the
editor, and renders a document from the command line.

## Install

You need [uv](https://docs.astral.sh/uv/), which also installs Python 3.11
or later if you do not have it. Install the `stilo` command from PyPI:

```sh
uv tool install stilo-cli
```

If uv says that its folder is not on your path, run `uv tool update-shell`
and open a new terminal. With Python 3.11 or later already installed,
`pip install stilo-cli` works too. Check it:

```sh
stilo --help
```

```text
usage: stilo [-h] {init,render,serve,tutor} ...

Edit and render a folder of linked Texl documents.
```

To update Stilo later, run `uv tool upgrade stilo-cli`.

## Take the tutorial

The quickest way to learn Stilo is its tutorial: short lessons in the editor,
which you follow by doing.

```sh
stilo tutor
```

Your browser opens the tutorial's index. Start with lesson 1; the twelve
lessons take 30 to 45 minutes in all. Press Ctrl+C in the terminal to stop;
the next `stilo tutor` opens your work as you left it. More in
[stilo tutor](cli/tutor.md).

## Open the sample documents

Stilo's source code comes with a folder of sample documents, `examples`.
Get it with [git](https://git-scm.com/) (or download the code as a ZIP file
from <https://github.com/onlabsorg/stilo>) and serve it:

```sh
git clone https://github.com/onlabsorg/stilo.git
cd stilo
stilo serve examples
```

```text
Stilo: serving /home/ada/stilo/examples at http://127.0.0.1:8000/
```

Open <http://127.0.0.1:8000/projects/beam/beam-check.texl> in your browser.
You see the design report of a steel floor beam, on numbered lines: text,
tables of design data and results, conclusions and recommendations. The
report takes its figures from two other documents of the same project, the
*basis of design* (span, loads, materials) and the *calculation note*
(equations, checks, a bending-moment diagram). The navigation pane on the
left lists the files of the folder.

Try it:

1. Click the link *Basis of design* in the introduction.
2. Press ↓ until line 4, *2 Structure*, is selected, and press Enter to edit
   it. (Line 1 is [hidden](editor/lines.md#hide-lines): it imports the Stilo
   library.)
3. Change the span, `L = 6`, to `L = 7`.
4. Press Ctrl+Enter (⌘+Enter on a Mac), then Ctrl+S to save the document.
5. Press the browser's back button to return to the report. Its design data,
   results and conclusions follow the new span: the IPE 300 is now at 93 %
   of its deflection limit, and the report no longer recommends the lighter
   IPE 270.

Press Ctrl+C in the terminal to stop the server.

## Render a document

`stilo render` prints a document with its formulas computed:

```sh
stilo render examples/projects/beam/beam-check.texl
```

The output is the document's text, with every `<% %>` formula replaced by
its value. The report imports the basis of design and the calculation note,
which import the steel sections of `examples/library/steel.texl` and the
Stilo library of their [project](editor/projects.md),
`examples/projects/beam`; `stilo render` follows those imports too.

## Next steps

- Take the tutorial: [stilo tutor](cli/tutor.md).
- Learn the editor: [The web editor](editor/index.md).
- Serve your own folder: [stilo serve](cli/serve.md).
- Learn to write formulas: [Writing documents with Texl](templates/index.md)
  and [The Swan language](swan/index.md).
