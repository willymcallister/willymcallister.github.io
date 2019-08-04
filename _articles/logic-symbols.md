---
layout: article
title:  "Digital logic symbols"
author: Willy McAllister
comments: true
---

There are two common sets of digital logic symbols. The *distinctive shapes* of MIL-STD-806B and the more uniform boxy shapes of IEC 60617.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

Logical thoughts can be represented in text form as Boolean equations, or as symbols in a logic schematic. I find it easier to understand the meaning and *intent* of a logic design when it is drawn with symbols in schematic form. 

## Symbols for simple gates

There are two common sets of symbols. We described how these gates behave in the article on [Logic]({{ site.baseurl }}{% link _articles/logic.md %}#operators).

* **MIL-STD-806B** defines the *distinctive shapes* for the simple gates. I prefer these symbols for simple gates because they are easier to identify at a glance. These are the symbols I use at Spinning Numbers. Notice how NOT is indicated with a bubble.

![Distinctive logic shapes for simple gates]({{ site.baseurl }}{% link i/logic11.svg %}){: .centered }{: height="110px" :}

* **IEC 60617, ANSI/IEEE Std 91-1984** defines rectangular shapes for both simple gates. Notice how the NOT symbol has a *flag* instead of a bubble.

![IEC/ANSI logic shapes for simple gates]({{ site.baseurl }}{% link i/logic12.svg %}){: .centered }{: height="110px" :}

(IEC stands for International Electrotechnical Commission.)

* [**DIN 40700** link](https://de.wikipedia.org/wiki/Logikgatter#Typen_von_Logikgattern_und_Symbolik) There's a chance you may come across some antique symbols in academic papers---the third column of symbols is an older set once used in Europe. 

## Symbols for NAND and NOR

The distinctive and IEC/ISO symbols for NAND and NOR.

![Distinctive and IEC/ISO symbols for NAND and NOR]({{ site.baseurl }}{% link i/logic15.svg %}){: .centered }{: height="200px" :} 

## Symbols for complex logic functions

IEC 60617 defines the shapes for simple gates as shown here and also defines how to draw more complicated digital functions like flip flops and registers. IEC 60617 standardized symbols for complex gates are used throughout the world. We introduce these in upcoming articles.

## Summary
{:.no_toc}

Which symbols should you use? That is up to your preference or your school's or company's policy. The IEC standard is more modern than the older MIL-STD-806B, but it allows you to use the older distinctive shapes and still be standard-conforming. 

I recommend you use one set or the other---don't mix them together in the same schematic. I personally like the distinctive shapes because they are quicker to recognize, are truly beautiful, and it is a habit of many years.


