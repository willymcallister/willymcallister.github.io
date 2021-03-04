# Spinning Numbers D3.js graphs

This repository contains the code for static images (graphs) for spinningnumbers.org. The images are created with [D3.js](https://d3js.org). I chose this as an alternative to Khan Academy's [graphie](http://graphie-to-png.kasandbox.org/) program. I use D3js for static and animated graphs that require computed waveforms like exponentials or sines.

## D3 static images

Open ./assets/d3/whateverD3file.html in a browser. D3 runs and the .svg image is generated and rendered. To save the .svg image as an independent file, I use a bookmarklet called [SVG Crowbar](http://nytimes.github.io/svg-crowbar/) to pull the image out of the d3 page and open it in its own tab. Then save the image with a similar name to the /_images/ folder where it can be accessed in articles.

## Animated images 

Animated images are saved in \_articles/d3 folder. They are referenced with an "include_relative filename.html" command in the markdown article. The Jekyll rule is the animation file has to be saved in the folder or subfolder where the markdown article resides.

Each animation needs three kinds of code,

* someanimation.js - javascript where this animation is created
* someanimation.css - stylesheet specific to this animation
* someanimation.html - .html file to demonstrate this animation

I mash all three types of code into a single .html file. See for example logo-d3.html.

The animated .svg image is created by calling functions in the D3 library. The D3 library is pulled from d3js.org. I'm currently calling version 4 of D3.

Example article with an embedded D3 image: [What's with the name?](http://spinningnumbers.org/a/whats-with-the-name.html)


