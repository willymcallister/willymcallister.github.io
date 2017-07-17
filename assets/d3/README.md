# Spinning Numbers D3.js animations and graphs

This repository contains the code for animated images and graphs for spinningnumbers.org, created with [D3.js](http://d3js.org).

## Animation files

Each animation has three files.

* someanimation.js - javascript where this animation is created
* someanimation.css - stylesheet specific to this animation
* someanimation.html - test .html file to demonstrate this animation

For example, the animation files for the spinningnumbers.org logo are spinninnumbers.js, spinningnumbers.css, and spinningnumbers.html. 

The animated .svg image is created with calls to the D3 library. The D3 library is accessed remotely from d3js.org, currently version 4.

### Embedding animations

Here's how to embed a D3 amimation in a Jekyll markdown article.

```
<p>
<div id="someanimationID"></div>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="{{ "/assets/d3/someanimation.js" | relative_url }}"></script>
<link rel="stylesheet" type="text/css" href="{{ "/assets/d3/someanimation.css" | relative_url }}" />
</p>
```

The code surrounded by double curly brackets is a special syntax used by Jekyll/Liquid to generate static web pages. If you want to insert an image into a conventional .html file replace the liquid syntax with the specific paths to the .js and .css files.

Example article with embedded D3 image: [What's with the name?](http://spinningnumbers.org/a/whats-with-the-name.html)

## Saving D3 images

Open the .html file in a browser and the .svg image is generated and rendered by D3. To save the .svg image, I use a bookmarklet called [SVG Crowbar](http://nytimes.github.io/svg-crowbar/) to open the .svg image in its own tab, and then save it to my /_images/ folder.
