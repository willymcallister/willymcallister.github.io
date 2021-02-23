---
layout: article
title:  "Non-inverting op-amp exercise"
author: Willy McAllister
comments: true
---

Open this [simulation model of a non-inverting amplifier](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22A%22%3A%2230000%22%2C%22_json_%22%3A0%7D%2C%5B%221%22%2C%222%22%2C%22vout%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B248%2C96%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%225k%22%2C%22_json_%22%3A1%7D%2C%5B%22vout%22%2C%222%22%5D%5D%2C%5B%22r%22%2C%5B248%2C144%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%2210k%22%2C%22_json_%22%3A2%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B184%2C104%2C168%2C104%5D%5D%2C%5B%22w%22%2C%5B168%2C104%2C168%2C144%5D%5D%2C%5B%22w%22%2C%5B168%2C144%2C248%2C144%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C248%2C96%5D%5D%2C%5B%22w%22%2C%5B272%2C96%2C248%2C96%5D%5D%2C%5B%22L%22%2C%5B272%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A8%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B72%2C104%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22sin(0%2C1%2C1000%2C0%2C0)%22%2C%22_json_%22%3A9%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B72%2C104%2C72%2C88%5D%5D%2C%5B%22g%22%2C%5B72%2C152%2C0%5D%2C%7B%22_json_%22%3A11%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B248%2C192%2C0%5D%2C%7B%22_json_%22%3A12%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B208%2C104%2C0%5D%2C%7B%22_json_%22%3A13%7D%2C%5B%220%22%5D%5D%2C%5B%22s%22%2C%5B128%2C88%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A14%7D%2C%5B%221%22%5D%5D%2C%5B%22s%22%2C%5B272%2C96%2C0%5D%2C%7B%22color%22%3A%22green%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A15%7D%2C%5B%22vout%22%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C128%2C88%5D%5D%2C%5B%22w%22%2C%5B72%2C88%2C128%2C88%5D%5D%2C%5B%22view%22%2C15.66%2C42.292%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.004%22%2C%221000%22%5D%5D){:target="_blank"}.

[![Inverting opamp example circuit]({{ site.baseurl }}{% link i/opamp_non_inverting_example.png %}){: .centered }{: height="300px" :}](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22A%22%3A%2230000%22%2C%22_json_%22%3A0%7D%2C%5B%221%22%2C%222%22%2C%22vout%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B248%2C96%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%225k%22%2C%22_json_%22%3A1%7D%2C%5B%22vout%22%2C%222%22%5D%5D%2C%5B%22r%22%2C%5B248%2C144%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%2210k%22%2C%22_json_%22%3A2%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B184%2C104%2C168%2C104%5D%5D%2C%5B%22w%22%2C%5B168%2C104%2C168%2C144%5D%5D%2C%5B%22w%22%2C%5B168%2C144%2C248%2C144%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C248%2C96%5D%5D%2C%5B%22w%22%2C%5B272%2C96%2C248%2C96%5D%5D%2C%5B%22L%22%2C%5B272%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A8%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B72%2C104%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22sin(0%2C1%2C1000%2C0%2C0)%22%2C%22_json_%22%3A9%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B72%2C104%2C72%2C88%5D%5D%2C%5B%22g%22%2C%5B72%2C152%2C0%5D%2C%7B%22_json_%22%3A11%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B248%2C192%2C0%5D%2C%7B%22_json_%22%3A12%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B208%2C104%2C0%5D%2C%7B%22_json_%22%3A13%7D%2C%5B%220%22%5D%5D%2C%5B%22s%22%2C%5B128%2C88%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A14%7D%2C%5B%221%22%5D%5D%2C%5B%22s%22%2C%5B272%2C96%2C0%5D%2C%7B%22color%22%3A%22green%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A15%7D%2C%5B%22vout%22%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C128%2C88%5D%5D%2C%5B%22w%22%2C%5B72%2C88%2C128%2C88%5D%5D%2C%5B%22view%22%2C15.66%2C42.292%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.004%22%2C%221000%22%5D%5D){:target="_blank"}

**What is the gain of this amplifier?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
From the video, the gain expression for the non-inverting amplifier is,

$v_o = v_{in} \,\dfrac{\text R1 + \text R2}{\text R2}$  

Fill in the resistor values,

$v_o = v_{in} \,\dfrac{5\,\text k + 10\,\text k}{10\,\text k}$  

$v_o = v_{in} \,\dfrac{15}{10}$  

$v_o = 1.5\,v_{in}$

The gain is $1.5$.
{% endcapture %}{% include details.html %}

**Click on TRAN to run a transient simulation.** 

Does the simulation match your gain calculation?

**Design an amplifier with a gain of $2$.**

Hint: Pick new values for either or both of $\text R1$ and $\text R2$.

**Change the values of the resistors in the simulation and run TRAN again.**

Verify your new amplifier has the gain you expect.

**Starting from scratch with a blank schematic, design and simulate a non-inverting amplifier with a gain of $30$.**

[Circuit sandbox](https://spinningnumbers.org/circuit-sandbox/index.html){:target="_blank"}

