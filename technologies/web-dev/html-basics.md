# Basic HTML

source: [MDN-web-docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
date: 11-08-21
keywords: [HTML,MDN,link]

## HTML Intro

- HTML stands for: Hybertext Markup Language
- HTML is a markup language that defines the sturcture of your content.
- HTML is made up of ellements

## Anatomy of Elements

```html
<p>Hello World</p>
```

- *opening tag*: The name of a element wraped in angle brackets
- *Closing tag*: The name of a element wraped in angle brackets with a forward slash infront of the name
- *content*: content of the element
- *element*: everything from the open tage to closeing tag

Elements can also contail attributes

```html
<p class="test">Hello World</p>
```
In this case *class* is the attribute

- *Attributes* conatain extra infromation about the element

## Nesting elemts

you can put elemts inside other elems

```html
<p><strong>hello</strong> world</p>
```

## Empty Elements

*Empty elements*: elements with no content

i.e.

```html
<img src="test.png" alt="test">
```

## HTML Document Anatonmy

```html
<!DOCTYPE html>
<html>
        <head>
                <meta charset="utf-8">
                <title>My test page</title>
        </head>
        <body>
                <img src="images/firefox-icon.png" alt="My test image">
        </body>
</html>
```

Explained Line by line

- `<!DOCTYPE html>`: doctype is required. wewre orginaly needed for setting document rules but is now needed to make the document operate corectly
- `<html></html>`: This element wraps all the content of the entire page
- `<head></head>`: Exts as a contaier for all the stuff on the page that is not content. i.e. Keywords Page Deciption
- `<meta ccharset="utf-8">`: Set ts chrater set. Is makes it so you can handle most written charaters
- `<title></title>`: Sets the page title
- `<body></body>`: all teh content that should be shown

## Images

```html
<img src="images/firefox-icon.png" alt="My test image">
```

It imbeds a image in the page at the given location. Gets the image from the `src` source. `alt` is what is shown if the image is not loaded or the user can not see the image.

## Marking up text

Text mark up tags

### Headings

Allows certain parts of your content to be headings and subheading. There are six heading levels `<h1>-<h6>`

```html
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

These change the size of the text as well as other formating

### Paragraph

`<p>` elements are for containing paragraphs

```html
<p>This is a paragraph</p>
```

### Lists

There are two main list types

1. Unordered List: For lists where item order is not important `<ul>`
2. Orderd List: Lists where the order dose matter `<ol>`

In both cases `<li>` shows a list elelment\

```html
<ul>
  <li>A item</li>
  <li>A item</li>
  <li>A item</li>
</ul>
```

## Links

A links element `<a>` which is a short term for anchor. These make the internet exist

```html
<a href="https://www.google.com"> google</a>
```

`href`: is the link you want the user to go to on click, it stands for hypertext reference


