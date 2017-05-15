---
layout: article
title:  "What's the difference between resistance and impedance?"
author: Willy McAllister
comments: true
---

The action of a resistor is defined by Ohm's Law: $v = i\,R$. If we solve for R, we see it is the ratio of voltage divided by current, $R = v/i$. We can consider this a definition of resistance.

The term “impedance” is the generalized notion of voltage divided by current. We can talk about the impedance of any component $(R$, $L$, or $C)$. 

For the specific case of a resistor, we use the term “resistance” instead of "impedance". For inductors and capacitors, we use the term impedance, but it has the same general meaning: the ratio of voltage to current. With the idea of impedance, we can write equations that look a lot like Ohm's Law for inductors and capacitors. (The traditional variable used for impedance is $Z$.) 

$v_R = i \, R$  
$v_L = i \, Z_L$  
$v_C = i \, Z_C$  

Some aspects of impedance:

$R$ for a resistor is constant. It depends only on how the resistor is made.

For inductors and capacitors it gets more interesting. Their $Z$ depends on how they are made (similar to the resistor) **AND** on the frequency of the signal being applied (an extra feature, not like the resistor). For an inductor, $Z_L$ goes up as frequency goes up. For a capacitor, $Z_C$ goes down as frequency goes up. So the action of a circuit with inductors and capacitors changes depending on the frequency. This is a great thing.

And one last twist: In a resistor, the peaks and valleys of current and voltage line up with each other no matter what the frequency is. However, for an inductor and capacitor, the peaks and valleys of current and voltage **don't** line up, they are offset from each other. This is known as "phase shift".

Summary: Impedance is the general notion of the ratio of voltage to current. Resistance is the name we give to the impedance of a resistor. 

My first answer submitted to [Quora](https://www.quora.com/Whats-the-difference-between-resistance-and-impedance).
