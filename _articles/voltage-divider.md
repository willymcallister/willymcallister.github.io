---
layout: article
title:  "Voltage divider"
author: Willy McAllister
comments: true
---

A very common and useful resistor circuit goes by the nickname *voltage divider*. We will work out how this circuit works, and we'll see where the nickname comes from. 

![Voltage divider](https://ka-perseus-images.s3.amazonaws.com/be63ffad46329086809b588c919bd785a275e138.svg){: .centered }

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

## What is a voltage divider?

A voltage divider looks like this,

![Voltage divider](https://ka-perseus-images.s3.amazonaws.com/04bfcddbc8a53a47703d54cb8b3a9e066ed04a64.svg){: .centered }

It is a simple circuit with two resistors in series. One voltage is connected to the top and bottom, and another voltage is measured across one of the resistors. We think of the voltage across the top and bottom as the input voltage, while the voltage across the single resistor is the output. 

The little circles indicate the *ports* of the voltage divider, and they are connected to something we can't see right now.

## The voltage divider equation

Our goal is to come up with an expression that relates output $v_{out}$ to input $v_{in}$. The answer will resemble this,

 $v_{out} = v_{in}\times(\text{something})$

This is a very simple series circuit, so it won't take a lot of effort to figure that out. 

Before we start, we make this important assumption,

**Assume the current flowing out of the divider from its center node is zero.**

![](https://ka-perseus-images.s3.amazonaws.com/c14a9b27126f23e0ba9188500aab8a3fe3938aa0.svg){: .centered }

(Before we are done we will check what happens if this zero-current assumption isn't true).

----

**On your own:** This is a good place to pause. Use your understanding of Ohm's Law and series resistors to come up with an expression for $v_{out}$ in terms of $v_{in}$ on your own. Then read on.

----

A good place to start is to find the current through $\text{R1}$ and $\text{R2}$. 

Here's the one tricky step in analyzing the voltage divider: Based on the assumption, we know $\text{R1}$ and $\text{R2}$ have the same current, so we can consider them to be in series. 

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

![](https://ka-perseus-images.s3.amazonaws.com/5d860df1a6275a4013ffebb791ca2c003e77b53f.svg){: .centered }

We insert the input voltage and resistor values into the voltage divider equation. Remember, the *bottom* resistor, $\text{R2}$, appears in the numerator. 

$v_{out} = v_{in}\,\dfrac{\text R2}{\text R1 + \text R2}$

$v_{out}  = 12\,\text V\cdot\dfrac{3\,\text k\Omega}{1\,\text k\Omega + 3\,\text k\Omega}$

$v_{out}  = 12\,\text V\cdot\dfrac{3\,\text k\Omega}{4\,\text k\Omega}$

$v_{out}  = 12\,\text V\cdot\dfrac{3}{4} = 9 \,\text V$

>[Circuit sandbox model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"1k","_json_":0},["2","1"]],["v",[112,80,0],{"name":"vin","value":"dc(12)","_json_":1},["2","0"]],["r",[200,120,0],{"name":"R2","r":"3k","_json_":2},["1","0"]],["w",[112,40,200,40]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":6},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["w",[200,88,200,104]],["w",[200,120,200,104]],["w",[200,104,232,104]],["w",[232,104,232,104]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]). Open the link and click on DC in the top menu to find the DC operating point.

We finish up with two optional steps: **Figure out the current and power.** 

$i = \dfrac{v_{in}}{\text R1 + \text R2} = \dfrac{12\,\text V}{1\,\text k\Omega + 3\,\text k\Omega} = \dfrac{12\,\text V}{4\,\text k\Omega} = 3\,\text{mA}$ 

Knowing the current, we can compute the power being dissipated by our voltage divider,

$p = i\,v = 3\,\text{mA} \cdot 12\,\text V = 36\,\text{mW}$

Summary: Our voltage divider takes an input voltage (in this case $12\,\text V$, but it could be any value) and scales it down to create an output voltage that's $3/4$ of its input voltage. The $3/4$ ratio is determined by our choice of the two resistors. 

A current of $3\,\text{mA}$ flows down through the voltage divider, so it dissipates $12\,\text V \times 3\,\text{mA} = 36\,\text{mW}$.

## Voltage divider practice problems

Do these practice problems two ways. First work out the answer analytically with pencil and paper. Then simulate your answer using the Circuit Sandbox.

### Problem 1

Let $v_{in}= 6\,\text V$, $\text R1=50\,\text k\Omega$, and $\text R2=10\,\text k\Omega$.

**Find $v_{out}$**

![Problem 1](https://ka-perseus-images.s3.amazonaws.com/21caa5a9980ced50f52d88c24c6620b8c8afce5b.svg)

$v_{out} = \quad$ \_\_\_\_\_\_ $\,\text V$

<details>
<summary>show answer</summary>
<p>$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$</p> 

<p>$v_{out}= 6\,\text V \cdot  \dfrac{10\,\text{k}\Omega}{10\,\text{k}\Omega+50\,\text{k}\Omega}$</p>

<p>$v_{out}= 6\,\text V \cdot  \dfrac{10\,\text{k}\Omega}{60\,\text{k}\Omega} = 6\,\text V \cdot \dfrac{1}{6}$</p>

<p>$v_{out} = 1\,\text V$</p>
</details>

[Circuit sandbox model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"50k","_json_":0},["2","1"]],["v",[112,80,0],{"name":"vin","value":"dc(6)","_json_":1},["2","0"]],["r",[200,120,0],{"name":"R2","r":"10k","_json_":2},["1","0"]],["w",[112,40,200,40]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":6},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["w",[200,88,200,104]],["w",[200,120,200,104]],["w",[200,104,232,104]],["w",[232,104,232,104]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]) of Problem 1. Click on DC in the top menu to find the DC operating point.

### Problem 2

Let $\text R1=90\,\text k\Omega$, $\text R2=10\,\text k\Omega$, and $v_{out}= 1.5\,\text V$. 

**Find $v_{in}$**

![Problem 2](https://ka-perseus-images.s3.amazonaws.com/3df9b43e3a500314dfe32d0d511951fe968aa127.svg)

$v_{in} = \quad$ \_\_\_\_\_\_ $\text V$

<details>
<summary>show answer</summary>
<p>$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$</p>

<p>$1.5\,\text V= v_{in}\,  \dfrac{10\,\text{k}\Omega}{10\,\text{k}\Omega+90\,\text{k}\Omega}$</p>

<p>$1.5\,\text V= v_{in}\,  \dfrac{1}{10}$</p>

<p>$v_{in} = 10 \cdot 1.5\,\text V$</p>

<p>$v_{in} = 15\,\text V$</p>
</details>

[Circuit sandbox model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"90k","_json_":0},["2","1"]],["v",[112,80,0],{"name":"vin","value":"dc()","_json_":1},["2","0"]],["r",[200,120,0],{"name":"R2","r":"10k","_json_":2},["1","0"]],["w",[112,40,200,40]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":6},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["w",[200,88,200,104]],["w",[200,120,200,104]],["w",[200,104,232,104]],["w",[232,104,232,104]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]) of Problem 2. Double-click on the voltage source and enter a voltage value for $v_{in}$ to get the output voltage you want.

### Problem 3

Let $v_{in}= 5\,\text V$, $v_{out}=2\,\text V$, and $\text R1=30\,\text k\Omega$.

**Find $\text R2$**

![Problem 3](https://ka-perseus-images.s3.amazonaws.com/e02ca45c0125b430d0a3de7954e8c17f15f3a6b1.svg)

$\text R2 = \quad$ \_\_\_\_\_\_ $\Omega$

<details>
<summary>show answer</summary>
<p>$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$ </p>

<p>$2\,\text V  = 5 \,\text V \cdot \dfrac{\text{R2}}{30\,\text k\Omega + \text{R2}}$ </p>

<p>$30\,\text k\Omega + \text R2 = \dfrac{5\,\text V}{2\,\text V} \, \text R2$</p>

<p>$30\,\text k\Omega = \left (\dfrac{5}{2} \,\text R2 \right ) - \text R2 = \dfrac{3}{2} \,\text R2$</p>

<p>$\text R2 = \dfrac{2}{3}\,30\,\text k\Omega$</p>

<p>$\text R2 = 20\,\text k\Omega = 20000 \,\Omega$</p>

<p>Check by plugging $\text R2$ back into the voltage divider equation: </p>

<p>$v_{out} = 5 \,\text V \cdot \dfrac{20\,\text k\Omega}{30\,\text k\Omega +20\,\text k\Omega} = 5 \cdot \dfrac{20}{50} = 2\,\text V \qquad \checkmark$</p>
</details>

[Circuit sandbox model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"30k","_json_":0},["2","1"]],["v",[112,80,0],{"name":"vin","value":"dc(5)","_json_":1},["2","0"]],["r",[200,120,0],{"name":"R2","r":"","_json_":2},["1","0"]],["w",[112,40,200,40]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":6},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["w",[200,88,200,104]],["w",[200,120,200,104]],["w",[200,104,232,104]],["w",[232,104,232,104]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]) of Problem 3. Double-click on $\text R2$ and enter a resistance value to get the desired output voltage.

### Problem 4 - design challenge

Let $v_{in}= 1\,\text V$, $v_{out}=\dfrac{v_{in}}{2}$.

**Design a voltage divider that dissipates $10 \,\mu\text{W}$.**

![Problem 4](https://ka-perseus-images.s3.amazonaws.com/42e57a35d13efc179ef124f9446e850ed7f156d2.svg)

$\text R1 = \quad$ \_\_\_\_\_\_ $\Omega\qquad$   
$\text R2 = \quad$ \_\_\_\_\_\_ $\Omega$

<details>
<summary>show answer</summary>
<p>$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$ </p>

<p>Let's start by figuring out what the relationship has to be between $\text R1$ and $\text R2$ to make $v_{out} = v_{in}/2$. </p>

<p>We'll do this symbolically,</p>

<p>$\dfrac{1}{2} v_{in} =  v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$</p>

<p>$\dfrac{1}{2} =  \dfrac{\text{R2}}{\text{R1} + \text{R2}}$</p>

<p>$\text{R1} + \text{R2} = 2\,\text R2$</p>

<p>$\text R1 = 2\,\text R2 - \text R2$</p>

<p>$\text R1 = \text R2$ </p>

<p>The two resistors have the same value. We don't know what the value is, yet. Use the power constraint to discover the allowed current through the divider. Tip: When you calculate the power in a voltage divider, be sure to count the power dissipated by <em>both</em> resistors, not just the bottom one.</p>

<p>$p = i \cdot v\qquad$ formula for power in a resistor</p>

<p>$10\,\mu\text W = i \cdot v_{in} = i \cdot 1\,\text V$</p>

<p>$i = \dfrac{10\,\mu\text W}{1\,\text V} $</p>

<p>$i = 10 \,\mu\text A$</p>

<p>Given this current, plus the input voltage supplied by the problem statement, the top-to-bottom resistance of the divider must be,</p>

<p>$\text R1+\text R2 = \dfrac{v}{i}$</p>

<p>$\text R1+\text R2 = \dfrac{1\,\text V}{10\,\mu\text A} = \dfrac{1}{10 \times 10^{-6}} = 1 \times 10^5 = 100\,\text k\Omega$</p>

<p>We know the resistors are the same value, and now we know their sum, so,</p>

<p>$\text R1 = \text R2 = 50 \,\text k\Omega$</p>
</details>

[Circuit sandbox model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"","_json_":0},["1","3"]],["v",[112,80,0],{"name":"vin","value":"dc(1)","_json_":1},["2","0"]],["r",[200,120,0],{"name":"R2","r":"","_json_":2},["3","0"]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":5},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["w",[200,88,200,104]],["w",[200,120,200,104]],["w",[200,104,232,104]],["w",[232,104,232,104]],["a",[152,40,0],{"color":"magenta","offset":"0","_json_":12},["2","1"]],["w",[112,40,152,40]],["w",[200,40,168,40]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]) of Problem 4. Double-click on both resistors and give them resistance values to achieve the design specifications: $v_{out} = v_{in}/2$ and $p = 10 \,\mu\text{W}$.

## Review the assumption about current (advanced) 

>The last half of this article looks at how things can go wrong with a voltage divider.  

A voltage divider doesn't do anything useful unless its output is connected to something. You need to keep in mind what happens when a voltage divider is connected to a load.

Remember way back at the start we made an assumption? We assumed the current flowing away from the node between the two resistors was $0$. That let us treat $\text{R1}$ and $\text{R2}$ as if they were in series, and we developed the voltage divider equation. Let's check what happens if that assumption is not true. 

### Operating the voltage divider near mid-range

To start this discussion, we set up a voltage divider with $\text{R1} = \text{R2}$. When the resistors are the same value the expected $v_{out}$ of the voltage divider is half the input voltage, $v_{out} = 0.5\,v_{in}$. 

If we connect a load to the divider, represented by resistor $\text R_{\text L}$, this will cause some current $i_\text L$ to flow away from the center node, heading to the right through $R_\text L$. 

![Voltage divider in mid-range]({{ site.baseurl }}{% link i/voltage-divider1.svg %}){: .centered :}

Here's the question: Does the voltage divider still work, or does our voltage divider story collapse? 

Resistor $\text R_\text L$ acts as a *load* on the output of the voltage divider, meaning it causes a current $i_\text L$ to flow. The presence of $\text R_\text L$ means $\text{R1}$ and $\text{R2}$ are no longer strictly in series. We don't want $i_\text L$ to be very large (we need it to be much smaller than $i_1$ or $i_2$), so let's make $\text{R}\_{\text L}$ fairly large. Let $\text R_\text L$ be ten times bigger than $\text{R2}$,

$\text{R}_{\text L} = 10\,\text{R2}$

With this high-resistance load resistor, take a look at what happens to the output voltage. 

$\text{R2}$ and $\text{R}\_{\text L}$ are in parallel. Combine the two parallel resistors using the parallel resistor formula,  

$\text{R2} \,\|\|\, \text{R}\_{\text L} = \dfrac{\text{R2}\cdot\text{R}_{\text L}}{\text{R2}+\text{R}\_{\text L}}$

<details>
<summary>parallel resistor formula</summary>
<p>Two resistors, $\text R_x$ and $\text R_y$ are in parallel if they share the same two nodes. Two parallel resistors can be combined to get an equivalent resistor like this, </p>

<p>$\text{R}_{parallel} = \dfrac{\text{R}_x\cdot\text{R}_y}{\text{R}_x+\text{R}_y} $</p>

<p>The ratio of the product over the sum.</p>
</details>

<details>
<summary>vertical bars</summary>
<p>The pair of vertical bars $||$ is just a shorthand notation for "in parallel with."</p>

<p>$\text{R2} \,||\, \text{R}_{\text L}$ means "$\text{R2}$ in parallel with $\text{R}_{\text L}$."</p>
</details>

$\dfrac{\text{R2}\cdot10\,\text{R2}}{\text{R2}+10\,\text{R2}} = \dfrac{10}{11}\,\text{R2} = 0.91\,\text{R2}$

Here is a redrawn version of our loaded voltage divider, showing the equivalent resistance of $\text R2$ in parallel with $\text R_\text L$,

![](https://ka-perseus-images.s3.amazonaws.com/63b5ae1b7a5a3f4723ba6ceb9935e3175cb22845.svg){: .centered }

The $10{\times}$ load resistor reduces the resistance at the bottom of the divider by about $9\%$. 

How does this additional load change the output voltage? Without the load, the expected output is $0.5\,v_{in}$. Now we figure out the output voltage in the presence of the load resistor. 

$v_{out} = v_{in}\, \dfrac{0.91\, \text R2}{\text R1 + 0.91\, \text R2} $

We designed our divider with $\text R1 = \text R2$, so all the $\text R$'s cancel out,

$v_{out} = v_{in}\, \dfrac{0.91}{1 + 0.91}$

$v_{out} = v_{in}\, \dfrac{0.91}{1 .91} = 0.48\,v_{in}$

The output voltage drops from $50\%$ to $48\%$ of the input voltage. How big an error is this?

$\dfrac{0.48}{0.50} = 0.96 = 96\%$

The actual output of the voltage divider is low by $4\%$ compared to the designed voltage. Notice how the $4\%$ voltage error is significantly less than the $9\%$ resistance change. 

Does a few $\%$ error matter? That is for you alone to decide. It depends on how accurate the voltage divider needs to be for your application. 

[Circuit sandbox model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"10k","_json_":0},["2","4"]],["v",[112,80,0],{"name":"vin","value":"dc(6)","_json_":1},["3","0"]],["r",[200,120,0],{"name":"R2","r":"10k","_json_":2},["4","0"]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":5},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["a",[152,40,0],{"color":"magenta","offset":"0","_json_":8},["3","2"]],["w",[112,40,152,40]],["w",[200,40,168,40]],["r",[288,120,0],{"name":"RL","r":"100k","_json_":11},["1","0"]],["w",[200,168,288,168]],["w",[288,120,288,104]],["w",[312,104,288,104]],["w",[200,88,200,120]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]) of the loaded voltage divider. Run a DC operating point on the circuit as-is. Then connect a wire from the top of the load resistor to the center node of the voltage divider. Run the DC operating point simulation again. How much does the output voltage change. Explore: Change the value of $\text R_\text L$ and see how much the output voltage changes.

The nugget to tuck away from this analysis:  
If the effective load resistance is $10{\times}$ greater than the bottom resistor in the voltage divider, you get roughly "one hand" $\%$ error $(4-5\%)$ in the output voltage. This result is valid when the output voltage is near the center of its range (in the neighborhood of $v_{\text{in}}/2$).

### Operating the voltage divider near extremes

If the voltage divider operates near its extremes, with the output voltage close to either $v_{\text{in}}$ or $0$, the percentage error will be different. To find out how much different, we repeat the analysis with the output voltage set to $90\%$ and $10\%$ of the divider range. We keep the load resistor ten times the bottom resistor, so the parallel combination of $\text R2$ and $\text R_{\text L}$ is still $0.91\,\text R2$.

#### Case 1: $v_{out} = 90\%$ of $v_{in}$

Let the design target for $v_{out}$ be $90\%$ of $v_{in}$, so $v_{out}$ is really high in its range.

First, we need to design a voltage divider to give us a $90\%$ output. We do this by figuring out $\text R2$ in terms of $\text R1$ for a $90\%$ voltage divider,

$\dfrac{v_{out}}{v_{in}} = 0.90 = \dfrac{\text R2}{\text R1 + \text R2}$

$0.90 \,(\text R1 + \text R2) = \text R2$

$0.90 \,\text R1 = \text R2 - 0.90\,\text R2$

$0.90 \,\text R1 = 0.10 \,\text R2$

$\text R2 = \dfrac{0.90\,\text R1}{0.10} = 9\,\text R1$

That means $\text R2$, the resistor on the bottom, is $9$ times bigger than $\text R1$. 

Now we load the circuit with $\text R_\text L$ and see how the output voltage changes. The expression we derived above for the loaded voltage divider is, 

$\dfrac{v_{out}}{v_{in}}  = \dfrac{0.91\, \text R2}{\text R1 + 0.91\, \text R2} $

Last time we had $\text R2 =\text R1$, but this time $\text R2 = 9\,\text R1$,

$\dfrac{v_{out}}{v_{in}} = \dfrac{0.91 \,(9\,\text R1)}{\text R1 + \text 0.91\,(9\,\text R1)}$

All the $\text R1$'s cancel out, leaving,

$\dfrac{v_{out}}{v_{in}} = \dfrac{0.91 \,(9)}{1 + 0.91\,(9)} = \dfrac{8.19}{9.19} = 0.89$

The actual output voltage is $89\%$ of $v_{in}$ instead of the design goal of $90\%$. So the actual voltage is lower than the expected by only $1\%$.

[Circuit sandbox model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"1.111k","_json_":0},["2","4"]],["v",[112,80,0],{"name":"vin","value":"dc(10)","_json_":1},["3","0"]],["r",[200,120,0],{"name":"R2","r":"10k","_json_":2},["4","0"]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":5},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["a",[152,40,0],{"color":"magenta","offset":"0","_json_":8},["3","2"]],["w",[112,40,152,40]],["w",[200,40,168,40]],["r",[288,120,0],{"name":"RL","r":"100k","_json_":11},["1","0"]],["w",[200,168,288,168]],["w",[288,120,288,104]],["w",[312,104,288,104]],["w",[200,88,200,120]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]) of  $v_\text{out} = 90\%$ of $v_\text{in}$. Perform a DC operating point simulation of the circuit as-is. Then connect a wire from the load resistor to the voltage divider. Perform another DC operating point. 

#### Case 2: $v_{out} = 10\%$ of $v_{in}$

Let $v_{out} = 10\%$ of $v_{in}$, so $v_{out}$ is really low in its range. 

Express $\text R1$ in terms of $\text R2$ for a $10\%$ voltage divider,

$\dfrac{v_{out}}{v_{in}} = 0.10 = \dfrac{\text R2}{\text R1 + \text R2}$

$0.10 \,(\text R1 + \text R2) = \text R2$

$0.10 \,\text R1 = \text R2 - 0.10\,\text R2$

$0.10 \,\text R1 = 0.90 \,\text R2$

$\text R1 = \dfrac{0.90\,\text R2}{0.10} = 9\,\text R2$

$\text R1$, the resistor on the top, is $9$ times bigger than $\text R2$. 

Now we load the circuit with $\text R_\text L$ and see what happens to the output voltage. The expression for the loaded voltage divider is still, 

$\dfrac{v_{out}}{v_{in}}  = \dfrac{0.91\, \text R2}{\text R1 + 0.91\, \text R2} $

We replace $\text R1$ with $9\,\text R2$,

$\dfrac{v_{out}}{v_{in}} = \dfrac{0.91 \,\text R2}{9\,\text R2 + \text 0.91\,\text R2}$

All the $\text R2$'s cancel out,

$\dfrac{v_{out}}{v_{in}} = \dfrac{0.91}{9 + 1} = \dfrac{0.91}{10} = 0.091$

The actual output voltage is $9.1\%$ of $v_{in}$ instead of the expected $10\%$. 

So the actual voltage is lower than expected by about $\dfrac{10\% - 9.1\%}{10\%} = 9\%$. 

This error is pretty big, twice as large as the error of the loaded mid-range divider.

[Circuit sandbox model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["r",[200,40,0],{"name":"R1","r":"90k","_json_":0},["2","4"]],["v",[112,80,0],{"name":"vin","value":"dc(10)","_json_":1},["3","0"]],["r",[200,120,0],{"name":"R2","r":"10k","_json_":2},["4","0"]],["w",[112,168,112,128]],["w",[112,40,112,80]],["g",[160,168,0],{"_json_":5},["0"]],["w",[112,168,160,168]],["w",[200,168,160,168]],["a",[152,40,0],{"color":"magenta","offset":"0","_json_":8},["3","2"]],["w",[112,40,152,40]],["w",[200,40,168,40]],["r",[288,120,0],{"name":"RL","r":"100k","_json_":11},["1","0"]],["w",[200,168,288,168]],["w",[288,120,288,104]],["w",[312,104,288,104]],["w",[200,88,200,120]],["view",0,0,2,"50","10","1G",null,"100","0.01","1000"]]) of the voltage divider at $10\%$ of $v_\text{in}$. Run a DC operating point. Then add a wire to connect the load resistor to the divider. Run the DC operating point again. How much does the divider output change with the load?

### Lessons from a loaded voltage divider

If you have a $10\times$ $\text R2$ load resistor drawing current from a voltage divider,

* Near mid-range, the output voltage is reduced by about $5\%$.

* Near the top of its range, the error is much less, around $1\%$. 

* Near the bottom of its range, the error roughly doubles compared to mid-range. The output voltage is $9\%$ lower than expected.


### Controlling error in a voltage divider

If your design requires the error to be significantly smaller, the load needs to be much larger than $10\times$ $\text{R2}$, like an additional $10{\times}$  or more. You can get an additional $10{\times}$ two ways. Increase the load resistance. Or, redesign the voltage divider to have smaller $\text{R1}$ and $\text{R2}$, (at the cost of more power dissipated by the voltage divider). 

### Real-world resistor tolerance impacts accuracy 

Real-world resistors always have a $\pm$ tolerance on their value. If the accuracy of the voltage divider is critical to your application, use resistors with tight tolerances. Check for acceptable performance by analyzing the voltage divider at the anticipated tolerance extremes.

## What's in a nickname?

We mentioned the nickname of this circuit is a *voltage divider*. In many situations, that is exactly what it does. However, we showed that under certain conditions when there is a load on the divider, the actual output voltage is slightly lower than the value predicted by the voltage divider equation. The lesson: Call a circuit by its nickname; just remember that it's *only* a nickname. 

## Summary
{:.no_toc}

We give the name "voltage divider" to a pattern of resistors that looks like this, with an input voltage applied to both ends, and an output voltage measured across one of the resistors.

![Voltage divider](https://ka-perseus-images.s3.amazonaws.com/be63ffad46329086809b588c919bd785a275e138.svg){: .centered }

The output voltage is a function of the input voltage and a ratio of resistor values,

$v_{out}  = v_{in}\,\dfrac{\text{R2}}{\text{R1} + \text{R2}}$ 

where $\text{R2}$ is the resistor on the bottom of the divider.
