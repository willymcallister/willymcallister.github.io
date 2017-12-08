---
layout: article
title:  "Source transformation - worked examples"
author: Willy McAllister
comments: true
---

In this worked example we use  *source transformation* to simplify circuits.

![Thevenin and Norton forms]({{ site.baseurl }}{% link i/thevenin0.svg %})

Explained by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

We work through two examples using source transformation to simplify a circit. 

----

Review the transformation between Thévenin and Norton forms,

The resistor value is the same for the Thévenin and Norton forms, $\text R_\text T = \text R_\text N$.

Convert Thévenin to Norton by setting $\text I_\text N = \text V_\text T / \text R_\text T$.  

Convert Norton to Thévenin by setting $\text V_\text T = \text I_\text N \, \text R_\text N$. 

Thévenin and Norton forms are *equivalent* because they have the same $i$-$v$ behavior from the viewpoint of the output port.

## General strategy

* Look at the circuit and identify the familiar pattern of the two forms, 
  * Thevenin form is a voltage source in series with a resistor.
  * Norton form is a current source in parallel with a resistor.
* These are the candidates for source transformation.
* Use source transformation to increase the number of resistors in series or in parallel. 
* Simplify the circuit: merge those resistors into their series or parallel equivalent.
* Redraw the circuit and look for another chance to transform sources.

## Example 1 

nearly parallel resistors

identify the current being asked for. 
identify the port with little circles. (to make sure you don't over simplify)
transform Thevenin to Norton

## Example 2

wacky circuit from AllAboutCircuits
apply source transformation twice
