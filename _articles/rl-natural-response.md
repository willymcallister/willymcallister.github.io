---
layout: article
title:  "RL natural response"
author: Willy McAllister
comments: true
---

We investigate the *natural response* of a resistor inductor circuit. This derivation is similar to the [RC natural response]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}).

![RL natural response circuit]({{ site.baseurl }}{% link i/rl_natural_response1.svg %}){: .centered :}

This kind of $\text{RL}$ circuit appears any time a wire is involved in a circuit. The wire may be formed into a coil to form an inductor.Inductors are used in almost every power supply and in frequency filters. If you design with a mechanical relay, part of it is a coiled wire used as an electromagnet. Simple wires and traces on circuit boards always have a small inductance. This becomes important in very fast circuits. 

To figure out this circuit we have to account for time, so we have to use some concepts from calculus. We use [derivatives](https://www.khanacademy.org/math/differential-calculus/taking-derivatives) to describe how the $\text{RL}$ circuit behaves.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

For an resistor-inductor $(\text{RL})$ circuit with an initial current $\text I_0$, the current diminishes exponentially, 

$i(t) = \text I_0\,e^{-\text Rt/\text L}$

where $\text I_0$ is the current at time $t=0$. This is called the *natural response*.

The *time constant* for an $\text{RL}$ circuit is $\tau = \dfrac{\text L}{\text R}$.

----

The *natural response* of a circuit is what the circuit does when there are no external influences (it has internal energy, but no energy coming in from outside). It is the most basic behavior of a circuit. 

## Intuitive description

To get the $\text{RL}$ circuit to do something, we call on an outside helper to create a current in the inductor. Then we disconnect the external circuit, step back, and watch what happens.

![RL natural response circuit switch closed]({{ site.baseurl }}{% link i/rl_natural_response6.svg %}){: .centered :}{: height="160px"} 

On the right side we have inductor $\text L$, and resistor $\text R$. This is the circuit we want to study. On the left side is our "outside helper," a current source, $\text I$, resistor $\text R0$, and a switch in the closed position. 

Assume the switch has been closed for a long time. The blue loop shows how the current flows in this circuit, 

![RL natural response circuit two current paths]({{ site.baseurl }}{% link i/rl_natural_response7.svg %}){: .centered :}{: height="160px"} 

How do we know all the current flows through just the inductor and no current flows in either resistor? The inductor equation tells us so,

$v = \text{L}\,\dfrac{di}{dt}$

The current from the source is constant. It does not change with time. 

In derivative notation we say, $\dfrac{di}{dt} = \dfrac{d}{dt}\text I_0 = 0$. The derivative of any constant is always $0$.

If we put this value into the inductor equation we get,

$v = \text L\,\dfrac{di}{dt}=\text L \cdot 0$

$v = 0$ 

The voltage across the inductor (and therefore both resistors) is $0$. Ohm's Law tells us a resistor with $0$ volts has $0$ current. Therefore, all of $\text I_0$ flows through the inductor.

>When current in an inductor is constant (also known as **DC** or zero frequency), the inductor "looks like" a short circuit. It has $0$ volts across its ends, just like an ideal wire.

Summary: Before the switch opens,  
Current in the inductor is $\text I_0$.  
Voltage across the inductor and resistor is $0$ volts.

### Initial conditions

Initial conditions are the $i$'s and $v$'s *after* the switch opens. So let's open the switch. This is an abrupt and significant change to the circuit. What happens to current and voltage? Do they stay the same? Do they jump to some new value? We have to figure it out.

The switch opens at time $t = 0$. The $\text I$ and $\text R0$ helper circuit disconnects from the $\text{RL}$ section. We end up with two separate paths for current, 

![Switch opens, current loops]({{ site.baseurl }}{% link i/rl_natural_response5.svg %}){: .centered :}{: height="180px"}

On the helper side, current from the source flows through $\text R0$.  
On the $\text{RL}$ side, the current in $\text L$ can flow through $\text R$. 

The helper circuit has done its job and we won't pay attention to it from now on. 

{% capture summary %}What is R0 for?{% endcapture %}  
{% capture details %}  
After the switch is thrown open, $\text R0$ provides a path for the current from the current source. It is not nice to ask a current source to drive an open circuit. The ideal current source creates an infinite voltage if it tries to drive current into an open circuit. For a similar reason, you should never short out an ideal voltage source, to avoid infinite current.  
{% endcapture %}{% include details.html %} 

#### Initial current
{:.no_toc}

An instant after the switch opens, at $t=0^+$, what happens to the inductor current? Does it stop? Does it continue? Does it change?

Here is the most interesting property of an inductor, 

>The current in an inductor *cannot* change instantaneously. 

{% capture summary %}why?{% endcapture %}  
{% capture details %}  
Current pushed into an inductor by an external source causes energy to be stored in a magnetic field surrounding the inductor. If the external current stops, the stored energy does not vanish or go somewhere else in zero time. Stored magnetic energy returns to the circuit by continuing to push the inductor current. See the mechanical analogy to visualize this. 

Over a short time interval (like the tiny interval from before to after a switch opens) the current in an inductor is continuous (does not suddenly jump to a different value). As the time interval approaches zero, the inductor current before and after the switch event is the same. $\text I_\text L(0^+) = \text I_\text L(0^-)$.

This behavior is predicted by the inductor equation,

$v = \text L\,\dfrac{di}{dt}$

If the current changes instantly, that implies a finite change of current, $di = \Delta i$, happens in zero time, $dt = 0$. The derivative of current is $di/dt = \Delta i/0$, or infinite. The inductor equation predicts there will be an infinite voltage across the inductor. Infinite voltage does not happen. There *has* to be some finite time interval $\Delta t$ to allow the energy to dissipate.
{% endcapture %}{% include details.html %} 

{% capture summary %}mechanical analogy{% endcapture %}  
{% capture details %} 
The energy stored in an inductor's magnetic field is similar to momentum stored in a mass. If you try to stop a moving mass, its momentum does not dissipate instantly. You can't stop a moving mass in an instant. We say: Momentum tends to *sustain* the motion of the mass. 

Pick the front wheel of your bicycle up off the ground and give it a good hard spin. Now grab it with your hand and try to stop it in an instant. Your hand gets quite a jolt and it takes time for the wheel to stop. There is a lot of kinetic energy in the spinning wheel.
{% endcapture %}{% include details.html %} 

The current just before the switch opens,![](https://fastly.kastatic.org/ka-perseus-images/5e8325bdacb549ba5f902f732b1fe6351f42f7c0.svg){: height="180px"}

equals the current after the switch opens,![](https://fastly.kastatic.org/ka-perseus-images/b102dcbe84f13463838b37b64d07f70febc2b05b.svg){: height="180px"}

#### Initial voltage
{:.no_toc}

What about the voltage? There is a current in $\text R$, so the voltage jumps up to $v = \text I_0\,\text R$. The voltage across an inductor is allowed to make sudden jumps. Notice the jump in voltage does not depend on the value of the inductor, $\text L$.

| ![RL initial Io]({{ site.baseurl }}{% link i/rl_natural_response2.svg %}) | ![RL initial Vo]({{ site.baseurl }}{% link i/rl_natural_response4.svg %}) |

We reasoned our way through the switch event and have the initial conditions. 

{% capture summary %}Voltage on an inductor can change in an instant{% endcapture %}  
{% capture details %}  
An inductor has no problem if its voltage changes instantaneously. If the voltage jumps from $1$ to $10$, the $i$-$v$ equation predicts the slope of current, $di/dt$, will increase by a factor of $10$. This actually happens with real-life inductors.

In the mechanical analogy, the voltage on an inductor is analogous to the force on a mass. Nothing stops you from suddenly changing how hard you push on your bicycle wheel as you spin it up.  
{% endcapture %}{% include details.html %} 

### What happens after a long time? 

Before we look at what happens after the switch event, let's first think about where the circuit goes in the long run. If we wait a long time, any energy in the inductor will eventually be transformed into heat by the resistor. When all the energy has turned into heat, $i$ will be $0$, and $v$ will be $0$. This is called the *final state* of our circuit. 

$i(t)$ and $v(t)$ now look like this with the long-time response sketched in,

![Current after a long time]({{ site.baseurl }}{% link i/rl_natural_response8.svg %}) | ![Voltage after a long time]({{ site.baseurl }}{% link i/rl_natural_response9.svg %})

### What happens in between?

![](https://fastly.kastatic.org/ka-perseus-images/f6a8e92a99bfd59ead47e4b0fb265c8710f63608.svg){: .centered :}{: height="180px"}

Now we fill in what happens between $t=0$ and "a long time from now." Let's make a guess. There is probably some sort of smooth curve joining the two segments. I would guess the rate of change could be higher near the beginning when the current is high. That means the power dissipation in the resistor is high so energy dissipates faster. With this intuition, we sketch in predicted curves for current and voltage,

![Current sketched in]({{ site.baseurl }}{% link i/rl_natural_response10.svg %}) | ![Voltage sketched in]({{ site.baseurl }}{% link i/rl_natural_response11.svg %})

This will turn out to be a pretty good guess for the $\text{RL}$ natural response. Just with our intuition we figured out where it starts and ends, and we estimated what the current and voltage look like during the transition. We are not exactly sure how fast the curves come down, or how long "a long time" really is.

## Formal derivation

We want to derive the $\text{LC}$ *natural response*, $\blueD i$ and $\goldD v$ as a function of time. This derivation follows the same steps as the [RC natural response]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}). 

![](https://ka-perseus-images.s3.amazonaws.com/0a55992334b0224455b16dec84fd378dd3abd3bc.svg){: .centered :}{: height="180px"}

We assume $\text I_0$ is the initial current flowing in the inductor.

### Model the components

$\text R$ and $\text L$ can be modeled by their characteristic $i$-$v$ equations.

The resistor is described by Ohm's Law,

$v_\text R = i \,\text R$

The inductor is described by the inductor $i$-$v$ equation,

$v_\text L = \text L \,\dfrac{di}{dt}$

![](https://ka-perseus-images.s3.amazonaws.com/38a5992cae262c50157b8d1e8b5f544dc3aecaf1.svg){: .centered :}{: height="220px"}

{% capture summary %}passive sign convention{% endcapture %}  
{% capture details %}  
The resistor and inductor voltages are oriented using the [sign convention for passive components]({{ site.baseurl }}{% link _articles/sign-convention.md %}). The current direction is indicated by the blue arrow, and the two voltages are oriented so the current flows *into* the positive voltage terminals of $\text R$ and $\text L$.

We are really careful about this because it determines the signs in the  equations coming up soon.  
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

* It is a "differential" equation because it contains derivatives.
* It is “first-order” because the highest derivative is a first derivative $({di} / {dt})$.
* It is “ordinary” because there is just a single independent variable ($t$), (as opposed to partial derivatives of multiple variables).   

Now we go through the solution of an ODE step by step. 

Our goal is to discover a function $i(t$) that, when plugged in, makes the ODE true. One way to come up with an $i(t)$ is to make an informed guess and try it out. We will guess a solution, just like we did with the [RC natural response]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}). 

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

All done! We found a function and two constants and the differential equation came true. The general solution for the natural response of an $\text{RL}$ circuit is,

$\boxed{i(t) = \text I_0\,e^{-\text Rt/\text L}}$

What about the voltage? The voltage $v(t)$ falls out of Ohm's Law, 

$v = \text R \, i$

$\boxed{v(t) = \text R\,\text I_0\,e^{-\text Rt/\text L}}$

I always like to see what the equations look like,

![RL natural response current]({{ site.baseurl }}{% link i/rl_natural_response_current_nolabel.svg %}) | ![RL natural response voltage]({{ site.baseurl }}{% link i/rl_natural_response_voltage_nolabel.svg %})

Before the switch closes the current is flat at $\text I_0$. The switch closes at $t=0$ and the current falls on an exponential curve until it fades $0$.

The voltage across the inductor is $0$ before the switch closes. It makes a sharp jump at $t=0$ as soon as the current starts to change. The peak voltage depends on the initial current $\text I_0$ and the resistance, $\text R$. Voltage follows a similar exponential curve until it fades to $0$.

Compare these computed graphs to the ones we sketched earlier. The sketches have the right shape.

![Current sketched in]({{ site.baseurl }}{% link i/rl_natural_response10.svg %}) | ![Voltage sketched in]({{ site.baseurl }}{% link i/rl_natural_response11.svg %})

### Time constant

An exponent has to be a plain vanilla number. It isn't allowed to have dimensions. $\text{R}/\text L$ must have units of $1/\text{time}$, so it can cancel out $t$. The reciprocal, $\text L/\text R$, has units of $\text{seconds}$, something you might not have guessed. 

$\text L/\text R$ is called the *time constant* of a resistor-inductor combination. It has the same properties as the corresponding product $\text R \cdot \text{C}$ in the resistor-capacitor circuit. We use the Greek letter $\tau$ (tau) as the symbol for time constant,

$\tau = \dfrac{\text L}{\text R}\quad$ seconds

We can rewrite the natural response equation like this, 

$i(t) = \text I_0e^{-t/\tau}$

When $t$ is equal to the time constant, the exponent becomes $-1$. The exponential term is equal to $1/e$, or about $0.37$. 

The time constant determines how fast the exponential curve comes down to zero. After $1$ time constant has passed, the current is down to $37\%$ of its initial value. If you wait $3$ to $5$ time constants, the natural response is pretty much over.

If you make the inductor bigger, the time constant gets longer.  
If you make the resistor bigger, the time constant get shorter. 

Contrast this with the $\text{RC}$ time constant, $\tau_{\text{RC}}=\text{RC}$, which gets longer with both larger $\text R$ and $\text C$. When the resistor is large the energy dissipation is high, the natural response is snuffed out rapidly. When the resistor is small the energy dissipates slowly and the current circulates round and round for a long time. 

{% capture summary %}The RL time constant is *not* R times L.{% endcapture %}  
{% capture details %}  
Just a small caution: Even though we call this an $\text{RL}$ circuit, the time constant is not the product $\text{RL}$. It's $\tau_{\text{LC}} = \dfrac{\text L}{\text R}$.

For the $\text{RC}$ circuit the time constant *is* $\text{RC}$. 

Do your best not to get trapped. 

How do you remember the order of the quotient? Is $\text R$ on top, or is it $\text L$? I remember $\text L/\text R$ because "el over r" starts with *hello!* while "arr over el" sounds like a mean pirate.
{% endcapture %}{% include details.html %} 

## Worked example

Let's do an example.

![](https://fastly.kastatic.org/ka-perseus-images/4da31c8b75365fd0b62b9b453d27a07725d82f9e.svg){: .centered :}{: height="180px"}

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

![](https://fastly.kastatic.org/ka-perseus-images/a5a64348b5e2459b1506f6f3ced58bc1c6ec4cb1.svg){: .centered :}{: height="180px"}

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

|![RL natural response current]({{ site.baseurl }}{% link i/rl_natural_response_current.svg %})|![RL natural response voltage]({{ site.baseurl }}{% link i/rl_natural_response_voltage.svg %})|
{% endcapture %}{% include details.html %} 

## Summary
{:.no_toc}

The natural response of an $\text{RL}$ circuit is an exponential,

$i(t) = \text I_0\,e^{-\text Rt/\text L}$

where $\text I_0\,$ is the inductor current at time $t=0$.

The time constant for an $\text{RL}$ circuit is $\tau = \dfrac{\text L}{\text R}$ seconds.

The current can be expressed with $\tau$ notation as,

$i(t) = \text I_0\,e^{-\text t/\tau}$


## Appendix - Separable differential equation

The differential equation we derived for the $\text{LC}$ circuit is,

$\text L \dfrac{di}{dt} + i\,\text R = 0$

This is a *separable* differential equation. A differential equation is separable if it is possible to sort all the $i$'s and $di$'s to one side of the equation and get all the $dt$'s on the other side. This happens in the second step below.

If you have covered this technique in your calculus studies, you can solve both the $\text{RL}$ and $\text{RC}$ first-order differential equations with this method, without guessing a solution.

<p>
$\begin{aligned}
\text L \frac{di}{dt} &= -i\,\text R \\
\text L \frac{di}{i} &= -\text R \,dt \\
\int_0^{t} \text L \frac{di}{i} &= -\int_0^t \text R \,dt \\
\text L\,\big[\ln i(t) - \ln i(0)\big] &= -\text R\,t \\
\text L\,\ln(i(t)/\text I_0) &= -\text R\,t \\
\ln(i(t)/\text I_0) &= -\text R\,t/\text L \\
i(t)/\text I_0 &= e^{-\text Rt/\text L} \\
i(t) &= \text I_0\,e^{-\text Rt/\text L}
\end{aligned}$
</p>

This is the same result we came up with in the main article by guessing a solution. Sal has a sequence of videos where he solves this type of [separable differential equation](https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations/ab-separable-eq/v/separable-differential-equations-introduction).
