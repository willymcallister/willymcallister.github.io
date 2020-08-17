---
layout: article
title:  "RC step response intuition"
author: Willy McAllister
comments: true
---

When something changes in a circuit, the voltages and currents adjust to the new conditions. If the change is an abrupt step the response is called the *step response*.

![RC step response circuit]({% link i/rc_step1.svg %}){: .centered :}

The $\text{RC}$ step response is the most important analog circuit engineers should deeply understand. In digital systems it sets the speed limit for how fast the system can run. It happens billions of times a second in computers and other digital devices. In analog systems it is the basic building block for filters and signal processing.

Before diving into the step response you may want to review two articles, [RC natural response - intuition]({% link _articles/rc-natural-response-intuition.md %}), and [RC natural response - derivation]({% link _articles/rc-natural-response-derivation.md %}).

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The *step response* of an $\text R\text C$ circuit is,

$v(t) = \text V_\text S + (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}}$
 
where $v(t)$ is the voltage on the capacitor, $\text V_0$ is the beginning voltage of the step, and $\text V_\text S$ is the ending voltage of the step. 

----

We apply an abrupt step to a resistor-capacitor $(\text{RC})$ circuit and watch the voltage across the capacitor. A step input is a common way to give a circuit a little "kick" to see what it does. The step response tells us quite a lot about the properties of the $\text{RC}$ circuit.

There is a fair amount of new vocabulary associated introduced in this derivation. We use the method of *forced plus natural response* to solve the challenging *non-homogeneous* differential equation that models the $\text R\text C$ step circuit. 

This is the circuit we will study,

![RC step response circuit]({% link i/rc_step1a.svg %}){: .centered }

The input is an abrupt voltage step that starts at $\text V_0$ and instantly jumps to $\text V_{\text S}$ at $t = 0$.  
We want to find the voltage on the capacitor, $\goldC{v(t)}$, as a function of time. 

{% capture summary %}instantaneous step{% endcapture %}  
{% capture details %}  
A step function is a mathematical idea. The voltage has only two values, $\text V_0$ and $\text V_{\text S}$. There are no in-between values. When we draw a step with an orange vertical line at $t = 0$ it's simply a graphical connection between the top and bottom horizontal lines. The vertical line isn't meant to suggest intermediate voltage values exist at $t = 0$. 

Technically, the step function does not meet the definition of a mathematical function, since there's this discontinuous weirdness at $t=0$. You will see how we deal with that when we determine the initial conditions.   

Real world step functions always have some finite slope. We still call it a step if the slope is really steep relative to the response of the $\text{RC}$ circuit. It's close enough to an ideal step if it looks like a step on the time scale we are interested in.  
{% endcapture %}{% include details.html %} 

## Intuition

Let's begin by thinking about what happens using just our intuition.

### Initial state

We start by looking at the state of the circuit long before anything happens. 

Some time in the distant past the voltage source was connected to the $\text{RC}$ circuit. Charge flowed through the resistor onto the capacitor plates. As charge accumulated on the capacitor its voltage rose according to $q = \text C\,v$. Eventually, the capacitor voltage $v$ rose to $\text V_0$. At that point the voltage on either side of the resistor became the same, and the voltage across the resistor, $\text V_0 - v$, fell to $0$. At this point Ohm's Law said the current stopped flowing.  

This left us in the *initial state* of the circuit with $i(t<0) = 0$ and $v(t<0) = \text V_0$.

### Transient period

The voltage step happens at $t = 0$. The circuit now has to adjust to its new input. This time of adjustment between the initial state and the final state is called the *transient period*. The adjustment is called the *transient response*. Since our input is a step, it is also called the *step response*. 

We studied the $\text{RC}$ circuit before when we worked out the [natural response]({% link _videos/rc-natural-response-intuition.md %}). We learned the $\text{RC}$ natural response has a distinctive exponential shape. When we drive the circuit with a step we can anticipate $i(t)$ and $v(t)$ might have some resemblance to the natural response. 

With the new voltage at the input, current flows through the resistor and more and more charge shows up on the capacitor. (For this exercise we assume the step is to a higher voltage.) This causes the capacitor voltage to rise toward $\text V_\text S$.  This *transient period* will probably be some kind of gentle curve starting at $\text V_0$. 

### Final state

Now jump to a time waaaay after the step. Let's figure out where the voltage and current finish up. 

Just like for the initial state, at some point the rising capacitor voltage, $v$, becomes the same as $\text V_\text S$. When this happens, the voltage across the resistor, $\text V_\text S -v$, falls to $0$ and current stops. 

Now we are in the *final state* or *steady state* of the circuit. Our intuition tells us $i(t = \infty) = 0$ and $v(t = \infty) = \text V_\text S$. 

### Summary 

![Intuitive step response plot ]({% link i/rc_step_intuition.svg %}){: .centered :}

The voltage starts at an initial value and ends at the step voltage forced by the input. Between the initial and final states, the voltage and current make some sort of gentle transition (three possibilities shown). The circuit starts and ends with no current. But in between, during the transient period, current flows from the source, through the resistor, and onto the capacitor.
