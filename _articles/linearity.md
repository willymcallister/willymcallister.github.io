---
layout: article
title:  "Linearity"
author: Willy McAllister
comments: true
---

The mathematical concept of *linearity* has a profound impact on electronic design. The idea itself is quite simple, but the implications have great meaning for our field. We talk about the mathematical meaning of *linear*. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Preparation

### Function notation

Understanding linearity is an exercise in using function notation $f(x)$.

![Function notation]({% link i/linearity_fofx.svg %}){: .centered :}

Whatever the input is, it is stuffed into the argument of the function. The output is $f($input$)$.

If you feel rusty on function notation you can review [here](https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-functions-and-function-notation/v/what-is-a-function).

### Variables

Three variables and a function are involved in studying linearity: $x, m, a,$ and $f(x)$.

$x$ represents the input signal. It can take on any value from moment to moment.  

$m$ is the slope in the line equation, $f(x) = mx + b$.  

$a$ is the scaling multiplier. We use it to test $f(x)$ for the scaling property.  

$f(x)$ is a function based on $x$ and other internal built-in constants like $m$.  

For linear functions, $m$ is constant (has the same for every value of $x$ for all time). In math lingo $m$ is a *time-invariant constant coefficient*. If $m$ depends on $x$ then $f(x)$ is a *non-linear* function. If $m$ changes with time it is a *time-variant coefficient* and the math becomes a royal pain. We don't cover that here.

## Linearity

Linearity defined in the mathematical sense: A function $f$ is linear if it has these properties,

Homogeneity (scaling): $f(ax) = af(x)$  

Additivity: $f(x_1+x_2) = f(x_1) + f(x_2)$ 

The homogeneity and additivity together are called the *principle of superposition*.

You probably already have a sense of what *scaling* means. Consider two related physical concepts, like speed and distance. Let's say you run for $10$ minutes. Your speed and the distance you travel are related. If you run twice as fast (double your speed), then you double the distance run in $10$ minutes. If you triple your speed, you triple your distance. Distance *scales* with speed. 

Likewise with Ohm's Law, $v = i\,\text R$. If $\text R$ is constant then voltage $v$ scales with current $i$.

{% capture summary %}Other meanings of linear{% endcapture %}  
{% capture details %}  
The word "linear" in everyday language describes something that is "line-ish," resembling a line. A row of trees along the street has a linear arrangement. A linear argument is one that goes straight to the point. In high school algebra, you might use the word linear to describe a straight line, $y = a\,x+b$.

This terms are *not* exactly the same as what we are talking about here. All linear functions can be graphed as lines, but not all lines are linear functions. It turns out the y-intercept $b$ has to equal $0$ for a line to meet the definition of linear. (We talk about this more down below.)  
{% endcapture %}{% include details.html %} 

{% capture summary %}Some functions are not linear{% endcapture %}  
{% capture details %}  
Two quantities might have a *non-linear* relationship. What does that look like? Let's say you change your run a little. This time you run a fixed distance instead of a fixed time. If you run twice as fast, the total time it takes to reach the finish line is cut in half. Speed doubled, time halved. Time does not scale with speed. In fact, they go in opposite directions. Therefore, time and speed do not have a linear relationship when the running problem is stated this way.

Sometimes you can dig a little deeper to find a linear relationship. In the case of running for a fixed time, there's a linear relationship is between speed and the reciprocal of time, $1/t$. Speed and $1/t$ scale up and down together in a linear relationship.  
{% endcapture %}{% include details.html %} 

## Scaling (homogeneity)

We can express the idea of scaling in mathematical notation, 

"Doubling the input doubles the output"  
- Doubling the input is expressed as $f(2x)$.  
- Doubling the output is expressed as $2f(x)$.

If $f(2x) = 2f(x)$ for any value of $x$ that means "doubling" has the scaling property.

In general the test for scaling is,

$f(ax) \stackrel{?}{=} af(x)$

where $a$ is some number called the *scale factor*. This is the test for the scaling property. The fancy mathematical name for the scaling property is *homogeneity*. 

When you check a function for the scaling property, see if the two sides of the equation are equal. If the test passes for all values of $x$ and all values of $a$, then $f(x)$ is a linear function.

The scaling property can be drawn like this,

![Scaling test]({% link i/linearity_scaling.svg %}){: .centered :}

If the two outputs are equal then function $f$ has the scaling property and it is a linear function.
{: .caption :}

#### Tripler
{:.no_toc}

As a specific example, let's invent a "tripler" and ask, 

**Is a tripler linear?** 

A tripler is described in functional notation like this, 

$f(x) = 3x$ 

We recognize this as the equation of a line, with slope $= 3$ and a y-intercept of $0$. To prove $f(x)$ meets the definition of linear we apply the scaling test. We do this first with plain old algebra, and again by graphing.

Pick an input value, say $x=4$, and perform the scaling test with a scale factor of $a = 2$. 

$f(x) = 3x$

$f(ax) \stackrel{?}{=} af(x)\qquad$ scaling test

$f(2x) \stackrel{?}{=} 2f(x)\qquad$ scaling test with $a = 2$

Right side: $\quad af(x) = 2f(4) = 2\,(3 \cdot 4) = \underline{24}$

Left side: $\quad f(ax) = f(2 \cdot 4) = 3 \cdot 8 = \underline{24}$

Both sides produce the same result, $24$, so the scaling test passes. 

#### Graphical interpretation
{:.no_toc}

Here's $f(x) = 3x$ plotted as the blue line,

![f(x) = 3x]({% link i/linearity_3x_slope.svg %}){: .centered :}

$f(x)$ looks pretty "line-ish," but does it pass the scaling test? We demonstrate the scaling test graphically by plotting some points. We start by plotting an arbitrary first point, $[x, f(x)]$. Then we scale $x$ by $a$ and generate two new points, $[ax, f(ax)]$ and $[ax, af(x)]$. If the new points land on the same spot, the scaling test passes. We use $x=4$ and $a=2$ again.

$[x, f(x)] = [4, 3\cdot4] = [4, 12]$, the $\blueD{\bullet}$ blue dot on the $f(x)$ line.

Apply a scale factor of $a=2$ to $x$ and generate the output two ways, 

$[ax, af(x)] = [2\cdot4, 2\,(3\cdot4)] = [8, 24]$ is the $\goldC{\bullet}$ orange dot. 

$[ax, f(ax)] = [2\cdot4, 3 \,(2\cdot4)] = [8, 24]$ is the same $\goldC{\bullet}$ orange dot. 

Both orange dots fall on the line. This is not a coincidence. This is what the scaling property looks like in action.

We did the scaling test with particular values of $a$ and $x$, but it should be clear from the math that the test passes for any value of $a$ and $x$. Any function that graphs as a line through the origin has the scaling property and is a linear function. 

#### Explore
{:.no_toc}

If you want, pick out some points along the negative $x$-axis and do the scaling test again to see if it holds on that side of the origin.

### What happens if f(x) is not a line?

If $f(x)$ is any other shape besides a line, like $f(x)=x^2$ or $1/x$ or $\sin x$, the function does not pass the scaling test. 

Let $y = f(x) = x^2/16$

$f(ax) \stackrel{?}{=} af(x)\qquad$ scaling test

$f(2x) \stackrel{?}{=} 2f(x)\qquad$ scaling test with scale factor $a = 2$

Right side: $\quad af(x) = 2f(4) = 2\,(4^2/16) = \underline{2}$

Left side: $\quad f(ax) = f(2 \cdot 4) = 8^2/16 = \underline{4}$

The results, $2$ and $4$, are not the same, so the scaling test fails. We can illustrate this on the graph of the green parabola shown here,

![f(x) = x^2 / 16]({% link i/linearity_x_squared.svg %}){: .centered :}

$[x, f(x)] = [4, 4^2/16] = [4, 1]$, the $\greenD{\bullet}$ green dot on the $f(x)$ parabola.

Apply a scale factor of $a=2$ and generate the output two ways, 

$[ax, af(x)] = [2\cdot4, 2\,(4^2/16)] = [8, 2]$ is the lower of the two $\goldC{\bullet}$ orange dots. 

$[ax, f(ax)] = [2\cdot4, (2\cdot4)^2/16] = [8, 4]$ is the upper $\goldC{\bullet}$ orange dot. 

The orange dots don't land in the same place. This is what a failed scaling test looks like.

 This non-linear function does not have the scaling property.

#### Explore
{:.no_toc}

Perform the scaling test on a line with a non-zero y-intercept. For example, do the scaling test on $f(x) = 3x + 1$. Is this function linear according to our definition?

## Additivity

When a function is linear we can derive an adding property. We showed above that linear functions have the form of a line with slope $m$ and no y-intercept,

$f(x) = mx$

Let's say we apply an input that happens to be the sum of two things, $(x_1 + x_2)$. The function equation becomes,

$f(x_1 + x_2) = m(x_1 + x_2)$ 

Multiply out the right side of the equation using the distributive property,

$f(x_1 + x_2) = mx_1 + mx_2$

Here's a nice trick: Notice $mx_1$ is the output of $f()$ if the input is just $x_1$, that is $f(x_1) = mx_1$. That means we can replace $mx_1$ with $f(x_1)$. Likewise, we can replace $mx_2$ with $f(x_2)$. We can rewrite the equation with both $mx$ terms replaced with function notation,

$f(x_1 + x_2) = f(x_1) + f(x_2)$

This is the adding property, or *additivity* in math lingo. It says, the function of a sum equals the sum of the function applied to each term. 

![Additivity property]({% link i/linearity_additivity1.svg %}){: .centered :}

The additivity property. Top: the sum of two signals applied to $f(x)$. Bottom: two signals applied individually to $f(x)$ and added together. The outputs are equal.
{: .caption :}

Additivity is the theoretical basis for circuit analysis. 

## Additivity example

Suppose we have a signal made up of two parts, $x_1 + x_2$. Just for fun, $x_1$ could be the voice of a singer and $x_2$ could be guitar music. A microphone picks up the singer's voice. The sound of the strings are sensed by the guitar "pick ups." Both signals connect to a *mixer* (the circle with the plus sign) where they are combined, $x_1 + x_2$. The output of the mixer goes to a *linear amplifier*. The music plays over a loudspeaker. 

![Singer and guitar system]({% link i/linearity_additivity2.svg %})

**Does the guitar change what the singer's voice sounds like?** 

Let's do an experiment to find out: $f(x)$ is the linear amplifier. We model the amplifier as $f(x) = mx$ where $m$ is the volume setting on the amp. Sound goes in, louder sound comes out. $m$ ranges between $1$ and $11$ on the cool amps. We want the singer and guitar sound good no matter how loud or soft each one is, at all volume settings. 

The input is (voice $+$ guitar), also known as $x_1 + x_2$.  
The output is the loud song, $y = f(x_1 + x_2)$.

To tell if the guitar changes the singer's voice we make three recordings. 

1. The singer belts out the song $(x_1)$ while the guitar player goes off in the corner and does his math homework. We record the singer's amplified voice and call it $f(x_1)$, 

![Just the singer]({% link i/linearity_additivity3.svg %})

{:start="2"}
2. The singer goes on break and the guitar player wails on his guitar, $x_2$. We record the guitar by itself and call it $f(x_2)$,

![Just the guitar]({% link i/linearity_additivity4.svg %})

{:start="3"}
3. The singer and guitar play together and record the amplified sound as $f(x_1 + x_2)$,

![Singer and guitar together]({% link i/linearity_additivity5.svg %})

The question is, does $f(x_1 + x_2)$ sound the same or different than $f(x_1) + f(x_2)$? 

{:start="4"}
4. To find out we play back the individual voice and guitar recordings and add them together, meaning we listen to $f(x_1) + f(x_2)$. 

![Playback singer and guitar]({% link i/linearity_additivity6.svg %})

As we listen to this recording can we tell it apart from $f(x_1 + x_2)$? We were told the amplifier is linear, so it has the additivity property. The additivity property tells us, 

$f(x_1 + x_2) = f(x_1) + f(x_2)$

The two individual recordings added together should sound exactly the same as if the signer and guitarist were playing at the same time. That means the guitar has no effect on the singer's voice coming through the system. Both signals pass through without regard for whatever else is playing.

{% capture summary %}Do non-linear functions have the additivity property?{% endcapture %}  
{% capture details %}  
Non-linear functions *do not* have the additivity property. 

If the amplifier was *non-linear* the singing voice *would* be modified by the guitar. Depending on the nature of the non-linearity the effect could be, for example, the singer's voice sounds louder when the guitar is loud. That's not something you want in a hit recording

$f(x_1 + x_2)\stackrel{?}{=} f(x_1) + f(x_2)\qquad$ additivity test

If $f(x)$ is not linear and we put $x_1+x_2$ into the input, the output does not come out as the sum of $f(x_1)+f(x_2)$. Instead, the output can be a complicated mash-up of the two inputs. Imagine we build a non-linear function that squares its input, a "squarer."

![f(x) is a squarer function]({% link i/linearity_squarer.svg %}){: .centered :}

$f(x) = x^2$

If $x = 3$, then $f(3) = 9$. If $x = 0.5$, then $f(0.5) = 0.25$.

Now imagine we have two separate inputs, $a = 2$ and $b = 3$. We add them together and put the sum into our "squarer". What comes out?

$f(2+3) = (2+3)^2 = 25$

If we put in the two inputs individually, what comes out?

$f(2) + f(3) = 2^2 + 3^2 = 4 + 9 = 13 \ne 25$

With these values the squarer does not pass the additivity test.

With symbols,

$f(a+b) = (a+b)^2 = a^2+2ab+b^2$

$f(a) + f(b) = a^2 + b^2$

The $f(a+b)$ output includes that middle term, $2ab$. The $2ab$ term is a mixture of the input signals. The extra $2ab$ term is why this squarer function does not have the additivity property. 

Let's do the numerical example again. See how the $2ab = 12$ term messes up the additivity property?

$f(2+3) = 2^2 + 2(2\cdot 3) + 3^2 = 4 + 12 + 9 = 25$
{% endcapture %}{% include details.html %} 

## Superposition

The scaling and additivity properties of linear functions together are called the *principle of superposition*. It is the basis of a [circuit analysis technique]({% link _articles/superposition.md %}) with the same name. 

Superposition is also put to brilliant use in the [Mesh current method]({% link _articles/mesh-current.md %}). It is used in many other engineering areas. Superposition might not seem like a big deal, but it is a huge deal for electronics systems, especially signal processing.

At it's heart, superposition tells us we can take a complex signal (the sum of many simple things) and break it up into its component pieces. We put the simple inputs through the function one by one and add up the outputs. It's a way to avoid the gnarly math of analyzing the original complex signal and still get the right answer. 

In the next article, [Linearity of electronic components]({% link _articles/linearity-RLC.md %}), we test to see if our favorite electronic components, $\text{R, L, and C}$ are linear functions.

## Summary
{:.no_toc}

A function is linear if it has these properties,

Homogeneity (scaling): $f(ax) = af(x)$  

Additivity: $f(x_1+x_2) = f(x_1) + f(x_2)$

These properties together are called the *principle of superposition*.

    