---
layout: article
title:  "RC natural response"
author: Willy McAllister
comments: true
---

The Resistor-Capacitor $(\text{RC})$ circuit is one of the first interesting circuits we can create and analyze. Understanding the behavior of this circuit is essential to understanding electronic systems. 

This is the first circuit we come across that changes with time. To develop a precise understanding requires methods from calculus. We need [derivatives](https://www.khanacademy.org/math/calculus-home/taking-derivatives-calc) to describe how the $\text{RC}$ circuit works.

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The natural response of a resistor-capacitor circuit is a diminishing exponential, 

$v(t) = \text V_0\,e^{-t/\text{RC}}$

$\text V_0$ is the initial voltage at time $t=0$.

The time constant for an $\text{RC}$ circuit is $\tau = \text{RC}$.

----

We want to understand the *natural response* of this circuit. 

![RC natural response circuit](https://fastly.kastatic.org/ka-perseus-images/10a848b3284fc5d64bf1ff8f77735ad06990c78f.svg){: .centered :}{: height="200px"} 

We will force an initial charge onto the capacitor. This will cause a voltage to appear according to $q = \text C\,v$. Then we step back and watch what the voltage does 'naturally.' Whatever happens is called the *natural response*.

## Intuition - predict what happens

The circuit we explore in this section is set up to place an initial charge on the capacitor and then let go.

![RC natural response circuit with switch]({{ site.baseurl }}{% link i/rc_natural_response1.svg %}){: .centered :}{: height="200px"}

The switch starts in the down position as shown, connecting the resistor in parallel with the capacitor. We want to know what happens to $\goldD{v_\text C}$, the capacitor voltage, when we flip the switch back and forth. 

<details>
<summary>giving names to voltages and currents</summary>
<p>A common way to name voltages and currents is to use lower-case names for values that change with time, $v$ or $i(t)$. We use upper-case names to suggest constant values, $\text V$ or $\text I$. For example, a battery or power supply voltage might begin with an uppercase letter like $\text{VDD}$, or $\text V_{\text{BAT}}$. The capital $\text V$ reminds us the voltage doesn't change. This naming convention is not guaranteed for every schematic you come across, but it is a helpful practice.</p>
</details>

We'll think about these questions one at a time, 

**What is $v_\text C$, the voltage across the capacitor...**  
* **before the switch flips up?**
* **after the switch flips up?** 
* **after the switch flips back down?**

### Before the switch flips up

We begin by figuring out the *initial state* of the circuit, before anything changes. With the switch in the down position we draw the following equivalent circuit. $v_{in}$ is $0$ volts, and the left end of $\text R$ is connected to the bottom of $\text C$.

![RC natural response circuit with switch down]({{ site.baseurl }}{% link i/rc_natural_response2.svg %}){: .centered :}{: height="200px"}

Let's assume for the moment the circuit has been sitting in this state for a long time, so any charge that may have been stored on the capacitor in the past has long since drained away through the resistor, leaving no charge on the capacitor, $q_\text C = 0$. From this we know the voltage across the capacitor must be $0$ volts, because $v_\text C = q / \text C = 0 / \text C = 0$.

Since the capacitor has $0$ volts across it, so must the resistor, so the current through $\text R$ must be $0$. Everything is $0$, current and voltage. We say the circuit is *in steady state* or *quiescent* or *at an equilibrium*. This answers the first question, "What is the voltage across $\text C$ before the switch flips."

### After the switch flips up

Now flip the switch up. Voltage $v_{in}$ becomes $\text V_{\text{BAT}}$, and something is about to change.

![RC natural response circuit with switch up]({{ site.baseurl }}{% link i/rc_natural_response3.svg %}){: .centered :}{: height="200px"}

Current begins flowing out of the positive terminal of the battery, through $\text R$ and $\text C$. Charge accumulates on the capacitor. The accumulating charge generates a rising voltage across the capacitor ($v_\text C = q / \text C$). The time period where voltage $v_\text C$ is changing is called a *transient* period. 

What keeps $v_\text C$ from rising forever? Charge accumulates on the capacitor until $v_\text C$ rises to the same value as the battery voltage, until $v_\text C = \text V_{\text{BAT}}$. At that point, the voltage across the resistor is $0$ volts, so current in the resistor stops flowing (Ohm's Law). That also means  current  (charge) stops flowing into the capacitor. The amount of charge on the capacitor stops changing and therefore the capacitor voltage becomes constant at $v_\text c=\text V_{\text{BAT}}$. At this point, nothing is changing, and the transient period has come to an end.

We've answered the second question. After the switch flips up and after a transient period comes to an end, the circuit assumes a new steady state with $v_{\text C} = \text V_{\text{BAT}}$. It stays in this state until something comes along to disturb its bliss. 

### After the switch flips back down

Now we'll flip the switch again, returning it back to the negative terminal of the battery ($v_{in}=0$). What happens? 

![RC natural response circuit with switch down]({{ site.baseurl }}{% link i/rc_natural_response2.svg %}){: .centered :}{: height="200px"}

This is the same circuit we started with, but this time $\text C$ is storing some charge. The left end of $\text R$ is at $0\,\text{volts}$ and the right end is at $\text V_{\text{BAT}}\,\text{volts}$. This voltage across the resistor terminals means a current starts to flow at the moment the switch flips down. The capacitor provides the charge needed to form this current. 

Charge will continue to flow out of the capacitor and through the resistor until all the charge originally stored in $\text C$ is depleted. $v_\text C$ gradually falls from $\text V_{\text{BAT}}$ down to zero volts. The voltage difference across $\text R$ also falls to zero and the current stops. The circuit has now returned to its original equilibrium state. This answers the third question, "What is the voltage across $\text C$ after the switch flips back down?" 

### Summary 

Using just our intuition, we figured out the capacitor voltage starts at $0$ volts, rises to $\text V_{\text{BAT}}$, and then goes back to $0$ volts again. Said another way, $v_\text C$ goes from an initial steady state, through a transient period to a new steady state, then through a second transient back to its original state. We know the exact starting and ending voltage of each transient. Not bad for intuition, but ... What do we not know? We don't know how long the transients last or their exact shape. It's time to break out  some calculus to get a precise and useful solution.

## Formal derivation of the $\text{RC}$ natural response

We look at the simplest possible case. The circuit is just $\text R$ and $\text C$ connected together. By "find the response" we mean find $\goldD v$ and $\blueD i$ as a function of time.

![](https://ka-perseus-images.s3.amazonaws.com/5de080e55a9fb04612b3db5660821c1606268ab7.svg){: .centered :}{: height="200px"}

To make the circuit do something other than just sit there we place an initial charge on the capacitor. Some external unseen circuit does this. After adding this initial energy, we step back and see what the circuit does *naturally*. Imagine the capacitor was charged to some initial voltage $\text V_0$ by an external circuit, which was disconnected just a moment ago. 

The result we are about to derive is called the *natural response* of an $\text{RC}$ circuit. The natural response is what the circuit does when there is an initial condition, but nothing else is driving the circuit.

The steps we are going to follow next are,
* Model the components with their $i$-$v$ equations
* Model the circuit using Kirchhoff's Current Law
* The models give us a differential equation
* We solve the equation step-by-step and plot the result

### Model the components

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

### Model the circuit

Next we write an equation using Kirchhoff's Current Law (KCL).

![](https://ka-perseus-images.s3.amazonaws.com/141b45ec632e07acf70c67d0a29d3c66262304b5.svg){: .centered :}{: height="200px"}

Using the form of KCL that says, "the sum of currents flowing out of a node is $0$",

$i_\text C + i_\text R = 0$

Substitute in the two $i$-$v$ relationships,

$\text C\,\dfrac{dv}{dt} + \dfrac 1 {\text R} \, {v} = 0$

### Solve the circuit

The previous equation has a fancy name. It is called a *first-order ordinary differential equation* (ODE). 

<details>
<summary>What do these terms mean?</summary>
<p>It is a differential equation because it contains derivatives $dv/dt$.</p>
<p>It is 'first-order' because the highest derivative is a first derivative $dv/dt$.</p>
<p>It is 'ordinary' because there is just one independent variable $t$, (as opposed to partial derivatives of multiple independent variables). Ordinary comes from 'ordinal'. </p> 

<p>It amazes me how schematic symbols turn into bits and pieces of differential equations. Simple symbols, sophisticated ideas.</p>
</details>

We are going to solve this equation together step-by-step,

$\text C\,\dfrac{dv}{dt} + \dfrac 1 {\text R} \, {v} = 0\qquad$ (differential equation)

When you solve a differential equation you have to find some sort of function, in our case, a function of voltage with respect to time, $v(t)$, where plugging $v(t)$ into the differential equation makes it come true. 

Where do solutions come from? One way is to guess at a solution, and try it out. (Not any wild guess, but an informed guess.)

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

$v(t) = K\,e^{\displaystyle st}$

* $t$ is time 
* $v(t)$ is voltage as a function of time 
* $K$ and $s$ are constants we have to figure out
  * $K$ is an amplitude factor that makes the voltage bigger or smaller.
  * $s$ is in the exponent. $s$ has to have units that cancel out time, so its units are $1/t$.

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

Nearly done. We have $s$ and all that's left is to figure out $K$. 

To find $K$ we examine the *initial conditions* of the circuit. Recall the capacitor was initially charged to voltage $\text V_0$ at the time the switch was flipped. If we call that time $t = 0$, then,

$v(0) = \text V_0 = Ke^{-0/\text{RC}} = K e^0$

Solving for $K$,

 $K = \text V_0$ 

We found values for $s$ and $K$ to make the differential equation true. We are all done. Drum roll please...  

The general solution for the natural response of an $\text{RC}$ circuit is,

$\large v(t) = \text V_0\,e^{-t/\text{RC}}$

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

![RC natural response example 1]({{ site.baseurl }}{% link i/rc_natural_response4.svg %}){: .centered :}{: height="200px"}

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

$v(3\,\text{ms}) = 0.515 \,\text{volts}\qquad$ (circled in the plot below)

**c. Plot $v(t)$**

![RC natural response example 1 plot]({{ site.baseurl }}{% link i/rc_natural_response_ex1.svg %}){: .centered :}

The $\redB{\text{circle}}$ shows the answer from part **b**: $v(t) = 0.515 \,\text V$ when $t=\text{RC} = 3 \,\text{ms}$. 

### A useful rule of thumb

When time equals the time constant, $\text{RC}$, the voltage is down from its initial value by a factor of $1/e$, or down to roughly $37\%$ of its starting value. This is true for any initial voltage and any $\text{RC}$ product.

## Example 2

![RC natural response example 2]({{ site.baseurl }}{% link i/rc_natural_response5.svg %}){: .centered :}{: height="200px"}

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

$\tau = 1 \times 10^{-9} = 1\,\text{ns}$

With a time constant of $1\,\text{nsec}$, this is a pretty quick circuit.

**c. Plot $v(t)$.**

![RC natural response example 2 plot]({{ site.baseurl }}{% link i/rc_natural_response_ex2.svg %}){: .centered :}

**d. How many times constants does it take for the voltage to drop below $95\%$ of its initial value?**  

$95\%$ below $\text V_0$ is $1.0 - (0.95 \times 1.0) = 0.05$ volts. Looking at the graph we see that happens at around $3\,\text{nsec}$. This corresponds to $3$ time constants. This point is marked by the $\redB{\text{circle}}$ just above in part **c.**

### Another rule of thumb

Any $\text{RC}$ transient is pretty much over after $3$ time constants.  Amazingly, this is true for any initial voltage and any $\text{RC}$ product.

## Epilogue

### Is there another way to solve this ODE?

The ODE we solved here is a *separable* differential equation. We used a guessing method. Another method for solving separable differential equations is included as an appendix at the end of [RL natural response]({{ site.baseurl }}{% link _articles/rl-natural-response.md %}). The math is more sophisticated, but there is no guessing involved. 

Sal h as a video on [separable differential equations](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-separable-eq/v/separable-differential-equations-introduction) that goes into depth on this method. He talks about [guessing a solution](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/linear-homogeneous-2nd-order/v/2nd-order-linear-homogeneous-differential-equations-2) while solving asecond-order differential equation. We use the guessing method again when we solve the [RLC natural response]({{ site.baseurl }}{% link _articles/rlc-natural-response-derivation.md %}).

### $e$ is special

The function $e^x$ either grows ($x>0$) or decays ($x<0$) at some rate, depending on $x$. There are plenty of other functions with this same general shape. Any function that looks like $y^x$ has a similar curve. If we can get the same shape with different values of the base $y$, like $2^x$ or $10^x$, what's the big deal about this irrational number $e = 2.71828...$? 

The reason we love $e$ more than any other choice is that $e$ is the *one and only* number where the derivative of $y^x$ is exactly equal to $y^x$. That is, the slope of $e^x$ for any value of $x$ equals $e^x$.

$\dfrac{\phantom{^x}\text de^x}{\phantom{^x}\text dx\phantom{^x}} = e^x$ 

No muss, no fuss, exactly the same thing. This is worth memorizing.

[//]: # (The \phantom in the previous equation is a trick to typeset the denominator nicely aligned with the numerator. Purely optional.)

### Exponentials occur in nature

The problem we just solved, the natural response of an RC circuit, is representative of things that occur often in nature. The exponential function is a very good mathematical model for describing how things grow or decay. Uranium decay, [population growth](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-exp-models/v/modeling-population-with-simple-differential-equation), mortgage payments, [heating and cooling](https://www.khanacademy.org/math/differential-equations/first-order-differential-equations/exponential-models-diff-eq/v/newtons-law-of-cooling), and other real-world processes. 

In the broadest terms: **Exponentials arise in situations where the *amount of change* is proportional to the *amount of stuff*.** For our RC circuit, the rate of change of voltage is proportional to the voltage. The curve is steep when the voltage is high, and shallows out as voltage drops.

## Summary

The natural response of an $\text{RC}$ circuit is an exponential function,

$v(t) = \text V_0\,\large e^{-t/\text{RC}}$

Where $\text V_0$ is the voltage at time $t=0$.

The time constant for an $\text{RC}$ circuit is $\tau = \text{RC}$.

The $\text{RC}$ circuit can be found everywhere in electronics. Sometimes you create it on purpose. Other times it appears by accident, and you have to deal with it.

<details>
    <summary>by accident?</summary>
    <p>In a real-world circuit, wires are always surrounded by other conductive elements, for example, other wires or a metal enclosure. Two conductors separated by an insulator is a capacitor. These capacitors (usually small, usually unwanted) are connected to the wire you care about. Many times you can ignore these so-called <em>parasitic</em> capacitances, but sometimes they play an important role in how the circuit works.</p>
</details>
