---
layout: article
title:  "Euler's sine"
author: Willy McAllister
comments: true
---

{% include d3a/eulers-sine-d3.html %}

<audio src="https://www.youtube.com/audiolibrary_download?vid=14c363704697d79b" controls loop></audio>

### Euler's formula for sine

$j\sin \omega t = \dfrac{1}{2} (e^{+j\omega t} - e^{-j\omega t})$

Sine emerges along the imaginary axis, the vector sum of two spinning numbers, so the vector sum actually produces $j\sin \omega t$,

The green vector is $+\dfrac{1}{2} e^{+j\omega t}$

The pink vector is $-\dfrac{1}{2} e^{-j\omega t}$

The negative sign reverses the pink vector. It starts on the negative real axis while the green vector starts on the positive real axis. (If you reload the web page watch where the two vectors start at $t = 0$.)

Sine (the yellow dot on the imaginary axis) is the vector sum of green and pink.

Created by Willy McAllister.

Just music, no narration. The background music is *Book Bag* by E's Jammy Jams. {% comment %}https://bulbahsan.github.io/youtube-library-player/youtube-library-player/index.html{% endcomment %}

Animated with d3.js, [source code](https://github.com/willymcallister/spinningnumbers/tree/master/_articles/eulers-sinewave-d3.html).