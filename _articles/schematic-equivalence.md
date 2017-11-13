---
layout: article
title:  "Schematic equivalence"
author: Willy McAllister
youtubeID: v9aJBeNLBXQ
comments: true
---

Before we dive into the methods of circuit analysis, we need to talk about the idea of schematic *equivalence*. This is important because a circuit can be represented by schematics drawn in different ways. If you are not aware of this property of schematics it can make you feel puzzled about the relationship between what you draw and what you build.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Define schematic equivalence

The following two schematics are drawn differently, but they mean the same thing. The schematic on the left shows a voltage source and three resistors in numerical order. In the schematic the right, resistor $\text R3$ appears to the left of the voltage source. 

![Equivalent schematics](https://ka-perseus-images.s3.amazonaws.com/9e11f1c3ce816b5532169dd12990d44fb99755ad.svg){: .centered }

Do both of these schematics properly represent the intended circuit? Or said another way,  
**Are these two schematics *equivalent*?** 

We say a real circuit and a schematic (or two schematics), are *equivalent* if they have the same nodes and branches.

To be equivalent, two schematics must:

* Represent every component and source
* Have the same number of nodes
* Each node must be connected to the same branches

Let's check to see if our two schematics are equivalent: 

* Are all components and sources represented in both schematics?  
Roll call ... $\text V$, here!, $\text R1$, here!, $\text R2$, here! $\text R3$, here!  
All elements accounted for.

* Do both schematics have the same number of nodes?  
Yes. Both schematics have $2$ nodes.

* Is each node connected to the same branches?  
Yes. Each node connects to the three resistors and the source. 

The two nodes are marked with orange lines. The four branches are shown as blue arrows. 

![Schematics with nodes and branches highlighted](https://ka-perseus-images.s3.amazonaws.com/25351ae935dc08c0fd48aa419f55624fee2df17b.svg){: .centered }

So the answer is: **yes**, these schematics are equivalent. 

Equivalence means the matching nodes will have the same voltage, and the matching branches will have the same current. These are the things we care about being the same.

You could build a real circuit based on either of these schematics. Lay the physical wires and components right on top of either drawing and solder them together. Both schematics will produce the intended circuit, with identical node voltages and branch currents.
 
This discussion of equivalence may seem rather overdone. Why make such a big deal? We are talking about this because schematics have a curious property that often catches beginners. 

## A schematic puzzle

This may seem baffling, (but only for a moment). As we just talked about, the following two schematics are equivalent. But, not *everything* is exactly the same. The point-to-point connections between elements are not the same.

![](https://ka-perseus-images.s3.amazonaws.com/059c2b3c07e481522a34a9f092b8c3e044687b80.svg){: .centered }

Look at the blue arrow in the left schematic. That wire carries the current flowing towards  $\text R2$ and $\text R3$. 

**See if you can find the equivalent wire in the schematic on the right.**  
(Find a wire carrying the current going to $\text R2$ and $\text R3$.)

<details>
<summary>Where is that wire?</summary>
<p>It is not there! There is no wire in the schematic on the right with the combined current flowing to  $\text R2$ and $\text R3$. This is so strange!</p>
</details>

What is going on? It is a trick question, to highlight something about the nature of schematics.

This puzzle reveals a fundamental difference between a real circuit and a drawn schematic. The lines in a schematic diagram do not necessarily represent the specific point-to-point order of the connections the corresponding real circuit might have. The question about one wire carrying current to $\text R2$ and $\text R3$ assumes a specific wiring order that does not exist in the schematic on the right.

How do you avoid getting trapped by this schematic puzzle? The key is the way you think about current. You can count on *branch currents* being the same in every equivalent schematic and the real circuit. The key is to think about current *flowing in a branch* (flowing in a component or source), not current flowing in a schematic "wire." Currents in "wires" *may or may not exist* in an equivalent version of the schematic, or in the real circuit built from either schematic.

## Concept check: Schematic equivalence

Here is a brainteaser to help you check your understanding of schematic equivalence.

**Which of the these schematics represent the same circuit (are equivalent)?**

Assume all resistors have the same value. Take your time. This isn't simple.  
>Hint: There are three answers.  

![8 schematics](https://ka-perseus-images.s3.amazonaws.com/0dc044215b90605678eccefe7592d3d2f2fb812c.svg){: .centered }

<details>
<summary>Show a hint</summary>
 <p>Trace the branches and nodes starting from a consistent place in each circuit, like for example the $+$ terminal of the voltage source.  Follow the branch and node pattern of each circuit to find the ones that match.</p>
 </details>

<details>
<summary>Show an answer</summary>
<p>A = G</p>
</details>

<details>
<summary>Show another answer</summary>
<p>C = F = H</p>
</details>

<details>
<summary>Show the last answer</summary>
<p>B = D = E</p>
</details>

## Drawing good schematics

A good schematic serves a number of noble purposes. A good schematic:

* Captures the design of a circuit in an unambiguous way.
* Allows you to share your design with other people.
* Helps you remember how your circuit works, even a month from now.

Both you and your colleagues will appreciate these drawing habits for creating good schematics,

* Place inputs on the left, and outputs on the right. 
* Let information flow from left to right across the circuit.
* Use up/down on the page to suggest voltage levels. That is, draw higher voltage wires closer to the top of the page, and lower voltages (like ground) near the bottom of the page.

The following schematics are equivalent, but the one on the left is not as easy to read as the one on the right. It violates all three principles of good schematic drawing. The one on the right follows the guidelines for a good schematic.

![](https://ka-perseus-images.s3.amazonaws.com/96485f35a789b7deec56c3abe11721713fef7b87.svg){: .centered }

{% include embed-video.html %}

## Good schematics capture your intent

Good schematics capture your *design intent*. You should always draw schematics to make it obvious what you are trying to do. 

As you read schematics drawn by other people, take a moment to notice the drawing style. Can you figure out what makes the schematic easy to read? 

Put your creativity into design, not into drawing a schematic in a new style.
