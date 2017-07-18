---
layout: article
title:  "Linearity"
author: Willy McAllister
comments: true
---

The mathematical concept of *linearity* has a profound impact on electronic design. The idea itself is quite simple, but the implications have great meaning for our field. We  talk about the mathematical meaning of *linear*. Then we apply the idea to electronic circuits.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

A function is linear (in the mathematical sense) if it has these properties:

Homogeneity (scaling): $f(ax) = af(x)$  

Additivity: $f(x_1+x_2) = f(x_1) + f(x_2)$ 

Resistors, capacitors, and inductors are *linear* because they have both properties.

----

## Linear

The term *linearity* refers to the property of *scaling*. Suppose you think about two related physical properties. For example, think about the speed you can run and the distance you can run. How are they related? If you double your speed, you double the distance. If you triple your speed, you triple your distance. We call this a *linear* relationship. Another linear relationship is the cost of something. If a thing costs $\\$1$, then ten of those things will cost $\\$10$.

In electronics, an ideal resistor creates a linear relationship between voltage and current. If you double voltage, the current doubles, and vice versa. We say an ideal resistor is a linear element.

<details>
<summary>Other meanings of linear</summary>
<p>The word "linear" in everyday use describes something that is "line-ish", resembling a line. A row of trees along the street has a linear arrangement. A linear argument is one that goes straight to the point.</p>

<p>In high school mathematics, the word linear describes a straight line, $y = a\,x+b$. This use of the term linear is <em>not</em> what we are talking about here. (The article talks about this more down below.)</p>
</details>

<details>
<summary>Things that are not linear</summary>
<p>Two quantities might have a <em>non-linear</em> relationship. What does a non-linear relationship look like? Let's say you go out for a run. If you run twice as fast, the total time it takes to get to the finish is cut in half. So the relationship between speed and total time is not linear. Speed doubled, but time halved. (Instead, the linear relationship is between speed and $1/t$.)</p>

<p>Another example of a non-linear function that happens in nature is <a href="https://www.khanacademy.org/science/electrical-engineering/ee-electrostatics/ee-electric-force-and-electric-field/a/ee-electric-force">Coulomb's law of electric force</a>. Coulomb's Law is an <em>inverse square</em> law, a non-linear relationship.</p>
<p>$\vec F = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{q_0\, q_1}{r^2} \,\hat r$</p>
<p>Coulomb's Law says if you have two charges with opposite signs $(q_0, q_1)$, there will be a force of attraction between them. If you pull them twice as far apart $(r \rightarrow 2r)$, the force decreases by a factor of $2^2$, not $2$, so the scaling property does not hold for force versus distance, so we say the force-to-distance relationship in Coulomb's Law is non-linear. (However, if you make one of the charges twice as big, the force doubles, so the charge-to-force relationship in Coulomb's Law <em>is</em> linear.)</p>
</details>

## Scaling (homogeneity)

We want to express the scaling property in mathematical terms.
"Double the input gives double the output" can be written as $f(2x) = 2f(x)$. Similarly, tripling-begets-tripling can be written as $f(3x) = 3f(x)$. And in general, the scaling property is 

$f(ax) = af(x)$

The fancy mathematical word for this property is *homogeneity*. 

Any function that looks like a line through the origin has the scaling property.  
Let $y = f(x) = 2x$.

![y = f(x) = 2x]({{ site.baseurl }}{% link i/linearity_2x_slope.svg %}){: .centered }

If $x=2$, then $y=2\cdot 2 = 4$, (blue dot).

If we double $x$ from $2$ to $4$, then $y = 2\cdot 4 = 8$, (orange dot).

So doubling $x$ $(2 \rightarrow 4)$ exactly doubles $y$ $(4 \rightarrow 8)$. 

And this is important: because $f(x)$ is a straight line, the scale factor (the $2$ in $2x$) *does not* depend on the value of $x$. The scale factor is the same for any $x$.

If the function $f$ is any other shape, like $f(x)=x^2$ or $1/x$ or $e^x$, the scale factor *is not* the same for every $x$, it depends on the value of $x$.

For example, if $y = x^2/16$,

![y = f(x) = x^2 / 16]({{ site.baseurl }}{% link i/linearity_parabola.svg %}){: .centered }

At $x=4$, the $y$ value is $y=4^2/16 = 1$. So the scale factor going from $x$ to $y$ is $1/4$. 

At $x=8$, the $y$ value is $y=8^2/16=4$. So the scale factor is $1/2$. 

This example shows why a function that isn't a straight line has a scaling factor that isn't a constant. Instead, the scale factor depends on the input value, $x$. 

## Adding (additivity)

When a relationship is linear, we can derive an *additivity* property. 

Linear functions have the equation of a line, with a scale factor (slope) of $a$, like this: $f(x) = ax$

Let's say we change the input from just $x$ into the sum of two distinct inputs $(x_1+x_2)$. Then the equation of the line becomes,

$f(x_1+x_2) = a(x_1 + x_2)$ 

Using the distributive property we can rewrite the right side of the equation,

$f(x_1 + x_2) = ax_1 + ax_2$

Now we have two terms on the right side. Here's a nice trick:   
Notice that $ax_1$ is the same as $f(x_1)$ and $ax_2 = f(x_2)$. 

This lets us write an adding property (called *additivity* in math talk):

$f(x_1+x_2) = f(x_1) + f(x_2)$

We are going to use this additivity property in a clever way. 

Suppose we have two inputs, $x_1$ and $x_2$, and we apply them separately as inputs to a function, $f(x)$. The outputs are, of course, $f(x_1)$ and $f(x_2)$ (top two boxes). And suppose we add the inputs together, $x_1 + x_2$, and put that into $f(x)$. The output will be $f(x_1 + x_2)$ (bottom box). 

![some image](https://ka-perseus-images.s3.amazonaws.com/e49daea8da3ec0c9f3f4456074f0dfb8aeffb5e1.svg){: .centered }

## Superposition

Now the clever part: If $f(x)$ is a *linear* function, we have another way to derive the output when $x_1 + x_2$ is the input. The additivity property says the output can also be computed by adding together the two individual outputs, $f(x_1)+f(x_2)$.

This is a pretty simple derivation we just did, and it might not seem like a big deal. But it makes life a lot better. The additivity property of linear functions is called [superposition]({{ site.baseurl }}{% link _articles/superposition.md %}). It is the basis of a circuit analysis technique with the same name. Superposition is put to brilliant use in the [Mesh current method]({{ site.baseurl }}{% link _articles/mesh-current.md %}) and in many other engineering areas (especially signal processing). 

At it's heart, superposition tells us we can take a complex signal (the sum of many things) and break it up into as many simple pieces as we want. We put the simple inputs through the function, and add up the outputs on the other side. We avoid the gnarly math that might be forced on us by the original complex signal, and we still get the right answer. 

<details>
<summary>Can non-linear functions have the additivity property?</summary>
<p>No. If $f(x)$ is not linear, and we put $x_1+x_2$ into the input, the output does not come out as the sum of $f(x_1)+f(x_2)$. Instead, the output can be a complicated mash-up of the two inputs.</p>

<p>Imagine we can build a non-linear function that squares its input, a "squarer."</p>

<img class="centered" src="https://ka-perseus-images.s3.amazonaws.com/0665980fd89073fabbe886565458e7c843f68c0c.svg" height="120px">

<p>$f(x) = x^2\,$</p>
<p>If $x = 3$, then $f(3) = 9\,$.  <br>
If $x = 0.5$, then $f(0.5) = 0.25\,$.</p>

<p>Now imagine we have two separate inputs, $a$ and $b$, that we add together and put into our "squarer". What comes out?</p>

<p>$f(a+b) = (a+b)^2$</p>

<p>$(a+b)^2 = a^2+2ab+b^2$</p>

<p>The $a^2$ and $b^2$ are the squarer function operating on the two inputs. But look at that middle term, $2ab$. It represents a mixture of the two input signals. To figure out the output, you have to know the moment-to-moment relationship between $a$ and $b$. The extra $2ab$ term means this squarer function does not have the additivity property.</p>
</details>

## Linearity of electronic components

Let's see if our favorite circuit elements are linear. We start with the resistor. First, express the resistor as a function. A resistor is a function that takes voltage as an input, and creates a current as an output. (We could also have turn this around, saying current is the input and voltage is the output. The story plays out the same either way.)

We can tell if an ideal resistor is linear if it meets the rule for scaling. We can write Ohm's Law as a function:

$i = f(v) = \dfrac{1}{\text R}\,v$

### Resistor scaling

If we double the voltage across the resistor, the current doubles.  
If we increase voltage by $4\times$, the current goes up by $4\times$.  
The resistor has the scaling property. The scale factor is the constant $1/\text R$.

### Resistor additivity

To test for additivity, we apply the sum of two different inputs, $v_1 = 1\,\text V$ and $v_2 = V + 3\,\text V$ to the resistor. The resulting current is 

$i = f(v_1 + v_2) = \dfrac{1}{\text R}\,(3\,\text V + 1\,\text V) = \dfrac{1}{\text R} \,4\,\text V$

The test is to apply the two inputs separately and add the result. Do we get the same answer?

$i = f(v_1) + f(v_2) = \dfrac{3\,\text V}{\text R} + \dfrac{1\,\text V}{\text R} = \dfrac{1}{\text R} \,4\,\text V$

Yes! A resistor has scaling and additivity. A resistor is a *linear element*.

[For real-world resistors there is, of course, a limit to voltage and current. At some point, the power, $i \, v$, becomes more than the resistor can handle and it may change resistance value or even burn up. So a real resistor is linear only over a range of voltage and current. An ideal resistor is a mathematical idea that works for any $i$ or $v$. So an ideal resistor is linear, period.]

### Are capacitors and inductors linear?

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

## Why do we make a big deal about linearity?

**Answer: The math works great!**

Circuit made from linear elements can be solved exactly. In fact, there is a whole branch of mathematics devoted to solving linear functions, called Linear Algebra. 

Some examples of greatness: [Kirchhoff's Current Law]({{ site.baseurl }}{% link _articles/kirchhoffs-current-law.md %}) and [Kirchhoff's Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}) work because of linearity, as do the [Node voltage method]({{ site.baseurl }}{% link _articles/node-voltage.md %}) and the [Mesh current method]({{ site.baseurl }}{% link _articles/mesh-current.md %}). 

## Non-linear electronic components

It might help to talk a little bit something that is *not* a linear device, just for contrast. A [diode]({{ site.baseurl }}{% link _articles/diode-circuit-element.md %}) is a kind of non-linear semiconductor device. 

![Diode circuit symbol](https://ka-perseus-images.s3.amazonaws.com/1f8173073dbe9f75bb92c6d4185a9a05e565ba6e.svg){: height="100px"}{: .centered }

We will learn a lot more about diodes later on. For now, I just want to take a look at the blue $i$-$v$ curve of a diode. This is an example of what a non-linear electronic device looks like,

![Typical diode i-v curve](https://ka-perseus-images.s3.amazonaws.com/4bf9cc907f92bc4ef0dcdce3a213e34a4f6c27b2.svg){: height="300px"}{: .centered }
                    
This $i$-$v$ curve is the element law for a diode. It clearly does not look like a straight line, so this is definitely not a linear device. The non-linear behavior of a diode is typical of other semiconductor devices like transistors. 

<details>
<summary>optional: A few details about the diode i-v curve.</summary>
<p>If you apply a small positive voltage to a diode, pretty much zero current flows if the voltage is less than about $0.6\,\text V$. As the voltage gets a little above $0.6\,\text V$ on the $+$ voltage axis, the current rises rapidly to a high value. The highest the voltage you see in normal operation is $0.75 \text{ to } 1.2\,\text V$. (If the voltage gets any higher than that, so much current is flowing the diode overheats.)</p>

<p>When you apply a negative voltage to a diode, the current is very close to zero.  When the voltage reaches a fairly high negative value, $\text V_\text{br}$, known as the <em>breakdown voltage</em>, the current gets very high in the reverse direction. $\text V_\text{br}$ of $-50\,\text V$ is typical.</p>
</details>

In general, functions with non-linear behavior don't have linearity properties. We humans have not come up with a general-purpose method to exactly solve non-linear equations/circuits. Each new type of circuit requires mathematical techniques specific to the new circuit. This tends to drive everyone crazy. The usual approach to non-linear circuits is to bend over backwards to make it seem linear over at least some small range of operation. That's what is happening when you see terms like "piecewise-linear approximation" or "small-signal model."

<details>
<summary>Should I avoid non-linear circuits?</summary>
<p>I've gone a little overboard here, perhaps giving the impression that non-linear elements are bad. They are great in their own way. Every semiconductor device is non-linear (diodes and transistors) and they are used every day by the billions in computers and mobile phones and many other things. Engineers have figured out how to use non-linear devices, and you will, too, as you continue your studies.</p>
</details>

## Summary

A function is linear if it has these properties:

Homogeneity (scaling): $f(ax) = af(x)$  

Additivity: $f(x_1+x_2) = f(x_1) + f(x_2)$

Resistors, capacitors, and inductors are *linear* elements because they have the scaling and additivity properties.

    