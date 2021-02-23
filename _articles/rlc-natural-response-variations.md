---
layout: article
title:  "RLC natural response - variations"
author: Willy McAllister
comments: true
---

We explore three variations of the series resistor-inductor-capacitor $(\text{RLC)}$ natural response.    

![RLC circuit]({{ site.baseurl }}{% link i/rlc_natural_response18.svg %}){: .centered :} 

The previous article [RLC natural response - derivation]({{ site.baseurl }}{% link _articles/rlc-natural-response-derivation.md %}) set up the differential equation and derived the characteristic equation. You should study that article before this one. Our story picks up at the point where we solve for $s$, the roots of the characteristic equation.

What follows is one of the truly beautiful results in analog electronics. The blizzard of math may seem overwhelming. Take it slow and go through one solution at a time, with breaks in between. This is the last circuit we'll analyze with the full differential equation treatment. Whew!

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

There are three different solutions to the $\text{RLC}$ differential equation, depending on the relative size of $\alpha^2$ and $\omega_o^2$,

* If $\alpha > \omega_0$, over damped. The solution is the sum of two decaying exponentials.
* If $\alpha = \omega_0$, critically damped. The solution is the product of $t$ times a decaying exponential. 
* If $\alpha < \omega_0$, under damped. The solution is the product of a sine times a decaying exponential.

We solve each variation and plot examples.

----

The natural response of a resistor-inductor-capacitor circuit $(\text{RLC)}$ takes on three different forms depending on the specific component values.  

## Strategy

The strategy we use to solve a second-order differential equation is this,  

1. Derive a differential equation from the circuit.
2. Guess a solution with adjustable constants (always some sort of exponential)
3. Plug the solution into the differential equation
4. Gather like factors and identify the *characteristic equation*
5. Find the roots, $s$, of the characteristic equation, also known as the *natural frequencies*
6. Find the amplitude constants, $K$, using the initial conditions
7. The guess is confirmed if the $K$'s exist and are in fact constant
8. Assemble the result
9. Pick real component values, plug them into the result, and plot 

The [previous article]({{ site.baseurl }}{% link _articles/rlc-natural-response-derivation.md %}) covered Steps 1 - 4 and gave us the characteristic equation,

$s^2 + \dfrac{\text R}{\text L}s + \dfrac{1}{\text{LC}} = 0$

We solved for $s$ using the quadratic equation,

$s=\dfrac{-\text R \pm\sqrt{\text R^2-4\text L/\text C}}{2\text L}$ 

We made up two variables $\alpha$ and $\omega_o$,
  
$\alpha = \dfrac{\text R}{2\text L},\quad$ $\omega_o = \dfrac{1}{\sqrt{\text{LC}}}$

This allows us to write the characteristic equation as,

$s^2 + 2\alpha s + \omega_o^2 = 0$

 and $s$ as,

$s=-\alpha \pm \sqrt{\alpha^2 - \omega_o^2}$

Since $s$ is two values, we proposed a solution with two superimposed exponential terms,

$i = K_1 e^{s_1t} + K_2 e^{s_2t}$

## Three variations

We now begin at Step 5. This is where it gets really interesting. The problem splits into three different paths based on how $s$ turns out. 

$s = -\alpha \pm \sqrt{\alpha^2 - \omega_o^2}$

Depending on the relative size of $\alpha$ compared to $\omega_o$ the expression $\alpha^2 - \omega_o^2$ under the square root will be positive, zero, or negative,

| relation |sign of $\alpha^2 - \omega_o^2$ | $\sqrt{\alpha^2 - \omega_o^2}$ |
|-------------------|:-------------------:|------------------------------|
| $\alpha>\omega_o$ | $+$                 | positive real number         |
| $\alpha=\omega_o$ | $0$                 | vanishes                     |
| $\alpha<\omega_o$ | $-$                 | imaginary number             |

The roots $s$ will come out like this,

| relation |sign of $\alpha^2 - \omega_o^2$ |            $s$          |
|-------------------|:-------------------:|---------------------------|
| $\alpha>\omega_o$ | $+$                 | 2 different real roots    |
| $\alpha=\omega_o$ | $0$                 | 2 repeated real roots     |
| $\alpha<\omega_o$ | $-$                 | 2 complex conjugate roots |

Looking farther ahead, the response $i(t)$ will come out like this,

| relation |sign of $\alpha^2 - \omega_o^2$ |             $i(t)$             |
|-------------------|:-------------------:|----------------------------------|
| $\alpha>\omega_o$ | $+$                 | sum of 2 decaying exponentials   |
| $\alpha=\omega_o$ | $0$                 | $t\,\cdot$ decaying exponential  | 
| $\alpha<\omega_o$ | $-$                 | $\sin\cdot$ decaying exponential | 

We have nicknames for the three variations,

| relation |sign of $\alpha^2 - \omega_o^2$ | nickname        |
|-------------------|:-------------------:|-------------------|
| $\alpha>\omega_o$ | $+$                 | over damped       |
| $\alpha=\omega_o$ | $0$                 | critically damped |
| $\alpha<\omega_o$ | $-$                 | under damped      | 

For the rest of this article we carry each variation through to a symbolic solution. Then we do an example circuit with real component values. Each variations begins at Step 5: Find the roots of the characteristic equation.

## Under damped

The under damped case is when $\alpha<\omega_o$. The solution ends up as a decaying sine wave. 

When $\alpha^2$ is less than $\omega_o^2$ the expression inside the square root is negative,  

$s_{1,2} = -\alpha \pm \sqrt{\alpha^2 - \omega_o^2}$ 

The square root of a negative number is an imaginary number, $j\,$something. So $s$ will be two complex numbers with the same real part, $-\alpha$, and the same imaginary part, $\sqrt{\alpha^2 - \omega_o^2}$, but with opposite signs. That means $s_1$ and $s_2$ are complex conjugates. If you start out with real-world values for $\text R, \text L,$ and $\text C$, $s$ is always complex conjugates.

At this point we introduce an optional frequency variable. It makes the upcoming equations slightly more compact.

$\omega_d = \sqrt{\omega_o^2 - \alpha^2}$

The $d$ stands for *damped*. Notice $\omega_o$ and $\alpha$ are flipped around in the subtraction. It's just a trick to get a positive sign under the square root. This makes $\omega_d$ positive and we write $j\omega_d$ to make up for the backwards subtraction.  

With this bit of notation, $s$ becomes,

$s_{1,2} = -\alpha \pm j\omega_d$  

>Engineers use the letter $j$ for the imaginary unit $\sqrt{-1}$, since we use $i$ for current.

Notice: If $\text R = 0$ then $\alpha = 0$ and $\omega_d$ is the same as $\omega_o$. If $\text R$ is finite, then $\omega_d <\omega_o$.

The proposed natural response, 

$i = K_1 e^{s_1t} + K_2 e^{s_2t}$

turns into the sum of two exponentials whose exponents are complex conjugates,

$i = K_1 e^{(-\alpha + j\omega_d) \,t} + K_2 e^{(-\alpha - j\omega_d) \,t}$

We tease apart the real and imaginary parts of the exponents,

$i = K_1 e^{-\alpha t}e^{+j\omega_d t} + K_2 e^{-\alpha t}e^{-j\omega_d t}$

and pull the common $e^{-\alpha t}$ term out in front,

$i = e^{-\alpha t} \left (K_1 e^{+j\omega_dt} + K_2 e^{-j\omega_dt} \right )$

All of the real exponents are in the leading term, $e^{-\alpha t}$. The two imaginary exponents are grouped together in the second big term in parentheses. We saw something similar to this in the $\text{LC}$ natural response. As we did then, we turn to Euler's formula to help us deal with the imaginary exponents. 

### Euler's formula

Sal's video explains how [Maclaurin series expansions](https://www.khanacademy.org/math/calculus-home/series-calc/maclaurin-taylor-calc/v/euler-s-formula-and-euler-s-identity) of $e^{jx}$, $\sin x$, and $\cos x$ lead to *Euler's formula,* <small>(whenever Sal says $i$, we say $j$)</small>

$e^{+jx} = \cos x + j\sin x$  
$e^{-jx} = \cos x - j\sin x$

Euler's formula is handy when you want to turn $e^{j\,whatever}$ into a normal complex number. 

### Use Euler's formula
{:.no_toc}

Apply Euler's formula to change this sum,

$K_1 e^{+j\omega_dt} + K_2 e^{-j\omega_dt}$

into this sum,

$K_1(\cos \omega_dt + j\sin \omega_dt) + K_2(\cos \omega_dt - j\sin \omega_dt)$

Multiply through constants $K_1$ and $K_2$,

$K_1\cos \omega_dt + jK_1\sin \omega_dt + K_2\cos \omega_dt - jK_2\sin \omega_dt\,$,

and gather cosine terms and sine terms,

$(K_1 + K_2)\cos \omega_dt + j(K_1 -K_2)\sin \omega_dt$

Without messing up the equation, we replace the unknown $K$'s with different unknown $A$'s. 

Let $A_1 = (K_1 + K_2)$, and $A_2 = j(K_1-K_2$). 

The previous expression becomes,

$A_1\cos \omega_dt + A_2\sin \omega_dt$

Swapping $A$'s for $K$'s may seem bogus, but it's okay. Since we didn't know $K$ we might as well not know $A$. It makes no difference.

And now stuff this back into our proposed solution,

$i = e^{-\alpha t}\left (A_1\cos \omega_dt + A_2\sin \omega_dt \right)$

Quick review:  
* We made our usual guess at a proposed solution for $i(t)$ made of exponentials. 
* We solved the characteristic equation. The roots turned out to be complex conjugates. 
* We used Euler's formula to convert the two exponentials with imaginary exponents into ordinary complex numbers.
* In a non-bogus manner we cleaned up the constants, replacing $K$'s with $A$'s.

{% capture summary %}$j\omega$ and $\omega t${% endcapture %}  
{% capture details %}  
Whenever we talk about complex exponentials it's always "$j\omega$ this, $j\omega$ that." Then later on we seem to talk about "$\sin \omega t$ and $\cos \omega t$." When did $\omega$ escape from $j$? It happens right here when we apply Euler's formula. 

One of the side effects of Euler's formula $\omega$ gets separated from $j$ and come out into the "real" (not imaginary) world.  
{% endcapture %}{% include details.html %} 

Now we want to find the amplitude constants, $A_1$ and $A_2$. We use the initial conditions, once we figure out what they are.

### Find the initial conditions
{:.no_toc}

We'll assume the current starts at zero and the capacitor starts with a voltage of $\text V_0$, 

![RLC with initial voltage Vo]({{ site.baseurl }}{% link i/rlc_natural_response20.svg %}){: .centered :}

For a second-order differential equation, it turns out you need two initial conditions to get a complete solution: one for the independent variable, $i$,  and another for the first derivative of the independent variable, $di/dt$.

Finding the initial conditions is a two-step process,
1. We are usually given circuit conditions the moment *before* the switch closes, at $t(0^-)$. We have to find the conditions the moment *after* the switch closes, at $t(0^+)$.
2. Do whatever math and circuit wizardry it takes to find the initial conditions we need, in this case, $i(0^+)$ and $di/dt(0^+)$.

#### Get through the switch closing
{:.no_toc}

Closing a switch is a pretty disruptive event. Fortunately, we know some properties of inductors and capacitors that tell us what happens,

* Inductor current does not change instantly.
    - So the current in an inductor is the same before and after a switch closes.
    - $i_\text L(0^+)=i_\text L(0^-)$
* Capacitor voltage does not change instantly.
    - So the voltage across a capacitor is the same before and after a switch closes.
    - $v_\text C(0^+)=v_\text C(0^-)$.

Now advance time to $t=0^+$, the moment *after* the switch closes. For our given starting conditions,

* The current in $\text L$ $($and $\text R$ and $\text C)$ is $i(0^+) = i(0^-) = 0$.
* The voltage on $\text C$ is $v_{\text C}(0^+) = v_{\text C}(0^-) = \text V_0$.

![RLC after switch closes, voltage Vo]({{ site.baseurl }}{% link i/rlc_natural_response26.svg %}){: .centered :}

Circuit conditions just after the switch closes. At $t=0^+$ the current $i(0^+) = 0$ and $v_\text C(0^+) = \text V_0$.
{: .caption :}

We successfully made it through the switch closing. 

#### Now find the initial conditions
{:.no_toc}

Notice we have an initial condition for $i$ but not for $di/dt$. Instead, we have the starting voltage on the capacitor. This makes us do a little extra work, but it's not too bad. We still need to find $di/dt(0^+)$. Let's do it.

Any time I see $di/dt$ it makes me think of the inductor $i$-$v$ equation, $v = \text L \, di/dt$. If we could figure out the voltage across the inductor, it will lead us to $di/dt$. 

The inductor voltage is one of the terms in Kirchhoff's Voltage Law (KVL) around the loop,

$v_\text L(0^+) - v_\text R(0^+) - v_\text C(0^+) = 0$

We know the voltage across the resistor is $0$ because the current is $0$.  
We know the voltage across the capacitor is $\text V_0$. Let's fill in the KVL equation,

$v_{\text L}(0^+) - 0 - \text V_0 = 0$

The voltage across the inductor at $t=0^+$ is,

$v_{\text L}(0^+) = \text V_0$

When the switch closes, inductor voltage jumps sharply from $0$ to the same voltage as the capacitor. 

We know $v_{\text L}(0^+)$, so now we can find $di/dt(0^+)$, 

$\text V_0 = \text L\,\dfrac{di}{dt}(0^+)$

$\dfrac{di}{dt}(0^+) = \dfrac{\text V_0}{\text L}$

The moment after the switch closes, the current in the inductor starts changing with an initial upward slope of $\text V_0/\text L$ amperes per second. 

Summary of the initial conditions,

$i(0^+) = 0$

$\dfrac{di}{dt}(0^+) = \dfrac{\text V_0}{\text L}$

### Find the amplitude constants
{:.no_toc}

As a reminder, our proposed solution is,

$i = e^{-\alpha t}(A_1\cos \omega_dt + A_2\sin \omega_dt)$

Let's evaluate the proposed solution at time $t = 0^+$ and see if it isolates one of the $A$'s. Insert $t = 0$ and $i(0^+) = 0$ into the proposed solution,

$0 = e^{0}(A_1 \cos 0 + A_2\sin 0)$

$0 = 1\cdot (A_1\cdot 1 + A_2 \cdot 0)$

$A_1 = 0$

$A_1$ turns out to be $0$, so the cosine term vanishes from the proposed solution, leaving,

$i = A_2 \,e^{-\alpha t} \sin \omega_d t$

Now let's chase down $A_2$ with the second initial condition, $di/dt(0^+) = \text V_0/\text L$. We want to plug this into something. That "something" has to be an equation for the derivative of the current. Where we could find such a thing? How about we take the derivative of the current? 

$\dfrac{di}{dt} = \dfrac{d}{dt}(A_2 \,e^{-\alpha t} \sin \omega_d t)$

This is the derivative of the product of two functions, so we use the [product rule](https://www.khanacademy.org/math/ap-calculus-ab/ab-derivative-rules/ab-product-rule/v/applying-the-product-rule-for-derivatives), 

$\left (f \, g \right )^\prime = f^\prime \, g + f \, g^\prime$ 

{% capture summary %}prime notation{% endcapture %}  
{% capture details %}  
$x^\prime$ means the same thing as $\dfrac{dx}{dt}$.
{% endcapture %}{% include details.html %} 

Identify the two parts of the product and their derivatives,

$f = e^{-\alpha t} \qquad\quad\quad g = \sin \omega_dt$

$f^\prime = -\alpha e^{-\alpha t}\qquad g^\prime = \omega_d \cos \omega_dt$

Assemble the parts according to the product rule, and don't forget to put $A_2$ back in,

$\dfrac{di}{dt} = A_2 (-\alpha e^{-\alpha t} \sin \omega_dt + e^{-\alpha t}\,\omega_d\cos \omega_dt)$

Factor out the common $e^{-\alpha t}$ term and flip the subtraction around,

$\dfrac{di}{dt} = A_2 \,e^{-\alpha t} (\omega_d\cos \omega_d t - \alpha \sin \omega_d t)$

Evaluate this at $t = 0$ with the second initial condition, $\dfrac{di}{dt} = \dfrac{\text V_0}{\text L}$,

$\dfrac{\text V_0}{\text L} = A_2 \, e^0 \,(\omega_d\cos 0 - \alpha \sin 0)$

$\dfrac{\text V_0}{\text L} = A_2 \cdot 1 \cdot (\omega_d \cdot 1 - \alpha \cdot 0) = \omega_d A_2$

$A_2 = \dfrac{\text V_0}{\omega_d \text L}$

We found both amplitude constants, $A_1$ and $A_2$. They both exist and they are both constant (they don't change with time). This confirms our original guess actually does solve the differential equation.

This is the last step of our long journey to find the current. Put $A_2$ into the proposed solution and, after a lot of hard work, the solution for the $\text{RLC}$ under damped response is,

$\boxed{i = \dfrac{\text V_0}{\omega_d \text L} e^{-\alpha t} \sin \omega_d t}$
{: .colorbox :}

As a reminder,

$\alpha = \dfrac{\text R}{2\text L} \qquad \omega_o = \dfrac{1}{\sqrt{\text{LC}}} \qquad \omega_d = \sqrt{\omega_o^2 - \alpha^2}$

$s_{1,2} = -\alpha \pm \sqrt{\alpha^2 - \omega_o^2}\quad$ or $\quad s_{1,2} = -\alpha \pm j\omega_d$

### Under damped example
{:.no_toc}

What does an under damped $i$ look like? Let's do a real example,

Let $\text R = 2 \,\Omega, \text L = 1\,\text H$, and $\text C = 1/5\,\text F$.

Let $v_c(0) = 10\,\text V$ and $i_\text L(0) = 0$.

![Under damped worked example circuit]({{ site.baseurl }}{% link i/rlc_natural_response23.svg %}){: .centered :}

$\text{RLC}$ under damped natural response example circuit. The capacitor has an initial voltage of $10$ volts. There is no current in the inductor the moment prior to the switch closing.
{: .caption :}

Find $\alpha$, $\omega_o$, and $\omega_d$,

$\alpha = \dfrac{\text R}{2\text L} = \dfrac{2}{2 \cdot 1} = 1$ 

$\omega_o = \dfrac{1}{\sqrt{\text{LC}}} = \dfrac{1}{\sqrt{1/5}} = \sqrt 5$

$\omega_d = \sqrt{\omega_o^2 - \alpha^2} = \sqrt{5 - 1} = \sqrt{4} = 2$

Find $s$, the roots of the characteristic equation,

$s_{1,2} = -\alpha \pm \sqrt{\alpha^2 - \omega_o^2}$ 

$s_{1,2} = -1 \pm \sqrt{1^2 - 5^2}$ 

$s_{1,2} = -1 \pm \sqrt{-4}$ 

$s_{1,2} = -1 \pm j2$

$($Or, you could have just used $s_{1,2} = -\alpha \pm j\omega_d = -1 \pm j2 )$

#### Current
{:.no_toc}

The two natural frequencies are complex conjugates, which puts us in the under damped case. We insert them into the under damped solution, 

$i = \dfrac{\text V_0}{\omega_d \text L} e^{-\alpha t} \sin \omega_d t$

$i = \dfrac{10}{2 \cdot 1} e^{-t} \sin 2t$

$i = 5\, e^{-t} \sin 2t$

Let's graph $i$ versus time to appreciate what we have,

![RLC current waveform]({{ site.baseurl }}{% link i/rlc_underdamped_current.svg %}){: .centered :}

Series $\text{RLC}$ under damped current, $\text R=2\,\Omega$, $\text L = 1\,\text H$, and $\text C = \dfrac{1}{5}\,\text F$.  
The faint gray curves are $\pm 5e^{-t}$, the envelope of the decaying sine wave.
{: .caption :}

Talk it through,
* When the switch closes, the current starts at $0$ and takes a big surge upwards. You can see the initial slope of $10\,\text A/\text{sec}$. 
* The wave dies away pretty quickly. You can see only three swings before the current settles down to near zero. 
* The initial energy in the system dissipates as heat in the resistor.
* Remember, this solution assumes the initial current is zero.

This example is called an *under damped* solution because the current swings above and below zero, at least a few times.

#### Voltages
{:.no_toc}

Before we move on we should take a look at the natural response of the three voltages.

![Under damped example after switch closes]({{ site.baseurl }}{% link i/rlc_natural_response24.svg %}){: .centered :}

#### Resistor voltage
{:.no_toc}

We know $i$ so Ohm's Law tells us the resistor voltage,

$v_\text R = -i\,\text R\quad$ $( -$ sign because $i$ is backwards relative to $v_\text R)$

$v_\text R = -5 e^{-t} \sin 2 t \cdot 2\,\Omega$

$v_\text R = -10 e^{-t} \sin 2 t$

#### Inductor voltage
{:.no_toc}

The inductor voltage emerges from the inductor $i$-$v$ equation,

$v_\text L = \text L \,\dfrac{di}{dt}$

$v_\text L = 1\cdot \dfrac{d}{dt}(5 e^{-t}\sin2t)$

This is the same derivative we did above to find $A_2$. We have a product of two functions, so we apply the product rule for derivatives,

$\left (f \, g \right )^\prime = f^\prime \, g + f \, g^\prime$

$f = 5\,e^{-t} \qquad\quad g = \sin 2t$

$f^\prime = -5\,e^{-t}\qquad g^\prime = 2\cos 2t$

$\left (f \cdot g \right )^\prime = -5e^{-t} \sin 2t + 5\,e^{-t}\,2\cos 2t$

$v_\text L = 5e^{-t} (2\cos 2t - \sin 2t)$

#### Capacitor voltage
{:.no_toc}

How do you find the voltage on a capacitor if you know the current? We use the integral form of the capacitor $i$-$v$ equation $($with an extra $-$ sign because $i$ is backwards relative to $v_\text C)$,

$v_\text C = \dfrac{1}{\text C}\,\displaystyle \int -i\, dt\qquad$

$v_\text C = \dfrac{1}{\small{1/5}}\, \displaystyle \int -5e^{-t}\sin 2t\, dt$

$v_\text C = 5e^{-t} (\sin 2t + 2\cos 2t)$

<details>
<summary>show all the steps of the integration</summary>
<p>$v_\text C = -25\displaystyle \int e^{-t}\sin 2t\, dt$</p>

<p>$\dfrac{v_\text C}{-25} = \displaystyle \int e^{-t}\sin 2t\, dt$</p>

<p>The integral is the product of two functions. We solve using <a href="https://www.khanacademy.org/math/calculus-home/integration-techniques-calc/integration-by-parts-calc/v/deriving-integration-by-parts-formula">integration by parts</a>. This is the inverse of the product rule for derivatives. We use integration by parts twice in succession. First time,</p>

<p>$\displaystyle\int f^\prime g = fg - \int f g^\prime$</p>

<p>$f^\prime = e^{-t} \qquad\,\,\,\, g = \sin 2t$  <br>
$f = -e^{-t} \qquad g^\prime = 2 \cos 2t$</p>

<p>$\displaystyle \int e^{-t} \sin 2t \,dt = -e^{-t}\sin 2t - \int-e^{-t}2\cos 2t\,dt$</p>

<p>The last term on the right is another integral of a product, so we apply integration by parts a second time,</p>

<p>$f^\prime = -e^{-t} \qquad g = 2\cos 2t$  <br>
$f = e^{-t} \qquad\,\,\,\,\, g^\prime = -4 \sin 2t$</p>

<p>$\displaystyle \int e^{-t} \sin 2t \,dt= -e^{-t}\sin 2t - \left (e^{-t}2\cos 2t - \displaystyle \int e^{-t}(-4\sin 2t)\,dt \right )$</p>

<p>$\displaystyle \int e^{-t} \sin 2t \,dt= -e^{-t}\sin 2t -e^{-t}2\cos 2t - 4\displaystyle \int e^{-t}\sin 2t\,dt$</p>

<p>Notice how the integral on the left side appears again at the end of right side. Let's merge those two terms on the left side,</p>

<p>$\displaystyle \int 5 e^{-t} \sin 2t \,dt = -e^{-t}\sin 2t -e^{-t}2\cos 2t$</p>

<p>$\displaystyle \int e^{-t} \sin 2t \,dt = \dfrac{1}{5} \left (-e^{-t}\sin 2t -e^{-t}2\cos 2t \right )$</p>

<p>If you refer back to our starting integral, the integral term on the left is equal to $\dfrac{v_\text C}{-25}$.</p>

<p>$\dfrac{v_\text C}{-25} = \dfrac{1}{5} \left (-e^{-t}\sin 2t -e^{-t}2\cos 2t \right )$</p>

<p>Solve for $v_\text C$. The result is (with the obligatory constant),</p>

<p>$v_\text C= 5e^{-t}(\sin 2t + 2\cos 2t) + C$</p>

<p>To deal with the constant we evaluate the equation at a time when we know $v_\text C$. A good time to pick is $t=0$ because that's when we know $v_\text C = +10\,\text V$.</p>

<p>$+10\,\text V = 5 e^{-0}(\sin 2\cdot 0 + 2 \cos 2\cdot 0) + C$</p>

<p>$+10\,\text V = 5 \cdot 1 \cdot(0 + 2 \cdot 1) + C$</p>

<p>$C = 0$</p>

<p>$v_\text C = 5 e^{-t} (\sin 2t + 2\cos 2t)$
</p>
</details>

<details>
<summary>another way to find the capacitor voltage with KVL</summary>
<p>As you can see, the derivation of the capacitor voltage is a pretty involved process. Definitely not an easy integral. There is another approach: Since we already figured out the resistor and inductor voltages, we use Kirchhoff's Voltage Law (KVL) to find the capacitor voltage.</p>
<p>KVL around the loop, starting from the bottom left,</p>
<p>$v_\text L - v_\text R - v_\text C = 0$ </p>
<p>$v_\text C = v_\text L - v_\text R$</p>
<p>We already solved $v_\text L$ and $v_\text R$,</p> 
<p>$v_\text L = -5e^{-t} (\sin 2t - 2\cos 2t)$  <br>
   $v_\text R = -10 e^{-t} \sin 2 t$</p>
<p>Fill in KVL with the voltages we know,</p>
<p>$v_\text C = -5e^{-t} (\sin 2t - 2\cos 2t) -(-10 e^{-t} \sin 2 t)$</p>
<p>Merge the like terms gives us $v_\text C$,</p>
<p>$v_\text C = 5e^{-t}(\sin 2t + 2\cos 2t)$</p>
<p>It's reassuring we got the same answer we found by integration. This KVL method worked because we know the other voltages. This might not always be the case. There may be times you have to do the integration. Who doesn't enjoy a nice integration by parts every now and then?</p>
</details>

#### Plot the voltages
{:.no_toc}

I never fully understand a waveform until I see a picture of it. Here are all three voltages plotted together,

![RLC voltage waveforms]({{ site.baseurl }}{% link i/rlc_underdamped_voltages.svg %}){: .centered :}

Series $\text{RLC}$ under damped voltages, $v_\text R, v_\text L, v_\text C$, for $\text R=2\,\Omega$, $\text L = 1\,\text H$, and $\text C = \dfrac{1}{5}\,\text F$.
{: .caption :}

{% capture summary %}current waveform for comparison{% endcapture %}  
{% capture details %}  
![RLC current waveform]({{ site.baseurl }}{% link i/rlc_underdamped_current.svg %}){: .centered :}  
{% endcapture %}{% include details.html %} 

Talk it through,  
* The capacitor voltage (blue) starts at $10\,\text V$ as predicted, and rapidly moves down as charge flows out. It goes negative as charge flows around through the inductor and onto the other plate of the capacitor. 
* The inductor voltage (magenta) makes a sharp positive jump from $0$ to $10\,\text V$ when the switch closes. Remember how we figured this out when we found the second initial condition? The inductor voltage is positive as long as $i$ has a positive slope. It becomes negative a little after $0.5$ seconds. This coincides with when the current reaches its peak. As the current rolls over to a negative slope, the inductor voltage goes negative at the same time. 
* The resistor voltage (green) goes along for the ride, doing its Ohm's Law thing the whole time. The resistor voltage is a scaled version of the current.

{% capture summary %}symbolic voltages{% endcapture %}  
{% capture details %}  
Now that you've seen how to solve the voltages with example components, try deriving the symbolic representation of the under damped voltages. Here's what you should end up with,

$v_\text R = -\dfrac{2\text V_0}{\omega_d} e^{-\alpha t}\alpha \sin \omega_d t$

$v_\text L = \phantom{-} \,\dfrac{\text V_0}{\omega_d}e^{-\alpha t}(\omega_d \cos \omega_d t - \alpha \sin \omega_d t)$

$v_\text C = \phantom{-} \,\dfrac{\text V_0}{\omega_d} e^{-\alpha t}(\omega_d \cos \omega_d t + \alpha \sin \omega_d t)$  
{% endcapture %}{% include details.html %} 

### Under damped discussion
{:.no_toc}

This example is called *under damped* because the current swings above and below zero. A bell is an *under damped* second-order mechanical system. For second-order electrical systems, we borrow a bell term and say the under damped system \"rings.\"

The current looks like a sine wave that diminishes over time. Think of the sound a bell makes when you strike it. The bell's tone rings out and fades over time. A high-quality bell rings for a long time. If you pinch the bell with your fingers, the energy dissipates faster and the tone does not last as long. It also sounds duller. 

When we analyzed the [$\text{LC}$ natural response]({{ site.baseurl }}{% link _videos/lc-natural-response-intuition1.md %}) we came up with a sine wave that lasted forever. In real life, $\text R$ is never zero, so there is always some energy lost. After all, a bell does not ring forever.

### Under damped simulation model
{:.no_toc}

To explore further on your own, open this [under damped simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["l",[136,48,0],{"name":"L","l":"1","_json_":0},["4","7"]],["r",[224,24,1],{"name":"R","r":"2","_json_":1},["2","1"]],["c",[272,48,0],{"name":"C","c":"0.2","_json_":2},["2","0"]],["n",[176,136,3],{"name":"SW1","WL":"10000","_json_":3},["7","3","0"]],["w",[136,136,176,136]],["w",[224,136,272,136]],["w",[136,24,176,24]],["v",[320,160,0],{"name":"SW2-ctl","value":"step(0,20,5u,1n)","_json_":7},["6","0"]],["g",[320,208,0],{"_json_":8},["0"]],["v",[392,48,0],{"name":"Vo","value":"dc(10)","_json_":9},["5","0"]],["w",[392,48,392,24]],["g",[392,112,0],{"_json_":11},["0"]],["p",[296,24,3],{"name":"SW2","WL":"10000","_json_":12},["2","6","5"]],["a",[136,32,1],{"color":"black","offset":"0","_json_":13},["1","4"]],["w",[136,24,136,32]],["w",[392,24,344,24]],["v",[200,160,4],{"name":"SW1-ctl","value":"step(0,20,10m,1n)","_json_":16},["3","0"]],["g",[200,208,0],{"_json_":17},["0"]],["w",[272,48,272,24]],["w",[296,24,272,24]],["w",[224,24,272,24]],["w",[272,136,272,96]],["w",[136,136,136,96]],["w",[392,112,392,96]],["w",[320,48,320,160]],["s",[272,24,0],{"color":"cyan","offset":"0","_json_":25},["2"]],["g",[272,136,0],{"_json_":26},["0"]],["s",[136,24,0],{"color":"magenta","offset":"0","_json_":27},["1"]],["view",12,-28.199,1.5625,"50","10","1G",null,"100","6","1000"]]){:target="_blank"}. Run a transient analysis by clicking on **TRAN** in the main menu bar. 

The capacitor voltage is initialized to $10\,\text V$ by switch SW2. The natural response begins when switch SW1 closes. Simulation programs often do not include a switch element, so we have to create one. The switches are very low resistance (very wide) MOSFET transistors. The switches are controlled by the two voltage sources, SW1-ctl and SW2-ctl.

The current, $i$, is shown in black, measured by the little arrowhead in the upper left above the inductor. The two colored voltage probes are $v_\text C$ in aqua and $v_\text L$ in magenta. 

Explore: Modify $\alpha$ and $\omega_o$ by picking new component values. See what happens to current and voltage. Can you get the current to swing back and forth more than three times? Try a resistance value ten times smaller, like $0.2\,\Omega$.

## Over damped  

We begin again at Step 5 of the strategy: Find the roots of the characteristic equation.

The over damped case is when $\alpha>\omega_o$. The solution will end up as the sum of two decaying exponentials. 

When $\alpha^2$ is greater than $\omega_o^2$ the expression inside the square root comes out positive. 

$s_{1,2}=-\alpha \pm \sqrt{\alpha^2 - \omega_o^2}$ 

The square root will be a real number smaller than $\alpha$. This means $s$ will be two different real numbers, both negative. The proposed solution becomes the sum of two real exponentials with different negative exponents,

$i = K_1 e^{s_1\,t} + K_2 e^{s_2\,t}$

$i = K_1 e^{(-\alpha + \sqrt{\alpha^2 - \omega_o^2}) \,t} + K_2 e^{(-\alpha -\sqrt{\alpha^2 - \omega_o^2}) \,t}$

We have both $s$ exponents. If we can find two $K$'s it will confirm the proposed solution. The next step is to find two initial conditions and use them to find the $K$'s. We'll assume the current starts at zero and the capacitor has a voltage of $\text V_0$,

![RLC with initial voltage Vo]({{ site.baseurl }}{% link i/rlc_natural_response20.svg %}){: .centered :}

We already worked out these initial conditions in the [under damped case]({{ site.baseurl }}{% link _articles/rlc-natural-response-variations.md %}#find-the-initial-conditions). The analysis is exactly the same for the over damped case we are doing now, so I won't repeat it here, 

$i(0^+) = 0$

$\dfrac{di}{dt}(0^+) = \dfrac{\text V_0}{\text L}$

Write the proposed solution at $t=0$ using the first initial condition,

$i = K_1 e^{s_1\,t} + K_2 e^{s_2\,t}$

$i(0^+) = K_1 e^0 + K_2 e^0$

$0 = K_1 \cdot 1 + K_2 \cdot 1$

$0 = K_1 + K_2$

$K_2 = -K_1$

Take the derivative of the proposed solution so we can apply the second initial condition,

$\dfrac{di}{dt} = \dfrac{d}{dt}\left ( K_1 e^{s_1\,t} + K_2 e^{s_2\,t} \right )$

$\dfrac{di}{dt} = K_1\,s_1\, e^{s_1\,t} + K_2\,s_2\, e^{s_2\,t}$

Evaluate $di/dt$ at $t = 0$,

$\dfrac{di}{dt}(0^+) = K_1\,s_1\,e^{0} + K_2\,s_2\, e^{0}$

$\dfrac{di}{dt}(0^+) = K_1\,s_1 \cdot 1 + K_2\,s_2 \cdot 1$

$\dfrac{di}{dt}(0^+) = K_1\,s_1 + K_2\,s_2$

Substitute in $-K_1$ in place of $K_2$ and use the known $\dfrac{di}{dt}(0^+)$,

$\dfrac{\text V_0}{\text L} = K_1\,s_1 - K_1\,s_2$

$\dfrac{\text V_0}{\text L} = K_1 (s_1 - s_2)$

$K_1 = \dfrac{\text V_0}{(s_1 - s_2) \text L}$

$K_2 = -\dfrac{\text V_0}{(s_1 - s_2) \text L}$

Hey! We got two constants. That validates our proposed solution.

We have the over damped solution,

$\boxed{i = \dfrac{\text V_0}{(s_1 - s_2) \, \text L} \left ( e^{s_1 t} - e^{s_2 t} \right )}$
{: .colorbox :}

#### Example over damped response 
{:.no_toc}

Let's see what an over damped response looks like by doing a concrete example.

Let $\text R = 10 \,\Omega, \text L = 1\,\text H$, and $\text C = 1/9\,\text F$.   

Let $v_c(0) = 10\,\text V$ and $i_\text L(0) = 0$.

![image 2]({{ site.baseurl }}{% link i/rlc_natural_response20a.svg %}){: .centered :}

**Find $i(t)$.**

Start by finding the damping factor $\alpha$ and resonant frequency $\omega_o$,

$\alpha = \dfrac{\text R}{2\text L} = \dfrac{10}{2\cdot 1} = 5$ 

$\omega_o = \dfrac{1}{\sqrt{\text{LC}}} = \dfrac{1}{\sqrt{1 \cdot 1/9}} = \dfrac{1}{\sqrt 9} = 3$

Find $s$, the roots of the characteristic equation,

$s_{1,2}=-\alpha \pm \sqrt{\alpha^2 - \omega_o^2}$

$s_{1,2}=-5 \pm \sqrt{5^2 - 3^2} = -5 \pm \sqrt{16} = -5 \pm 4$

$s_1 = -1,\quad s_2 = -9$

Both $s_1$ and $s_2$ are negative real numbers, so we are in the over damped case.

$i = \dfrac{\text V_0}{(s_1 - s_2) \, \text L} \left ( e^{s_1 t} - e^{s_2 t} \right )$

$i = \dfrac{10}{(-1 - (-9)) \cdot 1} \left ( e^{-t} - e^{-9t} \right )$

$i = \dfrac{10}{8 \cdot 1} \left ( e^{-t} - e^{-9t} \right )$

$i = 1.25 \left ( e^{-t} - e^{-9t} \right )$

And here is what it looks like,

![RLC over damped current]({{ site.baseurl }}{% link i/rlc_overdamped_current.svg %}){: .centered :}

Series $\text{RLC}$ over damped current. The two gray traces show the two decaying exponentials. $+1.25\,e^{-t}$ and $-1.25\,e^{-9t}$. Add them together to get the natural response. $\text R = 10$ ohms, $\text L = 1$ henry, and $\text C = 1/9$ farad.
{: .caption :}

The response start at zero because the two exponentials cancel each other. One of them decays away rapidly, leaving a single exponential decay over time. The response never goes negative. 

If you are curious about the voltages, use the voltage derivation from the under damped case for inspiration. Use the simulation model to plot the voltages and compare your results.

### Over damped simulation model
{:.no_toc}

To explore further on your own, open this [over damped simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["s",[136,24,0],{"color":"magenta","offset":"0","_json_":0},["3"]],["g",[272,136,0],{"_json_":1},["0"]],["s",[272,24,0],{"color":"cyan","offset":"0","_json_":2},["4"]],["w",[320,48,320,160]],["w",[392,112,392,96]],["w",[136,136,136,96]],["w",[272,136,272,96]],["w",[224,24,272,24]],["w",[296,24,272,24]],["w",[272,48,272,24]],["g",[200,208,0],{"_json_":10},["0"]],["v",[200,160,4],{"name":"SW1-ctl","value":"step(0,20,10m,1n)","_json_":11},["5","0"]],["w",[392,24,344,24]],["w",[136,24,136,32]],["a",[136,32,1],{"color":"black","offset":"0","_json_":14},["3","2"]],["p",[296,24,3],{"name":"SW2","WL":"10000","_json_":15},["4","6","7"]],["g",[392,112,0],{"_json_":16},["0"]],["w",[392,48,392,24]],["v",[392,48,0],{"name":"Vo","value":"dc(10)","_json_":18},["7","0"]],["g",[320,208,0],{"_json_":19},["0"]],["v",[320,160,0],{"name":"SW2-ctl","value":"step(0,20,5u,1n)","_json_":20},["6","0"]],["w",[136,24,176,24]],["w",[224,136,272,136]],["w",[136,136,176,136]],["n",[176,136,3],{"name":"SW1","WL":"10000","_json_":24},["1","5","0"]],["c",[272,48,0],{"name":"C","c":"0.1111","_json_":25},["4","0"]],["r",[224,24,1],{"name":"R","r":"10","_json_":26},["4","3"]],["l",[136,48,0],{"name":"L","l":"1","_json_":27},["2","1"]],["view",12,-34.69999999999999,1.5625,"50","10","1G",null,"100","6","1000"]]){:target="_blank"}. Run a transient analysis by clicking on **TRAN** in the main menu bar. Current is plotted in black. The voltages are in color.

Explore: Go back to the definitions of $\alpha$ and $\omega_o$ and design an $\text{RLC}$ that is even more over damped. You want the two negative exponents to be more negative. Design new values for each component, one at a time, to achieve the goal.

At $3$ seconds the current (black trace) is down to about $70\,\text{mA}$. Find values of $\alpha$ and $\omega_o$ to make it significantly less than that *without* allowing the current to ring below $0$.

## Critically damped   

We begin again at Step 5 of the strategy: Find the roots of the characteristic equation.

$\alpha =\omega_o$ is called critically damped, the boundary between under damped and over damped. 

When $\alpha^2 =\omega_o^2$ the terms under the square root subtract to $0$ and the square root vanishes. This leaves behind two identical negative real numbers, called *repeated roots*,

$s_{1,2} = -\alpha \pm \cancel{\sqrt{\alpha^2 - \omega_o^2}}$ 

$s_{1,2} = -\alpha$

Solving a second-order differential equation with repeated roots is a bit tricky. I recommend [Sal's video](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/complex-roots-characteristic-equation/v/repeated-roots-of-the-characteristic-equation) where he explains the challenge of repeated roots and how to handle them.

Here's how it's done.

The critically damped case has a characteristic equation with two identical roots,

$s_1 = s_2 = -\alpha$

If we guess a solution made of two exponential terms like we did before, we run into a problem, 

$i = K_1 e^{s_1t} + K_2 e^{s_2t}$

$i = K_1 e^{-\alpha t} + K_2 e^{-\alpha t}$

Since $s_1$ and $s_2$ are the same, the solution collapses down to just one term. 

$i = Ke^{-\alpha t}$

This one equation isn't enough to get a general solution to a second-order differential equation. That means this proposed solution is a loser. This happens because of the repeated roots. As [Sal suggests](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/complex-roots-characteristic-equation/v/repeated-roots-of-the-characteristic-equation), we try a different proposed solution,

$i = K_1 e^{-\alpha t} + K_2\, t \, e^{-\alpha t}$

Notice there's a new factor $t$ included in the second term. It prevents the two terms from collapsing together. Now that we have a better proposed solution, we look for $K_1$ and $K_2$ using the initial conditions. 

### Critically damped response depends on the initial conditions 
{:.no_toc}

The critically damped case can turn out two ways. It depends on how the initial energy is set up. We will do both versions.
* First, we place an initial voltage $\text V_0$ on the capacitor, with zero initial current. 
![RLC with initial voltage Vo]({{ site.baseurl }}{% link i/rlc_natural_response20.svg %}){: .centered :}

* Second, we start with an initial inductor current $\text I_0$, with zero voltage on the capacitor. 
![RLC with initial current Io]({{ site.baseurl }}{% link i/rlc_natural_response25.svg %}){: .centered :}

### Critically damped with an initial voltage
{:.no_toc}

The initial conditions are the same as the [under damped case]({{ site.baseurl }}{% link _articles/rlc-natural-response-variations.md %}#find-the-initial-conditions), so I won't repeat it here, 

$i(0^+) = 0$

$\dfrac{di}{dt}(0^+) = \dfrac{\text V_0}{\text L}$

Plug the first initial condition into the proposed solution to see if it gives us one of the $K$'s,

$i = K_1 e^{-\alpha t} + K_2\, t \, e^{-\alpha t}$

$0 = K_1 \, e^0 + K_2 \, 0 \, e^0$

$K_1 = 0$

When we put $K_1$ back in the proposed solution the first term vanishes, leaving us with,

$i = K_2\, t\, e^{-\alpha t}$

Take the derivative of the proposed solution so we can apply the second initial condition,

$\dfrac{di}{dt} = \dfrac{d}{dt}(K_2\, t\, e^{-\alpha t} )$

This derivative includes a product, so we have to (get to!) use the [product rule](https://www.khanacademy.org/math/ap-calculus-ab/ab-derivative-rules/ab-product-rule/v/applying-the-product-rule-for-derivatives). 

$\left (f \, g \right )^\prime = f^\prime \, g + f \, g^\prime$

{% capture summary %}prime notation{% endcapture %}  
{% capture details %}  
$x^\prime$ means the same thing as $\dfrac{dx}{dt}$.
{% endcapture %}{% include details.html %} 
$f = t \qquad g =  e^{-\alpha t}$

$f^\prime = 1\qquad g^\prime = -\alpha \, e^{-\alpha t}$

Assemble the terms according to the product rule, and don't forget to put $K_2$ back in,

$\dfrac{di}{dt} = K_2 (1 \cdot e^{-\alpha t} - t\, \alpha \,e^{-\alpha t})$

$\dfrac{di}{dt} = K_2 e^{-\alpha t} (1 - \alpha t)$

Now we have the derivative of current at any time. We are looking for $K_2$ and we happen to know everything else at a particular time, $t = 0$,

$\dfrac{di}{dt}(0^+) = \dfrac{\text V_0}{\text L} = K_2 e^0 (1 - 0) = K_2 \cdot 1 \cdot (1)$

$K_2 = \dfrac{\text V_0}{\text L}$

Yay! We found constant values for both $K_1$ and $K_2$, so our original proposed solution is a valid solution. Put $K_2$ into the valid solution and we get the critically damped response with an initial voltage,

$\boxed{i = \dfrac{\text V_0}{\text L}\, t\, e^{-\alpha t}}$
{: .colorbox :}

#### Critically damped with an initial voltage example
{:.no_toc}

To understand what this looks like we do an example with specific component values.  

Let $\text R = 4\,\Omega$, $\text L = 1 \,\text H$,  and $\text C = 1/4\, \text F$.  

Let $i(0) = 0$ and $v_c(0) = 10\,\text V$.

![RLC critically damped circuit with initial 10 volts on the capacitor]({{ site.baseurl }}{% link i/rlc_critically_damped_circuit1.svg %}){: .centered :}

**Find $i(t)$.**

Start by finding the damping factor $\alpha$ and resonant frequency $\omega_o$,

$\alpha = \dfrac{\text R}{2\text L} = \dfrac{4}{2\cdot 1} = 2$ 

$\omega_o = \dfrac{1}{\sqrt{\text{LC}}} = \dfrac{1}{\sqrt{1 \cdot 1/4}} = \sqrt 4 = 2$

Find $s$, the roots of the characteristic equation,

$s_{1,2}=-\alpha \pm \sqrt{\alpha^2 - \omega_o^2}$

$s_{1,2}=-2 \pm \sqrt{2^2 - 2^2} = -2 \pm \sqrt{0} = -2$

$s_1 = -2\,, s_2 = -2$

$s_1$ and $s_2$ are repeated negative real numbers, so we are in the critically damped case.

{% capture summary %}another way to get the same roots{% endcapture %}  
{% capture details %}  
The differential equation modeling the circuit is,

$\dfrac{d^2i}{dt^2} + 4\dfrac{di}{dt} + 4i = 0\,$

which leads to the corresponding characteristic equation,

$s^2 + 4s + 4 = 0$

We can factor this directly (no need to use the quadratic formula),

$(s + 2)(s+2) = 0$

giving us repeated real roots,

$s_1 = -2\,$, and $s_2 = -2$  
{% endcapture %}{% include details.html %} 

With repeated real roots the solution  is, 

$i = \dfrac{\text V_0}{\text L}\,t\,e^{-\alpha t}$ 

$i = \dfrac{10}{1}\,t\,e^{-2 t}$

$i = 10\,t\,e^{-2 t}$

The critically damped natural response with an initial voltage looks like this,

![RLC critically damped current with initial voltage]({{ site.baseurl }}{% link i/rlc_critically_damped_current_V.svg %}){: .centered :}

Critically damped series $\text{RLC}$ with an initial voltage. $\text R = 4$ ohms, $\text L = 1$ henry, $\text C = 1/4$ farad, with an initial $10$ volts on the capacitor. The curved gray line is $i = 10\,e^{-2t}$. The slanted straight gray line is $i = t$. The blue result is the product of the two gray lines, $i = 10\,t\,e^{-2 t}$.
{: .caption :}

* The current starts and ends at $i = 0$. 
* When the switch closes the current surges upwards and decays back down to zero. 
* When there is an initial voltage, the critically damped response never swings negative. 

### Critically damped with an initial current
{:.no_toc}

For this solution we set up a current in the inductor and make the capacitor voltage zero,

Let $i(0) = \text I_0$ and $v_c(0) = 0$.

![Critically damped circuit with initial current Io]({{ site.baseurl }}{% link i/rlc_natural_response25.svg %}){: .centered :}
**Find $i(t)$.**

The first initial condition is the current $i$. This time there is a non-zero current,

$i(0^+) = i(0^-) = \text I_0$

Insert the first initial condition into the proposed solution at $t = 0$,

$i = K_1 e^{-\alpha t} + K_2\, t \, e^{-\alpha t}$

$i(0^+) = K_1 e^0 + K_2 \cdot 0 \cdot e^0$

$\text I_0 = K_1 \cdot 1 + K_2 \cdot 0 \cdot 1$

$K_1 = \text I_0$

We have our first constant. Now we go after $K_2$. We need to know $di/dt(0^+)$. If we can figure out the inductor voltage we can use the inductor $i$-$v$ equation to find $di/dt$. The inductor voltage is one of the terms in the KVL equation around the loop,

$v_\text L(0^+) - v_\text R(0^+) - v_\text C(0^+) = 0$

Let's fill in as many of these terms as we can. This time the capacitor voltage is zero,

$v_\text C(0^+) = v_\text C(0^-) = 0$

The initial voltage across the resistor is not zero, (this time there is a current flowing),

$v_\text R(0^+) = -\text I_0\,\text R\quad$  ($-$ sign because the current arrow points backwards in the resistor)

Fill in the KVL equation with what we know,

$v_\text L + \text I_0\,\text R - 0 = 0$

and that tells us the initial voltage on the inductor,

$v_\text L(0^+) = -\text I_0\,\text R$

Now that we know $v_\text L(0^+)$, we find $di/dt$ with the inductor $i$-$v$ equation,

$v_\text L(0^+) = \text L \,\dfrac{di}{dt}$

$\dfrac{di}{dt}(0^+) = \dfrac{v_\text L(0^+)}{\text L} = \dfrac{-\text I_0 \,\text R}{\text L}$

Here's a quick and convenient variable change,

$\alpha = \dfrac{\text R}{2\text L}$

$\dfrac{\text R}{\text L} = 2\alpha$

$\dfrac{di}{dt}(0^+) = \dfrac{-\text I_0 \,\text R}{\text L} = -2\alpha \text I_0$

Now we know the slope of the current at $t = 0$. It's time to take the derivative of the proposed solution so we can get $K_2$ involved,

$\dfrac{di}{dt} = \dfrac{d}{dt}\left ( \text I_0 \,e^{-\alpha t} + K_2\,t\,e^{-\alpha t}\right )$

This is the derivative of a sum, and one of the terms is a product.

{% capture summary %}derivative of a sum{% endcapture %}  
{% capture details %}  
Review the [sum rule](https://www.khanacademy.org/math/ap-calculus-ab/ab-derivative-rules/ab-basic-diff-rules/v/basic-differentiation-rules) (jump to 3:15 in the video). We used the product rule [up above]({{ site.baseurl }}{% link _articles/rlc-natural-response-variations.md %}#critically-damped-with-an-initial-voltage).
{% endcapture %}{% include details.html %} 

$\dfrac{di}{dt} = -\alpha I_0 e^{-\alpha t} + K_2 e^{-\alpha t}(1 - \alpha t)$

Now evaluate $di/dt$ at a particular time, $t = 0$, to reveal $K_2$,

$\dfrac{di}{dt}(0^+) = -\alpha I_0 e^0 + K_2 e^0(1 - \alpha \cdot 0)$

$-2\alpha \text I_0 = -\alpha \text I_0 \cdot 1 + K_2 \cdot 1 \cdot (1 - 0)$

$-2\alpha \text I_0 = -\alpha \text I_0 + K_2$

$K_2 = -2\alpha \text I_0 + \alpha \text I_0 $

$K_2 = -\alpha I_0$

We found both constants. This confirms our proposed solution is valid. 

To finish up we plug in the values we found for $K_1$ and $K_2$ into the valid solution. The current at all times is,

$i = K_1 e^{-\alpha t} + K_2\, t \, e^{-\alpha t}$

$i = \text I_0 e^{-\alpha t} - \alpha \text I_0\,t\,e^{-\alpha t}$

or 

$\boxed{i = \text I_0 e^{-\alpha t}(1 - \alpha t)}$
{: .colorbox :}

#### Critically damped with an initial current example
{:.no_toc}

What does this look like? Let's do the same exact circuit but with a given $\text I_0$,

Let $\text i(0) = 1.75\,\text A$ and $v_\text C(0) = 0$.

![RLC critically damped circuit with current]({{ site.baseurl }}{% link i/rlc_critically_damped_circuit2.svg %}){: .centered :}

The circuit values have not changed, so $\alpha$ and $\omega_o$ are unchanged,

$\alpha = \dfrac{\text R}{2\text L} = \dfrac{4}{2\cdot 1} = 2$ 

$\omega_o = \dfrac{1}{\sqrt{\text{LC}}} = \dfrac{1}{\sqrt{1 \cdot 1/4}} = \sqrt 4 = 2$

Here's the critically damped solution with an initial current,

$i = \text I_0 e^{-\alpha t}(1 - \alpha t)$

$i = 1.75 e^{-2t}(1 - 2t)$

And here is the distinctive shape of a critically damped response with an initial current,

![RLC critically damped current with initial current]({{ site.baseurl }}{% link i/rlc_critically_damped_current_I.svg %}){: .centered :}

Critically damped series $\text{RLC}$ with an initial current. The gray lines are the two terms in the solution. The upper gray line is $\text I_0\,e^{-\alpha t}$. The lower gray line is $-\alpha \text I_0\,t\,e^{-\alpha t}$. Add them together to get the blue result.
{: .caption :}

* The current starts at $i = \text I_0 = 1.75\,\text A$. 
* It goes negative at $0.5$ seconds, and then decays back up to zero. 
* When there is an initial current, the critically damped response crosses the time axis one time and then decays to $0$. 

### Critically damped simulation models
{:.no_toc}

To explore on your own, open up one of these simulation models 

* [Critically damped with initial voltage ](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["l",[136,48,0],{"name":"L","l":"1","_json_":0},["2","7"]],["r",[224,24,1],{"name":"R","r":"4","_json_":1},["6","3"]],["c",[272,48,0],{"name":"C","c":"0.25","_json_":2},["6","0"]],["n",[176,136,3],{"name":"SW1","WL":"10000","_json_":3},["7","1","0"]],["w",[136,136,176,136]],["w",[224,136,272,136]],["w",[136,24,176,24]],["v",[320,160,0],{"name":"SW2-ctl","value":"step(0,20,5u,1n)","_json_":7},["5","0"]],["g",[320,208,0],{"_json_":8},["0"]],["v",[392,48,0],{"name":"Vo","value":"dc(10)","_json_":9},["4","0"]],["w",[392,48,392,24]],["g",[392,112,0],{"_json_":11},["0"]],["p",[296,24,3],{"name":"SW2","WL":"10000","_json_":12},["6","5","4"]],["a",[136,32,1],{"color":"black","offset":"0","_json_":13},["3","2"]],["w",[136,24,136,32]],["w",[392,24,344,24]],["v",[200,160,4],{"name":"SW1-ctl","value":"step(0,20,10m,1n)","_json_":16},["1","0"]],["g",[200,208,0],{"_json_":17},["0"]],["w",[272,48,272,24]],["w",[296,24,272,24]],["w",[224,24,272,24]],["w",[272,136,272,96]],["w",[136,136,136,96]],["w",[392,112,392,96]],["w",[320,48,320,160]],["g",[272,136,0],{"_json_":25},["0"]],["view",12,-28.19999999999999,1.5625,"50","10","1G",null,"100","6","1000"]]){:target="_blank"} 

* [Critically damped with initial current](https://spinningnumbers.org/circuit-sandbox/index.html?value=[["l",[136,48,0],{"name":"L","l":"1","_json_":0},["2","0"]],["r",[224,24,1],{"name":"R","r":"4","_json_":1},["3","1"]],["c",[272,48,0],{"name":"C","c":"0.25","_json_":2},["3","0"]],["w",[136,24,176,24]],["a",[136,32,1],{"color":"black","offset":"0","_json_":4},["1","2"]],["w",[136,24,136,32]],["w",[272,48,272,24]],["w",[224,24,272,24]],["w",[272,136,272,96]],["w",[136,136,136,96]],["g",[272,136,0],{"_json_":10},["0"]],["i",[32,96,6],{"name":"Io","value":"step(1.75,0,1,1n)","_json_":11},["0","1"]],["w",[32,48,32,24]],["w",[32,96,32,136]],["w",[136,136,32,136]],["w",[32,24,136,24]],["w",[136,136,272,136]],["view",-13.840000000000003,-9.707999999999998,2.44140625,"50","10","1G",null,"100","6","1000"]]){:target="_blank"}

Click on **DC** in the menu bar to see the initial conditions. Then perform a transient analysis by clicking on **TRAN**. Current is plotted in black, measured at the little black arrow above the inductor. Add voltage probes to see the voltages.

Explore: Go back to the definitions of $\alpha$ and $\omega_o$ and design a different critically damped $\text{RLC}$'s with your choice of component values.

<details>
    <summary>Thank you!</summary>
    <p>I would like to thank Khan Academy learner Jonathan B. Landham for discovering and reporting an error in my critically damped solution and providing the inspiration to fully work out the derivation with repeated roots.</p>
</details>

## Three variations plotted together

Let's compare the waveforms from the three variants, the ones that started with $10\,\text V$ on the capacitor. Here they are plotted together on the same scale, 

![3 variants plotted together]({{ site.baseurl }}{% link i/rlc_3variations_current.svg %}){: .centered :}

* $\alpha = 1\quad \omega_o = \sqrt 5\quad\,$ <span style="color:#63D9EA;">Under damped</span>
* $\alpha = 2\quad \omega_o = 2\qquad$ <span style="color:#11ACCD;">Critically damped</span>
* $\alpha = 5\quad \omega_o = 3\qquad$ <span style="color:#0C7F99;">Over damped</span>

* All three currents surge upwards when the switch closed.  
* Under damped goes the highest and wiggles above and below the ending current.
* Critically damped has a single hump that never goes negative. It is the quickest to get down to the final current.
* Over damped also has a single hump. You can't see it in this image but it gets down to the final value a little slower than critically damped.

## Summary 
{:.no_toc}

The series $\text{RLC}$ circuit is modeled by this second-order linear differential equation,

$\text L \,\dfrac{d^2i}{dt^2} + \text R\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,i = 0$

The resulting characteristic equation is,

$s^2 + \dfrac{\text R}{\text L}s + \dfrac{1}{\text{LC}} = 0$

We found the roots of the characteristic equation using the quadratic formula,

$s=\dfrac{-\text R \pm \sqrt{\text R^2-4\text L/\text C}}{2\text L}$

We wrote the characteristic equation and $s$ a little simpler by defining two variables,

$\alpha = \dfrac{\text R}{2\text L} \qquad \omega_o = \dfrac{1}{\sqrt{\text{LC}}}$

The characteristic equation reads like this,

$s^2 + 2\alpha s + \omega_o^2 = 0$

and $s$, the roots of the equation, becomes,

$s=-\alpha \pm \sqrt{\alpha^2 - \omega_o^2}$

For the under damped case, strictly as a convenience, we defined $\omega_d$,

$\omega_d = \sqrt{\omega_o^2 - \alpha^2}$

which lets us express the complex roots $s$ as,

$s_{1,2} = -\alpha \pm j\omega_d$

After you work out $\alpha$ and $\omega_o$, compute $\alpha^2 - \omega_o^2$. Based on the sign, select one of these solutions for $i(t)$,


| variant        |$v_\text C$ | $i_\text L$| $\alpha^2 - \omega_o^2$ | $i(t)$ |
|----------------|:----------:|:---:|:----:|----------------------------------|
| over damped    |$\text V_0$ | $0$ | $+$  | $i = \dfrac{\text V_0}{(s_1 - s_2) \, \text L} \left ( e^{s_1 t} - e^{s_2 t} \right )$ |
| critically damped|$\text V_0$ | $0$ | $0$ | $i = \dfrac{\text V_0}{\text L}\, t\, e^{-\alpha t}$|
| critically damped|$0$ | $\text I_0$ | $0$ | $i = \text I_0 e^{-\alpha t}(1 - \alpha t)$       | 
| under damped   |$\text V_0$ | $0$ | $-$  | $i = \dfrac{\text V_0}{\omega_d \text L} e^{-\alpha t} \sin \omega_d t$     | 

The $v_\text C$ and $i_\text L$ columns indicate the voltage and current at $t = 0^-$.
