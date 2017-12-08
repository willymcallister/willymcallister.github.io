---
layout: article
title:  "Thévenin and Norton equivalents"
author: Willy McAllister
comments: true
---
 
The theory of *Thévenin* and *Norton equivalents* is a way to simplify circuits. Sometimes you can apply this instead of [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}) or [Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}). It's another circuit design tool to put in your toolbox.

The theory works for ciruits composed of resistors and sources. It also works for more complicated circuits with linear components, $\text R, \text L,$ and $\text C$. In this article we cover the resistor version.

The previous article on [source transformations]({{ site.baseurl }}{% link _articles/source-transformation.md %}) covers the $i$-$v$ graphs of the Thévenin and Norton circuits, and shows how they are equivalent.

This article derives Thévenin's theorem. We show how a complicated network of resistors and sources can be simplified down to a Thévenin equivalent. 

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

In an earlier article, [simplifying resistor networks]({{ site.baseurl }}{% link _articles/simplifying-resistor-networks.md %}), we learned to simplify any complicated resistor network down to a single resistor. Thévenin's theory is the next step up. We learn how to simplify networks of resistors *and* sources, 

**Thévenin's theory**
"A circuit with any combination of resistors and sources can be simplified down to a single voltage source in series with a single resistor."

**Norton's theory**
"A circuit with any combination of resistors and sources can be simplified down to a single current source in parallel with a single resistor."

In this article we are going to prove Thévenin's theory using [superposition]({{ site.baseurl }}{% link _articles/superposition.md %}).

## Example circuit

![Example circuit]({{ site.baseurl }}{% link i/thevenin20.svg %}){: .centered :}

![Example Thevenin circuit]({{ site.baseurl }}{% link i/thevenin21.svg %}){: .centered :}

Observations: Rthev implements the tilt. Vthev implements the offset away from the vertical axis. - or -  Inorton implements the offset away from the horizontal axis. The tilt is the same for both cases, so Rthev = Rnort.
Vthev and Inorton have no effect on the tilt. Rthev depends entirely on internal resistances.

Notice the current flowing in the Norton resistor. It seems like it is "wasted" power. Current flowing in Rnorton isn't available to the load. That's the side effect of driving with a current source. In the Thevenin circuit, the equivalent "waste" is the voltage appearing across the Thevenin resistor. This voltage dissipates power (heat) in R_thev and isn't available to the load. 

When you reconnect the load, the "operating point" is somewhere on the i-v line, as determined by the load. It's probably not one of the two points we determined while figuring out the Thevenin or Norton equivalent.
