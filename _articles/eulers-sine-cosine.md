---
layout: article
title:  "Euler's sine and cosine"
author: Willy McAllister
comments: true
---

{% include d3a/eulers-sine-cosine-d3.html %} 

<audio src="https://www.youtube.com/audiolibrary_download?vid=78599bdd7a0a465e" controls loop></audio>

### Euler's formulas for sine and cosine

$j\sin \omega t = \dfrac{1}{2} (e^{+j\omega t} - e^{-j\omega t})$

$\cos \omega t = \dfrac{1}{2} (e^{+j\omega t} + e^{-j\omega t})$

Sine and cosine emerge from vector sum of three spinning numbers in Euler's Formula, 

The green vector is $+\dfrac{1}{2} e^{+j\omega t}$ 

The pink vector is $-\dfrac{1}{2} e^{-j\omega t}$ (used to make sine)  

The red vector is $+\dfrac{1}{2} e^{-j\omega t}$ (used to make cosine)

Sine is the yellow dot on the imaginary axis, the vector sum of green and pink.

Cosine is the orange dot on the real axis, the vector sum of green and red.

Notice the simulation reveals the $90\degree$ phase shift between sine and cosine. Watch the dots as they pass alternately pass through the origin.

Created by Willy McAllister.

Just music, no narration. The background music is *Sunday Stroll* by Huma Huma. {% comment %}https://bulbahsan.github.io/youtube-library-player/youtube-library-player/index.html{% endcomment %}

Animated with d3.js, [source code](https://github.com/willymcallister/spinningnumbers/tree/master/_articles/eulers-cosine-d3.html). The image is not a video. It's being computed on the fly by your device.