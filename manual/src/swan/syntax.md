# Syntax

A Swan program is one expression, made of operands (names, literals and
bracketed groups) joined by operators. This chapter describes the operands;
[Operators](operators.md) describes the rest.

## Whitespace and comments

Spaces, tabs and line breaks separate tokens and are otherwise ignored, so an
expression can span several lines.

A comment starts with `#` and runs to the end of the line:

```swan
x = 10     # bind 10 to x
x + 1      # => 11
```

## Names

A name starts with a letter or `_` and continues with letters, digits and `_`.
Names are case-sensitive.

```swan
total = 1
_tmp = 2
item2 = 3
Total = 4
total                # => 1
```

Swan has no keywords. `TRUE`, `FALSE` and the built-in namespaces are ordinary
names bound in the global scope, so you can shadow them (but you rarely want
to). A name that is not bound evaluates to `Nothing`, not to an error:

```swan
not_bound_anywhere   # => ()
```

## Numbers

A number literal is a sequence of digits, with an optional fraction and an
optional exponent. All numbers are 64-bit floating-point values.

```swan
42                   # => 42
3.14                 # => 3.14
1.5e3                # => 1500
2E-2                 # => 0.02
```

A number cannot start or end with a dot, and cannot contain `_`. A negative
number is the `-` operator applied to a positive literal.

```swan
.5                   # => Undefined
1_000                # => Undefined
-0.5                 # => -0.5
```

## Text

A text literal is enclosed in double quotes. It can span several lines.

```swan
"hello"              # => "hello"
greeting = "Dear reader,
  welcome."
text.size greeting   # => 23
```

Text literals have **no escape sequences**: a backslash is an ordinary
character, and a literal cannot contain a double quote. Single quotes do not
delimit text.

```swan
"a\nb"               # this is the four characters a, \, n, b
text.size "a\nb"     # => 4
'single'             # => Undefined
```

In a template, write quotes and other special characters in the text around
the tags instead.

## Brackets

| Brackets  | Meaning                                                             |
|-----------|---------------------------------------------------------------------|
| `( ... )` | Grouping. `()` alone is `Nothing`, the empty value.                 |
| `[ ... ]` | A [list](collections.md#lists) of the values inside.                |
| `{ ... }` | A [namespace](collections.md#namespaces) of the names bound inside. |

```swan
(1 + 2) * 3          # => 9
()                   # => ()
[1, 2, 3]            # => [1, 2, 3]
{a: 1, b: 2}         # => {a: 1, b: 2}
```

## Syntax errors

Swan never rejects a program with an error message of its own. A syntax
error anywhere in an expression, such as a missing closing bracket, a
misplaced operator, a stray `)` or an unknown character such as `@`, makes
the whole expression `Undefined`, and none of it runs, not even its
assignments.

```swan
(1 + 2               # => Undefined, missing closing `)`
1 + * 2              # => Undefined, unexpected `*`
2 + 1e3 ) 1          # => Undefined, unexpected `)`
(1 @ 2)              # => Undefined
x = 5, x + (2 +      # => Undefined, and x is not bound
```

This holds inside brackets too, and in a part that would never be evaluated,
as in `TRUE | (1 +`. In a template each tag is read on its own, so a syntax
error spoils only its own tag.

See [Undefined values](undefined.md) to find out what went wrong.
