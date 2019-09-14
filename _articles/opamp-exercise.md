---
layout: article
title:  "Opamp exercise"
author: Willy McAllister
comments: true
---

Let's introduce the ideal opamp. 

![Opamp schematic symbol]({{ site.baseurl }}{% link i/circuit_sandbox_opamp_symbol.png %}){: height="140px" :}{: .centered :}

An opamp is a *differential* amplifier. It measures the difference in voltage between its two input ports. It amplifies that difference and puts the result on the output port.

$v_o = \text A \,(v^+ - v^-)$

See also the [Circuit sandbox opamp model]({{ site.baseurl }}{% link _articles/circuit-sandbox.md %}#opamp).  

Open up this incomplete [schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22s%22%2C%5B240%2C72%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A0%7D%2C%5B%228%22%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22g%22%2C%5B208%2C152%2C0%5D%2C%7B%22_json_%22%3A2%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B56%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22dc(1.1)%22%2C%22_json_%22%3A3%7D%2C%5B%227%22%2C%226%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A4%7D%2C%5B%22vout%22%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22A%22%3A%2210%22%2C%22_json_%22%3A5%7D%2C%5B%225%22%2C%224%22%2C%22vout%22%2C%223%22%5D%5D%2C%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A6%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C-8.34%2C14.292%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D) in another browser tab.

The gain of this opamp has been set really low so you can see how a differential amplifier works.

Double-click on the opamp. Give it a name like "U1".   
**What is the gain of this opamp, $\text A$?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The initial gain setting is $\text A = 10$.

Opamps have gains in the many $1000$'s, but we start low to get a feel for how it works.  
{% endcapture %}{% include details.html %}

Add another opamp from the parts bin. Open up its properties with a double-click.  
**What is the gain of an opamp fresh from the parts bin?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
A default opamp in Circuit Sandbox has a gain of $\text A = 30{,}000$.

You can leave it at this value most of the time. 

It is common for real-world opamps to have a gain of $\text A = 100{,}000$ or more.

We don't need this opamp any more. Please delete it.  
{% endcapture %}{% include details.html %}

This ideal opamp model has a ground reference pin, but no power supply pins. The ground pin is the circle on the downward slant of the triangle. The output of this ideal opamp isn't limited by a power supply. It's output goes to any value as it obeys the opamp equation from above. That makes this ideal model kind of fanciful. For a real world opamp the output range can't be greater than the power supplies.

Let's build a circuit,

* Connect the opamp ground pin to ground.

There are two voltage sources to drive the opamp inputs. 

* Connect v+ to the opamp's + input. 
* Connect v- to the opamp's - input.
* Connect the bottom side of both opamps to ground.

{% capture summary %}finished schematic{% endcapture %}  
{% capture details %}
Do the rest of this exercise with your own schematic. 

If you want you can compare yours to the one I drew --- [Willy' schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A0%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22A%22%3A%2210%22%2C%22_json_%22%3A1%7D%2C%5B%221%22%2C%222%22%2C%22vout%22%2C%220%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A2%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B56%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22dc(1.1)%22%2C%22_json_%22%3A3%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22g%22%2C%5B208%2C152%2C0%5D%2C%7B%22_json_%22%3A4%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22w%22%2C%5B56%2C104%2C56%2C88%5D%5D%2C%5B%22w%22%2C%5B56%2C88%2C184%2C88%5D%5D%2C%5B%22w%22%2C%5B144%2C104%2C184%2C104%5D%5D%2C%5B%22w%22%2C%5B56%2C152%2C144%2C152%5D%5D%2C%5B%22w%22%2C%5B208%2C152%2C144%2C152%5D%5D%2C%5B%22w%22%2C%5B208%2C152%2C208%2C104%5D%5D%2C%5B%22view%22%2C-9.840000000000003%2C28.792%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D).
{% endcapture %}{% include details.html %}

Now let's change the input voltage sources and see what happens to the output. 

Before running a simulation, **figure out in your head what $v_o$ will be.**

Hint: Fill in the opamp equation, $v_o = \text A \,(v^+ - v^-)$.

Do a DC operating point analysis (click on DC). **What is $v_o$?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$v_o = \text A \,(v^+ - v^-)$

$v_o = 10 \,(1.1 - 1)$

$v_o = 10 \,(0.1)$

$v_o = 1\,\text V$

The output voltage is $10$ times the difference between $v^+$ and $v^-$.
{% endcapture %}{% include details.html %}

Change $v^+$ to $1.3\,\text V$. **What is going to happen to $v_o$?**

Anticipate the answer in your head, then do a DC simulation.

Change $v^-$ to $0.8\,\text V$. **What is going to happen to $v_o$?**

Anticipate the answer in your head, then do a DC simulation.

Change $v^-$ so it is greater than $v^+$. **What is going to happen to $v_o$?**

Anticipate the answer in your head, then do a DC simulation. Try several values.

Change $\text A$ to $20$. **What is going to happen to $v_o$?**

Anticipate the answer in your head, then do a DC simulation.

### Advanced

#### High gain

Change $v^+$ or $v^-$ so the difference between them is $10\,\text{mV}$.  
Change $\text A$ to $100{,}000$. It is not hard to design an opamp with gain like this.
**What is going to happen to $v_o$?**

Anticipate the answer in your head, then do a DC simulation.

This is kind of a trick question. With the gain so high, even the smallest input differential voltage will cause a huge output. Our ideal opamp is happy to generate a big number in the computer. For real-world opamps the output would increase until it slams into the top or bottom power supply and stays there. This is called *output saturation*.

#### Ground reference pin

The voltage you attach to the opamp's ground pin does not have to be $0$. It might be a better idea to call this pin the *output reference pin*. This pin determines the output voltage when the input voltages are identical, when $(v^{+} - v^{-}) = 0$.

Open this [schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B184%2C88%2C184%2C104%5D%5D%2C%5B%22g%22%2C%5B184%2C104%2C0%5D%2C%7B%22_json_%22%3A1%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C256%2C96%5D%5D%2C%5B%22w%22%2C%5B208%2C120%2C208%2C104%5D%5D%2C%5B%22w%22%2C%5B208%2C176%2C208%2C168%5D%5D%2C%5B%22v%22%2C%5B208%2C120%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(0)%22%2C%22_json_%22%3A5%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22g%22%2C%5B208%2C176%2C0%5D%2C%7B%22_json_%22%3A6%7D%2C%5B%220%22%5D%5D%2C%5B%22L%22%2C%5B256%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A7%7D%2C%5B%22vout%22%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22A%22%3A%2210%22%2C%22_json_%22%3A8%7D%2C%5B%220%22%2C%220%22%2C%22vout%22%2C%221%22%5D%5D%2C%5B%22view%22%2C93.928%2C57.1336%2C3.0517578125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D). The opamp's inputs are connected together, and connected to ground. The ground pin is connected to a voltage source you can adjust.

**Run a DC operating point simulation and verify $v_o$ is $0$.**

Change the value of the voltage source to move the opamp's ground pin to another voltage.

**Set the voltage source to $1\,\text V$. Run another DC. What happens to $v_o$?**

Try other voltages, including negative values.

What is this for? Sometimes you want to operate an opamp circuit with strictly positive voltage. This is called *single-rail* or *single-supply* operation, as opposed to a more traditional *dual-rail* design with symmetric $+$ and $-$ supplies. With single-rail, you want the output voltage to be centered between a positive supply voltage and ground when $v^+ = v^-$. For example, if $\text{VDD} = +5\,\text V$ the center is $v_o = 2.5\,\text V$. To set this up, generate a steady $2.5\,\text V$ and apply it to the ground reference pin.

[Single-rail example](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22A%22%3A%2210%22%2C%22_json_%22%3A0%7D%2C%5B%220%22%2C%220%22%2C%22vout%22%2C%222%22%5D%5D%2C%5B%22L%22%2C%5B256%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A1%7D%2C%5B%22vout%22%5D%5D%2C%5B%22g%22%2C%5B136%2C184%2C0%5D%2C%7B%22_json_%22%3A2%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C256%2C96%5D%5D%2C%5B%22g%22%2C%5B184%2C104%2C0%5D%2C%7B%22_json_%22%3A4%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C184%2C104%5D%5D%2C%5B%22r%22%2C%5B136%2C72%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%2220k%22%2C%22_json_%22%3A6%7D%2C%5B%221%22%2C%222%22%5D%5D%2C%5B%22r%22%2C%5B136%2C136%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%2220k%22%2C%22_json_%22%3A7%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B80%2C96%2C0%5D%2C%7B%22name%22%3A%22VDD%22%2C%22value%22%3A%22dc(5)%22%2C%22_json_%22%3A8%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22g%22%2C%5B80%2C144%2C0%5D%2C%7B%22_json_%22%3A9%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B80%2C96%2C80%2C72%5D%5D%2C%5B%22w%22%2C%5B80%2C72%2C136%2C72%5D%5D%2C%5B%22w%22%2C%5B208%2C104%2C208%2C128%5D%5D%2C%5B%22w%22%2C%5B208%2C128%2C136%2C128%5D%5D%2C%5B%22w%22%2C%5B136%2C120%2C136%2C128%5D%5D%2C%5B%22w%22%2C%5B136%2C136%2C136%2C128%5D%5D%2C%5B%22view%22%2C6.159999999999997%2C39.792%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D). Run a DC and observe the output when the inputs are the same.

## Summary

These exercises should give you a good feel for how a differential amplifier works. The amplifier we've been looking at has modest gain. In the upcoming opamp videos the gain will be really high. You will learn how to take advantage of high gain by designing useful circuits featuring an opamp.

