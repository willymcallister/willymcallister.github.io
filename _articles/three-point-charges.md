---
layout: article
title:  "Three point charges"
author: Willy McAllister
comments: true
---

Use Coulomb's Law to find the force on a charge from two nearby charges. 

![Three point charges]({{ site.baseurl }}{% link i/three_point_charges0.svg %}){: .centered :}

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we are headed 
{:.no_toc}

When you have more than two point charges pushing and pulling on each other, use Coulomb's Law to find the force between pairs of charges. Then combine the forces with vector addition.

We use the Law of Cosines and the Law of Sines to solve force triangles.

----

## Coulomb's Law

[Coulomb's Law]({{ site.baseurl }}{% link _articles/electric-force.md %}) predicts the force between pairs of charges,

$\vec F = \dfrac{1}{4\pi\epsilon_0}\dfrac{q_0\,q_1}{r^2}\,\bold{\hat r_{01}}$

$q_0$ and $q_1$ are the two point charges involved.  
$r$ is the distance between the charges.

$\bold{\hat r_{01}}$ is a unit vector (length $1$) pointing from one charge to the other. We include this to make the right side of the equation a vector. $\bold{\hat r}$ is pronounced "r hat."

$\epsilon_0$ is a [constant]({{ site.baseurl }}{% link _articles/electric-force.md %}#epsilon_0-permittivity-of-free-space) equal to $8.85 \times 10^{-12}$ coulomb$^2/$newton-meter$^2$.

$K = \dfrac{1}{4\pi\epsilon_0} = 9\times 10^9$ newton-meter$^2/$coulomb$^2$

## Multiple charges

How do you find the force on one charge caused by several others?

If you have multiple point charges tugging on each other you might wonder if the forces somehow get tangled and warp each other. Nope, that is not what happens. It is simpler than that. The pair-wise forces are independent. Each pair-wise force obeys Coulomb's Law, and combines with the other forces by vector addition. If charges $1$ and $2$ are near charge $0$, there is no sense in which charge $3$ "saps" or "absorbs" the ability of charge $2$ to generate an electric force on charge $0$.

Suppose you have $N$ point charges surrounding one charge. You've picked $q_0$ to be your favorite. Find the force on $q_0$ by adding up the pair-wise force vectors from charges $q_1 \ldots q_N$ using vector addition. In algebraic notation we write this as,

$\displaystyle \vec F_0 = \sum_{n=1}^N \dfrac{1}{4\pi\epsilon_0}\dfrac{q_0\,q_n}{r_{0n}}\,\bold{\hat r_n}$

We will work through an example with three charges, but before diving in let's review a little triangle theory.

## Triangles

Solving the force with three point charges is basically an exercise in solving triangles. There will be two triangles involved,

* A physical triangle with three charges on the corners. 
* A different triangle of force vectors pushing or pulling on the selected charge.

Sometimes a test question is designed to give you a simple force triangle you can solve in your head, but usually the force triangle isn't that easy. We will cover a general method for solving any triangle based on the Law of Cosines and the Law of Sines.

Here is an arbitrary triangle with its sides and angles labeled,

![Arbitrary triangle]({{ site.baseurl }}{% link i/law_of_cosines_sines.svg %}){: .centered :}

The sides are $a$, $b$, and $c$. The angles are $\alpha$, $\beta$, and $\gamma$. Naming convention: The angles (Greek alphabet) are opposite their corresponding side (Latin alphabet). $\alpha$ is opposite $a$, etc.
{: .caption :}

### Law of Cosines

The [Law of Cosines](https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-law-of-cosines/v/law-of-cosines) has three forms. They all mean the same thing.

$c^2 = a^2 + b^2 - 2ab \cos \gamma$  
$b^2 = a^2 + c^2 - 2ac \cos \beta$  
$a^2 = b^2 + c^2 - 2bc \cos \alpha$

When you know two sides and the angle between them, the Law of Cosines gives you the third side. We use it to find the magnitude of the resultant force vector.

### Law of Sines

The [Law of Sines](https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-law-of-sines/v/law-of-sines) has one form,

$\dfrac{a}{\sin \alpha} = \dfrac{b}{\sin \beta} = \dfrac{c}{\sin \gamma}$

We use the Law of Sines to find the angle of the resultant force vector.

If you have an electrostatics test coming up consider memorizing these trig laws.

## Strategy

A three-charge problem usually unfolds like this,

* The charge triangle is given in the problem statement. You are asked to find the force on one of the charges. We'll call that one $q_0$.
* The force triangle appears when you apply Coulomb's Law two times to $q_0$. Find the two pair-wise force vectors using Coulomb's Law, giving you two sides of a force triangle. 
* The hard part is finding the magnitude and angle of the third side.

## Three point charges

**Given three charges at the corners of a $\mathbf{30\degree -- \,60\degree -- \,90\degree}$triangle, find the force on $q_0$.** 


![Three point charges]({{ site.baseurl }}{% link i/three_point_charges1.svg %}){: .centered :}

Let $q_0 = +1$, $q_1 = +2$, and $q_3 = -3$, all in units of coulombs $(\text C)$. The distance between $q_0$ and $q_1$ is $1\,\text m$. All three charges are static, meaning they don't move. Think of them as glued to the page or pinned down with a thumbtack.

### Predict

Before we do the math, use your intuition to predict the result. 
* Draw the charge triangle on a piece of paper. 
* Sketch your estimate of the two force vectors pushing/pulling on $q_0$. 
* Sketch a vector with your prediction of the total force on $q_0$.

### Charge triangle

The first thing to do is complete the details of the charge triangle with all the angles and sides. (This should be a familiar triangle from geometry class.)

![Charge triangle with sides labeled]({{ site.baseurl }}{% link i/three_point_charges2.svg %}){: .centered :}

>For Coulomb's Law problems we manage direction separate from magnitude. 

Next, sketch the individual force vectors. There are two force vectors to think about, {$q_1$ to $q_0$}, and {$q_2$ to $q_0$}. We can sketch them on the triangle,

![Charge triangle with force vector direction]({{ site.baseurl }}{% link i/three_point_charges3.svg %}){: .centered :}

Force vectors point along straight lines between charges. We don't know the length of the vectors, yet.
{: .caption :}

Apply Coulomb's Law to find the magnitude of each force, 

>Use the absolute value of the charges in the numerator of Coulomb's Law.

$\|\vec F\| = K \,\dfrac{q_0\, q_n}{r^2}$

$\blueD{\|\vec F_{10}\|} = K \,\dfrac{1 \cdot 2}{1^2} =  2K\qquad\quad$ (repels)

$\greenD{\|\vec F_{20}\|} = K \,\dfrac{1 \cdot 3}{2^2} = 0.75K\qquad$ (attracts)

We have the magnitude and direction of the pairwise forces, 

![Force triangle]({{ site.baseurl }}{% link i/three_point_charges4.svg %}){: .centered :}

### Force triangle 

The final step is to perform the vector sum of $\blueD{\vec F_{10}}$ and $\greenD{\vec F_{20}}$ to find the resultant force on $q_0$. 

If you are new to vector addition, check [here](https://www.khanacademy.org/math/precalculus/vectors-precalc/vector-addition-subtraction/v/adding-and-subtracting-vectors).

To set up the force triangle for vector addition, slide the green vector down so its tail touches the tip of the blue vector. We are looking for force $F_0$ shown in black, 

![Force triangle set up for vector addition]({{ site.baseurl }}{% link i/three_point_charges5.svg %}){: .centered :}

Force triangle. Translate $\greenD{\vec F_{20}}$ downward to the tip of $\blueD{\vec F_{10}}$ to set up the vector addition to find $F_0$.
{: .caption :}

We want to find the magnitude and angle of $\vec F_0$. This triangle is not a right triangle, so it's not so simple to find $\vec F_0$. This is where we use the Laws of Cosines and Sines.

Label the force triangle with the notation we used for the general triangle [up above](#triangles),

![Force triangle with labels]({{ site.baseurl }}{% link i/three_point_charges6.svg %}){: .centered :}

We know two sides and the angle between them, $b$, $c$, and $\alpha$. We want to find the third side, $a$. This is a job for the [Law of Cosines](#law-of-cosines). Select the variation that solves for $a$,

$a^2 = b^2 + c^2 - 2bc \cos \alpha$

Plug in the known values and crank,

$a^2 = (0.75K)^2 + (2K)^2 - 2\cdot 0.75K \cdot 2K \cos 60\degree$

$a^2 = [\,0.75^2 + 2^2 - 2\cdot 0.75 \cdot 2 \cdot 0.5\,]K^2\qquad \cos 60\degree = 0.5$

$a^2 = [\,0.5625 + 4 - 1.5\,]K^2$

$a^2 = 3.0625\,K^2$

$a = \sqrt{3.0625\,K^2}$

$a = 1.75\,K$

That's the magnitude of the $F_0$ vector. $(K = 9\times 10^9\,\text{N-m}^2/\text C^2)$

Now find the angle of $F_0$ using the [Law of Sines](#law-of-sines). We know all three sides and angle $\alpha$. Two angles are missing, but we only need to find one of them, $\beta$. Pick the appropriate part of the Law of Sines that involves $\beta$ and three of our knowns,

$\dfrac{a}{\sin \alpha} = \dfrac{b}{\sin \beta}$

Fill in the known variables and isolate $\beta$,

$\dfrac{1.75K}{\sin 60\degree} = \dfrac{0.75K}{\sin \beta}$

$\sin \beta = \dfrac{0.75K}{1.75K}\sin 60\degree \qquad \sin 60\degree = \dfrac{\sqrt 3}{2}$

$\beta = \sin^{-1} \left (\dfrac{0.75}{1.75}\dfrac{\sqrt 3}{2} \right )$

$\beta = \sin^{-1} 0.37$

$\beta = 21.8\degree$

$\beta$ is the internal angle inside the triangle. The best answer is the angle down from horizontal, which is $-90\degree + 21.8\degree = -68.2\degree$

![Force triangle solution]({{ site.baseurl }}{% link i/three_point_charges7.svg %}){: .centered :}

$F_0 = 1.75\,K \,\angle{-68.2\degree}$

$F_0 = 1.75\cdot 9 \times 10^9 \,\angle{-68.2\degree}$

$F_0 = 15.7 \times 10^9\,\angle{-68.2\degree}\,\text N$

Take a moment now to go back to your prediction drawing to check your initial intuition.

{% capture summary %}Do calculations with Google{% endcapture %}  
{% capture details %}
Compute arcsine in Google: Copy/paste this equation into Google search,

```
arcsin((0.75 * sqrt 3)/(1.75 * 2)) in degrees
```

Google understands the Law of Cosines and the Law of Sines. Copy/paste these instructions into Google search to call these special-purpose calculators,

```
law of cosines calc: find c a=2 b=0.75 gamma=60 degrees
```

```
law of sines calc: find beta, a=1.75, alpha=60, b=0.75
```
{% endcapture %}{% include details.html %} 

## Summary

The force on a point charge from several neighboring point charges is the vector sum of the pair-wise forces,

$\displaystyle \vec F_0 = \sum_{n=1}^N \dfrac{1}{4\pi\epsilon_0}\dfrac{q_0\,q_n}{r_{0n}}\,\bold{\hat r_n}$

An efficient way to solve an arbitrary force triangle is to use the [Law of Cosines](#law-of-cosines) and the [Law of Sines](#law-of-sines).




