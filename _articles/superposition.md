---
layout: article
title:  "Superposition"
author: Willy McAllister
comments: true
---

*Superposition* is a superpower to add to your toolkit of circuit analysis methods. Use it when your circuit has multiple inputs or power sources.

Before reading this article, I recommend you review the concept of [Linearity]({{ site.baseurl }}{% link _articles/linearity.md %}). Superposition works because of linearity.


----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The *principle of superposition* is another name for the additivity property of [Linearity]({{ site.baseurl }}{% link _articles/linearity.md %}):

$f(x_1 + x_2) = f(x_1) + f(x_2)$

To solve a circuit using superposition, the first step is to turn off or *suppress* all but one input.  

- To suppress a *voltage* source, replace it with a *short* circuit.
 
- To suppress a *current* source, replace it with an *open* circuit.

Next, you analyze two (or more) much simpler circuits. Repeat for all inputs.  
The final result is the sum of individual results.

----

## Describing a circuit as a function

The principle of superposition uses *functional notation*, so we talk a bit here about how circuits can be represented as functions. You used functional notation in algebra class when you wrote something like $f(x) = 2x + 3$. 

Start simply... How might we represent a lone resistor using functional notation? There's nothing remarkable going on here. We just talk about Ohm's Law using function terminology. 

![Resistor as a function](https://ka-perseus-images.s3.amazonaws.com/dc74d3730d8b6a208aee6890c420e91afb7eff8a.svg){: .centered }

Begin by identifying three things: the inputs, the outputs, and the thing performing the function.

Input: We decide (arbitrarily) that voltage $v_i$ will be the input of our resistor function. Assume input $v_i$ is generated by some voltage source we're not showing. The input voltage is applied to the two small circles (the circles indicate the *input port* to our function).

Output: We assign the output to be the interesting thing we want to know. For this function, we choose the output to be the current $i$. The output of our function will be the current, $i$, measured by some not-shown current meter. 

Function: The function itself comes from the resistor, described by Ohm's Law. 

Written as a function, our resistor is

$i = f(v_i) = \dfrac{1}{\text R}\,v_i$

With this notation, we are viewing the resistor as a function that takes in a voltage and outputs a current.

## A resistor is a *linear* function

Looking at our resistor function, we see it has the *scaling property*. The output, $i$, equals the input, $v_i$, scaled by a constant, $\text R$. That means the resistor is *linear*. The linearity property is what lets us use superposition to help solve a circuit.

Refresh me on the [scaling property and linearity]({{ site.baseurl }}{% link _articles/linearity.md %}).

## Example 0: Solve a simple circuit

(This is a "toy" example to give you a feel for how we apply superposition.) 

Let's use the same resistor function, but we change the input to two voltage sources: 

![Ciruit with two batteries in series](https://ka-perseus-images.s3.amazonaws.com/eaf82407737099438c04b9e8658d9c72198fc05b.svg){: .centered }

The input to our function is two batteries in series, so $v_i = \text{Vs1} + \text{Vs2}$.  

The function is $f(v_i) = \dfrac{1}{\text R}\,v_i$.  

The output of the function hasn't changed; it is still $i = f(v)$.

We now solve this circuit two ways: first by conventional analysis, and then using the principle of superposition.

### Conventional solution

To solve by conventional means we write the [KVL](http://spinningnumbers.org/a/kirchhofs-voltage-law.html) equation around the loop:

$\text{Vs1} + \text{Vs2} - i \,\text R = 0$

and solve for $i$:

$i = f(\text{Vs1}+\text{Vs2}) = {\dfrac{\text{Vs1} +\text{Vs2}}{\text R}}$ 

(Conventional solution)

### Solve using the principle of superposition

The principle of superposition applies if the function $f$ is linear.

$f(x_1 + x_2) = f(x_1) + f(x_2)$

This is the additivity property of linearity. It is also called the superposition property. The left side has two inputs *superimposed*, $(x_1+x_2)$. The right side of the equation says if you apply the inputs one at a time, $(x_1)$ followed by $(x_2)$, and add the individual results you get the same answer.

Now let's use the principle of superposition to solve the circuit.  

Since we know our circuit can be modeled as a linear function, we can say,

$i = f(\text{Vs1} + \text{Vs2})$  
is equivalent to  
$i = f(\text{Vs1}) + f(\text{Vs2})$

This suggests an intriguing possibility. It says we can compute the output current the conventional way, $i = f(\text{Vs1} + \text{Vs2})$, or, we could get the same answer applying single inputs, $f(\text{Vs1})$ and $f(\text{Vs2})$, and then add the results together. 

Let's try, and see what happens.

#### Suppress the inputs

To use superposition we need to apply one input at a time. How do you apply just one input? Easy! Just turn the other ones off. When we turn off an input we say it is *suppressed*. 

What does it mean to turn off (suppress) a voltage source? It means we set $\text V = 0$. This is the same thing as replacing the voltage source or battery by a short circuit.

![Replace voltage source with a short](https://ka-perseus-images.s3.amazonaws.com/54bc66846c6209299a7487b522fe15ea806cb470.svg){: .centered }

What does it mean to turn off a current source? It means we set $\text I = 0$. That's the same as replacing the current source with an open circuit. 

![Replace current source with an open](https://ka-perseus-images.s3.amazonaws.com/829dc509a0950795063226adc13318d5474d1bf5.svg){: .centered }

It may seem like doing this suppression could completely mess up how the circuit works, but it won't. Please be patient.

#### Solve two circuits

In the next two schematics, one of the voltage inputs has been turned off (*suppressed* ) by replacing it with a short circuit.

![Replace one voltage source with a short](https://ka-perseus-images.s3.amazonaws.com/44c69ff19df0189cb4d60f854f855d02e2db396d.svg){: .centered }

When we zero out (suppress) an input, we replace one of the inputs with $0$, allowing one input to shine through by itself.

$f(\text{Vs1} + 0) \rightarrow  f(\text{Vs1})$ and  
$f(\text{0 + Vs2}) \rightarrow  f(\text{Vs2})$

<details>
<summary>What if there are more than two inputs?</summary>
<p>If the function (circuit) has more than two inputs, you isolate a single input by suppressing <em>all</em> the others. If the function has three inputs, you suppress two at time, and you do that three times. If the function is,</p>

<p>$out = f(in_1, in_2, in_3)$</p>

<p>then you isolate $in_1$ by suppressing $in_2$ and $in_3$ and so on:</p>

<p>$out_1 = f(in_1, 0, 0)$</p>
$out_2 = f(0,in_2,0)$</p>
$out_3 = f(0,0,in_3)$</p>

<p>$out = out_1 + out_2 + out_3$</p>
</details>

Now we solve each circuit individually,

$i_1 = \text R\cdot\text{Vs1} \qquad$ and $\qquad i_2 = \text R\cdot\text{Vs2}$

where $i_1$ is the current caused by source $\text{Vs}1$, and $i_2$ is the current caused by source $\text{Vs}2$. 

#### Superimpose (add) the two solutions

The total current comes from *superimposing* (adding) the currents from each circuit.

$i = i_1 + i_2$

$i = \dfrac{\text{Vs1}}{\text R} + \dfrac{\text{Vs2}}{\text R}$

${i = \dfrac{\text{Vs1}+\text{Vs2}}{\text R}}$ 

(Superposition solution)

Check it out! Compare this superposition solution to the conventional solution we got above. They're the same!

What we did here is called the *linear superposition* of two circuits. 

Here's a key thing to appreciate. Notice how taking out one voltage source did not modify or mess up how the other voltage source was causing current to flow in the resistor. It's like those two circuits we created with suppression are living inside/with each other, without affecting the other one. Very cool to think about. 

In this toy example our function was so simple that superposition really didn't save much (if any) effort. In the following examples the circuits are more complicated, and the difference in effort becomes more apparent.

## Example 1

Consider the following circuit composed of two linear components (resistors) and two sources: a current source and a voltage source. The two sources are the inputs. We define two outputs to be the currents $i_1$ and $i_2$. In functional notation we write this as,

$i_1 = f_1(\text{Is},\text{Vs)}\,$ and $\,i_2 = f_2(\text{Is},\text{Vs)}$

![Example 1 circuit](https://ka-perseus-images.s3.amazonaws.com/15548ad524440df6a887158ab78b21ff0bed1e61.svg){: .centered }

### Solve using superposition

Let’s analyze this circuit using superposition.  

First, we suppress the current source and analyze the circuit with just the voltage source acting alone. To suppress the current source, we replace it with an open circuit.

![Suppress the current source](https://ka-perseus-images.s3.amazonaws.com/1876cb75c1fa06b0846f37e6253fe03c4ce605e0.svg){: .centered }

With just the voltage source, we solve for the two output currents,

$i_{1V} = 0 \qquad i_{2V} = \dfrac{\text{Vs}}{\text R2}$

Where $i_{1V}$ and $i_{2V}$ are the currents in $\text R1$ and $\text R2$ caused by the voltage source.

Next, we restore the current source and suppress the voltage source.

![suppress the voltage source](https://ka-perseus-images.s3.amazonaws.com/effc66654a6dee892eae8e7d71bd2de5a2aa9879.svg){: .centered }

With just the current source, we solve for the two output currents,

$i_{1I} = \text{Is} \qquad i_{2I} = 0$ 

Where $i_{1I}$ and $i_{2I}$ are the currents in $\text R1$ and $\text R2$ caused by the current source. 

<details>
<summary>zero current in R2?</summary>
<p>The ends of $\text R2$ are connected together. There is no voltage across $\text R2\,$ and therefore there is no current through it.</p>
</details>

We finish by adding the contributions from each source:

$i_1 = i_{1V} + i_{1I} = 0 + \text{Is}= \text{Is}$

$i_2 = i_{2V} + i_{2I} = \dfrac{\text{Vs}}{\text R2} + 0 = \dfrac{\text{Vs}}{\text R2} $

The full solution looks like this:

![Solution to Example 1](https://ka-perseus-images.s3.amazonaws.com/27a5680c43830c8c4a261d5466cc343cb5480641.svg){: .centered }

This could have been a tricky analysis because of the two sources. Superposition gave us two simpler circuits to deal with.

## Example 2

For the following linear circuit let’s calculate the output voltage $\goldD v$. 

![Example 2 circuit](https://ka-perseus-images.s3.amazonaws.com/9d8228e8d6b8f70952fb738c931f1265fc65c737.svg){: .centered }

### Conventional solution

We will do it the conventional way first. We write [Kirchhoff's Current Law](http://spinningnumbers.org/a/kirchhofs-current-law.html) at output node $\goldD v$:

![Example 2 conventional solution](https://ka-perseus-images.s3.amazonaws.com/5c35079fc61e41706ed0bb509012d00002abe668.svg){: .centered }

$\quad +i_{\text R1} \qquad - i_{\text R2} \qquad +\text{Is} \quad = 0$ 

$+\dfrac{\text{Vs}-v}{\text{R1}} \quad - \dfrac{v}{\text{R2}} \qquad + \text{Is} \quad = 0$

We can rearrange this to get an expression for $\goldD v$ by gathering like terms together on the right side:

$v = \dfrac{\text{R2}}{\text R1 + \text R2}\,\text{Vs} + \dfrac{\text R1\,\text R2}{\text R1+\text R2}\,\text{Is} $

(Conventional solution)

### Solution using superposition

Now we will solve the same problem using the principle of superposition. As before, we suppress the input sources and solve new simpler circuits.

**How would you suppress the current source?**  
Replace the current source with a \_\_\_. (short circuit or open circuit?)

<details>
    <summary>show answer</summary>
    <p>Replace the current source with an open circuit.</p>
</details>

The circuit collapses down to two resistors in [series](http://spinningnumbers.org/a/series-resistors.html) (a [voltage divider](http://spinningnumbers.org/v/voltage-divider.html)). 

![Example 2 with current source suppressed](https://ka-perseus-images.s3.amazonaws.com/7c16652515a22815282c1c53e022a4d39b7edee8.svg){: .centered }

Voltage ${v_{Vs}}$ is the contribution from voltage source $\text{Vs}$.
With just the voltage source, the output voltage is:

$v_{Vs}= \text{Vs} \,\dfrac{\text R2}{\text R1+ \text R2}$

 Now we restore the current source and suppress the voltage source. 

**How would you suppress the voltage source?**  
Replace the voltage source with a \_\_\_. (short circuit or open circuit?)

<details>
    <summary>show answer</summary>
    <p>Replace the voltage source with a short circuit.</p>
</details>

The circuit collapses down to two resistors in [parallel](http://spinningnumbers.org/a/parallel-resistors.html). 

![Example 2 with voltge source suppressed](https://ka-perseus-images.s3.amazonaws.com/532320f532ecd3ae37c894b33a92cfd52f3fbd0b.svg){: .centered }

Voltage ${v_{Is}}$ is the contribution to the output from current source $\text{Is}$.

$v_{Is} = \text{Is}\,\dfrac{\text R1\cdot\text R2}{\text R1 + \text R2}$

We complete the superposition analysis by adding the two voltage contributions. As predicted, we get the same result as the conventional solution shown above. 

$v = v_{Vs} + v_{Is}$

$v = \dfrac{\text{R2}}{\text R1 + \text R2}\,\text{Vs} + \dfrac{\text R1\cdot\text R2}{\text R1+\text R2}\,\text{Is}$ 

(Superposition solution)

There is no approximation involved. The solutions are exactly the same. The key thing to notice is that the two simpler circuits took significantly less work to analyze.

## Closing thoughts 

Linearity and superposition are useful tools. If you have a circuit made from linear elements, you get to use the principle of superposition. This means the original complicated circuit is really made of simpler circuits that happen to be sitting on top of each other. It seems like magic, but this property means that overlapping inputs and superimposed circuits don't affect each other or intertwine at all. Every simple circuit is blissfully unaware of the others until you do the final addition. 

This is a marvelous property of *linear* circuits, and it is one of the reasons we love linearity so much. Circuits that are not linear (*non-linear* circuits) don't have this property, and superposition cannot be applied. (But don't worry, we love non-linear circuits, too, just in a different way.)

## Summary
{:.no_toc}

If a circuit is made of linear elements, you can use superposition to simplify the analysis. This is especially useful for circuits with several sources. 

To analyze a linear circuit with multiple inputs, suppress all but one input or source and analyze the resulting simpler circuit. Repeat for all inputs and sources. Then add the results to find the total response for the full circuit. 

To suppress a voltage source, replace it with a short circuit:

![Suppress a voltage source](https://ka-perseus-images.s3.amazonaws.com/54bc66846c6209299a7487b522fe15ea806cb470.svg){: .centered }

To suppress a current source, replace it with an open circuit:  

![Suppress a current source](https://ka-perseus-images.s3.amazonaws.com/829dc509a0950795063226adc13318d5474d1bf5.svg){: .centered }

----

<details>
<summary>Attribution</summary>
<p>This article expands on <a href="http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-071j-introduction-to-electronics-signals-and-measurement-spring-2006/lecture-notes/linear_crct_ana.pdf">lecture notes</a> from MIT's 6.071 OpenCourseWare class: Introduction to Electronics, Signals, and Measurement, taught by Prof. David Cory, Prof. Ian Hutchinson (Lecturer), and Prof. Manos Chaniotakis in Spring 2006. Licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.</p>
</details>