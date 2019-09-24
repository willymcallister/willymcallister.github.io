---
layout: article
title:  "RLC natural response - derivation"
author: Willy McAllister
comments: true
---

We derive the natural response of a series resistor-inductor-capacitor $(\text{RLC})$ circuit.

![RLC circuit for natural response]({{ site.baseurl }}{% link i/rlc_natural_response19.svg %}){: .centered :}

The $\text{RLC}$ circuit is representative of real life circuits we actually build, since every real circuit has some finite resistance, inductance, and capacitance. This circuit has a rich and complex behavior. It shows up in many areas of engineering. The mechanical analog of an $\text{RLC}$ circuit is a pendulum with friction.

If you've never solved a differential equation I recommend you begin with the [RC natural response - derivation]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %})

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}
 
The $\text{RLC}$ circuit can be modeled with a second-order linear differential equation, with current $i$ as the independent variable,

$\text L \,\dfrac{d^2i}{dt^2} + \text R\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,i = 0$

The resulting characteristic equation is,

$s^2 + \dfrac{\text R}{\text L}s + \dfrac{1}{\text{LC}} = 0$

We find the roots of the characteristic equation with the quadratic formula,

$s=\dfrac{-\text R \pm\sqrt{\text R^2-4\text L/\text C}}{2\text L}$

It is very helpful to introduce variables $\alpha$ and $\omega_o$,

Let $\quad \alpha = \dfrac{\text R}{2\text L}\quad$ and $\quad\omega_o = \dfrac{1}{\sqrt{\text{LC}}}$

Then the characteristic equation and its roots can be compactly written as,

$s^2 + 2\alpha s + \omega_o^2 = 0$

$s=-\alpha \pm\,\sqrt{\alpha^2 - \omega_o^2}$

Where $\alpha$ is called the *damping factor*, and $\omega_o$ is called the *resonant frequency*. 

-----

## Strategy

The strategy for solving this circuit is the same one we used for the second-order [LC circuit]({{ site.baseurl }}{% link _articles/lc-natural-response-derivation.md %}).

1. The second-order differential equation is based on the $i$-$v$ equations for $\text R$, $\text L$, and $\text C$. Use Kirchhoff's Voltage Law (sum of voltages around a loop) to assemble the equation.
2. Make an informed guess at a solution.  
As usual, our guess will be an exponential function of the form $Ke^{st}$.
3. Insert the proposed solution into the differential equation. 
4. Do a little algebra: factor out the exponential terms to leave us with a *characteristic equation* in the variable $s$.
5. Find the roots of the characteristic equation with the quadratic formula. 
6. Find the $K$ constants by accounting for the initial conditions. 
7. The original guess is confirmed if $K$'s are found and are in fact constant (not changing with time).
8. Celebrate the solution!

In this article we cover the first three steps of the derivation up to the point where we have the so-called *characteristic equation*. The following article on [RLC natural response - variations]({{ site.baseurl }}{% link _articles/rlc-natural-response-variations.md %}) carries through with three possible outcomes depending on the specific component values. 

## Model the circuit

Here's the $\text{RLC}$ circuit the moment before the switch is closed. We call this time $t(0^-)$,

![RLC circuit with switch open]({{ site.baseurl }}{% link i/rlc_natural_response20.svg %}){: .centered :}

The moment before the switch closes. The current $i$ is $0$ everywhere, and the capacitor is charged up to an initial voltage $\text V_0$.
{: .caption :}

{% capture summary %}voltage polarity and current direction{% endcapture %}  
{% capture details %}  
There's a bit of cleverness with the voltage polarity and current direction. I looked ahead a little in the analysis and arranged the voltage polarities to get some positive signs where I want them, just for aesthetic value. At the same time, it is important to respect the sign convention for passive components.

Capacitor voltage: I want the capacitor to start out with a positive charge on the top plate, which means the positive sign for $v_\text C$ is also the top plate. The natural response will start out with a positive voltage hump.

Inductor current: When the switch closes, the initial surge of current flows from the capacitor over to the inductor, in a counter-clockwise direction. I want this initial current surge to have a positive sign. Current $i$ flows into the inductor from the top. I think this makes the natural response current plot look nicer.

Inductor voltage: The sign convention for the passive inductor tells me assign $v_\text L$ with the positive voltage sign at the top.

Resistor voltage: The resistor voltage makes no artistic contribution, so it can be assigned to match either the capacitor or the inductor. I happened to match it to the capacitor, but you could do it either way.

![RLC circuit with switch closed]({{ site.baseurl }}{% link i/rlc_natural_response20b.svg %}){: .centered :}

The voltage and current assignment used in this article. $v_\text C$ is positive on the top plate of the capacitor. Both $v_\text R$ and $v_\text C$ will have $-$ signs in the clockwise KVL equation.
{: .caption :}

Respect the passive sign convention: The artistic voltage polarity I chose for $v_\text C$ (positive at the top) conflicts with the direction of $i$ in terms of the passive sign convention. Current $i$ flows up out of the $+$ capacitor instead of down into the $+$ terminal as the sign convention requires. I account for the backwards current when I write the $i$-$v$ equation for the capacitor, with a $-$ sign in front of $i$.

The current through the resistor has the same issue as the capacitor, it's also backwards from the passive sign convention. I will handle it the same way when I write Ohm's law for the resistor, with a $-$ sign in front of $i$.

Notice how I achieved artistic intent *and* respected the passive sign convention.

I thought it would be helpful walk through this in detail. Most textbooks give you the integro-differential equation without this long explanation. You have to work out the signs yourself.  
{% endcapture %}{% include details.html %}

Now we close the switch and the circuit becomes, 

![RLC circuit with switch closed]({{ site.baseurl }}{% link i/rlc_natural_response21.svg %}){: .centered :}

From the moment the switch closes we want to find the current and voltage for $t=0^+$ and after.
{: .caption :}

We write $i$-$v$ equations for each individual element,

$v_\text L = \text L\, \dfrac{di}{dt}$

$v_\text R = - i\,\text R$

$v_\text C = \dfrac{1}{\text C}\,\displaystyle \int{-i \,dt}$

The $-$ signs in the $v_\text R$ and $v_\text C$ equations appear because the current arrow points backwards from the passive sign convention.

We model the connectivity with Kirchhoff's Voltage Law (KVL). Let's start in the lower left corner and sum voltages around the loop going clockwise. The inductor has a voltage rise, while the resistor and capacitor have voltage drops.

$+v_{\text L} - v_{\text R} - v_{\text C} = 0$

We substitute each $v$ term with its $i$-$v$ relationship,

$\text L \,\dfrac{di}{dt} + \text R\,i + \dfrac{1}{\text C}\,\displaystyle \int{i \,dt} = 0$

If we wanted to, we could attack this equation and try to solve it. However, the integral term is awkward and makes this approach a pain in the neck. It's possible to retire the integral by taking the derivative of the entire equation,

$\dfrac{d}{dt}\left (\,\text L \,\dfrac{di}{dt} + \text R\,i + \dfrac{1}{\text C}\,\displaystyle \int{i \,dt} = 0 \,\right)$

We end up with a second derivative term, a first derivative term, and a plain $i$ term, all still equal to $0$. 

$\text L \,\dfrac{d^2i}{dt^2} + \text R\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,i = 0$

This is called a *homogeneous second-order ordinary differential equation*. 

It is *homogeneous* because every term is related to $i$ and its derivatives.  
It is *second order* because the highest derivative is a second derivative.  
It is *ordinary* because there is only one independent variable, $t$, (no partial derivatives). 

Now we solve our differential equation.

## Propose a solution

Just like we did with previous natural response problems ([RC]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}), [RL]({{ site.baseurl }}{% link _articles/rl-natural-response.md %}), [LC]({{ site.baseurl }}{% link _articles/lc-natural-response-derivation.md %})), we assume a solution with an exponential form, ("assume a solution" is a mathy way to say "guess"),

$i(t) = Ke^{st}$

$K$ is an adjustable parameter. It determines the amplitude of the current.

$s$ is up there in the exponent next to $t$, so it must represent some kind of frequency ($s$ has to have units of $1/t$ to make the exponent dimensionless). We call $s$ the *natural frequency*. 

When we have multiple derivatives in an equation it's really nice when they all have a strong family resemblance. An exponential function has a wondrous property. Its derivatives look a lot like itself. It has the strongest family resemblance of all. 

## Try the proposed solution

Next, we substitute the proposed solution into the differential equation. If the equation turns out to be true then our proposed solution is a winner.

$\text L \,\dfrac{d^2}{dt^2}Ke^{st} + \text R\,\dfrac{d}{dt}Ke^{st} + \dfrac{1}{\text C}Ke^{st} = 0$

First, go to work on the two derivative terms. The middle term has a first derivative,

$\text R\,\dfrac{d}{dt}Ke^{st} = s\text{R}Ke^{st}$

The leading term has a second derivative, so we take the derivative of $\text Ke^{st}$ two times,

$\dfrac{d}{dt}Ke^{st}= sKe^{st}$

$\dfrac{d}{dt}sKe^{st}= s^2Ke^{st}$

so the leading term becomes,

$\text L \dfrac{d^2}{dt^2}Ke^{st} = s^2\text LKe^{st}$

Now we can plug our new derivatives back into the differential equation, 

$s^2\text LKe^{st} + s\text RKe^{st} + \dfrac{1}{\text C}\,Ke^{st} = 0$

Next, factor out the common $Ke^{st}$ terms,

$Ke^{st}\left (s^2\text L + s\text R + \dfrac{1}{\text C}\right ) = 0$

This is what our differential equation becomes when we assume $i(t) = Ke^{st}$.

## Characteristic equation

Now let's figure out how many ways we can make this equation true.

We could set the amplitude term $K$ to $0$.  
That means $i = 0$.  We put nothing into the circuit and get nothing out. $K = 0$ is pretty boring.  

We could let $e^{st}$ decay to $0$.  
The term $e^{st}$ goes to $0$ if $s$ is negative and we wait until $t$ goes to $\infty$. Infinity is a really long time. If we wait for $e^{st}$ to go to zero we get pretty bored, too. 

We have one more way to make the equation true. We can set the term with all the $s$'s equal to zero,

$s^2\text L + s\text R + \dfrac{1}{\text C} = 0$

This is called the *characteristic equation* of the $\text{LRC}$ circuit. It is by far the most interesting way to make the differential equation true.

## Roots of the characteristic equation

Let's find values of $s$ to the characteristic equation true. If we can make the characteristic equation true, then the differential equation becomes true, and our proposed solution is a winner. 

We need to find the *roots* of the characteristic equation. We have exactly the right tool, the quadratic formula. Quadratic equations have the form,

$ax^2 + bx + c = 0$

and the roots are given by the *quadratic formula*,

$x=\dfrac{-b \pm\sqrt{b^2-4ac}}{2a}$

Now look back at the characteristic equation and match up the components to $a$, $b$, and $c$, 

$a = \text L$, $b = \text R$, and $c = 1/\text{C}$

and the roots of the characteristic equation become,

$s=\dfrac{-\text R \pm\sqrt{\text R^2-4\text L/\text C}}{2\text L}$

We have solved for $s$, the natural frequency. As we might expect, the natural frequency is determined by (a rather complicated) combination of all three component values.

## $\alpha$ and $\omega_o$ notation

We can make the characteristic equation and the expression for $s$ more compact if we create two new made-up variables, $\alpha$ and $\omega_o$. Let,

$\alpha = \dfrac{\text R}{2\text L}\quad$ and $\quad\omega_o = \dfrac{1}{\sqrt{\text{LC}}}$

Reformat the characteristic equation a little, divide through by $\text L$,

$s^2 + \dfrac{\text R}{\text L}s + \dfrac{1}{\text{LC}} = 0$

Substitute in $\alpha$ and $\omega_o$ and we get this compact expression,

$s^2 + 2\alpha s + \omega_o^2 = 0$

Use the quadratic formula on this version of the characteristic equation,

$x=\dfrac{-b \pm\sqrt{b^2-4ac}}{2a}$

$s = \dfrac{-2\alpha \pm\sqrt{4\alpha^2-4\omega_o^2}}{2}$

and it simplifies to a neat and tidy,

$s=-\alpha \pm\,\sqrt{\alpha^2 - \omega_o^2}$

### What are $s$, $\alpha$, and $\omega_o$? 

We know $s$ has to be some sort of frequency because it appears next to $t$ in the exponent of $e^{st}$. An exponent has to be dimensionless, so the units of $s$ must be $1/t$, the unit of frequency. That means $\alpha$ and $\omega_o$, the two terms inside $s$, are also some sort of frequency. 

* $s$ is called the *natural frequency*, composed of two parts, $\alpha$ and $\omega_o$.
* $\alpha$ is called the *damping factor*. It will determine how fast (or slow) the signal fades to zero.  
* $\omega_o$ is called the *resonant frequency*. It will determine how often the system swings back and forth. This is the same resonant frequency we found for the $\text{LC}$ natural response. 

## Proposed solution, upgraded

The quadratic formula gives us two solutions for $s$, because of the $\pm$ term in the quadratic formula. We'll call these $s_1$ and $s_2$. Perhaps both of them impact the final answer, so we update our proposed solution so the current is a linear combination of (the sum or superposition of) two separate exponential terms,

$i = K_1 e^{s_1t} + K_2 e^{s_2t}$

We know $s_1$ and $s_2$ from above. Now we have to deal with two adjustable amplitude parameters, $K_1$ and $K_2$. We'll see what happens with this change to two exponentials in the worked examples.

## Three variations

Now it gets really interesting. The problem splits into three different paths based on how $s$ turns out. 

$s=-\alpha \pm\,\sqrt{\alpha^2 - \omega_o^2}$

Depending on the relative size of $\alpha$ compared to $\omega_o$ the expression $\alpha^2 - \omega_o^2$ under the square root will be positive, zero, or negative,


| relation |sign of $\alpha^2 - \omega_o^2$ | $\sqrt{\alpha^2 - \omega^2}$ |
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

Now you are ready to go to the following article, [RLC natural response - variations]({{ site.baseurl }}{% link _articles/rlc-natural-response-variations.md %}), where we look at each outcome in detail. 

## Summary
{:.no_toc}

The $\text{RLC}$ circuit is modeled by this second-order linear differential equation,

$\text L \,\dfrac{d^2i}{dt^2} + \text R\,\dfrac{di}{dt} + \dfrac{1}{\text C}\,i = 0$

The characteristic equation is,

$s^2 + \dfrac{\text R}{\text L}s + \dfrac{1}{\text{LC}} = 0$

We solved for the roots of the characteristic equation with the quadratic formula,

$s=\dfrac{-\text R \pm\sqrt{\text R^2-4\text L/\text C}}{2\text L}$

We define variables $\alpha$ and $\omega_o$ as, 

$\quad \alpha = \dfrac{\text R}{2\text L}\quad$ and $\quad\omega_o = \dfrac{1}{\sqrt{\text{LC}}}$

which allows us to write the characteristic equation as,

$s^2 + 2\alpha s + \omega_o^2 = 0$

and $s$ as,

$s = -\alpha \pm\,\sqrt{\alpha^2 - \omega_o^2}$

The roots of the characteristic equation can be real or complex. It depends on the relative size of $\alpha^2$ and $\omega_o^2$. 

Since two roots come out of the characteristic equations, we modified the proposed solution to be a superposition of two exponential terms, 

$i = K_1 e^{s_1t} + K_2 e^{s_2t}$

The [next article]({{ site.baseurl }}{% link _articles/rlc-natural-response-variations.md %}) picks up at this point and completes the solution(s).

