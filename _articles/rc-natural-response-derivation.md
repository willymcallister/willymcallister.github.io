---
layout: article
title:  "RC natural response - derivation"
author: Willy McAllister
comments: true
---

The Resistor-Capacitor $(\text{RC})$ circuit is one of the first interesting circuits we can create. Understanding how this circuit works is essential to understanding electronic systems. 

![RC natural response circuit]({{ site.baseurl }}{% link i/rc_natural_response0c.svg %}){: .centered :}

To develop a precise understanding of the $\text{RC}$ requires methods from calculus. We use [derivatives](https://www.khanacademy.org/math/calculus-home/taking-derivatives-calc) to describe how the $\text{RC}$ circuit behaves.

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The natural response of a resistor-capacitor circuit is a decaying exponential, 

$v(t) = \text V_0\,e^{-t/\text{RC}}$

$\text V_0$ is the initial voltage at time $t=0$.

The time constant for an $\text{RC}$ circuit is $\tau = \text{RC}$.

$v(t) = \text V_0\,e^{-t/\tau}$

----

We derive a precise equation for the *natural response* of this circuit. 

![RC natural response circuit]({{ site.baseurl }}{% link i/rc_natural_response0.svg %}){: .centered :}

We give the circuit some energy by placing an initial charge $q$ on the capacitor. This causes a voltage to appear according to $q = \text C\,v$. Then we step back and watch what the voltage does 'naturally.' Whatever happens is called the *natural response*. The natural response is what the circuit does when it has some initial energy, but nothing else is driving the circuit.

By "find the response" we mean find $\goldD v$ and $\blueD i$ as a function of time.

## Strategy

Here is the strategy we will use to turn this circuit into a differential equation and solve it. If this is your first differential equation, don't be nervous, we'll go through every step,

* Model the $\text R$ and $\text C$ components with their $i$-$v$ equations
* Model the circuit using Kirchhoff's Current Law (KCL)
* KCL gives us a differential equation
* Solve the differential equation step-by-step
  * Guess at a solution with adjustable constants
  * Plug the solution into the differential equation
  * Gather like factors and identify the *characteristic equation*
  * Find the root, $s$, of the characteristic equation
  * Find the amplitude constant, $K$, using the initial condition, $\text V_0$
  * The guess is confirmed if you can find a $K$ and is in fact constant (does not change with time)
  * Assemble the result 

## Model the components

$\text R$ and $\text C$ can be described by their voltage-current equations. 

For the resistor, we pick a form of Ohm's Law, 

$i_{\text R} = \dfrac{v}{\text R}$

The corresponding voltage-current relationship for the capacitor is,

$i_{\text C} = \text C\,\dfrac{dv}{dt}$ 

<details>
<summary>Where does this equation come from?</summary>
<p>This capacitor $i$-$v$ equation emerges from the capacitor charge-to-voltage relationship,</p>

<p>$q=\text C\,v$</p>

<p>If we take the derivative with respect to time of both sides we get,</p>

<p>$\dfrac {dq} {dt} = \text C \,\dfrac {dv} {dt}$</p>

<p>The left side is ${dq}/{dt}$. This represents change of charge per change of time, or moving charge. Moving charge is an <em>electric current</em>! The term "electric current" was first used by André-Marie Ampère. The symbol we use for current is '$i$'. It comes from the first letter of the French phrase <em>intensité du courant électrique</em>.</p>
<p>If we replace ${dq}/{dt}$ with $i$ we derive the current-voltage relationship for a capacitor,</p>

<p>$i = \text C \,\dfrac {dv} {dt}$</p>
</details>

## Model the circuit

Next we write an equation using Kirchhoff's Current Law (KCL).

![RC natural response circuit with labeled current arrows]({{ site.baseurl }}{% link i/rc_natural_response0b.svg %}){: .centered :}

Using the form of KCL that says, "the sum of currents flowing out of a node is $0$",

$i_\text C + i_\text R = 0$

Substitute in the two $i$-$v$ relationships,

$\text C\,\dfrac{dv}{dt} + \dfrac 1 {\text R} \, {v} = 0$

## Solve the circuit

The previous equation has a fancy name. It is called a *first-order ordinary differential equation* (ODE). 

{% capture summary %}What do these terms mean?{% endcapture %}  
{% capture details %}  
It is a *differential* equation because it contains derivatives $dv/dt$.

It is *first-order* because the highest derivative is a first derivative $dv/dt$.

It is *ordinary* because there is just one independent variable $t$, (as opposed to partial derivatives of multiple independent variables).

It amazes me how schematic symbols turn into bits and pieces of differential equations. Simple symbols, sophisticated ideas.  
{% endcapture %}{% include details.html %}

We are going to solve this equation together step-by-step,

$\text C\,\dfrac{dv}{dt} + \dfrac 1 {\text R} \, {v} = 0\qquad$ (differential equation)

When you solve a differential equation you have to find some sort of function, in our case, a function of voltage with respect to time, $v(t)$, where plugging $v(t)$ into the differential equation makes it come true. 

Where do solutions come from? One way is to guess at a solution, and try it out. (Not any wild guess, but an informed guess.) If your text book says, "assume a solution of the form ...", that's the same as a guess.

While gazing at the differential equation, consult the depths of your memory where you store what you know about functions. Relax your mind and follow along...

The two terms in the equation add up to zero. This suggests the first derivative of the function needs to have the same form or shape as the function itself. Search your memory for any function whose first derivative looks just like itself. Hmm... 

A function that fits the bill is some form of the exponential function,  $e^{\displaystyle x}$, because the derivative of an exponential looks like another exponential.

$\dfrac d {dt} \,e^{\displaystyle \alpha t} = \alpha \,e^{\displaystyle \alpha t}$

This derivative is worth memorizing. You can <a href="https://www.khanacademy.org/math/calculus-home/taking-derivatives-calc/ex-and-lnx-derivatives-calc/v/derivatives-of-sin-x-cos-x-tan-x-e-x-and-ln-x)">review</a> it or enjoy a full <a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-derivatives-advanced/ab-adv-derivatives-opt-vids/v/proof-of-derivative-of-ex">proof</a>.

To solve our differential equation, we are going to 
* Make a bold proposal for the form of the solution. (This part takes courage.) 
* Plug our solution into the equation and work out some constants. (This part takes math.) 

If everything works out and we make the differential equation true, then our proposed function is a winner. 

Our proposed solution is an exponential function decorated with a few adjustable parameters, $K$ and $s$.

$v(t) = Ke^{\displaystyle st}$

* $t$ is time. 
* $v(t)$ is voltage as a function of time. 
* $K$ and $s$ are constants we have to figure out.
  * $K$ is an amplitude factor that makes the voltage bigger or smaller.
  * $s$ is in the exponent. 
  * Since exponents can't have dimensions, the units of $s$ have to be $1/t$.
  * $1/t$ is the unit of frequency, so $s$ is called the *natural frequency*.

Let's check if our proposed solution works...

Substitute $v(t) = K\,e^{\displaystyle st}$ into the differential equation,

$\text C \dfrac d {dt} (K e^{\displaystyle st}) + \dfrac 1 {\text R} (K e^{\displaystyle st}) = 0$

Work out the derivative in the first term,

$\dfrac d {dt} (K e^{\displaystyle st}) = s\text Ke^{\displaystyle st}$

Put $s\text Ke^{st}$ back into the differential equation,

$s\text CK e^{\displaystyle st} + \dfrac 1 {\text R} K e^{\displaystyle st} = 0$

We can factor out $Ke^{st}$,

$(s\text C + \dfrac 1 {\text R})\, K e^{\displaystyle st} = 0$

Next, we work out the two constants and see if the equation is true.

How many ways are there to make the left side equal zero? Three ways: any of the three terms could be zero, $K$ or $e^{st}$ or $(s\text C + 1/\text R)$.  

One trivial solution is $K = 0$. That's the same as setting the initial charge on the capacitor to $0$ and the circuit just sits there doing nothing. That's so boring. 

Another trivial solution is to make $e^{st}=0$. Set $s$ to any negative value and let $t$ go to $+\infty$. The exponential $e^{-\infty}$ completely dies out, which means we sit around for infinity time waiting for the capacitor to fully discharge. We don't want to wait that long, so again, not too interesting.

A more thought-provoking solution comes from the third choice, 

$s\text C + \dfrac 1 {\text R} = 0$

This equation is true if:

$s = -\dfrac{1}{\text{RC}}$

<details>
<summary>magic moment</summary>
<p>This is a magic moment worth remembering. This is the moment when $\text R$ and $\text C$ come together as a product for the first time. The $\text{RC}$ product plays an important role in nearly every electronic circuit, analog or digital.</p>
</details>

So far, our proposed solution looks like:

$v(t) = Ke^{-t/\text{RC}}$

Nearly done. We found $s$. All that's left is to figure out $K$. If we can find a $K$ and it is truly constant (not changing with time) that will confirm our original guess for $v(t)$.

To find $K$ we examine the *initial conditions* of the circuit. Recall the capacitor was initially charged to voltage $\text V_0$. There was a moment we let go of the circuit to watch its response. If we call that time $t = 0$, then,

$v(0) = \text V_0 = Ke^{-0/\text{RC}} = K e^0$

Solving for $K$,

 $K = \text V_0$ 

We found $K$, and it is a constant. That confirms that our original guess about an exponential solution was a good choice. If we could not find a $K$, or if $K$ wasn't constant (if it turned out to depend on time, for example), then our guess fails and we have to start over with a new guess.

We have $s$ and $K$ to make the differential equation true. We are done. Drum roll please...  

The general solution for the natural response of an $\text{RC}$ circuit is,

$v(t) = \text V_0\,e^{-t/\text{RC}}$

Here's what the voltage looks like,

![RC natural response plot]({{ site.baseurl }}{% link i/rc_natural_response_voltage.svg %}){: .centered :}

The curve touches the voltage axis at $\text V_0$. The speed of the falling voltage is determined by the $\text{RC}$ product in the exponent.

## Time Constant

Now we peer inside this $\text{RC}$ natural response and make some observations.

An exponent cannot have units. This means the product $\text{RC}$ in $e^{- t /\text{RC}}$ has to have units of time,  to cancel time $t$ in the numerator. This means $\text{ohms} \cdot \text{farads = seconds}$. I bet that's something you might not have guessed. 

The product of $\text R$ and $\text C$ is called the *time constant* of this circuit, and it goes by the Greek letter name $\tau$ (tau).

$\tau = \text{RC}$

And we write the solution as:

$v(t) = \text V_0\,e^{-t/\tau}$

The time constant $\tau$ is a handy parameter that tells us how $v(t)$ behaves. When $t$ is equal to the time constant, the exponent becomes $-\tau/\tau = -1$. The exponential term is equal to $e^{-1} = 1/e$, or about $0.37$. 

The time constant determines how fast the exponential curve comes down to zero. After $1$ time constant has passed, the voltage is down to $37\%$ of its initial value. 

## Example 1

![RC natural response example 1]({{ site.baseurl }}{% link i/rc_natural_response4.svg %}){: .centered :}

For the natural response circuit,  
let $\text R = 3 \,\text k\Omega$, $\text C = 1 \,\mu\text F$, and $v(0) = 1.4 \,\text V$.  

**a. Write the expression for $v(t)$**  
**b. What is $v(t)$ when $t = \text{RC}$ ?**  
**c. Plot $v(t)$**

**a.  Write the expression for $v(t)$**  

$v(t) = \text V_0 \,\large e^{-t/\text{RC}}$

$v(t) = 1.4\,\large e^{-t/3 \,\text{k}\Omega \cdot 1 \,\mu\text{F}}$

$v(t) = 1.4\,\large e^{-t/3\times10^{3} \cdot 1\times10^{-6}}$

$v(t) = 1.4\,\large e^{-t/3\times10^{-3}}$

$v(t) = 1.4\,\large e^{-t/3\,\text{ms}}$

**b. What is $v(t)$ when $t = \text{RC}$ ?**  

The $\text{RC}$ product has units of seconds. 

$\tau = \text{RC} = {3\times10^{3} \cdot 1 \times10^{-6}}$ 

$\tau = 3 \times 10^{-3} = 3 \,\text{ms}$ 

$v(3\,\text{ms}) = 1.4\,\large e^{-3\text{ms}/3\,\text{ms}}$

$v(3\,\text{ms}) = 1.4\,\large e^{-1}$

$v(3\,\text{ms}) = 1.4 \cdot 0.368$

$v(3\,\text{ms}) = 0.515 \,\text{volts}$

**c. Plot $v(t)$**

{% include_relative d3a/rc_natural_response1.html %}
<p class="caption">Click Start to trace the time response. The dot moves forward in time at a constant rate.</p>

The dashed lines indicate the answer from part b, $v(t) = 0.515 \,\text V$ when $t=\text{RC} =$ one time constant $= 3 \,\text{ms}$. 

### A useful rule of thumb - $37\%$

When time equals the time constant, $\text{RC}$, the voltage is down from its initial value by a factor of $1/e = 1/2.71828... = 0.36787...$, or down to roughly $37\%$ of its starting value. This is true for any initial voltage and any $\text{RC}$ product.

### Simulation model

[Simulation model of Example 1](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["g",[272,136,0],{"_json_":0},["0"]],["s",[208,24,0],{"color":"cyan","offset":"0","_json_":1},["1"]],["w",[320,48,320,160]],["w",[392,112,392,96]],["w",[136,136,136,96]],["w",[272,136,272,96]],["w",[296,24,272,24]],["w",[272,48,272,24]],["g",[200,208,0],{"_json_":8},["0"]],["v",[200,160,4],{"name":"SW1-ctl","value":"step(0,20,20u,1n)","_json_":9},["3","0"]],["w",[392,24,344,24]],["p",[296,24,3],{"name":"SW2","WL":"10000","_json_":11},["1","4","5"]],["g",[392,112,0],{"_json_":12},["0"]],["w",[392,48,392,24]],["v",[392,48,0],{"name":"V0","value":"dc(1.4)","_json_":14},["5","0"]],["g",[320,208,0],{"_json_":15},["0"]],["v",[320,160,0],{"name":"SW2-ctl","value":"step(0,20,5u,1n)","_json_":16},["4","0"]],["w",[224,136,272,136]],["w",[136,136,176,136]],["n",[176,136,3],{"name":"SW1","WL":"10000","_json_":19},["2","3","0"]],["c",[272,48,0],{"name":"C","c":"1u","_json_":20},["1","0"]],["r",[136,96,6],{"name":"R","r":"3k","_json_":21},["2","1"]],["w",[136,24,208,24]],["w",[272,24,208,24]],["w",[136,24,136,48]],["view",12,-34.69999999999999,1.5625,"50","10","1G",null,"100","20m","1000"]]). Click on **TRAN** to perform a transient analysis. The MOS transistor act as a switches. They are very wide $(\text W = 10{,}000)$, so their resistance is very low when their gate voltage is high.

## Example 2

![RC natural response example 2]({{ site.baseurl }}{% link i/rc_natural_response5.svg %}){: .centered :}

Let $\text R = 1\,\text{k}\Omega$, $\text C = 1\,\text{pF}$, and $\text V_0 = 1.0\,\text V$.

**a. Write the expression for $v(t)$.**  
**b. What is the time constant?**  
**c. Plot $v(t)$.**  
**d. How many times constants does it take for the voltage to drop below $95\%$ of its initial value?**

**a. Write the expression for $v(t)$.**

$v(t) = \text V_0\,\large e^{-t/\text{RC}}$

$v(t) = 1.0 \,\large e^{-t/1\,\text{k}\Omega \cdot 1\,\text{pF}}$

$v(t) = 1.0 \,\large e^{-t/1 \times 10^{-9}}$

$v(t) = 1.0 \,\large e^{-t/1\,\text{ns}}$

**b. What is the time constant?**

$\tau = \text{RC} =  1\,\text{k}\Omega \cdot 1\,\text{pF} =  1 \times 10^{+3} \cdot 1 \times 10^{-12}$

$\tau = 1 \times 10^{-9} = 1\,\text{nsec}$

With a time constant of $1\,\text{nanosecond}$, this is a pretty quick circuit.

**c. Plot $v(t)$.**

{% include_relative d3a/rc_natural_response2.html %}
<p class="caption">Click Start to trace the time response. </p>

**d. How many times constants does it take for the voltage to drop below $95\%$ of its initial value?**  

$95\%$ below $\text V_0$ is $1.0 - (0.95 \times 1.0) = 0.05$ volts. Looking at the graph we see that happens at around $3\,\text{nsec}$. This corresponds to $3$ time constants. This point is marked by the black dotted lines on the plot in part **c.**

The animation gives you a mental image of the speed of an exponential step function. The dot moves at a constant rate from left to right. Notice how the voltage moves rapidly downward during the first time constant. After a short while the rate of change of voltage slows down. After $3$ time constants---$3\,\text{nsec}$---the step is pretty much over. Hardly anything is happening and it becomes quite boring.

### Another rule of thumb - $3$ time constants

Any $\text{RC}$ transient is pretty much over after $3$ time constants.  Amazingly, this is true for any initial voltage $\text V_0$ and any $\text{RC}$ time constant.

## Epilogue

### Another way to solve this ODE

The ODE we solved here is a *separable* differential equation. We used a guessing method. Another method for solving separable differential equations is included as an appendix at the end of [RL natural response]({{ site.baseurl }}{% link _articles/rl-natural-response.md %}). The math is more sophisticated, but there is no guessing involved. 

Sal has a video on [separable differential equations](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-separable-eq/v/separable-differential-equations-introduction) that goes into depth on this method. He talks about [guessing a solution](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/linear-homogeneous-2nd-order/v/2nd-order-linear-homogeneous-differential-equations-2) while solving a second-order differential equation. We use the guessing method again when we solve the [RLC natural response]({{ site.baseurl }}{% link _articles/rlc-natural-response-derivation.md %}).

### $e$ is a special number

The function $e^x$ either grows ($x>0$) or decays ($x<0$) at some rate, depending on $x$. There are plenty of other functions with this same general shape. Any function that looks like $y^x$ has a similar curve. If we can get the same shape with different values of the base $y$, like $2^x$ or $10^x$, what's the big deal about this irrational number $e = 2.71828...$? 

The reason we love $e$ more than any other choice is that $e$ is the *one and only* number where the derivative of $y^x$ is exactly equal to $y^x$. That is, the slope of $e^x$ for any value of $x$ equals $e^x$.

$\dfrac{\phantom{^x}\text de^x}{\phantom{^x}\text dx\phantom{^x}} = e^x$ 

No muss, no fuss, exactly the same thing. This is worth memorizing.

[//]: # (The \phantom in the previous equation is a trick to typeset the denominator nicely aligned with the numerator. Purely optional.)

### Exponentials happen in nature

The problem we just solved, the natural response of an RC circuit, is representative of things that happen quite often in nature. The exponential function is a very good mathematical model for describing how things grow or decay. Uranium decay, [population growth](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-exp-models/v/modeling-population-with-simple-differential-equation), mortgage payments, [heating and cooling](https://www.khanacademy.org/math/differential-equations/first-order-differential-equations/exponential-models-diff-eq/v/newtons-law-of-cooling), and other real-world processes. 

In the broadest terms: **Exponentials arise in situations where the *amount of change* is proportional to the *amount of stuff*.** For our RC circuit, the rate of change of voltage is proportional to the voltage. The curve is steep when the voltage is high, and shallows out as voltage drops.

## Summary
{:.no_toc}

The natural response of an $\text{RC}$ circuit is an exponential function,

$v(t) = \text V_0\,\large e^{-t/\text{RC}}$

Where $\text V_0$ is the voltage at time $t=0$.

The time constant for an $\text{RC}$ circuit is $\tau = \text{RC}$.

The $\text{RC}$ circuit can be found everywhere in electronics. Sometimes you create it on purpose. Other times it appears by accident, and you have to deal with it.

<details>
    <summary>by accident?</summary>
    <p>In a real-world circuit, wires are always surrounded by other conductive elements, for example, other wires or a metal enclosure. Two conductors separated by an insulator is a capacitor. These capacitors (usually small, usually unwanted) are connected to the wire you care about. Many times you can ignore these so-called <em>parasitic</em> capacitances, but sometimes they play an important role in how the circuit works.</p>
</details> 
