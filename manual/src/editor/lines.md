# Lines and cells

A document is a stack of **cells**, one per line, like the rows of a
spreadsheet. A cell can hold one sentence or a whole page: its line grows to
fit it. The number in the left margin is the line number; people talk about
"line 3".

## Edit a line

1. Select a line and press **Enter** (or double-click it, or press **F2**).
2. Change a word.
3. Press **Ctrl+Enter** to keep your change, or **Escape** to throw it away.
   A click on another line keeps it too, as in Excel.

While you edit, **Enter** starts a new line of text inside the same cell.

## Write on an empty line

The numbered lines below the document are empty. Select one, press
**Enter**, write something and press **Ctrl+Enter**: it becomes part of the
document, on that line. The empty lines above it become part of the
document too, so your text stays where you wrote it.

## Insert, move, delete

| Keys                       | What they do                        |
|----------------------------|-------------------------------------|
| Alt+Enter                  | Insert an empty line below          |
| Alt+Shift+Enter            | Insert an empty line above          |
| Alt+↑, Alt+↓               | Move the selected lines             |
| Delete, Backspace          | Delete the selected lines           |
| Shift+↑, Shift+↓, Shift+click | Select several lines             |
| Ctrl+C, Ctrl+X, Ctrl+V     | Copy, cut and paste lines           |
| Ctrl+Z, Ctrl+Shift+Z       | Undo and redo                       |

Try it: select a line, move it up with **Alt+↑**, then press **Ctrl+Z** to
put it back.

- With several lines selected, the commands work on all of them.
- Pasted lines replace the selected ones, as in a spreadsheet. Copied lines
  keep their type, and their comments.
- A move or a paste that would make a formula
  [run into another line](formulas.md#a-formula-stays-on-its-line) does
  nothing, and a message says why.
- Ctrl+Z undoes changes to the lines: edits, inserts, deletes, moves,
  pastes and type changes. While you edit a line, Ctrl+Z undoes your typing
  in it.

## Hide lines

Lines can be hidden, as rows in Excel: a line with intermediate steps, or one
that the reader does not need. A hidden line stays in the document and still
computes; it is only out of sight.

1. Select the lines to hide.
2. Open the commands pane (**F1**) and choose **Hide the selected cells**.

The line numbers skip the hidden lines, and a double rule shows where they
are. The arrow keys pass over them.

| Command                              | What it does                         |
|--------------------------------------|--------------------------------------|
| Hide the selected cells              | Hides the selected lines             |
| Unhide the cells in the selection    | Shows again the hidden lines between the selected ones: select the lines above and below the double rule |
| Show or hide the hidden cells        | Shows all hidden lines, greyed out, or hides them again. This is a view setting; it is not saved |

The commands have no keys yet. Going to a hidden line from the
[Errors](errors.md) or [Comments](comments.md) pane shows the hidden lines.

## Line numbers move

Line numbers are positions, as in a spreadsheet: when you insert a line,
the numbers of the lines below it change. Each cell also has a name in the
file, which never changes, but the editor does not show it (see
[The document format](../file-format.md)).
