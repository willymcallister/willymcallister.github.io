---
layout: article
title: What's with the name?
author: Willy McAllister
comments: true
---

Spinning Numbers refers to a special type of number engineers use to represent signals. Numbers that spin! The yellow dot is a spinning number.

{% include d3a/logo-d3.html %}

## Notation

Spinning numbers have this unusual math notation,

$\large \quad e^{j\omega t}$ 

This notation is pretty scary looking. For the moment, don't let that bother you. Just appreciate that the expression as a whole represents a number that spins. 

In the animation above,
* The spinning number is the yellow dot. The green stick isn't part of the number, it's just there to help us see it.
* The white circle has a radius of $1$.

A spinning number is made of,
* $e$ is the base of the natural logarithm, the special number $e = 2.7182818\ldots$  
* $j$ is the imaginary unit. $j = \sqrt{-1}\qquad$ 
    * Engineers use $j$ instead of $i$ because we use $i$ for something else (current).
* $\omega$ (omega) indicates how fast the number spins. It is the *angular frequency*, measured in radians per second. $2\pi$ radians is a full circle. $1$ radian is about $57\degree.$
* $t$ is time. You know what time is.

Any time you see $\large A\,e^{\,\pm\,j\,\text{something}\,t}$ you are looking at a spinning number. 

A spinning number has $e$ with an imaginary exponent $j$. The exponent includes time $t$. Time is the engine that drives the number forward. The $\pm$ sign controls the direction of rotation. The $\text{something}$ is a scale factor that controls the rate of rotation. $A$ is the amplitude, it determines the radius of the circle. 

Spinning numbers are one of the most beautiful and useful ideas in mathematics and engineering. We use them to represent signals. They have a prominent role in Fourier Transforms. 

We use spinning numbers to represent a sine wave or cosine wave by combining two spinning numbers using [Euler's formula]({{ site.baseurl }}{% link _videos/ac-analysis-eulers-formula.md %}),

$\sin \omega t = \dfrac{e^{+j\omega t} - e^{-j\omega t}}{2j}$
$\qquad\cos \omega t = \dfrac{e^{+j\omega t} + e^{-j\omega t}}{2}$

For now, don't worry about this fancy math notation, there's plenty of time to study that. Chill out, enjoy the videos,

![]({{ site.baseurl }}{% link i/video.svg %}) [Euler's sine wave]({{ site.baseurl }}{% link _videos/ac-analysis-eulers-sine-wave.md %})$\qquad$![]({{ site.baseurl }}{% link i/video.svg %}) [Euler's cosine wave]({{ site.baseurl }}{% link _videos/ac-analysis-eulers-cosine-wave.md %})

If you want to know more and you can't stand to wait, jump to [AC analysis introduction]({{ site.baseurl }}{% link _videos/ac-analysis-intro1.md %}) where the theory of spinning numbers is developed and applied.

The animated logo is created in [D3.js](https://d3js.org). The source code is [logo-d3.html](https://github.com/willymcallister/spinningnumbers/tree/master/_includes/d3a).

