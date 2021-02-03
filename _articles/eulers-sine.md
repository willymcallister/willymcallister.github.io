---
layout: article
title:  "Euler's sine"
author: Willy McAllister
comments: true
audio_file : assets/audio/Book_Bag_Jammy_Jams.mp3
---

{% include d3a/eulers-sine-d3.html %}

<audio autoplay="true" src="{{ page.audio_file | relative_url }}" controls loop></audio>


### Euler's formula for sine

$j\sin \omega t = \dfrac{1}{2} (e^{+j\omega t} - e^{-j\omega t})$

Sine emerges along the imaginary axis, the vector sum of two spinning numbers, so the vector sum actually produces $j\sin \omega t$,

|The green spinning number is| $+\dfrac{1}{2} e^{+j\omega t}$|
|The pink spinning number is| $-\dfrac{1}{2} e^{-j\omega t}$|
{:.noborder}

The negative sign reverses the pink spinning number. It starts on the negative real axis while the green spinning number starts on the positive real axis. (If you reload the web page watch where the two vectors start at $t = 0$.)

Sine (the yellow dot on the imaginary axis) is the vector sum of green and pink.

Created by Willy McAllister.

<small>Just music, no narration. The background music is *Book Bag* by E's Jammy Jams. {% comment %}https://bulbahsan.github.io/youtube-library-player/youtube-library-player/index.html{% endcomment %}</small>

<small>Animated with d3.js, [source code](https://github.com/willymcallister/willymcallister.github.io/blob/master/_includes/d3a/eulers-sine-d3.html).</small>