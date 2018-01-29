---
layout: article
title:  "Details template"
author: Willy McAllister
comments: true
---

Here's a template for inserting a Details tag into Jekyll kramdown. It allows you to use markdown syntax in both the summary and the body of the details tag. Replace SUMMARY and DETAILS with your content.

{% capture summary %}SUMMARY{% endcapture %}  
{% capture details %}  
DETAILS  
{% endcapture %}{% include details.html %} 

## Markdown template

Copy and paste the next four lines into your markdown document. 

```
{% raw %}
{% capture summary %}SUMMARY{% endcapture %}  
{% capture details %}  
DETAILS  
{% endcapture %}{% include details.html %} 
{% endraw %}
```

## .html include file

The last line of the template references a file: \_includes/details.html. Create a file with this code and put it in your \_includes folder.

```
{% raw %}
<details>
    <summary>{{ summary | markdownify | remove: '<p>' | remove: '</p>' }}</summary>
    {{ details | markdownify }}
</details>
{% endraw %}
```

## Example

{% capture summary %}show **the** answer{% endcapture %}
{% capture details %}
$\text R_\text T = \text R_\text N = 500\,\Omega$

$\text V_{\text T} = \text V_{\text T} \, \text R_{\text N} = 0.002 \cdot 500 = 1\,\text V$

![Resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

The markdown source file for this article is in \_articles\details.md.

