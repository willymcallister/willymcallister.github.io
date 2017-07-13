---
layout: article
title:  "Parallel conductance"
author: Willy McAllister
comments: true
---

In a previous article we studied [parallel resistors](http://spinningnumbers.org/a/parallel-resistors.html). 

![](https://ka-perseus-images.s3.amazonaws.com/f84dc8f7aa0ad09db6897028cfe43d93615e3070.svg){: .centered }

We derived this equation to combine parallel resistors into a single equivalent resistor,

$\text R_{\text{parallel}} = \dfrac{1}{\left (\dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \ldots + \dfrac{1}{\text{R}_{\text N}} \right )}$

This is a pretty complex expression, with $1/\text R$ terms embedded inside another reciprocal. There is another way to approach this problem, using the concept of *conductance*.
  
Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Resistors can be represented by their *conductance*.

Conductance is the reciprocal or resistance. $\text G = 1/\text R$

Conductances in parallel combine as a simple sum, similar to series resistors. 

$\text G_{\text{parallel}} = \text{G1} + \text{G2} + \ldots + \text G_\text N$ 

----

## Conductance

Ohm's Law, $v = i\,\text R$, defines resistance as the ratio of voltage divided by current,

$\text R = \dfrac{v}{i}$

*Conductance* is the inverse of resistance. Conductance is current over voltage,

$\text G = \dfrac{i}{v}$

This gives us another way to write Ohm's Law,

 $i = v\,\text G$

 A $100\,\Omega$ resistor is the same as a conductance of $\text G = \dfrac{1}{100\,\Omega}$ $= 0.01 \,\text S$.

![0.01 siemens conductance](https://ka-perseus-images.s3.amazonaws.com/9314d8633e131f3ae8976087f222a35bfa4dddc7.svg){: .centered }

 <details>
 <summary>why $\text G$?</summary>
 <p>$\text G$ is used to represent conductance. If memory serves me, someone picked $\text G$ because it sort of looks like an omega $\Omega$ rotated left. The $\text G$ letter only makes $90^\circ$of rotation, but that's as close as you can get to an upside down $\mho$ character using an ordinary typewriter. That's the story I heard.</p>
 </details>

The unit of conductance is the *siemens*, abbreviated $\text S$. It is named after [Werner von Siemens](https://en.wikipedia.org/wiki/Werner_von_Siemens), electrical engineer and founder of the German electronics and telecommunications company that bears his name. There is always an *s* at the end of *siemens*, because that's how he spelled his name, $1\,\text{siemens}$. 

You may come across an older term, *conductance*, specified in units of *mhos*, which is just \"ohms\" spelled backwards. That term isn't used anymore.

When we use the word *conductance* instead of *resistance* to describe the same physical object we are simply emphasizing a different aspect of its behavior. Resistance fights against or impedes current flow, while conductance welcomes or allows current to pass through. The terms are two sides of the same idea. 

<details>
<summary>resistivity and conductivity</summary>
<p>You may have heard the terms <em>resistivity</em> and <em>conductivity</em>. These sound a lot like <em>resistance</em> and <em>conductance</em>, but resistivity and conductivity are a little different. They are properties of the bulk materials used to fabricate individual resistors. For more information, see <a href="http://spinningnumbers.org/a/resistance-resistivity.html">Resistance and resistivity</a> or this Wikipedia page on <a href="https://en.wikipedia.org/wiki/Electrical_resistance_and_conductance">Electrical Resistance and Conductance</a>.</p>
</details>

## Parallel conductance

Now we'll repeat the analysis of parallel resistors, but this time, instead of calling each component a resistor, we will call it a conductance. Notice how the similar this analysis is to when we figure out [series resistors](http://spinningnumbers.org/a/series-resistors.html#resistors-in-series).  

<details>
    <summary>terminology</summary>
    <p>The component we are studying is called a <em>conductance</em> as opposed to a <em>conductor</em>. Conductor sounds too much like a simple wire. It is also fine to refer to it as a resistor: "Resistor $\text{G1}$ has a conductance of $0.01\,\text S$".</p>
</details>

Here is a circuit with conductances in parallel. We will analyze this circuit using the language of conductance, and the conductance form of Ohm's Law, $i = v\,\text G.$

![Parallel conductances](https://ka-perseus-images.s3.amazonaws.com/8c5da88c8c0487fd2e52679c83c2a80cbe977d8c.svg){: .centered }

We know the value of current $i$ is some given constant, created by the current source. 

We don't know the value of voltage $v$ that appears across the resistors and current source.  
We don't know how $i$ splits up into the three currents flowing through $\text{G1}, \text{G2},$ and $\text{G3}$.

Two more things we know:

* The three conductance currents have to add up to the total current $i$. 

* Voltage $v$ is the same for all three conductances. 

With just this little bit of knowledge, plus the conductance form of Ohm's Law, we can write some expressions:

The individual currents add up to the main current,

$i = i_{\text{G1}} + i_{\text{G2}} + i_{\text{G3}} $

We can write Ohm's Law for each conductance using the same $v$ term,

$i_{\text{G1}} = v \, \text{G1} \qquad i_{\text{G2}} = v \, \text{G2} \qquad  i_{\text{G3}} = v \, \text{G3}$

Merging the Ohm's Law expressions into the current sum equation,

$i = v\, \text{G1} \,+\, v\, \text{G2} \,+\, v\, \text{G3}$

Factor out the voltage term and gather the conductance values in one place:

$i = v\,\, (\text{G1} + \text{G2} + \text{G3})$

This looks just like Ohm's Law for a single conductance, except the parallel conductances appear together as a sum.  

We conclude: 

>When conductances are in parallel, the overall conductance is the sum of the individual conductances.

Notice how much this looks like the formula for resistors in series. Conductances in parallel are like resistances in series, they add.

## Equivalent parallel conductance

We can imagine a new conductance equivalent to the sum of the parallel conductances.   

$\text G_{\text{parallel}} = \text{G1} + \text{G2} + \text{G3}$

![equivalent conductance](https://ka-perseus-images.s3.amazonaws.com/d92e1e523f0e158a9c58c2a358b03b11ea339d3a.svg){: .centered }

$\text G_{\text{parallel}}$ is equivalent in the sense that the same voltage appears for a given current.

## Example

Let's solve the [same circuit](http://spinningnumbers.org/a/parallel-resistors.html#concept-check) we did for parallel resistors, but using our new conductance representation. 

This is the circuit with conductances, $\text G = \dfrac{1}{\text R}$

![Conductance example circuit](https://ka-perseus-images.s3.amazonaws.com/7e67c138c7b7fc0f2c5f843a4c99d8ab34569031.svg){: .centered }{: height="200px"}

We want to find voltage $v$ and the individual currents, $i_{\text{G1}}$, $i_{\text{G1}}$, and $i_{\text{G1}}$, using the conductance form of Ohm's Law, $i = v\,\text G$.

**Find $v$ and the current through the three conductances.**  
**Show that the individual currents add up to $i$.**

See if you can solve this yourself before peeking at the answer. 

<details>
<summary>Show Answer</summary>
<p>The steps to a solution are:</p>
<ol>
<li>Find the equivalent parallel conductance $G_{parallel}$. </li> 
<li>Find the voltage $v$ using $i = v\,\text G$.</li>
<li>Find the individual currents, again using Ohm's Law.</li>
<li>Verify the individual currents add up to what they should.</li>
</ol>

<p>The equivalent $G_{parallel}$ is the sum of the three conductance values.</p>

<p>$G_{parallel} = 0.02\,\text S + 0.01\,\text S + 0.002\,\text S = 0.032\,\text S$</p>

<p>Now we can find $v$,</p>

<p>$i_{\text S} = v\, G_{parallel}$</p>

<p>$100\,\text{mA} =  v\cdot 0.032\,\text S$</p>

<p>$v = \dfrac{100\,\text{mA}}{0.032\,\text S} = 3.125\,\text{V}$</p>

<img src="https://ka-perseus-images.s3.amazonaws.com/5a3a7645376d3e8de8b8e9757275000d4de3377d.svg">

<p>As expected, this gives the same $v$ as the conventional parallel resistor analysis. </p>

<p>Now work through the individual currents,</p>

<p>$i_{\text{G1}} = v\, \text{G1} = 3.125\,\text{V} \cdot 0.02\,\text S\phantom{0} = 62.50\,\text{mA}$</p>

<p>$i_{\text{G2}} = v\, \text{G2} = 3.125\,\text{V} \cdot 0.01\,\text S\phantom{0} = 31.25\,\text{mA}$</p>

<p>$i_{\text{G3}} = v\, \text{G3} = 3.125\,\text{V} \cdot 0.002\,\text S = \phantom{0}6.25\,\text{mA}$</p>

<p>The full solution looks like this,</p>

<p><img src="https://ka-perseus-images.s3.amazonaws.com/de38336c98f6905a89366fa15c37086d02bfbca7.svg"></p>

<p>And finish up with a check to see if the individual currents add up to the source current,</p>

<p>$62.5\,\text{mA} + 31.25\,\text{mA} + 6.25\,\text{mA} = 100\,\text{mA}\qquad$ Yes!</p>
</details>

## Summary
{:.no_toc}

Conductance is the reciprocal or resistance. $\text G = 1/\text R$

Conductances in parallel combine with a simple sum. The two ways to compute an equivalent parallel resistor are:

$\text R_{\text{parallel}} = \dfrac{1}{\left (\dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \ldots + \dfrac{1}{\text{R}_{\text N}} \right )}$

$\text G_{\text{parallel}} = \text{G1} + \text{G2} + \ldots + \text G_\text N$ 

Using conductance is a rearrangement of the same computation.

How you choose to analyze parallel circuits, $\text G$ or $\text R$, is your choice, based on convenience and simplicity.