---
layout: article
title:  "Source transformation - example"
author: Willy McAllister
comments: true
---

In this worked example we use source transformation to simplify a circuit.

![Thévenin and Norton forms]({{ site.baseurl }}{% link i/thevenin0.svg %})

Source transformation is introduced [here]({{ site.baseurl }}{% link _articles/source-transformation.md %}).

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Review

Source transformation between Thévenin and Norton forms,

![Thévenin and Norton forms]({{ site.baseurl }}{% link i/thevenin0.svg %})

* The resistor value is the same for the Thévenin and Norton forms, $\text R_\text T = \text R_\text N$.

* Convert Thévenin to Norton: set $\text I_\text N = \text V_\text T / \text R_\text T$.  

* Convert Norton to Thévenin: set $\text V_\text T = \text I_\text N \, \text R_\text N$. 

Thévenin and Norton forms are *equivalent* because they have the same $i$-$v$ behavior from the viewpoint of the output port.

## Strategy

Think about source transformation when the homework problem asks about a single voltage or current for one specific component. Everything besides that one component is a candidate for source transformation.

Your goal when you do a source transformation to increase the number of resistors in series or in parallel and create chances for simplification. 

The **One Rule** for source transformation is,  
Don't include the component with the requested $i$ or $v$ in a source transformation. 

The strategy,
* Read the problem carefully. Identify the voltage or current being asked for.
* Scan your eyes over the circuit. Look for the familiar pattern of the two forms, 
  * Thévenin form is a voltage source in series with a resistor.
  * Norton form is a current source in parallel with a resistor.
* Identify a candidate and do the source transformation.
* Simplify the circuit: merge resistors into their series or parallel equivalent.
* Redraw the circuit and look for another chance to transform sources.
* Solve for the requested variable in the simpler circuit.

## Example 

**Find $\blueD i$.**

![Source transformation example circuit]({{ site.baseurl }}{% link i/thevenin_ex1.svg %}){: .centered :}

We could go after $\blueD i$ with methods we've learned before, like Node Voltage or Mesh Current. But this time we will do it with source transformation.

**What is asked for?**
{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
We are asked to find $\blueD i$ in $\text R1$, the $470 \,\Omega$ resistor.  
{% endcapture %}{% include details.html %} 

**Are there any Thévenin or Norton forms?**
{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Yes, one of each.  
The voltage source with $\text R1$ is a Thévenin form.  
The current source with $\text R2$ is a Norton form.

The two little port circles split the forms, but they won't be there in your circuit problems.  
{% endcapture %}{% include details.html %} 

**Which ones are candidates for source transformation?**
{% capture summary %}show answer{% endcapture %}  
{% capture details %}
The Norton form on the right is a candidate for transformation.

From the **One Rule**, the Thévenin form on the left is *not* a candidate for transformation. That's because we've been asked to find the current in $\text R1$. We must not disturb that component if we want to get the right answer.  
{% endcapture %}{% include details.html %} 

**Anticipate: What good thing would happen if we did a source transformation?**
{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
If we transform the Norton form we'll end up with the two resistors in series. That creates the opportunity to simplify.  
{% endcapture %}{% include details.html %} 

**Do the source transformation and redraw the circuit.**

$\text R2 = $ \_\_\_\_\_\_\_\_  
$\text V2 = $ \_\_\_\_\_\_\_\_

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Transform the Norton form to the equivalent Thévenin form.

$\text R2$ is the same for both. $\text R2 = 330\,\Omega$.

The Thévenin voltage sources is $\text V2 = \text I2 \cdot \text R2 = 2\,\text{mA} \cdot 330\,\Omega = 0.66\,\text V$

![After Norton to Thévenin transformation]({{ site.baseurl }}{% link i/thevenin_ex1b.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

**Is it a good idea to try another transformation?**
{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Not really. Current $i$ flows through $\text R1$. Anything else we try would involve touching $\text R1$, which would violate the **One Rule**.  
{% endcapture %}{% include details.html %} 

**Simplify and find $i$.**
{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Source transformation gave us two resistors in series. The voltage across the series resistors is $\text V1 - \text V2$. Ohm's Law gives us,

$i = \dfrac{\text V1 - \text V2}{(\text R1 + \text R2)}$

$i = \dfrac{3.3 - 0.66}{(470 + 330)} = \dfrac{2.64}{800}$

$i = 3.3\,\text{mA}$  
{% endcapture %}{% include details.html %} 

## Simulation model

Open this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["w",[296,192,296,200]],["w",[264,192,296,192]],["w",[184,192,216,192]],["v",[296,200,4],{"name":"V2","value":"dc(1)","_json_":3},["5","0"]],["w",[296,248,160,248]],["w",[136,192,128,192]],["w",[96,192,112,192]],["a",[112,192,0],{"color":"magenta","offset":"0","_json_":7},["4","7"]],["w",[96,248,160,248]],["g",[160,248,0],{"_json_":9},["0"]],["w",[96,200,96,192]],["r",[184,192,5],{"name":"R1b","r":"470","_json_":11},["6","7"]],["r",[216,192,3],{"name":"R2b","r":"1","_json_":12},["6","5"]],["v",[96,200,0],{"name":"V1b","value":"dc(3.3)","_json_":13},["4","0"]],["w",[296,72,208,72]],["w",[184,72,208,72]],["w",[208,80,208,72]],["w",[296,128,208,128]],["w",[160,128,208,128]],["w",[136,72,128,72]],["w",[96,72,112,72]],["a",[112,72,0],{"color":"magenta","offset":"0","_json_":21},["1","3"]],["w",[96,128,160,128]],["g",[160,128,0],{"_json_":23},["0"]],["w",[296,72,296,80]],["w",[96,80,96,72]],["r",[184,72,5],{"name":"R1","r":"470","_json_":26},["2","3"]],["r",[208,80,0],{"name":"R2","r":"330","_json_":27},["2","0"]],["i",[296,128,2],{"name":"I2","value":"dc(2m)","_json_":28},["0","2"]],["v",[96,80,0],{"name":"V1","value":"dc(3.3)","_json_":29},["1","0"]],["view",-8.800000000000011,46.739999999999995,1.953125,"50","10","1G",null,"100","0.01","1000"]]){:target="_blank"}. The top circuit is the original example. The bottom circuit shows the Norton to Thévenin source transformation, *but $\text R2\text b$ and $\text V2$ don't have the right values*. You have to fix them! Click on **DC** in the menu bar to perform a DC analysis. 

### Design challenge 

Double-click on $\text R2\text b$ and $\text V2$ and fill in the Thévenin equivalent values you calculated above. Then run another **DC** analysis. Is $i$ the same in both schematics?

Here's the circuit with the correct values filled in,
[show answer](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["v",[96,80,0],{"name":"V1","value":"dc(3.3)","_json_":0},["6","0"]],["i",[296,128,2],{"name":"I2","value":"dc(2m)","_json_":1},["0","7"]],["r",[208,80,0],{"name":"R2","r":"330","_json_":2},["7","0"]],["r",[184,72,5],{"name":"R1","r":"470","_json_":3},["7","5"]],["w",[96,80,96,72]],["w",[296,72,296,80]],["g",[160,128,0],{"_json_":6},["0"]],["w",[96,128,160,128]],["a",[112,72,0],{"color":"magenta","offset":"0","_json_":8},["6","5"]],["w",[96,72,112,72]],["w",[136,72,128,72]],["w",[160,128,208,128]],["w",[296,128,208,128]],["w",[208,80,208,72]],["w",[184,72,208,72]],["w",[296,72,208,72]],["v",[96,200,0],{"name":"V1b","value":"dc(3.3)","_json_":16},["3","0"]],["r",[216,192,3],{"name":"R2b","r":"330","_json_":17},["4","1"]],["r",[184,192,5],{"name":"R1b","r":"470","_json_":18},["4","2"]],["w",[96,200,96,192]],["g",[160,248,0],{"_json_":20},["0"]],["w",[96,248,160,248]],["a",[112,192,0],{"color":"magenta","offset":"0","_json_":22},["3","2"]],["w",[96,192,112,192]],["w",[136,192,128,192]],["w",[296,248,160,248]],["v",[296,200,4],{"name":"V2","value":"dc(660m)","_json_":26},["1","0"]],["w",[184,192,216,192]],["w",[264,192,296,192]],["w",[296,192,296,200]],["view",-8.800000000000011,46.739999999999995,1.953125,"50","10","1G",null,"100","0.01","1000"]]){:target="_blank"}.  

### Things to notice

* $\text R1$ and $\text R1\text b$ have the same current and the same voltage. That is what it means for these two circuits to be equivalent from the viewpoint of the chosen port. 

* Notice the current in $\text V2$ is *not* the same as current $\text I2$. That's okay, because our focus is on the current and voltage for $\text R1$ and $\text R1\text b$.

Is source transformation easier or harder than analyzing by Node Voltage or Mesh Current methods? What do you think? We simplified the circuit down to something we could solve with one application of Ohm's Law. Compare that to how you would solve this circuit with Node Voltage or Mesh Current.

In the next two articles we learn how to simplify any complex network of many resistors and sources down to a *Thévenin equivalent* or *Norton equivalent*.

