---
layout: article
title:  "Thévenin and Norton equivalents - part 2"
author: Willy McAllister
comments: true
---
 
The theory of *Thévenin* and *Norton equivalents* is a way to simplify circuits. There are times you can apply this instead of [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}) or [Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}). It's another tool to put in your toolbox of circuit design techniques.

The theory works for resistor ciruits and also for more complicated circuits with linear components, $\text R, \text L,$ and $\text C$. In this article we cover the resistor version.

Part 1 (the previous article) covers the $i$-$v$ graphs of the Thévenin and Norton circuits, and shows how they are equivalent.

Part 2 (this article) derives Thévenin's theorem. We show how a complicated network of resistors and sources can be reduced to a Thévenin equivalent. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}


----

In earlier articles we learned how to [simplify resistor networks]({{ site.baseurl }}{% link _articles/simplifying-resistor-networks.md %}) down to a single resistor. Thévenin's theory is the next step. We learn how to simplify circuits made of resistors and sources, 

**Thévenin's theory**
"A circuit with any combination of resistors and ideal sources can be simplified down to a single voltage source in series with a single resistor."

**Norton's theory**
"A circuit with any combination of resistors and ideal sources can be simplified down to a single current source in parallel with a single resistor."

In this article we are going to prove Thévenin's theory using [superposition]({{ site.baseurl }}{% link _articles/superposition.md %}).

First, we start with a little puzzle,

## Black box

Here's a circuit covered with a black curtain. 

![Black box]({{ site.baseurl }}{% link i/thevenin9.svg %}){: .centered :}

Inside the box there are any number of resistors and sources (voltage and/or current sources). I won't tell you how many, or how they are connected. Two wires come out from behind the curtain. This is the port we are interested in. 

You are allowed to measure $v$ and $i$ at the port. Those are the only measurements you can make. No peeking behind the curtain to see what's in there. You can connect anything you want to the port to help you figure out what's on the inside.