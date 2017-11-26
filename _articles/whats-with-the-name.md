---
layout: article
title: What's with the name?
author: Willy McAllister
comments: true
---

Spinning Numbers refers to a special type of number engineers use to represent signals. Numbers that spin!

{% include_relative d3a/logo-d3.html %}

## Notation

Spinning numbers have this unusual math notation,

$\Large \quad e^{j\omega t}$ 

Where,
* $e$ is the base of the natural logarithm, the special number $e = 2.7182818\ldots$  
* $j$ is the imaginary unit. $j = \sqrt{-1}\qquad$ 
    * Engineers use $j$ instead of $i$ because we use $i$ for something else (current).
* $\omega$ (omega) indicates how fast the number spins. It is called the *angular frequency*, measured in radians per second.
* $t$ is time. You know what time is.

* The white circle has a radius of $1$.
* The spinning number is the moving yellow dot. The green stick isn't part of the number, it's just there to help us see it.

This $e^{j\omega t}$ notation is pretty scary looking. For the moment, don't let that bother you. Just appreciate that the whole expression represents a number that spins around. 

This is one of the most beautiful and useful ideas in mathematics and engineering. We use spinning numbers to represent signals. Here's an example of how we use spinning numbers to represent a sine wave. You combine two spinning numbers using [Euler's formula]({{ site.baseurl }}{% link _videos/ac-analysis-eulers-formula.md %}) to create a sine wave.

$\sin \omega t = \dfrac{1}{2}(e^{+j\omega t} - e^{-j\omega t})$

For now, don't worry about this fancy math notation, there's plenty of time to study that. This video shows what the equation means. Chill out and enjoy.

![]({{ site.baseurl }}{% link i/video.svg %}) [Euler's sine wave]({{ site.baseurl }}{% link _videos/eulers-sine.md %})

The animated image is created in [D3.js](http://d3js.org). The source code is [here](https://github.com/willymcallister/spinningnumbers/tree/master/_articles/d3).

If you want to know more right now and you can't stand to wait, jump to [AC analysis introduction]({{ site.baseurl }}{% link _videos/ac-analysis-intro1.md %}). This is where the theory of spinning numbers is developed and applied.
