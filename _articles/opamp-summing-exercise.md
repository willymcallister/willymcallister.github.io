---
layout: article
title:  "Summing op-amp exercise"
author: Willy McAllister
comments: true
---

Open this schematic of a [summing amplifier](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B72%2C48%2C-16%2C48%5D%5D%2C%5B%22w%22%2C%5B48%2C152%2C-16%2C152%5D%5D%2C%5B%22w%22%2C%5B-16%2C96%2C-16%2C152%5D%5D%2C%5B%22w%22%2C%5B104%2C152%2C48%2C152%5D%5D%2C%5B%22g%22%2C%5B104%2C152%2C0%5D%2C%7B%22_json_%22%3A4%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B-16%2C48%2C0%5D%2C%7B%22name%22%3A%22vina%22%2C%22value%22%3A%22square(0%2C1%2C1000%2C50)%22%2C%22_json_%22%3A5%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A6%7D%2C%5B%22vout%22%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22A%22%3A%2230000%22%2C%22_json_%22%3A7%7D%2C%5B%223%22%2C%220%22%2C%22vout%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B184%2C104%2C176%2C104%5D%5D%2C%5B%22v%22%2C%5B48%2C104%2C0%5D%2C%7B%22name%22%3A%22vinb%22%2C%22value%22%3A%22step(0%2C1%2C5m%2C1n)%22%2C%22_json_%22%3A9%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B224%2C48%2C1%5D%2C%7B%22name%22%3A%22Rf%22%2C%22r%22%3A%2220k%22%2C%22_json_%22%3A10%7D%2C%5B%22vout%22%2C%223%22%5D%5D%2C%5B%22r%22%2C%5B120%2C48%2C1%5D%2C%7B%22name%22%3A%22Ra%22%2C%22r%22%3A%2210k%22%2C%22_json_%22%3A11%7D%2C%5B%223%22%2C%221%22%5D%5D%2C%5B%22r%22%2C%5B120%2C96%2C1%5D%2C%7B%22name%22%3A%22Rb%22%2C%22r%22%3A%2220k%22%2C%22_json_%22%3A12%7D%2C%5B%223%22%2C%222%22%5D%5D%2C%5B%22w%22%2C%5B120%2C96%2C136%2C96%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C176%2C88%5D%5D%2C%5B%22w%22%2C%5B208%2C152%2C208%2C104%5D%5D%2C%5B%22w%22%2C%5B208%2C152%2C176%2C152%5D%5D%2C%5B%22w%22%2C%5B176%2C104%2C176%2C152%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C248%2C96%5D%5D%2C%5B%22w%22%2C%5B72%2C96%2C48%2C96%5D%5D%2C%5B%22w%22%2C%5B48%2C96%2C48%2C104%5D%5D%2C%5B%22w%22%2C%5B176%2C152%2C104%2C152%5D%5D%2C%5B%22w%22%2C%5B176%2C48%2C136%2C48%5D%5D%2C%5B%22w%22%2C%5B120%2C48%2C136%2C48%5D%5D%2C%5B%22w%22%2C%5B136%2C96%2C136%2C48%5D%5D%2C%5B%22w%22%2C%5B176%2C88%2C176%2C48%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C232%2C48%5D%5D%2C%5B%22w%22%2C%5B232%2C48%2C224%2C48%5D%5D%2C%5B%22s%22%2C%5B-16%2C48%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A28%7D%2C%5B%221%22%5D%5D%2C%5B%22view%22%2C-86.8%2C-21.26%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D){:target="_blank"}.

**Develop an expression for $\bm{v_o}$ in terms of $\bm{v_{ina}}$, $\bm{v_{inb}}$ and the resistor values.**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
From the video: The gain expression for a summing amplifier is,

$v_o = - \left (\dfrac{\text{Rf}}{\text{Ra}} \,v_{ina} + \dfrac{\text{Rf}}{\text{Rb}} \,v_{inb} \right )$  

Fill in the resistor values,

$v_o = - \left (\dfrac{\text{20\,\text k}}{10\,\text k} \,v_{ina} + \dfrac{20\,\text k}{20\,\text k} \,v_{inb} \right )$  

$v_o = - \left (2 \,v_{ina} + v_{inb} \right )$  
{% endcapture %}{% include details.html %}

**Describe in words what this amplifier does.**  

The schematic has a voltage probe on one input.  
**Click TRAN to run a transient simulation and see what that input looks like.** 

Move the voltage probe to the other input.  
**Click TRAN again to see what the other input looks like.**

One input voltage is a square wave. The other is a single step voltage.

**Sketch what you think the output will look like.**  
You know the inputs and the amplifier function---what will the output look like?

**Add a voltage probe to the output node. Run another TRAN.**

Does the simulated output match your sketch?

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Simulation model of a [summing amplifier with probes](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22s%22%2C%5B48%2C96%2C2%5D%2C%7B%22color%22%3A%22orange%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A0%7D%2C%5B%221%22%5D%5D%2C%5B%22w%22%2C%5B72%2C48%2C-16%2C48%5D%5D%2C%5B%22s%22%2C%5B-16%2C48%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A2%7D%2C%5B%223%22%5D%5D%2C%5B%22s%22%2C%5B248%2C96%2C0%5D%2C%7B%22color%22%3A%22green%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A3%7D%2C%5B%22vout%22%5D%5D%2C%5B%22w%22%2C%5B48%2C152%2C-16%2C152%5D%5D%2C%5B%22w%22%2C%5B-16%2C96%2C-16%2C152%5D%5D%2C%5B%22w%22%2C%5B104%2C152%2C48%2C152%5D%5D%2C%5B%22g%22%2C%5B104%2C152%2C0%5D%2C%7B%22_json_%22%3A7%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B-16%2C48%2C0%5D%2C%7B%22name%22%3A%22vina%22%2C%22value%22%3A%22square(0%2C1%2C1000%2C50)%22%2C%22_json_%22%3A8%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A9%7D%2C%5B%22vout%22%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22A%22%3A%2230000%22%2C%22_json_%22%3A10%7D%2C%5B%222%22%2C%220%22%2C%22vout%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B184%2C104%2C176%2C104%5D%5D%2C%5B%22v%22%2C%5B48%2C104%2C0%5D%2C%7B%22name%22%3A%22vinb%22%2C%22value%22%3A%22step(0%2C1%2C5m%2C1n)%22%2C%22_json_%22%3A12%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B224%2C48%2C1%5D%2C%7B%22name%22%3A%22Rf%22%2C%22r%22%3A%2220k%22%2C%22_json_%22%3A13%7D%2C%5B%22vout%22%2C%222%22%5D%5D%2C%5B%22r%22%2C%5B120%2C48%2C1%5D%2C%7B%22name%22%3A%22Ra%22%2C%22r%22%3A%2210k%22%2C%22_json_%22%3A14%7D%2C%5B%222%22%2C%223%22%5D%5D%2C%5B%22r%22%2C%5B120%2C96%2C1%5D%2C%7B%22name%22%3A%22Rb%22%2C%22r%22%3A%2220k%22%2C%22_json_%22%3A15%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B120%2C96%2C136%2C96%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C176%2C88%5D%5D%2C%5B%22w%22%2C%5B208%2C152%2C208%2C104%5D%5D%2C%5B%22w%22%2C%5B208%2C152%2C176%2C152%5D%5D%2C%5B%22w%22%2C%5B176%2C104%2C176%2C152%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C248%2C96%5D%5D%2C%5B%22w%22%2C%5B72%2C96%2C48%2C96%5D%5D%2C%5B%22w%22%2C%5B48%2C96%2C48%2C104%5D%5D%2C%5B%22w%22%2C%5B176%2C152%2C104%2C152%5D%5D%2C%5B%22w%22%2C%5B176%2C48%2C136%2C48%5D%5D%2C%5B%22w%22%2C%5B120%2C48%2C136%2C48%5D%5D%2C%5B%22w%22%2C%5B136%2C96%2C136%2C48%5D%5D%2C%5B%22w%22%2C%5B176%2C88%2C176%2C48%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C232%2C48%5D%5D%2C%5B%22w%22%2C%5B232%2C48%2C224%2C48%5D%5D%2C%5B%22view%22%2C-81.3%2C-21.26%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D){:target="_blank"}.
{% endcapture %}{% include details.html %}

### Design challenge

Open a [blank schematic](https://spinningnumbers.org/circuit-sandbox/index.html){:target="_blank"}.

**Design a summing amplifier that performs this function: $\bm{v_o = -\left ( 4\,v_{ina} + 3\,v_{inb}\right )}$.**

Hint: Pick values for the resistors with the appropriate ratios.

Verify your new amplifier does what you expect.

Change the input waveforms to something else. For example, make one of them a sine wave. Does the output do what you expect? 

Make them both sine waves with a different frequency. 

Make up a desired output signal in your head. See if you can build it from two inputs.


