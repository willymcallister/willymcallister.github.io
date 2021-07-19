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

Open this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22v%22%2C%5B96%2C80%2C0%5D%2C%7B%22name%22%3A%22V1%22%2C%22value%22%3A%22dc(3.3)%22%2C%22_json_%22%3A0%7D%2C%5B%226%22%2C%220%22%5D%5D%2C%5B%22i%22%2C%5B296%2C128%2C2%5D%2C%7B%22name%22%3A%22I2%22%2C%22value%22%3A%22dc(2m)%22%2C%22_json_%22%3A1%7D%2C%5B%220%22%2C%227%22%5D%5D%2C%5B%22r%22%2C%5B208%2C80%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%22330%22%2C%22_json_%22%3A2%7D%2C%5B%227%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B184%2C72%2C5%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%22470%22%2C%22_json_%22%3A3%7D%2C%5B%227%22%2C%225%22%5D%5D%2C%5B%22w%22%2C%5B96%2C80%2C96%2C72%5D%5D%2C%5B%22w%22%2C%5B296%2C72%2C296%2C80%5D%5D%2C%5B%22g%22%2C%5B160%2C128%2C0%5D%2C%7B%22_json_%22%3A6%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B96%2C128%2C160%2C128%5D%5D%2C%5B%22a%22%2C%5B112%2C72%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A8%7D%2C%5B%226%22%2C%225%22%5D%5D%2C%5B%22w%22%2C%5B96%2C72%2C112%2C72%5D%5D%2C%5B%22w%22%2C%5B136%2C72%2C128%2C72%5D%5D%2C%5B%22w%22%2C%5B160%2C128%2C208%2C128%5D%5D%2C%5B%22w%22%2C%5B296%2C128%2C208%2C128%5D%5D%2C%5B%22w%22%2C%5B208%2C80%2C208%2C72%5D%5D%2C%5B%22w%22%2C%5B184%2C72%2C208%2C72%5D%5D%2C%5B%22w%22%2C%5B296%2C72%2C208%2C72%5D%5D%2C%5B%22v%22%2C%5B96%2C200%2C0%5D%2C%7B%22name%22%3A%22V1b%22%2C%22value%22%3A%22dc(3.3)%22%2C%22_json_%22%3A16%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B216%2C192%2C3%5D%2C%7B%22name%22%3A%22R2b%22%2C%22r%22%3A%221%22%2C%22_json_%22%3A17%7D%2C%5B%224%22%2C%221%22%5D%5D%2C%5B%22r%22%2C%5B184%2C192%2C5%5D%2C%7B%22name%22%3A%22R1b%22%2C%22r%22%3A%22470%22%2C%22_json_%22%3A18%7D%2C%5B%224%22%2C%222%22%5D%5D%2C%5B%22w%22%2C%5B96%2C200%2C96%2C192%5D%5D%2C%5B%22g%22%2C%5B160%2C248%2C0%5D%2C%7B%22_json_%22%3A20%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B96%2C248%2C160%2C248%5D%5D%2C%5B%22a%22%2C%5B112%2C192%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A22%7D%2C%5B%223%22%2C%222%22%5D%5D%2C%5B%22w%22%2C%5B96%2C192%2C112%2C192%5D%5D%2C%5B%22w%22%2C%5B136%2C192%2C128%2C192%5D%5D%2C%5B%22w%22%2C%5B296%2C248%2C160%2C248%5D%5D%2C%5B%22v%22%2C%5B296%2C200%2C4%5D%2C%7B%22name%22%3A%22V2%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A26%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B184%2C192%2C216%2C192%5D%5D%2C%5B%22w%22%2C%5B264%2C192%2C296%2C192%5D%5D%2C%5B%22w%22%2C%5B296%2C192%2C296%2C200%5D%5D%2C%5B%22view%22%2C-8.8%2C46.74%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"}. The top circuit is the original example. The bottom circuit shows the Norton to Thévenin source transformation, *but $\text R2\text b$ and $\text V2$ don't have the right values*. You have to fix them! Click on **DC** in the menu bar to perform a DC analysis. 

### Design challenge 

Double-click on $\text R2\text b$ and $\text V2$ and fill in the Thévenin equivalent values you calculated above. Then run another **DC** analysis. Is $i$ the same in both schematics?

Here's the circuit with the correct values filled in,
[show answer](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B296%2C192%2C296%2C200%5D%5D%2C%5B%22w%22%2C%5B264%2C192%2C296%2C192%5D%5D%2C%5B%22w%22%2C%5B184%2C192%2C216%2C192%5D%5D%2C%5B%22v%22%2C%5B296%2C200%2C4%5D%2C%7B%22name%22%3A%22V2%22%2C%22value%22%3A%22dc(660m)%22%2C%22_json_%22%3A3%7D%2C%5B%225%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B296%2C248%2C160%2C248%5D%5D%2C%5B%22w%22%2C%5B136%2C192%2C128%2C192%5D%5D%2C%5B%22w%22%2C%5B96%2C192%2C112%2C192%5D%5D%2C%5B%22a%22%2C%5B112%2C192%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A7%7D%2C%5B%224%22%2C%227%22%5D%5D%2C%5B%22w%22%2C%5B96%2C248%2C160%2C248%5D%5D%2C%5B%22g%22%2C%5B160%2C248%2C0%5D%2C%7B%22_json_%22%3A9%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B96%2C200%2C96%2C192%5D%5D%2C%5B%22r%22%2C%5B184%2C192%2C5%5D%2C%7B%22name%22%3A%22R1b%22%2C%22r%22%3A%22470%22%2C%22_json_%22%3A11%7D%2C%5B%226%22%2C%227%22%5D%5D%2C%5B%22r%22%2C%5B216%2C192%2C3%5D%2C%7B%22name%22%3A%22R2b%22%2C%22r%22%3A%22330%22%2C%22_json_%22%3A12%7D%2C%5B%226%22%2C%225%22%5D%5D%2C%5B%22v%22%2C%5B96%2C200%2C0%5D%2C%7B%22name%22%3A%22V1b%22%2C%22value%22%3A%22dc(3.3)%22%2C%22_json_%22%3A13%7D%2C%5B%224%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B296%2C72%2C208%2C72%5D%5D%2C%5B%22w%22%2C%5B184%2C72%2C208%2C72%5D%5D%2C%5B%22w%22%2C%5B208%2C80%2C208%2C72%5D%5D%2C%5B%22w%22%2C%5B296%2C128%2C208%2C128%5D%5D%2C%5B%22w%22%2C%5B160%2C128%2C208%2C128%5D%5D%2C%5B%22w%22%2C%5B136%2C72%2C128%2C72%5D%5D%2C%5B%22w%22%2C%5B96%2C72%2C112%2C72%5D%5D%2C%5B%22a%22%2C%5B112%2C72%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A21%7D%2C%5B%221%22%2C%223%22%5D%5D%2C%5B%22w%22%2C%5B96%2C128%2C160%2C128%5D%5D%2C%5B%22g%22%2C%5B160%2C128%2C0%5D%2C%7B%22_json_%22%3A23%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B296%2C72%2C296%2C80%5D%5D%2C%5B%22w%22%2C%5B96%2C80%2C96%2C72%5D%5D%2C%5B%22r%22%2C%5B184%2C72%2C5%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%22470%22%2C%22_json_%22%3A26%7D%2C%5B%222%22%2C%223%22%5D%5D%2C%5B%22r%22%2C%5B208%2C80%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%22330%22%2C%22_json_%22%3A27%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22i%22%2C%5B296%2C128%2C2%5D%2C%7B%22name%22%3A%22I2%22%2C%22value%22%3A%22dc(2m)%22%2C%22_json_%22%3A28%7D%2C%5B%220%22%2C%222%22%5D%5D%2C%5B%22v%22%2C%5B96%2C80%2C0%5D%2C%7B%22name%22%3A%22V1%22%2C%22value%22%3A%22dc(3.3)%22%2C%22_json_%22%3A29%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22view%22%2C-8.8%2C46.74%2C1.953125%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"}.  

### Things to notice

* $\text R1$ and $\text R1\text b$ have the same current and the same voltage. That is what it means for these two circuits to be equivalent from the viewpoint of the chosen port. 

* Notice the current in $\text V2$ is *not* the same as current $\text I2$. That's okay, because our focus is on the current and voltage for $\text R1$ and $\text R1\text b$.

Is source transformation easier or harder than analyzing by Node Voltage or Mesh Current methods? What do you think? We simplified the circuit down to something we could solve with one application of Ohm's Law. Compare that to how you would solve this circuit with Node Voltage or Mesh Current.

In the next two articles we learn how to simplify any complex network of many resistors and sources down to a *Thévenin equivalent* or *Norton equivalent*.

