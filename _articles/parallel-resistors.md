---
layout: article
title:  Resistors in parallel
author: Willy McAllister
comments: true
---
Components are in *parallel* if they share two nodes, like this: 

![Components in parallel.](https://ka-perseus-images.s3.amazonaws.com/0c0acc587a6332a11a622975ed148fa779151cc8.svg){: .centered }

We reveal the properties of the parallel connection by looking at resistor circuits. Figuring out parallel resistors is a little trickier than series resistors.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## The parallel connection

Components are in parallel when their two terminals connect to the same nodes. 

In the following image, $\text{R1}$, $\text{R2}$, and $\text{R3}$ are in parallel. The two horizontal lines represent the two nodes shared by all three resistors.

<details>
<summary>Review the definition of a node.</summary>
<p>Review the definitions of <em>node</em> and a <em>distributed node</em> in this <a href="https://spinningnumbers.org/a/circuit-terminology.html#node">article</a>.</p>
</details>

![](https://ka-perseus-images.s3.amazonaws.com/eaeda62a7f435309cf990882930fe31827119e3c.svg){: .centered }

Because they are connected to the same nodes, the same voltage appears across each parallel resistor. 

The resistors in the following image are *not* in parallel. There are extra components (orange boxes) breaking up the common nodes between resistors. This circuit has four separate nodes, so $\text{R1}$, $\text{R2}$, and $\text{R3}$ *do not* share the same voltage.

![Components not in parallel.](https://ka-perseus-images.s3.amazonaws.com/5286c85ca0e5fbcbfa3dc661fc8376943ef6b03b.svg){: .centered }

## Resistors in parallel

Here is a circuit with resistors in parallel. (This circuit has a current source. We don't get to use those very often, so this should be fun.)

![Parallel resistor circuit.](https://ka-perseus-images.s3.amazonaws.com/7887ae3da0a218f6ecbfb531d6ceca4408cdc311.svg){: .centered }

Current source $\text I_\text s$ is driving current $i$ towards $\text{R1}$, $\text{R2}$, and $\text{R3}$. Current $i$ returns to the bottom terminal of the current source. We know the value of current $i$ is some given constant value, but we don't yet know the voltage $v$ or how $i$ splits up into the three resistor currents. 

Two things we do know are:

* The currents in the three resistor have to add up to $i$.
* Voltage $v$ appears across all three resistors. 

With just this little bit of knowledge, and Ohm's Law, we can write these expressions:

$i = i_{\text{R1}} + i_{\text{R2}} + i_{\text{R3}} $

$v = i_{\text{R1}} \, \text{R1} \qquad v = i_{\text{R2}} \, \text{R2} \qquad v = i_{\text{R3}} \, \text{R3}$

This is enough to get going. Rearrange the three Ohm's Law expressions to solve for current in terms of voltage and resistance:

$i_{\text{R1}} = \dfrac{v}{\text{R1}}  \qquad i_{\text{R2}} = \dfrac{v}{\text{R2}} \qquad i_{\text{R3}} = \dfrac{v}{\text{R3}}$

Substitute these expressions into the sum of currents:

$i = \dfrac{v}{\text{R1}} +\dfrac{v}{\text{R2}} + \dfrac{v}{\text{R3}}$

Factor out the common term $v$,

$i = v \left (\dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \dfrac{1}{\text{R3}} \right )$

Now remember that we already know $i$ (it is a property of the current source), so we can rearrange the equation to solve for $v$:

$v = i \,\dfrac{1}{\left (\dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \dfrac{1}{\text{R3}} \right )}$

Take a look at this equation. It looks just like Ohm's Law, $v = i\,\text R$, but with the resistors appearing as a big double-reciprocal expression where $\text R$ usually appears. 

We conclude:

>*When resistors are in parallel, the overall resistance is the reciprocal of the sum of reciprocals of the individual resistors.*

(This is a mouthful. We will come up with something simpler before we are done.)

## Equivalent parallel resistor

The previous equation suggests a way to define a new resistor equivalent to the parallel resistors. 

$\text R_{\text{parallel}} = \dfrac{1}{\left (\dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \dfrac{1}{\text{R3}} \right )}$

The new resistor is the reciprocal of the sum of reciprocals. It is equivalent in the sense that, for a given $i$ flowing from the current source, the same voltage $v$ appears.

We can write this a little smaller by flipping the giant reciprocal,

$\dfrac{1}{\text R_{\text{parallel}}} = \dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \dfrac{1}{\text{R3}}$

You can replace the three parallel resistors with a single equivalent resistor and $i$ and $v$ stay exactly the same.

![](https://ka-perseus-images.s3.amazonaws.com/ca9f636a9fa39125f5894ee7349f412b71bd5b1e.svg){: .centered }

From the "viewpoint" of the current source, you can't tell the difference between the equivalent resistor and the three parallel resistors. If we know either $i$ or $v$ and we want to find the other one, we can use Ohm's Law and the equivalent resistor.

$v = i \,\text R_\text{parallel}$

## $\text N$ resistors in parallel

We can generalize the parallel resistor equation for any number of resistors in parallel. The derivation of this formula for $\text N$ resistors in parallel follows exactly the same steps we did above for three resistors in parallel.

$\dfrac{1}{\text R_{\text{parallel}}} = \dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \ldots + \dfrac{1}{\text{R}_\text N}$

$\qquad\qquad$ ![](https://ka-perseus-images.s3.amazonaws.com/f84dc8f7aa0ad09db6897028cfe43d93615e3070.svg)

## Current distributes between resistors in parallel

Let's say we used Ohm's Law and the equivalent resistor to figure out both $i$ and $v$. Now let's figure out how the main current $i$ splits up and flows through each resistor. We do this by applying Ohm's Law to the individual resistors, one at a time. The unknowns are $i_{\text R1}$, $i_{\text R2}$, and $i_{\text R3}$.

![Parallel resistor circuit.](https://ka-perseus-images.s3.amazonaws.com/7887ae3da0a218f6ecbfb531d6ceca4408cdc311.svg){: .centered }

$i_{\text R1} = v/\text R_1 \qquad i_{\text R2} = v/\text R_2 \qquad i_{\text R3} = v/\text R_3$

The main current $i$ splits up into three separate resistor currents. Those currents rejoin each other and flow back to the current source. That means the individual resistor currents have to add up to the main current.

The amount of current in each resistor is *inversely* proportional to the value of the resistor.

This will sink in better if you do an example with real numbers.

## Concept check

**PROBLEM 1**

![](https://ka-perseus-images.s3.amazonaws.com/62b66481b9c4f9b316f3ba465b7c83ce4cf3c684.svg){: .centered }

**Part a. Find the voltage $v$ and the currents in the three resistors.** 

**Part b. Show how the individual resistor currents add up to $i$.**
<details>
<summary>Show the answer.</summary>
<p>The steps to a solution are,</p>

<ol>
<li>Find the equivalent parallel resistance $\text R_{\text{parallel}}$.</li>
<li>Then find the voltage $v$ using Ohm's Law.</li>
<li>Then find the individual currents, again using Ohm's Law.</li>
<li>Verify the resistor currents add up to what they should.</li>
</ol>

<p>Part a. The equivalent $\text R_{\text{parallel}}$ is equal to the reciprocal of the reciprocal sum of the three resistors.</p>

<p>$\text R_{\text{parallel}} = \dfrac{1}{\left (\dfrac{1}{50\,\Omega} + \dfrac{1}{100\,\Omega} + \dfrac{1}{500\,\Omega} \right )}$</p>

<p>$\text R_{\text{parallel}} = \dfrac{1}{(0.02 + 0.01 + 0.002)} = \dfrac{1}{0.032} = 31.25\,\Omega$</p>

<p>Now we know the equivalent resistance. <br>
We can solve for voltage $v$ between the two nodes,</p>

<p>$v = i\,\text R_{\text{parallel}}$</p>

<p>$v  = 100\,\text{mA} \cdot 31.25\,\Omega = 3.125\,\text V$</p>

<img src="https://ka-perseus-images.s3.amazonaws.com/4c1c3b63ad67225727250d39779dd2a299839cc5.svg">

<p>Knowing $v$ we can go back and compute the individual resistor currents,</p>

<p>$i_{\text{R1}} = \dfrac{v}{\text{R1}} = \dfrac{3.125\,\text V}{\text{50}} = 62.5\,\text{mA}$</p>

<p>$i_{\text{R2}} = \dfrac{v}{\text{R2}} = \dfrac{3.125\,\text V}{\text{100}} = 31.25\,\text{mA}$</p>

<p>$i_{\text{R3}} = \dfrac{v}{\text{R3}} = \dfrac{3.125\,\text V}{\text{500}} = \phantom{0}6.25\,\text{mA}$</p>

<p>Here is what the solution looks like:</p>

<img src="https://ka-perseus-images.s3.amazonaws.com/b0b22c869e92ab25caba51779e93eef81f64dd32.svg" style="height:170px;">

<p>Part b. Check: Do the resistor currents add up to the source current?</p>

<p>$62.5\,\text{mA} + 31.25\,\text{mA} + 6.25\,\text{mA} = 100\,\text{mA}\qquad \checkmark$ Yes!</p>
</details>

<details>
<summary>How do electrons know which resistor to flow through?</summary>
<p>A common question about parallel circuits is, "When the current reaches the first resistor, how do the electrons 'choose' or 'know' which resistor to flow through?", or "How do the electrons 'decide' where to flow?"</p>

<p>As you know, electrons are not people, they don't have little electron brains (as far as we know). There is no choosing or deciding involved. They don't choose or decide which resistor to flow through any more than a water molecule 'decides' or 'choses' which side of a rock it will flow past in a stream. In any circuit, including parallel circuits, each electron responds only to electric forces from voltage and from the repelling swarm of surrounding electrons.</p>
</details>

Based on the resistor currents you just solved:  

**PROBLEM 2**

**The largest share of current goes through which resistor?**

Choose one: | smallest | middle | largest

<details>
<summary>Show the answer.</summary>
<p>The smallest resistor carries the largest share of current.</p>
</details>

**PROBLEM 3**

**The smallest share of current goes through which resistor?**

Choose one: | smallest | middle | largest

<details>
<summary>Show the answer.</summary>
<p>The largest resistor carries the smallest share of current. </p>
</details>

**PROBLEM 4**

**What is the relative size of the equivalent resistor compared to the three parallel resistors?**

| $\text{R}_\text{parallel}$ is larger than the largest resistor.
| $\text{R}_\text{parallel}$ is between the largest and smallest resistor.
| $\text{R}_\text{parallel}$ is smaller than the smallest resistor.

<details>
<summary>Show the answer.</summary>
<p>The overall equivalent resistor is smaller than the smallest parallel resistor. Always.</p>
</details>
 
**Problem 5**

**Which resistor has the highest voltage?**

Choose one: | smallest | middle | largest

<details>
<summary>Show the answer.</summary>
<p>Trick question. All three resistors have the same voltage. That's what it means to be in parallel. They all share the same voltage.</p>
</details>


## Special case - $2$ resistors in parallel

![Two resistors in parallel.](https://ka-perseus-images.s3.amazonaws.com/d51437bc7b14456c116a62265b7b86390902acc8.svg){: .centered }

From the general equation, two resistors in parallel have an equivalent resistance of:

$\text R_{\text{parallel}} = \dfrac{1} {\left (\dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} \right )}$

We can do a bit of algebra to come up with an alternative expression with just one fraction. Rather than just telling you the answer, it is a rite of passage to work through the algebra yourself the first time. The answer is tucked away so you can try this on your own before peeking. See if you can derive an expression for $\text R_{\text{parallel}}$ in the form of a single fraction.

<details>
<summary>Two resistors in parallel</summary>
<p>$\text R_{\text{parallel}} = \dfrac{1} {\left (\dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} \right )}$</p>

<p>Go to work on the denominator to clear the fractions. <br> The common denominator is $\text R1\cdot \text R2$.</p>

<p>$\text R_{\text{parallel}} = \dfrac{1}{\left (\dfrac{1}{\text{R1}}\cdot\dfrac{\text{R2}}{\text{R2}}\right ) + \left (\dfrac{1}{\text{R2}}\cdot\dfrac{\text{R1}}{\text{R1}}  \right )}$</p>

<p>$\text R_{\text{parallel}} = \dfrac{1} {\left ( \dfrac{\text{R2}}{\text{R1}\cdot\text{R2}} \right ) + \left (\dfrac{\text{R1}}{\text{R1}\cdot\text{R2}}  \right )}$</p>

<p>$\text R_{\text{parallel}} = \dfrac{1} {\left (\dfrac{\text{R1} + \text{R2}}{\text{R1}\cdot\text{R2}}  \right )}$</p>

<p>Flip over the big fraction to get the equation for two resistors in parallel: </p>

<p>$\text R_{\text{parallel}} = {\dfrac{\text{R1}\cdot\text{R2}} {\text{R1} + \text{R2}}}$</p>

<p>The product over the sum. This is worth memorizing.</p>
</details>

## Special case - $2$ equal resistors in parallel

Let's say we have two resistors in parallel with the same value. What is the equivalent $R_{\text{parallel}}$?

Let $\text{R1} = \text{R2}$. We will call it just $\text R$.

$R_{\text{parallel}} = \dfrac{\text R \cdot \text R}{\text R + \text R} = \dfrac{\text R \cdot \text R}{2\,\text R}$

$\large R_{\text{parallel}} = \frac{1}{2} \,\text R$

Two identical resistors in parallel have an equivalent resistance exactly half the value of either resistor. The current splits equally between the two.

## Summary
{:.no_toc}

Resistors in parallel share the same voltage.

The general form for resistors in parallel is,  

$\dfrac{1}{\text R_{\text{parallel}}} = \dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \ldots + \dfrac{1}{\text{R}_\text N} $

Use this equation if you have three or more resistors in parallel.

If you have two parallel resistors you can use the general form or you can choose to combine them as the product over the sum. This gives exactly the same answer as the general equation.   

$\text R_{\text{parallel}} = \dfrac{\text{R1}\cdot\text{R2}}{\text R1+\text R2}$

The equivalent resistor $\text R_{\text{parallel}}$ is always smaller than the smallest parallel resistor.  

The largest current flows through the smallest resistor.
