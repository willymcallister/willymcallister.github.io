---
layout: article
title:  "Linearity"
author: Willy McAllister
comments: true
---

The mathematical concept of *linearity* has a profound impact on electronic design. The idea itself is quite simple, but the implications have great meaning for our field. We talk about the mathematical meaning of *linear*. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

A function is linear in the mathematical sense if it has these properties,

Homogeneity (scaling): $f(ax) = af(x)$  

Additivity: $f(x_1+x_2) = f(x_1) + f(x_2)$ 

The additivity property is also referred to as *superposition*.

----

## Linear

When something is *linear* it has the property of *scaling*. You probably already know the meaning of scaling. Suppose you think about two related physical concepts, like speed and distance. Let's say you run around outside for $10$ minutes. How are speed and distance related? If you run twice as fast (double your speed), then you double the distance you run in $10$ minutes. If you triple your speed, you triple your distance. This is called a *linear* relationship because speed and distance *scale* together. 

Another linear relationship is the cost of something. If a thing costs $\\$1$, then ten of those things cost $\\$10$. The relationship between number of things and total cost is linear.

In the next article we will learn that some electronic devices also have linear relationships.

<details>
<summary>Other meanings of linear</summary>
<p>The word "linear" in everyday language describes something that is "line-ish," resembling a line. A row of trees along the street has a linear arrangement. A linear argument is one that goes straight to the point.</p>

<p>In high school mathematics, the word linear describes a straight line, $y = a\,x+b$. This use of the term linear is <em>not</em> what we are talking about here. It turns out $b$ has to equal $0$ for the line to meet the definition of linear. (We talk about this more down below.)</p>
</details>

<details>
<summary>Things that are not linear</summary>
<p>Two quantities might have a <em>non-linear</em> relationship. What does a non-linear relationship look like? Let's say you change your run a little. This time you run a fixed distance instead of a fixed time. If you run twice as fast, the total time it takes to get to the finish line is cut in half. Speed doubled, but time halved. They don't scale with each other. In fact, they go in opposite directions. So the relationship between speed and time is not linear when the running problem is stated this way. </p>
<p>Sometimes you can dig a little deeper to find a linear relationship. In the case of running for a fixed time, there's a linear relationship is between speed and the reciprocal of time, $1/t$. Speed and $1/t$ scale up and down together.</p>
</details>

## Scaling (homogeneity)

We can express the scaling property in mathematical notation.
"Doubling the input doubles the output" can be written as $f(2x) = 2f(x)$. Similarly, "tripling the input triples the output" can be written as $f(3x) = 3f(x)$. And in general, 

$f(ax) = af(x)$

This is the *scaling* property. 

Do you recognize it as the equation of a line? That's what it is. The line goes through the origin and has a slope of $a$. Slope and scale factor mean the same thing. The fancy mathematical word for the scaling property is *homogeneity*. 

Any function that looks like a line through the origin has the scaling property. Here's a specific example, 
Let $y = f(x) = 2x$. The scale factor is $a = 2$.

![y = f(x) = 2x]({{ site.baseurl }}{% link i/linearity_2x_slope.svg %}){: .centered :}

If $x=2$, then $y = f(2) = 2 \cdot 2 = 4$, (blue dot).

If we double $x$ from $2$ to $4$, then $y = f(4) = 2\cdot 4 = 8$, (orange dot).

So doubling $x$ $(2 \rightarrow 4)$ exactly doubles $y$ $(4 \rightarrow 8)$. This is the scaling property in action.

Because $f(x)$ is a straight line, the scale factor, $a = 2$ *does not depend on the value of $x$*. The scale factor is the same for any $x$.

If you want, pick out some points along the negative $x$-axis and verify the scaling property holds on that side of the origin.

#### What if f(x) is not a line?
{:.no_toc}

If $f(x)$ is any other shape besides a line, like $f(x)=x^2$ or $1/x$ or $2^x$, the scale factor *is not* the same for every $x$, it depends on the value of $x$. Let's show an example. Let $y = f(x) = x^2/16$, the green parabola shown here,

![y = f(x) = x^2 / 16]({{ site.baseurl }}{% link i/linearity_parabola.svg %}){: .centered :}

At $x=4$, the $y$ value is $y=4^2/16 = 1$. So the scale factor is $y/x = 1/4$. 

At $x=8$, the $y$ value is $y=8^2/16=4$. So the scale factor is $y/x = 4/8 = 1/2$. 

For this non-linear function, the scale factor isn't constant. It depends on where you are along the $x$-axis. This non-linear function does not have the scaling property.

## Adding (additivity)

When a relationship is linear, we can derive an adding property. 

Let's say we have an input that happens to be the sum of two things, $(x_1 + x_2)$. The scaling equation becomes,

$f(x_1 + x_2) = a(x_1 + x_2)$ 

Using the distributive property we can multiply out the right side of the equation,

$f(x_1 + x_2) = ax_1 + ax_2$

Here's a nice trick: Notice $ax_1$ is the output we get if we put just $x_1$ into the function, $f(x_1) = ax_1$. If we want, we could replace $ax_1$ with $f(x_1)$ in the previous equation. Likewise, we can replace $ax_2$ with $f(x_2)$. 

This means we can rewrite the equation this way, with both $ax$ outputs replaced with function notation,

$f(x_1 + x_2) = f(x_1) + f(x_2)$

This is an adding property, called *additivity* in math talk. We will use this additivity property in a clever way. 

## Superposition

Setup: Suppose we have a signal made up of two parts, $x_1 + x_2$. Just for fun, $x_1$ could be the voice of a singer and $x_2$ could be guitar music. A microphone hears the singer's voice and the guitar at the same time, $x_1 + x_2$. The signal from the microphone goes through a *linear* amplifier to make it louder, and the song plays over loudspeakers so everyone can hear. 

**Question: Will the sound of the guitar change what the singer's voice sounds like?** 

Let's find out with an experiment: In this experiment, $f(x)$ is the combination of microphone, linear amplifier, and speakers all together. Sound goes in, louder sound comes out. The input is (voice $+$ guitar), also known as $x_1 + x_2$. The output is the loud song, $y = f(x_1 + x_2)$.

To tell if the guitar makes the singer sound different, we make three recordings. 

1. First we ask the singer to belt out the song while the guitar player just sits there, $x_1$. The the output is, of course, the singer's amplified voice, $f(x_1)$, (top box), which we record. 
2. Second, the singer goes on a break and the guitar player wails on his guitar, $x_2$. We record the amplified guitar by itself, $f(x_2)$, (middle box).
3. Third, we have the singer and guitar play together at the same time and record the ampilfied sound of the full band, $f(x_1 + x_2)$, (bottom box)   

![Demonstration of additivity]({{ site.baseurl }}{% link i/linearity_additivity2.svg %}){: .centered :}

The question is, does $f(x_1 + x_2)$ sound the same or different than $f(x_1) + f(x_2)$? We ask our sound technician to play back the voice and guitar together and we listen to $f(x_1) + f(x_2)$. Then we listen to the full band recording, $f(x_1 + x_2)$. Can we tell them apart?

The answer is: It sounds the same **if** $f(x)$ is a *linear* function. That's what the additivity equation tells us. 

$f(x_1 + x_2) = f(x_1) + f(x_2)$

When the sound technician plays back the two individual recordings added together, it sounds exactly the same as if the signer and guitarist were playing at the same time.

The additivity property of linear functions is called [*superposition*]({{ site.baseurl }}{% link _articles/superposition.md %}). Individual parts of a complicated input can be *superimposed* on each other (added) after they come out of the function. This is the basis of a circuit analysis technique with the same name. 

Superposition is put to brilliant use in the [Mesh current method]({{ site.baseurl }}{% link _articles/mesh-current.md %}) and in many other engineering areas. This might not seem like a big deal, but it is a huge deal for electronics systems, especially signal processing.

At it's heart, superposition tells us we can take a complex signal (the sum of many things) and break it up into as many simple pieces as we want. We put the simple inputs through the function, and add up the outputs on the output side. We avoid the gnarly math that might be forced on us by the original complex signal, and we still get the right answer. 

<details>
<summary>Do non-linear functions have the additivity property?</summary>
<p>No. If $f(x)$ is not linear, and we put $x_1+x_2$ into the input, the output does not come out as the sum of $f(x_1)+f(x_2)$. Instead, the output can be a complicated mash-up of the two inputs.</p>

<p>Imagine we can build a non-linear function that squares its input, a "squarer."</p>

<img class="centered" src="https://ka-perseus-images.s3.amazonaws.com/0665980fd89073fabbe886565458e7c843f68c0c.svg" height="120px">

<p>$f(x) = x^2$.</p>
<p>If $x = 3$, then $f(3) = 9.$</p>>
<p>If $x = 0.5$, then $f(0.5) = 0.25.$</p>

<p>Now imagine we have two separate inputs, $a$ and $b$, that we add together and put into our "squarer". What comes out?</p>

<p>$f(a+b) = (a+b)^2$</p>

<p>$(a+b)^2 = a^2+2ab+b^2$</p>

<p>The $a^2$ and $b^2$ are the squarer function operating on the two inputs. But look at that middle term, $2ab$. It represents a mixture of the two input signals. To figure out the output, you have to know the moment-to-moment relationship between $a$ and $b$. The extra $2ab$ term means this squarer function does not have the additivity property.</p>
</details>

In the next article, [Linearity of electronic components]({{ site.baseurl }}{% link _articles/linearity-RLC.md %}), we test to see if our favorite electronic components, $\text{R, L, and C}$ are linear functions.

## Summary
{:.no_toc}

A function is linear if it has these properties,

Homogeneity (scaling): $f(ax) = af(x)$  

Additivity: $f(x_1+x_2) = f(x_1) + f(x_2)$

The additivity property gives rise to a new way to analyze circuits and systems called *superposition*.

    