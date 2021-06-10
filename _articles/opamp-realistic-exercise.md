---
layout: article
title:  "Realistic opamp exercise"
author: Willy McAllister
comments: true
---
**UNDER CONSTRUCTION**

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

---- 

## Introducing a realistic opamp model 

![Opamp schematic symbol]({% link i/circuit_sandbox_opamp2_symbol.png %}){: height="200px" :}{: .centered :}

This opamp model is a differential amplifier with realistic properties. It measures the difference in voltage between its two input ports. It amplifies that difference by the gain factor $\text A$ and puts the result on the output port.

$\sf{vo} = \text A (\sf v$+ $- \,\,\sf v$-$)$

This realistic opamp model has two power supply pins, $\small{\sf{Vs+}}$ and $\small{\sf{Vs-}}$. The power supplies limit how far the output voltage, $\sf{vo}$, can swing. $\sf{vo}$ always has to be between the two supply voltages. For more details see the [Circuit Sandbox opamp model]({% link _articles/circuit-sandbox.md %}#opamp-model).  

You can modify various properties by double-clicking on the opamp symbol in the Circuit Sandbox. This model allows you to adjust Gain, Rin (resistance between $\sf v$+ and $\sf v$-), Rout (resistance in series with the output).

### Prepare a simple circuit

Open this incomplete [realistic opamp schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22L%22%2C%5B208%2C128%2C7%5D%2C%7B%22label%22%3A%22%3F%3F%3F%22%2C%22_json_%22%3A0%7D%2C%5B%22%3F%3F%3F%22%5D%5D%2C%5B%22L%22%2C%5B208%2C64%2C3%5D%2C%7B%22label%22%3A%22%3F%3F%3F%22%2C%22_json_%22%3A1%7D%2C%5B%22%3F%3F%3F%22%5D%5D%2C%5B%22L%22%2C%5B328%2C48%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A2%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B328%2C144%2C1%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A3%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C96%2C0%5D%2C%7B%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A4%7D%2C%5B%2210%22%2C%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C48%2C0%5D%2C%7B%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A5%7D%2C%5B%22Vs%2B%22%2C%2210%22%5D%5D%2C%5B%22o2%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22Gain%22%3A%2210%22%2C%22Rout%22%3A%221%22%2C%22Rin%22%3A%221.0e6%22%2C%22_json_%22%3A6%7D%2C%5B%229%22%2C%228%22%2C%22vout%22%2C%227%22%2C%226%22%5D%5D%2C%5B%22s%22%2C%5B248%2C64%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A7%7D%2C%5B%225%22%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22v%22%2C%5B56%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22dc(1.1)%22%2C%22_json_%22%3A9%7D%2C%5B%224%22%2C%223%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A10%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C-11.800000000000011%2C-18.760000000000005%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D){:target="_blank"}.

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

If you want you can compare it to the one I drew --- [Willy' schematic](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22g%22%2C%5B56%2C152%2C0%5D%2C%7B%22_json_%22%3A0%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B56%2C88%2C184%2C88%5D%5D%2C%5B%22w%22%2C%5B56%2C104%2C56%2C88%5D%5D%2C%5B%22w%22%2C%5B144%2C104%2C184%2C104%5D%5D%2C%5B%22g%22%2C%5B144%2C152%2C0%5D%2C%7B%22_json_%22%3A4%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B328%2C96%2C3%5D%2C%7B%22_json_%22%3A5%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A6%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A7%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B56%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22dc(1.1)%22%2C%22_json_%22%3A8%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22s%22%2C%5B248%2C96%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A10%7D%2C%5B%22vout%22%5D%5D%2C%5B%22o2%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22Gain%22%3A%2210%22%2C%22Rout%22%3A%221%22%2C%22Rin%22%3A%221.0e6%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%221%22%2C%22vout%22%2C%22Vs%2B%22%2C%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C48%2C0%5D%2C%7B%22name%22%3A%22Vs%2B%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A12%7D%2C%5B%22Vs%2B%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B328%2C96%2C0%5D%2C%7B%22name%22%3A%22Vs-%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A13%7D%2C%5B%220%22%2C%22Vs-%22%5D%5D%2C%5B%22L%22%2C%5B328%2C144%2C1%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A14%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22L%22%2C%5B328%2C48%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A15%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B208%2C80%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A16%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B208%2C112%2C7%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A17%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22view%22%2C-11.8%2C-18.76%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.0099%22%2C%221000%22%5D%5D ){:target="_blank"}.
{% endcapture %}{% include details.html %}

## Concept check

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

[Voltage transfer circuit model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22L%22%2C%5B208%2C112%2C7%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A0%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22L%22%2C%5B208%2C80%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A1%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B328%2C48%2C3%5D%2C%7B%22label%22%3A%22Vs%2B%22%2C%22_json_%22%3A2%7D%2C%5B%22Vs%2B%22%5D%5D%2C%5B%22L%22%2C%5B328%2C144%2C1%5D%2C%7B%22label%22%3A%22Vs-%22%2C%22_json_%22%3A3%7D%2C%5B%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C96%2C0%5D%2C%7B%22name%22%3A%22Vs-%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A4%7D%2C%5B%220%22%2C%22Vs-%22%5D%5D%2C%5B%22v%22%2C%5B328%2C48%2C0%5D%2C%7B%22name%22%3A%22Vs%2B%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A5%7D%2C%5B%22Vs%2B%22%2C%220%22%5D%5D%2C%5B%22o2%22%2C%5B184%2C88%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22Gain%22%3A%2210%22%2C%22Rout%22%3A%221%22%2C%22Rin%22%3A%221.0e6%22%2C%22_json_%22%3A6%7D%2C%5B%221%22%2C%222%22%2C%22vout%22%2C%22Vs%2B%22%2C%22Vs-%22%5D%5D%2C%5B%22s%22%2C%5B248%2C96%2C0%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A7%7D%2C%5B%22vout%22%5D%5D%2C%5B%22w%22%2C%5B248%2C96%2C232%2C96%5D%5D%2C%5B%22v%22%2C%5B16%2C104%2C0%5D%2C%7B%22name%22%3A%22v%2B%22%2C%22value%22%3A%22triangle(-4%2C4%2C500m)%22%2C%22_json_%22%3A9%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22L%22%2C%5B248%2C96%2C0%5D%2C%7B%22label%22%3A%22vout%22%2C%22_json_%22%3A10%7D%2C%5B%22vout%22%5D%5D%2C%5B%22v%22%2C%5B144%2C104%2C0%5D%2C%7B%22name%22%3A%22v-%22%2C%22value%22%3A%22dc(0)%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22g%22%2C%5B328%2C96%2C3%5D%2C%7B%22_json_%22%3A12%7D%2C%5B%220%22%5D%5D%2C%5B%22g%22%2C%5B144%2C152%2C0%5D%2C%7B%22_json_%22%3A13%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B144%2C104%2C184%2C104%5D%5D%2C%5B%22w%22%2C%5B16%2C104%2C16%2C88%5D%5D%2C%5B%22g%22%2C%5B16%2C152%2C0%5D%2C%7B%22_json_%22%3A16%7D%2C%5B%220%22%5D%5D%2C%5B%22s%22%2C%5B88%2C88%2C0%5D%2C%7B%22color%22%3A%22xaxis%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A17%7D%2C%5B%221%22%5D%5D%2C%5B%22w%22%2C%5B184%2C88%2C88%2C88%5D%5D%2C%5B%22w%22%2C%5B88%2C88%2C16%2C88%5D%5D%2C%5B%22view%22%2C-11.8%2C-18.76%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%221%22%2C%221000%22%5D%5D ){:target="_blank"}

Under construction.

## Realistic opamp model and default parameters

Input resistance $R_{in} = 1\,\text M\Omega = 10^{+6}$, resistance between input terminals.

Output resistance $R_o = 1\,\Omega$, resistance in series with output driver.

Amplification $A = 100{,}000 = 10^{+5}$

$G_{in} = 1/R_{in}$

$G_o = 1/R_o$

$G_{leak} = \dfrac{G_{in}}{(1 + A)} = 10^{-11} \quad (10^{11}\Omega)$, leakage power supply to inputs.

$G_{int} = \dfrac{G_o}{(1 + A)} = 10^{-5} \quad (100\,k\Omega)$, determines slew rate

$G_{thru} = \dfrac{G_o}{100} = 0.001 \quad (100\,\Omega)$, models power consumption.

$I_{max} = G_{int} \times 10^6 = 10 \quad$ sets the slew rate to $10\,v/\mu s$

Open-loop $3\,\text{dB}$ point is $\text{TBD Hz}$

[Opamp model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B424%2C0%2C312%2C0%5D%5D%2C%5B%22w%22%2C%5B424%2C168%2C312%2C168%5D%5D%2C%5B%22r%22%2C%5B264%2C96%2C3%5D%2C%7B%22name%22%3A%22Go%22%2C%22r%22%3A%221%22%2C%22_json_%22%3A2%7D%2C%5B%22nInt%22%2C%22nO%22%5D%5D%2C%5B%22w%22%2C%5B144%2C96%2C216%2C96%5D%5D%2C%5B%22c%22%2C%5B256%2C96%2C0%5D%2C%7B%22name%22%3A%22Cint%22%2C%22c%22%3A%221u%22%2C%22_json_%22%3A4%7D%2C%5B%22nInt%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B424%2C0%2C424%2C8%5D%5D%2C%5B%22w%22%2C%5B216%2C0%2C216%2C8%5D%5D%2C%5B%22a%22%2C%5B216%2C8%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A7%7D%2C%5B%22nP%22%2C%222%22%5D%5D%2C%5B%22a%22%2C%5B312%2C8%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A8%7D%2C%5B%22nP%22%2C%223%22%5D%5D%2C%5B%22w%22%2C%5B312%2C0%2C216%2C0%5D%5D%2C%5B%22w%22%2C%5B424%2C160%2C424%2C168%5D%5D%2C%5B%22w%22%2C%5B424%2C56%2C424%2C88%5D%5D%2C%5B%22w%22%2C%5B424%2C112%2C424%2C88%5D%5D%2C%5B%22g%22%2C%5B424%2C88%2C1%5D%2C%7B%22_json_%22%3A13%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B424%2C112%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A14%7D%2C%5B%220%22%2C%22nN%22%5D%5D%2C%5B%22w%22%2C%5B312%2C0%2C312%2C8%5D%5D%2C%5B%22v%22%2C%5B424%2C8%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A16%7D%2C%5B%22nP%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B72%2C24%2C0%5D%2C%7B%22name%22%3A%22Gleak1%22%2C%22r%22%3A%22100000M%22%2C%22_json_%22%3A17%7D%2C%5B%22nP%22%2C%22nIn%2B%22%5D%5D%2C%5B%22r%22%2C%5B72%2C72%2C0%5D%2C%7B%22name%22%3A%22Gin%22%2C%22r%22%3A%221M%22%2C%22_json_%22%3A18%7D%2C%5B%22nIn%2B%22%2C%22nIn-%22%5D%5D%2C%5B%22r%22%2C%5B72%2C120%2C0%5D%2C%7B%22name%22%3A%22Gleak2%22%2C%22r%22%3A%22100000M%22%2C%22_json_%22%3A19%7D%2C%5B%22nIn-%22%2C%22nN%22%5D%5D%2C%5B%22r%22%2C%5B312%2C24%2C0%5D%2C%7B%22name%22%3A%22Gthru1%22%2C%22r%22%3A%22100%22%2C%22_json_%22%3A20%7D%2C%5B%223%22%2C%22nO%22%5D%5D%2C%5B%22r%22%2C%5B312%2C120%2C0%5D%2C%7B%22name%22%3A%22Gthru2%22%2C%22r%22%3A%22100%22%2C%22_json_%22%3A21%7D%2C%5B%22nO%22%2C%22nN%22%5D%5D%2C%5B%22r%22%2C%5B216%2C24%2C0%5D%2C%7B%22name%22%3A%22Gint1%2F2%22%2C%22r%22%3A%2250k%22%2C%22_json_%22%3A22%7D%2C%5B%222%22%2C%22nInt%22%5D%5D%2C%5B%22r%22%2C%5B216%2C120%2C0%5D%2C%7B%22name%22%3A%22Gint2%2F2%22%2C%22r%22%3A%2250k%22%2C%22_json_%22%3A23%7D%2C%5B%22nInt%22%2C%22nN%22%5D%5D%2C%5B%22L%22%2C%5B72%2C72%2C2%5D%2C%7B%22label%22%3A%22nIn%2B%22%2C%22_json_%22%3A24%7D%2C%5B%22nIn%2B%22%5D%5D%2C%5B%22L%22%2C%5B72%2C120%2C2%5D%2C%7B%22label%22%3A%22nIn-%22%2C%22_json_%22%3A25%7D%2C%5B%22nIn-%22%5D%5D%2C%5B%22L%22%2C%5B312%2C96%2C0%5D%2C%7B%22label%22%3A%22nO%22%2C%22_json_%22%3A26%7D%2C%5B%22nO%22%5D%5D%2C%5B%22w%22%2C%5B312%2C72%2C312%2C96%5D%5D%2C%5B%22w%22%2C%5B312%2C120%2C312%2C96%5D%5D%2C%5B%22L%22%2C%5B312%2C0%2C3%5D%2C%7B%22label%22%3A%22nP%22%2C%22_json_%22%3A29%7D%2C%5B%22nP%22%5D%5D%2C%5B%22L%22%2C%5B312%2C168%2C1%5D%2C%7B%22label%22%3A%22nN%22%2C%22_json_%22%3A30%7D%2C%5B%22nN%22%5D%5D%2C%5B%22w%22%2C%5B216%2C120%2C216%2C96%5D%5D%2C%5B%22L%22%2C%5B232%2C80%2C6%5D%2C%7B%22label%22%3A%22nInt%22%2C%22_json_%22%3A32%7D%2C%5B%22nInt%22%5D%5D%2C%5B%22d%22%2C%5B144%2C96%2C2%5D%2C%7B%22name%22%3A%22IdGd%22%2C%22area%22%3A%221%22%2C%22is%22%3A%221.0e-14%22%2C%22Vt%22%3A%220.026%22%2C%22type%22%3A%22normal%22%2C%22_json_%22%3A33%7D%2C%5B%22nInt%22%2C%221%22%5D%5D%2C%5B%22d%22%2C%5B144%2C96%2C4%5D%2C%7B%22name%22%3A%22IdGdN%22%2C%22area%22%3A%221%22%2C%22is%22%3A%221.0e-14%22%2C%22Vt%22%3A%220.026%22%2C%22type%22%3A%22normal%22%2C%22_json_%22%3A34%7D%2C%5B%22nInt%22%2C%22nN%22%5D%5D%2C%5B%22v%22%2C%5B144%2C0%2C4%5D%2C%7B%22name%22%3A%22vdoff%22%2C%22value%22%3A%22dc(30m)%22%2C%22_json_%22%3A35%7D%2C%5B%22nP%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B72%2C24%2C72%2C0%5D%5D%2C%5B%22w%22%2C%5B72%2C0%2C144%2C0%5D%5D%2C%5B%22w%22%2C%5B144%2C144%2C144%2C168%5D%5D%2C%5B%22w%22%2C%5B72%2C168%2C144%2C168%5D%5D%2C%5B%22g%22%2C%5B256%2C144%2C0%5D%2C%7B%22_json_%22%3A40%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B312%2C168%2C216%2C168%5D%5D%2C%5B%22w%22%2C%5B144%2C0%2C216%2C0%5D%5D%2C%5B%22w%22%2C%5B216%2C168%2C144%2C168%5D%5D%2C%5B%22w%22%2C%5B216%2C96%2C232%2C80%5D%5D%2C%5B%22w%22%2C%5B216%2C72%2C216%2C96%5D%5D%2C%5B%22w%22%2C%5B216%2C96%2C256%2C96%5D%5D%2C%5B%22w%22%2C%5B264%2C96%2C256%2C96%5D%5D%2C%5B%22view%22%2C-10%2C-63.19999999999999%2C1.5625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"}.

Another stab at the [opamp model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B424%2C0%2C312%2C0%5D%5D%2C%5B%22w%22%2C%5B424%2C168%2C312%2C168%5D%5D%2C%5B%22r%22%2C%5B264%2C96%2C3%5D%2C%7B%22name%22%3A%22Go%22%2C%22r%22%3A%221%22%2C%22_json_%22%3A2%7D%2C%5B%22nInt%22%2C%22nO%22%5D%5D%2C%5B%22w%22%2C%5B424%2C0%2C424%2C8%5D%5D%2C%5B%22w%22%2C%5B216%2C0%2C216%2C8%5D%5D%2C%5B%22a%22%2C%5B216%2C8%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A5%7D%2C%5B%22nP%22%2C%222%22%5D%5D%2C%5B%22a%22%2C%5B312%2C8%2C1%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A6%7D%2C%5B%22nP%22%2C%223%22%5D%5D%2C%5B%22w%22%2C%5B312%2C0%2C216%2C0%5D%5D%2C%5B%22w%22%2C%5B424%2C160%2C424%2C168%5D%5D%2C%5B%22w%22%2C%5B424%2C56%2C424%2C88%5D%5D%2C%5B%22w%22%2C%5B424%2C112%2C424%2C88%5D%5D%2C%5B%22g%22%2C%5B424%2C88%2C1%5D%2C%7B%22_json_%22%3A11%7D%2C%5B%220%22%5D%5D%2C%5B%22v%22%2C%5B424%2C112%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A12%7D%2C%5B%220%22%2C%22nN%22%5D%5D%2C%5B%22w%22%2C%5B312%2C0%2C312%2C8%5D%5D%2C%5B%22v%22%2C%5B424%2C8%2C0%5D%2C%7B%22name%22%3A%22%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A14%7D%2C%5B%22nP%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B72%2C24%2C0%5D%2C%7B%22name%22%3A%22Gleak1%22%2C%22r%22%3A%22100000M%22%2C%22_json_%22%3A15%7D%2C%5B%22nP%22%2C%22nIn%2B%22%5D%5D%2C%5B%22r%22%2C%5B72%2C72%2C0%5D%2C%7B%22name%22%3A%22Gin%22%2C%22r%22%3A%221M%22%2C%22_json_%22%3A16%7D%2C%5B%22nIn%2B%22%2C%22nIn-%22%5D%5D%2C%5B%22r%22%2C%5B72%2C120%2C0%5D%2C%7B%22name%22%3A%22Gleak2%22%2C%22r%22%3A%22100000M%22%2C%22_json_%22%3A17%7D%2C%5B%22nIn-%22%2C%22nN%22%5D%5D%2C%5B%22r%22%2C%5B312%2C24%2C0%5D%2C%7B%22name%22%3A%22Gthru1%22%2C%22r%22%3A%22100%22%2C%22_json_%22%3A18%7D%2C%5B%223%22%2C%22nO%22%5D%5D%2C%5B%22r%22%2C%5B312%2C120%2C0%5D%2C%7B%22name%22%3A%22Gthru2%22%2C%22r%22%3A%22100%22%2C%22_json_%22%3A19%7D%2C%5B%22nO%22%2C%22nN%22%5D%5D%2C%5B%22r%22%2C%5B216%2C24%2C0%5D%2C%7B%22name%22%3A%22Gint1%2F2%22%2C%22r%22%3A%2250k%22%2C%22_json_%22%3A20%7D%2C%5B%222%22%2C%22nInt%22%5D%5D%2C%5B%22r%22%2C%5B216%2C120%2C0%5D%2C%7B%22name%22%3A%22Gint2%2F2%22%2C%22r%22%3A%2250k%22%2C%22_json_%22%3A21%7D%2C%5B%22nInt%22%2C%22nN%22%5D%5D%2C%5B%22L%22%2C%5B72%2C72%2C2%5D%2C%7B%22label%22%3A%22nIn%2B%22%2C%22_json_%22%3A22%7D%2C%5B%22nIn%2B%22%5D%5D%2C%5B%22L%22%2C%5B72%2C120%2C2%5D%2C%7B%22label%22%3A%22nIn-%22%2C%22_json_%22%3A23%7D%2C%5B%22nIn-%22%5D%5D%2C%5B%22L%22%2C%5B312%2C96%2C0%5D%2C%7B%22label%22%3A%22nO%22%2C%22_json_%22%3A24%7D%2C%5B%22nO%22%5D%5D%2C%5B%22w%22%2C%5B312%2C72%2C312%2C96%5D%5D%2C%5B%22w%22%2C%5B312%2C120%2C312%2C96%5D%5D%2C%5B%22L%22%2C%5B312%2C0%2C3%5D%2C%7B%22label%22%3A%22nP%22%2C%22_json_%22%3A27%7D%2C%5B%22nP%22%5D%5D%2C%5B%22L%22%2C%5B312%2C168%2C1%5D%2C%7B%22label%22%3A%22nN%22%2C%22_json_%22%3A28%7D%2C%5B%22nN%22%5D%5D%2C%5B%22w%22%2C%5B216%2C120%2C216%2C96%5D%5D%2C%5B%22L%22%2C%5B232%2C80%2C6%5D%2C%7B%22label%22%3A%22nInt%22%2C%22_json_%22%3A30%7D%2C%5B%22nInt%22%5D%5D%2C%5B%22d%22%2C%5B144%2C168%2C2%5D%2C%7B%22name%22%3A%22IdGd%22%2C%22area%22%3A%221%22%2C%22is%22%3A%221.0e-14%22%2C%22Vt%22%3A%220.026%22%2C%22type%22%3A%22normal%22%2C%22_json_%22%3A31%7D%2C%5B%22nN%22%2C%221%22%5D%5D%2C%5B%22d%22%2C%5B144%2C0%2C4%5D%2C%7B%22name%22%3A%22IdGdN%22%2C%22area%22%3A%221%22%2C%22is%22%3A%221.0e-14%22%2C%22Vt%22%3A%220.026%22%2C%22type%22%3A%22normal%22%2C%22_json_%22%3A32%7D%2C%5B%22nP%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B72%2C24%2C72%2C0%5D%5D%2C%5B%22w%22%2C%5B312%2C168%2C216%2C168%5D%5D%2C%5B%22w%22%2C%5B216%2C96%2C232%2C80%5D%5D%2C%5B%22w%22%2C%5B216%2C72%2C216%2C96%5D%5D%2C%5B%22w%22%2C%5B72%2C0%2C144%2C0%5D%5D%2C%5B%22w%22%2C%5B216%2C0%2C144%2C0%5D%5D%2C%5B%22w%22%2C%5B72%2C168%2C144%2C168%5D%5D%2C%5B%22w%22%2C%5B216%2C168%2C144%2C168%5D%5D%2C%5B%22i%22%2C%5B144%2C96%2C3%5D%2C%7B%22name%22%3A%22iInt%22%2C%22value%22%3A%22dc(0)%22%2C%22_json_%22%3A41%7D%2C%5B%221%22%2C%22nInt%22%5D%5D%2C%5B%22w%22%2C%5B144%2C120%2C144%2C96%5D%5D%2C%5B%22w%22%2C%5B144%2C48%2C144%2C96%5D%5D%2C%5B%22L%22%2C%5B144%2C184%2C0%5D%2C%7B%22label%22%3A%22iInt%20%3D%20A(nIn%2B%20-%20nIn-)%20%7C%7C%20iMax%22%2C%22_json_%22%3A44%7D%2C%5B%22iInt%20%3D%20A(nIn%2B%20-%20nIn-)%20%7C%7C%20iMax%22%5D%5D%2C%5B%22c%22%2C%5B256%2C96%2C0%5D%2C%7B%22name%22%3A%22Cint%22%2C%22c%22%3A%221u%22%2C%22_json_%22%3A45%7D%2C%5B%22nInt%22%2C%220%22%5D%5D%2C%5B%22g%22%2C%5B256%2C144%2C0%5D%2C%7B%22_json_%22%3A46%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B216%2C96%2C256%2C96%5D%5D%2C%5B%22w%22%2C%5B264%2C96%2C256%2C96%5D%5D%2C%5B%22w%22%2C%5B192%2C96%2C216%2C96%5D%5D%2C%5B%22L%22%2C%5B144%2C200%2C0%5D%2C%7B%22label%22%3A%22iMax%20%3D%20Gint%20*%2010%5E6%22%2C%22_json_%22%3A50%7D%2C%5B%22iMax%20%3D%20Gint%20*%2010%5E6%22%5D%5D%2C%5B%22L%22%2C%5B144%2C216%2C0%5D%2C%7B%22label%22%3A%22Slew%20rate%20%3D%2010v%2Fusec%22%2C%22_json_%22%3A51%7D%2C%5B%22Slew%20rate%20%3D%2010v%2Fusec%22%5D%5D%2C%5B%22view%22%2C-10%2C-63.19999999999999%2C1.5625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"}.

## MNA References
Joe Steinmeyer --- Professor Jacob White was one of the folks who wrote the book on numerical simulations for circuits in the 80's and 90's so I'm sure there's some genius stuff going on. If I'm looking at the right part it just looks like a **current source driving a resistor** with a **gain based off of the gain** (so he's summing some internal feedback)... Then whatever the output ends up being he assigns that to the appropriate supply. 

https://www.analog-electronics.eu/-electronics/modified-nodal-analysis/modified-nodal-analysis.xhtml 

https://ieeexplore.ieee.org/document/1015781 L. M. Wedepohl and L. Jackson, “Modified nodal analysis: an essential addition to electrical circuit theory and analysis,” Engineering Science and Education Journal, vol. 11, pp. 84–92, June 1992.

https://ieeexplore.ieee.org/document/662284 A formulation method for including ideal operational amplifiers in modified nodal analysis

https://ieeexplore.ieee.org/document/4321725 Development of Modified Nodal Analysis into a Pedagogical Tool

https://onlinelibrary.wiley.com/doi/pdf/10.1002/9781119078388.app2 Modified Nodal Analysis Stamps

Original paper:  
C. Ho, A. Ruehli, and P. Brennan. The modified nodal approach to network analysis. IEEE Transactions on Circuits and Systems, 22(6):504–509, June 1975.

Swarthmore:  
Intro: [https://lpsa.swarthmore.edu/Systems/Electrical/mna/MNA1.html](https://lpsa.swarthmore.edu/Systems/Electrical/mna/MNA1.html) (revised version)  
Opamps: [https://www.swarthmore.edu/NatSci/echeeve1/Ref/mna/MNA5.html](https://www.swarthmore.edu/NatSci/echeeve1/Ref/mna/MNA5.html). The equation for the op-amp is not in terms of the voltage at its output, but rather it specifies that the two input terminals are at the same potential.

Caveat: The two ideal op-amp assumptions (no input current, no potential difference at inputs) only hold for circuits with negative feedback.  Because of this, the MNA method as applied here can give erroneous results if negative feedback is not present.  This problem actually persists in many commercial circuit simulators -- you can hook up a circuit with the input terminals reversed (so that it would not operate properly in practice due to lack of negative feedback) and the simulation behaves as if there is no problem.  Note also that the output of the op-amp is not limited by any power supply -- this circuit will happily generate hundreds of volts.

Rules for Forming MNA Matrices without OpAmps: https://www.swarthmore.edu/NatSci/echeeve1/Ref/mna/MNAMatrixRulesOpAmp.html 

Simple example of MNA for just passives: https://lpsa.swarthmore.edu/Systems/Electrical/mna/MNA2.html 

Inspiration for Circuit Sandbox's simulation engine,    
https://www.analog-electronics.eu/analog-electronics/modified-nodal-analysis/modified-nodal-analysis.xhtml. This link may come alive in the future. In the meantime, here's a copy of the article, [MNA]({% link assets/modified-nodal-analysis.pdf %}){:target="_blank"}
