---
layout: article
title:  "Details html tag template"
author: Willy McAllister
comments: true
---

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

Here's a template for inserting an html \<details\> tag into markdown. It allows markdown syntax inside the summary and the body of a \<details\> tag. This works with Jekyll's Kramdown dialect of markdown, served by GitHub Pages.

{% capture summary %}SUMMARY{% endcapture %}
{% capture details %}
DETAILS
{% endcapture %}{% include details.html %}

## Markdown template

Copy and paste these four lines into your markdown document.  

```
{% raw %}
{% capture summary %}SUMMARY{% endcapture %}
{% capture details %}
DETAILS
{% endcapture %}{% include details.html %}
{% endraw %}
```

Replace SUMMARY and DETAILS with your content.

## Include file

The last line of the template references a file: \_includes/details.html. Create a file with this code and put it in your \_includes folder.

```
{% raw %}<details>
    <summary>{{ summary | markdownify | remove: '<p>' | remove: '</p>' }}</summary>
    {{ details | markdownify }}
</details>{% endraw %}
```

## Details style

Example style for the details tag,

```
{% raw %}details {
    border-radius: 10px;
    padding: 0px 8px;     //closed padding matches [open] padding to keep the summary sitting still when opened.
    margin-bottom: 15px;
}
details[open] {
    background: $grey-color-darkish;
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

## Example

{% capture summary %}show **the** answer{% endcapture %}
{% capture details %}
$\text R_\text T = \text R_\text N = 500\,\Omega$

$\text V_{\text T} = \text V_{\text T} \, \text R_{\text N} = 0.002 \cdot 500 = 1\,\text V$

![Resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

The markdown source file for this article is in \_articles/details.md.

#Messing around

<style>
  .div1 {
  height: 350px;
  width: 530px;
  background-color: blue;
  display: table-cell;
  vertical-align: middle;
}
.div1:hover .div2 {
  color:  #cfd9cd;   // theme green blended with white
}
.div2 {
  text-align: center;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  font-variant: small-caps;
}
</style>

<div class="div1" style="background-image: url(https://www.pvgc.com/images/dynamic/getImage.gif?ID=100008989)">
  <div class="div2">
    Membership
  </div>
