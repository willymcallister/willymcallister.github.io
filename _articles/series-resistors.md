---
layout: article
title:  Resistors in series
author: Willy McAllister
comments: true
---

Components are in *series* if they are joined head to tail like this, 

![Circuit components in series]({% link i/series_resistors1.svg %}){: .centered :} 

We show the properties of the series connection using resistors.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## The series connection

Resistors are in series when they are connected head-to-tail *and* there are no other wires branching off from the nodes between components. $\text{R1}$, $\text{R2}$, and $\text{R3}$ are in series,

![Resistors in series]({% link i/series_resistors2.svg %}){: .centered :} 

In a series connection the same current flows in every resistor. All the current going in the front end flows out the other end. The current is the same everywhere along the chain.

![Resistors in series have the same current]({% link i/series_resistors2a.svg %}){: .centered :} 

The resistors in the following image are *not* in series. Extra branches lead away from the nodes between resistors. If these branches have current (orange arrows) then $\text{R1}$, $\text{R2}$, and $\text{R3}$ *do not* share the same current and are therefore not in series. 

![Resistors not in series]({% link i/series_resistors3.svg %}){: .centered :} 

## Resistors in series

Here is a circuit with resistors in series. Voltage source $\text V_{\text{S}}$ is connected to a chain of resistors. The resistors are connected head-to-tail, so we know they are in series. 

![Three resistors and voltage source]({% link i/series_resistors4.svg %}){: .centered :} 

Here's what we know,

* Voltage $v_\text S$ is some known constant value $\text V_\text S$. 
* The resistors are in series, so we know the same current $i$ flows through all three.
* The individual voltages across the resistors have to add up to $v_{\text S}$.

With this little bit of knowledge and Ohm's Law we can figure out the unknowns. Here are the things we don't know, 

* We don't know the current $i$. 
* We don't know the voltages across the individual resistors.

Write out the sum of the voltages, 

$v_{\text S} = v_{\text R1} + v_{\text R2} + v_{\text R3}$

The voltage across each resistor can be written in terms of resistance and the current,

$v_{\text R1} = i\,\text R1 \qquad v_{\text R2} = i\,\text R2 \qquad v_{\text R3} = i\,\text R3$

Plug these expressions back into the sum of voltages,

$v_{\text{S}} = i\, \text R1 \,+\, i\, \text R2 \,+\, i\, \text R3$

Factor out the current and group the resistors together,

$v_{\text{S}} = i\,\, (\text R1 + \text R2 + \text R3)$

Solve for the unknown $i$,

$i = \dfrac{v_{\text{S}}} {\text R1 + \text R2 + \text R3}$

Take a look at this equation. It looks just like Ohm's Law for a single resistor, $i = v/\text R$, except the denominator is the sum of the series resistors. We conclude, 

*In a series connection the overall resistance is the sum of the individual resistors.*

## Equivalent series resistor

We can imagine a new bigger *equivalent* resistor equal to the sum of the series resistors. It is equivalent in the sense that the same current $i$ flows for a given $\text V_\text S$. 

$\text R_{\text{series}} = \text{R1} + \text{R2} + \text{R3}$

![Equivalent series resistor]({% link i/series_resistors5.svg %}){: .centered :} 

You may hear this slang expression: From the "viewpoint" of the voltage source, the three series resistors "look like" one larger equivalent resistor. The current $i$ provided by the voltage source is the same in both cases.

{% capture summary %}How can a voltage source have a "viewpoint"?{% endcapture %}  
{% capture details %}  
It is very common in engineering discussions to say things like, 

"From the viewpoint of the voltage source ... blah blah blah".

We talk about a voltage source as if it was a person.

Humans have a rich vocabulary for talking about ourselves, so we often use people words in other situations. But you have to be careful. After all, electronic components and electrons are not people. Voltage sources don't really have a "viewpoint," and can't "look" at the things they are connected to. 

One of my favorite questions about circuits: "How do the electrons decide where to go?" Well, electrons don't actually "decide" anything. Electrons respond to the electric force described by Coulomb's Law, and they flow in resistors according to Ohm's Law.

If you find yourself in a confusing conversation about how a circuit works, it could be slang expressions causing the problem. If you sense this happening, return to the first principles of electronics: voltage, current, and Ohm's Law.  {% endcapture %}{% include details.html %}

If you have many resistors in series, the general form of the equivalent series resistance is,

$\text R_{\text{series}} = \text{R1} + \text{R2} + \ldots + \text{R}_\text N$

![N resistors in series]({% link i/series_resistors6.svg %})

## Voltage distributes between resistors in series

Let's look at the voltage across each resistor in a series circuit. We apply Ohm's Law to the individual resistors one at a time. The current $i$ is the same in each resistor.

$v_{\text R1} = i\,\text R1 \qquad v_{\text R2} = i\,\text R2 \quad \ldots \quad v_{\text {RN}} = i\,\text R_\text N$

{% capture image %}series_resistors6a.svg{% endcapture %} 
{% capture alt %}Voltage distributes between series resistors{% endcapture %}
{% include image_left_without_caption.html %}

This makes more sense if we do an example with real numbers. I encourage you to try this on your own before peeking at the answer.

## Concept check

**PROBLEM 1**

![Problem 1 resistor circuit]({% link i/series_resistors7.svg %}){: .centered :} 

**a. What is the current $\blueD i$ ?**

**b. What are the voltages across the three resistors?**  

**c. Show the individual resistor voltages add up to $\text V_\text S$.**

The steps are,

1. Find the equivalent series resistance $\text R_{\text{series}}$.
2. Use $v_\text S$ and $\text R_\text{series}$ to find $i$ using Ohm's Law.
3. Find the individual resistor voltages, again using Ohm's Law.
4. Verify the voltages add up to what they should.

{% capture summary %}Show answer{% endcapture %}  
{% capture details %}  
**a.** The equivalent $\text R_{\text{series}}$ is the sum of the three resistors.

$\text R_{\text{series}} = 300\,\Omega + 500\,\Omega + 1200\,\Omega = 2000\,\Omega$

The current $i$ comes from Ohm's Law,

$i = \dfrac{v_\text S}{\text R_{\text{series}}} = 10\,\text V / 2000\,\Omega = 0.005\,\text A = 5\,\text{mA}$

![Problem 1 solved for current]({% link i/series_resistors8.svg %}){: .centered :}  

**b.** Knowing $i$, we compute the individual resistor voltages,

$v_{\text{R1}} = i\, \text R_{300} = 5\,\text{mA} \cdot 300\,\Omega = 1.5\,\text V$

$v_{\text{R2}} = i\, \text R_{500} = 5\,\text{mA} \cdot 500\,\Omega = 2.5\,\text V$

$v_{\text{R3}} = i\, \text R_{1200} = 5\,\text{mA} \cdot 1200\,\Omega = 6.0\,\text V$

Here's the full solution,

![Problem 1 solved for current]({% link i/series_resistors9.svg %}){: .centered :}  

**c.** Check: Do the resistor voltages add up to the source voltage?

$1.5\,\text V + 2.5\,\text V + 6.0\,\text V \stackrel{\checkmark}{=} 10\,\text V\qquad$ Yes!  
{% endcapture %}{% include details.html %}

**PROBLEM 2**

Based on the resistor voltages you just computed,

**Does the largest resistor have the largest or smallest voltage?**

<details><summary>Show answer</summary>
<p>Largest voltage.</p>
</details>

**Does the smallest resistor have the largest or smallest voltage?**

<details><summary>Show answer</summary>
<p>Smallest voltage.</p>
</details>

**Which resistor has the highest current?**

<details><summary>Show answer</summary>
<p>Trick question. All the resistors have the same current in a series connection.</p>
</details>

## Summary
{:.no_toc}

Resistors in series add,

$\text R_{\text{series}} = \text{R1} + \text{R2} + \ldots + \text{R}_\text N$

Resistors in series have the same current.

The voltage distributes among series resistors. The largest voltage appears across the largest resistor.