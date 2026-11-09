# stilo init

`stilo init` makes a folder a [project](../editor/projects.md): a folder of
documents that belong together, with the libraries they use.

```sh
stilo init beam
```

```text
Stilo: /home/ada/beam is a project: project.texl, lib/
```

It creates the folder if it does not exist, and then:

- writes `project.texl`, which marks the folder as a project;
- copies the Stilo library into `lib/stilo/`, for the
  [data tables](../editor/cell-types.md#data-table-cells) of the project's
  documents.

Without a folder, it makes the current folder a project:

```sh
cd beam
stilo init
```

## Options

| Option        | What it does                                          |
|---------------|-------------------------------------------------------|
| `folder`      | The folder of the project, created if missing. Default: the current folder. |
| `--name NAME` | The name of the project, written in `project.texl`. Default: the folder's name. |

## `project.texl`

`project.texl` is an ordinary document, which you can open in the editor and
add notes to:

```texl
# beam

This folder is a Stilo project. This file marks its home folder: in an
import, `~` stands for it, as in `~/lib/stilo/index.texl`. The values below
configure the project.

<% project_name = "beam" %>
<% stilo_version = "0.3.0" %>
```

`stilo_version` is the version of Stilo that made the project.

## Running it again

`stilo init` does not overwrite a project. In a folder that already has a
`project.texl`, it stops with status 1:

```text
stilo: beam: already a project (project.texl exists)
```

It never overwrites an existing `lib/stilo/` either.
