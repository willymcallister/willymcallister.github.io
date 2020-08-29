---
layout: article
title:  Resistors in parallel
author: Willy McAllister
comments: true
---
Components are in *parallel* if they share two nodes, like this, 

![Circuit components in parallel]({% link i/parallel_resistors1.svg %}){: .centered :}  

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

In the following image, $\text R1$, $\text R2$, and $\text R3$ are in parallel. The two horizontal lines represent the two nodes shared by all three resistors.

![Resistors in parallel]({% link i/parallel_resistors2.svg %}){: .centered :} 

{% capture summary %}Review the definition of a node{% endcapture %}  
{% capture details %}  
Review the definitions of *node* and a *distributed node* in this article on [Circuit terminology]({% link _articles/circuit-terminology.md %}#node). Another good resource to help you understand parallel circuits is this article on [Schematic equivalence]({% link _articles/schematic-equivalence.md %}).  
{% endcapture %}{% include details.html %}

Because the resistors are connected to the same nodes, the same voltage appears across each parallel resistor. 

The resistors in the following image are *not* in parallel. There are extra components (orange boxes) breaking up the common nodes between resistors. This circuit has four separate nodes, so $\text R1$, $\text R2$, and $\text R3$ *do not* share the same voltage.

![Components not in parallel]({% link i/parallel_resistors3.svg %}){: .centered :} 

## Resistors in parallel

Here is a circuit with resistors in parallel. This circuit has a current source. We don't get to use those very often, so this should be fun.

![Parallel resistor circuit]({% link i/parallel_resistors4.svg %}){: .centered :} 

Current source $\text I_\text s$ is driving current $i$ toward $\text R1$, $\text R2$, and $\text R3$. Current $i$ returns to the bottom terminal of the current source.  but we don't yet know the voltage $v$ or how $i$ splits up into the three resistor currents. 

The things we know are,

* Current $i$ is some given constant value.
* The currents in the three resistor have to add up to $i$.
* Voltage $v$ appears across all three resistors. 

With just this little bit of knowledge, and Ohm's Law, we can find the things we don't know,

* We don't yet know voltage $v$ appearing across the resistors and current source. 
* We don't know how $i$ splits up into the three resistor currents. 

Using what we know, we can write these expressions,

$i = i_{\text R1} + i_{\text R2} + i_{\text R3} $

$v = i_{\text R1} \, \text R1 \qquad v = i_{\text R2} \, \text R2 \qquad v = i_{\text R3} \, \text R3$

Rearrange the three Ohm's Law expressions to solve for current,

$i_{\text R1} = \dfrac{v}{\text R1}  \qquad i_{\text R2} = \dfrac{v}{\text R2} \qquad i_{\text R3} = \dfrac{v}{\text R3}$

Substitute these expressions into the sum of currents,

$i = \dfrac{v}{\text R1} +\dfrac{v}{\text R2} + \dfrac{v}{\text R3}$

Factor out the common term $v$,

$i = v \left (\dfrac{1}{\text R1} +\dfrac{1}{\text R2} + \dfrac{1}{\text R3} \right )$

Remember we already know $i$ (it set by the current source), so we can solve for $v$,

$v = i \,\dfrac{1}{\left (\dfrac{1}{\text R1} +\dfrac{1}{\text R2} + \dfrac{1}{\text R3} \right )}$

Take a look at this equation. It looks just like Ohm's Law, $v = i\,\text R$, but with the resistors appearing as a big double-reciprocal expression where $\text R$ usually appears. 

We conclude,

*For resistors in parallel the overall resistance is the reciprocal of the sum of reciprocals of the individual resistors.*

(This is a mouthful. It's easier to understand the equation than to say it out loud.)

## Equivalent parallel resistor

The previous equation suggests a way to define a new resistor *equivalent* to the three parallel resistors. 

$\text R_{\text{parallel}} = \dfrac{1}{\left (\dfrac{1}{\text R1} +\dfrac{1}{\text R2} + \dfrac{1}{\text R3} \right )}$

The new resistor is the reciprocal of the sum of reciprocals. It is equivalent in the sense that, for a given $i$ flowing from the current source, the same voltage $v$ appears.

We can write this a little smaller by flipping the giant reciprocal,

$\dfrac{1}{\text R_{\text{parallel}}} = \dfrac{1}{\text R1} +\dfrac{1}{\text R2} + \dfrac{1}{\text R3}$

You can replace the three parallel resistors with a single equivalent resistor and $i$ and $v$ stay exactly the same.

![Equivalent parallel resistor]({% link i/parallel_resistors5.svg %}){: .centered :} 

From the "viewpoint" of the current source, you can't tell the difference between the equivalent resistor and the three parallel resistors. 

## $\text N$ resistors in parallel

We can generalize the parallel resistor equation for any number of resistors in parallel. The derivation of this formula for $\text N$ resistors in parallel follows exactly the same steps we did above for three resistors in parallel.

$\dfrac{1}{\text R_{\text{parallel}}} = \dfrac{1}{\text R1} +\dfrac{1}{\text R2} + \ldots + \dfrac{1}{\text{R}_\text N}$

$\qquad\quad$![N parallel resistors]({% link i/parallel_resistors6.svg %})

## Current distributes between resistors in parallel

Let's figure out how the main current $i$ splits up and flows through each resistor. We are looking for $i_{\text R1}$, $i_{\text R2}$, and $i_{\text R3}$.  

![Parallel resistor circuit]({% link i/parallel_resistors4.svg %}){: .centered :} 

Apply Ohm's Law to the individual resistors. $v$ is the same in each equation,

$i_{\text R1} = v/\text R_1 \qquad i_{\text R2} = v/\text R_2 \qquad i_{\text R3} = v/\text R_3$

The main current $i$ splits up into three separate currents. Those currents rejoin and flow back to the current source. That means the individual resistor currents have to add up to the main current.

The amount of current in each resistor is *inversely* proportional to the value of the resistor.

This will sink in better if we do an example with real numbers.

## Concept check

**PROBLEM 1**

![Problem 1 circuit]({% link i/parallel_resistors7.svg %}){: .centered :} 

**a. Find voltage $v$.**

**b. Find the currents in the three resistors.** 

**c. Show how the individual resistor currents add up to $i$.**

The steps to a solution are,

1. Find the equivalent parallel resistance $\text R_{\text{parallel}}$.
2. Find voltage $v$ using Ohm's Law.
3. Find the individual currents, again using Ohm's Law.
4. Verify the resistor currents add up to what they should.

{% capture summary %}Show answer{% endcapture %}  
{% capture details %}  
**Part a.** The equivalent $\text R_{\text{parallel}}$ is equal to the reciprocal of the reciprocal sum of the three resistors.

$\text R_{\text{parallel}} = \dfrac{1}{\left (\dfrac{1}{50\,\Omega} + \dfrac{1}{100\,\Omega} + \dfrac{1}{500\,\Omega} \right )}$

$\text R_{\text{parallel}} = \dfrac{1}{(0.02 + 0.01 + 0.002)} = \dfrac{1}{0.032} = 31.25\,\Omega$

Now we know the current and equivalent resistance. We can solve for voltage $v$ across all the resistors using Ohm's Law,

$v = i\,\text R_{\text{parallel}}$

$v  = 100\,\text{mA} \cdot 31.25\,\Omega = 3.125\,\text V$

![Problem 1 circuit]({% link i/parallel_resistors8.svg %}){: .centered :} 

**Part b.** Knowing $v$ we can go back and compute the individual resistor currents,

$i_{\text R1} = \dfrac{v}{\text R1} = \dfrac{3.125\,\text V}{\text{50}} = 62.5\,\text{mA}$

$i_{\text R2} = \dfrac{v}{\text R2} = \dfrac{3.125\,\text V}{\text{100}} = 31.25\,\text{mA}$

$i_{\text R3} = \dfrac{v}{\text R3} = \dfrac{3.125\,\text V}{\text{500}} = \phantom{0}6.25\,\text{mA}$

Here is what the solution looks like,

![Problem 1 solution]({% link i/parallel_resistors9.svg %}){: .centered :}

**Part c.** Check: Do the resistor currents add up to the source current?

$62.5\,\text{mA} + 31.25\,\text{mA} + 6.25\,\text{mA} = 100\,\text{mA}\qquad \checkmark$ Yes!  
{% endcapture %}{% include details.html %}

{% capture summary %}How do electrons "know" which resistor to flow through?{% endcapture %}  
{% capture details %}  
A common question about parallel circuits is, "When the current reaches the first resistor, how do the electrons 'choose' or 'know' which resistor to flow through?", or "How do the electrons 'decide' where to flow?"

As you know, electrons are not people, they don't have little electron brains (as far as we know). There is no choosing or deciding involved. They don't choose or decide which resistor to flow through any more than a water molecule 'decides' or 'choses' which side of a rock it will flow past in a stream. In any circuit, including parallel circuits, each electron responds only to electric forces from voltage and from the repelling swarm of surrounding electrons.  
{% endcapture %}{% include details.html %}

Based on the resistor currents you just found, 

**PROBLEM 2**

**The largest share of current goes through which resistor?**

Choose one: $\quad$ smallest $\quad$  middle $\quad$ largest

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The smallest resistor carries the largest share of current.  
{% endcapture %}{% include details.html %}

**PROBLEM 3**

**The smallest share of current goes through which resistor?**

Choose one: $\quad$ smallest $\quad$  middle $\quad$ largest

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The largest resistor carries the smallest share of current.  
{% endcapture %}{% include details.html %}

**PROBLEM 4**

**What is the relative size of the equivalent resistor compared to the parallel resistors?**

* $\text{R}_\text{parallel}$ is larger than the largest resistor.
* $\text{R}_\text{parallel}$ is between the largest and smallest resistor.
* $\text{R}_\text{parallel}$ is smaller than the smallest resistor.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The equivalent parallel resistor is smaller than the smallest parallel resistor. Always.  
{% endcapture %}{% include details.html %}
 
**Problem 5**

**Which resistor has the highest voltage?**

Choose one: $\quad$ smallest $\quad$  middle $\quad$ largest

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Trick question. All three resistors have the same voltage. That's what it means to be in parallel. They all share the same voltage.  
{% endcapture %}{% include details.html %}

## Special case --- $2$ resistors in parallel

![2 resistors in parallel]({% link i/parallel_resistors10.svg %}){: .centered :} 

From the general equation, two resistors in parallel have an equivalent resistance of,

$\text R_{\text{parallel}} = \dfrac{1} {\left (\dfrac{1}{\text R1} +\dfrac{1}{\text R2} \right )}$

We can do a bit of algebra to come up with an alternative expression with just one fraction. Rather than just telling you the answer, it is a rite of passage to work through the algebra yourself the first time. The answer is tucked away so you can try this on your own before peeking. See if you can derive an expression for $\text R_{\text{parallel}}$ in the form of a single fraction.

{% capture summary %}Two resistors in parallel{% endcapture %}  
{% capture details %}  
$\text R_{\text{parallel}} = \dfrac{1} {\left (\dfrac{1}{\text R1} +\dfrac{1}{\text R2} \right )}$

Work on the denominator to clear the fractions. The common denominator is $\text R1 \, \text R2$.

$\text R_{\text{parallel}} = \dfrac{1}{\left (\dfrac{1}{\text R1}\,\dfrac{\text R2}{\text R2}\right ) + \left (\dfrac{1}{\text R2}\,\dfrac{\text R1}{\text R1}  \right )}$

$\text R_{\text{parallel}} = \dfrac{1} {\left ( \dfrac{\text R2}{\text R1\,\text R2} \right ) + \left (\dfrac{\text R1}{\text R1\,\text R2}  \right )}$

$\text R_{\text{parallel}} = \dfrac{1} {\left (\dfrac{\text R1 + \text R2}{\text R1\,\text R2}  \right )}$

Flip over the big fraction to get the equation for two resistors in parallel,

$\text R_{\text{parallel}} = {\dfrac{\text R1\,\text R2} {\text R1 + \text R2}}$

The product over the sum. This is worth memorizing.  
{% endcapture %}{% include details.html %}

## Special case --- $2$ equal resistors in parallel

What if the two resistors in parallel have the same value. What is the equivalent $\text R_{\text{parallel}}$?

Let $\text R1 = \text R2$. We will call it just $\text R$.

$\text R_{\text{parallel}} = \dfrac{\text R \, \text R}{\text R + \text R} = \dfrac{\text R \, \text R}{2\,\text R}$

$\text R_{\text{parallel}} = \dfrac{1}{2} \,\text R$

Two identical resistors in parallel have an equivalent resistance exactly half the value of either resistor. The current splits equally between the two.

## Summary
{:.no_toc}

Components in parallel share the same voltage.

The general form for resistors in parallel is,  

$\dfrac{1}{\text R_{\text{parallel}}} = \dfrac{1}{\text R1} +\dfrac{1}{\text R2} + \ldots + \dfrac{1}{\text{R}_\text N} $

Use this equation if you have three or more resistors in parallel.

If you have two parallel resistors you can use the general form or you can combine them as the product over the sum,   

$\text R_{\text{parallel}} = \dfrac{\text R1\,\text R2}{\text R1+\text R2}$

The equivalent resistor $\text R_{\text{parallel}}$ is always smaller than the smallest parallel resistor.  

The largest current flows through the smallest resistor.
