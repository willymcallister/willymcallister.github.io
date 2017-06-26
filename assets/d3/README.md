# Spinning Numbers D3.js animations and graphs

This repository contains the code for animated images and graphs for spinningnumbers.org, created with [D3.js](http://d3js.org).

## Animations
Each animation is three files.

* someanimation.js - javascript where this animation is created
* someanimation.css - stylesheet specific to this animation
* someanimation.html - test .html file to demonstrate this animation

Here's an example of how I embed an amimation in a Jekyll markdown article.

```
<p>
<div id="someanimationID"></div>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="{{ "/assets/d3/someanimation.js" | relative_url }}"></script>
<link rel="stylesheet" type="text/css" href="{{ "/assets/d3/someanimation.css" | relative_url }}" />
</p>
```

The animated .svg image is created with calls to the D3 library. The D3 library is accessed remotely from d3js.org, currently version 4.

The animation is inserted into the article at the point where you place 
```
<div id="someanimationID"></div>
```

The code surrounded by double curly brackets is a special liquid syntax used by Jekyll to generate my static web pages. To insert this in a plain .html file replace the liquid syntax with your specific paths to the .js and .css files.

Example article: [What's with the name?](http://spinningnumbers.org/a/whats-with-the-name.html)

## Graphs

Graph images created with D3 consist of a single .html file, including style specifications and javascript. An example article with D3 graphs is [Ideal  elements and sources](http://spinningnumbers.org/a/5ideal-elements-and-sources.html). 

To view the .svg image, open the .html file in a browser, and the image is rendered by D3. To save the .svg image, I use a bookmarklet called [SVG Crowbar](http://nytimes.github.io/svg-crowbar/) to extract the .svg image to its own tab, and then save it to my _images folder.