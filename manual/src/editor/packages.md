# Packages and references

A **package** is a folder of documents that belong together, such as the
calculations for one structure, with the documents of others that they use.
Everything a package needs is inside its folder, so the folder works as a
whole wherever you copy it: to a colleague, to a server, into git.

```text
beam/
├─ package.texl            makes this folder a package
├─ references/
│  ├─ stilo.texlz          the Stilo library
│  └─ steel-revA.texlz     a colleague's steel data, revision A
└─ checks/
   └─ beam-check.texl
```

## Make a package

Run [`stilo init`](../cli/init.md) in the folder:

```sh
cd beam
stilo init
```

It writes `package.texl`, which marks the folder as a package, and puts the
Stilo library into `references/`, as `stilo.texlz`. The
[sample documents](../getting-started.md) already have one:
`examples/packages/beam`.

`package.texl` is an ordinary document, with the package's name. You can open
it in the editor and add notes about the package.

## `~`, the package folder

In an import, `~` stands for the package folder: the nearest folder, at or
above the document, that has a `package.texl`. So this line imports the Stilo
library from any document of the package, however deep in its folders:

```texl
<% texl.import "~/references/stilo.texlz/index.texl" ~> (lib -> bind "stilo" lib.data.stilo) %>
```

The editor adds this line, hidden, when you write the first
[data table](cell-types.md#data-table-cells) or
[chart](cell-types.md#chart-cells) of a document.

A document can move to another folder of the package without a change to its
imports.

Outside a package, `~` means something else: the folder that
[`stilo serve`](../cli/serve.md) serves, in the editor, and your home folder,
for [`stilo render`](../cli/render.md). Make the folder a package, and both
mean the same folder.

## References

The packages that your package uses are its **references**: a library of
steel sections, a colleague's loads, the Stilo library. They live in the
`references/` folder. There is nothing to install: to add a reference, copy
it into `references/`.

A reference is a package itself, either a folder or a
[packed package](#packed-packages), one file. Its main document is
`index.texl`. Import the reference by its name, and you get that document:

```texl
<% texl.import("~/references/steel-revA.texlz") ~> (lib -> bind "steel" lib.data) %>
```

This is how the basis of design of the sample beam takes its steel data.
`index.texl` of the steel package imports its own `sections.texl`, from its
own folder, and gives the sections and the steel grade to the documents that
import it. A reference that is a folder works the same way:
`~/references/steel/` imports `steel/index.texl`. You can also import any
other document of a reference by its full address, as
`~/references/stilo.texlz/index.texl` above.

| Reference                 | What it gives                                       |
|---------------------------|-----------------------------------------------------|
| `references/stilo.texlz`  | The functions that Stilo's lines use: the [data table](cell-types.md#data-table-cells) and the [chart](cell-types.md#chart-cells). `stilo init` puts it there. |

A reference has its own `package.texl`, so inside it `~` is its own folder,
not yours.

## Packed packages

A **packed package** is a whole package in one file, named `*.texlz`, to share
as you share a Word file. [`stilo pack`](../cli/pack.md) makes one from a
package folder:

```sh
stilo pack steel -o beam/references/steel-revA.texlz
```

Stilo opens a packed package as a folder that cannot be changed. In the
navigation pane it has its own icon and a lock; unfold it to see its
documents, which open read-only, and use them as any other. Imports reach
into it, also into packed packages inside it.

The file itself is like any other file: you can upload, rename, move, delete
and download it. To change a packed package, change the folder it was made
from, and pack it again, under a new name if it is a new revision.

The same files always give the same packed file, byte for byte, and
`stilo pack` prints its *fingerprint* (SHA-256), a code that changes when
anything inside changes. Two people with the same fingerprint have the same
package.

Behind the scenes, a `.texlz` file is a ZIP archive with `package.texl` at its
top.

## Update the Stilo library

A package keeps the copy of the Stilo library that `stilo init` put in it,
also when you update Stilo: its documents keep working as they were. To give a
package the library of your current Stilo, delete `references/stilo.texlz`
and run `stilo init` in the package again: it adds the missing library and
leaves the rest alone.

```sh
rm beam/references/stilo.texlz
stilo init beam
```

### Packages made with older versions

Up to Stilo 0.5, a package was called a *project*, marked by `project.texl`,
and its references were in `lib/`. Stilo 0.6 no longer reads those names.
Rename them once:

1. Rename `project.texl` to `package.texl`, and `project_name` inside it to
   `package_name`.
2. Rename `lib/` to `references/`, and in every document replace `~/lib/`
   with `~/references/` in the imports.

Up to Stilo 0.6, the Stilo library was a folder, `references/stilo/`. It
still works. To use the library of your current Stilo, run `stilo init` in
the package, which adds `references/stilo.texlz`; then replace
`~/references/stilo/` with `~/references/stilo.texlz/` in the imports, and
delete the old folder.

## Good to know

- The editor hides folders named `~`, and does not let you create one: in an
  address, `~` always stands for the package folder.
- Only Stilo, in the editor and in `stilo render`, knows this meaning of `~`
  and of packed packages. Other Texl programs read `~` as an ordinary folder
  name.
