---
layout: article
title:  "Unity-gain buffer exercise"
author: Willy McAllister
comments: true
---

**What is the expected gain of a unity-gain buffer amplifier?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
From the video: The gain expression for the non-inverting amplifier is,

$v_o = v_{in}$  

The gain is $1$.
{% endcapture %}{% include details.html %}

Open a [blank schematic](https://spinningnumbers.org/circuit-sandbox/index.html){:target="_blank"}.

**Design and simulate a unity-gain buffer amplifier with a gain of $1$.**

* Drive the unity-gain buffer with a sine wave voltage source.

* Add a voltage probe on the output port.

* Click on **TRAN** to run a transient simulation.

Does the simulation match your gain calculation?

**Add a voltage probe to $v_{in}$ and simulate again.**

Notice how the output and input voltages overlap.

**Change the value of the input voltage and run another TRAN.**

Verify the buffer amplifier does what you expect.
 
**Click the <i class="fas fa-download fa-lg" ></i> download icon.**  
**Open the resulting data.csv file in Excel or Matlab or any text editor.**

Notice that $v_o$ and $v_{in}$ are the same. When we model an ideal opamp the virtual ground is perfect, $v_o = v_{in}$. In the real world there will be a very slight difference due to the *offset voltage* of a real opamp. You find the offset voltage listed on the opamp's data sheet.

{% capture summary %}unity-gain buffer amplifier{% endcapture %}  
{% capture details %}    
Simulation model of a [unity-gain buffer amplifier](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B72%2C88%2C184%2C88%5D%5D%2C%5B%22s%22%2C%5B272%2C96%2C0%5D%2C%7B%22color%22%3A%22green%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A1%7D%2C%5B%22vout%22%5D%5D%2C%5B%22w%22%2C%5B232%2C96%2C248%2C96%5D%5D%2C%5B%22w%22%2C%5B272%2C96%2C248%2C96%5D%5D%2C%5B%22w%22%2C%5B248%2C144%2C248%2C96%5D%5D%2C%5B%22o%22%2C%5B184%2C88%2C0%5D%2C%7B%22A%22%3A%2230000%22%2C%22_json_%22%3A5%7D%2C%5B%221%22%2C%22vout%22%2C%22vout%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B184%2C104%2C168%2C104%5D%5D%2C%5B%22w%22%2C%5B168%2C104%2C168%2C144%5D%5D%2C%5B%22w%22%2C%5B168%2C144%2C248%2C144%5D%5D%2C%5B%22L%22%2C%5B272%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A9%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B72%2C104%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22sin(0%2C1%2C1000%2C0%2C0)%22%2C%22_json_%22%3A10%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B72%2C104%2C72%2C88%5D%5D%2C%5B%22g%22%2C%5B72%2C152%2C0%5D%2C%7B%22_json_%22%3A12%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B208%2C104%2C0%5D%2C%7B%22_json_%22%3A13%7D%2C%5B%220%22%5D%5D%2C%5B%22view%22%2C18.16%2C24.792%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.009%22%2C%221000%22%5D%5D){:target="_blank"}.
{% endcapture %}{% include details.html %}