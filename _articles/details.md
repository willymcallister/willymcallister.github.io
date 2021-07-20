---
layout: article
title:  "Details tag template"
author: Willy McAllister
comments: true
---

Here's a method for inserting an html ```\<details\>``` tag into markdown. It allows markdown syntax inside the summary and the body of a ```\<details\>``` tag. This works with Jekyll's Kramdown dialect of markdown, served by GitHub Pages.

{% capture details %}
DETAILS
{% endcapture %}
{% capture summary %}SUMMARY{% endcapture %}{% include details.html %}

There's also template/tag/style code for inserting a <span class="tooltip">tooltip<span class="tooltipcontent">This is a tooltip</span></span>.

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Details tag
### Details markdown template

Copy and paste these four lines into your markdown document.  

```
{% raw %}{% capture details %}
DETAILS
{% endcapture %}
{% capture summary %}SUMMARY{% endcapture %}{% include details.html %}{% endraw %}
```

Replace DETAILS and SUMMARY with your content.

Alternative: 

```
<details markdown=block>
<summary markdown=span>A *Summary*</summary>
These are the **details** for this item.
</details>
```

See also [Jekyll accordion](https://jekyllcodex.org/without-plugin/accordion/).

### Details include file

The last line of the template references a file: \_includes/details.html. Create a file with this code and put it in your \_includes folder.

```
{% raw %}<details>
    <summary>{{ summary | markdownify | remove: '<p>' | remove: '</p>' }}</summary>
    {{ details | markdownify }}
</details>{% endraw %}
```

### Details style

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

### Details examples

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

## Tooltip

Here are examples of tooltips created in markdown, 

Leading text --- <span class="tooltip">tooltip anchor<span class="tooltipcontent">tooltip with text</span></span> --- trailing text.

Leading text --- <span class="tooltip">tool tip anchor
  <span class="tooltipcontent"><img src="{% link i/rc_step_superposition_natural.svg %}" alt="Superposition sub-circuits." />
  <br>tooltip with image</span>
</span> --- trailing text.

At this point it is possible to express <span class="tooltip">$r$ in terms of $x$ <span class="tooltipcontent"><img src="{% link i/line_of_charge2_3.svg %}" alt="Line of charge with a test charge to the side" /></span></span>.

### Tooltip markdown template

To create a text tooltip, copy and paste this template into your markdown source,

```
LEADING TEXT <span class="tooltip">ANCHOR TEXT<span class="tooltipcontent">TOOLTIP TEXT</span></span> TRAILING TEXT.
```

For a tool tip with an image, use this template,

```
LEADING TEXT <span class="tooltip">ANCHOR TEXT <span class="tooltipcontent"><img src="{% link i/rc_step_superposition_natural.svg %}" alt="ALT TEXT" /></span></span> TRAILING TEXT
```


### Tooltip style

The styling for the tool tip is in /assets/main.scss,

```
///
/// Tool Tip, from https://www.w3schools.com/css/css_tooltip.asp
///
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dashed #ccc; /* dots under the anchor text */
}

/* Tooltip content */
.tooltip .tooltipcontent {
  visibility: hidden;
  width: 400px;
  background: var(--details-background-color);
  text-align: center;
  padding: 5px 0;
  border-radius: 4px; 
  /* Position the tooltip content */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

/* Show the tooltip content when you mouse over the tooltip anchor text */
.tooltip:hover .tooltipcontent {
  visibility: visible;
}
```

## Opening a link in a new tab

Append ```{:target="_blank"}``` to the link specification.

Example: [spinning numbers](https://spinningnumbers.org){:target="_blank"}

Code:
```
[spinning numbers](https://spinningnumbers.org){:target="_blank"}
```