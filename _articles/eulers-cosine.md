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

|The spinning green vector is| $+\dfrac{1}{2} e^{+j\omega t}$| 
|The spinning red vector is| $+\dfrac{1}{2} e^{-j\omega t}$| 
{:.noborder}

Cosine (the orange dot) is the vector sum of green and red.

Created by Willy McAllister.

<small>Just music, no narration. The background music is *NirvanaVEVO* by Chris Zabriskie,  
[Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/), [Source](http://chriszabriskie.com/uvp/), [Artist](http://chriszabriskie.com/)</small>
{% comment %}https://bulbahsan.github.io/youtube-library-player/youtube-library-player/index.html{% endcomment %}

<small>Animated with d3.js, [source code](https://github.com/willymcallister/spinningnumbers/tree/master/_articles/eulers-cosine-d3.html).</small>
