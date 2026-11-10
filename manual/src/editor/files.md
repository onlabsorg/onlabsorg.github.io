# Files and folders

## Save

**Ctrl+S** saves the document to its file. A dot (•) after the name in the
top bar means that there are unsaved changes; after saving, the top bar
says *Saved*.

A line that you are still editing is kept and saved too, as if you had
pressed **Ctrl+Enter**. If the line refuses the edit, it stays open with its
message, nothing is saved, and the top bar says *Not saved: correct the cell
being edited*.

If the file changed on disk since you opened it (another window, or another
program, saved it), Stilo does not overwrite it: the top bar says *Not
saved: changed on the server, reload it*. Copy your changes, run **Reload
document** from the commands pane, and apply them again.

Before you open another document or close the page with unsaved changes,
the browser asks you to confirm.

## The navigation pane

- Click a document to open it. Documents are listed without the `.texl`
  extension.
- Other files, such as images, PDFs and spreadsheets, are listed too, greyed
  out, with their full name. Click one to open it in a new browser tab; a
  file that the browser cannot show downloads.
- Click a folder to fold or unfold it. Double-click it to show only that
  folder; the arrow at the top of the pane goes back up.
- Right-click a document, a folder or the empty area of the tree for a menu of
  commands, or use the `⋯` button of a row or of the pane's header. The header
  also has buttons for New document and New folder.
- **Ctrl+B** hides or shows the pane.

Each document has its own address in the browser, so you can bookmark it,
and the browser's back button goes to the document you had open before.

## New documents and folders

**New document…** (**Alt+N**) asks for a name, in the tree, and creates the
document in the folder you right-clicked. The header button and **Alt+N** use
the folder of the item you last used in the tree. The name gets `.texl` if it
does not have it. Stilo does not overwrite an existing document.

**New folder…** creates a folder the same way.

## Upload files

**Upload files…**, in the menu of a folder or of the pane, adds files from
your computer to the folder: drawings, photos, data. Pick one or several in
the dialog that opens. A file whose name is already taken in the folder is
not uploaded; the top bar says which ones.

A document can then show or link to the file: see
[Links to read](linking.md#links-to-read).

## Managing documents and folders

These commands are in the menus of the navigation pane, and in the commands
pane, where they act on the item you last used in the tree. They work on
other files as on documents, except Duplicate.

| Command            | What it does                                          |
|--------------------|-------------------------------------------------------|
| **Rename** (F2)    | Changes the name of a document, file or folder, in its row of the tree. A rename cannot add or remove the `.texl` extension: a document stays a document. |
| **Move to…**       | Moves a document, file or folder to a folder you choose. |
| **Duplicate**      | Copies a document next to it, under a name you give, and opens the copy. Documents only. |
| **Copy link**      | Copies the link of a document or file, relative to the open document, ready for `texl.import`, a Markdown link or an image. |
| **Delete** (Delete) | Moves a document, a file or a folder with everything in it to the trash. |
| **Open as root**   | Shows only this folder in the pane, as a double click does. |
| **Refresh**        | Reads the tree again.                                 |
| **Show other files** | Shows or hides the files that are not documents, and the folders that hold only such files. It is on by default, and the browser remembers it. |

**F2** and **Delete** work on the tree only while an item of the tree has the
focus; elsewhere they act on the lines of the sheet.

> **Links do not follow.** Rename and Move to… warn you that links to the item
> will stop working: links and imports in other documents are not updated.

If the item holds the open document, Stilo offers to save your changes first.
The document stays open at its new address, with a fresh undo history.

### Delete and the trash

Delete asks first. Nothing is erased: a document or file goes to a hidden
`.trash` folder at the top of the served folder, inside a folder named after
the time of the deletion. To get it back, move it out with your file manager,
as Stilo has no command for it. A deleted open document closes.

The folder of a deleted document stays, even if empty. Deleting a folder moves
everything in it, documents and other files, to the trash, and the folder is
gone. The question before it says how many documents and other files go with
it.

## Commands

**F1**, or the ⋮ button at the right of the top bar, opens the list of all the
commands, grouped and with their shortcuts. Click a command to run it;
click a group's name to fold it. The browser may ask before **Paste** runs from
here.

**Show source** (**Alt+U**) shows the document's text, read-only, in place of
the editor, with your unsaved changes. **Alt+U** again, the close button or any
editor command goes back to the editor, with its undo history kept.

**Alt+T** switches between the dark and the light theme. The browser
remembers your choice.

## The file

Every document is a plain text file, which any text editor can open. Each
line of the sheet starts with a marker, as `<!--{ bek4 : markdown }-->`,
with its name and its type. [The document format](../file-format.md)
describes it.
