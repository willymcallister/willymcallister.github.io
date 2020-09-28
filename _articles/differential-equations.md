---
layout: article
title:  "Differential equations"
author: Willy McAllister
comments: true
---

Sal shows why the superposition works: If you have taken a differential equation class, what we are doing is called the [method of undetermined coefficients](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations#undetermined-coefficients).

The homogeneous differential equation modeling the $\text{RC}$ natural response circuit is,

$\dfrac{dv}{dt} + \dfrac{1}{\text{RC}} \, v = 0$ 

If you have specific values for $\text R$ and $\text C$, the general solution contains a single to-be-determined constant, $K$. 

$v(t) = Ke^{-t/\text{RC}}$

(You get a single $K$ for all first-order equations.)

Let's take a look at what the general solution represents. The general solution is an infinite family of $v(t)$ functions that all make the differential equation true for $t > 0$. Here are a few of them,

{% include d3/rc_natural_response_general.html %}
General solution to the RC natural response, $v(t) = K e^{-t/\text{RC}}$. A family of functions that make the differential equation true. $K$ is the unknown coefficient that will be determined by the initial conditions.
{: .caption :}

To narrow down the value of K we need an extra bit of information. We have to discover some point in time where we know the value of $v$. A super convenient time to pick is when the switch is flipped. This is referred to as an *initial condition* or *boundary value*. K ends up being the initial voltage placed on the capacitor. 

Once a value for K is determined we go from a general solution to a *particular* solution, selected from amongst the zillion possible $v(t)$'s. The particular solution is the one-out-of-a-zillion functions of $v$ that has exactly $\text V_0$ as the starting voltage. It's the only one.

{% include d3/rc_natural_response_v.html %}

Look back at the graph of general solutions. It includes a solution for $\text V_0 = 0$. That particular solution plots as a straight line along the time axis. That is one of the trivial solutions we talked about earlier.

## Family of curves for RC

{% include d3/rc_natural_response_s.html %}

---

# Clarification/Bug report on Forced Response

KA RC Step part 3 video, **CalColson**

I posted this first as a tip, but think it will be seen more here... is this helpful?

I was initially confused by this lesson, because the instructor is purporting to solve the total response through a summation of the natural and forced responses. However, the terminology used here is a bit loose. Each response consists of two parts, a transient portion and a permanent portion.

For the forced response, the transient portion is the charging of the capacitor until the voltage across the capacitor is equal to Vs. The permanent portion of the forced response is the steady input voltage of Vs that is applied to the circuit.

For the natural response, the transient portion is the drop in voltage of the capacitor as it discharges to 0 volts. The permanent portion of the natural response is nullified, because its steady-state is 0.

Now, what the instructor refers to as the "natural response" portion of the total response is actually a sum of the two transient portions of both the natural and forced responses. What he refers to as the "forced response" portion of the total response is actually just the permanent portion of the forced response.

However, the instructor's solution will always work out correctly, because he is still adding up all the pieces, just not in the intuitive order described. Also, the transient portions of the responses have the same form of A*e^(-t/RC), so when we solve for that constant 'A', we should get the correct value for the total response solution, as long as we do this solving under the constraints of the total response, and not just those of the natural response (which would give us a value of A = V_0).

This link should help clarify some of the confusion on this lesson (read the top-rated answer by **Felipe_Ribas**): [Stackexchange link](https://electronics.stackexchange.com/questions/93061/difference-between-natural-response-and-forced-response)

The Stackexchange question answered by Felipe starts out with: [this](https://www.edaboard.com/threads/define-time-response-natural-response-force-response.57404/#post-257279)... copied here...

Forced and Natural Response

Time response of a system is the time evolution of the variables. In circuits, this would be the waveforms of voltage and current versus time.

Natural response is the system's response to initial conditions with all external forces set to zero. In circuits, this would be the response of the circuit with initial conditions (initial currents on inductors and initial voltage on capacitors for example) with all the independent voltages set to zero volts (short circuit) and current sources set to zero amps (open circuit). The natural response of the circuit will be dictated by the time constants of the circuit and in general roots of the characteristics equation (poles).

**Forced response is the system's response to an external stimulus with zero initial conditions.** In circuits, this would just be the response of the circuit to external voltage and current source forcing function.

Using superposition, the total response of a circuit is the sum of the natural response (response due to initial conditions) and forced response (response due to external forces).

You can also think about this in terms of differential equations. Consider the following first order differential equation for voltage v(t),

dv(t)/dt + v(t)  =  f(t)

dv(t)/dt + v(t) = f(t),  v(0) = 10V

The natural response is solving v(t) using the initial condition with, f(t) = 0

The forced response is solving for v(t) using f(t) and zero initial condition.


---

## Homogeneous plus any Particular makes Total

[Steward Calculus Non-homogeneous Linear Equations by Undetermined Coefficients](https://www.stewartcalculus.com/data/CALCULUS%20Concepts%20and%20Contexts/upfiles/3c3-NonhomgenLinEqns_Stu.pdf)

[Khan Academy Undetermined Coefficients](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/undetermined-coefficients/v/undetermined-coefficients-1)

Undetermined Coefficients works for a fairly small class of forcing inputs.

---

The natural response eventually dies out. The transient portion of the forced response also dies out. In the end you are left with only the steady-state part of the forced response.

Apply the initial conditions to the complete solution to obtain the
constants. (The initial conditions are imposed on the complete solution, not just the homogeneous part.) ... this is not how Felipe Ribas describes it. He worked out a K for just the natural response and then "wiggles" in a correction term (another exponential) as part of the forced response... 

https://electronics.stackexchange.com/questions/93061/difference-between-natural-response-and-forced-response

https://www.edaboard.com/threads/define-time-response-natural-response-force-response.57404/#post-257279

Quoting Ribas:

There are ways you can analyze a system like this. The two most common ways are,

1. Complete solution = homogeneous solution + particular solution

2. Complete response = Natural response + forced response  ---or---  
Complete response = zero input +  zero state

The particular solution can be viewed as the permanent state of your system after/with that input. (WMc: Why? Because of the theory we used. If we have one particular solution along with the homogeneous solution we can generate any other particular solution by scaling the $K$ in the homogeneous solution).

And note that the Zero-State response (Forced response) also may consist of a "natural" portion and a "particular" portion. That is because even with no initial conditions, if you give an input to the system, it will have a transient response + permanent state response.

Works out general natural response. The constant K is undefined but any value of K will satisfy the differential equation (plot this).  Find K based on i.c. with input suppressed. Ribas finds K for the natural response.

Now find the particular solution to the equation which will represent the permanent state due to the power supply presence (input):

We assume now that 𝑖(𝑡)=𝑐 where 𝑐 is a constant value which represents the system output in the permanent state since the input is also a constant. For each system, the output format depends on the input format: if the input is a sinusoidal signal, the output also will be.

end quote



---

You seem to think the inhomogeneous equation has a unique particular solution. But this is not true. When you solve an inhomogeneous equation, you find a particular solution of the infinitely many that are available. The other solutions to the equation differ from the one you find by a homogeneous solution. From https://math.stackexchange.com/questions/2685424/why-do-we-get-particular-solution-when-solving-non-homogeneous-differential-equa

---

The general *homogeneous* solution to the step response (the one with with $K_n$) describes all possible ways the system can sail toward 0. $K_n$ represents the starting voltage. Given a specific $K_n$ you get one particular solution selected from the infinite number of possible solutions. 

With a forcing input (non-homogeneous equation) the system sails not toward 0 but toward a version of the forcing input. The particular solution we choose to call the forced response is one of an infinite number of particular solutions. We pick the forced response to be the particular response that matches what you are sailing toward (steady-state). The general solution to the *non-homogeneous* equation (the one with variable $K_n$) tells you all possible ways the system can sail toward the forcing function. 

I like this:

>The sum of two particular solutions to the homogeneous equation is also a particular solution. 

>A linear differential equation can be expressed as 𝐷𝑓=𝑔, where 𝐷 is some linear operator on functions built from differentiation, and 𝑔 is an arbitrary function. A particular solution is a function 𝑓 that satisfies that equation. But note that if 𝑓1 and 𝑓2 are two particular solutions, then 𝐷(𝑓1−𝑓2)=𝐷𝑓1−𝐷𝑓2=𝑔−𝑔=0. That is, the difference between any two particular solutions is a solution of the homogeneous equation 𝐷𝑓=0. 

>It is usually much easier to solve the homogeneous equation than the original equation. So if you want to find all particular solutions to the original equation, it suffices to find one solution to it, and all solutions to the homogeneous equation. Then sums of the single particular solution and each of the homogeneous solutions gives all the particular solutions.

From: https://math.stackexchange.com/questions/1513554/what-is-a-particular-and-a-homogenous-solution-of-a-differential-equation  Paul Sinclair

---

## Solve a driven circuit

We find the step function using a non-obvious theory of differential equations, stated here without proof, 

>The total solution to a non-homogeneous differential equation can be found by the superposition (addition) of the circuit's natural response with **any** particular response (found without regard for the initial conditions), followed by applying the initial conditions to resolve any unknown constants.

This is a pretty bold theory to state without proof. It is central to finding the step response. For the moment please take it on faith. [Here]({% link _articles/differential-equations.md %}) is my attempt to explain. If you have taken a differential equation class, what we are doing is called the [method of undetermined coefficients](https://www.khanacademy.org/math/differential-equations/second-order-differential-equations#undetermined-coefficients). 

----

## This is good

A linear differential equation can be written using this compact notation, 

$\bold{D}(f) = g$ 

where $\bold{D}$ represents a *linear operator*. $\bold{D}$ accepts a function $f$ and inserts it into a differential equation. On the right side, $g$ is some other arbitrary function. (In circuit applications, $g$ is the forcing function.)

If $\bold{D}$ represents a first-order linear differential equation it will have the form,

$\bold{D}(f) \quad$ means $\quad\dfrac{df}{dt} + kf = g$

{% capture details %}
The differential equation that models the $\text{RC}$ step response is $\dfrac{dv}{dt} + \dfrac{v}{\text{RC}} = \text V_\text S$ 

In $\bold{D}$ notation we write,

$\bold{D}(v) = g$ 

$\bold{D}(v)$ means $\dfrac{dv}{dt} + \dfrac{v}{\text{RC}}\quad$ and the forcing input is $g = \text V_\text S$.
{% endcapture %}
{% capture summary %}example{% endcapture %}{% include details.html %}

If $\bold{D}(f) = g$ is true that means function $f$ satisfies the non-homogeneous equation. That makes $f$ a *particular solution* to the equation. 

Clever idea: Suppose we happen to know two different particular solutions, $f_1$ and $f_2$. What happens if we subtract one from the other and make that the input into $\bold{D}$?

$\bold{D}(f_1 - f_2) = \dfrac{d}{dt}(f_1 - f_2) + k(f_1 - f_2) = g$

Let's expand that. We know inside $\bold{D}$ all the terms are either the input function or the first derivative of the input function. That means,

> We do this with just a first derivative but it works for second-order derivatives and higher.

$\bold{D}(f_1 - f_2)$ consists of terms $\dfrac{d}{dt}(f_1 - f_2)$ and ($f_1 - f_2)$.

That derivative term with $(f_1 - f_2)$ as an argument can be broken into two separate derivative terms. (The derivative of a difference is the difference of their derivatives), 

$\dfrac{d}{dt}(f_1 - f_2) = \dfrac{d}{dt}f_1 - \dfrac{d}{dt}f_2$

Let's write out the whole $\bold{D}(f_1 - f_2)$ and rearrange terms,

$\bold{D}(f_1 - f_2) = \dfrac{d(f_1 - f_2)}{dt} + k(f_1 - f_2)$

$\bold{D}(f_1 - f_2) = \dfrac{f_1}{dt} - \dfrac{f_2}{dt} + kf_1 - kf_2$

$\bold{D}(f_1 - f_2) = \left (\dfrac{f_1}{dt} + kf_1\right ) - \left (\dfrac{f_2}{dt} + kf_2 \right )$

$\bold{D}(f_1 - f_2) = \bold{D}(f_1) - \bold{D}(f_2)$

$\bold{D}(f_1)$ is equal to $g$, and so is $\bold{D}(f_2)$,

$\bold{D}(f_1 - f_2) = g - g$

$\bold{D}(f_1 - f_2) = 0$ 

Hey! What kind of differential equation is this?

This reveals something unexpected. The difference between two particular solutions is a solution to the homogeneous equation $\bold{D}(f_1 - f_2) = 0$!

START HERE

What does this look like for the step response? After going through the step response derivation we know a few particular solutions. One of them 

It is usually much easier to solve the homogeneous equation than the original equation. So if you want to find all particular solutions to the original equation, it suffices to find one solution to it, and all solutions to the homogeneous equation. Then sums of the single particular solution and each of the homogeneous solutions gives all the particular solutions.

If I know 𝑓1, then 𝑓2 must be among all the functions of form 𝑓1+ℎ for some homogeneous solution ℎ. 

A simple example: Consider 𝑓″(𝑥)=𝑥. One particular solution is 𝑓(𝑥)=𝑥36. The homogeneous equation is 𝑓″(𝑥)=0, whose general solution is 𝑓(𝑥)=𝐴𝑥+𝐵, for various values of 𝐴,𝐵. Thus the general solution for the equation 𝑓″(𝑥)=𝑥 is
𝑓(𝑥)=𝑥36+𝐴𝑥+𝐵

## References

Based on an answer by [Paul Sinclair](https://math.stackexchange.com/questions/1513554/what-is-a-particular-and-a-homogenous-solution-of-a-differential-equation?newreg=25d442b76968402a86d8f3768837bc0a) on Stack Exchange.

---

$\boxed{v_{tot} = (\text V_0 - \text V_\text S)\,e^{-t/\text{RC}} + \text V_\text S}$
{: .colorbox :}

Delimiters

$a + b = C$

$$a + C = d$$

\\(c + d = F\\)

\\[f - g = 0\\]

\\begin{equation}
a = g - \pi
\\end{equation}

<p>
$\begin{aligned}
   a&=b+c \\
   d+e&=f
\end{aligned}$
</p>