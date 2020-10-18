---
layout: article
title:  "Realistic opamp exercise"
author: Willy McAllister
comments: true
---

Introducing a realistic opamp model. UNDER CONSTRUCTION

![Opamp schematic symbol]({% link i/circuit_sandbox_opamp2_symbol.png %}){: height="200px" :}{: .centered :}

This opamp model is a differential amplifier with realistic properties. It measures the difference in voltage between its two input ports. It amplifies that difference by the gain factor $\text A$ and puts the result on the output port.

$\sf{vo} = \text A (\sf v$+ $- \,\,\sf v$-$)$

This realistic opamp model has two power supply pins, $\small{\sf{Vs+}}$ and $\small{\sf{Vs-}}$. The power supplies limit how far the output voltage, $\sf{vo}$, can swing. $\sf{vo}$ always has to be between the two supply voltages. For more details see the [Circuit Sandbox opamp model]({% link _articles/circuit-sandbox.md %}#opamp-model).  

You can modify various properties by double-clicking on the opamp symbol in the Circuit Sandbox. This model allows you to adjust Gain, Rin (resistance between $\sf v$+ and $\sf v$-), Rout (resistance in series with the output).

## Prepare a simple circuit

Open this incomplete [realistic opamp schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22L%22%2C%5B208%2C128%2C7%5D%2C%7B%22label%22%3A%22%3F%3F%3F%22%2C%22_json_%22%3A0%7D%2C%5B%22%3F%3F%3F%22%5D%5D%2C%5B%22L%22%2C%5B208%2C64%2C3%5D%2C%7B%22label%22%3A%22%3F%3F%3F%22%2C%22_json_%22%3A1%7D%2C%5B%22%3F%3F%3F%22%5D%5D%2C%5B%22L%22%2C%5B328%2C48%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A2%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B328%2C144%2C1%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A3%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C96%2C0%5D%2C%7B%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A4%7D%2C%5B%2210%22%2C%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C48%2C0%5D%2C%7B%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A5%7D%2C%5B%22Vs%2B%22%2C%2210%22%5D%5D%2C%5B%22o2%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22Gain%22%3A%2210%22%2C%22Rout%22%3A%221%22%2C%22Rin%22%3A%221.0e6%22%2C%22_json_%22%3A6%7D%2C%5B%229%22%2C%228%22%2C%22vout%22%2C%227%22%2C%226%22%5D%5D%2C%5B%22s%22%2C%5B248%2C64%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A7%7D%2C%5B%225%22%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22v%22%2C%5B56%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22dc(1.1)%22%2C%22_json_%22%3A9%7D%2C%5B%224%22%2C%223%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A10%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C-11.800000000000011%2C-18.760000000000005%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D) in an new browser tab.

**Double-click on the opamp. Give it a name like "Op1".**

The gain of this opamp has been set low so you can see how a differential amplifier works. **What is the gain?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The initial gain setting is $\text A = 10$.

Opamps have gains in the many $1000$'s, but we start low to get a feel for how it works.  
{% endcapture %}{% include details.html %}

Add another opamp from the parts bin. Open up its properties with a double-click.  
**What is the gain of an opamp fresh from the parts bin?**  
**What is the input resistance?**  
**What is the output resistance?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
A default opamp in Circuit Sandbox has a gain of $\text A = 100{,}000$.

The input resistance is $1\,\text M\Omega$. (The resistance between $\sf v$+ and $\sf v$-.)

The output resistance is $1\,\Omega$. (Resistance in series with the output pin.) 

You can leave these values alone most of the time. 

We don't need this opamp any more. Please delete it.  
{% endcapture %}{% include details.html %}

Build a circuit,

* Power: This opamp model requires two power inputs. Representative power supplies are provided. Connect power to the opamp,
    - Double click each voltage source and set the voltage of both to $12\,\text V$. A typical opamp supply is between $5$ an $15$ volts.
    * Move the two **???---** labels so they connect to the opamp. Double click to change their names to $\sf Vs+$ and $\sf Vs-$. This makes the connection to the power supply.
    * Alternatively, delete the node labels and wire the supplies directly to the opamp.
    * Add a ground symbol to the node between the two sources. (Select the ground symbol and rotate it by tapping **R** on the keyboard.)

* Inputs: Connect the two input voltage sources, 
    * $\sf v$+ to the opamp's + input 
    * $\sf v$- to the opamp's - input
    * Add a ground symbol to the bottom of each input source.

* Add a probe,
    * Move the voltage probe so it touches $\sf{vo}$.

{% capture summary %}finished schematic{% endcapture %}  
{% capture details %}
Do the rest of this exercise with your own schematic. 

If you want you can compare it to the one I drew --- [Willy' schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22g%22%2C%5B56%2C152%2C0%5D%2C%7B%22_json_%22%3A0%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B56%2C88%2C184%2C88%5D%5D%2C%5B%22w%22%2C%5B56%2C104%2C56%2C88%5D%5D%2C%5B%22w%22%2C%5B144%2C104%2C184%2C104%5D%5D%2C%5B%22g%22%2C%5B144%2C152%2C0%5D%2C%7B%22_json_%22%3A4%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B328%2C96%2C3%5D%2C%7B%22_json_%22%3A5%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A6%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A7%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B56%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22dc(1.1)%22%2C%22_json_%22%3A8%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22s%22%2C%5B248%2C96%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A10%7D%2C%5B%22vout%22%5D%5D%2C%5B%22o2%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22Gain%22%3A%2210%22%2C%22Rout%22%3A%221%22%2C%22Rin%22%3A%221.0e6%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%221%22%2C%22vout%22%2C%22Vs%2B%22%2C%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C48%2C0%5D%2C%7B%22name%22%3A%22Vs%2B%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A12%7D%2C%5B%22Vs%2B%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B328%2C96%2C0%5D%2C%7B%22name%22%3A%22Vs-%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A13%7D%2C%5B%220%22%2C%22Vs-%22%5D%5D%2C%5B%22L%22%2C%5B328%2C144%2C1%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A14%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22L%22%2C%5B328%2C48%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A15%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B208%2C80%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A16%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B208%2C112%2C7%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A17%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22view%22%2C-11.8%2C-18.76%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D ).
{% endcapture %}{% include details.html %}

## Performance questions

**With the inputs as given, figure out in your head what $\sf vo$ will be.**

Hint: Fill in the opamp equation, $\sf{vo} = \text A \,[(\sf{v+}) - (\sf{v-})]$.

Perform a DC operating point analysis (click on **DC**).  
**What is $\sf vo$? Did you guess right?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$\sf{vo} = \text A \,[(\sf{v+}) - (\sf{v-})]$

$\sf vo = 10 \,(1.1 - 1)$

$\sf vo = 10 \,(0.1)$

$\sf vo = 1\,\text V$

It actually comes out $0.98\,\text V$. I don't know why, yet. The gain appears to be 9.8 instead of 10.

The output voltage is $10$ times the difference between $\sf v$+ and $\sf v$-.
{% endcapture %}{% include details.html %}

Change $\sf v$+ to $3\,\text V$. **What is going to happen to $\sf vo$?**

Anticipate the answer in your head. Then perform a **DC** simulation.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The expected answer is $(3 - 1)\times 10 = 20\,\text V$. But the result is actually close to $12\,\text V$. Why is that? 

That's because the output cannot exceed the power supply. The opamp is *saturated*. 
{% endcapture %}{% include details.html %}

**Change $\sf v$+ to $-3\,\text V$. What will happen to the output?**

Anticipate the answer in your head. Then perform a **DC** simulation.

### Voltage transfer plot

Change $\sf v$- to $0\,\text V$.  
Change $\sf v$+ to a triangle wave with these parameters,
* Initial value: $-4$
* Plateau value: $+4$
* Frequency (Hz): $0.5$

Add a second voltage probe to $\sf v$+. Change it's color to something different than the other probe.

Click on **TRAN** and run a transient simulation for 1 second. This is an approximation to a *voltage transfer plot*. Sweeping the input voltage from $-20$ to $+20$ shows you the output voltage starts in negative saturation at the negative power rail, then becomes linear with a slope of GAIN, and finally saturates at the positive rail.

Special probe setting: **Select the $\sf v$+ probe you added. Change its color to "x-axis". Perform the same TRAN again.** 

Notice the input probe now appears as the x-axis of the plot. This is a proper voltage transfer plot, $v_{out}$ vs. $v_{in}$.   

[Voltage transfer circuit model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22L%22%2C%5B208%2C112%2C7%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A0%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22L%22%2C%5B208%2C80%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A1%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B328%2C48%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A2%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B328%2C144%2C1%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A3%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C96%2C0%5D%2C%7B%22name%22%3A%22Vs-%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A4%7D%2C%5B%220%22%2C%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C48%2C0%5D%2C%7B%22name%22%3A%22Vs%2B%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A5%7D%2C%5B%22Vs%2B%22%2C%220%22%5D%5D%2C%5B%22o2%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22Gain%22%3A%2210%22%2C%22Rout%22%3A%221%22%2C%22Rin%22%3A%221.0e6%22%2C%22_json_%22%3A6%7D%2C%5B%221%22%2C%222%22%2C%22vout%22%2C%22Vs%2B%22%2C%22Vs-%22%5D%5D%2C%5B%22s%22%2C%5B248%2C96%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A7%7D%2C%5B%22vout%22%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22v%22%2C%5B16%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22triangle(-4%2C4%2C500m)%22%2C%22_json_%22%3A9%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A10%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(0)%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22g%22%2C%5B328%2C96%2C3%5D%2C%7B%22_json_%22%3A12%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B144%2C152%2C0%5D%2C%7B%22_json_%22%3A13%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B144%2C104%2C184%2C104%5D%5D%2C%5B%22w%22%2C%5B16%2C104%2C16%2C88%5D%5D%2C%5B%22g%22%2C%5B16%2C152%2C0%5D%2C%7B%22_json_%22%3A16%7D%2C%5B%220%22%5D%5D%2C%5B%22s%22%2C%5B88%2C88%2C0%5D%2C%7B%22color%22%3A%22xaxis%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A17%7D%2C%5B%221%22%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C88%2C88%5D%5D%2C%5B%22w%22%2C%5B88%2C88%2C16%2C88%5D%5D%2C%5B%22view%22%2C-11.8%2C-18.76%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%221%22%2C%221000%22%5D%5D )

### More to come with realistic opamp model

Under construction.



