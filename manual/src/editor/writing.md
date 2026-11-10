# Writing text

New lines are **rich text**: you write and format text as in Word. Bold is
bold and a heading is a heading while you type, in the same look as the
finished document.

## Rich text

Select a line and press **Enter**. A toolbar appears above the line:

| Toolbar                         | What it does                                  |
|---------------------------------|-----------------------------------------------|
| Style menu                      | Normal text, Heading 1 to 3, or Code          |
| **B**, *I*, U, S                | Bold, italic, underline, strikethrough        |
| x<sub>2</sub>, x<sup>2</sup>    | Subscript and superscript, as in f<sub>ck</sub> or m<sup>2</sup> |
| Lists and quote                 | A bulleted list, a numbered list, an indented quote |
| Link                            | A link on the selected text                   |
| ƒ                               | A [formula](formulas.md)                      |
| ∑                               | An [equation](#equations)                     |
| Comment                         | A [comment](comments.md) on the line          |

Word's keys work too:

| Keys                     | What they do                                   |
|--------------------------|------------------------------------------------|
| Ctrl+B, Ctrl+I, Ctrl+U   | Bold, italic, underline                        |
| Ctrl+=, Ctrl+Shift+=     | Subscript, superscript                         |
| Ctrl+Alt+1, 2, 3         | Heading 1, 2, 3; Ctrl+Alt+0 for normal text    |
| Ctrl+K                   | Add or change a link                           |
| Ctrl+E                   | Insert a formula                               |
| Tab, Shift+Tab           | Indent or outdent a list item                  |
| Shift+Enter              | A line break inside a paragraph                |

Some characters typed at the start of a paragraph format it: `# ` makes a
heading (`## ` a smaller one), `- ` a bulleted list, `1. ` a numbered list,
`> ` a quote.

While you edit, the arrow keys move inside the line, and **Enter** starts a
new paragraph in the same line. **Ctrl+Enter** keeps your changes and
**Escape** throws them away, as in every line.

### Formulas in rich text

A formula shows as a small grey box, a **chip**, with its value inside.
Point at it to see the formula; click it to change it in a small field below,
and press **Enter** to apply. A formula that shows nothing, as `<% L = 6 %>`,
shows a small ƒ. To insert one, press **Ctrl+E**, or type `<%`.

A new or changed formula shows its expression until you keep the line with
**Ctrl+Enter**; then it shows its value.

### What rich text cannot do

There are no colors, fonts or alignment, and several empty paragraphs in a row
become one. Images show and stay, but cannot be inserted: write them in
[Markdown](#markdown). A line with HTML tags or a table cannot be rich
text: keep it as Markdown, or use a [Table cell](cell-types.md#table-cells)
for the table.

Rich text has been tried in Chrome and Firefox. On Safari, it may not work as
expected.

## Markdown

A rich text line is saved as **Markdown**: a simple way to format text with
ordinary characters. A Markdown line shows you those characters while you
edit, and the formatted text when you leave the line. Press **m** on a line
to edit it as Markdown, and **r** to go back to rich text: the text does not
change.

| You write                          | The editor shows                     |
|------------------------------------|--------------------------------------|
| `# Beam check`                     | a heading                            |
| `## Input`, `### Loads`            | smaller headings                     |
| `*italic*`                         | *italic*                             |
| `**bold**`                         | **bold**                             |
| `- a bullet`                       | a bulleted list                      |
| `1. a step`                        | a numbered list                      |
| `[OnLabs.org](https://www.onlabs.org/)` | a link: [OnLabs.org](https://www.onlabs.org/) |
| `` `code` ``                       | `code`                               |
| `> a note`                         | an indented note                     |

### Lists

```markdown
- A line that starts with a dash is a bullet.
- Another bullet.

1. A line that starts with a number is a numbered step.
2. The next step.
```

Leave an empty line between a paragraph and a list.

### Tables

```markdown
| Section | Height (mm) | Mass (kg/m) |
|---------|------------:|------------:|
| IPE 200 |         200 |        22.4 |
| IPE 300 |         300 |        42.2 |
```

shows:

| Section | Height (mm) | Mass (kg/m) |
|---------|------------:|------------:|
| IPE 200 |         200 |        22.4 |
| IPE 300 |         300 |        42.2 |

The columns are separated by `|`. The second row, with dashes, divides the
header from the rows; a colon on the right aligns a column to the right.
The columns do not need to line up in what you write. Every table spans the
full width of the text; each column takes the width its content needs, and
long text wraps inside its column.

To give a table a caption, write it between `<caption>` and `</caption>` on
the line right after the table, in a Markdown line:

```markdown
| Section | Height (mm) | Mass (kg/m) |
|---------|------------:|------------:|
| IPE 200 |         200 |        22.4 |
| IPE 300 |         300 |        42.2 |
<caption>Table 1: IPE sections.</caption>
```

The caption shows below the table, aligned to the left. Stilo does not
number tables: write the number yourself.

A [Table cell](cell-types.md#table-cells) lets you edit a table as a grid
instead of writing these characters.

### Links

A link is written as `[text](address)`. A link to another document of the
folder, as `[steel](../../library/steel.texl)`, opens it in the editor. A
short address like this one starts from the folder of the open document.

An image is written the same way, with `!` in front:
`![Cross section](drawings/ipe300.svg)`. Links and images can point to any file
of the folder: see [Links to read](linking.md#links-to-read).

### Special characters

In Markdown, subscripts and superscripts are written with HTML:
`f<sub>ck</sub>` shows f<sub>ck</sub>, and `m<sup>2</sup>` shows
m<sup>2</sup>. Characters such as ², σ or γ can be typed or pasted as they are,
in every type of line.

## Equations

Equations are written in **LaTeX**, the notation of scientific papers,
between dollar signs:

```markdown
The stress is $\sigma = M / W$, and the design moment is:

$$
M_{Ed} = \frac{q_d L^2}{8} = <% math.round (MEd * 10) / 10 %>\ \text{kNm}
$$
```

`$...$` puts an equation inside a sentence; `$$...$$`, on lines of their own,
puts it on a line of its own, centered. A formula inside an equation shows its
value, so the equation above ends with the computed moment.

| Where      | How                                                        |
|------------|------------------------------------------------------------|
| Rich text  | Click **∑**, or type `$...$`: the equation is set as you type. Click it to change the LaTeX, with a preview. |
| Markdown, Table | Write `$...$` or `$$...$$`; the equation is set when you leave the line. |

Amounts of money stay text: in `$5 and $10` there is no equation. An
equation's first `$` has no space after it, and its last `$` no space before it
and no digit after it. Write `\$` for a plain dollar sign. In a table, write
`\vert` for a `|` inside an equation, since `|` separates the columns.

LaTeX with a mistake shows in red, with the reason when you point at it. An
equation with an undefined value shows as its LaTeX, with the value
highlighted.

Only the editor sets equations: the file, and the output of
[`stilo render`](../cli/render.md), keep the LaTeX as text.
