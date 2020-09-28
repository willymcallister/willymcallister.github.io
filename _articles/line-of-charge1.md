---
layout: article
title:  "Line of charge - test charge off the end"
author: Willy McAllister
comments: true
---

We use Coulomb's Law to compute the force from a line of charge $Q$ on a test charge $q$ positioned off the end of the line.

![Line of charge with a test charge off the end]({{ site.baseurl }}{% link i/line_of_charge1_1.svg %}){: .centered :}

This is an example of how to use Coulomb's Law when charge is distributed in a shape. In this case, we have a line of charge pushing on a point charge.

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Predictions

The first thing I would like you to do is predict the answer. Write your predictions down somewhere. Then, when you have gone through this derivation, check back to see how you did. As you work through electrostatic problems it's really nice to develop an intuition as you go.

P1. What direction is $q$ being pushed or pulled by the line of charge? \_\_\_\_\_\_\_\_\_\_\_\_\_\_

P2. For two point charges the force goes down as $1/r^2$. As the distance between the line of charge and the point charge $q$ increases, how will the force go down? \_\_\_\_\_\_\_\_\_\_\_\_\_\_ (faster, slower, or the same as two point charges).

## Force from a line of charge

**Find the total force on test charge $q$.**

The first thing to do is make up some names for distances so we can talk about them,

![Line of charge with test charge off the end]({{ site.baseurl }}{% link i/line_of_charge1_2.svg %}){: .centered :}

A line of charge $L$ meters long has a total charge of $Q$.  
Assume $Q$ is spread out uniformly along the line.  
Assume the charge in the line is stuck where it is and does not move around.  
A test charge $q$ is positioned $a$ meters away from one end of the line. 

### Strategy

The theoretical tool we have is Coulomb's Law. However, Coulomb's Law only works when you have two point charges. In this problem one of the charges is distributed in a line shape. What do we do now? The approach we take for this and all other electrostatic problems is,

* Describe the distributed charge as a collection of individual point charges.
* Figure out the contribution of each point charge to the force.
* Add up (integrate) all the contributions to get the total force.

### Charge density

We define the *linear charge density* as $\lambda = \dfrac{Q}{L}$ coulombs/meter. This will come in handy.

As an example, if the total $Q$ on the line is $10$ coulombs, and the line is $5$ meters long, the charge density would be $\lambda = 10 / 5 = 2$ coulombs per meter.

If you know $\lambda$ then you can figure out the amount of charge in any length of line,

$Q = \lambda \, L$

{% capture summary %}charge density{% endcapture %}  
{% capture details %}  
Charge density goes by different names depending on the shape of the charged object. 

For a line, like we have here, it's $\lambda$, *linear charge density*, charge per unit length, $\text C/\text m$. 

If the shape is two dimensional, any flat shape, it's $\sigma$, *surface charge density*, $\text C/\text m^2$. 

If you have a three dimensional shape it's $\rho$, *volume charge density*, $\text C/\text m^3$.  
{% endcapture %}{% include details.html %}  

### Electric force

We model the line as a collection of point charges. To do this we break up the line into tiny little sections, where each section so small we can consider it to be a point charge for the purposes of Coulomb’s Law. 

Let's define some more variables to describe the problem. 

* $dQ$ is a tiny bit of charge contained in a tiny length of the line, $dx$.  
* $a$ is the distance from the end of the line to test charge $q$.  
* $x$ is the distance from $dQ$ to $q$. 

![Line of charge with defined variables]({{ site.baseurl }}{% link i/line_of_charge1_3.svg %}){: .centered :}

#### Direction of the force

We can figure out the direction of the force right away. The tiny bit of force $dF$ on $q$ from every tiny little $dQ$ is directed along a straight line between $q$ and $dQ$. Both $q$ and $dQ$ are positive charges, so $q$ is repelled by the line. 

![Line of charge with force vector]({{ site.baseurl }}{% link i/line_of_charge1_4.svg %}){: .centered :}

#### Magnitude of the force

We have the direction. Now we find the magnitude of the force. Coulomb's Law tells us the force $dF$ pushing on $q$ caused by charge $dQ$ is,

$dF = \dfrac{1}{4\pi\epsilon_0}\dfrac{q \,dQ}{x^2}$

The numerator has the product of the two charges, $q$ and $dQ$. The denominator is the distance between the two charges, squared.

To find the total force, $F$, we want to add up (integrate) all the tiny $dF$ forces from all the tiny $dQ$'s, from one end of the line to the other. Our equation for $dF$ is in terms of differential charge $dQ$. We wish it was in terms of a differential distance $dx$ so we can integrate over distance.

$dQ$ can be expressed in terms of distance if we use the charge density expression. The general expression for $Q$ in terms of linear charge density and distance is,

$Q = \lambda \, L$

Tiny charge $dQ$ can be expressed in terms of the tiny distance it occupies, the total charge on the line, and the total length of the line,

$dQ = \lambda\,dx = \dfrac{Q}{L}\,dx$

We can replace $dQ$ with this expression and integrate by sweeping the distance from the near end of the line ($a$), to the far end ($a + L$).

$\displaystyle F = \int_a^{a+L} \dfrac{1}{4\pi\epsilon_0}  \dfrac{q\,Q}{L} \dfrac{1}{x^2} \text{d}x$

Move everything that does not depend on $x$ outside the integral,

$\displaystyle F = \dfrac{1}{4\pi\epsilon_0} \dfrac{q\,Q}{L} \int_a^{a+L}\dfrac{1}{x^2} \text{d}x$

Now we are ready to solve the integral, (see if you can do it on your own before peeking)

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
{: .colorbox :}

### Final thoughts

Things to notice about the solution, 

* The numerator is the product of two charges, the test charge and the total charge on the line. 
* The denominator is distance$^2$, a combination of distance to the near end and far end of the line. The $a(a+L)$ form of the denominator comes from the particular geometry of this example.
* If the test charge $q$ moves really far away from the line, $L$ eventually becomes insignificant compared to $a$, and the denominator approaches $a^2$. So when they are far apart, the line resembles a far-off point charge. The equation approaches Coulomb's Law for two point charges.

This is a good time to go back and review your predictions. Did you get some parts right? Did you get close? If not, that's okay. You have more chances to refine your intuition.

## Summary
{:.no_toc}

The force on a text charge off the end of a line of charge is,

$F = \dfrac{1}{4\pi\epsilon_0} \dfrac{q\,Q}{a(a+L)}$

This is one of a handful of relatively simple charge configurations we study in beginning electrostatics. 

The point of doing this problem is to learn some strategies for solving electrostatics problems. It isn't a particularly important result and you don't need to memorize it. The main point of doing this calculation is to learn how to work with a distributed charge shape.

Coulomb's Law works for forces between point charges. When you are faced with a distributed charge, like a line of charge, the strategy is, 

1. Invent a $dQ$ variable, something you can use as a point charge in Coulomb's Law.
2. Write an equation for the force between each pair of charges. 
3. The geometry of this problem was very simple and symmetric so we didn't have to do any fancy vector addition. The direction of the force was obvious.
4. Figure out a way to express $dQ$ in terms of distance.
5. Add up the forces with an integral to get the total force.

## References

Kip, A. H. (1969), *Fundamentals of Electricity and Magnetism* (2nd edition, McGraw-Hill), p. 12.
