---
layout: article
title:  "Numbers in electrical engineering"
author: Willy McAllister
comments: true
---

Electrical engineers use very large and very small numbers compared to our everyday experience. This article talks about big and small numbers with examples of how they show up in engineering applications. 

Engineering numbers are written in **engineering notation**, similar to scientific notation. It helps to get comfortable with engineering notation and the wide dynamic range of numbers that we engineers deal with every day.

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Scientific notation

If you've studied math or science you probably came across scientific notation. You can brush up on scientific notation with this [KA video](https://www.khanacademy.org/math/pre-algebra/exponents-radicals/scientific-notation/v/scientific-notation). To express a number in scientific notation, you rewrite it as a number $\ge1$ and $\lt10$, multiplied by a power of $10$. This might make more sense if we look at some examples:

* Avogadro's Number looks like this in scientific notation: $6.02214082 \times 10^{23}$. You may see the same number in computer syntax like this: $6.02214082\text { E}23$, where $\text E$ for $\text E$xponent stands in for "$\times 10 \text{ to the }$".

* The speed of light is $299792458$ meters per second. This is expressed in scientific notation as $2.99792458 \times 10^{8} \,\text{m/s}$. Engineers love to round numbers, so we would write this with fewer digits like this: $3.00 \times 10^8\,\text{m/s}$.
 
* The charge on an electron is a tiny unwieldy number. $0.00000000000000000016021766208$ coulombs. Rather than writing all those zeros—and getting it wrong most of the time—we can use scientific notation to write the number more simply: $1.6021766208 \times 10^{-19}$ coulombs. 

<p>
<details>
<summary> What is a coulomb?</summary>
<p>The <strong>coulomb</strong> is the Système International d'Unités (SI) unit for an amount of charge. $1$ coulomb of charge flows past a point in a wire in one second when the current in the wire is $1$ ampere.
$1 \,\text{coulomb} = 1 \,\text{ampere flowing for} \, 1 \,\text{second}$</p>

<p>In terms of electrons, $e^-$, one coulomb is the combined charge of $6.24 \times 10^{18}$ electrons.
</p>
</details>
</p>

## Engineering notation

Engineering notation is only slightly different than scientific notation. Engineers like exponents in multiples of three. This means the digits on the left of the decimal point fall in the range of $1$ to $999$. Our minds do a pretty good job imagining and comparing to numbers up to $1000$. Let's do an example.

It takes $0.0000333564095 \,\text{seconds}$ for light to travel $10 \,\text{kilometers}$ in a vacuum. Let's convert this small number into engineering notation:

* Find the decimal point. 
* Hop over *three* digits at a time, going right, until you hop over one, two, or three nonzero digits. We want the number to the left of the decimal point to be between $1$ and $999$. In this case, take two hops to the right, until you hop over $33$. 
* Write down $33$.
* Add a decimal point: $33.$
* Write down the remaining digits: $33.3564095$.
* Because we hopped *right*, finish by writing $10$ raised to the *negative* number of hops times three: $-2 \,\text{hops} \times 3 = -6$.

$33.3564095 \times10^{-6}$ seconds is the time it takes for light to travel 10 kilometers in a vacuum, in engineering notation.

A few more examples of numbers in engineering notation:
* Speed of light: $300 \times 10^6\,\text{m/s}$ (compare this to scientific notation above)
* A blink of an eye: ${\sim} 350 \times 10^{-3}\,\text s$

The number format rules are not rigid. As long as the point you are trying to make is clear and unambiguous, you may make exceptions. You can express the blink of an eye as 0.350 seconds if you want the reader to compare the value to one second.

One flaw in engineering notation is that it can mislead about the number of significant figures.  Engineers generally deal with wide tolerances of manufactured components, so the number of significant figures in circuit designs is usually small: two to three. If the tolerance is important, it is common to write it next to the number, as shown in this example:

A large resistance value: $33.3 \times 10^6 \,\Omega\,\pm1\%$.

Over time, you will develop a feel for numerical accuracy and rounding in different situations. When done appropriately, rounding to a few digits is not a sign of laziness, but a realization that real-world components are not all the same—and yet your design still has to work every time. There are other instances, such as during long calculations using computer arithmetic, where even tiny rounding errors are important to anticipate and control. It all depends on the situation. This is the engineering art.

## Number prefixes

Many numbers have names derived from Greek or Latin. Engineers and scientists use the number prefixes defined in the Système International d'Unités (SI). Here's a list of the most common prefixes we use in engineering. Notice how the exponents are multiples of three. 

Number       | Prefix  | Symbol    | Note
-------------|--------:|:---------:|------|
$10^{\,+12}$ | tera-   | $\text T$ | 
$10^{\,+9}$  | giga-   | $\text G$ | 
$10^{\,+6}$  | mega-   | $\text M$ |
$10^{\,+3}$  | kilo-   | $\text k$ | $\text k$ is the only >1 prefix in lower case
$10^{\,0}$   |         |           |
$10^{\,-3}$  | milli-  | $\text m$ |
$10^{\,-6}$  | micro-  | $\mu$     | be careful $\mu$ (mu) doesn't turn into \"m\"
$10^{\,-9}$  | nano-   | $\text n$ | 
$10^{\,-12}$ | pico-   | $\text p$ |

{% capture summary %}How do you say "giga"?{% endcapture %}  
{% capture details %}  
The Latin word *gigas* gives us the number prefix *giga-*. It is also the source of the English word <em>giant</em>. In English, the letter "g" can be hard (goat) or soft (giant). So how should "giga-" be pronounced?

I hear the hard "g" most of the time, but the soft "g" is fine. You might come across someone saying it that way. One such person is [Doc Brown](https://www.youtube.com/embed/mjCRUvX2D0E?rel=0) in the movie Back to the Future  
{% endcapture %}{% include details.html %}

## Large and small engineering numbers

Here are some examples of large, medium and small numbers used in real-world electrical systems. These examples are every-day occurrences, but you can always find greater extremes. There are lots of electrical words here. Don't worry if some of them are new, you don't have to know them right now.

**Frequency:** Frequency counts the number of times something happens in some interval of time. The SI unit for frequency is the hertz $(\text{Hz})$, which is the same as $1/s$ (*reciprocal second* or *per second*). The clock signal inside a personal computer has a high frequency of around $3\,\text{GHz}$ $(3 \times 10 ^{9}\,\text{Hz})$. This corresponds to a very short clock period — the amount of time between clock ticks — of $1/(3 \times 10^9)$ or $333\,\text{ps}$ $(333 \times 10^{-12} \,\text{s})$. Your heart beats about one time per second $(1 \,\text{Hz}$ or $60$ beats per minute).

**Resistance:** Resistance is measured in units of ohms $(\Omega)$. The resistance of a wire is often much less than one ohm. It is not unusual to find resistance values up to tens of megohms $10\, \text M\Omega$ $(10\times10^{6}\, \Omega)$ in circuits.

**Voltage:** The unit of electrical potential is the volt $(\text V)$. A battery you buy at the store is $1.5 \,\text{volts}$. You can hold this battery in your hand without fear of electric shock. Inside a computer, the chips usually operate with $3.3$ or $5 \,\text{volts}$. A car battery is $12 \,\text{volts}$. Depending on which country you live in a wall socket is $110$ or $220 \,\text{VAC}$ (Volts AC). This high voltage can be fatal if you touch it. Overhead high-tension power lines are thousands of volts — *tension* is the French word for voltage. Wireless signals transmitted through the air are tiny voltages — measured in microvolts $(10^{-6}\,\text{V})$ by the time they reach your radio, TV, or mobile phone.

**Current:** Currents are measured in amperes $(\text A)$. One ampere is a large current. Car batteries momentarily supply $100 \,\text{amperes}$ or more to start a car. A house may consume $150 \,\text{amperes}$ if all the appliances are running. Currents can also be absurdly small. There are situations where 1 femtoamp $(1 \times 10^{-15} \,\text A)$ matters.

**Time:** Electrical circuits can work at very short time scales. Time intervals in electronics range from $1 \,\text{second}$, for the heartbeat example above, down to 1 picosecond $(1\times10^{-12}\,\text{s})$.

**Capacitance:** The unit of capacitance is the farad $(\text F)$. If you have a capacitor storing $1 \,\text{coulomb}$ of charge and the measured voltage is $1\,\text{volt}$, then the capacitance is $1 \,\text{farad}$. A coulomb is a huge amount of charge, so a farad turns out to be a large awkward unit of capacitance. As a result, capacitance values you ordinarily come across are tiny numbers. $100 \,\text{microfarads}$ ($100 \times 10^{-6}\,\text F$) is quite a large capacitance. If you twist two $1$-inch ($2$- centimeter) pieces of ordinary insulated hookup wire together, those wires have a capacitance around $1$ picofarad $(1 \times 10^{-12} \,\text F)$.

<details>
<summary>What is a puff?</summary>
<p>The unit symbol for the picofarad, $\text{pF}$, is often pronounced "puff". We engineers are often serious people, but not so serious that we don't enjoy a fun nickname.  $( 1 \,$ "puff" $ = 1\,\text{pF} = 1 \times 10^{-12} \,\text F)$</p>
</details>

**Distance and Length**: Distance and length have units of meters $(\text m)$. We deal with huge distances and tiny lengths on a regular basis. Nature gives us some staggering distances—light travels $300 \times 10^{6}$ meters $(300 \,\text{million meters}$) in one second. 

Modern microelectronics blesses us with astoundingly small dimensions inside integrated circuits. Today's most aggressive—and expensive—integrated-circuit processes have dimensions as small as $15 \,\text{nanometers}$ $(15 \times 10^{-9}\,\text m)$. That's a man-made feature $15$ billionths of a meter across! The spacing between silicon atoms is $0.543 \,\text{nm}$ $(0.543 \times 10^{-9}\,\text{meters})$. Therefore, feature $15\,\text{nm}$ in width is on $28$ silicon atoms across. Astonishing!
        
## Unit grammar

There are two grammatical guidelines for unit names and unit symbols.

* *Names* of all units start with a lowercase letter, even if the unit is named after a person.
* *Symbols* are uppercase if the unit is named after a person, otherwise lowercase. 


|Unit name | example    | Unit symbol  | example              | Named for |
|:------|---------------|:------------:|------------------------|---------|
|second | 1 millisecond | $\text {s}$  | $2 \text { ns}$        |         |
|meter  | 300 kilometer | $\text {m}$  | $35  \text { nm}$      |         |
|hertz  | 10 kilohertz  | $\text {Hz}$ | $100  \text { MHz}$    | Hertz   |
|ohm    | 2 megohm      | $\Omega$     | $47  \text { k}\Omega$ | Ohm     |
|farad  | 10 picofarad  | $\text {F}$  | $220  \text { pF}$     | Faraday |
|ampere | 35 microamp   | $\text {A}$  | $65  \text { mA}$      | Ampère  |
|volt   | 11 kilovolt   | $\text {V}$  | $5 \,\mu \text {V}$    | Volta   |

I think it's cool how Ohm gets his own Greek symbol: $\Omega$, "Ohm-ega."

The short form "amp" is a perfectly acceptable way to abbreviate "ampere".

We've reviewed some of the numbers you encounter as you study electrical engineering. They span an enormous range. With practice this will become second nature.
