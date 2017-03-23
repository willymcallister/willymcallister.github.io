# Spinning Numbers D3.js animations

This repository contains the code for animated images for spinningnumbers.org, created with [D3.js](http://d3js.org).

Each animation consists of three files.

* someanimation.js - javascript
* someanimation.css - stylesheet specific to this animation
* someanimation.html - brief html file to demonstrate this animation

Here's an example of how I embed an amimation in a Jekyll markdown article.

<pre>
<p>
<div id="spin-d3" class="centered"></div>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="{{ "/assets/d3/spinningnumbers-d3.js" | relative_url }}"></script>
<link rel="stylesheet" type="text/css" href="{{ "/assets/d3/spinningnumbers-d3.css" | relative_url }}" />
</p>
</pre>

The animated .svg image is created with calls to the D3 library. The D3 library is accessed remotely from d3js.org, currently version 4.

The code surrounded by {{ }} is a special liquid syntax used by Jekyll to generate my static web pages. To insert this in a plain .html file replace the liquid syntax with your specific paths to the .js and .css files.

Example article: [What's with the name?](http://spinningnumbers.org/a/whats-with-the-name.html)