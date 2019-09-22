---
layout: article
title:  "Linearity of electronic components"
author: Willy McAllister
comments: true
---

We apply the test for linearity to our favorite electronic components, $\text{R, L,}$ and $\text C$.

This article assumes you are familiar with what "linearity" means, as described in the previous article on [Linearity]({{ site.baseurl }}{% link _articles/linearity.md %}).

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

A linear function has these properties:

Homogeneity (scaling): $f(ax) = af(x)$  

Additivity: $f(x_1+x_2) = f(x_1) + f(x_2)$ 

The additivity property is also referred to as *superposition*.

Resistors, capacitors, and inductors are *linear* because they have both scaling and additivity.

----

Let's test to see if $\text{R, L,}$ and $\text C$ are linear. We start with the resistor. 

## Resistor

We can tell if an ideal resistor is linear if we can demonstrate it meets the rule for scaling. We start by describing a resistor as a mathematical function: "A resistor is a function that takes voltage as an input, and creates a current as an output." (We could also have turn this around, saying current is the input and voltage is the output. The story plays out the same either way.)

Ohm's Law can be written so it looks like a function:

$i = f(v) = \dfrac{1}{\text R}\,v$

It is an equation of a line that goes through the origin, with slope $1/\text R$,

![Resistor i-v plot]({{ site.baseurl }}{% link i/resistor_i-v_plot.svg %}){: .centered }

### Resistor scaling

Look at the equation or the $i$-$v$ plot to test for the scaling property.  
If we double the voltage across the resistor, the current doubles.  
If we increase voltage by $4\times$, the current goes up by $4\times$.  
The resistor has the scaling property. The scale factor is the constant $1/\text R$.

### Resistor additivity

You can demonstrate additivity by coming up with two different inputs. Let's arbitrarily pick two voltages, $v_1 = 1\,\text V$ and $v_2 = 3\,\text V$. Then apply the sum of the inputs to the resistor. The resulting current is 

$i = f(v_1 + v_2) = \dfrac{1}{\text R}\,(3\,\text V + 1\,\text V) = \dfrac{1}{\text R} \,4\,\text V$

To test additivity, apply the two inputs separately and add the result. Check to see if you get the same answer.

$i = f(v_1) + f(v_2) = \dfrac{3\,\text V}{\text R} + \dfrac{1\,\text V}{\text R} = \dfrac{1}{\text R} \,4\,\text V$

Yes! The answers match. A resistor has scaling and additivity. A resistor is a *linear element*.

<details>
<summary>Are resistors linear in the real world?</summary>
<p>For real-world resistors there is, of course, a limit to voltage and current. At some point, the power, $i \, v$, becomes more than the resistor can handle and it may change resistance value or even burn up. So a real resistor is linear only if power is kept below some limit.</p>
<p>Some examples: a normal axial resistor (the kind that looks like a cylinder with wires coming out the ends) is usually rated at $1/4$ watt power dissipation. A typical 0603 surface-mount resistor is much smaller and is rated to dissipate $1/10$ watt.</p>
<p>An ideal resistor is a mathematical idea that works for any $i$ or $v$. So an ideal resistor is linear, period.</p>
</details>

## Capacitors and inductors

The capacitor and inductor element laws are

$i = \text C \,\dfrac{dv}{dt}$

and

$v = \text L\,\dfrac{di}{dt}$

At first glance it might look like these are not equations of lines. But they are. They are lines if we think of the independent variable being ${dv}/{dt}$ and ${di}/{dt}$ instead of just $v$ or $i$. 

$i = f \left (\dfrac{dv}{dt} \right) = \text C \,\dfrac{dv}{dt}$

and

$v = f \left (\dfrac{di}{dt} \right) = \text L\,\dfrac{di}{dt}$

The capacitor law can be graphed as a straight line with  $dv/dt$ as the horizontal axis and $i$ as the vertical axis. The slope of the capacitor line is $\text C$. 

![Capacitor is linear, i = C dv/dt]({{ site.baseurl }}{% link i/linearity_capacitor_slope.svg %}){: .centered }

Likewise, the inductor law can be graphed as a straight line with $di/dt$ as the horizontal axis and $v$ as the vertical axis. The slope of the inductor line is $\text L$. 

![Inductor is linear, v = L di/dt]({{ site.baseurl }}{% link i/linearity_inductor_slope.svg %}){: .centered }

This means ideal capacitors and inductors are also linear elements.

Now we have three linear circuit elements: $\text{R L C}$. With just these linear components we can create many interesting electronic functions.

Circuit made from linear elements can be solved exactly. In fact, there is a whole branch of mathematics devoted to solving linear functions, called Linear Algebra. This is the math used inside the well-known circuit simulator, SPICE.

Some examples of greatness: [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}) and [Kirchhoff's Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}) work because of linearity, as do the [Node voltage method]({{ site.baseurl }}{% link _articles/node-voltage.md %}) and the [Mesh current method]({{ site.baseurl }}{% link _articles/mesh-current.md %}). 

## Non-linear electronic components

It might help to talk a little bit something that is *not* a linear device, just for contrast. A [diode]({{ site.baseurl }}{% link _articles/diode-introduction.md %}) is a kind of non-linear semiconductor device. 

![Diode symbol]({% link i/diode_symbol1.svg %}){: .centered :} 

We will learn a lot more about diodes later on. For now, I just want to take a look at the blue $i$-$v$ curve of a diode. This is an example of what a non-linear electronic device looks like,
                   
![Diode i-v curve]({% link i/diode1.svg %}){: .centered :} 
 
This $i$-$v$ curve is the element law for a diode. It clearly does not look like a straight line, so this is definitely not a linear device. The non-linear behavior of a diode is typical of other semiconductor devices like transistors. 

{% capture summary %}optional: A few details about the diode i-v curve.{% endcapture %}  
{% capture details %}  
If you apply a small positive voltage to a diode, pretty much zero current flows if the voltage is less than about $0.6\,\text V$. As the voltage gets a little above $0.6\,\text V$ on the $+$ voltage axis, the current rises rapidly to a high value. The highest the voltage you see in normal operation is $0.75 \text{ to } 1.2\,\text V$. (If the voltage gets any higher than that, so much current is flowing the diode overheats.)

When you apply a negative voltage to a diode, the current is very close to zero.  When the voltage reaches a fairly high negative value, $\text V_\text{br}$, known as the *breakdown voltage*, the current gets very high in the reverse direction.  
{% endcapture %}{% include details.html %} 

In general, functions with non-linear behavior don't have linearity properties. We humans have not come up with a general-purpose method to exactly solve non-linear equations/circuits. Each new type of circuit requires mathematical techniques specific to the new circuit. This tends to drive everyone crazy. The usual approach to non-linear circuits is to bend over backwards to make it seem linear over at least some small range of operation. That's what is happening when you see terms like "piecewise-linear approximation" or "small-signal model."

{% capture summary %}Should I avoid non-linear circuits?{% endcapture %}  
{% capture details %}  
I've gone a little overboard here, perhaps giving the impression that non-linear elements are bad. They are great in their own way. Every semiconductor device is non-linear (diodes and transistors), and there are billions of them in every computer, mobile phone, and every other electronic gadget. Engineers have figured out how to use non-linear devices, and you will, too, as you continue your studies.  
{% endcapture %}{% include details.html %} 

## Summary
{:.no_toc}

The properties of a linear function are:

Homogeneity (scaling): $f(ax) = af(x)$  

Additivity: $f(x_1+x_2) = f(x_1) + f(x_2)$

Resistors, capacitors, and inductors are *linear* elements because they have the scaling and additivity properties.

    