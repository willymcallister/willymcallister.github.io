---
layout: article
title:  "Diode equation"
author: Willy McAllister
comments: true
---

A diode's distinctive feature is that it conducts current in one direction, but not the other. The diode's $i$-$v$ behavior can be modeled by the non-linear *Shockley diode equation*. We will cover the details of that equation in this article.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed
{:.no_toc}

The $i$-$v$ curve of a diode is modeled by this non-linear equation, 

$i = \text I_\text S \left ( e^{\,qv/k\text T} -1  \right )$


<details>
    <summary>terms</summary>
<p>$i$ is the current through the diode.  <br>
$\text I_{\text S}$ is the reverse saturation current. For silicon, typically $10^{-12}\,\text{ampere}$.  <br>
$e$ is the base of the natural logarithm, $2.71828\cdots$.  <br>
$q$ is the charge on an electron,  $1.602 \times 10^{-19} \,\text{coulomb}$. <br> 
$v$ is the voltage across the diode.  <br>
$k$ is Boltzmann's constant, $1.380\times 10^{-23} \,\text{joule/kelvin}$  <br>
$\text T$ is the temperature in kelvin. Room temperature is about $300\,\text{kelvin}$.</p>
</details>

---

## Diode $i$-$v$ equation

The diode $i$-$v$ relationship can be modeled with an equation. This equation is based on the physics underlying the diode action, along with careful measurements on real diodes. 

$i = \text I_\text S \left ( e^{\,qv/k\text T} -1  \right )$

![Silicon diode i-v curve]({{ site.baseurl }}{% link i/diode2.svg %}){: .centered :}

The equation covers the range of a few volts on either side of the origin. It does not model where the diode breaks down far to the left on the voltage axis. 

This plot looks more like an elbow than an exponential curve. The exponential-ness shows up if we zoom in the vertical current scale a bunch $(\text{milliamperes}$ $\rightarrow$ $\text{picoamperes})$. (The voltage scale is zoomed in as well.) 

![Silicon diode i-v curve close up]({{ site.baseurl }}{% link i/diode3.svg %}){: .centered :}

At this scale you can see the tiny negative reverse saturation current $-\text I_{\text S}$ flowing backwards through the diode when the diode is reverse biased. 

For a silicon diode, a typical value for $\text I_{\text S}$ is $10^{-12}\,\text A$, or $1$ picoampere.  
For a germanium diode, a typical $\text I_{\text S}$ is quite a bit higher, $10^{-6}\,\text A$, or $1$ microampere.

## Inside the diode $i$-$v$ equation

>This section dives into the diode equation in some detail. It is okay to skip this and move on to the diode circuit example in the next article.

$i = \text I_\text S \left ( e^{\,qv/k\text T} -1  \right )$

There are many parameters in the diode equation. Let's go through them carefully.

Look for $v$, the voltage across the diode. It's up in the exponent. This explains why current $i$ has an exponential dependence on voltage $v$. 

Now let's look at all that other stuff up in the exponent of $e^{\,qv/k\text T}$. We know exponents have no dimensions. That means the other terms in the exponent $(q/k\text T)$ have to combine together to end up with units of $1/\text{volts}$. 

* $q$ is the charge on an electron, in coulombs: $q = 1.602 \times 10^{-19} \,\text C$.

* $k$ is the Boltzmann constant: $k = 1.380\times 10^{-23} \,\text{J/K}\,\text{(joules per kelvin)}$

* $\text T$ is the temperature measured from absolute zero in $\text{kelvin}$ or $\text K$. 

A particle at $\text T = 300\,\text K$, (room temperature), has an average kinetic energy of $k\text T$, 

$k\text T = 1.380\times 10^{-23} \,\text{J/K}\cdot 300\,\text K = 4.14\times 10^{-21}\,\text J$ 

If the particle happens to be an electron, we can talk about its energy per charge. *Energy per charge* might sound familiar. Its other name is *voltage*. 

$\dfrac{k\text T}{q} = \dfrac {4.14 \times 10^{-21}\,\text J} {1.602\times 10^{-19}\,\text C} = 25.8 \,\dfrac{\text J}{\text C} \approx 26 \,\text{mV}$

At room temperature,  $k\text T/q$ is $26$ millivolts. That represents the kinetic energy of an average everyday electron. The exponent of the diode equation can be written as $v/26\,\text{mV}$. See how this relates the diode voltage to the average energy of an electron? Boltzmann's constant connects our macro world to the micro atomic world.

If your diode is at room temperature, the diode equation becomes,

$i = \text I_\text S \left ( e^{\,v/26\text{mV}} -1  \right )$

When the diode voltage is greater than $26\,\text{mV}$ the exponent term grows rapidly. When the diode voltage is less than $26\,\text{mV}$, the exponent term is small and the $1$ term dominates.

<details>
    <summary>Boltzmann's constant</summary>
    <p>The Boltzmann constant is a very important number in physics. It connects the world we see and sense with the atomic-scale world of atoms and electrons. Suppose you have a chamber filled with gas molecules. You can measure the temperature of the chamber (a macro-world measurement). If the chamber gets warmer, down at the atomic level the gas molecules have higher kinetic energy. If you know the temperature of the gas, the Boltzmann constant $k$ relates the temperature to the average kinetic energy of a molecule. $k$ shows up wherever behavior at the atomic level is related to what happens in the macro world. Diodes conducting current is one such case. There are tons of others.</p>
    <p>The units of Boltzmann's constant are joules (of kinetic energy) per kelvin. Physicists write Boltzmann's constant as $k_B$.</p>
    <p>David Santo Pietro, KA's physics fellow tells you more about <a href="https://www.khanacademy.org/science/in-in-class11th-physics/in-in-phy-kinetic-theory/in-in-kinetic-molecular-theory-of-gas/v/boltzmanns-constant">Boltzmann's constant</a></p>
</details>

<details>
    <summary>"per kelvin" sounds funny</summary>
    <p>Temperature can be measured in "degrees Celsius", or "degrees  Fahrenheit", or "kelvin". We write temperatures as $23\,^\circ\text C$ or $73\,^\circ\text F$, with the little circle $^\circ$ degree symbol. </p>
    <p>The units of absolute temperature are kelvin. Kelvin are defined to already <em>be</em> degrees. So we say "kelvin" instead of "degrees Kelvin", since that would be redundant. The temperature in kelvin is written without the little degree circle, like this: $-273\,^{\circ}\text C\ = 0\,\text K$.</p>
    <p>The size of a kelvin is the same as a degree Celsius. The only difference is the kelvin scale starts at absolute $0$ and the Celsius scale starts at the freezing point of water. A temperature of absolute zero, or $0\,\text K$ is $-273\,^{\circ}\text C\,\text {(celcius)}$. </p>
    <p>Try not to confuse big $\text K$ the unit for kelvin with little $k$ for Boltzmann's constant.</p>
</details>

<details>
    <summary>300 K is a nice warm room</summary>
    <p>$300\,\text K$ is $27^{\circ}\text C$ or $80^{\circ}\text F$, which is a pretty warm room. Engineers like round number that are easy to remember, so we use $300\,\text K$ for room temperature. This is close enough for circuit design.</p>
</details>

<details>
    <summary>kT on q</summary>
    <p>My physics teacher pronounced $k\text T/q$ as "kT on q". I always liked the sound of that. The reciprocal is, of course, "q on kT".</p>
</details>

## Diodes are sensitive to temperature

Since temperature $\text T$ appears in the diode $i$-$v$ equation, we know the diode curve changes at different temperatures. Increasing temperature shifts the $i$-$v$ curve to the right.

![Silicon diode i-v curve at -40C, +27C, and +85C]({{ site.baseurl }}{% link i/diode4.svg %}){: .centered :}

<p class="caption">Silicon diode equation at $\text T = -40^{\circ}\text C, \text T = +27^{\circ}\text C$, and $\text T = +85^{\circ}\text C$. Warmer temperatures shift the diode curve to the right.</p>

## Summary
{:.no_toc}

A diode is modeled by this equation,

$i = \text I_\text S \left ( e^{\,qv/k\text T} -1  \right )$

$\text I_{\text S}$ is the *saturation current*.  For silicon diodes, a typical saturation current is $\text I_{\text S}=10^{-12}\,\text A$. 

In the exponent of the diode equation, the term $k\text T/q $ is equivalent to $26\,\text{mV}$ if the diode is near room temperature. $k$ is Boltzmann's constant, $\text T$ is the temperature in kelvin, and $q$ is the charge on an electron in coulombs. 

Near room temperature, the diode equation can be written as,

$i = \text I_\text S \left ( e^{\,v/26\text{mV}} -1  \right )$
