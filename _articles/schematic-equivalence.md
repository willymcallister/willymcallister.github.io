---
layout: article
title:  "Schematic equivalence"
author: Willy McAllister
youtubeID: v9aJBeNLBXQ
comments: true
---

Before we dive into circuit analysis, we need to talk about the idea of schematic *equivalence*. A circuit can be drawn in different ways. If you are not aware of this property you can become puzzled about the difference between what you draw (schematic) and what you build (the real thing).

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Definition

The following two schematics are drawn differently, but they mean the same thing. The schematic on the left shows a voltage source and three resistors in numerical order. In the schematic the right, resistor $\text R3$ appears to the left of the voltage source. 

![Equivalent schematics]({{ site.baseurl }}{% link i/equivalence1.svg %}){: .centered :}

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

![Schematics with nodes and branches highlighted]({{ site.baseurl }}{% link i/equivalence2.svg %}){: .centered :}

So the answer is: **yes**, these schematics are equivalent. 

Equivalence means the matching nodes will have the same voltage, and the matching branches will have the same current. These are the things we care about being the same.

You could build a real circuit based on either of these schematics. Lay the physical wires and components right on top of either drawing and solder them together. Both schematics will produce the intended circuit, with identical node voltages and branch currents.
 
This discussion of equivalence may seem rather overdone. Why make such a big deal? We are talking about this because schematics have a curious property that often catches beginners. 

## Puzzle

This may seem baffling, (but only for a moment). As we just talked about, the following two schematics are equivalent. But, not *everything* is exactly the same. The point-to-point connections between elements are not the same.

![Equivalent schematics drawn differently]({{ site.baseurl }}{% link i/equivalence3.svg %}){: .centered :}

Look at the blue arrow in the left schematic. That wire carries the current flowing toward $\text R2$ and $\text R3$. 

**See if you can find the equivalent wire in the schematic on the right.**  
(Find a wire carrying the current going to $\text R2$ and $\text R3$.)

{% capture summary %}Where is that wire?{% endcapture %}  
{% capture details %}  
It is not there! There is no wire in the schematic on the right with the combined current flowing to  $\text R2$ and $\text R3$. This is so strange!  
{% endcapture %}{% include details.html %} 

What is going on? It is a trick question, to highlight something about the nature of schematics.

This puzzle reveals a fundamental difference between a real circuit and a drawn schematic. The lines in a schematic diagram do not necessarily represent the specific point-to-point order of the connections the corresponding real circuit might have. The question about one wire carrying current to $\text R2$ and $\text R3$ assumes a specific wiring order that does not exist in the schematic on the right.

How do you avoid getting trapped by this schematic puzzle? The key is the way you think about current. You can count on *branch currents* being the same in every equivalent schematic and the real circuit. The key is to think about current *flowing in a branch* (flowing in a component or source), not current flowing in a schematic "wire." Currents in "wires" *may or may not exist* in an equivalent version of the schematic, or in the real circuit built from either schematic.

## Equivalence

Here is a brainteaser to help you check your understanding of schematic equivalence.

**Which of the these schematics represent the same circuit (are equivalent)?**

Assume all resistors have the same value. Take your time. This isn't simple.  

Hint: There are three answers.  

![8 schematics]({{ site.baseurl }}{% link i/equivalence4.svg %}){: .centered :}

{% capture summary %}Show a hint{% endcapture %}  
{% capture details %}  
Trace the branches and nodes starting from a consistent place in each circuit, like for example the $+$ terminal of the voltage source.  Follow the branch and node pattern of each circuit to find the ones that match.  
{% endcapture %}{% include details.html %} 

{% capture summary %}Show an answer{% endcapture %}  
{% capture details %}  
A = G  
{% endcapture %}{% include details.html %} 

{% capture summary %}Show another answer{% endcapture %}  
{% capture details %}  
C = F = H  
{% endcapture %}{% include details.html %} 

{% capture summary %}Show the last answer{% endcapture %}  
{% capture details %}  
B = D = E  
{% endcapture %}{% include details.html %} 

## Good schematics

A good schematic serves a number of noble purposes. A good schematic:

* Captures the design of a circuit in an unambiguous way.
* Allows you to share your design with other people.
* Helps you remember how your circuit works, even a month from now.

Both you and your colleagues will appreciate these drawing habits for creating good schematics,

* Place inputs on the left, and outputs on the right. 
* Let information flow from left to right across the circuit.
* Use up/down on the page to suggest voltage levels. That is, draw higher voltage wires closer to the top of the page, and lower voltages (like ground) near the bottom of the page.

The following schematics are equivalent, but the one on the left is not as easy to read as the one on the right. It violates all three principles of good schematic drawing. The one on the right follows the guidelines for a good schematic.

![Equivalent schematics, one drawn better]({{ site.baseurl }}{% link i/equivalence5.svg %}){: .centered :}

Just for fun, this animation transforms one circuit into the other,

{% include embed-video.html %}

## Capture your intent

Good schematics capture your *design intent*. You should always draw schematics to make it obvious what you are trying to do. 

As you read schematics drawn by other people, take a moment to notice the drawing style. Can you figure out what makes the schematic easy to read? 

Put your creativity into design, not into drawing a schematic in a new style.
