---
layout: article
title:  "Voltage divider"
author: Willy McAllister
comments: true
---

A very common and useful resistor circuit goes by the nickname *voltage divider*. We will work out how this circuit works, and we'll see where the nickname comes from. 

![Voltage divider]({{ site.baseurl }}{% link i/voltage_divider0.svg %}){: .centered :}

The voltage divider is really quite simple, and you could analyze it from scratch every time you come across one. But it is *so* common it is a good idea to prepare ahead of time so you can pop out the answer on the spot. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

A "voltage divider" is the pattern of two resistor in series, with an input voltage applied to both ends and an output voltage measured across one of the resistors.

The output voltage is a function of the input voltage and the ratio of resistor values,

$v_{out}  = v_{in}\,\dfrac{\text R2}{\text R1 + \text R2}$ 

----

A voltage divider looks like this,

![Voltage divider]({{ site.baseurl }}{% link i/voltage_divider1.svg %}){: .centered :}

It is a simple circuit with two resistors in series. One voltage is connected to the top and bottom, and another voltage is measured across one of the resistors. We think of the voltage across the top and bottom as the input voltage, while the voltage across the single resistor is the output. 

The little circles indicate the *ports* of the voltage divider, and they are connected to something not shown off to the right.

## The voltage divider equation

Our goal is to come up with an expression that relates output $v_{out}$ to input $v_{in}$. The answer will resemble this,

 $v_{out} = v_{in}\times(\text{something})$

This is a very simple series circuit so it won't take a lot of effort to figure out. 

Before we start, we make a very important assumption,

**Assume the current flowing out of the divider from its center node is zero.**

![Voltage divider assumption]({{ site.baseurl }}{% link i/voltage_divider2.svg %}){: .centered :}

We assume the output current from the voltage divider is $0$.  
(We check what happens if this assumption isn't true in the [next article]({{ site.baseurl }}{% link _articles/voltage-divider-design.md %})).
{: .caption :}

This is a good place to pause. You understand Ohm's Law and series resistors. See if you can come up with an expression for $v_{out}$ in terms of $v_{in}$ on your own.

Okay great. You've derived a voltage divider expression. Now I will have a try.

A good place to start is to find the current through $\text{R1}$ and $\text{R2}$. 

Here's the one tricky step in analyzing a voltage divider: Based on the assumption, we know $\text{R1}$ and $\text{R2}$ have the same current, so we can consider them to be in series. 

$i_{\text{1}} = i_{\text{2}}\qquad$ and for now let's just call this $i$.

Let's write an equation using Ohm's Law, $v = i\,\text{R}$, and what we know about resistors in series: [resistors in series]({{ site.baseurl }}{% link _articles/series-resistors.md %}) add.

$v_{in} = i \,(\text R1 + \text R2)$

Rearrange the equation to solve for $i$,

$i = v_{in}\,\dfrac{1}{\text R1 + \text R2}$

This tells us current $i$ in terms of $v_{in}$ and both resistors. 

Next, we write an expression for $v_{out}$ using Ohm's Law,

$v_{out} = i \, \text R2$

$i = \dfrac{v_{out}}{\text R2}$

We substitute for $i$ in the previous equation to get,

$\dfrac{v_{out}}{\text R2} = v_{in}\,\dfrac{1}{\text R1 + \text R2}$

and, after moving $\text R2$ over to the right side, we derive the voltage divider equation,

$v_{out} = v_{in}\,\dfrac{\text R2}{\text R1 + \text R2}$

### Resistor ratio

The resistor ratio term is always less than $1$. Resistance is always a positive number. So this is true for any values of $\text{R1}$ and $\text{R2}$. (Take a second to convince yourself of this.) 

Since the resistor ratio is less than $1$, that means $v_{out}$ is always less than $v_{in}$. Input voltage $v_{in}$ is divided down to $v_{out}$  by a fixed ratio determined by the resistor values. This is where the circuit gets its nickname: *voltage divider*.

### Example

**Find $v_{out}$ for this voltage divider**,

![Voltage divider 1k 3k 12V]({{ site.baseurl }}{% link i/voltage_divider3.svg %}){: .centered :}

We insert the input voltage and resistor values into the voltage divider equation. Remember, the *bottom* resistor, $\text{R2}$, appears in the numerator. 

$v_{out} = v_{in}\,\dfrac{\text R2}{\text R1 + \text R2}$

$v_{out}  = 12\,\text V\cdot\dfrac{3\,\text k\Omega}{1\,\text k\Omega + 3\,\text k\Omega}$

$v_{out}  = 12\,\text V\cdot\dfrac{3\,\text k\Omega}{4\,\text k\Omega}$

$v_{out}  = 12\,\text V\cdot\dfrac{3}{4} = 9 \,\text V$

Open this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B232%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C120%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C88%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C168%2C160%2C168%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C160%2C168%5D%5D%2C%5B%22g%22%2C%5B160%2C168%2C0%5D%2C%7B%22_json_%22%3A6%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C112%2C80%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C112%2C128%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C200%2C40%5D%5D%2C%5B%22r%22%2C%5B200%2C120%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%223k%22%2C%22_json_%22%3A10%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B112%2C80%2C0%5D%2C%7B%22name%22%3A%22vin%22%2C%22value%22%3A%22dc(12)%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B200%2C40%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%221k%22%2C%22_json_%22%3A12%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C3.16%2C15.792%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"} and click on **DC** in the menu to confirm the DC operating point.

We finish up with two optional steps, 

**Find the current and power.** 

Use Ohm's Law to find the current,

$i = \dfrac{v_{in}}{\text R1 + \text R2} = \dfrac{12\,\text V}{1\,\text k\Omega + 3\,\text k\Omega} = \dfrac{12\,\text V}{4\,\text k\Omega} = 3\,\text{mA}$ 

Knowing the current, we compute the power dissipated by our voltage divider,

$p = i\,v = 3\,\text{mA} \cdot 12\,\text V = 36\,\text{mW}$

Summary: Our voltage divider takes an input voltage (in this case $12\,\text V$, but it could be any value) and divides it down to create an output voltage $v_{out}$ that's $3/4$ of its input voltage. The $3/4$ ratio is determined by our choice of the two resistor values. A $3\,\text{mA}$ current flows through the voltage divider, causing it to dissipate $36\,\text{mW}$.

## Voltage divider practice problems

Do these practice problems two ways. First work out the answer analytically with pencil and paper. Then simulate your answer using the Circuit Sandbox.

### Problem 1

Let $v_{in}= 6\,\text V$, $\text R1=50\,\text k\Omega$, and $\text R2=10\,\text k\Omega$.

**Find $v_{out}$**

![Problem 1 Voltage divider 50k 10k 6V]({{ site.baseurl }}{% link i/voltage_divider4.svg %})

$v_{out} =$ \_\_\_\_\_\_\_\_\_ $\,\text V$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$

$v_{out}= 6\,\text V \cdot  \dfrac{10\,\text{k}\Omega}{10\,\text{k}\Omega+50\,\text{k}\Omega}$

$v_{out}= 6\,\text V \cdot  \dfrac{10\,\text{k}\Omega}{60\,\text{k}\Omega} = 6\,\text V \cdot \dfrac{1}{6}$

$v_{out} = 1\,\text V$  
{% endcapture %}{% include details.html %} 

[Simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B232%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C120%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C88%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C168%2C160%2C168%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C160%2C168%5D%5D%2C%5B%22g%22%2C%5B160%2C168%2C0%5D%2C%7B%22_json_%22%3A6%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C112%2C80%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C112%2C128%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C200%2C40%5D%5D%2C%5B%22r%22%2C%5B200%2C120%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%2210k%22%2C%22_json_%22%3A10%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B112%2C80%2C0%5D%2C%7B%22name%22%3A%22vin%22%2C%22value%22%3A%22dc(6)%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B200%2C40%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%2250k%22%2C%22_json_%22%3A12%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C3.16%2C15.792%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"} of Problem 1. Click on **DC** in the top menu to find the operating point.

### Problem 2

Let $\text R1=90\,\text k\Omega$, $\text R2=10\,\text k\Omega$, and $v_{out}= 1.5\,\text V$. 

**Find $v_{in}$.**

![Problem 2 Voltage divider 90k 10k 1.5Vout]({{ site.baseurl }}{% link i/voltage_divider5.svg %})

$v_{in} =$ \_\_\_\_\_\_\_\_\_ $\text V$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$

$1.5\,\text V= v_{in}\,  \dfrac{10\,\text{k}\Omega}{10\,\text{k}\Omega+90\,\text{k}\Omega}$

$1.5\,\text V= v_{in}\,  \dfrac{1}{10}$

$v_{in} = 10 \cdot 1.5\,\text V$

$v_{in} = 15\,\text V$  
{% endcapture %}{% include details.html %} 

[Simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B232%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C120%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C88%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C168%2C160%2C168%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C160%2C168%5D%5D%2C%5B%22g%22%2C%5B160%2C168%2C0%5D%2C%7B%22_json_%22%3A6%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C112%2C80%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C112%2C128%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C200%2C40%5D%5D%2C%5B%22r%22%2C%5B200%2C120%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%2210k%22%2C%22_json_%22%3A10%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B112%2C80%2C0%5D%2C%7B%22name%22%3A%22vin%22%2C%22value%22%3A%22dc()%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B200%2C40%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%2290k%22%2C%22_json_%22%3A12%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C3.16%2C15.792%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"} of Problem 2. Double-click on the voltage source and enter a voltage value for $v_{in}$ to get the output voltage you want. Repeat the **DC** analysis to confirm your choice.

### Problem 3

Let $v_{in}= 5\,\text V$, $v_{out}=2\,\text V$, and $\text R1=30\,\text k\Omega$.

**Find $\text R2$.**

![Problem 3 Voltage divider 30k 2Vin 1.5Vout]({{ site.baseurl }}{% link i/voltage_divider6.svg %})

$\text R2 =$ \_\_\_\_\_\_\_\_\_ $\Omega$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$

$2\,\text V  = 5 \,\text V \cdot \dfrac{\text{R2}}{30\,\text k\Omega + \text{R2}}$

$30\,\text k\Omega + \text R2 = \dfrac{5\,\text V}{2\,\text V} \, \text R2$

$30\,\text k\Omega = \left (\dfrac{5}{2} \,\text R2 \right ) - \text R2 = \dfrac{3}{2} \,\text R2$

$\text R2 = \dfrac{2}{3}\,30\,\text k\Omega$

$\text R2 = 20\,\text k\Omega = 20000 \,\Omega$

Check by plugging $\text R2$ back into the voltage divider equation,

$v_{out} = 5 \,\text V \cdot \dfrac{20\,\text k\Omega}{30\,\text k\Omega +20\,\text k\Omega} = 5 \cdot \dfrac{20}{50} = 2\,\text V \qquad \checkmark$  
{% endcapture %}{% include details.html %} 

[Simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B232%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C120%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C88%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C168%2C160%2C168%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C160%2C168%5D%5D%2C%5B%22g%22%2C%5B160%2C168%2C0%5D%2C%7B%22_json_%22%3A6%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C112%2C80%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C112%2C128%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C200%2C40%5D%5D%2C%5B%22r%22%2C%5B200%2C120%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%22%22%2C%22_json_%22%3A10%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B112%2C80%2C0%5D%2C%7B%22name%22%3A%22vin%22%2C%22value%22%3A%22dc(5)%22%2C%22_json_%22%3A11%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B200%2C40%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%2230k%22%2C%22_json_%22%3A12%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C3.156%2C15.792%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"} of Problem 3. Double-click on $\text R2$ and enter a resistance value to get the desired output voltage. Repeat the **DC** analysis to confirm your choice.

### Problem 4 - design challenge

Let $v_{in}= 1\,\text V$, $v_{out}=\dfrac{v_{in}}{2}$.

**Design a voltage divider that dissipates $10 \,\mu\text{W}$.**

![Problem 4 Design challenge 1Vin Vout=Vin/2]({{ site.baseurl }}{% link i/voltage_divider7.svg %})

$\text R1 =$ \_\_\_\_\_\_\_\_\_ $\Omega\qquad$   
$\text R2 =$ \_\_\_\_\_\_\_\_\_ $\Omega$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$

Let's start by figuring out what the relationship has to be between $\text R1$ and $\text R2$ to make $v_{out} = v_{in}/2$.

We'll do this symbolically,

$\dfrac{1}{2} v_{in} =  v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$

$\dfrac{1}{2} =  \dfrac{\text{R2}}{\text{R1} + \text{R2}}$

$\text{R1} + \text{R2} = 2\,\text R2$

$\text R1 = 2\,\text R2 - \text R2$

$\text R1 = \text R2$

The two resistors have the same value. We don't know what the value is, yet. Use the power constraint to discover the allowed current through the divider. Tip: When you calculate the power in a voltage divider, be sure to count the power dissipated by *both* resistors, not just the bottom one.

$p = i \cdot v\qquad$ formula for power in a resistor

$10\,\mu\text W = i \cdot v_{in} = i \cdot 1\,\text V$

$i = \dfrac{10\,\mu\text W}{1\,\text V} $

$i = 10 \,\mu\text A$

Given this current, plus the input voltage supplied by the problem statement, the top-to-bottom resistance of the divider must be,</p>

$\text R1+\text R2 = \dfrac{v}{i}$

$\text R1+\text R2 = \dfrac{1\,\text V}{10\,\mu\text A} = \dfrac{1}{10 \times 10^{-6}} = 1 \times 10^5 = 100\,\text k\Omega$

We know the resistors are the same value, and now we know their sum, so,

$\text R1 = \text R2 = 50 \,\text k\Omega$  
{% endcapture %}{% include details.html %} 

[Simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B200%2C40%2C168%2C40%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C152%2C40%5D%5D%2C%5B%22a%22%2C%5B152%2C40%2C0%5D%2C%7B%22color%22%3A%22magenta%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A2%7D%2C%5B%223%22%2C%222%22%5D%5D%2C%5B%22w%22%2C%5B232%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C104%2C232%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C120%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C88%2C200%2C104%5D%5D%2C%5B%22w%22%2C%5B200%2C168%2C160%2C168%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C160%2C168%5D%5D%2C%5B%22g%22%2C%5B160%2C168%2C0%5D%2C%7B%22_json_%22%3A9%7D%2C%5B%220%22%5D%5D%2C%5B%22w%22%2C%5B112%2C40%2C112%2C80%5D%5D%2C%5B%22w%22%2C%5B112%2C168%2C112%2C128%5D%5D%2C%5B%22r%22%2C%5B200%2C120%2C0%5D%2C%7B%22name%22%3A%22R2%22%2C%22r%22%3A%22%22%2C%22_json_%22%3A12%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22v%22%2C%5B112%2C80%2C0%5D%2C%7B%22name%22%3A%22vin%22%2C%22value%22%3A%22dc(1)%22%2C%22_json_%22%3A13%7D%2C%5B%223%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B200%2C40%2C0%5D%2C%7B%22name%22%3A%22R1%22%2C%22r%22%3A%22%22%2C%22_json_%22%3A14%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22view%22%2C3.16%2C15.792%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%220.01%22%2C%221000%22%5D%5D){:target="_blank"} of Problem 4. Double-click on both resistors and give them resistance values to achieve the design specifications: $v_{out} = v_{in}/2$ and $p = 10 \,\mu\text{W}$.

## What's in a nickname?

We mentioned the nickname of this circuit is a *voltage divider*. In many situations, that is exactly what it does. However, remember back at the beginning we made an assumption, that the current leaving the divider is zero, or very close to zero? Under certain conditions (that we cover in the [next article]({{ site.baseurl }}{% link _articles/voltage-divider-design.md %})), the actual output voltage might be slightly lower than the value predicted by the voltage divider equation. The lesson: Call the circuit by its nickname, but remember, it's *only* a nickname. 

## Summary
{:.no_toc}

We give the name "voltage divider" to a pattern of resistors that looks like this, with an input voltage applied to both ends, and an output voltage measured across one of the resistors.

![Voltage divider]({{ site.baseurl }}{% link i/voltage_divider0.svg %}){: .centered :}

The output voltage is a function of the input voltage and a ratio of resistor values,

$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$ 

where $\text{R2}$ is the resistor on the bottom of the divider.

The [next article]({{ site.baseurl }}{% link _articles/voltage-divider-design.md %}) covers some of the design subtleties of voltage dividers such as real-world resistor tolerance and non-zero output current.
