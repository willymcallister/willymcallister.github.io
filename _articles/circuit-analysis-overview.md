---
layout: article
title:  "DC circuit analysis overview"
author: Willy McAllister
comments: true
---

Circuit analysis, or solving a circuit, means figuring out all the voltages and currents. Here's some context for how engineers do that. 

Written by Willy McAllister.

----

### Contents
{: .no_toc :}

* Will be replaced with the ToC
{: toc :}

----

## Basic terms and laws 

The basic tools you know for analyzing a circuit are,

* [Circuit terminology]({{ site.baseurl }}{% link _articles/circuit-terminology.md %})
    - wires, nodes, branches, meshes, loops, reference node (ground)
    

* Element i-v equations
    - [$v = i\,\text R$]({{ site.baseurl }}{% link _articles/ideal-elements-and-sources.md %}#ohms-law)
    
    - [$i = \text C\,\dfrac{dv}{dt}$]({{ site.baseurl }}{% link _articles/ideal-elements-and-sources.md %}#capacitor)
    
    - [$v = \text L\,\dfrac{di}{dt}$]({{ site.baseurl }}{% link _articles/ideal-elements-and-sources.md %}#inductor)
* Series and parallel resistors
    - [$\text R_{\text{series}} = \text{R1} + \text{R2} + \ldots + \text{R}_\text N$
]({{ site.baseurl }}{% link _articles/series-resistors.md %})

    - [$\dfrac{1}{\text R_{\text{parallel}}} = \dfrac{1}{\text{R1}} +\dfrac{1}{\text{R2}} + \ldots + \dfrac{1}{\text{R}_\text N}$]({{ site.baseurl }}{% link _articles/parallel-resistors.md %})
* Kirchhoff's Laws
    - [Kirchhoff's Current Law $\quad\displaystyle \sum i_{node} = 0$]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %})

    - [Kirchhoff's Voltage Law $\quad\displaystyle \sum v_{loop} = 0$]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %})

## General strategy

The first thing you do when given a circuit analysis problem is to simplify the circuit if possible. For a resistor circuit, search for series and parallel resistors and merge them together as much as you can.

After simplifying, all circuit analysis methods are some version of this strategy:

* Create a system of independent equations based on the element $i$-$v$ equations and how they are connected to each other.
* Solve the system of equations for the independent voltages or currents. This is often done using techniques from linear algebra.
* Solve the remaining voltages and currents.

## Methods

There are three popular methods for doing circuit analysis. They all produce the same answer. You pick the method best matched to the circuit or the method you feel the most comfortable with.

* [Direct application of the fundamental laws]({{ site.baseurl }}{% link _articles/fundamental-laws.md %}) (Ohm's Law and Kirchhoff's Laws)
* [Node Voltage Method]({{ site.baseurl }}{% link _articles/node-voltage.md %})
* [Mesh Current Method]({{ site.baseurl }}{% link _articles/mesh-current.md %}) and its close relative, the [Loop Current Method]({{ site.baseurl }}{% link _articles/loop-current.md %}) 

Direct application of the fundamental laws is an improvised method. It is quick and works well for simple circuits. It is not particularly efficient in terms of the total amount of work required, but that doesn't matter for small circuits. Managing the amount of effort becomes important as circuits get more complicated.

Engineers have invented two elegant ways to organize and streamline circuit analysis: the *Node Voltage Method* and the *Mesh Current Method*. These are general-purpose step-by-step recipes to solve a circuit. Both methods minimize the number of equations you have to solve. This efficiency has a big impact for complicated circuits with lots of nodes and branches. The Loop Current Method is a close relative of the mesh method. It is used in special cases, as described in that article. 

As we study these methods, the example circuits are only resistors and ideal sources. This keeps the math relatively simple and allows us to concentrate on learning the methods.

## Decomposing problems

Circuit analysis can be an involved process for big circuits. As you work with circuits, you will learn how to break complicated problems into simpler pieces. Decomposing problems may seem slow at first, and you may feel impatient. "Why do I have to go through so many steps!?" However, breaking up problems into smaller steps is the heart of the engineering art. The multi-step circuit analysis methods are good examples of how engineers approach problem solving.

## Computer simulation

The circuit simulator $\text{SPICE}$ and many similar simulation programs are available for professional and student engineers, and anyone else interested in the subject. (search term: circuit simulator) Computer simulation is often used when solving even modestly complex circuits. 

Here at Spinning Numbers we have our own circuit simulator, the [Circuit sandbox]({{ site.baseurl }}{% link _articles/circuit-sandbox.md %}).
It is available in a number of languages. 

**If I can solve a circuit with a simulation, why do I need to learn  circuit analysis?**

It is important to learn how to analyze circuits by hand and in your head. This skill deepens your insight into how a circuit works, insight you don't get if you just draw a circuit and ask a computer for the answer. When you learn circuit analysis, you can look at a schematic and 'see' the circuit work in your mind. 
