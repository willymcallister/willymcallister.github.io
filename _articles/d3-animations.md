---
layout: article
title: Animations
author: Willy McAllister
comments: true
---

The animations for Spinning Numbers are created with the Javascript library [D3.js](https://d3js.org). The source code for animations is [here](https://github.com/willymcallister/spinningnumbers/tree/master/_articles/d3a).

I also use D3.js to create static graphs and calculated waveforms. The source code for static graphs is [here](https://github.com/willymcallister/spinningnumbers/tree/master/assets/d3). I open each d3 html file, touch up annotations here and there, and save the resulting svg image to the [i/ folder](https://github.com/willymcallister/willymcallister.github.io/tree/master/i). 

I found this handy Chrome-specific bookmarklet, [SVG Crowbar](https://nytimes.github.io/svg-crowbar/). It extracts the svg images from a web page and presents it in a form that can be saved as an svg file.  

### Euler's sine wave  

{% include d3a/eulers-sine-d3.html %}

### Euler's cosine wave

{% include d3a/eulers-cosine-d3.html %}

### Euler's sine and cosine  

{% include d3a/eulers-sine-cosine-d3.html %}

### Spinningnumbers logo  

{% include d3a/logo-d3.html %}


