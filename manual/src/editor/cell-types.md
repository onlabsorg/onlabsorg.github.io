# Cell types

Every line has a **type**, which decides how it is edited and shown. The
icon in the left margin, before the line number, shows it.

| Type       | Key         | Shows                                             |
|------------|-------------|---------------------------------------------------|
| Rich text  | **r**       | Formatted text, edited as in Word ([Writing text](writing.md)). New lines are rich text. |
| Markdown   | **m**       | The same formatted text, written with Markdown characters, such as `**bold**` ([Markdown](writing.md#markdown)). |
| Text       | **t**       | The text without Markdown formatting: `**bold**` stays as it is written. HTML tags, as `<b>bold</b>`, still work. |
| Formula    | **=**       | The result of one formula. You edit the expression alone. |
| Table      | **Shift+T** | A table, edited as a grid.                        |
| Data table | **d**       | A table of values that other lines compute with, edited as a grid. |
| Chart      | **c**       | A line chart, for example of two columns of a data table, edited as a form. |

Formulas between `<%` and `%>` work in Rich text, Markdown, Text and Table
lines.

## Change the type

The quickest way is the type's key. Select a line and press **=**: the line
becomes a Formula cell and you are editing it, as `=` starts a formula in a
spreadsheet. The key is not typed into the line. On a line that already has
that type, the key just starts editing, as **Enter** does. With several lines
selected, the key acts on the active line alone.

To change several lines, use the menu:

1. Click the icon in the left margin, or select the lines and press
   **Ctrl+/**. A small menu of the types opens, with the current one
   checked and each type's key.
2. Pick a type with the mouse, or with **↑**, **↓** and **Enter**. You can
   also press the first letter of a type.

**Escape** closes the menu without a change.

The text of the line stays the same: only the way it is edited and shown
changes. So changing the type loses nothing, and **Ctrl+Z** undoes it. Try it:
write `**bold**` on a line, make it Text, and the stars stay; make it Markdown
again, and the word turns bold.

## Only the types that fit

Because the text never changes, a line can only take a type that fits it. In
the menu, the others are greyed out with the reason, and the keyboard skips
them. A type's key leaves the line as it is, and shows the reason under it:

| Type       | Fits                                  | Otherwise                 |
|------------|---------------------------------------|---------------------------|
| Text, Markdown | any line                          |                           |
| Rich text  | a line with simple formatting only    | *Needs text with simple formatting, without raw HTML or a table* |
| Formula    | a line that is one formula            | *Needs a single formula*  |
| Table      | a line that is one Markdown table     | *Needs a table*           |
| Data table | a line that is one data table         | *Needs a data table*      |
| Chart      | a line that is one chart              | *Needs a chart*           |

A rich text line cannot hold HTML tags, such as `<sub>`, or a table. Keep
such a line as Markdown, or put the table in a Table line.

Blank lines and comments never count against a type, and an empty line can
take any type. With several lines selected, the menu offers the types that fit
all of them.

## Formula cells

A Formula cell holds one formula. You edit the expression alone, without
`<%` and `%>`, with its parts in color, and the line shows the result:

```swan
q * L ^ 2 / 8
```

In the file, it is an ordinary formula, and comments around it stay:

```texl
<!--{ mom3 : formula }-->
<% q * L ^ 2 / 8 %>
```

An expression cannot contain `%>`, which would end the formula. **Ctrl+Enter**
then keeps you on the line and says why; correct it, or press **Escape** to
discard the change.

## Table cells

Press **Shift+T** on an empty line: it starts a new table of two columns. Each
table cell is a field of the grid, and you write formulas in it between `<%`
and `%>`.

| Keys and buttons       | What they do                                       |
|------------------------|----------------------------------------------------|
| Tab, Shift+Tab         | Go to the next or previous field. Tab in the last field adds a row, as in Word. |
| ↑, ↓                   | Go to the field above or below                     |
| **+ Row**, **+ Column** | Insert a row below, or a column to the right      |
| **− Row**, **− Column** | Delete the current row or column                  |
| Align buttons          | Align the current column left, center or right, as in Word. The pressed button shows its alignment. |
| Ctrl+Enter, Escape     | Keep the changes or discard them, as in other lines |

In the file, the table is an ordinary Markdown table, so it renders in any
Texl tool:

```texl
<!--{ inp1 : formula }-->
<% L = 6, q = 12.5 %>
<!--{ tab1 : table }-->
| Quantity       | Value                      |
|:---------------|---------------------------:|
| Span           | <% L %> m                  |
| Midspan moment | <% M: q * L ^ 2 / 8 %> kNm |
<!--{ con1 : markdown }-->
The moment <% M %> kNm goes to the bending check.
```

```text
<!--{ inp1 : formula }-->

<!--{ tab1 : table }-->
| Quantity       | Value                      |
|:---------------|---------------------------:|
| Span           | 6 m                  |
| Midspan moment | 56.25 kNm |
<!--{ con1 : markdown }-->
The moment 56.25 kNm goes to the bending check.
```

Table cells cannot refer to each other by position, as `B2` does in a
spreadsheet. To use a value elsewhere, name it where you compute it: `M:` above
gives the value a name and also shows it.

An unchanged table keeps its text as you wrote it; an edited one is saved with
its columns lined up. A Markdown line that holds a table can change to Table
and back without loss.

## Data table cells

A Data table holds values, such as a list of load cases, that other lines
compute with, as a range of cells does in a spreadsheet:

```text
Name  loads

| Case  | Fx (kN)     | Fy (kN) |
|-------|-------------|---------|
| ULS-1 | 1.35 * Fx_k | 35      |
| ULS-2 | 1.5 * Fx_k  |         |
```

Press **d** on an empty line: it starts a new table of two columns and one
row. While you edit it:

- **Name** (optional) gives the table a name, here `loads`, so that other
  lines can use it. A name has only letters, digits and `_`, and does not
  start with a digit.
- The **first row** holds the column names. They are plain text, so units
  and symbols are fine: `Fx (kN)`, `γG`.
- **Every other field** holds one value, written as a formula without `<%`
  and `%>`: a number, `120`; a text, in quotes, `"ULS-1"`; or a calculation,
  `1.35 * Fx_k`, with the names of the lines above. An empty field stays
  empty.
- The keys and the **+ Row**, **+ Column**, **− Row** and **− Column**
  buttons are those of a [Table](#table-cells).

A field whose value is not a valid formula, as `ULS-1` without quotes, is
outlined in red as you type, with the reason when you point at it. The line
cannot be kept until you correct it.

Outside editing, the line shows the computed table, with columns of numbers
aligned right:

| Case  | Fx (kN) | Fy (kN) |
|-------|--------:|--------:|
| ULS-1 |     135 |      35 |
| ULS-2 |     150 |         |

With the name `loads`, the lines below use the table like this:

| You write                       | You get                            |
|---------------------------------|------------------------------------|
| `loads.column "Fx (kN)"`        | the values of a column, as a list  |
| `loads.row 0`                   | a row, as a list; rows count from 0 |
| `loads.columns`                 | the column names, as a list        |
| `loads.rows`                    | all the rows, as a list of lists   |

```texl
The largest horizontal load is <% math.max (list.enum (loads.column "Fx (kN)")) %> kN.
```

```text
The largest horizontal load is 150 kN.
```

`list.enum` turns the list into separate values, which `math.max` compares
(see [Lists](../swan/collections.md#lists)). A value that cannot be computed
shows as `[[Undefined]]` in its own field; the rest of the table still shows.
Such a value is not listed in the [Errors pane](errors.md).

A field cannot contain `"` in a column name, or `%>` anywhere. Fields cannot
refer to each other, as `B2` does in a spreadsheet: compute a value on a line
above, give it a name, and use the name in the field.

## Chart cells

A Chart draws a line through points, such as the bending moment along a beam
or the values of two columns of a data table. Press **c** on an empty line:
the line becomes a chart, edited as a **form**, one field per row, with its
description on the left:

| Field         | What you write                                           |
|---------------|----------------------------------------------------------|
| Chart type    | The kind of chart, from a list. Only **Line** for now.   |
| X values      | A formula that gives a list of numbers, such as `loads.column "x (m)"` |
| Y values      | A formula that gives a list of as many numbers, such as `loads.column "M (kNm)"` |
| X axis label  | Plain text, without quotes. Optional.                    |
| Y axis label  | Plain text, without quotes. Optional.                    |
| Title         | Plain text, without quotes. Optional.                    |

**Tab** and **Shift+Tab**, or **↑** and **↓**, move between the fields;
**Ctrl+Enter** keeps the chart and **Escape** discards the changes, as in
every line. A formula field that is not valid is outlined in red as you type,
and X and Y values are required.

Outside editing, the line shows the chart across the width of the page, in
the colors of the light or dark theme. The axes run between round numbers
just below and above the values. A point whose X or Y value is not a number,
as an empty field of a data table, is left out.

With the [data table](#data-table-cells) `sections`, of IPE sections with
columns `h (mm)` and `Mass (kg/m)`, this chart shows the mass against the
height:

| Field         | Value                         |
|---------------|-------------------------------|
| X values      | `sections.column "h (mm)"`    |
| Y values      | `sections.column "Mass (kg/m)"` |
| X axis label  | h (mm)                        |
| Y axis label  | Mass (kg/m)                   |
| Title         | IPE sections                  |

The X and Y values can be any list, not only a column. The beam example
(`examples/projects/beam/analysis.texl`) draws its bending-moment diagram
from lists that it computes.

If the chart cannot be drawn, for example because X and Y have a different
number of values, the line shows `[[Undefined]]` and the
[Errors pane](errors.md) says why.

## The Stilo library

Data tables and charts need the **Stilo library**, a document of functions
that comes with Stilo. When you write the first data table or chart of a
document, the editor adds a line at the top that imports the library, and
[hides](lines.md#hide-lines) it. Leave that line where it is.

The library is found in the [project](projects.md) the document belongs to.
In a folder that is not a project, data tables and charts show
`[[Undefined]]` until you make it one with [`stilo init`](../cli/init.md).
A project made with Stilo 0.3 has a library without charts: see
[Update the Stilo library](projects.md#update-the-stilo-library).

## Lines edited by hand

A Formula, Table, Data table or Chart line whose text no longer has that shape,
because the file was edited in another program, is edited as Text. You can
leave it unchanged, or correct it until it has the shape.

## Unknown types

A document written with a newer Stilo, or another program, may use a type
that your editor does not know. Such a line is edited and shown as Text,
and keeps its type when you save.
