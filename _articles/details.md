---
layout: article
title:  "Details tag template"
author: Willy McAllister
comments: true
---

Here's a template for inserting an html ```\<details\>``` tag into markdown. It allows markdown syntax inside the summary and the body of a ```\<details\>``` tag. This works with Jekyll's Kramdown dialect of markdown, served by GitHub Pages.

{% capture details %}
DETAILS
{% endcapture %}
{% capture summary %}SUMMARY{% endcapture %}{% include details.html %}

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Markdown template

Copy and paste these four lines into your markdown document.  

```
{% raw %}{% capture details %}
DETAILS
{% endcapture %}
{% capture summary %}SUMMARY{% endcapture %}{% include details.html %}{% endraw %}
```

Replace DETAILS and SUMMARY with your content.

## Include file

The last line of the template references a file: \_includes/details.html. Create a file with this code and put it in your \_includes folder.

```
{% raw %}<details>
    <summary>{{ summary | markdownify | remove: '<p>' | remove: '</p>' }}</summary>
    {{ details | markdownify }}
</details>{% endraw %}
```

## Details style

Example css styles for the details tag, saved in /assets/main.scss.

```
{% raw %}//
// <details> tag
//
$grey-color:         #757575;
$grey-color-darkish: darken($grey-color, 15%);
$brand-color:        #2a7ae2;
$details-background-color: #dbdbdb;

details {
    border-radius: 10px;
    padding: 0px 8px;
    margin-bottom: 15px;
}
details[open] {
    background: $details-background-color;
    padding: 0px 8px 8px 8px;
}
summary {
    margin: 0px 0px 8px 0px;
    outline:none;
}
details summary {
    color: $brand-color;
}{% endraw %}
```

## Examples

### Markdown syntax, equations, and images inside details tag

{% capture details %}
$\text R_\text T = \text R_\text N = 500\,\Omega$

$\text V_{\text T} = \text V_{\text T} \, \text R_{\text N} = 0.002 \cdot 500 = 1\,\text V$

![Resistor and voltage source schematic]({% link i/thevenin2.svg %}){: .centered :}
{% endcapture %}
{% capture summary %}show **the** answer{% endcapture %}{% include details.html %} 

### Nested details tags

{% capture details %}
This is information in the outer details tag.
{% capture summary %}Inner details tag{% endcapture %}
{% capture details %}
And even more inside an inner details tag.
{% endcapture %}{% include details.html %}
{% capture summary %}Outer details tag{% endcapture %}
{% endcapture %}{% include details.html %}

The markdown source file for this article is in \_articles/details.md.