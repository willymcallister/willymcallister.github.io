---
layout: article
title:  "Inductor i-v equation in action"
author: Willy McAllister
comments: true
---

The inductor is one of the [ideal circuit elements]({{ site.baseurl }}{% link _articles/ideal-elements-and-sources.md %}#inductor). We learn more about how an inductor behaves by looking closely at its $i$-$v$ equation.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The derivative form and integral form of the inductor $i$-$v$ equation are,

$v = \text L\,\dfrac{di}{dt}\qquad$ and $\quad \displaystyle i = \dfrac1{\text L}\, \int_{\,0}^{\,T} v\,\text dt + i_0$

* We learn why current in an inductor does not change instantaneously.
* We learn when an inductor acts like a short circuit (if its current is constant).


---

## Inductor $i$-$v$ equations

![](https://ka-perseus-images.s3.amazonaws.com/88daa30b2015bbaab75bc94874bdeab712104f74.svg){: .centered :}{: height="200px"}

$v = \text L\,\dfrac{di}{dt}\quad$ and $\quad\displaystyle i = \dfrac1{\text L}\, \int_{\,0}^{\,T} v\,\text dt + i_0$    

These are the derivative form and integral form of the inductor  equations.

$\text L$ is the *inductance*, a physical property of the inductor.  
$\text L$ is the scale factor between $v$ and $di/dt$.  
$\text L$ tells you how much $v$ gets generated for a given amount of $di/dt$.  
$i_0$ is the initial current flowing in the inductor, at $t=0$. 

<details>
<summary>calculus notation: $di/dt$</summary>
<p>$v = \text L\,\dfrac{di}{dt}$</p>

<p>$d$ is calculus notation for 'differential', or "a tiny change in ...". For example, $dt$ means 'a tiny change in time'. When you see it in a ratio, like $di/dt$, that means, "a tiny change in $i$ (current) for each tiny change in time" An expression like $di/dt$ is called a <a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-derivative-intro/ab-defining-derivative/v/calculus-derivatives-1-new-hd-version">derivative</a>. This derivative is the slope of current when it is plotted against time.</p>
</details>

<details>
<summary>calculus notation: $\int$ </summary>
<p>$\displaystyle i = \dfrac1{\text L}\, \int_{\,0}^{\,T} v\,\text dt + i_0$</p>

<p>The loopy $\int$ symbol is also from calculus. It is an <a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-antiderivatives-ftc/ab-antiderivatives-intro/v/antiderivatives-and-indefinite-integrals">integral</a> sign. It's meaning is similar to the summation symbol $\Sigma$. In the inductor equation, the integral sign is the running sum of the product of $v\,\times \,dt$, starting at time $t=0$ and stopping at time $t=T$. Integration is the opposite of taking the derivative.</p>
</details>

## Inductor voltage is proportional to the *rate of change* of current

When we learned about resistors, Ohm's Law told us the voltage across a resistor is proportional to the current through the resistor: $v = \text R\,i$. 

Now we have an inductor with its $i$-$v$ equation: $v = \text L\,\dfrac{di}{dt}$.

This tells us the voltage across the inductor is proportional not to current but rather the *rate of change* of current through the inductor. That's what $di/dt$ means.

For real-world resistors, we have to take care that voltage and current don't get too big for the resistor to handle. 
For real-world inductors, we have to be careful the *rate of change of current* does't get too big for the inductor to handle. This can be tricky. It is very easy to create a big change of current when you open or close a switch. In the article on [inductor kickback]({{ site.baseurl }}{% link _articles/inductor-kickback.md %}) we design for this situation.

## Inductor and current source

Now we look at a few different simple circuits to get a feel for what the inductor $i$-$v$ equations mean. Along the way we will see how the equations teach us some simple rules of thumb about the inductor.

The first example is an inductor connected to an ideal current source. 

![](https://ka-perseus-images.s3.amazonaws.com/b9070d62ff9d8e0ab7ab350e86abf31ba033bdf4.svg){: .centered :}{: height="180px"}

The current source provides a constant current to the inductor, $i = \text I$.  
For example, let $i = 2 \,\text{mA}$. 

**What is the voltage across the inductor?** 

The inductor equation tells us:

$v = \text L\,\dfrac{di}{dt}$

The current source provides a constant current of $2\,\text{mA}$. That's interesting, but what we really need to know is, what is the rate of change of the current? 

$\dfrac{di}{dt} = \dfrac{d2}{dt} = 0\qquad$ (everybody knows $2$ doesn't change with time)

Therefore, the voltage across the inductor is: 

$v = \text L\cdot 0 = 0$  

If current is constant in an inductor, then $v = \text L\,di/dt = 0$. Zero volts appear across the inductor. This is true for any value of current and any value of inductor. 

### Simulation model

Here's a [simulation model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["g",[192,120,0],{"_json_":0},["0"]],["w",[168,120,192,120]],["w",[216,120,192,120]],["l",[216,72,0],{"name":"","l":"5u","_json_":3},["1","0"]],["s",[216,72,0],{"color":"cyan","offset":"0","_json_":4},["1"]],["i",[168,120,2],{"name":"","value":"dc(2)","_json_":5},["0","1"]],["w",[168,72,216,72]],["view",94.6424,32.20688,3.814697265625,"50","10","1G",null,"100",".0009","1000"]]) of a $5\,\mu\text H$ inductor with constant $2\,\text{mA}$ current source. Open the link and click on TRANS in the top menu bar to run a transient simulation. The result is pretty boring. The voltage across the inductor is $0$. Change the inductor or current to anything you want, the answer is always $0$. 

### Sometimes an inductor "looks like" a short

It's very popular to paint mental pictures of an inductor by saying it "looks like" something. Here's our first example. 

When the current is constant, the voltage difference between the ends of an inductor is $0\,\text V$. In this condition, an inductor acts just like an ideal wire. (An ideal wire has $0\,\text V$ between its ends no matter what.) 

An inductor "looks like" a short circuit when its current is constant.

## Inductor and voltage source

Now let's the current source to an ideal constant voltage source and see what the $i$-$v$ equation predicts. Let's get specific and say $\text V = 3\,\text V$ and $\text L = 10\,\text{mH}$. 

![](https://ka-perseus-images.s3.amazonaws.com/a276a0e7a21337ca28b29f25c3c53021b714baf2.svg){: .centered :}{: height="180px"}

If we put these values into the inductor equation we get,

$v = \text L\,\dfrac{di}{dt}$

$3 = 10 \,\text{mH} \, \dfrac{di}{dt}$

or, solving for $di/dt$,

$\dfrac{di}{dt}= \dfrac{3}{10 \times 10^{-3}} = 300 \,\text{amperes}/\text{sec}$

That means the current through the inductor will have a rising slope of $300\,\text{amperes}/\text{second}$. 

![Inductor current ramp]({{ site.baseurl }}{% link i/inductor_in_action_current_ramp.svg %}){: .centered :}

That is kind of amazing, but that's what the equation predicts. Needless to say, this is not a practical circuit. We just want see what happens with a constant voltage. If we build this circuit the current would ramp up until our real-world voltage source couldn't keep up with the demand for more current. But over a short time span, this is how real inductors work.

### Simulation model

Here's a [simulation model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["v",[168,72,4],{"name":"","value":"dc(3)","_json_":0},["2","0"]],["g",[192,120,0],{"_json_":1},["0"]],["w",[168,120,192,120]],["w",[216,120,192,120]],["l",[216,72,0],{"name":"","l":"10m","_json_":4},["1","0"]],["s",[216,72,0],{"color":"cyan","offset":"0","_json_":5},["1"]],["a",[184,72,0],{"color":"magenta","offset":"0","_json_":6},["2","1"]],["w",[168,72,184,72]],["w",[216,72,200,72]],["view",94.6424,32.20688,3.814697265625,"50","10","1G",null,"100","5","1000"]]) of the inductor with voltage source circuit. Open the link and click on TRANS in the top menu to run a transient simulation.

## Example

We can actually come up with something more useful than an infinitely-rising current ramp. If we change the voltage source so it reverses direction every once in a while, we get a more interesting and potentially useful circuit. 

![Inductor voltage squarewave]({{ site.baseurl }}{% link i/inductor_in_action_triangle.svg %}){: .centered :}{: height="160px"}

Here's a challenge for you: Assume the square wave amplitude is $\pm1\,\text V$ and the frequency is $1\,\text{MHz}$ $($has a period of $1\,\mu\text{sec})$.

**Sketch the shape of the current waveform and find the peak values.**

See if you can do this before looking at the answer or simulation model. 

Hint: Work out $di/dt$ for the two different states of the input voltage.

<details>
<summary>show answer</summary>
<p>The current waveform is a triangle wave, ramping up when the voltage is positive, ramping down when the voltage is negative.</p>

<p>We solve this in pieces. First, work out the current when the voltage is $+1\,\text V$,</p>

<p>$v = \text L\,\dfrac{di}{dt}$</p>

<p>$1 = 5 \,\mu\text H \, \dfrac{di}{dt}$</p>

<p>$\dfrac{di}{dt}= \dfrac{1}{5 \times 10^{-6}} = 0.2 \times 10^{+6} \,\text{amperes}/\text{sec}$</p>

<p>The current has a rising slope of $200{,}000\,\text{amperes}/\text{second}$.<br>That's the same as $200\,\text{mA}/\mu\text{sec}$.</p>

<p>The voltage flips from $+1\,\text V$ to $-1\,\text V$ every $0.5\,\mu\text{sec}$.</p>

<p>How high does the current rise during the $v = +1\,\text V$ portion of the square wave?</p>

<p>$i_{\text{+peak}} = 200\,\text{mA}/\mu\text{sec} \times 0.5\,\mu\text{sec} = 100\,\text{mA}$</p>

<p>The current reaches a peak of $100\,\text{mA}$.</p>

<p>When the voltage goes low, the whole process reverses. For the $v = -1\,\text V$ portion you can do the math again with a $-1\,\text V$ in the slope equation. The current slopes downward with a negative slope of the same magnitude. At the end of the negative voltage, the current will have returned to $0$. </p>

<p>$i_{\text{-peak}} = 0\,\text{mA}$. </p> 

<p>The current will zig and zag between the two peaks with straight lines inbetween. Open the simulation link below and run a transient simulation to see what happens.</p>
</details> 

### Simulation model

[Simulation model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["v",[152,72,4],{"name":"","value":"square(-1,1,1M,50)","_json_":0},["2","0"]],["l",[248,72,0],{"name":"","l":"5u","_json_":1},["1","0"]],["a",[192,72,0],{"color":"cyan","offset":"0","_json_":2},["2","1"]],["w",[152,72,192,72]],["w",[248,72,208,72]],["s",[248,72,0],{"color":"red","offset":"0","_json_":5},["1"]],["g",[200,120,0],{"_json_":6},["0"]],["w",[152,120,200,120]],["w",[248,120,200,120]],["view",0,0,2,"50","10","1G",null,"100","3u","1000"]]) of the pulsed voltage source circuit. Open the link and click on TRANS to run a transient simulation. 

The inductor is "integrating" the voltage over time, as indictated by the value of the current at any moment. This is an exact "dual" of a [capacitor integrating current]({{ site.baseurl }}{% link _articles/capacitor-iv-equation-in-action.md %}).

### Explore 

What happens to the current if you ...?  
* Change the value of the inductor by a little bit $(2\times)$ and by a lot $(100\times)$.
* Change the amplitude or frequency of the voltage source. 
* Change the voltage levels so they are not symmetric.
* Change the voltage duty cycle from $50\%$ to another value, like $40\%$.

<details>
<summary>what does "duty cycle" mean?</summary>
<p> Duty cycle described a pulsed waveform. It refers to the percentage of time the voltage spends in the high state. If the duty cycle is $25\%$ the voltage is $+1\,\text V$ for a quarter of the cycle time. If the duty cycle is $50\%$ the voltage is symmetric, spending half the time high and half the time low. Duty cycle can range bewteen $0\%$ and $100\%$.</p>
</details>

## Analogy to mass

This is the most useful mental image to have when looking at an inductor.

Inductance, $\text L$, is analogous to mass or inertia in a mechanical system. The energy in the magnetic field of an inductor doesn't allow the current to change instantaneously, just like the heavy mass of the car tends to resist changes in velocity. A car cannot start or stop instantaneously. It takes time to accelerate or brake. An inductor is basically the electrical version of Newton's First Law of Motion (also called the Law of Inertia): A body in motion tends to stay in motion. For an inductor it goes like this: A current in motion tends to stay in motion.

The current in an inductor does not (will not) change instantaneously.




## Summary
{:.no_toc}

The current in an inductor does not change instantaneously.

When its current is constant, an inductor looks like a short circuit.

Be careful making circuits with an inductor. A sudden changed in current, like a switch thrown open, breaking a current path, that means the derivative of current, $di/dt$, can become very large. The inductor equation tells us there can be a large voltage generated across the inductor. 

One way to deal with potentially destructive inductor voltage is to design a path for the current, so you don't get a large $di/dt$. We showed how to add a diode to provide a current path and clamp the inductor voltage to an acceptable value  when a switch was thrown open.
