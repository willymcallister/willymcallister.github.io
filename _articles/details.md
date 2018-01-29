---
layout: article
title:  "Details template"
author: Willy McAllister
comments: true
---

Here's a template for inserting a Details tag into Jekyll kramdown's dialect of markdown. It allows you to use markdown syntax in both the summary and the body of the details tag. 
  
Open \_articles/details.md. Copy/paste the template text into your markdown file.

## Template

Copy and paste the next four lines into your markdown document,

{% capture summary %}SUMMARY{% endcapture %}  
{% capture details %}  
DETAILS  
{% endcapture %}{% include details.html %} 

(The details.html file referenced by the liquid include command is saved in \_includes/details.html.)

## Example

{% capture summary %}show **the** answer{% endcapture %}
{% capture details %}
$\text R_\text T = \text R_\text N = 500\,\Omega$

$\text V_{\text T} = \text V_{\text T} \, \text R_{\text N} = 0.002 \cdot 500 = 1\,\text V$

![Resistor and voltage source schematic]({{ site.baseurl }}{% link i/thevenin2.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

