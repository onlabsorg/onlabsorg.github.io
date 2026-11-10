# stilo tutor

```text
stilo tutor [--dir DIR] [--reset] [--port PORT] [--no-browser]
```

Opens Stilo's tutorial in your browser: short lessons that teach the editor
and the `stilo` command by doing.

```sh
stilo tutor
```

```text
Stilo: a new copy of the tutorial is in /home/ada/.local/share/stilo/tutorial
Stilo: the tutorial is at http://127.0.0.1:8000/index.texl (press Ctrl+C here to stop)
```

The tutorial has twelve lessons, 30 to 45 minutes in all, from your first
edit to a project of your own, and two advanced lessons after them. Each
lesson is a document: you read it and do its exercises in the editor. Many
exercises check themselves and show *✓ Done*, and the index shows how far
you are.

Press Ctrl+C in the terminal to stop; Stilo says *Stilo: stopped.
Goodbye!* Your work stays: the next `stilo tutor` opens your copy as you
left it.

## Your copy

The first `stilo tutor` copies the tutorial into a folder of your own and
makes it a [project](../editor/projects.md). You change your copy, never
the original, so you can try anything.

The folder depends on your computer: `stilo tutor --help` shows it. On
Linux it is `~/.local/share/stilo/tutorial`.

`--reset` starts again from a fresh copy. Your old copy is not deleted: it
is renamed, with the date and time, next to the new one, and `stilo tutor`
says where.

```sh
stilo tutor --reset
```

```text
Stilo: your old copy of the tutorial is now in /home/ada/.local/share/stilo/tutorial-old-20261110-093012
Stilo: a new copy of the tutorial is in /home/ada/.local/share/stilo/tutorial
```

When a newer Stilo comes with new lessons, `stilo tutor` says that your copy
was made by an older version and proposes `--reset`.

## Options

| Option         | Default          | Meaning                                         |
|----------------|------------------|-------------------------------------------------|
| `--dir DIR`    | your user data folder | The folder of your copy. It must be empty, missing, or a copy of the tutorial. |
| `--reset`      |                  | Start again from a fresh copy; the old one is moved aside. |
| `--port PORT`  | `8000`           | The port to serve the tutorial on, as in [`stilo serve`](serve.md). |
| `--no-browser` |                  | Do not open the browser; open the address that `stilo tutor` prints yourself. |
