---
layout: article
title:  "Kirchhoff's Current Law"
author: Willy McAllister
comments: true
---

Kirchhoff's Laws for current and voltage lie at the heart of circuit analysis. With these two laws, plus the basic $i$-$v$ equations for individual components (resistor, capacitor, inductor), we have the basic tool set we need to analyze circuits.

This article covers Kirchhoff's Current Law, also known as KCL. 

Make sure you are familiar with the definitions of [node, distributed node, branch, and loop]({{ site.baseurl }}{% link _articles/circuit-terminology.md %}). 

KCL is the companion of [Kirchhoff's Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}).  

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Kirchhoff's Current Law for currents at a node,

$\large\displaystyle \sum_n i_n = 0$

----

## Currents into a node

Try to reason through this example by yourself, before we talk about the theory. The schematic below shows four branch currents flowing in and out of a distributed node. The various currents are in milliamps, $\text{mA}$. One of the currents, $\blueD i$, is not known.

![Intuitive currents into a node](https://ka-perseus-images.s3.amazonaws.com/c38b3827ab82958e86d23020984560bd8d7a0e84.svg){: .centered :}

problem 1  
**What is $i$?**

$i = $ \_\_\_\_\_ $\text{mA}$

<details>
<summary>show answer</summary>
<p>$i = +4\,\text{mA}$</p>
<p>It makes intuitive sense that currents flowing <em>into</em> the node find some way to flow <em>out</em> on another branch. After all, we don't expect flowing charge to pile up inside the node.</p>
<p>$6\,\text{mA}$ flows into the node $(5$ from the left, and $1$ from the right$)$, so $6\,\text{mA}$ must flow out somewhere. $2\,\text{mA}$ flows out the top. That leaves $4\,\text{mA}$ that must flow out the bottom on branch $\blueD i$. The blue current arrow for $\blueD i$ points out of the node, in the same direction as the current, so the answer is positive.</p>
</details>

Here's another example, this time with variable names instead of numerical values and a more abstract-looking node. This node happens to have $5$ branches. Each branch might (or might not) carry a current, labeled $i_1 \,\text{to} \, i_5$. 

![Node with variable current names](https://ka-perseus-images.s3.amazonaws.com/b66c761db0f00536ede144784dc537f13199ac81.svg){: .centered :}

All the arrows are drawn pointing in. This choice of direction is arbitrary. We don't know which way the currents are actually flowing, so arrows pointing in is as good a choice as any at this point. The arrows establish a *reference direction* for what we choose to call a positive current. In the end, the currents will have $+$ and $-$ signs, which will tell us how they actually flow relative to the arrows.

Look at branch current ${i_1}$.  
**Where does it go?**

The first thing ${i_1}$ does is flow into the node (represented by the black dot). 

**Then what?**

Here's two things ${i_1}$ can't do: The flowing charge in ${i_1}$ can't stay inside the node. (Node do not have a place to store charge). And ${i_1}$'s charge can't jump off the wires into thin air. Charge just doesn't do that under normal circumstances.  

What's left?: The current *has* to flow out through one or more of the other branches.

For our example node, we would write this as,

$i_1 + i_2 + i_3 + i_4 + i_5 = 0$

If ${i_1}$ is a positive current flowing into the node, then one or more of the other currents must be flowing out. Those outgoing currents will have a $-$ negative sign.

This observation about currents flowing in a node is nicely captured in general form as Kirchhoff's Current Law.

## Kirchhoff's Current Law

>**The sum of all currents flowing into a node is zero.**

$\large\displaystyle \sum_n i_{in_n} = 0$

The index $n$ counts the branches attached to the node. 

<details>
<summary>What is the big zig-zag symbol?</summary>
<p>The $\sum$ symbol is the Greek letter capital Sigma. In mathematical notation it indicates the <em>summation</em> operation. It is used to sum up a number of related quantities. The expression</p>

<p>$i_1 + i_2 + i_3 + i_4 + i_5$</p>

<p>can be written compactly as</p>

<p>$\displaystyle \sum_{n=1}^{n=5} i_n$</p>

<p>It is understood that index $n$ goes from the lower limit $n=1$ to the upper limit $n=5$, stepping by $1$.</p>
</details>

Kirchhoff's Current Law is flexible. It can be stated other ways. We could phrase it as: 

>**The sum of all currents flowing out of a node is zero.** 

The summation equation for this form of the law is the same as above with all the current arrows pointing out of the node.

$\large\displaystyle \sum_m i_{out_m} = 0$

It is also correct to say,

>**The sum of currents flowing into a node equals  
$\,$the sum of currents flowing out of a node.**

$\large \displaystyle \sum_n i_{in_n} = \sum_m i_{out_m}$

This form of the law requires you to keep a sharp eye on the current arrow directions.

### The current arrows all point in?
{:.no_toc}

If you are wondering how all currents can add up to zero if they all point in the same direction, do not let this bother you. The arrows are reference directions. They establish what we mean by a positive current. When the circuit analysis is complete, the math will make sure one (or more) of the currents ends up with a negative sign, and flows in the opposite direction of its arrow.

## Kirchhoff's Current Law - concept check

Currents are in milliamps, $\text{mA}$.

problem 2  
**What is $i_5$?**  

![Problem 2 node](https://ka-perseus-images.s3.amazonaws.com/7c513a6eb0ef5adb06c662019c06fefd8529e37c.svg){: .centered :}

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

<p>A current of $-6\,\text{mA}$ flowing <em>in</em> is the same thing as  $+6\,\text{mA}$ is flowing *out* of the node.</p>
</details>

problem 3  
**What is $i_3$ in this distributed node?**

![Problem 3 node](https://ka-perseus-images.s3.amazonaws.com/f408c3dadf72f69f3a13e2562cc568a515f76ce8.svg){: .centered :}

<details>
<summary>show answer</summary>
<p>$i_3 = 0\,\text{mA}$</p>

<p>This question tests your arrow skills. The arrow directions are jumbled up, some in, some out. This prompts us to break the problem into two steps. Take it slow and get the signs right. </p>

<ol>
<li>Redraw the node with all the arrows pointing in the same direction (all in or all out), making adjustments to the numerical signs as needed.</li> 
<li>Apply Kirchhoff's Current Law.</li>
</ol>

<p>Step 1. The arrow for $i_3$ is pointing out. The strategy will be to make all the other arrows point the same direction as $i_3$. If a current arrow has to flip, we adjust the sign of the current. Inspecting the original diagram, we have to flip two arrows, and two corresponding signs. The redrawn schematic below has currents $-4$ and $+1$ flowing <em>out</em>.</p>

<p><img src="https://fastly.kastatic.org/ka-perseus-images/62e29600b97cbdbf7de8f8adfea1af7b75080abb.svg" height="160px"></p>

<p>Step 2. Apply Kirchhoff's Current Law. We use the form of the current law that says, "The sum of all currents flowing out of a node is zero." So add up all the "out" currents and set the sum equal to zero.</p>

<p>$-4 +6 + i_3 + 1 + (-3) = 0$</p>

<p>Solving for $i_3$,</p>

<p>$i_3 = -[-4 +6 + 1 + (-3)]$</p>

<p>$i_3 = 0 \,\text{mA}$</p>

<p>There is $0$ current flowing in the branch labeled $i_3$.</p>
</details>

## Summary
{:.no_toc}

You have a new friend, Kirchhoff's Current Law for currents at a node,

$\displaystyle \sum_n i_n = 0$

Our new friend sometimes go by its initials, KCL.

And we learned how important it is to pay close attention signs if we want correct answers. It requires careful attention as you read the schematic and construct the KCL equation. It is a core skill of every good electrical engineer.

