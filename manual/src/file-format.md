# The document format

A Stilo document is one Texl text file, with the extension `.texl`. You
can open it in any text editor, keep it in git, and render it with any Texl
tool, without Stilo. This page describes what the editor adds to a plain
Texl file: cell markers and cell comments.

```texl
<!--{ bek4 : markdown }-->
# Beam check
<% L = 6, q = 12.5 %>
<!--{ mom3 : markdown }-->
Midspan moment: <% q * L ^ 2 / 8 %> kNm
<!--[ Anna: check the load combination. ]-->
```

## Cells

Each cell starts with a **marker line**, `<!--{ name : type }-->`, on a line
of its own. The cell's content is everything up to the next marker line. A
marker line inside a `<% %>` formula, for example in a text, is not a marker: it
is part of the formula.

- The **type** says how the editor edits and shows the cell: `rich` (rich
  text), `markdown`, `text`, `formula` (a line that is one formula), `table` (a
  line that is one Markdown table) or `data` (a data table). A type that the
  editor does not know is edited as `text`, and kept when the file is saved.
- `| hidden` after the type, as in `<!--{ imp1 : formula | hidden }-->`, marks
  a [hidden line](editor/lines.md#hide-lines).
- The **name** identifies the cell: four lowercase letters and digits, such
  as `bek4`. The editor gives one to every new cell, and to every marker
  written without a name, such as `<!--{ markdown }-->`. Names are unique
  in a document; the editor does not show them, people refer to lines by
  their number.
- Text before the first marker is a `text` cell without marker. So any Texl
  file opens in the editor, also one written without it.

The markers are HTML comments: they stay in the rendering of the document,
where Markdown and HTML do not show them.

Older documents may use markers of the form `<!--% type %-->`. The editor
reads them, and writes them in the new form, with a name, when it saves.

## What each type stores

Every type stores plain Texl text, so the document renders in any Texl tool:

- `rich` and `markdown` store the same Markdown, which is why a line changes
  between the two without a change to its text. Equations stay as LaTeX
  between `$` signs.
- `formula` stores one `<% %>` tag.
- `table` stores a Markdown table, with formulas in its fields.
- `data` stores one formula that builds the table with the Stilo library, one
  row per line. The name, the column names and the values are those of the
  editor:

```texl
<!--{ lod3 : data }-->
<% loads: stilo.dataframe {
    columns: ["Case", "Fx (kN)", "Fy (kN)"],
    rows: [
        ["ULS-1", 1.35 * Fx_k, 35],
        ["ULS-2", 1.5 * Fx_k, ""]
    ]
} %>
```

The line above it in the document, hidden, imports the library:

```texl
<!--{ imp1 : formula | hidden }-->
<% texl.import "~/lib/stilo/index.texl" ~> (lib -> bind "stilo" lib.data.stilo) %>
```

`~` stands for the folder of the [project](editor/projects.md). Other Texl
programs do not know this meaning of `~`: `stilo render` does.

## Formulas and names

Formulas are Texl tags, `<% ... %>`, anywhere in a cell. Texl computes a
document from top to bottom, so a name defined in a cell (`L` and `q`
above) is known in every cell below it, and not above it.
[Writing documents with Texl](templates/index.md) describes the tags, and
[The Swan language](swan/index.md) the language inside them.

## Comments

`<!--[ ... ]-->` is a **cell comment**: a note about the cell it is in. It
moves with the cell, and the editor counts the comments of each cell in the
right margin. The text of a comment is free; a common habit is to start it
with your name.

Other HTML comments, `<!-- ... -->`, are neither markers nor cell
comments: they are text of the cell, like any other.

## Rules for editing by hand

- Keep every marker on a line of its own.
- Keep cell names unique (compared without case). If two cells share a
  name, the editor leaves them as they are and reports the clash to the
  program that embeds it.
- A formula must open and close in the same cell. A `<%` that only closes at a
  `%>` in a later cell makes the editor open the cells from the `<%` to the `%>`
  as one cell, and the file does not change. Close the formula, and they become
  separate cells again, with their types. A `<%` with no `%>` below it is plain
  text.
- A marker line that you type or paste into a cell in the editor makes a new
  cell when you leave the cell.
