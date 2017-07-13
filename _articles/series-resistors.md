---
layout: article
title:  Resistors in series
author: Willy McAllister
comments: true
---

Components are in *series* if they are joined end to end like this: 

![Components in series.](https://ka-perseus-images.s3.amazonaws.com/601ff0f507328b1c7068ed6af3de507a2ea3c21e.svg){: .centered }

We'll work with resistors to reveal the properties of the series connection.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## The series connection

Resistors are in series when they are connected head-to-tail *and* there are no other wires branching off from the nodes between components. 

In the following image, $\text{R1}$, $\text{R2}$, and $\text{R3}$ are in series:

![Resistors in series.](https://ka-perseus-images.s3.amazonaws.com/afd5eb7a98cedef203ee45d326e37c2be15f153e.svg){: .centered }

Resistors in series share the same current.

The resistors in the following image are *not* in series. There are extra branches leading away from the nodes between resistors. If these branches have non-zero current (orange arrows), then $\text{R1}$, $\text{R2}$, and $\text{R3}$ *do not* share the same current and are therefore not in series. 

![Resistors with branches in between are not in series.](https://ka-perseus-images.s3.amazonaws.com/2ca3a9010c1b0206bbf9a3fbc4baba44fe9312cb.svg){: .centered }

## Resistors in series

Here is a circuit with resistors in series. Voltage source $\text V_{\text{S}}$ is connected to a chain of resistors connected head-to-tail, so we know they are in series. 

![Three resistors in series with a voltage source.](https://ka-perseus-images.s3.amazonaws.com/7c02d028f874842f69e5967b3972ab2e35ec21cf.svg){: .centered }

Here's what we know: 

* Voltage $v_{\text S}$ is some known constant value. 

And two more things we know from looking at the connetion pattern:

* Because they are in series, we know the same current $i$ flows through all three resistors.
* The three individual voltages across the resistors have to add up to $v_{\text S}$.

Here are the things we don't know: 

* We don't know the current $i$, 
* and we don't know the voltages across the individual resistors.

With this little bit of knowledge, plus Ohm's Law, we can figure out what's going on. We write out the sum of the voltages, 

$v_{\text{S}} = v_{R1} + v_{R2} + v_{R3}$

$v_{\text R1} = i\,\text R_1 \qquad v_{\text R2} = i\,\text R_2 \qquad v_{\text R3} = i\,\text R_3 \qquad$

and then use Ohm's Law to make substitutions,

$v_{\text{S}} = i\, \text{R1} \,+\, i\, \text{R2} \,+\, i\, \text{R3}$

Now factor out the current and gather the resistors together:

$v_{\text{S}} = i\,\, (\text{R1} + \text{R2} + \text{R3})$

Since we know $v_{\text S}$, we solve for the unknown $i$,

$i = \dfrac{v_{\text{S}}} {(\text{R1} + \text{R2} + \text{R3})}$

Take a look at this equation. It looks just like Ohm's Law for a single resistor, except the series resistors appear as a sum. We conclude: 

>*When resistors are in series, the overall resistance is the sum of the individual resistors.*

## Equivalent series resistor

We can imagine a new bigger resistor *equivalent* to the sum of the series resistors. It is equivalent in the sense that, for a given $\text V_\text{S}$, the same current $i$ flows. 

$\text R_{\text{series}} = \text{R1} + \text{R2} + \text{R3}$

![Equivalent series resistor.](https://ka-perseus-images.s3.amazonaws.com/c14176ed538683596f9e5b17e006d6d868c95f2c.svg){: .centered }

You may hear this slang expression: From the "viewpoint" of the voltage source, the three series resistors "look like" one larger equivalent resistor. The current, $i$, provided by the voltage source is the same in both cases.

<details>
<summary>How can a source have a "viewpoint"?"</summary>
<p>It is very common in engineering discussions to say things like,</p> 

<p>$\quad$ "From the viewpoint of the voltage source ...". </p>

<p>I'm talking about a voltage source as if it was a person.</p>

<p>Humans have a rich vocabulary for talking about ourselves, so we often use people words in other situations. But you have to be careful. After all, electronic components and electrons are not people. Voltage sources don't really have a "viewpoint," and can't "look" at connected resistors.</p> 

<p>One of my favorite questions about circuits: "How do the electrons <em>decide</em> where to go?" Well, electrons don't actually "decide" anything. Electrons respond to the electric force described by Coulomb's Law, and they flow in resistors according to Ohm's Law.</p>

<p>If you find yourself in a confusing conversation about how a circuit works, it could be slang expressions causing the problem. If you sense this happening, return to the first principles of electronics: voltage, current, and Ohm's Law.</p>
</details>

If you have many resistors in series, the general form of the equivalent series resistance is,

$\text R_{\text{series}} = \text{R1} + \text{R2} + \ldots + \text{R}_\text N$

![](https://ka-perseus-images.s3.amazonaws.com/99a164dd041c0122a85e5bb4c83d22e6de74b76c.svg)

## Voltage distributes between resistors in series

Now let's take a look at the voltage across each resistor in a series circuit. 
We do this by applying Ohm's Law to the individual resistors, one at a time. The current $i$ is the same for each resistor.

$v_{\text R1} = i\,\text R_1 \qquad v_{\text R2} = i\,\text R_2 \qquad v_{\text R3} = i\,\text R_3 \qquad$

This idea makes more sense if you do an example with real numbers. I encourage you to try this on your own before peeking at the answer.

## Concept check

**PROBLEM 1**

![Problem 1 resistor circuit.](https://ka-perseus-images.s3.amazonaws.com/6865399a0d8e3d06f6c849de0758447170da5f57.svg){: .centered }

**a. What is the current $i$ and what are the voltages across the three resistors?**  

**b. Show how the individual resistor voltages add up to $\text V_\text S$.**  

<details>
<summary>Show answer</summary>
<p>The steps to a solution are:</p>

<ol>
<li>Find the equivalent series resistance $\text R_{\text{series}}$.</li>
<li>Now we know $\text  V_\text S$ and $\text R_\text{series}$, so find $i$ using Ohm's Law.</li>
<li>Then find the individual resistor voltages, again using Ohm's Law.</li>
<li>Verify the voltages add up to what they should.</li>
</ol>

<p>Part a. The equivalent $\text R_{\text{series}}$ is the sum of the three resistors.</p>

<p>$\text R_{\text{series}} = 300\,\Omega + 500\,\Omega + 1200\,\Omega = 2000\,\Omega$</p>

<p>The current $i$ comes from Ohm's Law,</p>

<p>$i = \dfrac{v}{\text R_{\text{series}}} = 10\,\text V / 2000\,\Omega = 0.005\,\text A = 5\,\text{mA}$</p>

<img src="https://ka-perseus-images.s3.amazonaws.com/efeff9b4592841d11ced81fad16d1d42ad6edb35.svg" style="height:180px;">

<p>Knowing $i$, we compute the individual resistor voltages,</p>

<p>$v_{\text{R1}} = i\, \text{R1} = 5\,\text{mA} \cdot 300\,\Omega = 1.5\,\text V$</p>

<p>$v_{\text{R2}} = i\, \text{R2} = 5\,\text{mA} \cdot 500\,\Omega = 2.5\,\text V$</p>

<p>$v_{\text{R3}} = i\, \text{R3} = 5\,\text{mA} \cdot 1200\,\Omega = 6.0\,\text V$</p>

<p>Here's the full solution:</p>

<img src="https://ka-perseus-images.s3.amazonaws.com/75b7961999ac3c65dd47c9f16b7c53e8c625b6ca.svg" >

<p>Part b. Check: Do the resistor voltages add up to the source voltage?</p>

<p>$1.5\,\text V + 2.5\,\text V + 6.0\,\text V = 10\,\text V\qquad$ Yes!</p>

</details>

**PROBLEM 2**

Based on the resistor voltages you just computed:

**Does the largest resistor have the largest or smallest voltage?**

<details><summary>Show answer.</summary>
<p>Largest voltage.</p>
</details>

**Does the smallest resistor have the largest or smallest voltage?**

<details><summary>Show answer.</summary>
<p>Smallest voltage.</p>
</details>

**Which resistor has the highest current?**

<details><summary>Show answer.</summary>
<p>Trick question. All the resistors have the same current in a series connection.</p>
</details>

## Summary
{:.no_toc}

Resistors in series share the same current.

Resistors in series add,

$\text R_{\text{series}} = \text{R1} + \text{R2} + \ldots + \text{R}_\text N$

Voltage distributes amongst series resistors, with the largest voltage across the largest resistor.