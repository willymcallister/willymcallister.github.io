---
layout: article
title:  "Kirchhoff's Current Law"
author: Willy McAllister
comments: true
---

Kirchhoff's Laws for current and voltage are the heart and soul of circuit analysis. With Kirchhoff's Laws plus the basic $i$-$v$ equations for individual components (resistor, capacitor, inductor), we have the tool set we need to analyze circuits.

This article covers Kirchhoff's Current Law, also known as KCL. The companion of KCL is [Kirchhoff's Voltage Law]({% link _articles/kirchhoffs-voltage-law.md %}).  

Make sure you are familiar with the circuit terms [node, distributed node, branch, and loop]({% link _articles/circuit-terminology.md %}). 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Kirchhoff's Current Law for currents in a node,

$\large\displaystyle \sum_n i_n = 0$

----

## Currents into a node

Try to reason through this example by yourself, before we talk about the theory. The schematic below shows four branch currents flowing in and out of a [distributed node]({% link _articles/circuit-terminology.md %}#distributed-node). The currents are in milliamps, $\text{mA}$. One of the currents, $\blueD i$, is not known.

![Currents into a node]({% link i/kcl1.svg %}){: .centered :}

Problem 1. **What is $i$?**

$i = $ \_\_\_\_\_ $\text{mA}$

<details>
<summary>show answer</summary>
<p>$i = +4\,\text{mA}$</p>
<p>Currents flowing <em>into</em> the node have to find some way to flow <em>out</em> on another branch. There is no place for charge to pile up inside the node.</p>
<p>$6\,\text{mA}$ flows into the node $(5$ from the left, and $1$ from the right$)$, so $6\,\text{mA}$ must flow out somewhere. $2\,\text{mA}$ flows out the top. That leaves $4\,\text{mA}$ that must flow out the bottom on branch $\blueD i$. The current arrow for $\blueD i$ points out of the node, in the same direction as the current, so the answer is positive.</p>
</details>

Here's another example, this time with variable names instead of numerical values and a more abstract-looking node. This node has $5$ branches. Each branch might (or might not) carry a current, labeled $i_1 \,\text{to} \, i_5$. 

![Node with variable current names]({% link i/kcl2.svg %}){: .centered :}

All the arrows are drawn pointing in. This choice of direction is arbitrary. We don't know which way the currents are actually flowing, so all arrows pointing in is as good a choice as any. The arrows establish a *reference direction* for what we choose to call a positive current. 

Each current variable $(i_1 \ldots i_5)$ will end up with either a $+$ or $-$ sign. The direction of the current arrow together with the sign of the current variable tells us the direction each current actually flows.

**Look at branch current ${i_1}$. Where does it go?**

The first thing ${i_1}$ does is flow into the node (represented by the black dot). 

**Then what?**

$i_1$ is flowing charge. Here's two things charge can't do: 
* It can't collect inside the node. (Nodes do not have a place to store charge).
* It can't jump off the wires into thin air. (Charge doesn't do that under normal circumstances.)  

What's left? The current *has* to flow out through one or more of the other branches.

If $i_1$ is a positive current flowing into the node, then one or more of the other currents must be flowing out. The currents flowing out exactly balance the currents flowing in. Those currents flowing out will have a $-$ sign. 

If we add the five currents they all balance out and add up to zero,

$i_1 + i_2 + i_3 + i_4 + i_5 = 0$

## Kirchhoff's Current Law

This observation about currents in a node is nicely captured in general form as Kirchhoff's Current Law,

**The sum of all currents flowing into a node is zero.**

$\large\displaystyle \sum_n i_{in_n} = 0$

The index $n$ counts the branches attached to the node. 

{% capture summary %}What is the big zig-zag symbol?{% endcapture %}  
{% capture details %}  
The $\sum$ symbol is the Greek letter capital Sigma. In mathematical notation it indicates the <em>summation</em> operation. It is used to sum up a number of related quantities. The expression

$i_1 + i_2 + i_3 + i_4 + i_5 = 0$

can be written compactly as,

$\displaystyle \sum_{n=1}^{n=5} i_n = 0$

It is understood that the index, $n$, runs from lower limit $n=1$ to upper limit $n=5$, stepping by $1$. 
{% endcapture %}{% include details.html %} 

Kirchhoff's Current Law is flexible. It can be stated two other ways. We could phrase it as, 

**The sum of all currents flowing out of a node is zero.** 

The summation equation looks the same as above, but with all the current arrows pointing out of the node.

$\large\displaystyle \sum_m i_{out_m} = 0$

You can also think of Kirchhoff's Current Law this way, where the current arrows are allowed to point either in or out of the node,

**The sum of currents flowing into a node equals the sum of currents flowing out.**

$\large \displaystyle \sum_n i_{in_n} = \sum_m i_{out_m}$

This form of the law may be your favorite, but be sure to keep a sharp eye on the different current arrow directions.

### The current arrows all point in?
{:.no_toc}

If you are wondering how all currents can add up to zero if they all point in the same direction, do not let this bother you. The arrows are *reference* directions, not the actual direction of current. Arrows establish what we mean by a positive current. When the circuit analysis is complete, the math will make sure one (or more) of the current variables ends up with a negative sign. The actual direction of a current is determined by the combination of two things: the direction of its current arrow and the sign of its current variable.

## Concept check

Currents are in milliamps, $\text{mA}$.

Problem 2. **What is $i_5$?**  

![Problem 2 node]({% link i/kcl3.svg %})

$i_5 = $ \_\_\_\_\_ $\text{mA}$

<details>
<summary>show answer</summary>
<p>$i_5 = -6\,\text{mA}$</p>
<p>Directly apply Kirchhoff's Current Law.</p>

<p>$\displaystyle \sum_n i_n = 0$</p>

<p>Pro Tip: Before starting, check the arrows. Are they pointing in, or out, or some jumble of directions? This will save you from sign errors.</p>

<p>All the arrows in this example are pointing in. So we can do a straight sum of the numbers as written. Sum the five branch currents and set the sum to $0$,</p>
 
<p>$1 + 4 + (-2) +3 + i_5 = 0$</p>

<p>Solve for $i_5$,</p>

<p>$i_5 = -[1 + 4 -2 +3]$</p>

<p>$i_5 = -6 \,\text{mA}$</p>

<p>(A current of $-6\,\text{mA}$ flowing <em>in</em> is the same thing as  $+6\,\text{mA}$ is flowing <em>out</em> of the node.)</p>
</details>

Problem 3. **What is $i_3$ in this distributed node?**

![Problem 3 node]({% link i/kcl4.svg %})

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$i_3 = 0\,\text{mA}$

This question tests your arrow skills. The arrow directions are jumbled up, some in, some out. This prompts us to break the problem into two steps. Take it slow and get the signs right.

1. Redraw the node with all the arrows pointing in the same direction (all in or all out), making adjustments to the numerical signs as needed.
2. Apply Kirchhoff's Current Law.

Step 1. The arrow for $i_3$ is pointing out. The strategy will be to make all the other arrows point the same direction as $i_3$. If a current arrow has to flip, we adjust the sign of the current. Inspecting the original diagram, we have to flip two arrows, and two corresponding signs. The redrawn schematic below has currents $-4$ and $+1$ flowing *out*.

![Problem 3 node again]({% link i/kcl5.svg %}){: .centered :}

Step 2. Apply Kirchhoff's Current Law. We use the form of the current law that says, "The sum of all currents flowing out of a node is zero." So add up all the out currents and set the sum equal to zero.

$-4 +6 + i_3 + 1 + (-3) = 0$

Solving for $i_3$,

$i_3 = -[-4 +6 + 1 + (-3)]$

$i_3 = 0 \,\text{mA}$

There is $0$ current flowing in the branch labeled $i_3$.  
{% endcapture %}{% include details.html %} 


## Summary
{:.no_toc}

Kirchhoff's Current Law for currents in a node,

$\displaystyle \sum_n i_n = 0$

Kirchhoff's Current Law also goes by its initials, KCL.

We learned how important it is to pay close attention signs to get correct answers. Pay careful attention as you read the schematic and assemble the KCL equation. It is a core skill of every good electrical engineer.

