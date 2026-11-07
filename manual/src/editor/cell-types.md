# Cell types

Every line has a **type**, which decides how it is edited and shown. The
icon in the left margin, before the line number, shows it.

| Type     | Key       | Shows                                               |
|----------|-----------|-----------------------------------------------------|
| Markdown | **m**     | Formatted text: headings, lists, tables ([Writing text](writing.md)). New lines are Markdown. |
| Text     | **t**     | The text without Markdown formatting: `**bold**` stays as it is written. HTML tags, as `<b>bold</b>`, still work. |
| Formula  | **=**     | The result of one formula. You edit the expression alone. |
| Table    | **Shift+T** | A table, edited as a grid.                        |

Formulas between `<%` and `%>` work in Markdown, Text and Table lines.

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

| Type     | Fits                               | Otherwise                 |
|----------|------------------------------------|---------------------------|
| Text, Markdown | any line                     |                           |
| Formula  | a line that is one formula         | *Needs a single formula*  |
| Table    | a line that is one Markdown table  | *Needs a table*           |

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

## Lines edited by hand

A Formula or Table line whose text no longer has that shape, because the file
was edited in another program, is edited as Text. You can leave it unchanged,
or correct it until it has the shape.

## Unknown types

A document written with a newer Stilo, or another program, may use a type
that your editor does not know. Such a line is edited and shown as Text,
and keeps its type when you save.
