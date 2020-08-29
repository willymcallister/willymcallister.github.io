---
layout: article
title:  "Electric force and Coulomb's Law"
author: Willy McAllister
comments: true
---

Our study of electricity begins with *electrostatics* and the *electrostatic force*. This is one of the four fundamental forces of nature. The electrostatic force is nicely modeled by Coulomb's Law. We use Coulomb's Law to find the force between nearby charges.

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Do Coulomb's Law problems in two steps,
* Figure out the *direction* of the force based on the sign of the charges.
* Figure out the *magnitude* of the force using the absolute value of the charges.

----

As we begin our study of electricity we start really simple, with *electrostatics*.

Electrostatic problems deal with the force between *charges*. *Static* means the charges are not moving, or at least not moving very fast.

How fast is "not very fast"? When charge moves it generates a magnetic field. The magnetic field adds a magnetic force to the problem, making it way more complicated. Therefore, "not very fast" means so slow the magnetic effects are insignificant compared to the electric force.

## Charge

Where does electric force come from? The answer is, electric force comes from *charge*. But how do we know there is such a thing as charge? We see electric force happening in nature. Under certain conditions (like when you rub a balloon on your sweater or run a comb through dry hair) we see electric forces between objects. To explain those forces we came up with the idea that objects had a property called *charge*. This is a pretty mind-blowing concept. 

To wrap your mind around charge you have to accept a circular argument,

"Electric force comes from charge. Charge exists because we see electric force". 

It sounds made up. And it is. So it is okay if you are skeptical. In the end, this is the best story we've come up with, and it allows us to do many magical and impressive things with electricity. 

Charge is a lot like gravity. Like gravity, it "acts at a distance." However, there is only one type of gravity; gravity only attracts. Unlike gravity, there are *two* types of electric charge. We call them *positive* and *negative*.

### The one and only rule of charge

Unlike charges attract,

![Unlike charges attract]({% link i/electric_force4.svg %}){: .centered :}

Like charges repel,

![Like charges repel, two positive charges]({% link i/electric_force5.svg %}){: .centered :}

![Like charges repel, two negative charges]({% link i/electric_force6.svg %}){: .centered :}

(It is common to use the variables $q$ or $Q$ to represent charge.)

## Coulomb - the unit of charge

When we want to attach a number to an amount of charge, the unit we use is the *coulomb*, abbreviated with a capital C. If you want to learn about this unit, take a quick side trip to this [article]({{ site.baseurl }}{% link _articles/charge.md %}#coulomb---the-unit-of-charge). 

## Coulomb's Law of electric force

Coulomb's Law very nicely models the force between two charged objects,

$\vec F = \dfrac{1}{4\pi\epsilon_0} \,\dfrac{q_0\, q_1}{r^2} \,\bold{\hat r}$
  
Where

* $\vec F$ is the electric force measured in newtons. The force is a vector. It acts along a direct line between the two charged bodies.
* $q_0$ and $q_1$ are the amounts of charge on each object, measured in *coulombs*.  
* $r$ is the distance between the charged objects, measured in meters.
* $\bold{\hat r}$ is a notational finesse. It represents a unit vector (a vector of length $1$) that points from one charge toward the other. It turns the right side into a vector quantity. $\bold{\hat r}$ reminds us the force acts along the line between the two charges.   
* $\dfrac{1}{4\pi\epsilon_0}$ is a constant of proportionality. It relates the units on the left side (newtons) to the units on the right side (coulombs and meters). We need this constant because we want the answer come out with the right value within the system of units we use to measure force, charge, and distance (newtons, coulombs, meters). 

## $\epsilon_0$ permittivity of free space

The constant in front of Coulomb's Law looks rather complicated. Why is it like that? The Greek letter $\epsilon_0$ is known as the *permittivity of free space*, (free space is a vacuum). 
 
This notation comes from a theory you learn later called Gauss's Flux Theorem. Gauss's flux theorem tells us the constant at the front of Coulomb's Law actually has two parts, a geometric factor and another factor contributed by the experimental setup. 

Gauss's theorem involves the surface area of a sphere. The geometric factor $4\pi$ is the total solid angle of a sphere (just like $2\pi$ is the total angle of a circle). This is where the $4\pi$ term comes from.

The other part of the constant represents the experimental setup where all the units are matched up properly. We capture this in the $\epsilon_0$ term. 

This notation for the constant allows Gauss's Law to be written in a particularly simple form. It is worth it to bring this form all the way back here to the beginning of electrostatics, which is why it shows up in Coulomb's Law.

The constant $\epsilon_0$ is the conversion factor for the experimental setup and the system of units you use to measure force. In the SI system of units, ${\epsilon_0}$ is, 

$\epsilon_0 = 8.854 187 817 \times 10^{-12}$ coulomb$^2/$newton-meter$^2$

The first person to measure $\epsilon_0$ was [Coulomb](charge.html#charles-augustin-de-coulomb) himself.

This value of $\epsilon_0$ means,

$\dfrac{1}{4\pi \epsilon_0} = \dfrac{1}{4\pi \cdot 8.854 \times 10^{-12}} = 8.987 \times 10^9$

For engineering purposes, we round this to something easier to remember,

$\dfrac{1}{4\pi \epsilon_0} = 9 \,\times 10^{9}\,\text{N-m}^2/\text C^2\quad$ (newton-meter$^2$/coulomb$^2)$

Some textbooks give this number a name, $K$. You will see $K$ and $\epsilon_0$ notation used in different charge problems, so be ready for both. Coulomb's Law can be written,

$\vec F = 9 \times 10^{9} \dfrac{q_0\,q_1}{r^2}\,\bold{\hat r}$

Electric forces are very large, [far greater than the force of gravity]({{ site.baseurl }}{% link _articles/electric-force-vs-gravity.md %}).

## Example - two point charges

**Find the electric force between two point charges, $+3\,\mu\text C$ and $-50\,\text{nC}$ positioned $2\,\text{cm}$ apart.**

![Two point charges]({{ site.baseurl }}{% link i/electric_force1.svg %}){: .centered :}

The force is predicted by Coulomb's Law. We always do these sorts of problems in two steps. 
1. Figure out the *direction* of the force by inspecting the two charges. 
2. Take the absolute value of the charges and figure out the *magnitude* of the force with Coulomb's Law. 

### Direction

The direction of the force can be found by inspection. The electric force always acts along the line between the two point charges. For this problem, the charges have opposite signs, so we know they attract. We add force vectors to the diagram,

![Two point charges with attractive force]({{ site.baseurl }}{% link i/electric_force2.svg %}){: .centered :}

### Magnitude

The magnitude of the force comes from Coulomb's Law. Since we know the direction, that let's us use the absolute value of the charges and drop the vector notation, 

$\|F\| = 9 \times 10^9 \,\dfrac{\|q_0\|\, \|q_1\|}{r^2}$

Fill in the values we know and crank the arithmetic,

$\|F\| = 9 \times 10^{9} \,\dfrac{\text{Nm}^2}{\text C^2} \,\,\dfrac{3\,\mu\text C\cdot 50\,\text{nC}}{(2\,\text{cm})^2}$

Expanding the numbers to scientific notation,

$\|F\| = 9 \times 10^{9} \,\dfrac{\text{Nm}^2}{\text C^2} \,\,\dfrac{3\times 10^{-6}\text C\cdot 50\times 10^{-9}\text{C}}{(0.02\,\text m)^2}$

Cancel the units and compute the force,

$\|F\| = 9 \times 10^{9} \,\dfrac{\text N\cancel\text m^2}{\cancel{\text C^2}} \,\,\dfrac{150\times 10^{-15}\,\cancel\text C^2}{4\times 10^{-4}\,\cancel{\text m^2}}$

$\|F\| = 3.37\times 10^{-3}\,\text N$

And we assemble the answer by combining the direction and magnitude of the force. The two charges are being pulled together with a force of $3.37\times 10^{-3}\,\text N$,

![Two point charges with attractive force shown]({{ site.baseurl }}{% link i/electric_force3.svg %}){: .centered :}

## Summary
{:.no_toc}

The electric force always acts along the straight line between the two charges.

Coulomb's Law predicts the force between two point charges,

$\vec F = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{q_0\, q_1}{r^2} \,\bold{\hat r}$

$\epsilon_0 = 8.85 \times 10^{-12}$ coulomb$^2/$newton-meter$^2$

$\dfrac{1}{4\pi \epsilon_0} = 9 \times 10^{9}$ newton-meter$^2$/coulomb$^2$

$\epsilon_0$ is the *permittivity of free space*.

When working on electric force problems we do it in two steps,
* Figure out the *direction* of the force based on the sign of the charges.
* Figure out the *magnitude* of the force using the absolute value of the charges.

Then combine the direction and magnitude to get a force vector. Doing it this way avoids errors that often happen if you include signs and vector directions into the Coulomb's Law equation. 

### References
{:.no_toc}

Kip, A. H. (1969), *Fundamentals of Electricity and Magnetism* (2nd edition, McGraw-Hill)
