# Spinning Numbers D3.js animations

This repository contains the code for animated images for spinningnumbers.org, created with [D3.js](http://d3js.org).

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

The code surrounded by {{ }} is a special liquid syntax used by Jekyll to generate my static web pages. To insert this in a plain .html file replace the liquid syntax with your specific paths to the .js and .css files.

Example article: [What's with the name?](http://spinningnumbers.org/a/whats-with-the-name.html)