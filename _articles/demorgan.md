---
layout: article
title:  "DeMorgan's theorem"
author: Willy McAllister
comments: true
---

DeMorgan's theorem unleashes the full power of NAND and NOR gates. It is by far the most important theorem in digital design. DeMorgan lets you clearly reveal your *design intent*. Logic becomes easier to understand and get right.

Using DeMorgan's theorem in your designs is an important aspect of *discipline* we talked about in the [introduction to digital electronics]({% link _articles/digital-electronics.md %}).

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

DeMorgan's theorem emerges from the truth tables for NAND and NOR. Let's look at NAND,

![NAND symbol]({% link i/logic_NAND.svg %})
![NAND truth table]({% link i/logic_tt_NAND.svg %})

Back when we introduced [NAND and NOR]({% link _articles/logic-nand-nor.md %}) and the [basic logic gates]({% link _articles/logic.md %}#operators) we defined the operations with a single statement that said how to make the output TRUE. But, there is another way to describe a truth table. You can describe when the output is FALSE. 

**Write two statements, one for when the output of NAND is FALSE, and another when the output is TRUE.**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
* The output is FALSE if both A AND B are TRUE. 
* The output is TRUE if either A OR B are FALSE.  

NAND is C = <span class="oline">A&middot;B</span>, and that is the same as saying C = <span class="oline">A</span> + <span class="oline">B</span>

Both are valid ways to define NAND. One of them is not "more true" than the other. 
{% endcapture %}{% include details.html %}

From this we get DeMorgan's theorem for NAND, <span class="oline">A&middot;B</span> = <span class="oline">A</span> + <span class="oline">B</span>

## NOR

Now we look at the NOR truth table,

![NOR symbol]({% link i/logic_NOR.svg %})
![NOR truth table]({% link i/logic_tt_NOR.svg %})

There are two ways to describe the NOR truth table---when the output is FALSE or when the output is TRUE. **How would you do it? Give it a try.**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
* The output is FALSE if either A OR B are TRUE. 
* The output is TRUE if both A AND B are FALSE.    

NOR is C = <span class="oline">A + B</span>, which is the same as saying C = <span class="oline">A</span> &middot; <span class="oline">B</span>

Both are valid ways to define NOR. 

{% endcapture %}{% include details.html %}

From this we get DeMorgan's theorem for NOR, <span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span>

## DeMorgan's theorem

The two forms of DeMorgan's theorem are,

<span class="oline">A &middot; B</span> = <span class="oline">A</span> + <span class="oline">B</span> $\quad$ (NAND form) 

<span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span> $\quad$ (NOR form)

## Concept check

{:start="1"} 
1. Fill out this truth table a column at a time to reinforce DeMorgan's theorem.  
![DeMorgan truth table]({% link i/logic_tt_demorgan.svg %})

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
![DeMorgan truth table solved]({% link i/logic_tt_demorgan_solved.svg %})
{% endcapture %}{% include details.html %} 

{:start="2"}
2. Put DeMorgan's theorem to work,  
**Write this statement two ways using the NAND form of DeMorgan's theorm,**  
*I love pie that is not made with Apples and Bananas.* 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Define some variables,

A = pie has apples  
B = pie has bananas  
L = I love this pie

My love of pie can be stated two ways,  

L = <span class="oline">A&middot;B</span>$\qquad$ I love this pie if it does NOT have apples AND bananas.

L = <span class="oline">A</span> + <span class="oline">B</span>$\quad$ I love this pie if it has NO apples OR it has NO bananas.
{% endcapture %}{% include details.html %} 

{:start="3"}
3. **Do I love a pie made of apples and raisins?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %} 
A = pie has apples = TRUE  
B = pie has bananas = FALSE 

L = <span class="oline">A&middot;B</span> = <span class="oline">TRUE&middot;FALSE</span> = TRUE    
L = <span class="oline">A</span> + <span class="oline">B</span> = <span class="oline">TRUE</span> + <span class="oline">FALSE</span> = TRUE  

Either way, I love this pie!
{% endcapture %}{% include details.html %} 

{:start="4"}
4. Someone gives you a pie made of apples and bananas. **Do you like this pie?**  
Run both equations again. You shouldn't like this pie.

{:start="5"}
5. Change one word in the original problem,  
*I love pie that is not made with apples <u>OR</u> bananas.*

Define some logic variables---then use the NOR form of DeMorgan's theorem.  
**Do you love a pie made from peaches and bananas?**

## How to remember DeMorgan's theorem

These two equations are hard to keep straight. Here's a trick to help you remember,

* If you have two individual bar expressions --- either <span class="oline">A</span> &middot; <span class="oline">B</span> or <span class="oline">A</span> + <span class="oline">B</span>
  * Merge the bars into an overall bar and flip to the opposite operator, 
  * <span class="oline">A</span> &middot; <span class="oline">B</span> turns into <span class="oline">A + B</span>
  * <span class="oline">A</span> + <span class="oline">B</span> turns into <span class="oline">A &middot; B</span>

or

* If you have two expressions under a common bar --- either <span class="oline">A &middot; B</span> or <span class="oline">A + B</span>
  * Break the bar into two individual bars and flip to the opposite operator,
  * <span class="oline">A &middot; B</span> turns into <span class="oline">A</span> + <span class="oline">B</span>
  * <span class="oline">A + B</span> turns into <span class="oline">A</span> &middot; <span class="oline">B</span>

## Missing bars

What if there isn't a bar on every term? What if you have something like <span class="oline">A</span> &middot; B and you want to use deMorgan's theorem? DeMorgan's theorem is written with bars on every term, so if one term has no bar we do a little trick: we add two bars above B, and then use the same rule. Two bars is a logic identity, <span class="ooline"><span class="oline">B</span></span> = B. Inverting B twice gives you back B.

![Inverting twice is a logic identity. B-bar-bar = B]({% link i/logic27.svg %})

This lets us write <span class="oline">A</span> &middot; B as <span class="oline">A</span> &middot; <span class="ooline"><span class="oline">B</span></span> and every term has at least one bar over it. 

Then apply the rule. Merge the bar on A with the top bar on B. This leaves behind a <span class="oline">B</span> (with one bar). Flip the AND operation to an OR like usual, and you end up with, 

<span class="oline">A</span> &middot; B = <span class="ooline">A + <span class="oline">B</span></span>

## DeMorgan equivalent gate symbols

DeMorgan's theorem suggests additional gate symbols. 

Look at the NAND form of DeMorgan's theorem: If <span class="oline">A&middot;B</span> = <span class="oline">A</span> + <span class="oline">B</span> then,

![DeMorgan NAND symbols]({% link i/logic22.svg %})

The symbol on the left is the usual NAND symbol. On the right we just invented an equivalent symbol for NAND. These two symbols are *both* NAND gates. DeMorgan's theorem says the equivalent symbols do *exactly* the same thing. The new symbol on the right emphasizes the OR part of the DeMorgan equation.

How about for the NOR form? If <span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span> then,

![DeMorgan NOR symbols]({% link i/logic23.svg %})

The symbol on the left is the usual NOR symbol. On the right we just invented an equivalent symbol for NOR. These two symbols are *both* NOR gates. DeMorgan's theorem says the equivalent symbols do *exactly* the same thing. The one on the right emphasizes the AND part of the DeMorgan equation. 

**Key Point:** Inside the NAND and NOR symbols there is some sort of circuit  creating the logic function (we study these later). When you use the alternate DeMorgan symbol, that internal circuit *does not change. It is exactly the same circuit for both symbols.* 

It may seem weird to call the first two symbols both "NAND" when one of them obviously includes an OR symbol. The same for the NOR symbol made with an AND shape. This is just something to get used to and you build up your DeMorgan muscle. The awkward alternative would be to make up new names for the DeMorgan symbols, like ORN and ANDN. Yuck. Let these symbols sink in to the point where you instantly name each DeMorgan symbol the right thing.

These new DeMorgan symbols are equivalent to the memory trick we talked about above. The single output bubble becomes two bubbles on the input side, and the gate symbol is flipped, AND becomes OR, or OR becomes AND. 

## Summary
{:.no_toc}

DeMorgan's theorem,

<span class="oline">A &middot; B</span> = <span class="oline">A</span> + <span class="oline">B</span> $\quad$ (NAND form) 

<span class="oline">A + B</span> = <span class="oline">A</span> &middot; <span class="oline">B</span> $\quad$ (NOR form)

In the next article we turn DeMorgan's theorem into a logic superpower and do some practice problems.

