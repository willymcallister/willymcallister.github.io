---
layout: article
title:  "Summing op-amp exercise"
author: Willy McAllister
comments: true
---

Open this schematic of a [summing amplifier](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["w",[232,48,224,48]],["w",[232,96,232,48]],["w",[176,88,176,48]],["w",[136,96,136,48]],["w",[120,48,136,48]],["w",[176,48,136,48]],["w",[176,152,104,152]],["w",[48,96,48,104]],["w",[72,96,48,96]],["w",[232,96,248,96]],["w",[176,104,176,152]],["w",[208,152,176,152]],["w",[208,152,208,104]],["w",[184,88,176,88]],["w",[120,96,136,96]],["r",[120,96,1],{"name":"Rb","r":"15k","_json_":15},["2","3"]],["r",[120,48,1],{"name":"Ra","r":"10k","_json_":16},["2","1"]],["r",[224,48,1],{"name":"Rf","r":"20k","_json_":17},["vout","2"]],["v",[48,104,0],{"name":"vinb","value":"step(0,1,5m,1n)","_json_":18},["3","0"]],["w",[184,104,176,104]],["o",[184,88,0],{"A":"30000","_json_":20},["2","0","vout","0"]],["L",[248,96,0],{"label":"vout","_json_":21},["vout"]],["v",[-16,48,0],{"name":"vina","value":"square(0,1,1000,50)","_json_":22},["1","0"]],["g",[104,152,0],{"_json_":23},["0"]],["w",[104,152,48,152]],["w",[-16,96,-16,152]],["w",[48,152,-16,152]],["w",[72,48,-16,48]],["view",-77.30000000000001,-21.260000000000005,1.953125,"50","10","1G",null,"100","0.0099","1000"]]) in another browser tab.

**What does this amplifier do? Develop an expression for $\bm{v_o}$ in terms of $\bm{v_{ina}}$, $\bm{v_{inb}}$ and the resistor values.**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
From the video, the gain expression for a summing amplifier is,

$v_o = - \left (\dfrac{\text{Rf}}{\text{Ra}} v_{ina} + \dfrac{\text{Rf}}{\text{Rb}} v_{inb} \right )$  

Fill in the resistor values,

$v_o = - \left (\dfrac{\text{20\,\text K}}{10\,\text k} v_{ina} + \dfrac{10\,\text k}{15\,\text k} v_{inb} \right )$  

$v_o = - \left (2 v_{ina} + 0.75 v_{inb} \right )$  
{% endcapture %}{% include details.html %}

**Observe the inputs: Add voltage probes to the two input voltages. Click on TRAN to run a transient simulation.** 

One input voltage is a square wave. The other is a single step voltage.

**Sketch what you think the output will look like.**

Knowing the shape of the inputs and the amplifier's function, make a guess.

**Add a voltage probe to the output node. Run another TRAN.**

Does the simulated output match your sketch?

**Starting from a blank schematic, design a summing amplifier that performs this function: $\bm{v_o = -\left ( 4\,v_{ina} + 3\,v_{inb}\right )}$.**

[Circuit sandbox](https://spinningnumbers.org/circuit-sandbox/index.html)

Hint: Pick new values for the resistors with the right ratios.

Verify your new amplifier does what you expect.

**Change the input waveforms to something else.**

For example, make one of them a sine wave. Does the output do what you expect? 

Make them both sine waves with a different frequency. 

Make up a signal pattern in your head and see if you can build it.

{% capture summary %}Summing amplifier with probes{% endcapture %}  
{% capture details %}  
Simulation model of a [summing amplifier with probes](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["w",[232,48,224,48]],["w",[232,96,232,48]],["w",[176,88,176,48]],["w",[136,96,136,48]],["w",[120,48,136,48]],["w",[176,48,136,48]],["w",[176,152,104,152]],["w",[48,96,48,104]],["w",[72,96,48,96]],["w",[232,96,248,96]],["w",[176,104,176,152]],["w",[208,152,176,152]],["w",[208,152,208,104]],["w",[184,88,176,88]],["w",[120,96,136,96]],["r",[120,96,1],{"name":"Rb","r":"15k","_json_":15},["3","1"]],["r",[120,48,1],{"name":"Ra","r":"10k","_json_":16},["3","2"]],["r",[224,48,1],{"name":"Rf","r":"20k","_json_":17},["vout","3"]],["v",[48,104,0],{"name":"vinb","value":"step(0,1,5m,1n)","_json_":18},["1","0"]],["w",[184,104,176,104]],["o",[184,88,0],{"A":"30000","_json_":20},["3","0","vout","0"]],["L",[248,96,0],{"label":"vout","_json_":21},["vout"]],["v",[-16,48,0],{"name":"vina","value":"square(0,1,1000,50)","_json_":22},["2","0"]],["g",[104,152,0],{"_json_":23},["0"]],["w",[104,152,48,152]],["w",[-16,96,-16,152]],["w",[48,152,-16,152]],["s",[248,96,0],{"color":"green","offset":"0","_json_":27},["vout"]],["s",[-16,48,0],{"color":"cyan","offset":"0","_json_":28},["2"]],["w",[72,48,-16,48]],["s",[48,96,2],{"color":"orange","offset":"0","_json_":30},["1"]],["view",-81.30000000000001,-21.260000000000005,1.953125,"50","10","1G",null,"100","0.0099","1000"]]).
{% endcapture %}{% include details.html %}
