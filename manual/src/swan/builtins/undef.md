# undef

Creating and inspecting [undefined values](../undefined.md).

## `undef.from`

```text
undef.from value -> Undefined
```

Returns an undefined value that carries `value`, for example a message that
explains the error. The whole argument is wrapped, even a tuple. Its
`description` is `Custom undefined value: `, followed by a short value as you
would write it, or by its type for any other value.

```swan
err = undef.from "not found"
type err             # => "Undefined"
(undef.inspect err).val        # => "not found"
(undef.inspect (undef.from {a: 1})).description    # => "Custom undefined value: a namespace"
```

## `undef.inspect`

```text
undef.inspect u -> Namespace
```

Returns a namespace that describes the undefined value `u`. Its `type` member
names the kind of error, and `description` gives the error in plain words. The
other members depend on the type:

| `type`            | Members                       | Meaning                                    |
|-------------------|-------------------------------|--------------------------------------------|
| `UnaryOperation`  | `op`, `val`, `pos`            | operation `op` failed on the operand `val` |
| `BinaryOperation` | `op`, `lhv`, `rhv`, `pos`     | operation `op` failed on `lhv` and `rhv`   |
| `Termination`     | `expected`, `pos`             | the expression ended before the closing bracket `expected` |
| `Token`           | `token`, `pos`                | a token is in the wrong place              |
| `Name`            | `pos`                         | a name was expected                        |
| `Value`           | `val`                         | created by `undef.from`                    |
| `HostError`       | `error`, `pos`                | a function of the host failed, with the text of its error |

In a document, `pos` is the position of the error in bytes from the start of
the document, and `uri` is the location of that document; an error made by a
built-in function has the position of its call. In code run with `parse`, `pos`
counts from the start of that code and there is no `uri`. A value made by
`undef.from` has neither. Operands that are themselves undefined are described
in the same way. If `u` is not undefined, the result is `Undefined`.

```swan
e = undef.inspect ([1] - 1)
e.type               # => "BinaryOperation"
e.description        # => "cannot subtract the number `1` from a list"
e.op                 # => "subtraction"
(e.lhv, e.rhv)       # => ([1], 1)
(undef.inspect (text.size 1)).(op, val)  # => ("text.size", 1)
```
