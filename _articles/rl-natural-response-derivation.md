---
layout: article
title:  "RL natural response - derivation"
author: Willy McAllister
comments: true
---

We investigate the *natural response* of a resistor-inductor $(\text{RL})$ circuit. This derivation is similar to the [RC natural response]({% link _articles/rc-natural-response-derivation.md %}).

![RL natural response circuit]({% link i/rl_natural_response1.svg %}){: .centered :}

An inductor's $i$-$v$ equation is $v = \text L \,di/dt$. The voltage depends on how current is changing from moment to moment. The formal derivation requires concepts from calculus, specifically [derivatives](https://www.khanacademy.org/math/differential-calculus/taking-derivatives), to handle this dependence on time. 

The $(\text{RL})$ natural response is similar to the [RC natural response]({% link _articles/rc-natural-response-derivation.md %}). In fact, it is an exact *dual*. If you write out the math for the RC derivation and swap current and voltage, and L for C, the math is exactly the same.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

For a resistor-inductor $(\text{RL})$ circuit with an initial current $\text I_0$, the current diminishes exponentially, 

$i(t) = \text I_0\,e^{-\text Rt/\text L}$

where $\text I_0$ is the current at time $t=0$. This is called the *natural response*.

The *time constant* for an $\text{RL}$ circuit is $\tau = \dfrac{\text L}{\text R}$.

----

The *natural response* of a circuit is what the circuit does "naturally" when it has some internal energy and we allow it to dissipate. It is the most basic behavior of a circuit. 

Why do we study the $\text{RL}$ natural response? Because it appears any time a wire is involved in a circuit. If the wire is formed into a coil we call it an inductor. Even if it is not coiled up, every wire and every trace on a circuit board has a small inductance that might be important. Gold bond wires in an integrated circuit have enough inductance to be important in very fast circuits. There is always inductance around and always resistance nearby.

## Strategy

We want to derive the $\text{LC}$ natural response, $\blueD i$ and $\goldD v$ as a function of time. This derivation follows the same steps as the [RC natural response]({% link _articles/rc-natural-response-derivation.md %}). 

![RL basic circuit]({% link i/rl_natural_response0.svg %}){: .centered :}

We assume $\text I_0$ is the initial current flowing in the inductor.

### Model the components

$\text R$ and $\text L$ can be modeled by their characteristic $i$-$v$ equations.

The resistor is described by Ohm's Law,

$v_\text R = i \,\text R$

The inductor is described by the inductor $i$-$v$ equation,

$v_\text L = \text L \,\dfrac{di}{dt}$

![RL with voltage labels]({% link i/rl_natural_response12.svg %}){: .centered :}

{% capture summary %}passive sign convention{% endcapture %}  
{% capture details %}  
The resistor and inductor voltages are oriented using the [sign convention for passive components]({% link _articles/sign-convention.md %}). The current direction is indicated by the blue arrow, and the two voltages are oriented so the current flows *into* the positive voltage terminals of $\text R$ and $\text L$.

We are careful about this because it determines signs in equations coming up soon.  
{% endcapture %}{% include details.html %} 

### Model the circuit

Once we have a model for each component, we create a model of how they are connected with Kirchhoff's Voltage Law. Let's start at the top left corner of the schematic and go around counterclockwise,

$v_\text L + v_\text R = 0$

$\text L \,\dfrac{di}{dt} + i\,\text R = 0$ 

This is a differential equation. It models the circuit.

From here on, we refer to $v_\text R$ as just $v$.

### Solve the circuit

$\text L \,\dfrac{di}{dt} + i\,\text R = 0$ 

This equation is called a *first-order ordinary differential equation* (ODE). What does this jargon mean? 

* It is a *differential* equation because it contains derivatives.
* It is *first-order* because the highest derivative is a first derivative $({di} / {dt})$.
* It is *ordinary* because there is just a single independent variable $(t)$, (as opposed to partial derivatives of multiple variables).   

Now we go through the solution of an ODE step by step. 

Our goal is to discover a function $i(t$) that, when plugged in, makes the ODE true. One way to come up with an $i(t)$ is to make an informed guess and try it out. We will guess a solution, just like we did with the [RC natural response]({% link _articles/rc-natural-response-derivation.md %}). 

{% capture summary %}Are there other ways?{% endcapture %}  
{% capture details %}  
This ODE turns out to be a *separable* differential equation. A way to solve this separable equation is in the appendix at the end of this article. When you use this method, there is no guessing involved. 

Sal goes into depth in a sequence of videos on [separable differential equations](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-separable-eq/v/separable-differential-equations-introduction). 

He also has videos about [guessing a solution](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/linear-homogeneous-2nd-order/v/2nd-order-linear-homogeneous-differential-equations-2) to solve second-order differential equations. Second-order equations come up in electrical circuits when we get to $\text{LC}$ and $\text{RLC}$ circuits.  
{% endcapture %}{% include details.html %} 

To solve the differential equation we, 
* Dream up a function for current, $i(t)$.
* Plug the function into the differential equation.
* Solve for constants using the initial conditions. 
* If the constants are indeed constant (not a function of time), then $i(t)$ is a winner! 

Just as we did with the $\text{RC}$ circuit, let's guess an exponential function with some adjustable parameters, $K$ and $s$,

$i(t) = Ke^{\displaystyle st}$

* $t$ is time
* $i(t)$ is current as a function of time
* $K$ and $s$ are constants we have to figure out
* $K$ is an amplitude term that scales current up or down
* $s$ must have units of $1/t$, to make sure the exponent is dimensionless

Substitute our proposed solution into the differential equation,

$\text L \dfrac{d}{dt} (K e^{\displaystyle st}) + K e^{\displaystyle st}\,\text R = 0$

The first term includes a derivative we know how to do, 

$\dfrac{d}{dt} (K e^{\displaystyle st}) = sKe^{\displaystyle st}$

{% capture summary %}reminder: derivative of an exponential{% endcapture %}  
{% capture details %}  
$\dfrac d {dt} \,e^{\displaystyle \alpha t} = \alpha \,e^{\displaystyle \alpha t}$  
{% endcapture %}{% include details.html %} 

Plug the derivative back into the differential equation,

$s\text L \, K e^{\displaystyle st} + \text R \, K e^{\displaystyle st} = 0$

There is a common $Ke^{st}$ term we can factor out,

$(s\text L + \text R)\, K e^{\displaystyle st} = 0$

This is what the differential equation looks like with the proposed $i(t)$.

Now we work out the two constants, $K$ and $s$, to see if we can make the equation true. There are three different ways we can make the left side equal zero.

We could set $K=0$ to get a solution. You put nothing in and get nothing out. I'm bored already. 

We could make $e^{st} = 0$ to get another solution. If we make $s$ a negative number and let $t$ go to $+\infty$, then $e^{st}$ goes to zero. It means we sit around forever and wait for the current to die out. Snooze.

The third way we can make the equation true is to set $s\text L + \text R = 0$. This becomes interesting. This is true if,

$s = -\dfrac{\text R}{\text L}$

If we pick this value for $s$, it makes our function for current look like this,

$i(t) = Ke^{-\text Rt/\text L}$

There's one more step before we can declare victory. We have to figure out $K$, the amplitude factor. We find $K$ using the initial conditions. 

The inductor had a known current at the instant the switch was flipped. We figured out the initial current up above in the [intuition section](#initial-current). We plug in what we know about $t=0^+$, namely, the current is $i(0^+) = \text I_0$.

$i(t) = Ke^{-\text Rt/\text L}$

$\text I_0 = Ke^{-(\text R\cdot 0)/\text L}$

$\text I_0 = Ke^0 = K \cdot 1$

$K = \text I_0$ 

Done! We found a function and two constants and the differential equation came true. The general solution for the natural response of an $\text{RL}$ circuit is,

$\boxed{i(t) = \text I_0\,e^{-\text Rt/\text L}}$
{: .colorbox :}

What about the voltage? The voltage $v(t)$ falls out of Ohm's Law, 

$v = \text R \, i$

$\boxed{v(t) = \text R\,\text I_0\,e^{-\text Rt/\text L}}$
{: .colorbox :}

I always like to see what the equations look like,

![RL current]({% link i/rl_natural_response_current_nolabel.svg %}) 
![RL voltage]({% link i/rl_natural_response_voltage_nolabel.svg %})

Before the switch closes the current is flat at $\text I_0$. The switch closes at $t=0$ and the current falls on an exponential curve until it fades to $0$.

The voltage across the inductor is $0$ before the switch closes. It makes a sharp jump at $t=0$ as soon as the current starts to change. The peak voltage depends on the initial current $\text I_0$ and the resistance, $\text R$. Voltage follows a similar exponential curve until it fades to $0$.

Compare these computed graphs to the ones we sketched earlier. The sketches have the right shape.

![Current sketched in]({% link i/rl_natural_response10a.svg %}) 
![Voltage sketched in]({% link i/rl_natural_response11a.svg %})

### Time constant

An exponent has to be a plain vanilla number. It isn't allowed to have dimensions. $\text{R}/\text L$ must have units of $1/\text{time}$, so it can cancel out $t$. The reciprocal, $\text L/\text R$, has units of $\text{seconds}$, something you might not have guessed. 

$\text L/\text R$ is called the *time constant* of a resistor-inductor combination. It has the same properties as the corresponding product $\text R \cdot \text{C}$ in the resistor-capacitor circuit. We use the Greek letter $\tau$ (tau) as the symbol for time constant,

$\tau = \dfrac{\text L}{\text R}$ seconds

We can rewrite the natural response equation like this, 

$i(t) = \text I_0e^{-t/\tau}$

When $t$ is equal to the time constant, the exponent becomes $-1$. The exponential term is equal to $1/e = 1/1.569$, or about $0.37$. 

The time constant determines how fast the exponential curve comes down to zero. After $1$ time constant has passed, the current is down to $37\%$ of its initial value. If you wait $3$ to $5$ time constants, the natural response is pretty much over.

If you make the inductor bigger, the time constant gets longer.  
If you make the resistor bigger, the time constant get shorter. 

This is different than the $\text{RC}$ time constant, $\tau_{\text{RC}}=\text{RC}$, which gets longer with both larger $\text R$ and $\text C$. For the $\text{RL}$, when the resistor is large energy its dissipation is high and the natural response is snuffed out rapidly. When the resistor is small the inductor current passes more freely through the resistor so energy dissipates slowly and the current circulates round and round for a long time. 

{% capture summary %}The RL time constant is *not* R times L.{% endcapture %}  
{% capture details %}  
Just a small caution: Even though we call this an $\text{RL}$ circuit, the time constant is not the product $\text{RL}$. It's $\tau_{\text{LC}} = \dfrac{\text L}{\text R}$.

For the $\text{RC}$ circuit the time constant *is* $\text{RC}$. 

Do your best not to get trapped. 

How do you remember the order of the quotient? Is $\text R$ on top, or is it $\text L$? I remember $\text L/\text R$ because "el over r" starts with *hello!* while "arr over el" sounds like a pirate.
{% endcapture %}{% include details.html %} 

## Worked example

Let's work through an example,

![Worked example circuit]({% link i/rl_natural_response16.svg %}){: .centered :}

Problem 1  
**What is $\blueD i$ if the switch is closed?**

$i = $\_\_\_\_\_\_\_\_ $\text{mA}$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
When the switch is closed, all the current from the current source flows up through the inductor. $i = 8 \,\text{mA}$.
{% endcapture %}{% include details.html %}

Problem 2  
**What is $\goldD v$ if the switch is closed?**

$i = $\_\_\_\_\_\_\_\_ $\text{V}$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
When the switch is closed, the derivative of the constant current, $di/dt = 0$. 

The inductor equation tells us $v = \text L\,\dfrac{di}{dt} = 0 \,\text{V}$. 
{% endcapture %}{% include details.html %} 

The switch is thrown open at $t=0$. 

![Worked example switch thrown open]({% link i/rl_natural_response17.svg %}){: .centered :} 

Problem 3  
**What is $\blueD i$ in the inductor the instant after the switch opens?**  

$i = $ \_\_\_\_\_\_\_\_ $\text{mA}$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
In the instant after the switch is thrown open, the current in the inductor is unchanged from what it was just before. $i = 8 \,\text{mA}$. The current in an inductor cannot change instantaneously.  
{% endcapture %}{% include details.html %} 

Problem 4  
**What is the time constant, $\tau$?**  

$\tau = $\_\_\_\_\_\_\_\_ $\text{seconds}$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
The time constant for an $\text{RL}$ circuit is, 

$\tau = \dfrac{\text L}{\text R}$

$\tau = \dfrac{16\,\mu\text H}{200\,\Omega} = \dfrac{16\times 10^{-6}}{200} = 8 \times 10^{-8}\,\text{seconds}$

$\tau = 80\,\text{ns}$  
{% endcapture %}{% include details.html %} 

Problem 5  
**Write expressions for $i(t)$ and $v(t)$ after $t=0$.**  

$i(t) = $ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

$v(t) = $ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
$i(t) = \text I_0\,e^{-\text Rt/\text L} = \text I_0\,e^{-\text t/\tau}$

$\tau = \dfrac{\text L}{\text R} = \dfrac{16\times 10^{-6}}{200} = 80\,\text{ns}$

$i(t) = 0.008\,e^{-t/80\,\text{ns}}$

$ $

$v(t) = \text R \cdot \text I_0\,e^{-\text Rt/\text L} = \text R \cdot \text I_0\,e^{-\text t/\tau}$

$v(t) = 200 \cdot 0.008\,e^{-t/80\,\text{ns}}$

$v(t) = 1.6\,e^{-t/80\,\text{ns}}$  

The natural response looks like this,

![RL natural response current]({% link i/rl_natural_response_current.svg %})
![RL natural response voltage]({% link i/rl_natural_response_voltage.svg %})
{% endcapture %}{% include details.html %} 

### Simulation model

Try this [simulation model](https://spinningnumbers.org/circuit-sandbox/index.html?value=%5B%5B%22w%22%2C%5B152%2C24%2C208%2C24%5D%5D%2C%5B%22a%22%2C%5B152%2C48%2C5%5D%2C%7B%22color%22%3A%22cyan%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A1%7D%2C%5B%222%22%2C%221%22%5D%5D%2C%5B%22w%22%2C%5B152%2C128%2C40%2C128%5D%5D%2C%5B%22w%22%2C%5B152%2C24%2C40%2C24%5D%5D%2C%5B%22w%22%2C%5B152%2C128%2C208%2C128%5D%5D%2C%5B%22w%22%2C%5B272%2C128%2C208%2C128%5D%5D%2C%5B%22w%22%2C%5B272%2C24%2C208%2C24%5D%5D%2C%5B%22s%22%2C%5B208%2C24%2C0%5D%2C%7B%22color%22%3A%22red%22%2C%22offset%22%3A%220%22%2C%22_json_%22%3A7%7D%2C%5B%221%22%5D%5D%2C%5B%22w%22%2C%5B40%2C48%2C40%2C24%5D%5D%2C%5B%22w%22%2C%5B40%2C128%2C40%2C96%5D%5D%2C%5B%22w%22%2C%5B272%2C96%2C272%2C128%5D%5D%2C%5B%22w%22%2C%5B152%2C96%2C152%2C128%5D%5D%2C%5B%22i%22%2C%5B40%2C48%2C0%5D%2C%7B%22name%22%3A%22I0%22%2C%22value%22%3A%22step(8m%2C0%2C0%2C1n)%22%2C%22_json_%22%3A12%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22l%22%2C%5B152%2C48%2C0%5D%2C%7B%22name%22%3A%22L%22%2C%22l%22%3A%2216u%22%2C%22_json_%22%3A13%7D%2C%5B%222%22%2C%220%22%5D%5D%2C%5B%22r%22%2C%5B272%2C48%2C4%5D%2C%7B%22name%22%3A%22R%22%2C%22r%22%3A%22200%22%2C%22_json_%22%3A14%7D%2C%5B%221%22%2C%220%22%5D%5D%2C%5B%22w%22%2C%5B152%2C24%2C152%2C32%5D%5D%2C%5B%22w%22%2C%5B272%2C48%2C272%2C24%5D%5D%2C%5B%22g%22%2C%5B208%2C128%2C0%5D%2C%7B%22_json_%22%3A17%7D%2C%5B%220%22%5D%5D%2C%5B%22view%22%2C-11.34%2C-21.708%2C2.44140625%2C%2250%22%2C%2210%22%2C%221G%22%2Cnull%2C%22100%22%2C%22400n%22%2C%221000%22%5D%5D){:target="_blank"}. Click on **TRAN** to perform a transient analysis. The current source has its own internal switch. It starts at $8\,\text{mA}$ and steps abruptly down to $0$ at $t=0$. Confirm for yourself the current is down to $37\%$ of its $t(0)$ value after one time constant. 

## Summary
{:.no_toc}

The natural response of an $\text{RL}$ circuit is an exponential,

$i(t) = \text I_0\,e^{-\text Rt/\text L}$

where $\text I_0\,$ is the inductor current at time $t=0$.

The time constant for an $\text{RL}$ circuit is $\tau = \dfrac{\text L}{\text R}$ seconds.

The current can be expressed with $\tau$ notation as,

$i(t) = \text I_0\,e^{-\text t/\tau}$


## Appendix - Separable differential equation

The differential equation we derived for the $\text{RL}$ circuit is,

$\text L \dfrac{di}{dt} + i\,\text R = 0$

This is a *separable* differential equation. A differential equation is separable if it is possible to sort all the $i$'s and $di$'s as a product on one side of the equation and get all the $dt$'s in a product on the other side. This happens in the second step below.

If you covered this technique when you studied differential equations, you can solve both the $\text{RL}$ and $\text{RC}$ first-order differential equations with this method, without guessing a solution.

<p>
$\begin{aligned}
\text L \frac{di}{dt} &= -i\,\text R \\
\\
\text L \frac{di}{i} &= -\text R \,dt \\
\\
\int_0^{i(t)} \text L \frac{di}{i} &= -\int_0^t \text R \,dt \\
\\
\text L\,\ln i \,\bigg \vert_0^{i(t)} &= - \text R\,t \,\bigg \vert_0^{t} \\
\\
\text L\,(\ln i(t) - \ln i(0)) &= -\text R\,t \\
\\
\text L\,\ln \dfrac{i(t)}{i(0)} &= -\text R\,t \\
\\
\text L\,\ln \dfrac{i(t)}{\text I_0} &= -\text R\,t \\
\\
\ln \dfrac{i(t)}{\text I_0} &= -\dfrac{\text R\,t}{\text L} \\
\\
\dfrac{i(t)}{\text I_0} &= e^{-\text Rt/\text L} \\
\\
i(t) &= \text I_0\,e^{-\text Rt/\text L}
\end{aligned}$
</p>

This is the same result we came up with in the main article by guessing a solution. Sal has a sequence of videos where he covers this type of [separable differential equation](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-separable-eq/v/separable-differential-equations-introduction). He does a [worked example](https://www.khanacademy.org/math/differential-equations/first-order-differential-equations/exponential-models-diff-eq/v/modeling-population-with-simple-differential-equation) to solve a population growth problem. Notice it is the same as the solution to the RL circuit in this appendix.
