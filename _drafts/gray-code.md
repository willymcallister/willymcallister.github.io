---
layout: article
title:  "Gray code"
author: Willy McAllister
comments: true
---

The Gray code is a special counting pattern where only a single bit changes on each transition. 

You use a Gray code if you want an orderly progression of values without any sudden wholesale changes of bits like you get with a conventional binary counting pattern.

The Gray code is the solution to the Tower of Hanoi problem. 

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

The Karnaugh map (K-map) is a special kind of truth table. It helps you design logic functions using the fewest number of gates. It is a graphical alternative to Boolean algebra. It is usually used to minimize logic functions with four inputs. 


## Applications

Gray code is used when you want an orderly advancement of a count without the possibility of massive change of lots of bits or *spurious states*. The binary counting pattern has both of these issues.

A binary counter has a state transition where every bit changes. When the counter reaches its maximum count, 1111 1111, and rolls over to 0000 0000. Every bit changes from 1 to 0. When this many bits change the power dissipated is very different than if a single bit changes. There are other versions of the same thing, like when 0111 1111 counts up to 1000 0000. 

The other flaw that can happen with a binary counter is what happens when the timing of all those bit changes are not perfectly synchronized. Some bits might transition slower than others. When you go from 1111 1111 to 0000 0000 
there may be a brief time when the count takes on some entirely different value. Say the 4th bit is slow to transition.

1111 1111 goes to  
0000 1000 for a brief time, and finishes at  
0000 0000 

If you care about this sort of thing then Gray code might be a better choice than binary. An example is using Gray code in position encoders. 

The other application of Gray code is in logic minimization using the Karnaugh map. The rows and columns of the Karnaugh map are labeled using Gray code.

## Exercise

Convert binary to Gray code.

## Summary
{:.no_toc}

