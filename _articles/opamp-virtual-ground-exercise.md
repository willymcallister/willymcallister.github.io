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
Simulation model of a [unity-gain buffer amplifier](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["g",[208,104,0],{"_json_":0},["0"]],["g",[72,152,0],{"_json_":1},["0"]],["w",[72,104,72,88]],["v",[72,104,0],{"name":"","value":"sin(0,1,1000,0,0)","_json_":3},["1","0"]],["L",[272,96,0],{"label":"vout","_json_":4},["vout"]],["w",[168,144,248,144]],["w",[168,104,168,144]],["w",[184,104,168,104]],["o",[184,88,0],{"A":"30000","_json_":8},["1","vout","vout","0"]],["w",[248,144,248,96]],["w",[272,96,248,96]],["w",[232,96,248,96]],["s",[272,96,0],{"color":"green","offset":"0","_json_":12},["vout"]],["w",[72,88,184,88]],["view",15.659999999999997,42.292,2.44140625,"50","10","1G",null,"100","0.009","1000"]]){:target="_blank"}.
{% endcapture %}{% include details.html %}