# Errors

A formula that cannot be computed shows `[[Undefined]]`, and the rest of the
document still works. Here, the load is written as a text, with quotes, so it
cannot be multiplied:

```texl
<% L = 6, q = "12.5" %>
Moment: <% q * L ^ 2 / 8 %> kNm
```

```text

Moment: [[Undefined]] kNm
```

The editor shows you where each error is:

- The value is **highlighted** in its line. Point at it to read the reason.
- The **right margin** shows a warning icon, with the number of errors on that
  line.
- The **warning button** in the top bar shows the total of the document, and
  opens the Errors pane.

## The Errors pane

Click the warning button, a highlighted value or a number in the margin. The
pane lists each error of the document:

```text
cannot divide an undefined value by the number `8`
Moment: <% q * L ^ 2 / 8 %> kNm
Cell 1, line 2
Caused by
cannot multiply the text `"12.5"` by the number `36`
Cell 1, line 2
```

| Part             | What it tells you                                          |
|------------------|------------------------------------------------------------|
| The first sentence | What went wrong.                                         |
| The source line  | The text of the formula, with the failing position marked. |
| *Cell 1, line 2* | Where the error was made: the line numbered 1 on the sheet, and the second line of text inside it. A cell with one line of text shows only *Cell 1*. |
| *Shown in cell 5* | Where the value shows, if that is another line.           |
| *Caused by*      | The earlier errors that led to this one. The last one is the origin: fix that one. |

Click an entry to select its line. **Show the cell's errors**, in the commands
pane, opens the errors of the selected line. A double click on a highlighted
value still edits the line.

An error made in an imported document names that document. Its link opens the
document and selects the line.

## What counts as an error

An error is an undefined value that a formula returns, alone or as an item of a
list of values separated by commas:

```texl
<% bad = "a" - 1 %>Only given a name: <% 1 %>
Inside a list: <% ["a" - 1] %>
Returned: <% 1, "a" - 1 %>
```

```text
Only given a name: 1
Inside a list: [[List of 1]]
Returned: 1, [[Undefined]]
```

Only the last line counts as an error here. A value that only gets a name, or
that sits inside a list or a namespace, does not count until a formula returns
it. A misspelled name is not an error either: it shows nothing (see
[Formulas](formulas.md#names)).

An undefined value in the address of a link, or in another HTML attribute,
counts too, but it cannot be highlighted there.

`stilo render` reports the same errors on the command line: see
[stilo render](../cli/render.md#errors).
