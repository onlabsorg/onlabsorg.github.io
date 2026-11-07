# stilo render

```text
stilo render file [-o OUTPUT] [-d] [--strict]
```

Renders a Texl document: prints its text with every `<% %>` formula
replaced by its value.

Given `beam.texl`:

```texl
<!--{ bek4 : markdown }-->
# Beam check
<% L = 6, q = 12.5 %>
Span <% L %> m, load <% q %> kN/m.
<!--{ mom3 : markdown }-->
Midspan moment: **<% q * L ^ 2 / 8 %> kNm**
```

```sh
stilo render beam.texl
```

```text
<!--{ bek4 : markdown }-->
# Beam check

Span 6 m, load 12.5 kN/m.
<!--{ mom3 : markdown }-->
Midspan moment: **56.25 kNm**
```

The cell markers, `<!--{ ... }-->`, stay in the output. They are HTML
comments, so they do not show when the output is read as Markdown or HTML.

## Arguments and options

| Argument            | Meaning                                              |
|---------------------|------------------------------------------------------|
| `file`              | The document to render.                              |
| `-o`, `--output OUTPUT` | Writes the rendering to this file instead of the terminal. An existing file is replaced. |
| `-d`, `--debug`     | Numbers the undefined values in the output, and explains each one on standard error. |
| `--strict`          | Exits with status 1 if the document returned an undefined value. The output is still written. |

```sh
stilo render beam.texl -o beam.md
```

## Imports

Relative imports resolve from the document's own folder, as in the editor.
If `projects/beam.texl` contains:

```texl
<% texl.import("../library/steel.texl") ~> (lib -> bind "steel" lib.data) %>
```

then `stilo render projects/beam.texl` reads `library/steel.texl`, wherever
you run the command from.

## Errors

A formula that cannot be computed does not stop the rendering: it shows as
`[[Undefined]]`, and the rest of the document renders. One line on standard
error, which is not part of the output, says how many there are. Given
`report.texl`:

```texl
<% L = 6, q = "12.5" %>
Moment: <% q * L ^ 2 / 8 %> kNm
```

```sh
stilo render report.texl
```

```text

Moment: [[Undefined]] kNm
stilo: report.texl: 1 undefined value (use --debug to list them)
```

With `--debug`, the output numbers each value, and the same value keeps its
number. Standard error explains each one: where it was made, as
`file:line:column`, what went wrong, the source line with a caret under the
position, and its causes.

```sh
stilo render report.texl --debug
```

```text

Moment: [[Undefined #1]] kNm
stilo: report.texl: 1 undefined value

#1 report.texl:2:22  cannot divide an undefined value by the number `8`
     Moment: <% q * L ^ 2 / 8 %> kNm
                          ^
     caused by report.texl:2:14: cannot multiply the text `"12.5"` by the number `36`
```

An error made in an imported document points into that document, and a last
line says where the value shows. As in the editor,
[only a value that a formula returns counts](../editor/errors.md#what-counts-as-an-error).

Undefined values do not change the exit status, unless you ask for it:
`--strict` exits with status 1 if there are any, which is useful in a script
that must not publish a broken document. The output is still written.

Otherwise, `stilo render` fails (with exit status 1) only when the file itself
cannot be read, and says why, or when the output cannot be written.
