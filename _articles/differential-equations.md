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

## Homogeneous plus any particular makes Total response

https://www.stewartcalculus.com/data/CALCULUS%20Concepts%20and%20Contexts/upfiles/3c3-NonhomgenLinEqns_Stu.pdf

https://www.khanacademy.org/math/differential-equations/second-order-differential-equations/undetermined-coefficients/v/undetermined-coefficients-1

Undetermined Coefficients works for a fairly small class of forcing inputs.

---

The natural response eventually dies out. The transient portion of the forced response also dies out. In the end you are left with only the steady-state part of the forced response.

Apply the initial conditions to the complete solution to obtain the
constants. (The initial conditions are imposed on the complete solution, not just the homogeneous part.) ... this is not how Philip Ribas describes it. He worked out a K for just the natural response. 

https://electronics.stackexchange.com/questions/93061/difference-between-natural-response-and-forced-response
There are ways that you can analyze a system like this. The two most common ways are:

1. Complete solution = homogeneous solution + particular solution

2. Complete response = Natural response (zero input) + forced response (zero state)

the particular solution can be viewed as the permanent state of your system after/with that input.

And note that the Zero State response (Forced response) also may consist of a "natural" portion and a "particular" portion. That is because even with no initial conditions, if you give an input to the system, it will have a transient response + permanent state response.

Work out natural response. The constant K is undefined at this point but any value of K will satisfy the differential equation (plot this).  Find K based on i.c. with input suppressed. 

Then find the particular solution to the equation which will represent the permanent state due to the power supply presence (input):

we assume now that 𝑖(𝑡)=𝑐 where 𝑐 is a constant value which represents the system output in the permanent state since the input is also a constant. For each system, the output format depends on the input format: if the input is a sinusoidal signal, the output also will be.

all first-order circuits respond to a sudden change in input with some sort of exponential decay, similar to the above. Therefore, we don’t solve differential equations every time we see a capacitor or an inductor, and we won’t ask you to solve any. Instead, we use the following shortcut: 

In any first-order circuit, if there is a sudden change at t = 0, the
transient response for a voltage is given by

$v(t) = v(\infty) + [v(0^+) = v(\infty)]\,e^{-t/\tau}$

where $\tau = R/C$ for an RC or $\tau = L/R$ for an LC.

A *differential equation* is an equation that involves a dependent variable and its derivatives with respect to one or more independent variables. It is generally hard to find the solution of differential equations. Because there are very few methods of solving nonlinear differential equations exactly, graphical and numerical methods are often used. (https://www.ck12.org/c/calculus/general-and-particular-solutions/lesson/Ordinary-Differential-Equations-ODEs-CALC/) A *general solution* to a linear ODE is a solution containing a number of arbitrary variables (equal to the order of the ODE) corresponding to the constants of integration. A *particular solution* is derived from the general solution by setting the constants of integration to values that satisfy the initial value conditions of the problem.

What is a 'particular solution'?  
A Particular Solution of a differential equation is a solution obtained from the General Solution by assigning specific values to the arbitrary constants. The conditions for calculating the values of the arbitrary constants can be provided to us in the form of an Initial-Value Problem, or Boundary Conditions, depending on the problem. (https://www.toppr.com/guides/maths/differential-equations/general-and-particular-solutions-of-a-differential-equation/#:~:text=A%20Particular%20Solution%20of%20a,values%20to%20the%20arbitrary%20constants.)

You may think the inhomogeneous equation has a unique particular solution. But this is not true. When you solve an inhomogeneous equation, you find a particular solution of the infinitely many that are available. The other solutions to the equation differ from the one you find by a homogeneous solution. https://math.stackexchange.com/questions/2685424/why-do-we-get-particular-solution-when-solving-non-homogeneous-differential-equa

The general homogeneous solution (with variables as coefficients) tells you all the ways the system can sail toward 0. You have a given R and C but you don't know the starting voltage, so it is the variable in the general solution. Given a starting voltage you come up with a particular solution selected from the infinite number of possible solutions. 

For a non-homogeneous equation the system sails not toward 0 but toward a version of g(t). The particular solution is one of an infinite number of possible solutions. It tells you what you are sailing to (steady-state). The general solution to the homogeneous equation (with variables) tells you all possible ways the system can sail toward the forcing function. You have a given R and C but you have not resolved the variable for starting voltage (starting internally stored energy). 

Not sure this is relevant: The sum of two particular solutions to the homogeneous equation is also a particular solution. 

A linear differential equation can be expressed as 𝐷𝑓=𝑔, where 𝐷 is some linear operator on functions built from differentiation, and 𝑔 is an arbitrary function. A particular solution is a function 𝑓 that satisfies that equation. But note that if 𝑓1 and 𝑓2 are two particular solutions, then 𝐷(𝑓1−𝑓2)=𝐷𝑓1−𝐷𝑓2=𝑔−𝑔=0. That is, the difference between any two particular solutions is a solution of the homogeneous equation 𝐷𝑓=0. 

It is usually much easier to solve the homogeneous equation than the original equation. So if you want to find all particular solutions to the original equation, it suffices to find one solution to it, and all solutions to the homogeneous equation. Then sums of the single particular solution and each of the homogeneous solutions gives all the particular solutions.https://math.stackexchange.com/questions/1513554/what-is-a-particular-and-a-homogenous-solution-of-a-differential-equation

At every moment in time the homogeneous equation is true. Add that to the steady-state result. At every moment the homogeneous terms add up to zero, so the steady-state result is "exposed" on the LHS and is equal to the forcing function.  
