---
layout: page
title: What's with the name?
author: Willy McAllister
comments: true
---

Spinning Numbers refers to a type of number engineers use to represent signals. Numbers that spin!

<p>
<div id="spin-d3" class="centered"></div>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="{{ "/assets/d3/spinningnumbers-d3.js" | relative_url }}"></script>
<link rel="stylesheet" type="text/css" href="{{ "/assets/d3/spinningnumbers-d3.css" | relative_url }}" />
</p>

We write a spinning number in this rather intimidating mathematical notation, $\Large e^{j\omega t}$. 

Where,
* $e$ is the base of the natural logarithm, the special number 2.7182818... 
* $j$ is the imaginary unit. $j = \sqrt{-1}\qquad$ 
    * We engineers use $j$ instead of $i$ because $i$ is used for something else (current).
* $\omega$ is how fast the vector is spinning, it is called the *radian frequency*.
* The radius of the big circle is $1$.
* $t$ is time. You know what time is.

This $e^{j\omega t}$ notation is pretty scary looking. Don't be bothered by how strange it looks for the moment, and just know it represents a number that rotates with time. This is one of the most beautiful and useful ideas in mathematics and engineering. We use spinning numbers to model and understand how signals move through the world. 

As an example, if we combine two spinning numbers we can create a sine wave using Euler's Formula.

$\sin \omega t = \dfrac{1}{2}(e^{+j\omega t} - e^{-j\omega t})$

For now, don't worry about the fancy math notation, there's plenty of time to study that. This video shows what the equation means. Chill out and enjoy.

![]({{ site.baseurl }}{% link i/video.svg %}) [Euler's sine wave]({{ site.baseurl }}{% link _videos/eulers-sine.md %})

If you can't stand it and you want to know more right now, go [here](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-ac-analysis/v/ee-ac-analysis-intro1).