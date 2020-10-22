---
layout: article
title:  "RL natural response - Intuition"
author: Willy McAllister
comments: true
---

We develop an intuition for the natural response of a resistor-inductor $(\text{RL})$ circuit. 

![RL natural response circuit]({% link i/rl_natural_response1.svg %}){: .centered :}

The formal derivation is in the next article, [RL natural response - derivation]({% link _articles/rl-natural-response-derivation.md %})

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

The *natural response* of a circuit is what the circuit does "naturally" when it has some internal energy and we allow it to dissipate. It is the most basic behavior of a circuit. 

Why do we study the $\text{RL}$ natural response? Because it appears any time a wire is involved in a circuit. If the wire is formed into a coil we call it an inductor. Even if it is not coiled up, every wire and every trace on a circuit board has a small inductance that might be important. Gold bond wires in an integrated circuit have enough inductance to be important in very fast circuits. There is always inductance around and always resistance nearby.

## Setup

To get the $\text{RL}$ circuit to do something, we call on an outside helper to create a current in the inductor. Then we disconnect the external circuit, step back, and watch what happens.

![RL natural response circuit switch closed]({% link i/rl_natural_response6.svg %}){: .centered :}

On the right side we have inductor $\text L$ and resistor $\text R$. This is the circuit we want to study. On the left side is our "outside helper," made of current source $\text I$, resistor $\text R0$, and a switch in the closed position. 

Assume the switch has been closed for a long time. The blue loop shows how the current flows in this circuit, 

![RL natural response circuit two current paths]({% link i/rl_natural_response7.svg %}){: .centered :} 

How do we know all the current flows through just the inductor and no current flows in either resistor? The inductor equation tells us so,

$v = \text{L}\,\dfrac{di}{dt}$

A derivative with respect to time is a measure of how a value is changing.  
The derivative with respect to time of a constant is always $0$.  

Since the current from the source is constant, in derivative notation we say, 

$\dfrac{di}{dt} = \dfrac{d}{dt}\text I_0 = 0$. 

If we put this value into the inductor equation we get,

$v = \text L\,\dfrac{di}{dt}=\text L \cdot 0$

$v = 0$ 

So the voltage across the inductor (and therefore both resistors) is $0$. Ohm's Law tells us a resistor with $0$ volts has $0$ current. Therefore, all of $\text I_0$ must be flowing through through the inductor. 

>When current in an inductor is constant (also known as **DC** or zero frequency) it has $0$ volts across it, just like an ideal wire. Under these conditions the inductor appears to be a short circuit.

Summary: Before the switch opens,  
Current in the inductor is $\text I_0$.  
Voltage across the inductor and resistor is $0$ volts.

## Initial conditions

We know what's going on when the switch is closed. The next step is to find the $i$'s and $v$'s just *after* the switch opens. These are called the *initial conditions*. Opening the switch is an abrupt change to the circuit. What happens to current and voltage? Do they stay the same? Do they jump to some new value? We have to figure it out.

The switch opens at time $t = 0$. The $\text I$ and $\text R0$ helper circuit disconnects from the $\text{RL}$ section. We end up with two separate paths for current, 

![Switch opens, current loops]({% link i/rl_natural_response5.svg %}){: .centered :}

On the helper side, current from the source flows through $\text R0$.  
On the $\text{RL}$ side, the current in $\text L$ flows through $\text R$. 

The helper circuit has done its job and we won't pay attention to it from now on. 

{% capture summary %}Why do we need R0?{% endcapture %}  
{% capture details %}  
After the switch is thrown open, $\text R0$ provides a path for the current from the current source. It is not nice to ask a current source to drive an open circuit. The ideal current source creates an infinite voltage if it tries to drive current into an open circuit. If you simulate this circuit without $\text R0$ the simulator will be very unhappy. (For a similar reason, you should never short out an ideal voltage source, to avoid infinite current.)  
{% endcapture %}{% include details.html %} 

### Initial current
{:.no_toc}

An instant after the switch opens, at $t=0^+$, what happens to the inductor current? Does it stop? Does it continue? Does it change?

Here is the most interesting property of an inductor, 

The current in an inductor *cannot* change instantaneously. 

{% capture summary %}why?{% endcapture %}  
{% capture details %}  
Current pushed into an inductor causes energy to be stored in a magnetic field surrounding the inductor. If the current stops, the stored energy does not vanish or go somewhere else in zero time. Stored magnetic energy returns to the circuit by continuing to push the inductor current. 

Over a short time interval (like the tiny interval from before to after a switch opens) the current in an inductor is continuous---it does not suddenly jump to a different value. As the time interval approaches zero, the inductor current before and after the switch event is the same. $\text I_\text L(0^+) = \text I_\text L(0^-)$.

This behavior is predicted by the inductor equation,

$v = \text L\,\dfrac{di}{dt}$

If the current changes instantly, that implies a finite change of current, $di = \Delta i$, happening in zero time, $dt = 0$. The derivative of current is $di/dt = \Delta i/0$, or infinite. The inductor equation predicts there will be an infinite voltage across the inductor. Infinite voltage does not happen. There *has* to be some finite time interval $\Delta t$ to allow the energy to dissipate.
{% endcapture %}{% include details.html %} 

{% capture summary %}mechanical analogy{% endcapture %}  
{% capture details %} 
The energy stored in an inductor's magnetic field is similar to momentum stored in a mass. If you try to stop a moving mass, its momentum does not dissipate instantly. You can't stop a moving mass in an instant. We say: Momentum tends to *sustain* the motion of the mass. 

A great example of a moving mass is a bicycle wheel. Pick up the front wheel of your bicycle off the ground and give it a good hard spin. Now grab it with your hand and try to stop it instantly. Your hand gets quite a jolt and the wheel does not stop right away. There is a lot of energy stored in a spinning wheel.
{% endcapture %}{% include details.html %} 

The inductor current just before the switch opens,

![Current before switch opens]({% link i/rl_natural_response13.svg %})

equals the inductor current just after the switch opens,  

![Current after switch opens]({% link i/rl_natural_response14.svg %})

$i(0^+) = i(0^-) = \text I_0$

This is the initial condition for the $\text{RL}$ current.

### Initial voltage
{:.no_toc}

What happens to voltage when the switch opens? All of a sudden there is a current forced to flow in $\text R$---so the voltage jumps abruptly up to $v = \text I_0\,\text R$. 

![RL initial Io]({% link i/rl_natural_response2.svg %})
![RL initial Vo]({% link i/rl_natural_response4.svg %})

Inductor current can't change suddenly, but its voltage is allowed to make sudden jumps.

{% capture summary %}Inductor voltage can change in an instant{% endcapture %}  
{% capture details %}  
An inductor has no problem if its voltage changes instantaneously. If you force the voltage to jump from $1$ to $10\,\text V$ the $i$-$v$ equation says the slope of current, $di/dt$, will increase by a factor of $10$. Inductor current can change slope; it just can't jump abruptly to a new value.

In the mechanical analogy, the voltage is analogous to the force. Nothing stops you from suddenly changing how hard you push on your bicycle wheel as you spin it up.  
{% endcapture %}{% include details.html %} 

We reasoned our way through the switch event. 

## What happens after a long time? 

Before we look at what happens after the switch event, let's first think about what happens in the long run. If we wait a long time, magnetic energy in the inductor emerges as current, which eventually is transformed into heat by the resistor. When all the energy has turned into heat, $i$ will be $0$, and $v$ will be $0$. This is the *final state* of our circuit. 

$i(t)$ and $v(t)$ look like this with the long-time response added,

![Current after a long time]({% link i/rl_natural_response8.svg %})
![Voltage after a long time]({% link i/rl_natural_response9.svg %})

## What happens in between?

![RL circuit]({% link i/rl_natural_response15.svg %}){: .centered :}

Now we fill in what happens between $t=0$ and "a long time from now." Let's make a guess. There is probably some sort of smooth curve joining the two segments. I would guess the rate of change could be higher near the beginning when the current is high. That means the power dissipation in the resistor is high so energy dissipates faster. With this intuition, we sketch in predicted curves for current and voltage,

![Current sketched in]({% link i/rl_natural_response10a.svg %}) 
![Voltage sketched in]({% link i/rl_natural_response11a.svg %})

## Summary
{:.no_toc}

This will turn out to be a pretty good guess for the $\text{RL}$ natural response. Just with our intuition we figured out where it starts and ends, and we estimated what the current and voltage look like during the transition. We are not exactly sure how fast the curves come down, or how long "a long time" really is. 

The formal derivation is in the next article, [RL natural response - derivation]({% link _articles/rl-natural-response-derivation.md %}).
