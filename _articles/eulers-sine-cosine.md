---
layout: article
title:  "Euler's sine and cosine"
author: Willy McAllister
comments: true
---

{% include_relative d3a/eulers-sine-cosine-d3.html %}

<audio src="https://www.youtube.com/audiolibrary_download?vid=78599bdd7a0a465e" controls loop></audio>

### Euler's formulas for sine and cosine

$\sin \omega t = \dfrac{1}{2} (e^{+j\omega t} - e^{-j\omega t})\qquad$
$\cos \omega t = \dfrac{1}{2} (e^{+j\omega t} + e^{-j\omega t})$

Sine and cosine emerge from vector sum of three spinning numbers in Euler's Formula, 

The green vector is $\dfrac{1}{2} e^{+j\omega t}$ 

The pink vector is $-\dfrac{1}{2} e^{-j\omega t}$ (used to make sine)  

The red vector is $+\dfrac{1}{2} e^{-j\omega t}$ (used to make cosine)

Sine is the yellow dot, the vector sum of green and pink.

Cosine is the orange dot, the vector sum of green and red.

Notice the $90\degree$ phase shift between sine and cosine created by the simulation. Watch the dots as they pass through the origin.

Just music, no narration. The background music is *Sunday Stroll* by Huma Huma. {% comment %}https://bulbahsan.github.io/youtube-library-player/youtube-library-player/index.html{% endcomment %}

Animated with d3.js, [source code](https://github.com/willymcallister/spinningnumbers/tree/master/_articles/d3a/eulers-cosine-d3.html).

Created by Willy McAllister.
