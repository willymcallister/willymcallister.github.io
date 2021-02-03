---
layout: article
title:  "Euler's sine and cosine"
author: Willy McAllister
comments: true
audio_file : assets/audio/Sunday_Stroll_Huma_Huma.mp3
---

{% include d3a/eulers-sine-cosine-d3.html %} 

<audio autoplay="true" src="{{ page.audio_file | relative_url }}" controls loop></audio> 

### Euler's formulas for sine and cosine

<p>
$\begin{aligned}
j\sin \omega t &= \dfrac{1}{2} (e^{+j\omega t} - e^{-j\omega t}) \\
\\
\cos \omega t &= \dfrac{1}{2} (e^{+j\omega t} + e^{-j\omega t})
\end{aligned}$
</p>

Sine and cosine emerge from vector sum of three spinning numbers in Euler's Formula, 

|The green spinning number is| $+\dfrac{1}{2} e^{+j\omega t}$|                    |
|The pink spinning number is| $-\dfrac{1}{2} e^{-j\omega t}$| (used to make sine) | 
|The red spinning number is| $+\dfrac{1}{2} e^{-j\omega t}$| (used to make cosine)|
{:.noborder}

Sine is the yellow dot on the imaginary axis, the vector sum of green and pink.

Cosine is the orange dot on the real axis, the vector sum of green and red.

Notice the simulation reveals the $90\degree$ phase shift between sine and cosine. Watch the dots as they pass alternately pass through the origin.

Created by Willy McAllister.

<small>Just music, no narration. The background music is *Sunday Stroll* by Huma Huma. {% comment %}https://bulbahsan.github.io/youtube-library-player/youtube-library-player/index.html{% endcomment %}</small>

<small>Animated with d3.js, [source code](https://github.com/willymcallister/willymcallister.github.io/blob/master/_includes/d3a/eulers-sine-cosine-d3.html). The image is being computed on the fly by your device.</small>