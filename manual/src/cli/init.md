# stilo init

`stilo init` makes a folder a [package](../editor/packages.md): a folder of
documents that belong together, with the references they use.

```sh
stilo init beam
```

```text
Stilo: /home/ada/beam is a package: package.texl, references/
```

It creates the folder if it does not exist, and then:

- writes `package.texl`, which marks the folder as a package;
- puts the Stilo library into `references/`, as `stilo.texlz`, for the
  [data tables](../editor/cell-types.md#data-table-cells) and
  [charts](../editor/cell-types.md#chart-cells) of the package's documents.

Without a folder, it makes the current folder a package:

```sh
cd beam
stilo init
```

## Options

| Option        | What it does                                          |
|---------------|-------------------------------------------------------|
| `folder`      | The folder of the package, created if missing. Default: the current folder. |
| `--name NAME` | The name of the package, written in `package.texl`. Default: the folder's name. |

## `package.texl`

`package.texl` is an ordinary document, which you can open in the editor and
add notes to:

```texl
# beam

This folder is a Stilo package. This file marks its home folder: in an
import, `~` stands for it, as in `~/references/stilo.texlz/index.texl`. The values below
configure the package.

<% package_name = "beam" %>
<% stilo_version = "0.7.0" %>
```

`stilo_version` is the version of Stilo that made the package.

## Running it again

`stilo init` does not overwrite anything. In a folder that is already a
package, it leaves `package.texl` alone and only adds the Stilo library if
`references/stilo.texlz` is missing:

```text
Stilo: /home/ada/beam is already a package: added references/stilo.texlz
```

If the library is there, there is nothing to do:

```text
Stilo: /home/ada/beam is already a package, with references/stilo.texlz: nothing to do
```

This is how you [update the Stilo library](../editor/packages.md#update-the-stilo-library)
of a package.
