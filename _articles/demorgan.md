---
layout: article
title:  "DeMorgan's theorem"
author: Willy McAllister
comments: true
---

DeMorgan's theorem unleashes the full power of NAND and NOR gates. It is by far the most important theorem in digital design.

DeMorgan lets you clearly reveal your *design intent*. Your logic design becomes easier to understand and much easier to get right.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

DeMorgan's theorem,

<span class="oline">A &middot; B</span> = <span class="oline">A</span> + <span class="oline">B</span> $\quad$ (NAND form) 

<span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span> $\quad$ (NOR form)

----

## NAND

DeMorgan's theorem emerges from the truth tables for NAND and NOR. 

We look at NAND first.

![NAND symbol]({{ site.baseurl }}{% link i/logic_NAND.svg %})
![NAND truth table]({{ site.baseurl }}{% link i/logic_tt_NAND.svg %})

Back when we first introduced [NAND and NOR]({{ site.baseurl }}{% link _articles/logic-nand-nor.md %}) and the [other logic gates]({{ site.baseurl }}{% link _articles/logic.md %}#operators) we defined the operations with a single statement. But, there are two ways to describe a truth table. You can describe when the output is FALSE or you can describe when the output is TRUE. 

How many ways can you describe the output of NAND? Give it a try.

{% capture summary %}I can think of two.{% endcapture %}  
{% capture details %}  
* The output is FALSE if both A AND B are TRUE. 
* The output is TRUE if either A OR B are FALSE.  

Both are valid ways to define NAND. One of them is not "more true" than the other. 

NAND is C = <span class="oline">A&middot;B</span>

NAND is C = <span class="oline">A</span> + <span class="oline">B</span>
{% endcapture %}{% include details.html %}

From this we get DeMorgan's theorem for NAND, <span class="oline">A&middot;B</span> = <span class="oline">A</span> + <span class="oline">B</span>

## NOR

Now we look at the NOR truth table.

![NOR symbol]({{ site.baseurl }}{% link i/logic_NOR.svg %})
![NOR truth table]({{ site.baseurl }}{% link i/logic_tt_NOR.svg %})

There are two ways to describe the NOR truth table---when the output is FALSE or when the output is TRUE.

How would you do it? Give it a try.

{% capture summary %}show me{% endcapture %}  
{% capture details %}  
* The output is FALSE if either A OR B are TRUE. 
* The output is TRUE if both A AND B are FALSE.    

Both are valid ways to define NOR. 

NOR is C = <span class="oline">A + B</span>

NOR is C = <span class="oline">A</span> &middot; <span class="oline">B</span>
{% endcapture %}{% include details.html %}

From this we get DeMorgan's theorem for NOR, <span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span>

## DeMorgan's theorem

The two forms of DeMorgan's theorem are,

<span class="oline">A &middot; B</span> = <span class="oline">A</span> + <span class="oline">B</span> $\quad$ (NAND form) 

<span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span> $\quad$ (NOR form)

### Concept check


{:start="1"} 
1. Fill out this truth table a column at a time to reinforce DeMorgan's theorem.  
![DeMorgan truth table]({{ site.baseurl }}{% link i/logic_tt_demorgan.svg %})

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
![DeMorgan truth table solved]({{ site.baseurl }}{% link i/logic_tt_demorgan_solved.svg %})
{% endcapture %}{% include details.html %} 

{:start="2"}
2. Let's put DeMorgan's theorem to work.

Write this statement two ways using the NAND form,

I love pie that is not made with Apples and Bananas. 

Define some variables,

A = pie has apples  
B = pie has bananas  
C = I love this pie

My love of pie can be stated as two equivalent logic equations,  
C = <span class="oline">A&middot;B</span>$\quad$ I love this pie if it does NOT have apples AND bananas.

C = <span class="oline">A</span> + <span class="oline">B</span>$\quad$ I love this pie if it has NO apples OR it has NO bananas.

Given: A pie is made of apples and raisins. Do I love it?

A = TRUE and B = FALSE  
C = <span class="oline">A&middot;B</span> = <span class="oline">TRUE&middot;FALSE</span> = TRUE    
C = <span class="oline">A</span> + <span class="oline">B</span> = <span class="oline">TRUE</span> + <span class="oline">FALSE</span> = TRUE  
Either way, I love this pie!

{:start="3"}
3. Someone gives you a pie made of apples and bananas. Run the equations again.  
You shouldn't like this pie.

{:start="4"}
4. Change one word in the original problem,  

I love pie that is not made with apples <u>or</u> bananas.

Define some logic variables and use the NOR form of DeMorgan's theorem to find out if you love a pie made from peaches and bananas.

## Remember DeMorgan's theorem

These two equations are hard to keep straight. Here's a trick to help you remember.

* If you have two individual bar expressions --- either <span class="oline">A</span> &middot; <span class="oline">B</span> or <span class="oline">A</span> + <span class="oline">B</span>
  * Merge the bars into an overall bar and flip to the opposite operator, 
  * <span class="oline">A</span> &middot; <span class="oline">B</span> turns into <span class="oline">A + B</span>
  * <span class="oline">A</span> + <span class="oline">B</span> turns into <span class="oline">A &middot; B</span>

or

* If you have two expressions under a common bar --- either <span class="oline">A &middot; B</span> or <span class="oline">A + B</span>
  * Break the bar into two individual bars and flip to the opposite operator,
  * <span class="oline">A &middot; B</span> turns into <span class="oline">A</span> + <span class="oline">B</span>
  * <span class="oline">A + B</span> turns into <span class="oline">A</span> &middot; <span class="oline">B</span>

## Add bars

What if there isn't a bar on every term? What if you have something like <span class="oline">A</span> &middot; B and you want to use deMorgan's theorem? DeMorgan's theorem is written with bars on every term, so if one term has no bar we do a little trick: we add two bars above B, and then use the same rule. Two bars is a logic identity, <span class="ooline"><span class="oline">B</span></span> = B. Inverting B twice gives you back B.

![Inverting twice is a logic identity. B-bar-bar = B]({{ site.baseurl }}{% link i/logic27.svg %})

This lets us write <span class="oline">A</span> &middot; B as <span class="oline">A</span> &middot; <span class="ooline"><span class="oline">B</span></span> and every term has at least one bar over it. 

Then apply the rule. Merge the bar on A with the top bar on B. This leaves behind a <span class="oline">B</span> (with one bar). Flip the AND operation to an OR and you end up with, <span class="oline">A</span> &middot; B = <span class="ooline">A + <span class="oline">B</span></span>

## DeMorgan equivalent gate symbols

DeMorgan's theorem suggests additional gate symbols. 

Look at the NAND form of DeMorgan's theorem. If <span class="oline">A&middot;B</span> = <span class="oline">A</span> + <span class="oline">B</span> then,

![DeMorgan NAND symbols]({{ site.baseurl }}{% link i/logic22.svg %})

We just invented an equivalent symbol for NAND. These two symbols are *both* NAND gates. DeMorgan's theorem says the equivalent symbols do *exactly* the same thing. 

How about for the NOR form? If <span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span> then,

![DeMorgan NOR symbols]({{ site.baseurl }}{% link i/logic23.svg %})

We just invented an equivalent symbol for NOR. These two symbols are *both* NOR gates. DeMorgan's theorem says the equivalent symbols do *exactly* the same thing. 

**Key Point:** Inside the NAND and NOR symbols there is some sort of circuit  creating the logic function (we study these later). When we draw the alternate DeMorgan symbol that internal circuit *does not change. It is exactly the same circuit for both symbols.* 

It may seem weird to call the first two symbols both "NAND" when one of them obviously includes an OR symbol. The same for the NOR symbol made with an AND shape. This is just something we get used to. The awkward alternative would be to make up new names for the DeMorgan symbols, like ORN and ANDN. Yuck. Let these symbols sink in to the point where you instantly name each DeMorgan symbol the right thing.

These new DeMorgan symbols are equivalent to the memory trick we talked about above. The single output bubble becomes two bubbles on the input side, and the gate symbol is flipped. 

Also notice how we used two different symbols for the inverter in the previous section. That's sort of a DeMorgan-like symbol pair for an inverter.

## Summary
{:.no_toc}

DeMorgan's theorem,

<span class="oline">A &middot; B</span> = <span class="oline">A</span> + <span class="oline">B</span> $\quad$ (NAND form) 

<span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span> $\quad$ (NOR form)

In the next article we turn DeMorgan's theorem into a logic superpower.

