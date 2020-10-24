---
layout: article
title:  "Differential equation theorem"
author: Willy McAllister
comments: true
---

When we found the $\text{RC}$ step response the solution came out,

$v(t) = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S$

This is a particular solution to the non-homogeneous differential equation,

$\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

Our usual method of finding the solution to a differential equation is to guess at a voltage function and check to see if it works. Can you imagine yourself guessing this $v(t)$? I can't. And what if the forcing function was more complicated than a simple step, like $Kt$ or $K\sin \omega t$? Guessing an appropriate particular solution is pretty hard. Fortunately, a theorem of differential equations comes to our rescue. 


----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----


>**Theorem**: The total solution to a non-homogeneous differential equation can be found by adding the **general** solution of the circuit's homogeneous (natural) response to **any** particular response, followed by applying the initial conditions to resolve unknown constants.

This breaks the nasty guessing problem into two simpler problems: 
1. Find the general form of the homogeneous response---also known as the natural response.
2. Find any particular response---we go for a particular response that's easy to guess (because it looks just like the forcing function). 

Then add them together and apply the initial conditions to get the answer. 

This is a pretty bold theorem to state without proof, so here's the proof. 

## Linear operator notation

A linear differential equation can be written using this compact notation, 

$\bold{D}(f) = g$ 

$\bold{D}$ is a *linear operator*. It accepts a function $f$ and inserts it into an expression built from a function its derivatives. Function $g$ is some other arbitrary forcing function. 

If $\bold{D}$ represents a first-order linear differential equation then,

$\bold{D}(f) \quad$ means $\quad\dfrac{df}{dt} + kf$

Example: The $\text{RC}$ step response differential equation is $\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \dfrac{\text V_\text S}{\text{RC}}$

$\bold D(v)\quad$ means $\quad\dfrac{dv}{dt} + \dfrac{v}{\text{RC}}$

In the step response, $g$ is the forcing function, $\dfrac{\text V_\text S}{\text{RC}}$

If $\bold{D}(f) = g$ is true that means function $f$ satisfies the non-homogeneous equation. That means function $f$ is a *particular solution*. 

## Theorem

> This proof is done with a 1<sup>st</sup> derivative but it works for 2<sup>nd</sup> order derivatives and higher.

Suppose we happen to know two different particular solutions, $f_1$ and $f_2$. What happens if we subtract one from the other and make that the input to $\bold{D}$?

$\bold{D}(f_1 - f_2)\quad$ means the same thing as $\quad \dfrac{d}{dt}(f_1 - f_2) + k(f_1 - f_2) = g$

The derivative term can be broken into two separate terms.  
(The derivative of a difference is the difference of the derivatives), 

$\dfrac{d}{dt}(f_1 - f_2) = \dfrac{d}{dt}f_1 - \dfrac{d}{dt}f_2$

Write out $\bold{D}(f_1 - f_2)$ and organize terms by their subscript,

$\bold{D}(f_1 - f_2) = \dfrac{d}{dt}(f_1 - f_2) + k(f_1 - f_2)$

$\bold{D}(f_1 - f_2) = \dfrac{d}{dt}f_1 - \dfrac{d}{dt}f_2 + kf_1 - kf_2$

$\bold{D}(f_1 - f_2) = \left (\dfrac{d}{dt}f_1 + kf_1\right ) - \left (\dfrac{d}{dt}f_2 + kf_2 \right )$

Hey look! The two expressions in parentheses are $\bold D(f_1)$ and $\bold D(f_2)$,

$\bold{D}(f_1 - f_2) = \bold{D}(f_1) - \bold{D}(f_2)$

We said at the beginning that both $f_1$ and $f_2$ are particular solutions to the non-homogeneous equation, which means $\bold{D}(f_1)$ is equal to $g$, and so is $\bold{D}(f_2)$,

$\bold D (f_1 - f_2) = g - g$

$\bold D (f_1 - f_2) = 0$ 

Do you recognize what kind of differential equation is this? It is homogeneous. By definition, if we name the homogeneous solution $h$ then,

$\bold D(h) = 0$

That means $f_1 - f_2$ is a homogeneous solution,

$f_1 - f_2 = h$

This reveals something unexpected,  

>**Theorem**: The difference between two particular solutions to a non-homogeneous equation is a solution to the corresponding homogeneous equation.

Let's take this theorem and turn it into a weapon. We restate it to say,

$f_1 + h = f_2$ 

>**Theorem**: The sum of a particular solution with the homogeneous solution is another particular solution.

Adding one particular solution you know to every possible homogeneous solution gives you every possible particular solution.

## Apply to the step response

This is how we found the [$\text{RC}$ step response]({% link _articles/rc-step-response-derivation.md %}). $h$ is the homogeneous solution, the general form of the [$\text{RC}$ natural response]({% link _articles/rc-natural-response-derivation.md %}). $f_1$ is the particular response we found called the forced response. It is probably the easiest particular response to find since we guess it resembles $g$ the forcing input. $f_2$ is the general form of the total step response (since it still includes $K_n$). We apply the initial condition to resolve $K_n$ and end up with the final answer.

## Reference

{% capture details %}
**Q: What is a particular and a homogneous [sic] solution of a differential equation?**   
--- asked by TicTacToe, Nov 4 2015 

When solving linear non-homogenous equations, we deal with two types of solutions:

particular  
homogeneous

Why do we have these two types of solutions for differential equations? What does each of them represent?

**A: Paul Sinclair:**  
A linear differential equation can be expressed as $\bold D f = g$, where $\bf D$ is some linear operator on functions built from differentiation, and $g$ is an arbitrary function. A particular solution is a function $f$ that satisfies that equation. But note that if $f_1$ and $f_2$ are two particular solutions, then $\bold D (f_1 - f_2) = \bold D f_1 - \bold D f_2 = g - g = 0$. That is, the difference between any two particular solutions is a solution of the homogenous equation $\bold D f = 0$.

It is usually much easier to solve the homogenous equation than the original equation. So if you want to find all particular solutions to the original equation, it suffices to find one solution to it, and all solutions to the homogenous equation. Then sums of the single particular solution and each of the homogenous solutions gives all the particular solutions.

A very simple example: Consider $f^{\prime\prime} = x$. One particular solution is $f(x) = x36$. The homogenous equation is $f^{\prime\prime}(x) = 0$, whose general solution is $f(x) = Ax + B$, for various values of $A, B$. Thus the general solution for the equation $f^{\prime\prime}(x) = x$ is
$f(x) = x36 + Ax + B$.

[Paul Sinclair](https://math.stackexchange.com/users/258282/paul-sinclair), *What is a particular and a homogeneous solution of a differential equation?*  
URL (version: 2015-11-05): https://math.stackexchange.com/q/1513716
{% endcapture %}
{% capture summary %}Paul Sinclair's Stack Exchange answer.{% endcapture %}{% include details.html %}

