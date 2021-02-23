---
layout: article
title:  "RC natural response - derivation"
author: Willy McAllister
comments: true
---

The Resistor-Capacitor $(\text{RC})$ circuit is one of the first interesting circuits we can create. Understanding this circuit is essential to understanding electronic systems. 

![RC natural response circuit]({% link i/rc_natural_response0c.svg %}){: .centered :}

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

Our goal is to derive a precise equation for the *natural response* of this circuit, 

![RC natural response circuit]({% link i/rc_natural_response0.svg %}){: .centered :}

We give the circuit some initial energy by placing a charge $q$ on the capacitor. This causes a voltage to appear across the capacitor according to $q = \text C\,v$. Then we step back and watch what the voltage does 'naturally.' Whatever happens is called the *natural response*. The natural response is what the circuit does when it has some initial energy, but nothing external drives the circuit.

"Find the response" means find $\goldD v$ and $\blueD i$ as a function of time.

## Strategy

Here is the strategy we use to model the circuit with a differential equation and then solve it. If this is your first differential equation, don't be nervous, we'll go through every step.

* Model the $\text R$ and $\text C$ components with their $i$-$v$ equations
* Model the circuit using Kirchhoff's Current Law (KCL)
  * KCL gives us a differential equation
* Solve the differential equation step-by-step
  * Guess at a solution with adjustable constants
  * Plug the solution into the differential equation
  * Gather like factors and identify the *characteristic equation*
  * Find the root, $s$, of the characteristic equation
  * Find the amplitude constant, $K$, using the initial condition, $\text V_0$
  * The guess is confirmed if you can find a value for $K$ and it is in fact constant (does not change with time)
  * Assemble the result 

## Model the components

To start off we define two separate current arrows, $i_\text R$ and $i_\text C$. With two arrows we respect the [sign convention for passive components]({% link _articles/sign-convention.md %}) for both $\text R$ and $\text C$. 

![RC natural response circuit with labeled current arrows]({% link i/rc_natural_response0b.svg %}){: .centered :}

$i_\text R$ flows into the positive voltage terminal of $\text R$. $i_\text C$ flows into the positive voltage terminal of $\text C$. This means the $i$-$v$ equations we write for $\text R$ and $\text C$ don't need a negative sign.
{: .caption :}

$\text R$ and $\text C$ are described by their voltage-current equations. 

A resistor is described by Ohm's Law, 

$i_{\text R} = \dfrac{v}{\text R}$

The corresponding $i$-$v$ relationship for the capacitor is,

$i_{\text C} = \text C\,\dfrac{dv}{dt}$ 

<details>
<summary>Where does this equation come from?</summary>
<p>We start with the capacitor's charge-to-voltage relationship,</p>

<p>$q=\text C\,v$</p>

<p>Take the derivative with respect to time of both sides,</p>

<p>$\dfrac {dq} {dt} = \text C \,\dfrac {dv} {dt}$</p>

<p>The left side is ${dq}/{dt}$. This represents change of charge per change of time, or moving charge. Moving charge is an <em>electric current</em>!</p>
<p>The term "electric current" was first used by André-Marie Ampère. The symbol we use for current is '$i$'. It comes from the first letter of the French phrase <em>intensité du courant électrique</em>.</p>
<p>If we replace ${dq}/{dt}$ with $i$ we derive the current-voltage relationship for a capacitor,</p>

<p>$i = \text C \,\dfrac{dv}{dt}$</p>
</details>

## Model the circuit

Next we write an equation using Kirchhoff's Current Law (KCL) with the form of KCL that says, "currents flowing out of a node add up to $0$".

$i_\text C + i_\text R = 0$

Substitute in the two $i$-$v$ relationships,

$\text C\,\dfrac{dv}{dt} + \dfrac 1 {\text R} \, {v} = 0$

This equation has a fancy name. It is a *first-order ordinary differential equation* (ODE). 

{% capture summary %}What do these terms mean?{% endcapture %}  
{% capture details %}  
It is a *differential* equation because it contains derivatives $dv/dt$.

It is *first-order* because the highest derivative is a first derivative $dv/dt$.

It is *ordinary* because there is just one independent variable $t$, (as opposed to partial derivatives of multiple independent variables).

It's amazing how schematic symbols represent bits and pieces of differential equations. Simple symbols, sophisticated ideas.  
{% endcapture %}{% include details.html %}

## Solve the circuit

We will solve this equation together step-by-step,

$\text C\,\dfrac{dv}{dt} + \dfrac 1 {\text R} \, {v} = 0\qquad$ (differential equation)

When you solve a differential equation you have to find a function, in our case, a function of voltage with respect to time, $v(t)$, where plugging the function into the differential equation makes the equation come true. As an extra challenge, the solution has to be true at every moment of time.

Where do solutions come from? One way is to guess at a solution and try it out---not any wild guess, but an informed guess. If your textbook says something like, "assume a solution of the form ..." that's the same as a guess.

While gazing at the differential equation, consult the depths of your memory where you store what you know about functions. Relax your mind and follow along...

The two terms in the equation add up to zero. This suggests the first derivative of the function, $dv/dt$, needs to have the same form or shape as the function itself, $v$. Search your memory for any function whose first derivative looks just like itself. Hmm... 

A function that fits the bill is the exponential function,  $e^{\displaystyle x}$. The derivative of an exponential looks like another exponential,

$\dfrac d {dt} \,e^{\displaystyle \alpha t} = \alpha \,e^{\displaystyle \alpha t}$

(This derivative is worth memorizing. You can <a href="https://www.khanacademy.org/math/calculus-home/taking-derivatives-calc/ex-and-lnx-derivatives-calc/v/derivatives-of-sin-x-cos-x-tan-x-e-x-and-ln-x)">review</a> it or enjoy a full <a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-derivatives-advanced/ab-adv-derivatives-opt-vids/v/proof-of-derivative-of-ex">proof</a>.)

To solve our differential equation, we
* make a bold proposal for the form of the solution. (This takes courage.) 
* plug our solution into the equation and work out some constants. (This takes math.) 

If everything works out and the differential equation comes out true, then our proposed function is a winner. 

### Propose a solution

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

### Substitute into the differential equation

Substitute $v(t) = K\,e^{\displaystyle st}$ into the differential equation,

$\text C \dfrac d {dt} (K e^{\displaystyle st}) + \dfrac 1 {\text R} (K e^{\displaystyle st}) = 0$

Work out the derivative in the first term, the $s$ in the exponent comes out in front,

$\dfrac d {dt} (K e^{\displaystyle st}) = s\text Ke^{\displaystyle st}$

Put this back into the differential equation,

$s\text CK e^{\displaystyle st} + \dfrac 1 {\text R} K e^{\displaystyle st} = 0$

We can factor out $Ke^{\displaystyle st}$,

$(s\text C + \dfrac 1 {\text R})\, K e^{\displaystyle st} = 0$

Next, we work out the two constants and see if the equation is true.

### Characteristic equation

How many ways are there to make the left side equal zero? Three ways: any of the three terms could be zero, $K$ or $e^{\displaystyle st}$ or $(s\text C + 1/\text R)$.  

$K = 0$ is a trivial solution. That's the same as setting the initial charge on the capacitor to $0$ and the circuit just sits there doing nothing. That's soooo boring. 

Another solution is to make $e^{\displaystyle st} = 0$. Set $s$ to any negative value and let $t$ extend to $+\infty$. The exponential $e^{-\infty}$ completely dies out. That tells us after infinity time the capacitor is fully discharged. This is interesting, but it doesn't tell us what happens in the near term.

A more thought-provoking solution comes from the third choice, 

$s\text C + \dfrac 1 {\text R} = 0$

This is called the *characteristic equation* of the $\text{RC}$ circuit.

The characteristic equation is true if,

$s = -\dfrac{1}{\text{RC}}$

<details>
<summary>magic moment</summary>
<p>This is a magic moment worth remembering. $\text R$ and $\text C$ come together as a product for the first time. The $\text{RC}$ product plays an important role in every electronic circuit, analog or digital.</p>
</details>

### General solution

With this value of $s$ our proposed solution looks like,

$v(t) = Ke^{-t/\text{RC}}$

This equation is the *general* solution to the $\text{RC}$ natural response. It describes every possible function $v(t)$ that makes the differential equation come true. 

{% include d3/rc_natural_response_general.html %}
General solution to the RC natural response, $v(t) = K e^{-t/\text{RC}}$. A family of functions that make the differential equation true. The unknown coefficient $K$ will be determined when we consider the initial conditions.
{: .caption :}

### Concept check: Test the general solution

**Test the general solution by plugging it into the differential equation.**  
Please please please try this yourself before peeking.

{% capture details %}
The natural response differential equation is,

$\dfrac{dv}{dt} + \dfrac{1}{\text{RC}} \, {v} = 0$

The solution you are asked to test is,

$v(t) = Ke^{-t/\text{RC}}$

Substitute the proposed solution into the differential equation,

$\dfrac{d}{dt}Ke^{-t/\text{RC}} + \dfrac{1}{\text{RC}}Ke^{-t/\text{RC}} \stackrel{?}{=} 0$

Perform the derivative in the first term,

$-\dfrac{1}{\text{RC}} K e^{-t/\text{RC}} + \dfrac{1}{\text{RC}}Ke^{-t/\text{RC}} \stackrel{?}{=} 0$

How did we do?

$0 \stackrel{\checkmark}{=} 0$

The proposed solution makes the differential equation come true for *any* value of $K$.
{% endcapture %}
{% capture summary %}show answer{% endcapture %}{% include details.html %}

### Particular solution: use the initial conditions

Nearly done. We need to find a value for $K$ that accounts for the *initial conditions*---the starting voltage on the capacitor. When we resolve the arbitrary constant $K$ we have found the *particular* solution. If $K$ ends up truly constant (does not change with time) that confirms our original guess for $v(t)$.

Recall the capacitor was initially charged to voltage $\text V_0$. There is a specific moment we flipped the switch and let the circuit do its natural response. Let's call that moment $t = 0$. We know an exact voltage at a specific time. Now we can find $K$. 

At $t = 0$ and $v(0) = \text V_0$,

$\text V_0 = Ke^{-0/\text{RC}}$

$\text V_0 = K e^0$

$\text V_0 = K \cdot 1$

$K = \text V_0$ 

$K$ is a constant---it does not depend on $t$. That confirms that our original guess---an exponential voltage---was a good choice. (If we could not find a $K$, or if $K$ wasn't constant (if it turned out to depend on time), then our guess fails and we have to start over with a new guess.)

Once a value for $K$ is determined we go from the general solution to a *particular* solution, selected from amongst the zillion possible $v(t)$'s. The particular solution is the one-out-of-a-zillion functions of $v$ that has exactly $\text V_0$ as the starting voltage. It's the only one.

We have $s$ and $K$ that make the differential equation true. *Drum roll please*...  

The solution for the natural response of an $\text{RC}$ circuit is,

$\boxed{v(t) = \text V_0\,e^{-t/\text{RC}}}$
{: .colorbox :}

where $\text V_0$ is the starting voltage on the capacitor. 

$v(t)$ is one particular curve selected from all possible curves represented by the general solution. Here's what $v(t)$ looks like,

![RC natural response plot]({% link i/rc_natural_response_voltage.svg %}){: .centered :}

The curve touches the voltage axis at $\text V_0$. The steepness of the falling voltage is determined by the $\text{RC}$ product in the exponent. After a long time the voltage approaches $0$. 

## Time Constant

Let's peer inside the $\text{RC}$ natural response and make some observations.

An exponent cannot have units. This means the product $\text{RC}$ in $e^{- t /\text{RC}}$ has to have units of time,  to cancel time $t$ in the numerator. This means $\text{ohms} \cdot \text{farads = seconds}$. I bet that's something you might not have guessed. 

The product of $\text R$ and $\text C$ is called the *time constant* of this circuit, and it goes by the lowercase Greek letter $\tau$ (tau, rhymes with [*wow*](https://en.wiktionary.org/wiki/tau#Pronunciation)).

$\tau = \text{RC}$

and we write the natural response as,

$v(t) = \text V_0\,e^{-t/\tau}$

The time constant $\tau$ tells us a lot about how $v(t)$ behaves. Suppose $t$ is equal to the time constant. The exponential term becomes $e^{-\tau/\tau} = e^{-1}$. 

$e^{-1} = 1/e = 1/2.718...$, or about $0.37$

After one time constant has passed, the voltage is down to $37\%$ of its initial value. 

$v(\tau) = \text V_0 \cdot 0.37$

## Example 1

Let $\text R = 3 \,\text k\Omega$, $\text C = 1 \,\mu\text F$, and $v(0) = 1.4 \,\text V$.  

![RC natural response example 1]({% link i/rc_natural_response4.svg %}){: .centered :}

**a. Write the expression for $v(t)$.**  
**b. Find $v(t)$ when $t = \text{RC}$.**  
**c. Plot $v(t)$.**

**a.  Write the expression for $v(t)$.**  

$v(t) = \text V_0 \,\large e^{-t/\text{RC}}$

$v(t) = 1.4\,\large e^{-t/3 \,\text{k}\Omega \cdot 1 \,\mu\text{F}}$

$v(t) = 1.4\,\large e^{-t/3\times10^{3} \cdot 1\times10^{-6}}$

$v(t) = 1.4\,\large e^{-t/3\times10^{-3}}$

$v(t) = 1.4\,\large e^{-t/3\,\text{ms}}$

**b. Find $v(t)$ when $t = \text{RC}$.**  

$\text{RC}$ is the *time constant*. The product has units of seconds. 

$\tau = \text{RC} = 3 \,\text k\Omega \cdot 1 \,\mu\text F$ 

$\tau = {3\times10^{3} \cdot 1 \times10^{-6}}$ 

$\tau = 3 \times 10^{-3} = 3 \,\text{ms}$ 

$v(t) = \text V_0 \,\large e^{-t/\text{RC}}$

$v(3\,\text{ms}) = 1.4\,\large e^{-3\text{ms}/3\,\text{ms}}$

$v(3\,\text{ms}) = 1.4\,\large e^{-1}$

$v(3\,\text{ms}) = 1.4 \cdot 0.37$

$v(3\,\text{ms}) = 0.51 \,\text{volts}$

**c. Plot $v(t)$.**

Click Start to trace the time response.

{% include d3a/rc_natural_response1.html %}

The dashed lines indicate the answer from part b, $v(t) = 0.51 \,\text V$ when $t=\text{RC} =$ one time constant $= 3 \,\text{ms}$. 

### Rule of thumb --- $37\%$

When time equals the time constant, $\text{RC}$, the voltage is down from its initial value by a factor of $1/e = 1/2.71828... = 0.36787...$, or down to roughly $37\%$ of its starting value. This is true for *any* initial voltage and *any* $\text{RC}$ product.

### Simulation model

[Simulation model of Example 1](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["g",[272,136,0],{"_json_":0},["0"]],["s",[208,24,0],{"color":"cyan","offset":"0","_json_":1},["1"]],["w",[320,48,320,160]],["w",[392,112,392,96]],["w",[136,136,136,96]],["w",[272,136,272,96]],["w",[296,24,272,24]],["w",[272,48,272,24]],["g",[200,208,0],{"_json_":8},["0"]],["v",[200,160,4],{"name":"SW1-ctl","value":"step(0,20,20u,1n)","_json_":9},["3","0"]],["w",[392,24,344,24]],["p",[296,24,3],{"name":"SW2","WL":"10000","_json_":11},["1","4","5"]],["g",[392,112,0],{"_json_":12},["0"]],["w",[392,48,392,24]],["v",[392,48,0],{"name":"V0","value":"dc(1.4)","_json_":14},["5","0"]],["g",[320,208,0],{"_json_":15},["0"]],["v",[320,160,0],{"name":"SW2-ctl","value":"step(0,20,5u,1n)","_json_":16},["4","0"]],["w",[224,136,272,136]],["w",[136,136,176,136]],["n",[176,136,3],{"name":"SW1","WL":"10000","_json_":19},["2","3","0"]],["c",[272,48,0],{"name":"C","c":"1u","_json_":20},["1","0"]],["r",[136,96,6],{"name":"R","r":"3k","_json_":21},["2","1"]],["w",[136,24,208,24]],["w",[272,24,208,24]],["w",[136,24,136,48]],["view",12,-34.69999999999999,1.5625,"50","10","1G",null,"100","20m","1000"]]){:target="_blank"}. Click on **TRAN** to perform a transient analysis. (Notes: The MOS transistor act as a switches. They are very wide, $\text W = 10{,}000$, so their resistance is very low when their gate voltage is high.)

## Example 2

Let $\text R = 1\,\text{k}\Omega$, $\text C = 1\,\text{pF}$, and $\text V_0 = 1.0\,\text V$.

![RC natural response example 2]({% link i/rc_natural_response5.svg %}){: .centered :}

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

Click Start to trace the time response.

{% include d3a/rc_natural_response2.html %}

**d. How many times constants does it take for the voltage to drop below $95\%$ of its initial value?**  

$95\%$ below $\text V_0$ is $1.0 - (0.95 \times 1.0) = 0.05$ volts. Looking at the graph we see that happens at around $3\,\text{nsec}$. This corresponds to $3$ time constants. This point is marked by the black dotted lines on the plot in part **c.**

The animation gives you a mental image of the speed of an exponential step function. The dot moves at a constant rate from left to right. Notice how the voltage moves rapidly downward during the first time constant. After a short while the rate of change of voltage slows down. After $3$ time constants---$3\,\text{nsec}$---the step is pretty much over. Hardly anything is happening and it becomes quite boring.

### Another rule of thumb --- $3$ time constants

Any $\text{RC}$ transient is pretty much over after $3$ time constants.  Amazingly, this is true for *any* initial voltage $\text V_0$ and *any* $\text{RC}$ time constant.

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

## Appendix --- Another way to solve this ODE

We used a guessing method to solve the ODE for this circuit. It turns out this ODE is a *separable* differential equation. We could have solved it without a guess using the method of [separable differential equations](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-separable-eq/v/separable-differential-equations-introduction). This is one of the first methods taught in the formal study of differential equations. An appendix at the end of [RL natural response]({% link _articles/rl-natural-response.md %}#appendix---separable-differential-equation) shows an example. The method requires you to have skills in integration, but there is no guessing involved. 

Sal does a worked example using [separable differential equations](https://www.khanacademy.org/math/differential-equations/first-order-differential-equations/exponential-models-diff-eq/v/modeling-population-with-simple-differential-equation) to solve a population growth problem. If you replace insects with voltage, it is also the solution to the RC circuit in this article. 

Later on, Sal uses the [guessing a solution](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/linear-homogeneous-2nd-order/v/2nd-order-linear-homogeneous-differential-equations-2) method to solve a second-order differential equation. Guessing is the appropriate method for the [LC]({% link _articles/lc-natural-response-derivation.md %}) and [RLC]({% link _articles/rlc-natural-response-derivation.md %}) circuits coming up.

## Appendix --- $e$ is a special number

The function $e^x$ either grows ($x>0$) or decays ($x<0$) at some rate, depending on $x$. There are plenty of other functions with this same general shape. Any function that looks like $y^x$ has a similar curve. If we can get the same shape with different values of the base $y$, like $2^x$ or $10^x$, what's the big deal about this irrational number $e = 2.71828...$? 

The reason we love $e$ more than any other choice is that $e$ is the *one and only* number where the derivative of $y^x$ is exactly equal to $y^x$. That is, the slope of $e^x$ for any value of $x$ equals $e^x$.

$\dfrac{\phantom{^x}\text de^x}{\phantom{^x}\text dx\phantom{^x}} = e^x$ 

No muss, no fuss, exactly the same thing. This is worth memorizing.

[//]: # (The \phantom in the previous equation is a trick to typeset the denominator nicely aligned with the numerator. Purely optional.)

## Appendix --- Exponentials happen in nature

The problem we just solved, the natural response of an RC circuit, is representative of things that happen quite often in nature. The exponential function is a very good mathematical model for describing how things grow or decay. Uranium decay, [population growth](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-exp-models/v/modeling-population-with-simple-differential-equation), mortgage payments, [heating and cooling](https://www.khanacademy.org/math/differential-equations/first-order-differential-equations/exponential-models-diff-eq/v/newtons-law-of-cooling), and other real-world processes. 

In the broadest terms, **exponentials arise in situations where the *amount of change* is proportional to the *amount of stuff*.** For our RC circuit, the rate of change of voltage is proportional to the voltage. The curve is steep when the voltage is high, and shallows out as voltage drops.
