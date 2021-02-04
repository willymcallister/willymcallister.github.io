---
layout: article
title:  Preparing to study electrcial engineering
author: Willy McAllister
comments: true
---

A learner asked, "What math and science prerequisites and skills might be considered the minimum for this electrical engineering course?"

Good question! Here is a summary of the math and science preparation that will help you have the best experience learning the electrical engineering topics taught here. The links take you to the relevant topics on Khan Academy.

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Math fundamentals

* [Equation of a line, slope, y-intercept](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations)
* [Quadratic formula](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations)
* [Exponents](https://www.khanacademy.org/math/algebra-basics/alg-basics-expressions-with-exponents)
* [Radians](https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:trig/x2ec2f6f830c9fb89:radians/v/introduction-to-radians)
* [Vectors, vector addition](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:vectors)
* [Solving simultaneous equations](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations)
* [Complex numbers](https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:complex)

## Trigonometry

* Definitions of sine, cosine, and tangent from the sides of a triangle.  

{% capture summary %}SOH CAH TOA{% endcapture %}  
{% capture details %} 
![SOHCAHTOA triangle]({% link i/sohcahtoa.svg%}){: .centered :}

Here's a way to remember the definitions of $\sin$, $\cos$, and $\tan$.

$\sin \theta = \dfrac{\text{opposite}}{\text{hypotenuse}}\qquad \textbf S\text{ine is } \textbf O\text{pposite over } \textbf H\text{ypotenuse}$

$\cos \theta = \dfrac{\text{adjacent}}{\text{hypotenuse}}\qquad \textbf C\text{osine is } \textbf A\text{djacent over } \textbf H\text{ypotenuse}$
  
$\tan \theta = \dfrac{\text{opposite}}{\text{adjacent}}\quad\qquad \textbf T\text{angent is } \textbf O\text{pposite over } \textbf A\text{djacent}$  
{% endcapture %}{% include details.html %}

* There's lots more at [trigonometry](https://www.khanacademy.org/math/trigonometry).

## A few beginning concepts from calculus

It really helps to get to know the meaning of *derivative* from calculus. You don't have to be an expert, but check out these links to get a basic idea of a what a derivative is,

* [Limits](https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new)
* [Derivatives](https://www.khanacademy.org/math/differential-calculus/dc-diff-intro)

{% capture summary %}Notation for derivatives{% endcapture %}  
{% capture details %} 
There are three popular ways to write derivatives.

**$d$ notation**  
The derivative notation developed by Gottfried Leibniz is $\textit d$ **notation**. If $y$ is some function of the variable $x$, meaning $y = f(x)$, the derivative of $y$ with respect to $x$ is,

$\dfrac{dy}{dx}$

When you say it out loud, say it like this, "$dy \, dx$", not "$dy$ over $dx$".

The style of Leibniz's notation gives us a hint that derivatives can be treated like fractions. This comes up when you study the [chain rule](https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new). You will also hear this called *differential* notation, where the individual terms $dy$ and $dx$ are called *differentials*.

Second-order derivatives are two derivatives in a row. They use a notation like exponents,

The second derivative $\dfrac{d}{dx} \left (\dfrac{dy}{dx}\right )$ is the same as $\dfrac{d^2 y}{dx^2}$

Leibnitz also invented the elongated "s" character $\displaystyle \int$ we use for the integral symbol.

**Prime notation**  
The **prime notation** was introduced by Joseph-Louis Lagrange. The function $f^\prime(x)$ stands for the first derivative of $f(x)$ with respect to the independent variable $x$. Say this as "$f$ prime of $x$."

To indicate second-order and higher derivatives you add prime symbols. For example, the second derivative of $f(x)$ with respect to $x$ is,

$f^{\prime\prime}(x)\qquad$ "$f$ double-prime of $x$"

**Dot notation**  
Isaac Newton contributed **dot notation** where the derivative of $x$ is written as $\dot{x}$. Say this as "$x$ dot." The independent variable is $t$ or something else, as understood from the context.
{% endcapture %}{% include details.html %} 

These calculus basics will get you all the way through DC circuits and Circuit analysis methods.

## Calculus

When you move beyond resistor circuits and include capacitors or inductors, these circuits change with time. We need to use the beautiful methods of calculus to get meaningful solutions. You don't need to have a complete calculus background to get started, but it becomes more and more helpful as you go along. You can think of calculus as a *corequisite* in parallel with electrical engineering. Many students learn calculus at the same time as introductory electrical engineering classes.

These are the calculus concepts we use in electrical engineering:

* [Derivative of simple functions (xⁿ where n is an integer](https://www.khanacademy.org/math/differential-calculus/taking-derivatives/derivative-intro/v/calculus-derivatives-2-5-new-hd-version) )
* [Derivative of eˣ, sine, and cosine](https://www.khanacademy.org/math/differential-calculus/taking-derivatives/chain-rule/v/derivatives-of-sin-x-cos-x-tan-x-e-x-and-ln-x)
* [Notation for integral](https://www.khanacademy.org/math/integral-calculus/indefinite-definite-integrals/indefinite_integrals/v/antiderivatives-and-indefinite-integrals)
* [Integral of xⁿ ](https://www.khanacademy.org/math/integral-calculus/indefinite-definite-integrals/indefinite_integrals/v/indefinite-integrals-of-x-raised-to-a-power)
* [Evaluating definite integrals](https://www.khanacademy.org/math/integral-calculus/indefinite-definite-integrals/riemann-sums/v/riemann-sums-and-integrals)
* [Line integral](https://www.khanacademy.org/math/multivariable-calculus/line-integrals-topic/line_integrals/v/introduction-to-the-line-integral)

Differential equations: When we need to solve first-order differential equations, we will walk through the solution step by step (example: the RC natural response), so you don't need to have already studied differential equations. The most advanced problems involve second-order differential equations, and again, we go through the solution step by step. 

Electrostatics: The electrostatics section is most advanced topics covered here in electrical engineering. This sequence develops precise definitions of electric field and voltage. My goal is to have you appreciate (but not recreate) how calculus helps us define the meaning of voltage and the electric fields near a point, line, and plane of charge.

## Physics

High school physics: 
* [Newton's Laws of Motion](https://www.khanacademy.org/science/physics/forces-newtons-laws)
* [Force](https://www.khanacademy.org/physics/forces-newtons-laws/newtons-laws-of-motion/v/newton-s-second-law-of-motion)
* [Energy, and work](https://www.khanacademy.org/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy)
* Solve force problems using vectors: [here](https://www.khanacademy.org/physics/two-dimensional-motion/two-dimensional-projectile-mot/v/visualizing-vectors-in-2-dimensions), and [here](https://www.khanacademy.org/physics/forces-newtons-laws/inclined-planes-friction/a/what-are-inclines).
* [Scientific notation](https://www.khanacademy.org/math/pre-algebra/exponents-radicals/scientific-notation/v/scientific-notation-old)
* [Significant figures](https://www.khanacademy.org/math/arithmetic-home/arith-review-decimals/arithmetic-significant-figures-tutorial/v/significant-figures)
 
## Chemistry

High school chemistry: 
* [Elements and atoms](https://www.khanacademy.org/science/biology/chemistry--of-life/elements-and-atoms/v/elements-and-atoms)
* [Electron and nucleus](https://www.khanacademy.org/science/chemistry/electronic-structure-of-atoms/history-of-atomic-structure/a/discovery-of-the-electron-and-nucleus)
* [Mole](https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties/introduction-to-the-atom/v/the-mole-and-avogadro-s-number)

## Classics

Engineering equations make more sense if you recognize the Greek alphabet.
 
{% capture summary %}Greek alphabet{% endcapture %}  
{% capture details %}  
![Greek alphabet]({% link /i/greek_alphabet.svg %}){: height="696px" :}
{% endcapture %}{% include details.html %}  

## Summary
{:.no_toc}

Welcome to the study of electrical engineering. Good luck!

