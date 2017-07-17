---
layout: article
title: What's with the name?
author: Willy McAllister
comments: true
---

The name Spinning Numbers refers to a type of number engineers use to represent signals. Numbers that spin!

<p>
<div id="spin-d3"></div>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="{{ "/assets/d3/spinningnumbers-d3.js" | relative_url }}"></script>
<link rel="stylesheet" type="text/css" href="{{ "/assets/d3/spinningnumbers-d3.css" | relative_url }}" />
</p>

We write a spinning number with this crazy-looking mathematical notation,

$\Large e^{j\omega t}$ 

Where,
* $e$ is the base of the natural logarithm, the special number $e = 2.7182818\ldots$  
* $j$ is the imaginary unit. $j = \sqrt{-1}\qquad$ 
    * Engineers use $j$ instead of $i$ because we use $i$ for something else (current).
* $\omega$ (omega) indicates how fast the number is spinning. It is called the *angular frequency*.
* $t$ is time. You know what time is.

* The radius of the big circle is $1$.
* The green stick that connects the origin to the yellow spinning number isn't part of the number, it's just there to help us see it.

This $e^{j\omega t}$ notation is pretty scary looking. For the moment, don't let that bother you, and just appreciate that it represents a number that spins around. This is one of the most beautiful and useful ideas in mathematics and engineering. We use spinning numbers to represent sigals and understand how they move through the world. 

Here's one example of how we use spinning numbers. If we combine two spinning numbers we can create a sine wave using Euler's Formula.

$\sin \omega t = \dfrac{1}{2}(e^{+j\omega t} - e^{-j\omega t})$

For now, don't worry about the fancy math notation, there's plenty of time to study that. This video shows what the equation means. Chill out and enjoy.

![]({{ site.baseurl }}{% link i/video.svg %}) [Euler's sine wave]({{ site.baseurl }}{% link _videos/eulers-sine.md %})

If you want to more right now and you can't stand to wait, go [here](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-ac-analysis/v/ee-ac-analysis-intro1).