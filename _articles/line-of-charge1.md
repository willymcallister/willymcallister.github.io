---
layout: article
title:  "Force from a line of charge - charge off the end"
author: Willy McAllister
comments: true
---

We use Coulomb's Law to compute the force from a line of charge $Q$ on a test charge $q$ positioned off the end of the line.

![Line of charge with a test charge off the end]({{ site.baseurl }}{% link i/line_of_charge1c.svg %}){: .centered :}

This is an example of how to use Coulomb's Law where we have a distributed charge structure instead of point charges. In this case, we have a line of charge.

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Make a prediction

The first thing I would like you to do is predict the answer to some questions. Write your predictions down somewhere. Then, when you have gone through this derivation, check your predictions.

P1. What direction is $q$ being pushed or pulled by the line of charge? \_\_\_\_\_\_\_\_\_\_\_\_\_\_

P2. For two point charges the force goes down as $1/r^2$ as the point charges move apart. As point charge $q$ moves away from the line, how will the force go down? \_\_\_\_\_\_\_\_\_\_\_\_\_\_

P3. Coulomb's Law applies to point charges. What is a way you might think about the line of charge that let's you apply Coulomb's Law? \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Force from a line of charge

**Find the total force on test charge $q$.**

The first thing to do is make up some names for distances so we can talk about them,

![Line of charge with test charge off the end]({{ site.baseurl }}{% link i/line_of_charge1a.svg %}){: .centered :}

A line of charge $L$ meters long has a total charge of $Q$.  
Assume $Q$ is spread out uniformly along the line.  
Assume the charge in the line is stuck where it is and does not move around.  
A test charge $q$ is positioned $a$ meters away from one end of the line. 

### Model the problem

When you have charge as two or three-dimensional shape... We approach this problem by modeling the line as a bunch of individual point charges, sitting shoulder to shoulder along the line. To compute the total force on $q$ we add up (integrate) the force from each individual point charge in the line. 

Let's add a distance variable to the diagram. $x$ is the distance from the test charge $q$ to some point on the line, and $dx$ is a tiny section of the line,

![Line of charge with x and dx variables]({{ site.baseurl }}{% link i/line_of_charge1b.svg %}){: .centered :}

We define the *linear charge density* in the line as $\lambda = \dfrac{Q}{L}$ coulombs/meter. 

As an example, if the total $Q$ on the line is $10$ coulombs, and the line is $5$ meters long, the charge density would be $\lambda = 10 / 5 = 2$ coulombs per meter. 

The charge in a section of line is the length of the section times the linear charge density. This lets us express the amount of charge, $dQ$, contained in a little section of the line, $dx$,

$dQ = \lambda\,dx = \dfrac{Q}{L}\,dx$

$dQ$ is a tiny bit of charge in a tiny section of the line. That means $dQ$ is close enough to a point charge to let us use Coulomb's Law to find the tiny force from this part of the line.

{% capture summary %}charge density{% endcapture %}  
{% capture details %}  
Charge density goes by different names depending on the shape of the charged object. 

If it's a line, like we have here, it's *linear charge density*, charge per unit length, $\text C/\text m$. 

If the shape is two dimensional, any flat shape, it's *surface charge density*, $\text C/\text m^2$. 

If you have a three dimensional shape you have *volume charge density*, $\text C/\text m^3$.  
{% endcapture %}{% include details.html %}  

### Direction of the force

We can figure out the direction of the force right away by using the symmetry of the problem. The force on $q$ from every $dQ$ is directed along a straight line between $q$ and $dQ$. Both $q$ and $dQ$ are positive charges, so $q$ is repelled by the line. 

### Magnitude of the force

Direction solved, now we find the magnitude of the force. Coulomb's Law tells us the incremental force $dF$ due to the incremental charge $dQ$ is,

$dF = \dfrac{1}{4\pi\epsilon_0}\dfrac{q \,dQ}{x^2}$

The numerator multiples the two charges, $q$ and $dQ$; the denominator $x$ is the distance between the two charges, squared.

To find the total force, we add up all the forces from all the little $dQ$'s by integrating from the near end of the line ($a$), to the far end ($a + L$).

$\displaystyle F = \int_a^{a+L} d\vec F = \int_a^{a+L} \dfrac{1}{4\pi\epsilon_0}\dfrac{q \,dQ}{x^2}$

This equation includes both $x$ and $dQ$. We can eliminate $dQ$ if we use the expression from above,

$dQ = \dfrac{Q}{L}\,dx$

This eliminates $dQ$, leaving just $dx$ as the independent variable,

$\displaystyle F = \int_a^{a+L} \dfrac{1}{4\pi\epsilon_0}  \dfrac{qQ}{L} \dfrac{1}{x^2} \text{d}x$

Move everything that does not depend on $x$ outside the integral,

$\displaystyle F = \dfrac{1}{4\pi\epsilon_0} \dfrac{qQ}{L} \int_a^{a+L}\dfrac{1}{x^2} \text{d}x$

Now we are ready to solve the integral, (see if you can do this integral on your own before peeking)

{% capture summary %}integral{% endcapture %}  
{% capture details %}  
The integral of $x^n$ for any $n$ is, 

$\displaystyle \int x^n dx = \dfrac{x^{n+1}}{n+1}$ 

In this example, $n = -2$.

$\displaystyle \int_a^{a+L} x^{-2} dx = \dfrac{x^{-2+1}}{-2+1} = \dfrac{x^{-1}}{-1} = -\dfrac{1}{x}$

Apply the limits and solve the definite integral,

$-\dfrac{1}{x}\bigg\|_a^{a+L} = -\left ( \dfrac{1}{(a+L)} - \dfrac{1}{a}\right ) = \dfrac{1}{a} - \dfrac{1}{(a+L)}$

Multiply each term by an identity and combine fractions,

$\dfrac{1}{a} \left ( \dfrac{a+L}{a+L}\right ) - \dfrac{1}{(a+L)} \left ( \dfrac{a}{a} \right ) = \dfrac{(a+L)-a}{a(a+L)} = \dfrac{L}{a(a+L)}$

Now we have a solution for the definite integral,

$\displaystyle \int_a^{a+L} x^{-2} dx = \dfrac{L}{a(a+L)}$

Substitute this back into the force equation,

$F = \dfrac{1}{4\pi\epsilon_0} \dfrac{qQ}{\cancel L} \dfrac{\cancel L}{a(a+L)}$
{% endcapture %}{% include details.html %} 

$\boxed{F = \dfrac{1}{4\pi\epsilon_0} \dfrac{q\,Q}{a(a+L)}}$

Here are some things to notice about the solution, 

* The numerator is the product of the test charge and the total charge on the line. 
* The denominator is distance$^2$, a combination of distance to the near end and far end of the line. The $a(a+L)$ form of the denominator comes from the particular geometry of this example.
* If the test charge $q$ moves far away from the line, $L$ becomes insignificant compared to $a$, and the denominator approaches $a^2$. So at great distance, the line starts to resemble a far-off point charge, and as one would hope, the equation approaches Coulomb's Law for two point charges.

## Summary
{:.no_toc}

The force on a text charge off the end of a line of charge is,

$F = \dfrac{1}{4\pi\epsilon_0} \dfrac{q\,Q}{a(a+L)}$

This is one of a handful of relatively simple charge configurations we work out with the full calculus treatment.

This example illustrates a few of the strategies for solving electrostatics problems. Coulomb's Law is based on pairwise forces between point charges. When faced with a shape with distributed charge like the line we have here, 

1. Invent a $dQ$ variable from the distributed charge, something you can use as a point charge in Coulomb's Law.
2. Write out the force between each pair of charges. 
3. In this problem the geometry was highly symmetric so we didn't have to do any fancy vector addition. The direction of the force was obvious.
4. Add up the forces with an integral to get the resultant force.

## References

Kip, A. H. (1969), *Fundamentals of Electricity and Magnetism* (2nd edition, McGraw-Hill)