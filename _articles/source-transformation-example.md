---
layout: article
title:  "Source transformation - worked example"
author: Willy McAllister
comments: true
---

In this worked example we use  *source transformation* to simplify a circuit.

![Thévenin and Norton forms]({{ site.baseurl }}{% link i/thevenin0.svg %}){: .centered :}

Source transformation is explained [here]({{ site.baseurl }}{% link _articles/source-transformation.md %}).

Explained by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Review

Source transformation between Thévenin and Norton forms,

The resistor value is the same for the Thévenin and Norton forms, $\text R_\text T = \text R_\text N$.

Convert Thévenin to Norton by setting $\text I_\text N = \text V_\text T / \text R_\text T$.  

Convert Norton to Thévenin by setting $\text V_\text T = \text I_\text N \, \text R_\text N$. 

Thévenin and Norton forms are *equivalent* because they have the same $i$-$v$ behavior from the viewpoint of the output port.

## General strategy

Think about using source transformation when the problem asks you about a single voltage or current for one specific component. Everything besides that one component is a candidate for source transformation.

The **one rule**: Don't include the component with the requested $i$ or $v$ in a source transformation. 

The general strategy,
* Read the problem carefully. Identify what is being asked for.
* Scan the circuit. Look for the familiar pattern of the two forms, 
  * Thévenin form is a voltage source in series with a resistor.
  * Norton form is a current source in parallel with a resistor.
* Pick candidates for source transformation. Remember the one rule.
* Purpose: transform a source to increase the number of resistors in series or in parallel. 
* Simplify the circuit: merge those resistors into their series or parallel equivalent.
* Redraw the circuit and look for another chance to transform sources.
* Solve for the asked-for variable in the simpler circuit.

## Example circuit 

**Find $\blueD i$.**

![Source transformation example circuit]({{ site.baseurl }}{% link i/thevenin_ex1.svg %}){: .centered :}

We could go after this circuit with methods we've learned before, like Node Voltage or Mesh Current. But this time we will do it with source transformation.

**What is being asked for?**
<details>
    <summary>show answer</summary>
    <p>We are asked to find $i$ flowing in the $470 \,\Omega resistor.</p>
</details>

**Are there any Thévenin or Norton forms?**
<details>
    <summary>show answer</summary>
    <p>Yes, one of each. The voltage source and $R1$ is a Thévenin form. The current source and $R2$ is a Norton form.</p>
    <p>The two little port circles separate and highlight the forms, but they won't always be there in your circuit problems.</p>
</details>

**Which ones are candidates for source transformation?**
<details>
    <summary>show answer</summary>
    <p>According to the one rule, the Thévenin form is *not* a candidate for transformation because we've been asked to find the current in its $470\,\Omega$ resistor. We can't disturb that component if we want to get the right answer.</p>
</details>

**Anticipate: What good thing would happen if we did a source transformation?**
<details>
    <summary>show answer</summary>
    <p>If we transform the Norton form we'll end up with the two resistors in series. That's a good thing. It creates the opportunity to simplify.</p>
</details>

**Do the source transformation and redraw the circuit.**

$\text R2 = $ \_\_\_\_\_\_\_\_  
$\text V2 = $ \_\_\_\_\_\_\_\_

<details>
    <summary>show answer</summary>
    <p>Transform the Norton form to the equivalent Thévenin form.</p>
    <p>$\text R2$ is the same for both. $\text R2 = 470\,\Omega$.</p>
    <p>The Thévenin voltage sources is $\text V2 = \text I2 \cdot \text R2 = 2\,\text{mA} \cdot 330\,\Omega = 0.66\,\mu\text V$</p>
    <p><img src="/i/thevenin_ex1b.svg"></p>
</details>

**Is it a good idea to try another transformation?**
<details>
    <summary>show answer</summary>
    <p>Not really. Current $i$ flows through $\text R1$. Anything else we try would involve touching $\text R1$, which would violate the one rule.</p>
</details>

**Simplify and solve the circuit.**

<details>
    <summary>show answer</summary>
    <p>Source transformation gave us two series resistors. We solve with Ohm's Law,</p>
    <p>$i = \dfrac{\text V1 - \text V2}{(\text R1 + \text R2)}$</p>
    <p>$i = \dfrac{3.3 - 0.66}{(470 + 330)} = \dfrac{2.64}{800}$</p>
    <p>$i = 3.3\,\text{mA}$</p>
</details>

## Simulation model for example 1

[Simulation model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["w",[296,192,296,200]],["w",[264,192,296,192]],["w",[184,192,216,192]],["v",[296,200,4],{"name":"V2","value":"dc(1)","_json_":3},["5","0"]],["w",[296,248,160,248]],["w",[136,192,128,192]],["w",[96,192,112,192]],["a",[112,192,0],{"color":"magenta","offset":"0","_json_":7},["4","7"]],["w",[96,248,160,248]],["g",[160,248,0],{"_json_":9},["0"]],["w",[96,200,96,192]],["r",[184,192,5],{"name":"R1b","r":"470","_json_":11},["6","7"]],["r",[216,192,3],{"name":"R2b","r":"1","_json_":12},["6","5"]],["v",[96,200,0],{"name":"V1b","value":"dc(3.3)","_json_":13},["4","0"]],["w",[296,72,208,72]],["w",[184,72,208,72]],["w",[208,80,208,72]],["w",[296,128,208,128]],["w",[160,128,208,128]],["w",[136,72,128,72]],["w",[96,72,112,72]],["a",[112,72,0],{"color":"magenta","offset":"0","_json_":21},["1","3"]],["w",[96,128,160,128]],["g",[160,128,0],{"_json_":23},["0"]],["w",[296,72,296,80]],["w",[96,80,96,72]],["r",[184,72,5],{"name":"R1","r":"470","_json_":26},["2","3"]],["r",[208,80,0],{"name":"R2","r":"330","_json_":27},["2","0"]],["i",[296,128,2],{"name":"I2","value":"dc(2m)","_json_":28},["0","2"]],["v",[96,80,0],{"name":"V1","value":"dc(3.3)","_json_":29},["1","0"]],["view",-8.800000000000011,46.739999999999995,1.953125,"50","10","1G",null,"100","0.01","1000"]]). Open the link in another tab. The top circuit is Example $1$. Click on **DC** in the menu bar to perform a DC analysis. 

**Challenge:** The bottom circuit shows the Norton to Thévenin source transformation, *but $\text R2\text b$ and $\text V2$ don't have the right values*. You have to fix them!

Double-click on $\text R2\text b$ and $\text V2$ and fill in the Thévenin equivalent values you calculated above. Then run another **DC** analysis. Is $i$ the same in both schematics?

Here's the circuit with the correct values filled in,
[show answer](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["v",[96,80,0],{"name":"V1","value":"dc(3.3)","_json_":0},["6","0"]],["i",[296,128,2],{"name":"I2","value":"dc(2m)","_json_":1},["0","7"]],["r",[208,80,0],{"name":"R2","r":"330","_json_":2},["7","0"]],["r",[184,72,5],{"name":"R1","r":"470","_json_":3},["7","5"]],["w",[96,80,96,72]],["w",[296,72,296,80]],["g",[160,128,0],{"_json_":6},["0"]],["w",[96,128,160,128]],["a",[112,72,0],{"color":"magenta","offset":"0","_json_":8},["6","5"]],["w",[96,72,112,72]],["w",[136,72,128,72]],["w",[160,128,208,128]],["w",[296,128,208,128]],["w",[208,80,208,72]],["w",[184,72,208,72]],["w",[296,72,208,72]],["v",[96,200,0],{"name":"V1b","value":"dc(3.3)","_json_":16},["3","0"]],["r",[216,192,3],{"name":"R2b","r":"330","_json_":17},["4","1"]],["r",[184,192,5],{"name":"R1b","r":"470","_json_":18},["4","2"]],["w",[96,200,96,192]],["g",[160,248,0],{"_json_":20},["0"]],["w",[96,248,160,248]],["a",[112,192,0],{"color":"magenta","offset":"0","_json_":22},["3","2"]],["w",[96,192,112,192]],["w",[136,192,128,192]],["w",[296,248,160,248]],["v",[296,200,4],{"name":"V2","value":"dc(660m)","_json_":26},["1","0"]],["w",[184,192,216,192]],["w",[264,192,296,192]],["w",[296,192,296,200]],["view",-8.800000000000011,46.739999999999995,1.953125,"50","10","1G",null,"100","0.01","1000"]]).  

Things to notice,
* $\text R1$ and $\text R1\text b$ have the same current and voltage. That's what it means to be equivalent. 
* The current in $\text V2$ is not the same as $\text I2$. That's ok. We focused on $\text R1$ and $\text R1\text b$.
* Transforming the current source gave us the same answer with a simpler circuit. This would have been a challenging circuit for Node Voltage or Mesh Current methods. Source transformation simplified it down to something we could solve with Ohm's Law. 

In the next article we simplify complex networks of many $\text R$'s and sources down to a *Thévenin equivalent* or *Norton equivalent*.

