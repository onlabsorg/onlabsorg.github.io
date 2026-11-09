# Comments

A comment is a note on a line, for you or a colleague. It is stored in the
document, inside the line it is about, and moves with it.

The right margin shows how many comments a line has.

## Read comments

Click the number in the right margin, or select the line and press
**Shift+F2**. The comments pane opens on the right, with the comments of
that line. **Alt+C**, or the comments button in the top bar, shows or hides
the pane.

Each comment in the pane says which line it is on, as *Cell 3*. Click a comment
to select its line in the document.

## Write a comment

1. Select a line and press **Enter** to edit it.
2. Press **Shift+F2**. In a rich text line, a small field opens for the
   comment; type your note and press **Enter**. In a Markdown or Text line,
   the editor inserts the brackets of a comment, `<!--[  ]-->`, with the cursor
   between them; type your note.
3. Press **Ctrl+Enter**.

```texl
- Span: <% L %> m
<!--[ Anna: span and loads from the client's brief, rev. B. ]-->
```

The note does not show in the line's text, only in the comments pane.
Start a comment with your name, so that others know who wrote it.

To change or delete a comment, edit the line and change the text between the
brackets, or delete the brackets with it. A rich text line does not show the
brackets: press **m** to edit the line as Markdown, change the comment, and
press **r** to make it rich text again.
