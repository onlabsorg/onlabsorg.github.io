# stilo pack

```text
stilo pack [folder] [-o FILE]
```

Packs a [package](../editor/packages.md) folder into one file, a
[packed package](../editor/packages.md#packed-packages) named `*.texlz`, to
share as one file. Stilo opens it read-only.

```sh
stilo pack steel
```

```text
Stilo: packed 3 files into /home/ada/steel.texlz
sha256 12bc89180ae93bc618fb719d7d36ebd951713885467bcfd5abc0793cee2fe53a
```

The second line is the file's *fingerprint* (SHA-256): the same files always
give the same packed file and the same fingerprint, and any change inside
gives another one. Compare fingerprints to know whether two people have the
same package.

To use the packed package in another package, put it in that package's
`references/` folder and import it by its name:

```sh
stilo pack steel -o beam/references/steel-revA.texlz
```

```texl
<% texl.import("~/references/steel-revA.texlz") ~> (lib -> bind "steel" lib.data) %>
```

## Arguments and options

| Argument          | Default            | Meaning                                         |
|-------------------|--------------------|-------------------------------------------------|
| `folder`          | the current folder | The package to pack. It must have a `package.texl`. |
| `-o`, `--output FILE` | the folder's name with `.texlz`, next to the folder | The file to write. An existing file is replaced. |

## What goes in

Every file of the folder goes in, documents and other files, in their
folders. Left out are hidden files and folders (their names start with a
dot, as `.git` and the `.trash` of deleted files), links, and the files
that git is told to ignore.

A folder without `package.texl` is not packed, and `stilo pack` exits with
status 1:

```text
stilo: /home/ada/notes: not a package (no package.texl)
```
