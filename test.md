---
title: "Test Post"
metaTitle: "test"
metaDesc: "This is a test post for checking markdown rendering"
date: "2022-01-01"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tortor consectetur, tincidunt tortor a, tempus arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vulputate convallis justo tincidunt imperdiet. Aenean sit amet elementum orci, id scelerisque velit. Maecenas venenatis velit sed dolor auctor, a iaculis leo hendrerit. Maecenas varius ullamcorper sagittis. Nulla rhoncus, erat vel mattis gravida, libero lorem volutpat orci, id aliquet nibh sapien et ipsum. Sed a bibendum purus, ut euismod nisl. Suspendisse cursus, turpis in viverra suscipit, mauris sem lobortis velit, nec sodales metus enim ut nisl. Quisque commodo diam ac ipsum ultrices commodo non eu neque. Donec ac urna dapibus, feugiat sem vel, mattis mauris.

Maecenas augue elit, condimentum et purus vitae, pulvinar faucibus massa. Suspendisse potenti. Nullam ultrices ultricies cursus. Pellentesque eget vehicula felis, vel fermentum est. Cras in libero quis ante venenatis mollis. Sed egestas turpis et leo scelerisque pulvinar. Vivamus volutpat ut risus vel tempor. Pellentesque quis aliquet eros. Fusce vitae leo sit amet nibh tempus condimentum. Donec ac commodo sem. Morbi rutrum luctus fringilla. Nullam ac velit neque. Suspendisse potenti. Praesent non erat leo. Donec sit amet tempor lorem, vel eleifend risus.

Sed faucibus pretium ex nec lacinia. Suspendisse mollis mi eu sapien scelerisque, at tincidunt neque varius. Donec facilisis erat nulla, mattis vehicula est imperdiet eu. Morbi congue eleifend faucibus. Integer venenatis dignissim ornare. Nulla fringilla pretium dolor non volutpat. Aenean varius lectus sapien, in blandit risus consequat quis. Integer sit amet ultrices dolor, sed luctus sapien. In hac habitasse platea dictumst. Nullam vulputate vehicula nisi ut tincidunt. Maecenas viverra augue ac justo iaculis, ac sodales augue consectetur.

Pellentesque tempor erat rhoncus eros vestibulum venenatis. In quis elementum arcu. Duis eget tortor neque. Morbi et scelerisque felis. Integer eget laoreet risus. Praesent nec aliquet urna, eget elementum urna. Phasellus sit amet sapien purus. Quisque nunc sem, cursus sit amet ullamcorper sit amet, consequat quis ex. Nunc vestibulum ultrices leo vel sagittis. Mauris pharetra, dolor ultrices aliquam cursus, diam justo pulvinar massa, sed imperdiet elit ex nec velit. Sed nisl massa, vehicula at enim vel, egestas volutpat felis. Phasellus vitae facilisis augue, non dapibus dolor. Sed nec maximus diam, a elementum lorem. Mauris tempus mi leo, id eleifend massa elementum nec.

Suspendisse pellentesque ac arcu vel dictum. Vivamus nisi elit, efficitur ac arcu sed, tristique consequat urna. Morbi mollis velit sit amet nulla porta, in molestie nulla sagittis. Integer ullamcorper metus sed neque consectetur lobortis. Sed commodo sit amet nisi non consectetur. Fusce pretium dolor in lorem auctor elementum. Aliquam sem lacus, eleifend et tempus vel, faucibus id nibh. Vivamus vitae tincidunt neque. Fusce gravida hendrerit lobortis. Aliquam non tempus libero. Vivamus condimentum turpis ullamcorper odio interdum, a iaculis mauris consequat.

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg "The Dojocat"

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
_here be dragons_
:::
