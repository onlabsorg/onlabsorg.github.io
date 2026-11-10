# Keyboard shortcuts

On a Mac, use ⌘ instead of Ctrl, and ⌥ (Option) instead of Alt. The commands pane (F1) lists the same shortcuts, and runs a
command when you click it.

## Files and view

| Keys       | Command                                   |
|------------|-------------------------------------------|
| Ctrl+S     | Save                                      |
| Alt+N      | New document                              |
| Ctrl+B     | Show or hide the navigation pane          |
| F1         | Show the commands                         |
| Alt+C      | Show the comments                         |
| Alt+U      | Show the document's text, read-only       |
| Alt+T      | Switch between the light and dark theme   |

**Reload document**, which reads the document from its file again, **Show
the cell's errors**, and the commands that [hide lines](lines.md#hide-lines)
have no shortcut: run them from the commands pane.

## In the navigation pane

When an item of the tree has the focus:

| Keys       | Command                                   |
|------------|-------------------------------------------|
| F2         | Rename the document, file or folder       |
| Delete     | Delete the document, file or folder       |

## Lines

When no line is being edited:

| Keys                         | Command                                 |
|------------------------------|-----------------------------------------|
| ↑ / ↓                        | Select the line above or below          |
| Shift+↑ / ↓, Shift+click     | Select several lines                    |
| Enter, F2, double click      | Edit the selected line                  |
| Alt+Enter                    | Insert an empty line below              |
| Alt+Shift+Enter              | Insert an empty line above              |
| Alt+↑ / ↓                    | Move the selected lines up or down      |
| Delete, Backspace            | Delete the selected lines               |
| Ctrl+C / Ctrl+X / Ctrl+V     | Copy, cut and paste lines               |
| Ctrl+Z                       | Undo                                    |
| Ctrl+Shift+Z, Ctrl+Y         | Redo                                    |
| Ctrl+/                       | Change the type of the selected lines   |
| =                            | Make the line a Formula cell and edit it |
| R                            | Make the line rich text and edit it     |
| T                            | Make the line Text and edit it          |
| M                            | Make the line Markdown and edit it      |
| Shift+T                      | Make the line a Table and edit it       |
| D                            | Make the line a Data table and edit it  |
| C                            | Make the line a Chart and edit it       |
| Shift+F2                     | Show the comments of the selected line  |

Pasted lines replace the selected ones, as in a spreadsheet.

## While editing a line

| Keys          | Command                                        |
|---------------|------------------------------------------------|
| Ctrl+Enter    | Keep the changes and leave the line            |
| Escape        | Discard the changes and leave the line         |
| Enter         | Start a new line of text inside the cell       |
| Ctrl+E        | Insert a formula, `<%  %>`, around the selected text if there is any (Markdown, Text) |
| Shift+F2      | Insert a comment, `<!--[  ]-->`                |
| Ctrl+Z / Ctrl+Shift+Z | Undo and redo inside the cell          |

A click on another line keeps the changes of the line you are editing, as in
Excel. If the line cannot be kept, it stays open and says why.

## While editing rich text

| Keys                     | Command                                        |
|--------------------------|------------------------------------------------|
| Ctrl+B, Ctrl+I, Ctrl+U   | Bold, italic, underline                        |
| Ctrl+=, Ctrl+Shift+=     | Subscript, superscript                         |
| Ctrl+Alt+1, 2, 3         | Heading 1, 2, 3                                |
| Ctrl+Alt+0               | Normal text                                    |
| Ctrl+K                   | Add or change a link                           |
| Ctrl+E                   | Insert a formula                               |
| Shift+F2                 | Add a comment                                  |
| Tab, Shift+Tab           | Indent or outdent a list item                  |
| Enter                    | Start a new paragraph                          |
| Shift+Enter              | A line break inside a paragraph                |
| ↑ / ↓                    | Move inside the line                           |

In the field of a formula, an equation, a link or a comment: **Enter**
applies, **Shift+Enter** starts a new line, **Escape** cancels.

## While editing a table or a data table

| Keys            | Command                                      |
|-----------------|----------------------------------------------|
| Tab, Shift+Tab  | Go to the next or previous field; Tab in the last field adds a row |
| ↑ / ↓           | Go to the field above or below               |
| Ctrl+Enter      | Keep the changes and leave the line          |
| Escape          | Discard the changes and leave the line       |

## While editing a chart

| Keys                  | Command                                      |
|-----------------------|----------------------------------------------|
| Tab, Shift+Tab, ↑ / ↓ | Go to the next or previous field             |
| Ctrl+Enter            | Keep the changes and leave the line          |
| Escape                | Discard the changes and leave the line       |

## In the type menu

| Keys                         | Command                       |
|------------------------------|-------------------------------|
| ↑ / ↓, or a type's first letter | Pick a type               |
| Enter, Space                 | Apply it                      |
| Escape, Tab                  | Close the menu                |
