---
layout: article
title:  "Inverting opamp exercise"
author: Willy McAllister
comments: true
---

Open this [simulation model of an inverting amplifier](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22o%22%2C%5B184%2C104%2C6%5D%2C%7B%22A%22%3A%2230000%22%2C%22_json_%22%3A0%7D%2C%5B%220%22%2C%222%22%2C%22vout%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B152%2C88%2C1%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%223.3k%22%2C%22_json_%22%3A1%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22r%22%2C%5B232%2C56%2C1%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%224.7k%22%2C%22_json_%22%3A2%7D%2C%5B%22vout%22%2C%222%22%5D%5D%2C%5B%22w%22%2C%5B184%2C104%2C168%2C104%5D%5D%2C%5B%22L%22%2C%5B256%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A4%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B72%2C104%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22sin(0%2C1%2C1000%2C0%2C0)%22%2C%22_json_%22%3A5%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B72%2C104%2C72%2C88%5D%5D%2C%5B%22g%22%2C%5B72%2C152%2C0%5D%2C%7B%22_json_%22%3A7%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B168%2C104%2C0%5D%2C%7B%22_json_%22%3A8%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B224%2C112%2C0%5D%2C%7B%22_json_%22%3A9%7D%2C%5B%220%22%5D%5D%2C%5B%22s%22%2C%5B72%2C88%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A10%7D%2C%5B%221%22%5D%5D%2C%5B%22s%22%2C%5B256%2C96%2C0%5D%2C%7B%22color%22%3A%22green%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A11%7D%2C%5B%22vout%22%5D%5D%2C%5B%22w%22%2C%5B104%2C88%2C72%2C88%5D%5D%2C%5B%22w%22%2C%5B184%2C56%2C176%2C56%5D%5D%2C%5B%22w%22%2C%5B176%2C56%2C176%2C88%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C176%2C88%5D%5D%2C%5B%22w%22%2C%5B232%2C56%2C240%2C56%5D%5D%2C%5B%22w%22%2C%5B240%2C56%2C240%2C96%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C240%2C96%5D%5D%2C%5B%22w%22%2C%5B256%2C96%2C240%2C96%5D%5D%2C%5B%22w%22%2C%5B152%2C88%2C176%2C88%5D%5D%2C%5B%22w%22%2C%5B224%2C112%2C224%2C80%5D%5D%2C%5B%22w%22%2C%5B224%2C80%2C208%2C80%5D%5D%2C%5B%22w%22%2C%5B208%2C80%2C208%2C88%5D%5D%2C%5B%22view%22%2C7.66%2C14.292%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.004%22%2C%221000%22%5D%5D){:target="_blank"}.

[![Inverting opamp example circuit]({{ site.baseurl }}{% link i/opamp_inverting_example.png %}){: .centered }{: height="300px" :}](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22o%22%2C%5B184%2C104%2C6%5D%2C%7B%22A%22%3A%2230000%22%2C%22_json_%22%3A0%7D%2C%5B%220%22%2C%222%22%2C%22vout%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B152%2C88%2C1%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%223.3k%22%2C%22_json_%22%3A1%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22r%22%2C%5B232%2C56%2C1%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%224.7k%22%2C%22_json_%22%3A2%7D%2C%5B%22vout%22%2C%222%22%5D%5D%2C%5B%22w%22%2C%5B184%2C104%2C168%2C104%5D%5D%2C%5B%22L%22%2C%5B256%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A4%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B72%2C104%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22sin(0%2C1%2C1000%2C0%2C0)%22%2C%22_json_%22%3A5%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B72%2C104%2C72%2C88%5D%5D%2C%5B%22g%22%2C%5B72%2C152%2C0%5D%2C%7B%22_json_%22%3A7%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B168%2C104%2C0%5D%2C%7B%22_json_%22%3A8%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B224%2C112%2C0%5D%2C%7B%22_json_%22%3A9%7D%2C%5B%220%22%5D%5D%2C%5B%22s%22%2C%5B72%2C88%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A10%7D%2C%5B%221%22%5D%5D%2C%5B%22s%22%2C%5B256%2C96%2C0%5D%2C%7B%22color%22%3A%22green%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A11%7D%2C%5B%22vout%22%5D%5D%2C%5B%22w%22%2C%5B104%2C88%2C72%2C88%5D%5D%2C%5B%22w%22%2C%5B184%2C56%2C176%2C56%5D%5D%2C%5B%22w%22%2C%5B176%2C56%2C176%2C88%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C176%2C88%5D%5D%2C%5B%22w%22%2C%5B232%2C56%2C240%2C56%5D%5D%2C%5B%22w%22%2C%5B240%2C56%2C240%2C96%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C240%2C96%5D%5D%2C%5B%22w%22%2C%5B256%2C96%2C240%2C96%5D%5D%2C%5B%22w%22%2C%5B152%2C88%2C176%2C88%5D%5D%2C%5B%22w%22%2C%5B224%2C112%2C224%2C80%5D%5D%2C%5B%22w%22%2C%5B224%2C80%2C208%2C80%5D%5D%2C%5B%22w%22%2C%5B208%2C80%2C208%2C88%5D%5D%2C%5B%22view%22%2C7.66%2C14.292%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.004%22%2C%221000%22%5D%5D){:target="_blank"} 

**What is the expected gain of this amplifier?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
From the inverting opamp [video]({{ site.baseurl }}{% link _videos/opamp-inverting.md %}), the gain expression for the amplifier is,

$v_o = -\dfrac{\text R2}{\text R1}\,v_{in}$  

Fill in the resistor values,

$v_o = -\dfrac{4.7\text k}{3.3\text k}\,v_{in}$  

$v_o = -\dfrac{4.7}{3.3}\,v_{in}$  

$v_o = -1.4\,v_{in}$

The gain is $-1.4$. The output is inverted with respect to the input and is $1.4$ times larger. 
{% endcapture %}{% include details.html %}

**Click on TRAN to run a transient simulation.** 

Does the simulation match your gain calculation?

**Design an amplifier with a gain of $-10$.**

Hint: Pick new values for either or both of $\text R1$ and $\text R2$.

**Change the values of the resistors in the simulation and run TRAN again.**

Verify your new amplifier has the gain you expect.

**Starting from scratch with a blank schematic, design and simulate an inverting amplifier with a gain of $-1$.**

[Circuit sandbox](https://spinningnumbers.org/circuit-sandbox/index.html){:target="_blank"}