# Introduction

This manual teaches you to write *living documents*: reports, calculations
and notes whose numbers compute themselves, and that use the data of other
documents instead of copying it.

Three pieces work together:

| Piece     | What it is                                                     |
|-----------|----------------------------------------------------------------|
| **Stilo** | The editor. It edits a folder of documents in your browser, the way Word edits `.docx` files, and renders them from the command line. |
| **Texl**  | The document format. A Texl document is ordinary text with *formulas* between `<%` and `%>`, which are replaced by their values. |
| **Swan**  | The small language inside the formulas: numbers, text, lists, functions. |

A document can hold a calculation, and the text follows when an input
changes:

```texl
<!--{ bek4 : markdown }-->
# Beam check
<% L = 6, q = 12.5 %>
Span <% L %> m, load <% q %> kN/m.
<!--{ mom3 : markdown }-->
Midspan moment: **<% q * L ^ 2 / 8 %> kNm**
```

In Stilo, this file is two lines of a sheet:

```text
1   Beam check
    Span 6 m, load 12.5 kN/m.
2   Midspan moment: 56.25 kNm
```

A document can also import other documents, so a project can use the data
that a library of materials or a colleague's calculation provides.

## How to read this manual

- New here? Start with [Getting started](getting-started.md): install
  Stilo and open the sample documents.
- [Using Stilo](editor/index.md) teaches the editor, one topic per page:
  read it with Stilo open beside it, and try each step. It also covers the
  `stilo` command and the document format.
- [Writing documents with Texl](templates/index.md) explains how formulas
  fill a document: names, conditions, lists, imports.
- [The Swan language](swan/index.md) describes the language of formulas,
  and the [built-in reference](swan/builtins/index.md) lists every
  function.

Stilo, Texl and Swan are free software, released under the MIT license.
Programmers who want to embed Texl in their own programs, or change Stilo,
find the developer documentation in the repositories on
[GitHub](https://github.com/onlabsorg).
