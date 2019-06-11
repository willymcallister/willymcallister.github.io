---
layout: article
title:  "NAND and NOR"
author: Willy McAllister
comments: true
---

We introduce two new gates, the NAND and NOR. These have advantages in size and speed because of the way transistor circuits implement gates.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

The first additions we make to our collection of simple gates are NAND and NOR. 

### NAND gate

A NAND gate (short for NOT-AND) is the same as AND followed by NOT. You can see how we've squished the symbols together,

![NAND gate is AND plus NOT]({{ site.baseurl }}{% link i/logic13.svg %}){: .centered }{: height="100px" :} 

The equation for a NAND gate is C = <span class="oline">A&middot;B</span>

The truth table for NAND is the opposite of AND. You list the same inputs but invert the output on every row,
![NAND gate truth table]({{ site.baseurl }}{% link i/logic_tt_NAND.svg %}){: .centered }

There are a few ways to think about the NAND truth table.  
* Describe when the output is TRUE: The output is TRUE if *any* of the inputs are FALSE.  
* Describe when the output is FALSE: The output is FALSE if *both* inputs are TRUE.  

### NOR gate

A NOR gate (NOT-OR) is the same as OR followed by NOT. We merge the OR and NOT symbols together to get NOR, 

![NOR gate is OR plus NOT]({{ site.baseurl }}{% link i/logic14.svg %}){: .centered }{: height="100px" :} 

The equation for a NOR gate is C = <span class="oline">A+B</span>

The truth table for NOR is the opposite of OR. You list the same inputs but invert the output on every row,
![NOR gate truth table]({{ site.baseurl }}{% link i/logic_tt_NOR.svg %}){: .centered }

There are a few ways to think about the NOR truth table.  
* Describe when the output is TRUE: The output is TRUE if *both* of the inputs are FALSE.  
* Describe when the output is FALSE: The output is FALSE if *any* inputs are TRUE. 

### Why are there NAND and NOR gates?

Why do we bother creating NAND and NOR gates? Why not just string together AND, OR, and NOT whenever we need to? We haven't covered how to build logic gates yet, but there are some very good reasons to define NAND and NOR,

* Electronic circuits are naturally inverting. 
  * Whether you build gates with MOSFETs or BJT transistors, the simplest circuit to implement an AND or OR functions also inverts the output signal "for free." If you want a non-inverting gate you have to add an inverter to undo the "free" inversion. 
* Simple is smaller. 
  * You want to use the fewest transistors and the fewest gates possible. On a gate array, semi-custom ASIC, or custom integrated circuit, a NAND gate is always smaller than an AND gate. A NOR gate is always smaller than an OR gate. 
* Simple is faster. 
  * The naturally inverting NAND gate is always faster than a AND + NOT combination. 
* Simple save power. 
  * Simple gates have fewer nodes that have to change every logic transition. Fewer moving nodes means less charge is sloshing around, which means less charge has to come from the power supply. That means your battery-powered digital gizmo lasts a lot longer. Wouldn't it be nice if your mobile phone stayed charged for a month instead of a day?

Learning to design with inverting gates is a big win. We are going to cover that soon.

## Concept check

Write down the four truth tables for AND NAND OR NOR, side-by-side.  

Compare and contrast the output patterns to understand how they are different, 
* Describe which inputs make the output 1.
* Describe which inputs make the output 0.

Get used to describing gates in different ways. Often when you design logic you start with a verbal description of what you want and then translate it into gates. 

## Summary
{:.no_toc}

The equation for a NAND gate is C = <span class="oline">A&middot;B</span>

The equation for a NOR gate is C = <span class="oline">A+B</span>

Even if you never plan to design digital hardware, it is good to appreciate why inverting gates (NAND and NOR) are preferred for logic design. The simplest gates are naturally inverting. Simple gates are faster, smaller, and use less power. If you are a software person, I assure you none of your software colleagues know this. Show off you new knowledge!