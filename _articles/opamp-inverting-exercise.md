---
layout: article
title:  "Inverting op-amp exercise"
author: Willy McAllister
comments: true
---

Open this simulation model of an [inverting amplifier](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["o",[184,88,0],{"A":"30000","_json_":0},["2","0","vout","0"]],["r",[152,88,1],{"name":"R1","r":"3.3k","_json_":1},["2","1"]],["r",[232,56,1],{"name":"R2","r":"33k","_json_":2},["vout","2"]],["w",[184,104,168,104]],["L",[256,96,0],{"label":"vout","_json_":4},["vout"]],["v",[72,104,0],{"name":"","value":"sin(0,1,1000,0,0)","_json_":5},["1","0"]],["w",[72,104,72,88]],["g",[72,152,0],{"_json_":7},["0"]],["g",[168,104,0],{"_json_":8},["0"]],["g",[208,104,0],{"_json_":9},["0"]],["s",[72,88,0],{"color":"cyan","offset":"0","_json_":10},["1"]],["s",[256,96,0],{"color":"green","offset":"0","_json_":11},["vout"]],["w",[104,88,72,88]],["w",[184,56,176,56]],["w",[176,56,176,88]],["w",[184,88,176,88]],["w",[152,88,176,88]],["w",[232,56,240,56]],["w",[240,56,240,96]],["w",[232,96,240,96]],["w",[256,96,240,96]],["view",7.659999999999997,14.292000000000002,2.44140625,"50","10","1G",null,"100","0.009","1000"]]) in another browser tab.

**What is the expected gain of this amplifier?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
From the video, the gain expression for the non-inverting amplifier is,

$v_o = -\dfrac{\text R2}{\text R1}\,v_{in}$  

Fill in the resistor values,

$v_o = -\dfrac{4.7\text k}{3.3\text k}\,v_{in}$  

$v_o = -\dfrac{4.7}{3.3}\,v_{in}$  

$v_o = -1.4\,v_{in}$

The gain is $-1.4$. The output is $1.4$ times larger and inverted with respect to the input. 
{% endcapture %}{% include details.html %}

**Click on TRAN to run a transient simulation.** 

Does the simulation match your gain calculation?

**Design an amplifier with a gain of $-10$.**

Hint: Pick new values for either or both of $\text R1$ and $\text R2$.

**Change the values of the resistors in the simulation and run TRAN again.**

Verify your new amplifier has the gain you expect.

**Starting from scratch with a blank schematic, design and simulate an inverting amplifier with a gain of $-1$.**

[Circuit sandbox](https://spinningnumbers.org/circuit-sandbox/index.html)