---
layout: article
title:  "Application of the fundamental laws"
author: Willy McAllister
comments: true
---

The fundamental laws are Ohm's Law (and the $i$-$v$ equations for capactor and inductor) and Kirchhoff's Laws. We applied Ohm's Law a few times already. We came up with equations for [series]({{ site.baseurl }}{% link _articles/series-resistors.md %}) and [parallel]({{ site.baseurl }}{% link _articles/parallel-resistors.md %}) resistors, the [voltage divider]({{ site.baseurl }}{% link _videos/voltage-divider.md %}), and [simplified a resistor network]({{ site.baseurl }}{% link _articles/simplifying-resistor-networks.md %}). Now we put [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}) and [Kirchhoff's Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}) to work for us, too. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Ohm's Law and Kirchhoff's Laws (KCL and KVL) are powerful tools for solving simple circuits, using this strategy,

1. Give names to voltages and currents. 
2. Select the independent variable, either $i$ or $v$. 
3. Write a set of independent KCL and KVL equations.
4. Solve the system of equations.
5. Solve for the other unknowns.   

----

Our task is to apply the fundamental laws to find the unknown currents and voltages in this circuit,

![Example circuit](https://ka-perseus-images.s3.amazonaws.com/c0eab0485c2ea9c45c46d3290895eb850d8b88b2.svg){: .centered :}

## Applying the fundamental laws

We will take these steps to work our way to a solution,

1. Assign names and polarity to voltages and currents using the [sign convention for passive components]({{ site.baseurl }}{% link _articles/sign-convention.md %}). 
1. Select the independent variable to produce the simplest equations. The choice is between $i$'s or $v$'s as the independent variable.
1. Write equations using KCL, KVL, or both. Make sure every element participates in at least one equation.
1. Solve the system of equations.
1. Solve the remaining voltages and currents. 

## Step 1: Assign names and polarity 

It helps to give names to voltages, currents, and nodes, and make a list of what we do and do not know.

![](https://ka-perseus-images.s3.amazonaws.com/95a21d6d20ea457bb51d46eed843e810410f9744.svg){: .centered :}

Here are features of this circuit, and the voltages and currents we will discover during the analysis,

* $5$ elements
* $3$ nodes, $\green a$, $\green b$, and $\green c$. 
* $3$ meshes (inner loops). 
* $1$ source voltage, $v_{\text S}$, and $2$ element voltages, $v_1$ and $v_2$. 
* $1$ source current, $i_{\text S}$, and $3$ element currents, $i_1$, $i_2$ and $i_3$.  

<details>
<summary>node</summary>
<p>A <a href="a/circuit-terminology.html#node"><em>node</em></a> is a junction where $2$ or more elements connect. </p>
</details>

<details>
<summary>mesh and loop</summary>
<p>A <em>loop</em> is any closed path through circuit elements. A <em>mesh</em> is a loop that has no other loops inside it.</p>
<p>Definitions and examples of loops and meshes can be found in <a href="/a/circuit-terminology.html#loop">Circuit terminology</a></p>
</details> 

When we assign polarity to voltage and current we use the [sign convention for passive components]({{ site.baseurl }}{% link _videos/passive-sign-convention.md %}). The current arrow always points into the positive voltage of each resistor. 

There are three nodes in this circuit, redrawn here to highlight the junctions at nodes $b$ and $c$.

![](https://ka-perseus-images.s3.amazonaws.com/9457e503bc90b886b9692aa4948b58d57d1bbb57.svg){: .centered :}

(There is an obvious opportunity to simplify the two parallel resistors, $6\,\Omega$ with $5\,\Omega$. However, we will not do that, because we want to focus on the analysis procedure.)

## Step 2. Select the independent variable

At this point we have to choose the independent variable. Shoud it be $v$ or $i$? 

A good way to make this choice is to compare the number of unknown voltages to unknown currents. There are $2$ unknown voltages, and $3$ unknown currents. If we select voltage as the independent variable, we will have equations with $2$ voltage terms as opposed to $3$ current terms. $2$ is less that $3$, so we choose voltage as our independent variable.

## Step 3. Write independent equations

Since we have two unknowns, $v_1$ and $v_2$, we need to come up with two independent equations. Our choice will be, 

* a KVL equation around the leftmost mesh  
* a KCL equation at node $b$ 

I look at the circuit and pick two interesting features. Node $b$ has several connections, making it a focal point of the circuit. The leftmost mesh nicely includes the all the remaining circuit elements that don't already touch node $b$. 

Admittedly, I used my own experience in electronics to make these choices. As you do more problems like this, you will build your intuition, too.

When you write equations,  
>Make sure every circuit element participates in at least one equation. Every element has to have a chance to influence the outcome. 

### KVL around the leftmost mesh

The leftmost mesh is the one with the orange circle. 

![](https://ka-perseus-images.s3.amazonaws.com/d3efb9a56f65dcb7823294b4d22ecb65ed26cfeb.svg){: .centered :}

We start at the lower left corner where you see the ground symbol, and travel clockwise around the mesh adding up voltages. Kirchhoff's Voltage Law says the sum of element voltages around a loop must add up to zero.

$\displaystyle \sum_n v_n = 0$

$+v_{\text{S}} - v_1 - v_2 = 0$

We know $v_{text S}$ by inspection, since it appears directly across the voltage source,

$+140 - v_1 - v_2 = 0$

The $-$ signs for $v_1$ and $v_2$ are because we encounter their $+$ sign first during the clockwise tour around the loop. We see a voltage *drop* as we go through the component. 

<details>
<summary>What is that big zig-zag symbol?</summary>
<p>The $\sum$ symbol is the Greek letter capital Sigma. In mathematical notation it is the <em>summation</em> operation. It adds up a series of numbers. $v_1 + v_2 + v_3 + ... + v_n$</p>
</details>

### KCL at node $b$

We will get our second equation by writing Kirchhoff's Current Law at node $b$. 

![KCL for node b]({{ site.baseurl }}{% link i/fundamental_laws1a.svg %}){: .centered :}

One form of Kirchhoff's Current Law says the currents flowing into a node must equal the currents flowing out of the node.

$\displaystyle \sum_n i_{in_n} = \sum_m i_{out_m}$

Add up the currents flowing into node $b$, set them equal to the sum of currents flowing out. 

$i_1 + i_{\text S} =  i_2 + i_3 $

Earlier in Step 2. we decided to use $v_1$ and $v_2$ as the independent variables, so we use Ohm's Law to express the unknown currents in terms of voltage and resistance. We can fill in the value of $i_{\text S}$ immediately, since it comes directly from the current source. 

$\dfrac{v_1}{20\,\Omega} +  18 = \dfrac{v_2}{6\,\Omega} + \dfrac{v_2}{5\,\Omega} $

After a little rearrangement, we have our system of two equations in two unknowns,

$v_1 + v_2 = 140$

$\dfrac{1}{20} v_1 - \left (\dfrac{1}{6} + \dfrac{1}{5}\right ) v_2 = -18$

These two equations capture everything going on in our circuit.

This is a good time to do a quick check. Did every circuit element get a chance to participate in at least one equation?  Are any left out? Account for all $5$ elements.

## Steps 4 - Solve the system of equations

I encourage you to take the time to solve this problem yourself before looking at the answer. 

**Find unknown voltages $v_1$ and $v_2$.**

$v_1 =$ \_\_\_\_\_ $\text V$

<details>
<summary>show $v_1$</summary>
<p> $v_1 = 80\,\text V$</p>
</details>

$v_1 =$ \_\_\_\_\_ $\text V$

<details>
<summary>show $v_2$</summary>
<p> $v_2 = 60\,\text V$</p>
</details>

## Steps 5 - Solve the other variables

**Find unknown currents $i_1$, $i_2$, and $i_3$.**

$i_1 =$ \_\_\_\_\_ $\text A$

<details>
<summary>show $i_1$</summary>
<p> $i_1 = 4\,\text A$</p>
</details>

$i_2 =$ \_\_\_\_\_ $\text A$

<details>
<summary>show $i_2$</summary>
<p> $i_2 = 10\,\text A$</p>
</details>

$i_3 =$ \_\_\_\_\_ $\text A$

<details>
<summary>show $i_3$</summary>
<p> $i_3 = 12\,\text A$</p>
</details>

<details>
<summary>Show the full answer</summary>
<h2>Step 4. Solve the system of equations</h2>

<p>I'm going to use plain algebra for the solution. This system of equations can also be solved by linear algebra techniques like Cramer's Rule.</p>

<p>$v_1 + v_2 = 140$</p>

<p>$\dfrac{1}{20} v_1 - \left (\dfrac{1}{6} + \dfrac{1}{5}\right ) v_2 = -18$</p>

<p>Eliminate $v_2$ by solving the first equation for $v_2$,  </p>

<p>$v_2 = 140 - v_1$</p>

<p>Then substitute for $v_2$ in the second equation,</p>

<p>$\dfrac{1}{20} v_1 - \left (\dfrac{1}{6} + \dfrac{1}{5}\right )  (140 - v_1) = -18$</p>

<p>Solve for $v_1$, <br> 
(I carry the numbers along as fractions so there is no rounding.)<br>
The LCM of $6$ and $5$ is $30$.</p>

<p>$\dfrac{1}{20} v_1 - \left (\dfrac{5}{30} + \dfrac{6}{30}\right )  (140 - v_1) = -18$</p>

<p>$\dfrac{1}{20} v_1 - \left (\dfrac{11}{30}\right )  140 + \left (\dfrac{11}{30}\right ) v_1 = -18$</p>

<p>Put $v_1$'s on the left, and constants on the right,</p>

<p>$\dfrac{1}{20} v_1  + \dfrac{11}{30} v_1 = \left (\dfrac{11}{30}\right ) 140  - 18$</p>

<p>And crank the algebra,</p>

<p>$\left (\dfrac{3}{60}   + \dfrac{22}{60} \right )v_1 = \dfrac{11\cdot140}{30}  - \dfrac{540}{30}$</p>

<p>$\dfrac{25}{60} \,v_1 = \dfrac{1540}{30}  - \dfrac{540}{30}$</p>

<p>$\dfrac{25}{60} \,v_1 = \dfrac{1000}{30} $</p>

<p>$v_1 = \dfrac{60}{25}\cdot\dfrac{1000}{30} $</p>

<p>$v_1 = 80\,\text V$</p>

<p>One voltage down, one to go,</p>

<p>$v_2 = 140 - v_1$</p>

<p>$v_2 = 140 - 80$</p>

<p>$v_2 = 60 \,\text V$</p>

<p>$v_1$ and $v_2$ are both solved. </p>

<p><img src="/i/fundamental_laws2.svg"></p>

<p>Now we can go after the unknown currents, using Ohm's Law.</p>

<h2>Step 5. Solve for the other unknowns</h2>

<p>$i = \dfrac{v}{\text R}\qquad$ Ohm's Law</p>

<p>$i_1 = \dfrac{v_1}{20} = \dfrac{80}{20} \qquad i_1 = 4\,\text A$</p>

<p>$i_2 = \dfrac{v_2}{6} = \dfrac{60}{6} \qquad i_2 = 10\,\text A$</p>

<p>$i_3 = \dfrac{v_2}{5} = \dfrac{60}{5} \qquad i_3 = 12\,\text A$</p>

<p>All done! The solved circuit looks like this:</p>

<p><img src="https://ka-perseus-images.s3.amazonaws.com/2f6e323a10c03fb738dd7e879c0d3c57574af8ba.svg"></p>
</details>

## Summary
{:.no_toc}

We solved a circuit by direct application of the fundamental laws. Our tools were Ohm's Law and Kirchhoff's Laws.

The steps to a solution:

1. Label voltages and currents using the sign convention for passive components. 
2. Select the independent variable, either $i$ or $v$ to produce the simplest equations. 
3. Write equations using KCL, KVL, or both. Make sure every element is represented in at least one equation.
4. Solve the system of equations.
5. Solve for the other unknowns.   

You may be thinking this process is somewhat arbitrary and improvised. You are not mistaken. Coming next, we will talk about two efficient and well-organized methods for solving any circuit, the [Node Voltage Method]({{ site.baseurl }}{% link _articles/node-voltage.md %}), and the [Mesh Current Method]({{ site.baseurl }}{% link _articles/mesh-current.md %}).