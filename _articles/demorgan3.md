---
layout: article
title:  "DeMorgan's theorem for basic gates"
author: Willy McAllister
comments: true
---

[DeMorgan's theorem]({{ site.baseurl }}{% link _articles/demorgan.md %}) is taught using NAND and NOR, but it's so much fun let's extend it to the basic gates.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

All the basic gates can be given DeMorgan symbols. NOT, AND, and OR have two equivalent symbols. XOR and XNOR can be drawn three ways.

----

You [know about]({{ site.baseurl }}{% link _articles/demorgan.md %}#demorgan-equivalent-gate-symbols) the two equivalent symbols for NAND,

![NAND symbols]({{ site.baseurl }}{% link i/logic22a.svg %})

and NOR,

![NOR symbols]({{ site.baseurl }}{% link i/logic23a.svg %})

We derived these from DeMorgan's theorem. With the same reasoning we now create alternate symbols for the basic gates---NOT, AND, OR, XOR, (and XNOR).

You might not come across these symbols in other people's logic diagrams, but it's fun to make them your own and stretch your DeMorgan muscles.

## DeMorgan NOT

The NOT symbol can be drawn two ways,

![NOT symbols]({{ site.baseurl }}{% link i/logic27a.svg %})

Pick the symbol that matches the bubble to the negated logic signal it is connected to. Here's an example where we put the bubble next to the negated <span class="oline">RESET</span> signal,

![NOT symbol with Reset- signal]({{ site.baseurl }}{% link i/logic38.svg %})

The following gate symbols are all designed the same way---look at the truth table and describe what makes the output equal 1 and then describe how to make the output 0.

## DeMorgan AND

![AND truth table]({{ site.baseurl }}{% link i/logic_tt_AND.svg %}) 

The usual symbol: The output is 1 when both A AND B are 1.  
The alternate symbol: The output is 0 when A OR B is 0. 

We can draw both these ideas,

![AND symbols]({{ site.baseurl }}{% link i/logic39.svg %})

{% capture summary %}confirm{% endcapture %}  
{% capture details %}
Here's one way to confirm the symbol on the right is still an AND gate. Pull the bubbles away from the symbol and make them separate inverters. Try various combinations of inputs and check that the logic still matches the AND truth table.

![AND alternative symbol with inverters ]({{ site.baseurl }}{% link i/logic41a.svg %}){: .centered }
{% endcapture %}{% include details.html %}

The new symbol may blow your mind, but it faithfully represents the AND function. The alternate symbol has the same truth table, with an OR flavor. 

And remember, whatever hardware circuit is inside these symbols is exactly the same for both of them.

## DeMorgan OR

![OR truth table]({{ site.baseurl }}{% link i/logic_tt_OR.svg %})

The usual symbol: The output is 1 when A OR B is 1.  
The alternate symbol: The output is 0 when A AND B are 0. 

![OR symbols]({{ site.baseurl }}{% link i/logic40.svg %})

The alternate symbol implements the OR truth table, but with an AND flavor. You would use this symbol if your design intent is to AND two signals.

## DeMorgan XOR

XOR gets much more interesting. Unlike AND and OR, the truth table for XOR is symmetric,

![XOR truth table]({{ site.baseurl }}{% link i/logic_tt_XOR.svg %})

The usual symbol: The output is 1 when A OR B is 1, but not both.  
Alternate symbol: The output is 1 when A OR B is 0, but not both.  

![XOR symbols]({{ site.baseurl }}{% link i/logic41.svg %})

{% capture summary %}confirm{% endcapture %}  
{% capture details %}
Here's one way to confirm the symbol on the right is still an XOR gate. Pull the bubbles away from the symbol and make them separate inverters. Try various combinations of inputs and check that the logic still matches the XOR truth table.

![XOR with inverters in front]({{ site.baseurl }}{% link i/logic41a.svg %}){: .centered }

Here's a truth table representing the symbol with inverted inputs, 

![XOR truth table with inverted inputs]({{ site.baseurl }}{% link i/logic_tt_XOR_inverted_inputs.svg %}){: .centered :}

If you invert one of the inputs, the effect on the truth table is to flip the corresponding input column top to bottom. Look at the truth table to confirm that. If you invert both inputs this makes the rows come out in reverse order. Notice how the symmetry of the XOR function means the output doesn't change when the row order is reversed. This truth table is another way to confirm the symbol on the right is an XOR.
{% endcapture %}{% include details.html %}

There are lots of other ways to describe XOR,  
 - The output is 1 when an odd number of inputs are 1.  
 - The output is 1 when an odd number of inputs are 0.  
 - The output is 1 when the inputs are not equal. A $=\not$ B
 - The output is 0 when the inputs are equal. A $=$ B
 - The XOR computes even parity on the two input bits.
 - If you regard the inputs as decimal numbers then XOR computes the modulo 2 sum of the inputs, (A $+$ B) mod 2, where the $+$ sign represents addition, not logical OR.

## DeMorgan XNOR

If you invert the output of an XOR you get an XNOR. 

![XNOR truth table]({{ site.baseurl }}{% link i/logic_tt_XNOR.svg %})

The usual symbol: The output is 0 when A OR B, but not both, are 1.  
Alternate symbol: The output is 0 when A OR B, but not both, are 0.

![XNOR symbols]({{ site.baseurl }}{% link i/logic42.svg %})

You get an XNOR symbol by adding an output bubble to the XOR symbols from above.

## DeMorgan more bubbles

Lets look at an XOR gate and see what happens if you invert one of its inputs, 

![XOR with inverted input]({{ site.baseurl }}{% link i/logic43.svg %})

**What kind of gate is this? Write out a truth table for this XOR with one inverted input.**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
When you invert an XOR input (<span class="oline">B</span>) the resulting truth table is,

![XOR truth table with B input inverted]({{ site.baseurl }}{% link i/logic_tt_XOR_B_inverted.svg %}){: .centered :}

Look at the output column. What gate is this? It is the same as an XNOR gate. This is an XNOR! We just invented another symbol for XNOR. 

Extra effort: Write out another truth table with A inverted instead of B, just to make sure it doesn't depend on which input is inverted. 
{% endcapture %}{% include details.html %}

Now start with an XNOR gate and invert one of its inputs, 

![XNOR with inverted input]({{ site.baseurl }}{% link i/logic44.svg %})

**What kind of gate is this? Write the truth table for this XNOR with one inverted input.**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
When you invert an XNOR input (<span class="oline">B</span>) the resulting truth table is,

![XNOR truth table with B input inverted]({{ site.baseurl }}{% link i/logic_tt_XNOR_B_inverted.svg %}){: .centered :}

Look at the output column. What gate is this? It is the same as an XOR gate. This is an XOR! This is another symbol for XOR. 
{% endcapture %}{% include details.html %}

We now have a big collection of alternate symbols for XOR and XNOR. How can you keep this all straight? How do you tell which is which?

**Figure out a pattern. How can you tell XOR apart from XNOR?**

![All possible XOR and XNOR symbols]({{ site.baseurl }}{% link i/logic45.svg %})

The top row is XOR symbols. The bottom row is XNOR symbols.
{: .caption :}

{% capture summary %}show answer{% endcapture %}  
{% capture details %} 
Count the total number of bubbles The bubbles can be input or output.

An even number of bubbles (0 or 2) is an XOR function.

An odd number of bubbles (1 or 3) is an XNOR function.

Each time you add or take away a bubble the gate changes identity, from XOR to XNOR, or the other way. When you add or take away a bubble you *are* changing the underlying circuit of the gate.
{% endcapture %}{% include details.html %}

## Summary
{:.no_toc}

The basic gates, NOT, AND, OR, XOR (and XOR) have alternate DeMorgan-style symbols. Use these just like the DeMorgan symbols for NAND and NOR---to match up bubbles and make logic diagrams reflect your design intent.

Commercial data sheets for logic gates show the conventional symbol. The alternate symbols never appear, but you know they exist, so go ahead and use them if you want.

Not every logic designer who looks at your work will be completely familiar with the DeMorgan symbols we developed here. Be alert for this and be flexible in working with your collaborators. Perhaps add extra annotation next to your gates (like part numbers or "this is an OR gate") to avoid confusion. Your goal is an error-free design, so balance clever symbol usage with effective teamwork.


