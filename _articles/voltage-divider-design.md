---
layout: article
title:  "Voltage divider design considerations"
author: Willy McAllister
comments: true
---

A common resistor circuit goes by the nickname *voltage divider*. 

![Voltage divider]({% link i/voltage_divider0.svg %}){: .centered :}

In the [previous article]({% link _articles/voltage-divider.md %}) we developed an equation for voltage dividing,

$v_{out}  = v_{in}\,\dfrac{\text R2}{\text R1 + \text R2}$ 

The derivation assumed the current flowing away from the center node is very small. 

In this article we challenge that assumption and see how real-world voltage dividers behave when there is a load current. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

When a voltage divider delivers current to a load, the output voltage is lower than the voltage divider equation. The percentage droop depends on where the divider is operated within its range, $0$ to $v_{in}$. 

The accuracy of a divider is also impacted by the tolerance of the two resistors. 

----

A voltage divider isn't useful unless its output is connected to something. Remember back in the [voltage divider]({% link _articles/voltage-divider.md %}) article we made an assumption? We assumed the current flowing away from the node between the two resistors was $0$. That let us treat $\text{R1}$ and $\text{R2}$ as if they were in series, and we developed the voltage divider equation. Let's check what happens if that assumption is not true. 

We look at three important cases,
* Output voltage around the mid-range of the divider $($near $v_{in}/2)$
* Output voltage close to $v_{in}$
* Output voltage near $0$ 

## Operating the voltage divider near mid-range

To start this discussion, we set up a voltage divider with $\text{R1} = \text{R2}$. When the resistors are the same value the expected $v_{out}$ of the voltage divider is half the input voltage,

$v_{out}  = v_{in}\,\dfrac{\text R}{\text R + \text R} = v_{in}\,\dfrac{\cancel{\text R}}{2\,\cancel{\text R}}$ 

$v_{out} = \dfrac{v_{in}}{2}$ 

In ideal operation, current $i_1$ flows down through $\text R1$ and continues on through $\text R2$. If we connect a load to the divider, represented by resistor $\text R_{\text L}$, this will cause a small portion of $i_1$, we'll call it $i_\text L$, to flow away from the center node, heading to the right through $\text R_\text L$. 

![Voltage divider in mid-range]({% link i/voltage_divider10.svg %}){: .centered :}

Does the voltage divider still work with a load, or does our voltage divider story collapse? 

Resistor $\text R_\text L$ acts as a *load* on the output of the voltage divider, meaning it causes a current $i_\text L$ to flow. The presence of $\text R_\text L$ means $\text{R1}$ and $\text{R2}$ are no longer strictly in series. 

We want $i_\text L$ to be small (we need it to be much smaller than $i_1$ or $i_2$), so let's make $\text{R}\_{\text L}$ fairly large. Let $\text R_\text L$ be ten times bigger than $\text{R2}$,

$\text{R}_{\text L} = 10\,\text{R2}$

With this high-resistance load, take a look at what happens to the output voltage. 

$\text{R2}$ and $\text{R}\_{\text L}$ are in parallel. Combine the two parallel resistors using the [parallel resistor formula]({% link _articles/parallel-resistors.md %}#special-case---2-resistors-in-parallel),  

$\text{R2} \parallel \text{R}\_{\text L} = \dfrac{\text{R2}\cdot\text{R}_{\text L}}{\text{R2}+\text{R}\_{\text L}}$

{% capture summary %}$\parallel${% endcapture %}  
{% capture details %}  
The vertical bars $\parallel$ are shorthand notation for "in parallel with."  
{% endcapture %}{% include details.html %} 

$\dfrac{\text{R2}\cdot10\,\text{R2}}{\text{R2}+10\,\text{R2}} = \dfrac{10}{11}\,\text{R2} = 0.91\,\text{R2}$

Here is a redrawn version of our loaded voltage divider, showing the equivalent resistance of $\text R2$ in parallel with $\text R_\text L$,

![Voltage divider with R2 \|\| RL]({% link i/voltage_divider11.svg %}){: .centered :}

The $10{\times}$ load resistor reduces the resistance at the bottom of the divider by about $9\%$. 

How does this additional load change the output voltage? Without the load, the expected output is $0.5\,v_{in}$. With the load, the output voltage becomes,

$v_{out} = v_{in}\, \dfrac{0.91\, \text R2}{\text R1 + 0.91\, \text R2} $

We designed our divider with $\text R1 = \text R2$, so all the $\text R$'s cancel out,

$v_{out} = v_{in}\, \dfrac{0.91}{1 + 0.91}$

$v_{out} = v_{in}\, \dfrac{0.91}{1 .91} = 0.48\,v_{in}$

The output voltage drops from $50\%$ to $48\%$ of the input voltage. How big an error is this?

$\dfrac{0.48}{0.50} = 0.96 = 96\%$

The actual output of the voltage divider is low by $4\%$ compared to the target voltage. Notice the $4\%$ voltage error is significantly less than the $9\%$ change of resistance. 

Does a few $\%$ error matter? That is for you alone to decide. It depends on how accurate the voltage divider needs to be for your application. 

#### Simulation model

[Simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"10k","_json_":0},["2","4"]],["v",[112,80,0],{"name":"vin","value":"dc(6)","_json_":1},["3","0"]],["r",[200,120,0],{"name":"R2","r":"10k","_json_":2},["4","0"]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":5},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["a",[152,40,0],{"color":"magenta","offset":"0","_json_":8},["3","2"]],["w",[112,40,152,40]],["w",[200,40,168,40]],["r",[288,120,0],{"name":"RL","r":"100k","_json_":11},["1","0"]],["w",[200,168,288,168]],["w",[288,120,288,104]],["w",[312,104,288,104]],["w",[200,88,200,120]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]){:target="_blank"} of the loaded voltage divider. Open it in a new tab. Run a **DC** operating point on the circuit as-is. Then connect a wire from the top of the load resistor to the center node of the voltage divider. Run the **DC** operating point again. How much does the output voltage change. 

Explore: Change the value of $\text R_\text L$ and see how much the output voltage changes.

The nugget to tuck away from this analysis:  
If the effective load resistance is $10{\times}$ greater than the bottom resistor in the voltage divider, you get roughly "one hand" $\%$ error $(4-5\%)$ in the output voltage. This result is valid when the output voltage is near the center of its range (in the neighborhood of $v_{\text{in}}/2$).

## Operating the voltage divider near extremes

If the voltage divider operates near its extremes, with the output voltage close to either $v_{\text{in}}$ or $0$, the percentage error will be different. To find out how much different, we repeat the analysis with the output voltage set to $90\%$ and $10\%$ of the divider range. We keep the load resistor ten times the bottom resistor, so the parallel combination of $\text R2$ and $\text R_{\text L}$ is still $0.91\,\text R2$.

### Case 1: 90% of $v_{in}$

Let the design target for $v_{out}$ be $90\%$ of $v_{in}$, so $v_{out}$ is really high in its range.

First, we need to design a voltage divider to give us a $90\%$ output. We do this by figuring out $\text R2$ in terms of $\text R1$ for a $90\%$ voltage divider,

$\dfrac{v_{out}}{v_{in}} = 0.90 = \dfrac{\text R2}{\text R1 + \text R2}$

$0.90 \,(\text R1 + \text R2) = \text R2$

$0.90 \,\text R1 = \text R2 - 0.90\,\text R2$

$0.90 \,\text R1 = 0.10 \,\text R2$

$\text R2 = \dfrac{0.90\,\text R1}{0.10} = 9\,\text R1$

That means $\text R2$, the resistor on the bottom, is $9$ times bigger than $\text R1$. 

Now we load the circuit with $\text R_\text L$ and see how the output voltage changes. 

![Voltage divider 90% of Vin]({% link i/voltage_divider12.svg %}){: .centered :}

Voltage divider with $v_{out}= 90\%$ of $v_{in}$.
{: .caption :}

Here's a repetition of the expression we derived above for the loaded voltage divider, 

$\dfrac{v_{out}}{v_{in}}  = \dfrac{0.91\, \text R2}{\text R1 + 0.91\, \text R2} $

Last time we had $\text R2 =\text R1$, but this time $\text R2 = 9\,\text R1$,

$\dfrac{v_{out}}{v_{in}} = \dfrac{0.91 \,(9\,\text R1)}{\text R1 + \text 0.91\,(9\,\text R1)}$

All the $\text R1$'s cancel out, leaving,

$\dfrac{v_{out}}{v_{in}} = \dfrac{0.91 \,(9)}{1 + 0.91\,(9)} = \dfrac{8.19}{9.19} = 0.89$

The actual output voltage is $89\%$ of $v_{in}$ instead of the design goal of $90\%$. So the actual voltage is lower than the expected by only $1\%$.

#### Simulation model

[Simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"1.111k","_json_":0},["2","4"]],["v",[112,80,0],{"name":"vin","value":"dc(10)","_json_":1},["3","0"]],["r",[200,120,0],{"name":"R2","r":"10k","_json_":2},["4","0"]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":5},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["a",[152,40,0],{"color":"magenta","offset":"0","_json_":8},["3","2"]],["w",[112,40,152,40]],["w",[200,40,168,40]],["r",[288,120,0],{"name":"RL","r":"100k","_json_":11},["1","0"]],["w",[200,168,288,168]],["w",[288,120,288,104]],["w",[312,104,288,104]],["w",[200,88,200,120]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]){:target="_blank"} of  $v_\text{out} = 90\%$ of $v_\text{in}$. Perform a **DC** operating point simulation of the circuit as-is. Then connect a wire from the load resistor to the voltage divider. Perform another **DC** operating point and see how the output voltage droops slightly. 

### Case 2: 10% of $v_{in}$

Let $v_{out} = 10\%$ of $v_{in}$, so $v_{out}$ is really low in its range. 

Express $\text R1$ in terms of $\text R2$ for a $10\%$ voltage divider,

$\dfrac{v_{out}}{v_{in}} = 0.10 = \dfrac{\text R2}{\text R1 + \text R2}$

$0.10 \,(\text R1 + \text R2) = \text R2$

$0.10 \,\text R1 = \text R2 - 0.10\,\text R2$

$0.10 \,\text R1 = 0.90 \,\text R2$

$\text R1 = \dfrac{0.90\,\text R2}{0.10} = 9\,\text R2$

$\text R1$, the resistor on the top, is $9$ times bigger than $\text R2$. 

Now we load the circuit with $\text R_\text L$ and see what happens to the output voltage. 

![Voltage divider 10% of Vin]({% link i/voltage_divider12.svg %}){: .centered :}

Voltage divider with $v_{out}= 10\%$ of $v_{in}$.
{: .caption :}

The expression for the loaded voltage divider is still, 

$\dfrac{v_{out}}{v_{in}}  = \dfrac{0.91\, \text R2}{\text R1 + 0.91\, \text R2} $

Replace $\text R1$ with $9\,\text R2$,

$\dfrac{v_{out}}{v_{in}} = \dfrac{0.91 \,\text R2}{9\,\text R2 + \text 0.91\,\text R2}$

All the $\text R2$'s cancel out,

$\dfrac{v_{out}}{v_{in}} = \dfrac{0.91}{9 + 1} = \dfrac{0.91}{10} = 0.091$

The actual output voltage is $9.1\%$ of $v_{in}$ instead of the expected $10\%$. 

So the actual voltage is lower than expected by about $\dfrac{10\% - 9.1\%}{10\%} = 9\%$. 

This error is pretty big, twice as large as the error of the loaded mid-range divider.

#### Simulation model

[Simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"90k","_json_":0},["2","4"]],["v",[112,80,0],{"name":"vin","value":"dc(10)","_json_":1},["3","0"]],["r",[200,120,0],{"name":"R2","r":"10k","_json_":2},["4","0"]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":5},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["a",[152,40,0],{"color":"magenta","offset":"0","_json_":8},["3","2"]],["w",[112,40,152,40]],["w",[200,40,168,40]],["r",[288,120,0],{"name":"RL","r":"100k","_json_":11},["1","0"]],["w",[200,168,288,168]],["w",[288,120,288,104]],["w",[312,104,288,104]],["w",[200,88,200,120]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]){:target="_blank"} of the voltage divider at $10\%$ of $v_\text{in}$. Run a **DC** operating point. Then add a wire to connect the load resistor to the divider. Run the **DC** operating point again. How much does the divider output change with the load?

## Lessons from a loaded voltage divider

If you have a $(10\times$$\text R2)$ load resistor drawing current from a voltage divider,

* Near mid-range, the output voltage is reduced by about $4\%$.

* Near the top of its range, the error is much less, around $1\%$. 

* Near the bottom of its range, the error roughly doubles compared to mid-range. The output voltage is $9\%$ lower than expected.

## Controlling error in a voltage divider

If your design requires the voltage error to be significantly smaller, the load needs to be significantly larger than $(10\times$$\text R2)$, like an additional $10{\times}$  or more. You can get an additional $10{\times}$ two ways. Increase the load resistance. Or redesign the voltage divider to have smaller $\text{R1}$ and $\text{R2}$, at the cost of more power dissipated by the voltage divider. 

{% capture summary %}example{% endcapture %}  
{% capture details %}  
Suppose you have a fixed load resistor $\text R_\text L = 10 \,\text k\Omega$, and you can't change it. You design a voltage divider to connect to the load. Your first design is to pick two resistors $10$ times smaller than the load resistor, or $\text R1 = \text R2 = 1\,\text k\Omega$. 

You've paid attention to this article where you learned about the sources of error in a voltage divider when it has a load connected. You check how much the divider's output voltage "sags" due to the load and you are not happy with the result. You want the voltage to sag less and be closer to $\text V_{\text{in}}/2$. 

Since you can't change the load resistor you have to change $\text R1$ and $\text R2$. For you second design you pick resistors $100$ times smaller than the load resistor, or $\text R1 = \text R2 = 100\,\Omega$. When you make $\text R1$ and $\text R2$ smaller, the load resistor has less effect on the divider voltage. We say the voltage divider is "stiffer". The cost for doing this is a $10$ times increase in the power dissipated by the voltage divider.
{% endcapture %}{% include details.html %}

## Real-world resistor tolerance impacts accuracy 

Real-world resistors always have a $\pm$ tolerance on their value. If accuracy is critical to your application, use resistors with tight tolerances. Check for acceptable performance by analyzing the voltage divider like we did here at the extremes of tolerance.

## What's in a nickname?

We mentioned the nickname of this circuit is a *voltage divider*. In many situations, that is exactly what it does. However, we showed that under certain conditions when there is a load on the divider, the actual output voltage is slightly lower than the value predicted by the voltage divider equation. Real-world dividers are built with resistors with real-world tolerances. This also introduces errors to the output voltage. The lesson: Call the circuit by its nickname, but remember, it's *only* a nickname. 

## Summary
{:.no_toc}

When a voltage divider has some of its current diverted to drive a load, the output voltage will be a little lower than the target value predicted by the voltage divider equation. 

The error is greatest when the output voltage is near $0$.

Design voltage dividers based on the accuracy demanded by your application. 