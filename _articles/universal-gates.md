---
layout: article
title:  "Universal gates"
author: Willy McAllister
comments: true
---

NAND and NOR gates are *universal* or *functionally complete*. Universal means you can build every possible logic function with all NAND gates or all NOR gates.

This property is an interesting bit of digital wisdom. It's also a great introductory logic puzzle.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

The basic logic gates are AND, OR, NOT, (and XOR). With these gates you can build any logic function you can dream up---this was one of Boole's contributions to the theory of logic. We extended our logic family by combining NOT with AND and OR to come up with NAND and NOR gates. These gates are important because they are particularly easy to build with transistors.

## Universal gates

Here's a question---do you need all the basic gates to build all possible logic circuits?

The answer is no. In fact, you can build all possible logic functions with either just NAND gates or just NOR gates. For this reason NAND and NOR are called *universal* or *functionally complete* gates.

## Proof

We prove NAND and NOR are universal if we show how to construct the other the basic gates. We do the proof with NAND. The NOR derivation is similar.

To prove NAND is universal we build NOT, AND, OR, NOR, and XOR with just NAND gates. This proof is a fun logic puzzle. See if you can work it out yourself before peeking at the answers.

**Build a NOT function with just NAND gates.**

Hint: To build NOT you want the logic function to be OUTPUT = NOT(INPUT). If the input is signal A you want the output to be <span class="oline">A</span>. 

Can you connect A to the input ports of the NAND to make this happen? (If it would help, you are allowed to connect 0 or 1 to an otherwise unused input.)

Here is the truth table for NAND, 

![NAND truth table]({{ site.baseurl }}{% link i/logic_tt_NAND.svg %})

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
If you connect A to both inputs of the NAND you end up with an inversion operation,

![NAND truth table with rows 00 and 11 selected]({{ site.baseurl }}{% link i/logic_tt_NAND_1.svg %}){: .centered }

In equation notation we are use the simple logic identity: A&middot;A = A

When we connect A to both inputs of a NAND it becomes,

OUTPUT = <span class="oline">A&middot;A</span> = <span class="oline">A</span>

![Inverter made with a NAND gate]({{ site.baseurl }}{% link i/logic16.svg %}){: .centered }
{% endcapture %}{% include details.html %} 

Now that you have an inverter made with a NAND gate things pick up speed. 

**Build an AND function with NAND gates.**

Hint: Put NAND in series with and inverter (made from a NAND). 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
![AND made with NAND gates]({{ site.baseurl }}{% link i/logic19.svg %}){: .centered }
{% endcapture %}{% include details.html %} 

The next gate is a little harder to figure out,

**Build an OR function with just NAND gates.**

This one is harder. Here is the truth table for OR,

![OR truth table]({{ site.baseurl }}{% link i/logic_tt_OR.svg %})

Hint: Describe the OR truth table using the word AND.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
From the truth table for OR we notice the output is 0 if both input A AND input B are 0. Use a NAND gate and inverters (also NAND gates) to build this,

![OR made with NAND gates]({{ site.baseurl }}{% link i/logic18.svg %}){: .centered }
{% endcapture %}{% include details.html %} 

**Build a NOR function with NAND gates.**

This one is should be simple, since you know how to make an OR and a NOT.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  

![NOR made with NAND gates]({{ site.baseurl }}{% link i/logic17.svg %}){: .centered }
{% endcapture %}{% include details.html %} 

And finally,

**Build an XOR function with NAND gates.**

This one is challenging. If you get it, consider yourself a good logic designer. If you get stuck, don't worry, you will be soon.

Here is the truth table for XOR,

![XOR truth table]({{ site.baseurl }}{% link i/logic_tt_XOR.svg %})

Hint: Describe the XOR truth table with the words AND and OR.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The output of XOR is 1 if (A = 1 AND B = 0) OR (A = 0 AND B = 1). 

We need A and B and inverted versions of A and B, so that's two inverters to start with. Then we need two AND's, and finally an OR function, all built with NAND gates. 

C = A $\oplus$ B

![XOR made with NAND gates]({{ site.baseurl }}{% link i/logic20.svg %}){: .centered }

It took 5 NAND gates to create an XOR function.
{% endcapture %}{% include details.html %}

To convince yourself this is a correct implementation **fill out the rest of this truth table**,

![Truth table for universal XOR]({{ site.baseurl }}{% link i/logic_tt_XOR_universal.svg %}){: .centered }

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
![Truth table for universal XOR solved]({{ site.baseurl }}{% link i/logic_tt_XOR_universal_solved.svg %}){: .centered :}  
{% endcapture %}{% include details.html %} 

It is possible to build an XOR with only 4 NAND gates. **Give it a shot.** (This one is tough.)

Hint: ...I can't think of a hint.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
F = A $\oplus$ B

![XOR made with only 4 NAND gates]({{ site.baseurl }}{% link i/logic21.svg %}){: .centered }

I wouldn't expect a beginner to come up with this arrangement, but it is pretty clever.
{% endcapture %}{% include details.html %}

To convince yourself this is an XOR **fill in this truth table**,

![Truth table for 4-NAND XOR]({{ site.baseurl }}{% link i/logic_tt_XOR_4nand.svg %}){: .centered }

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
![Truth table for 4-NAND XOR solved]({{ site.baseurl }}{% link i/logic_tt_XOR_4nand_solved.svg %}){: .centered :}  
{% endcapture %}{% include details.html %} 

You did it! You created every basic gate with just NAND. That means NAND is universal.

## Concept check

* Why isn't NOT a universal gate?

* Why isn't AND a universal gate?

* Is XOR a universal gate? Try to build the other gates with just XOR.

* Do the whole proof again---this time with NOR gates.

Hint: If you go for a 4-NOR version of exclusive OR, it comes out inverted, so it is called an exclusive NOR, or XNOR. 

## Use your wisdom

Now you know NAND and NOR are universal gates. It might be wise to scatter some extra NANDs or NORs around your logic design. It never hurts to have extra universal gates laying around in case you have to fix something. 

If you build logic with basic gates they come in packages of 4 gates---see the SN7400 NAND gate or the SN7402 NOR gate. Don't be stingy and use up every gate, design in some spares available for later.

## Summary
{:.no_toc}

NAND and NOR are *universal* or *complete* gates. They can build any logic function.

If you didn't do your own truth tables and just looked at the answers while reading this article, I HIGHLY RECOMMEND you reform your ways and do your own tables. You learn logic design when your fingers and brain work together to fill out the tables. There is some sort of magical connection between them that makes learning happen.