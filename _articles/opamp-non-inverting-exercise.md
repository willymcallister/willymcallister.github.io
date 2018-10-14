---
layout: article
title:  "Non-inverting op-amp exercise"
author: Willy McAllister
comments: true
---

Open this simulation model of a [non-inverting amplifier](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["o",[184,88,0],{"A":"30000","_json_":0},["1","2","vout","0"]],["r",[248,96,0],{"name":"R1","r":"5k","_json_":1},["vout","2"]],["r",[248,144,0],{"name":"R2","r":"10k","_json_":2},["2","0"]],["w",[184,104,168,104]],["w",[168,104,168,144]],["w",[168,144,248,144]],["w",[232,96,248,96]],["w",[272,96,248,96]],["L",[272,96,0],{"label":"vout","_json_":8},["vout"]],["v",[72,104,0],{"name":"","value":"sin(0,1,1000,0,0)","_json_":9},["1","0"]],["w",[72,104,72,88]],["g",[72,152,0],{"_json_":11},["0"]],["g",[248,192,0],{"_json_":12},["0"]],["g",[208,104,0],{"_json_":13},["0"]],["s",[128,88,0],{"color":"cyan","offset":"0","_json_":14},["1"]],["s",[272,96,0],{"color":"green","offset":"0","_json_":15},["vout"]],["w",[184,88,128,88]],["w",[72,88,128,88]],["view",15.659999999999997,42.292,2.44140625,"50","10","1G",null,"100","0.009","1000"]]) in another browser tab.

**What is the expected gain of this amplifier?**

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

[Circuit sandbox](https://spinningnumbers.org/circuit-sandbox/index.html)

>Note: This video is an updated version of the same [video](https://www.youtube.com/watch?v=_Ut-nQ535iE) on Khan Academy. A reference to an extra $v_{in}$ variable is removed.
