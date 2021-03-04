---
layout: article
title:  "Euler's cosine"
author: Willy McAllister
comments: true
audio_file : assets/audio/NirvanaVEVO_Chris _Zabriskie.mp3
---

{% include d3a/eulers-cosine-d3.html %} 

<audio autoplay="true" src="{{ page.audio_file | relative_url }}" controls loop></audio> 

### Euler's formula for cosine

$\cos \omega t = \dfrac{1}{2} (e^{+j\omega t} + e^{-j\omega t})$

Cosine emerges on the real axis, the vector sum of two spinning numbers, 

|The green spinning number is| $+\dfrac{1}{2} e^{+j\omega t}$| 
|The red spinning number is| $+\dfrac{1}{2} e^{-j\omega t}$| 
{:.noborder}

Cosine (the orange dot) is the vector sum of green and red.

Created by Willy McAllister.

<small>Just music, no narration. The background music is *NirvanaVEVO* by Chris Zabriskie,  
[Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/), [Source](https://chriszabriskie.com/uvp/), [Artist](https://chriszabriskie.com/)</small>
{% comment %}https://bulbahsan.github.io/youtube-library-player/youtube-library-player/index.html{% endcomment %}

<small>Animated with d3.js, [source code](https://github.com/willymcallister/willymcallister.github.io/blob/master/_includes/d3a/eulers-cosine-d3.html).</small>
