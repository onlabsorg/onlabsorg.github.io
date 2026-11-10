# Linking documents

A document can use the values of another one: a library of materials, the
loads from a colleague's calculation, the rates of a price list. When the
other document changes, yours follows.

The sample documents show how. `examples/library/steel.texl` is a library of
steel sections (shortened here):

```texl
# Steel sections
<%
grade = {name: "S355", fy: 355},   # yield strength in N/mm²
IPE = {
    IPE270: {name: "IPE 270", h: 270, W: 429000, mass: 36.1},
    IPE300: {name: "IPE 300", h: 300, W: 557000, mass: 42.2}
}
%>
```

`examples/projects/beam/basis-of-design.texl` imports it, under its title,
and uses its values below:

```texl
<% texl.import("../../library/steel.texl") ~> (lib -> bind "steel" lib.data) %>
```

```texl
<% section = steel.IPE.IPE300 %>
- Section: <% section.name %>, steel <% steel.grade.name %>
```

```text

- Section: IPE 300, steel S355
```

Documents can link in a chain. The design report of the same project,
`beam-check.texl`, imports the basis of design and the calculation note, and
takes its figures from them: change the span in the basis of design, and the
report follows.

## How it works

- `texl.import("...")` reads the document at an address.
- A short address starts from the folder of the document that imports:
  `../../library/steel.texl` goes two folders up from
  `projects/beam/`, then into `library/`.
- The values that the library gives names to, as `grade` and `IPE`, are
  the members of `lib.data`. `bind "steel" lib.data` gives them, together,
  the name `steel` in this document: `steel.grade.name` is `"S355"`.
- The import must be on a line above the lines that use it.

- In a [project](projects.md), `~` stands for the project folder:
  `~/lib/steel/sections.texl` reads the same document from any folder of the
  project.

**Copy link**, in the [navigation pane](files.md#managing-documents-and-folders),
gives you the short address of a document, relative to the open one.

Copy the import line and change the address and the name to use another
document.

## The library changes, the document follows

The imported document is read again every time the editor computes yours:
after every change you make. Open the library, change the mass of the
IPE 300, save, and open the design report again: the self-weight and the
checks use the new value.

An address can also be a full web address, `https://...`, of a document on
another server that allows it.

## When an import fails

If the document cannot be read, for example because the address is wrong or the
document was moved, the formula shows `[[Undefined]]` and the
[Errors pane](errors.md) says why. Correct the address. The lines that use the
imported values then follow.

To show your own text instead, write a default with `|`:

```texl
<% texl.import("missing.texl") ~> (doc -> doc.text | "(not found)") %>
```

```text
(not found)
```

## Links to read

A Markdown link to another document, as `[steel.texl](../../library/steel.texl)`,
does not import anything: it opens the other document in the editor when you
click it.

A link can also point to any other file in the folder, and an image can show
one:

```markdown
[Drawing](drawings/beam.pdf)
![Cross section](drawings/ipe300.svg)
```

| A link to                     | Opens                                          |
|-------------------------------|------------------------------------------------|
| a `.texl` document on this server | in place, in the editor                    |
| another file, or another website | in a new tab, so your document stays open   |
| an e-mail address (`mailto:`) | in your e-mail program, as the browser decides |

A file of a kind that the browser cannot show downloads instead. A link to a
file that does not exist opens an empty Stilo in the new tab.

Text shown from an imported document is part of the document showing it. So a
relative link in that text starts from the folder of the document showing it,
not from the folder of the imported document. In a document meant for import,
use full addresses for links.
