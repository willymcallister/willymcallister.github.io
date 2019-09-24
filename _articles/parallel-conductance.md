---
layout: article
title:  "Parallel conductance"
author: Willy McAllister
comments: true
---

It is possible to view a resistor as a *conductance*. Conductance is the reciprocal of resistance. The conductance viewpoint is useful when resistors are in parallel.

In a previous article we studied [resistors in parallel]({{ site.baseurl }}{% link _articles/parallel-resistors.md %}). 

![N parallel resistors]({{ site.baseurl }}{% link i/parallel_resistors6.svg %}){: .centered :}

We derived this equation to combine parallel resistors into a single equivalent resistor,

$\text R_{\text{parallel}} = \cfrac{1}{\cfrac{1}{\text{R1}} +\cfrac{1}{\text{R2}} + \ldots + \cfrac{1}{\text{R}_{\text N}}}$

This is a pretty complex expression, with $1/\text R$ terms embedded inside another reciprocal. 

There is another way to approach this problem using conductance that results in a simpler equation.
  
Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Resistors can be represented as a *conductance*.

Conductance is the reciprocal of resistance. $\text G = 1/\text R$

Conductances in parallel combine as a simple sum, similar to series resistors. 

$\text G_{\text{parallel}} = \text{G1} + \text{G2} + \ldots + \text G_\text N$ 

----

## Conductance

Ohm's Law, $v = i\,\text R$, defines resistance as the ratio of voltage divided by current,

$\text R = \dfrac{v}{i}$

*Conductance* is the reciprocal of resistance, current over voltage,

$\text G = \dfrac{i}{v}$

This gives us another way to write Ohm's Law,

 $i = v\,\text G$

 A $100\,\Omega$ resistor is the same as a conductance of $\text G = \dfrac{1}{100\,\Omega}$ $= 0.01 \,\text S$.

![0.01 siemens conductance]({{ site.baseurl }}{% link i/parallel_conductance1.svg %}){: .centered :}

<details>
<summary>why $\text G$?</summary>
<p>$\text G$ is the variable used to represent conductance. $\text G$ sort of looks like an almost upside down omega $\Omega$. $\text G$ has only $90^\circ$of rotation, but that's as close as we can get using an ordinary keyboard. Anyway, that's the story I heard.</p>
<p>You may come across an older term, the <em>mho</em>, as the unit of conductance. Mho is just ohm spelled backwards. The symbol for the mho was the super fun all the way upside down omega character $\mho$. Mho is obsolete and isn't used anymore.
</p>
</details>

The unit of conductance is the *siemens*, abbreviated $\text S$. It is named after [Werner von Siemens](https://en.wikipedia.org/wiki/Werner_von_Siemens), electrical engineer and founder of the German electronics and telecommunications company that bears his name. There is always an *s* at the end of *siemens*, because that's how he spelled his name, $1\,\text{siemens}$. 

When we use the word *conductance* instead of *resistance* we are simply emphasizing a different aspect of a resistor's behavior. Resistance fights against current flow, while conductance welcomes or allows current to pass through. The terms are two faces of the same idea. 

<details>
<summary>resistivity and conductivity</summary>
<p>You may have heard the terms <em>resistivity</em> and <em>conductivity</em>. These sound a lot like <em>resistance</em> and <em>conductance</em>, but they are a little different. Resistivity and conductivity are properties of the bulk material used to make individual resistors. See this article, <a href="https://spinningnumbers.org/a/resistivity.html">Resistance and resistivity</a>, or this Wikipedia page on <a href="https://en.wikipedia.org/wiki/Electrical_resistance_and_conductance">Electrical Resistance and Conductance</a>.</p>
</details>

{% capture summary %}resistivity and conductivity{% endcapture %}  
{% capture details %}  
You may have heard the terms *resistivity* and *conductivity*. These sound a lot like *resistance* and *conductance*, but they are a little different. Resistivity and conductivity are properties of the bulk material used to make individual resistors. See this article on [Resistivity]({{ site.baseurl }}{% link _articles/resistivity.md %}), or this Wikipedia page on [Electrical Resistance and Conductance](https://en.wikipedia.org/wiki/Electrical_resistance_and_conductance).  
{% endcapture %}{% include details.html %}

## Parallel conductance

Now we repeat the analysis of parallel resistors, but this time instead of calling each component a resistor we call it a conductance. Notice how the analysis is similar to [series resistors]({{ site.baseurl }}{% link _articles/series-resistors.md %}#resistors-in-series). 

<details>
    <summary>conductance vs. conductor</summary>
    <p>The component we are studying is called a <em>conductance</em> as opposed to a <em>conductor</em>. Conductor sounds too much like a simple wire. It is also fine to refer to it as a resistor: "Resistor $\text{G1}$ has a conductance of $0.01\,\text S$".</p>
</details>

Here is a circuit with three conductances in parallel driven by a current source. We analyze this circuit with the language of conductance and use the conductance form of Ohm's Law, $i = v\,\text G.$

![Parallel conductances]({{ site.baseurl }}{% link i/parallel_conductance2.svg %}){: .centered :}

We know,
* The value of current $i$ is a constant created by the current source. 
* Voltage $v$ is the same for all three conductances. 
* The three conductance currents $\text{G1}, \text{G2},$ and $\text{G3}$ have to add up to the total current $i$. 

We don't know,
* The value of voltage $v$ across the resistors and current source.  
* How $i$ splits up into the three currents flowing through $\text{G1}, \text{G2},$ and $\text{G3}$.

With what we know, we can write some expressions,

The individual currents add up to the main current,

$i = i_{\text{G1}} + i_{\text{G2}} + i_{\text{G3}} $

We can write Ohm's Law for each conductance using the same $v$ term,

$i_{\text{G1}} = v \, \text{G1} \qquad i_{\text{G2}} = v \, \text{G2} \qquad  i_{\text{G3}} = v \, \text{G3}$

Merging the Ohm's Law expressions into the current sum,

$i = v\, \text{G1} \,+\, v\, \text{G2} \,+\, v\, \text{G3}$

Factor out the voltage term and gather the conductance values in one place,

$i = v\,\, (\text{G1} + \text{G2} + \text{G3})$

This looks just like Ohm's Law for a single conductance, except the parallel conductances appear together as a sum. We conclude, 

For conductances in parallel, the overall conductance is the sum of the individual conductances.

Notice how much this sounds like the formula for resistors in series. Conductances in parallel add, just like resistors in series.

## Equivalent parallel conductance

We can imagine a new conductance equivalent to the sum of the parallel conductances,   

$\text G_{\text{parallel}} = \text{G1} + \text{G2} + \text{G3}$

![equivalent conductance]({{ site.baseurl }}{% link i/parallel_conductance3.svg %}){: .centered :}

$\text G_{\text{parallel}}$ is equivalent in the sense that the same voltage appears for a given current.

## Example

Let's solve the [same circuit](https://spinningnumbers.org/a/parallel-resistors.html#concept-check) we did for parallel resistors, but using our new conductance representation. 

This is the circuit with conductances, $\text G = \dfrac{1}{\text R}$

![conductance example circuit]({{ site.baseurl }}{% link i/parallel_conductance4.svg %}){: .centered :}

We want to find voltage $v$ and the individual currents, $i_{\text{G1}}$, $i_{\text{G1}}$, and $i_{\text{G1}}$, using the conductance form of Ohm's Law, $i = v\,\text G$.

**Find $v$ and the current through the three conductances.**  
**Demonstrate the individual currents add up to $i$.**

The steps to a solution are,

* Find the equivalent parallel conductance $\text G_{\text{parallel}}$. 
* Find the voltage $v$ using $i = v\,\text G$.
* Find the individual currents, again using Ohm's Law.
* Verify the individual currents add up to what they should.

See if you can solve this yourself before peeking at the answer. 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  

The equivalent $\text G_{\text{parallel}}$ is the sum of the three conductance values,

$\text G_{\text{parallel}} = 0.02\,\text S + 0.01\,\text S + 0.002\,\text S = 0.032\,\text S$

Now we can find $v$,

$i_{\text S} = v\, \text G_{\text{parallel}}$

$100\,\text{mA} =  v\cdot 0.032\,\text S$

$v = \dfrac{100\,\text{mA}}{0.032\,\text S} = 3.125\,\text{V}$

![conductance example voltage]({{ site.baseurl }}{% link i/parallel_conductance5.svg %}){: .centered :}

As expected, this gives the same $v$ as the conventional parallel resistor analysis.

Now work through the individual currents,

$i_{\text{G1}} = v\, \text{G1} = 3.125\,\text{V} \cdot 0.02\,\text S\phantom{0} = 62.50\,\text{mA}$

$i_{\text{G2}} = v\, \text{G2} = 3.125\,\text{V} \cdot 0.01\,\text S\phantom{0} = 31.25\,\text{mA}$

$i_{\text{G3}} = v\, \text{G3} = 3.125\,\text{V} \cdot 0.002\,\text S = \phantom{0}6.25\,\text{mA}$

The full solution looks like this,

![conductance example individual currents]({{ site.baseurl }}{% link i/parallel_conductance6.svg %}){: .centered :}

And finish up with a check to see if the individual currents add up to the source current,

$62.5\,\text{mA} + 31.25\,\text{mA} + 6.25\,\text{mA} = 100\,\text{mA}\qquad$ Yes!  
{% endcapture %}{% include details.html %}

## Summary
{:.no_toc}

Conductance is the reciprocal of resistance, 

$\text G = \dfrac{1}{\text R}$

Conductances in parallel combine with a simple sum. 

$\text G_{\text{parallel}} = \text{G1} + \text{G2} + \ldots + \text G_\text N$ 

Using conductance is a rearrangement of this computation,

$\text R_{\text{parallel}} = \cfrac{1}{\cfrac{1}{\text{R1}} +\cfrac{1}{\text{R2}} + \ldots + \cfrac{1}{\text{R}_{\text N}}}$

How you choose to analyze parallel circuits, $\text G$ or $\text R$, is up to you, based on convenience and simplicity.