---
layout: article
title:  "Ideal opamp exercise"
author: Willy McAllister
comments: true
---

Introducing the ideal opamp, 

![Opamp schematic symbol]({% link i/circuit_sandbox_opamp_symbol.png %}){: height="160px" :}{: .centered :}

An opamp is a *differential* amplifier. It measures the difference in voltage between its two input ports, amplifies that difference, and puts the result on the output port.

$(\sf{vo} - \sf{vg}) = \text A \,(\sf v$+ $\, - \,\,\sf v$-$)$

The output voltage $\sf{vo}$ is generated relative to the $\sf vg$ pin. $\sf vg$ is usually connect to ground.

See the [Circuit Sandbox opamp model]({% link _articles/circuit-sandbox.md %}#opamp-model) for more details.  

## Prepare a simple opamp circuit

Open this [incomplete schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22s%22%2C%5B240%2C72%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A0%7D%2C%5B%228%22%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22v%22%2C%5B56%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22dc(1.1)%22%2C%22_json_%22%3A2%7D%2C%5B%227%22%2C%226%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vo%22%2C%22_json_%22%3A3%7D%2C%5B%22vo%22%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22A%22%3A%2210%22%2C%22_json_%22%3A4%7D%2C%5B%225%22%2C%224%22%2C%22vo%22%2C%223%22%5D%5D%2C%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A5%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C-8.34%2C14.292%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D ){:target="_blank"}.

The gain of this opamp has been set low so you can see how a differential amplifier works.

Double-click on the opamp. Give it a name like "Op1".   
**What is the gain of this opamp?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The initial gain setting is $\text A = 10$.

Opamps have gains in the many $1000$'s, but we start low to get a feel for how it works.  
{% endcapture %}{% include details.html %}

Add another ideal opamp from the parts bin. Open up its properties with a double-click.  
**What is the gain of an opamp fresh from the parts bin?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
A default ideal opamp in Circuit Sandbox has a gain of $\text A = 30{,}000$.

You can leave it at this value most of the time. 

It is common for real-world opamps to have a gain of $\text A = 100{,}000$ or more.

We don't need this opamp any more. Please delete it.  
{% endcapture %}{% include details.html %}

Let's build a circuit,

* Connect the opamp ground reference pin to ground.

There are two voltage sources to drive the opamp inputs.  
**What are the DC values of these two supplies?**

* Connect $\sf v$+ to the opamp's + input. 
* Connect $\sf v$- to the opamp's - input.
* Connect the bottom side of both opamps to ground.

{% capture summary %}finished schematic{% endcapture %}  
{% capture details %}
Do the rest of this exercise with your own schematic. 

If you want you can compare yours to the one I drew --- [Willy' schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B208%2C152%2C208%2C104%5D%5D%2C%5B%22w%22%2C%5B208%2C152%2C144%2C152%5D%5D%2C%5B%22w%22%2C%5B56%2C152%2C144%2C152%5D%5D%2C%5B%22w%22%2C%5B144%2C104%2C184%2C104%5D%5D%2C%5B%22w%22%2C%5B56%2C88%2C184%2C88%5D%5D%2C%5B%22w%22%2C%5B56%2C104%2C56%2C88%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22g%22%2C%5B208%2C152%2C0%5D%2C%7B%22_json_%22%3A7%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B56%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22dc(1.1)%22%2C%22_json_%22%3A8%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vo%22%2C%22_json_%22%3A9%7D%2C%5B%22vo%22%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22A%22%3A%2210%22%2C%22_json_%22%3A10%7D%2C%5B%222%22%2C%221%22%2C%22vo%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A11%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22view%22%2C-9.840000000000003%2C28.792%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D ){:target="_blank"}.
{% endcapture %}{% include details.html %}

Before you run a simulation, **figure out in your head what $\sf vo$ will be.**

Hint: Use the opamp equation, $(\sf{vo} - \sf{vg}) = \text A \,(\sf v$+ $\, - \,\,\sf v$-$)$

Perform a **DC** operating point analysis.  
**What is $\sf vo$?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$(\sf{vo} - \sf{vg}) = \text A \,(\sf v$+ $\, - \,\,\sf v$-$)$

$(\sf vo - 0) = 10 \,(1.1 - 1.0)$

$\sf vo = 10 \,(0.1)$

$\sf vo = 1\,\text V$

The output voltage is $10$ times the difference between $\sf v$+ and $\sf v$-.
{% endcapture %}{% include details.html %}

Change $\sf v$+ to $1.3\,\text V$. **What is going to happen to $\sf vo$?**

Anticipate the answer in your head, then do a **DC** simulation.

Change $\sf v$- to $0.8\,\text V$. **What is going to happen to $\sf vo$?**

Anticipate the answer in your head, then do a **DC** simulation.

Change $\sf v$- so it is greater than $\sf v$+. **What is going to happen to $\sf vo$?**

Anticipate the answer in your head, then do a **DC** simulation. Try several values.

Change $\text A$ to $20$. **What is going to happen to $\sf vo$?**

Anticipate the answer in your head, then do a **DC** simulation.

You demonstrated the basic operation of a differential amplifier.

This *ideal* opamp model has a ground reference pin (which most opamps don't have). It has no power supply pins, so the output isn't limited. The output can go to any value that obeys the opamp equation from above. That makes this ideal model kind of fanciful. For real opamps the output voltage doesn't exceed the power supplies. We will practice with realistic opamps in the next exercise.

## Advanced

### High gain

Change $\sf v$+ or $\sf v$- so the difference between them is $10\,\text{mV}$.  
Change $\text A$ to $100{,}000$. It is not hard to design an opamp with gain like this.  

**What will happen to $\sf vo$?**

Anticipate the answer in your head, then do a **DC** simulation.

This is kind of a trick question. With the gain so high, even the smallest input differential voltage will cause a huge output. For real-world opamps the output increases until it slams into either the top or bottom power supply and stays there. This is called *output saturation*.

### Ground reference pin

The voltage you attach to the opamp's ground pin, $\sf vg$, does not have to be $0$. It might be better called the *output reference pin*. This pin determines the output voltage when the input voltages are identical, when $\sf v$+ $= \sf v$-.

Open this [schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B184%2C88%2C184%2C104%5D%5D%2C%5B%22g%22%2C%5B184%2C104%2C0%5D%2C%7B%22_json_%22%3A1%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C256%2C96%5D%5D%2C%5B%22w%22%2C%5B208%2C120%2C208%2C104%5D%5D%2C%5B%22w%22%2C%5B208%2C176%2C208%2C168%5D%5D%2C%5B%22v%22%2C%5B208%2C120%2C0%5D%2C%7B%22name%22%3A%22vg%22%2C%22value%22%3A%22dc(0)%22%2C%22_json_%22%3A5%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22g%22%2C%5B208%2C176%2C0%5D%2C%7B%22_json_%22%3A6%7D%2C%5B%220%22%5D%5D%2C%5B%22L%22%2C%5B256%2C96%2C0%5D%2C%7B%22label%22%3A%22vo%22%2C%22_json_%22%3A7%7D%2C%5B%22vo%22%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22A%22%3A%2210%22%2C%22_json_%22%3A8%7D%2C%5B%220%22%2C%220%22%2C%22vo%22%2C%221%22%5D%5D%2C%5B%22view%22%2C93.928%2C59.6336%2C3.0517578125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D ){:target="_blank"} in a new browser tab. The opamp's inputs are connected together and both are connected to ground. The $\sf vg$ pin is connected to a voltage source you can adjust.

**Run a DC operating point simulation to verify $\sf vo$ is $0$.**

Change the value of the voltage source to move the opamp's output reference pin to a different voltage.

**Set the $\sf vg$ voltage source to $1\,\text V$. Run another DC. What happens to $\sf vo$?**

Try other voltages, including negative values.

What is this for? Traditionally, opamps are operated *dual-rail* with symmetric $+$ and $-$ power supplies. In symmetric dual-rail systems ground potential is centered between the rails. Sometimes you prefer to operate an opamp between a positive power supply and ground. This is called *single-rail* or *single-supply* operation. 

With single-rail you center the output between the positive supply and ground. For example, if the power supply voltage is $\sf{Vs}$+ $= 5\,\text V$ you want the output to be $\sf{vo}$ $= 2.5\,\text V$ when the input difference is zero. To set this up, generate a steady $2.5\,\text V$ and apply it to the ground reference pin as shown in this [single-rail example](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B208%2C104%2C208%2C128%5D%5D%2C%5B%22w%22%2C%5B384%2C104%2C384%2C80%5D%5D%2C%5B%22g%22%2C%5B384%2C152%2C0%5D%2C%7B%22_json_%22%3A2%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B384%2C104%2C4%5D%2C%7B%22name%22%3A%22Vs%2B%22%2C%22value%22%3A%22dc(5)%22%2C%22_json_%22%3A3%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B312%2C128%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%2220k%22%2C%22_json_%22%3A4%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B312%2C80%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%2220k%22%2C%22_json_%22%3A5%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C184%2C104%5D%5D%2C%5B%22g%22%2C%5B184%2C104%2C0%5D%2C%7B%22_json_%22%3A7%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B312%2C176%2C0%5D%2C%7B%22_json_%22%3A8%7D%2C%5B%220%22%5D%5D%2C%5B%22L%22%2C%5B232%2C96%2C0%5D%2C%7B%22label%22%3A%22vo%22%2C%22_json_%22%3A9%7D%2C%5B%22vo%22%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22A%22%3A%2210%22%2C%22_json_%22%3A10%7D%2C%5B%220%22%2C%220%22%2C%22vo%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B312%2C80%2C384%2C80%5D%5D%2C%5B%22w%22%2C%5B208%2C128%2C312%2C128%5D%5D%2C%5B%22view%22%2C155.928%2C58.6336%2C3.0517578125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D ){:target="_blank"}. Run a **DC** and observe the output when the inputs are the same. $2.5\,\text V$ is now the reference for measuring your signal---think if it as "signal ground." 

## Summary

Now you have a feel for how a differential amplifier works. The amplifier had modest gain. In the upcoming opamp videos the gain will be really high. You will learn how to take advantage of high gain to design useful circuits featuring an opamp.

The ideal opamp model is a good place to start when learning opamp circuit configurations. It's ideal behavior saves you from having to worry about the nitty-gritty details of real opamps. That comes after you have the basic circuit configurations down pat.
