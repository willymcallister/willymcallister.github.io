---
layout: article
title:  "Capacitor i-v equation in action"
author: Willy McAllister
comments: true
---

The capacitor is one of the [ideal circuit elements]({{ site.baseurl }}{% link _videos/ideal-elements.md %}). Let's put the capacitor $i$-$v$ equation to work to see what happens to the voltage if we put in a current.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

A constant current driven into a capacitor creates a voltage with a straight ramp. This behavior is predicted by the integral form of the capacitor $i$-$v$ equation.

----

The capacitor $i$-$v$ equation can be written in terms of $i$ as a function of $v$ in this derivative form,

$i = \text C \,\dfrac{dv}{dt}$

$\text C$ is the *capacitance*, a physical property of the capacitor. $\text C$ acts as the scale factor between $i$ and $dv/dt$. It tells you how much $i$ you get for a given amount of $dv/dt$.

Or you can write the capacitor equation with $v$ as a function of $i$ with this definite integral,

$\displaystyle v = \dfrac1{\text C}\, \int_{\,0}^{\,T} i\,dt + v_0$

$v_0$ is the voltage across the capacitor at the beginning of the integral, at $t=0$. 

The notation for time is a bit tricky,

Little $t$ is the time variable inside the integral. It runs continuously. 

Big $T$ is the upper limit of the integral. $T$ is the moment you want to know the voltage on the capacitor. 

{% capture summary %}calculus notation: $di/dt${% endcapture %}  
{% capture details %} 
$i = \text C\,\dfrac{dv}{dt}$

$d$ is calculus notation for 'differential', or "a tiny change in ...". For example, $dt$ means 'a tiny change in time'. When you see it in a ratio, like $dv/dt$, that means, "a tiny change in $v$ (voltage) for each tiny change in time" An expression like $dv/dt$ is called a <a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-derivative-intro/ab-defining-derivative/v/calculus-derivatives-1-new-hd-version">derivative</a>. The derivative is the slope of voltage as it changes with time.  
{% endcapture %}{% include details.html %} 

{% capture summary %}calculus notation: $\int${% endcapture %}  
{% capture details %}  
$\displaystyle v = \dfrac{1}{\text C}\, \int_{\,0}^{\,T} i\,dt + v_0$

The loopy $\int$ is another symbol from calculus. It is the <a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-antiderivatives-ftc/ab-antiderivatives-intro/v/antiderivatives-and-indefinite-integrals">integral</a> sign. It's meaning is similar to the summation symbol Sigma $\Sigma$. Integration is the opposite of taking the derivative. 

In the capacitor equation, the integral sign means you add up a sequence of products $(i \times dt)$ or (current $\times$ a tiny interval of time). When you see upper and lower limits on the integral symbol that makes it a *definite* integral. It means to integrate over a specific range of $t$. You start at time $t=0$ and stop at time $t=T$.  
{% endcapture %}{% include details.html %} 

In this article we'll work with the integral form of the capacitor equation. 
Our example circuit is a current source connected to a $1\,\mu\text F$ capacitor.

![Capacitor and current source]({{ site.baseurl }}{% link i/capacitor_in_action1.svg %}){: .centered :}

## Voltage response to a current pulse

Suppose we apply a $2 \text{ mA}$ pulse of current to the $1 \,\mu\text F$ capacitor. the pulse lasts $3\,\text{msec}$, $(3 \times 10^{-3}$ seconds$)$. The initial voltage across the capacitor is zero.

![Current pulse]({{ site.baseurl }}{% link i/capacitor_in_action_current_pulse.svg %}){: .centered :}

If the capacitor current looks like this, what does the capacitor voltage look like?

**Find the capacitor voltage, $v(t)$**

To find voltage in terms of current, we use the integral form of the capacitor equation. 

$\displaystyle v(T) = \dfrac1{\text C}\, \int_{\,0}^{\,T} i\,dt + v_0$

The current pulse has abrupt changes, so we're going to solve for $v(t)$ in three separate chunks: before, during, and after the current pulse.

### Before the pulse

Before the current pulse $(t < 0)$, no current is flowing, so no charge accumulates on $\text C$. Therefore, $v_{(t<0)} = 0$. We didn't even have to use the equation. 

### During the pulse

For any time $T$ during the current pulse $(0 \lt t \lt 3\,\text{ms})$, current flows and charge accumulates on $\text C$, and the voltage rises. We apply the capacitor equation to find what the voltage does, 

$\displaystyle v(T) = \dfrac1{\text C}\, \int_{\,0}^{\,T} i\,dt + v_0$

The $t$ and $T$ notation is a little tricky. Little $t$ is time, the variable that gets integrated. Big $T$ is the amount of time we wait for charge to accumulate. The integral sweeps time $t$ from $0$ up to some accumulation time, big $T$. The biggest big $T$ can be is $3\,\text{msec}$ because that's the duration of the pulse. 

$i$ is constant (the top of the pulse is flat) during this time so we can take it outside the integral. Since $v_0$ is zero, we can leave it out. 

$\displaystyle v(T) = \dfrac{i}{\text C}\, \int_{\,0}^{\,T} dt$

$\displaystyle v(T) = \dfrac{i}{\text C}\,\, t\bigg  \|_{\,0}^{\,T}$

$v(T) = \dfrac{i}{\text C} \,T\qquad\text{volts}$ 

This is an equation for $v$ as a function of pulse duration $T$, for a given pulse height $i$. The equation has the shape of a line, with slope $i/\text C$. The slope is,

 $\dfrac{i}{\text C} =\dfrac{2\times 10^{-3}\,\text A}{1 \times 10^{-6}\,\text F} = 2000\,\text{volts/second}$

For any pulse width, the voltage is,

$v(T) =  2000 \,\text{volts/s} \,\cdot T$ 

Our pulse width is $T = 3\,\text{ms}$, so the voltage across the capacitor rises to,

$v_{(T=3\,\text{ms})} =  2000 \,\text{volts/s} \,\cdot \,0.003 \,\text s= 6\,\text{volts}$ 

With a constant current of $2\,\text{mA}$, the voltage on the capacitor rises in a straight line with a slope of $2000 \,\text{volts/sec}$. The voltage started at $0\,\text V$ and rises to $6\,\text{volts}$ after $3\,\text{ms}$.

### After the pulse

This part is rather interesting if you haven't thought about it before. After the pulse the current falls to $0$, so that means charge stops accumulating on the capacitor. Since no charge is moving, we should expect the voltage not to change. We can see how the math represents this by writing the capacitor equation at starting time $t=3\,\text{ms}$. We plug in the starting voltage at that time, $v_{3\,\text{ms}} = 6 \,\text V$.

$\displaystyle v(T) = \dfrac1{\text C}\, \int_{\,3\,\text{ms}}^{\,T} 0\,dt + 6$

The integral evaluates to $0$ and we get,

$v(T) = 6\,\text V\quad$ for any value of $T$. 

Once the current stops, the charge stays put, so the capacitor voltage remains at $6\,\text V$. 


$q = \text C\,v$

$v = \dfrac{q}{\text C}$

Assembling the three chunks together gives us $v(t)$ in the lower graph,

![Current pulse]({{ site.baseurl }}{% link i/capacitor_in_action_current_pulse.svg %}){: .centered :}
![Voltage ramp]({{ site.baseurl }}{% link i/capacitor_in_action_voltage_ramp.svg %}){: .centered :}

This circuit configuration (a current source driving a capacitor) has a nickname. It is called an *integrator* because it accumulates or *integrates* charge over time. 

## Simulation model

Find the current and voltage with this [simulation model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["w",[144,72,120,72]],["w",[96,72,104,72]],["a",[104,72,0],{"color":"blue","offset":"0","_json_":2},["1","2"]],["w",[192,120,144,120]],["w",[96,120,144,120]],["g",[144,120,0],{"_json_":5},["0"]],["w",[192,72,144,72]],["s",[144,72,0],{"color":"red","offset":"0","_json_":7},["2"]],["c",[192,72,0],{"name":"C","c":"1u","_json_":8},["2","0"]],["i",[96,120,2],{"name":"Is","value":"pulse(0,2m,0,1n,1n,3m,1000M)","_json_":9},["0","1"]],["view",-81.84,-1.7080000000000126,2.44140625,"50","10","1G",null,"100","0.006","1000"]]). Open the link and click on **TRAN** in the upper menu bar to perform a transient simulation. The current source is modeled as a single PULSE. (Double-click on the current source to see how it is defined.) The zoom controls are on the left side of the window, in light gray.

### Design challenge

Here's another [simulation model](http://spinningnumbers.org/circuit-sandbox/index.html?value=[["i",[136,120,2],{"name":"Is","value":"pwl(-1s,0,0s,0,1ns,2m,3ms,2m,3ms,0,5s,0)","_json_":0},["0","2"]],["c",[232,72,0],{"name":"C","c":"1u","_json_":1},["1","0"]],["s",[184,72,0],{"color":"red","offset":"0","_json_":2},["1"]],["w",[232,72,184,72]],["g",[184,120,0],{"_json_":4},["0"]],["w",[136,120,184,120]],["w",[232,120,184,120]],["a",[144,72,0],{"color":"blue","offset":"0","_json_":7},["2","1"]],["w",[136,72,144,72]],["w",[184,72,160,72]],["view",-22.80000000000001,-25.260000000000012,1.953125,"50","10","1G",null,"100","0.009","1000"]]) with the current source defined a different way, as a PWL (piece-wise-linear) waveform. The time and current are entered as a list of comma-separated [time, current] pairs, like this: -1s,0,0s,0,1ns,2m,3ms,2m,3ms,0,5s,0.

See if you can modify the current waveform to get the capacitor voltage to ramp down to $0\text V$ in another $3\,\text{ms}$. You are going for something that looks like this,

![Voltage ramp up and ramp down]({{ site.baseurl }}{% link i/capacitor_in_action2.png %}){: .centered :}{: height="260px" :}

<details>
<summary>show answer</summary>
<p>Double-click on the current source and enter this in the PWL "comma-separated list of alternating times and values".</p>
<p>-1s,0,0s,0,1ns,2m,3ms,2m,3ms,-2m,6ms,-2m,6ms,0,10s,0</p>
<p>The current source pours in charge for $3\,\text{ms}$ and the voltage ramps up. Then it reverses direction to pull out charge for another $3\,\text{ms}$. The voltage is another ramp, this time with negative slope since charge is removed.</p>
</details>

## Summary
{:.no_toc}

If you drive a constant current into a capacitor it produces a voltage shaped like a straight ramp. We used the integral form of the capacitor $i$-$v$ equation to predict this. 

The approach to solving this circuit is a good example of how engineers divide a problem up into small bits and pieces, solving each simple piece, and reassembling the complete answer. Your first instinct when faced with a complicated problem like this should be, "How can I chop this up into pieces?"
