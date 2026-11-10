# Projects and libraries

A **project** is a folder of documents that belong together, such as the
calculations for one structure, with the libraries they use. Everything a
project needs is inside its folder, so the folder works as a whole wherever
you copy it: to a colleague, to a server, into git.

```text
beam/
├─ project.texl          makes this folder a project
├─ lib/
│  └─ stilo/index.texl   the Stilo library
└─ checks/
   └─ beam-check.texl
```

## Make a project

Run [`stilo init`](../cli/init.md) in the folder:

```sh
cd beam
stilo init
```

It writes `project.texl`, which marks the folder as a project, and copies the
Stilo library into `lib/stilo/`. The [sample documents](../getting-started.md)
already have one: `examples/projects/beam`.

`project.texl` is an ordinary document, with the project's name. You can open
it in the editor and add notes about the project.

## `~`, the project folder

In an import, `~` stands for the project folder: the nearest folder, at or
above the document, that has a `project.texl`. So this line imports the Stilo
library from any document of the project, however deep in its folders:

```texl
<% texl.import "~/lib/stilo/index.texl" ~> (lib -> bind "stilo" lib.data.stilo) %>
```

The editor adds this line, hidden, when you write the first
[data table](cell-types.md#data-table-cells) or
[chart](cell-types.md#chart-cells) of a document.

Your own libraries work the same way. Put a library of steel sections in
`lib/steel/sections.texl`, and every document of the project imports it as
`~/lib/steel/sections.texl`. A document can move to another folder of the
project without a change to its imports.

Outside a project, `~` means something else: the folder that
[`stilo serve`](../cli/serve.md) serves, in the editor, and your home folder,
for [`stilo render`](../cli/render.md). Make the folder a project, and both
mean the same folder.

## Libraries

A library is a folder of documents in `lib/`. There is nothing to install: to
add a library to a project, copy its folder into `lib/`.

| Library        | What it gives                                       |
|----------------|-----------------------------------------------------|
| `lib/stilo/`   | The functions that Stilo's lines use: the [data table](cell-types.md#data-table-cells) and the [chart](cell-types.md#chart-cells). `stilo init` copies it. |

### Update the Stilo library

A project keeps the copy of the Stilo library that `stilo init` made, also
when you update Stilo: its documents keep working as they were. A project
made with Stilo 0.3 has no charts, for example. To give a project the
library of your current Stilo, make a new project in an empty folder and
copy its library over the old one:

```sh
stilo init /tmp/fresh
rm -r beam/lib/stilo
cp -r /tmp/fresh/lib/stilo beam/lib/stilo
```

On Windows, use your file manager for the last two steps.

A library that has its own `project.texl` is a project of its own: its `~`
is its own folder, not yours.

The editor hides folders named `~`, and does not let you create one: in an
address, `~` always stands for the project folder.

Only Stilo, in the editor and in `stilo render`, knows this meaning of `~`.
Other Texl programs read it as an ordinary folder name.
