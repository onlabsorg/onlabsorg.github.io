# Tags and output

## Writing tags

A tag starts at `<%` and ends at the first `%>` that follows. Spaces inside
the tag are optional, and a tag can span several lines and contain comments:

```texl
<%
# Prices in euros
price = 12.5,
quantity = 4
%>Total: <%price * quantity%> euros
```

```text
Total: 50 euros
```

A tag contains a single Swan expression. To do several things in one tag,
separate the steps with commas (see [Sequencing](../swan/tuples.md#sequencing)).

## From values to text

Each tag is replaced by its value, converted to text:

| Value                   | Output                                        |
|-------------------------|-----------------------------------------------|
| a text                  | the text itself, without quotes               |
| a number                | the number: `42`, `3.5`, `-0.25`              |
| a boolean               | `TRUE` or `FALSE`                             |
| `Nothing`               | nothing at all                                |
| a tuple                 | its items, separated by `, `                  |
| a list                  | `[[List of N]]`                               |
| a namespace             | `[[Namespace of N]]`, or [its own text](#namespaces-with-their-own-text) |
| a function              | `[[Func]]`                                    |
| an undefined value      | `[[Undefined]]`                               |
| a promise               | its value, once it resolves                   |

```texl
<% "text" %> | <% 7 / 2 %> | <% 3 > 2 %> | [<% () %>] | <% 1, 2, 3 %>
<% [1, 2, 3] %> | <% {a: 1} %> | <% x -> x %> | <% "a" - 1 %>
```

```text
text | 3.5 | TRUE | [] | 1, 2, 3
[[List of 3]] | [[Namespace of 1]] | [[Func]] | [[Undefined]]
```

The bracketed forms tell you that a value has no text form. To show the items
of a list, turn it into a tuple with `list.enum`, or join them with
`text.join` (see [Conditions and repetition](logic.md)).

### Namespaces with their own text

A namespace can say how it is written: give it a member `__text__`, a function
that receives the namespace and returns a text.

```texl
<% force = {value: 120, unit: "kN", __text__: f -> text.from f.value + " " + f.unit} %>
Horizontal load: <% Fx: force %>
Factored: <% 1.35 * Fx.value %> kN
```

```text

Horizontal load: 120 kN
Factored: 162 kN
```

The tag `<% Fx: force %>` shows the force as text and also names it, so the
next line can still compute with `Fx.value`. This is how a
[data table](../editor/cell-types.md#data-table-cells) in Stilo shows as a
table and still gives its columns to other lines.

`__text__` must return a text. If it returns anything else, such as a number,
the tag shows `[[Undefined]]`.

### Numbers

Numbers are written with as many digits as needed to represent them exactly,
which sometimes shows the limits of floating-point arithmetic:

```texl
<% 0.1 + 0.2 %>
<% math.round ((0.1 + 0.2) * 100) / 100 %>
```

```text
0.30000000000000004
0.3
```

Round values that come from calculations before showing them.

## Tags that write nothing

A tag whose value is `Nothing` disappears. Assignments return `Nothing`, so a
tag that only binds names writes nothing:

```texl
<% greeting = "Hello" %><% greeting %>, world!
```

```text
Hello, world!
```

Use `:` instead of `=` to bind a name *and* write its value:

```texl
The answer is <% answer : 6 * 7 %>. Again: <% answer %>.
```

```text
The answer is 42. Again: 42.
```

## Line breaks around tags

The text around a tag is kept exactly, including line breaks. A tag alone on a
line leaves an empty line behind:

```texl
<% title = "Report" %>
# <% title %>
```

```text

# Report
```

To avoid it, put the closing `%>` right before the next text, as the examples
in this manual do:

```texl
<% title = "Report" %># <% title %>
```

```text
# Report
```

or start the next line inside the tag:

```texl
<% title = "Report"
%># <% title %>
```

```text
# Report
```

## Writing the delimiters as text

There is no escape for `<%` in the text of a template: it always starts a tag.
To write it, produce it from an expression:

```texl
Tags look like <% "<" + "%" %> ... <% "%" + ">" %>.
```

```text
Tags look like <% ... %>.
```

Inside a tag, `%>` always ends the tag, even inside a text literal. Split it
the same way: `"%" + ">"`.

Swan text literals cannot contain a double quote. Write quotes in the text
around the tags instead:

```texl
<% name = "Ada" %>She said "<% name %>".
```

```text
She said "Ada".
```

## Unfinished tags

If a `<%` has no matching `%>`, the rest of the template, from the `<%` on, is
copied to the output as it is.
