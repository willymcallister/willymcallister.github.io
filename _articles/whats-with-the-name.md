---
layout: article
title: What's with the name?
author: Willy McAllister
d3: logo-d3.js
comments: true
---

The name Spinning Numbers refers to a type of number engineers use to represent signals. Numbers that spin!

{% include embed-d3.html %}

We write a spinning number with this crazy-looking notation,

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

Animated images are created with [D3.js](http://d3js.org). The source code for my animations is on [github](https://github.com/willymcallister/spinningnumbers/tree/master/assets/d3).

If you want to know more right now and you can't stand to wait, go [here](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-ac-analysis/v/ee-ac-analysis-intro1).
