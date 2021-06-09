---
layout: article
title:  "DeMorgan's theorem in action"
author: Willy McAllister
comments: true
---

We demonstrate [DeMorgan's theorem]({{ site.baseurl }}{% link _articles/demorgan.md %}) in action.

DeMorgan's theorem makes it easier to read logic diagrams. It lets you clearly show the *intent* of your design. Logic diagrams become easier to understand and *much* easier to get right.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Substitute DeMorgan symbols into a schematic to pair up inversion bubbles so they cancel. The logic becomes much easier to understand.

----

Let's demonstrate how to use DeMorgan's theorem with this logic diagram,

![3 NAND gate circuit]({{ site.baseurl }}{% link i/logic24.svg %}){: .centered }

What does this logic do? 

There are three possible approaches you could take to explore this circuit,  
* Write out a truth table with 4 input columns, 1 output column, and $2^4 = 16$ rows.
* Write a Boolean equation and simplify it with DeMorgan's theorem.
* Draw a logic schematic with DeMorgan symbols to reveal the function.

The truth table with 16 rows is a bit too cumbersome for this problem. It's hard to identify the logic pattern. But feel free to give it a try if you want. We will do the second and third alternatives. 

## Boolean algebra

For the Boolean equation, see if you can write out the logic equation represented by this circuit. Give it a try. Then apply DeMorgan's theorem and simplify the equation as much as possible.

To get started we label the two intermediate nodes. The two gates on the left produce the NAND of their inputs,

![3 NAND gate circuit with labeled intermediate signals]({{ site.baseurl }}{% link i/logic25.svg %}){: .centered }

Now write out the logic expression for the whole thing. The output is the NAND of the two intermediate terms,

E = <span class="ooline">(<span class="oline">A B</span>) &middot; (<span class="oline">C D</span>)</span>

Can you tell what this function does? (hint: I can't.) Let's see if it helps to apply the one digital theorem we know, DeMorgan's theorem,

<span class="oline">A &middot; B</span> = <span class="oline">A</span> + <span class="oline">B</span> $\quad$ (NAND form) 

<span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span> $\quad$ (NOR form)

Our equation for E resembles the first form of DeMorgan's theorem (the NAND form). It has a long bar above two expressions joined by an AND operation. Let's use the second [memory trick]({{ site.baseurl }}{% link _articles/demorgan.md %}#remember-demorgans-theorem) we made up for DeMorgan's theorem. Here's a reminder,

* If you have two variables under a common bar --- either <span class="oline">A &middot; B</span> or <span class="oline">A + B</span>
  * Break the bar into two individual bars and flip to the opposite operator,
  * <span class="oline">A &middot; B</span> turns into <span class="oline">A</span> + <span class="oline">B</span>
  * <span class="oline">A + B</span> turns into <span class="oline">A</span> &middot; <span class="oline">B</span>

The original equation for E with its long top bar,

E = <span class="ooline">(<span class="oline">A B</span>) &middot; (<span class="oline">C D</span>)</span>

becomes,

E = <span class="ooline">(<span class="oline">A B</span>)</span> + <span class="ooline">(<span class="oline">C D</span>)</span>

The double bars over the two separate expressions cancel and we end up with,

E = A B + C D

This is as simple as we can make it. Our logic circuit performs two AND operations and OR's together the intermediate results. In digital jargon this is called a 2-2 AND-OR. Another name for it is Sum-of-Products.

## DeMorgan logic diagram

Next we'll redraw a schematic, this time with the DeMorgan NAND symbol for the third gate.

![3 NAND gate circuit with DeMorgan symbol]({{ site.baseurl }}{% link i/logic26.svg %}){: .centered }

Here's where something cool happens. Notice how bubbles appear on both ends of the intermediate nodes. Conceptual experiment: If we pull the bubbles slightly away from their gate symbols we observe the signals just before the output bubbles and just after the input bubbles. (Note: You can't physically pull the bubbles off a real NAND gate, but you certainly can nudge the bubbles in your imagination.)

![AND-OR with bubbles separated from gate symbols]({{ site.baseurl }}{% link i/logic28.svg %}){: .centered }

In the diagram above, AB emerges from the top left AND symbol, it gets inverted twice, and AB is the input to the OR symbol. It's as if the two bubbles aren't even there. The same thing happens to CD on the lower path. Invert something twice and you get the original input. If you select logic symbols so bubbles appear on both ends of a node, the bubbles cancel each other. 

With the DeMorgan gate symbol for the third NAND we've turned the circuit into this,

![AND-OR without bubbles]({{ site.baseurl }}{% link i/logic29.svg %}){: .centered }

And with a glance you can read off the logic function,

E = A B + C D

The answer falls out with almost no effort. 

It's important to remember---we do not change the underlying hardware circuit as we do these logic transformations---the gates are still NANDs---but we've drawn an equivalent logic diagram that does the same thing.

This bubble-cancellation trick is the superpower of DeMorgan's theorem. After you get good at this you won't have to redraw the schematic like I did here. Instead you stick with the original version with the DeMorgan NAND,

![3 NAND gate circuit with DeMorgan symbol]({{ site.baseurl }}{% link i/logic26.svg %}){: .centered }

Pass you eyes over the circuit. Look for pairs of bubbles on either end of a node. When you find bubble pairs you know they can be ignored. The circuit becomes bubble-free and much easier to read. 

When bubbles match up the circuit better reflects your *design intent*. Our example is an AND-OR logic function, which is exactly what the schematic looks like when we use the DeMorgan symbol. The original schematic with three conventional NAND symbols gives no hint of the logic function it performs. That version of the schematic hides the design intent, which is evil. Don't do to yourself or anyone else who uses your work.

But what if you don't find pairs of bubbles? You work out the logic function with careful algebra. But before you dive into algebra do everything you can to replace regular symbols with DeMorgan symbols to create as many bubble pairs as you can.  

## DeMorgan practice

**What does this logic do?**

Hint: Find the answer fastest by with a DeMorgan symbol.

![3 NOR gate circuit]({{ site.baseurl }}{% link i/logic30.svg %}){: .centered }

{% capture summary %}show answer{% endcapture %}  
{% capture details %} 
Change the third NOR gate to it's DeMorgan equivalent symbol. All the bubbles match up,

![3 NOR gate circuit with DeMorgan symbol]({{ site.baseurl }}{% link i/logic31.svg %}){: .centered } 

E = (A + B) &middot; (C + D) 

You can call this a Product-of-Sums function.
{% endcapture %}{% include details.html %}

**What does this logic do?**

![2 NAND and 1 NOR gate circuit]({{ site.baseurl }}{% link i/logic32.svg %}){: .centered }

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
Use a DeMorgan symbol for the NOR gate to pair up bubbles,

![2 NAND and 1 NOR gate circuit]({{ site.baseurl }}{% link i/logic33.svg %}){: .centered }

E = ABCD

This implements a 4-input AND function with three 2-input gates. The DeMorgan symbol better reflects the intended function. With practice, your eyes will see the matched bubbles and you won't have to redraw the circuit. To understand the logic function just read the gate shapes.
{% endcapture %}{% include details.html %}

**What does this logic do?**

![4 NAND gate circuit]({{ site.baseurl }}{% link i/logic36.svg %}){: .centered }

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
Use a DeMorgan symbol for the first NAND to change its output bubble to a pair of bubbles on the input side. This achieves a no-bubble connection to the central pair of gates. 

Use a DeMorgan symbol for the last NAND gate to pair up bubbles with the outputs of the central pair of gates,

![4 NAND gate circuit with DeMorgan symbol on the last NAND gate]({{ site.baseurl }}{% link i/logic37.svg %}){: .centered }

Label the internal node, read off the logic, and do a little bit of Boolean algebra,

E = A&middot;( <span class="oline">A</span> + <span class="oline">B</span> ) + ( <span class="oline">A</span> + <span class="oline">B</span> )&middot;B

E = A<span class="oline">A</span> + A<span class="oline">B</span>  + <span class="oline">A</span>B + <span class="oline">B</span>B

The A<span class="oline">A</span> and <span class="oline">B</span>B terms evaluate to 0, so they drop out. This leaves,

E = A<span class="oline">B</span> + <span class="oline">A</span>B

We recognize this as the exclusive OR function,

E = A $\oplus$ B

This is an XOR created with the fewest possible 2-input NAND gates. 

This problem shows how you can use a DeMorgan symbol to move a bubble *away* from a node to achieve a no-bubble node.

Extra credit 1: Redraw the original circuit with NOR gates instead of NANDs. Do the problem again. It should produce an XNOR function.

Extra credit 2: If you want to put yourself through some extra pain try to do the problem with Boolean algebra starting from the original all-NAND schematic. So tedious. It makes you appreciate the power of DeMorgan's theorem and the schematic representation of logic.
{% endcapture %}{% include details.html %}

## Summary
{:.no_toc}

DeMorgan symbols are a graphical representation of DeMorgan's theorem.

There are two reasons we substitute DeMorgan symbols into a schematic---to get inversion bubbles to pair up and cancel---and to match up a bubble with a signal name that is negated, such as <span class="oline">RESET</span> or Enable-. When you do this the logic reflects the design intent and it much easier to understand. 

You should use DeMorgan symbols every time you draw logic. Some designers consider a logic diagram correct only if DeMorgan symbols are properly used. You can draw functionally correct logic without DeMorgan symbols, but if the symbols don't clearly convey the intended function, your diagram is "wrong" or at best low quality. 

The main purpose of a logic diagram is to document the intended function. If someone who reads your diagram is forced into complex logic transformations to understand the logic there is a great risk of error. You waste everyone's time, especially your own. You will read your own schematic two weeks or two months from now and wonder what it does. Save yourself a lot of pain. DeMorgan!

