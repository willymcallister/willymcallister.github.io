---
layout: article
title:  "Plane of charge"
author: Willy McAllister
comments: true
---

The next interesting charge configuration we study is a plane of charge. We find the electric field near the plane. 

![Infinite plane of charge]({{ site.baseurl }}{% link i/plane_of_charge0.svg %}){: .centered :}{: height="200px"}

What we discover here is important for understanding the electric field between the plates of a capacitor. If you would like to review your understanding of electric field, check [here]({{ site.baseurl }}{% link _articles/electric-field.md %}).

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Predictions

Before diving in, I would like you come up with some predictions about how this will turn out. What do you imagine the electric field at some distance $a$ from an infinite plane of charge is? 

P1. Which way does the electric field point? \_\_\_\_\_\_\_\_\_\_\_\_\_\_

P2. How will the electric field change as you move away from the plane? \_\_\_\_\_\_\_\_\_\_\_\_\_\_

P3. What symmetry could we use during the derivation?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Problem statement

**Find the electric field near a uniformly charged plane.** 

![Infinite plane of charge]({{ site.baseurl }}{% link i/plane_of_charge1.svg %}){: .centered :}

The plane goes off to infinity in all directions. Assume the charge is spread out uniformly on the plane, with no clumps or gaps. In real life this could be a charged metal plate with large dimensions. 

$q$ is a small test charge. We will evaluate the electric field at the location of $q$. We can make $q$ so small it does not disturb the field from the plane. You can do electric field problems without $q$, but I like to have something there for the electric field to push on. 

$a$ is the distance from $q$ to the plane. Line $a$ goes to the nearest point on the plane so the line is perpendicular to the plane.


## Charge density

The total charge on an infinite plane is of course infinite, so we can't talk about a total charge big $Q$ like we did in the line-of-charge problems.  The useful parameter for a plane is the amount of charge per area, called the *surface charge density*, $\sigma$, with units of coulombs / meter$^2$. For example, a plane might have a charge density of $\sigma = 3\,\mu \text{C}/\text{m}^2$.

## Strategy

The theoretical tool we have is Coulomb's Law. Coulomb's Law works with point charges. In this problem we have a plane of charge, so somehow we have to think about the plane as a collection of point charges. The strategy for solving this electrostatic problem is,

* Describe the distributed charge as a collection of individual point charges.
* Figure out the contribution of each point charge to the electric field.
* Cleverly exploit geometric symmetry to find field components that cancel.
* It is common to work on the direction and magnitude of the field separately.
* To find the magnitude, integrate all the contributions from every point charge. 

## Electric field from a point charge

To get started let's define a tiny patch of charge $dQ$ located somewhere on the plane. $dQ$ is so small we can treat it as a point charge for the purposes of Coulomb's Law.

![Plane with point charge dQ]({{ site.baseurl }}{% link i/plane_of_charge2.svg %}){: .centered :}

Point charge $dQ$ causes an electric field vector to appear at location $q$. We'll call that $dE$. The field points in the same direction as a straight line between $dQ$ and $q$. $dQ$ can be anywhere on the plane. So $dE$ points off to the left, away from the plane. Imagine grabbing $dQ$ and sliding it all around the plane. Do you see how $dE$ can point in pretty much any direction off to the left?

Let's create some new variables to help locate $dQ$,

![New variables l and r help locate dQ]({{ site.baseurl }}{% link i/plane_of_charge3.svg %}){: .centered :}

$l$ is the distance from $dQ$ to $q$.  
$r$ is the distance from $dQ$ to the perpendicular line from $q$ to the plane. 

Since $dQ$ is a point charge we know the [magnitude of the electric field]({% link _articles/electric-field.md %}#electric-field-near-an-isolated-point-charge),

$dE = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{dQ}{l^2}$

This electric field equation is identical to Coulomb's Law, but with one of the charges $(q)$ set to a value of $1$. This is how each point charge contributes to the electric field.

## Symmetry

As the problem is described so far, the electric field vector $dE$ from every point charge points in a different direction. If we try to add those up with an integral it will be quite challenging, lots of trigonometry. We can do better.

Let's get creative with the symmetry of the problem. Can we identify some kind of charge pattern that achieves a significant amount of cancellation of the electric field? Yes. 

Suppose we identify a hoop of point charges on the plane,

![Plane with hoop of charge]({{ site.baseurl }}{% link i/plane_of_charge4.svg %}){: .centered :}

The center of the hoop is where $a$ touches the plane. The radius of the hoop is $r$, and its thickness is an infinitesimal $dr$. The distance between $q$ and a $dQ$ on the hoop is the same everywhere around the hoop. 

Here's a preview of how we use the hoop to find the entire electric field, with two integrations, 

* A first integration to find a general expression for the field from one hoop. We sweep $dQ$ around in a circle to compute the field contribution from one hoop. A symmetry argument will make this particularly easy.
* A second integration to find the contributions from all possible hoops. We sweep the radius of the hoop from zero to infinity.

## Define a hoop of charge

We now find the electric field at $q$ coming from one entire hoop, $dE_{hoop}$by taking advantage of the symmetry of the hoop shape.

The symmetry argument is clearer with a slightly different view of the plane. In these diagrams, the infinite plane is shown edge-on, the long vertical line on the right side of the diagram. From this view, the hoop looks like a vertical line, shown in blue.

![Side view of plane]({{ site.baseurl }}{% link i/plane_of_charge5.svg %}){: .centered :}

* $dQ_1$ is a point charge at the top of the hoop. 
* $dQ_2$ is another point charge directly across the hoop, at the very bottom. 
* The electric field vectors from the two point charges are $dE_1$ and $dE_2$. 

Both e-field vectors can be decomposed into an "$a$" component and an "$r$" component. 
* The "$a$" component is perpendicular to the plane.
* The "$r$" component is parallel to the plane.

This diagram shows $dE_1$ represented as the vector sum of $dE_{1a} + dE_{1r}$,

![Vector components of dE1]({{ site.baseurl }}{% link i/plane_of_charge6.svg %}){: .centered :}

In the same way, $dE_2$ can be expressed as the vector sum of $dE_{2a} + dE_{2r}$, 

![Vector components of dE2]({{ site.baseurl }}{% link i/plane_of_charge6a.svg %}){: .centered :}

Look closely at the "$r$" component of the two e-field vectors. They are *equal in magnitude* and point in *opposite* directions. Therefore, they cancel each other! The net electric field in the "$r$" direction (parallel to the plane) is zero. This is true all the way around the hoop. For every $dQ_1$ there is a $dQ_2$ on the far side that cancels the $r$ component of the field. 

That leaves us with the straight out "$a$" components of the electric field, which do not cancel. Instead, they reinforce each other. All the charge in the hoop is collectively pushing straight out on $q$. Let's figure out the magnitude of the $a$ component,

![The "a" component of the field is related by cosine]({{ site.baseurl }}{% link i/plane_of_charge7.svg %}){: .centered :}

By similar triangles, the angle of the electric field vectors is the same as the physical angle of the $l$-$a$-$r$ triangle. By similar triangles we know $\theta$ is the angle in the small right triangle on the left. We can express the magnitude of $dE_a$ relative to $dE$ using the definition of cosine ([SOH CAH TOA]({{ site.baseurl }}{% link _articles/SOHCAHTOA.md %})),

$dE_a = dE\,\cos\theta$

The parallel part of the electric field from a $dQ$ cancels out. What remains is $dE_a$, the field from a $dQ$ positioned anywhere around the hoop,

$dE_a = \dfrac{1}{4\pi\epsilon_0} \dfrac{dQ}{l^2}\,\cos\theta$

## Electric field from one hoop

Next let's work on the field from one entire hoop, $dE_{hoop}$. Each $dQ$ around the hoop contributes one little $dE_a$ field vector. To combine all the contributions we add them up with an integral,

$E_{hoop} = {\displaystyle \int} dE_a$

$E_{hoop} = {\displaystyle \int} \dfrac{1}{4\pi\epsilon_0} \dfrac{dQ}{l^2}\,\cos\theta$ 

For a given radius of the hoop, pretty much everything inside the integral is a constant,

$E_{hoop} = \dfrac{1}{4\pi\epsilon_0} \dfrac{1}{l^2}\,\cos\theta {\displaystyle \int}dQ$ 

What's left to integrate is ${\displaystyle \int}dQ$, which is simply the total charge of the hoop. 

Let's call that $dQ_{hoop}$.

$dE_{hoop} = \dfrac{1}{4\pi\epsilon_0} \dfrac{1}{l^2}\,\cos\theta \,dQ_{hoop}$ 

The total charge of a hoop is the product of the charge density of the plane, $\sigma$, time the area of the hoop. What's the area of a thin hoop? It is the same as the area of a long skinny rectangle whose width is the circumference of the hoop $(2\pi r)$ and height is the thickness of the hoop $(dr)$.

![Area of a hoop]({{ site.baseurl }}{% link i/plane_of_charge9.svg %}){: .centered :}

Area of the hoop $= 2\pi r \,dr$ 

The amount of charge in the hoop is the area times the charge density of the plane, 

$dQ_{hoop}= \sigma \, (2 \pi  r \, dr)$

$dE_{hoop} = \dfrac{1}{4\pi\epsilon_0} \dfrac{1}{l^2} \, \cos \theta\,\sigma \,2 \pi r \,dr $

This is the field contribution of a single hoop. The independent variable is the radius of the hoop.

## Change of variables

The next step is to sum up all possible hoops. Unfortunately, this one isn't quite as simple.

Just like we did for one of the [line of charge examples]({{ site.baseurl }}{% link _articles/line-of-charge2.md %}#change-of-variables), we do a change of variables. The problem is currently stated in terms of $dr$. We recast it in terms of $d\theta$. For this change of variables the goal is to develop an expression for $d\theta$ in terms of $dr$.

This next section is going to be a lot of work. The payoff comes when we get to the integral. It's going to be really quick. 

Some useful trig identities will help us with the change of variable. The tangent identity includes both $r$ and $\theta$,

$\tan \theta = \dfrac{r}{a} \qquad \blueD{r = a\, \tan \theta}$

Take the derivative of $r$ with respect to $\theta$, 

$\dfrac{dr}{d\theta} = \dfrac{d}{d\theta} \,a\,\tan \theta$

$\dfrac{dr}{d\theta} = a\, \sec^2 \theta$

$\greenD{dr = a\, sec^2 \theta \, {d\theta}}$

We have generated an expression for $dr$ in terms of $d\theta$. 

The electric field equation has an $l^2$ term. Let's find a way to express $l^2$ in terms of $\theta$. We use the definition of cosine because it includes $l$ and $\theta$,

$\cos \theta = \dfrac{a}{l}$

$l = a\,\dfrac{1}{\cos\,\theta} = a \, \sec \theta$

$\maroonD{l^2 = a^2 \, \sec^2 \theta}$

Now we are ready to implement the change of variable. Here's a reminder of the expression for $dE_{hoop}$,

$dE_{hoop} = \dfrac{1}{4\pi\epsilon_0} \dfrac{\sigma \,2 \pi \,r \,dr }{l^2} \,\cos \theta$

$dE_{hoop} = \dfrac{1}{4\pi\epsilon_0} \dfrac{1}{l^2} \, \cos \theta\,\sigma \,2 \pi r \,dr $

Plug in the identities for $\blueD r$, $\greenD{dr}$, and $\maroonD{l^2}$,

$dE_{hoop} = \dfrac{1}{4\pi\epsilon_0} \dfrac{1}{(\maroonD{a^2 \, \sec^2 \theta})} \, \cos \theta\,\sigma \,2 \pi (\blueD{a \tan \theta}) \,(\greenD{a \sec^2 \theta \,d\theta})$

After some spectacular cancellation, 

$dE_{hoop} = \dfrac{1}{4\cancel{\pi}\epsilon_0} \dfrac{1}{(\maroonD{\cancel{a^2} \, \cancel{\sec^2 \theta}})} \, \cos \theta\,\sigma \,2 \cancel{\pi} (\blueD{\cancel{a} \tan \theta}) \,(\greenD{\cancel{a} \cancel{\sec^2 \theta} \,d\theta})$

the change of variable is complete,

$dE_{hoop} = \dfrac{1}{2\epsilon_0} \,\sigma \cos \theta \, \tan \theta \;d\theta$

(Of particular importance: notice all the $a$ terms canceled out.)  

There's one last bit of strangeness we can clean up before integrating. The product of cosine and tangent can be simplified. We show this using the variables from our example.

![Reminder of the geometry]({{ site.baseurl }}{% link i/plane_of_charge7.svg %}){: .centered :}

$\cos \theta = \dfrac{a}{l} \qquad \tan \theta = \dfrac{r}{a}\qquad \sin \theta = \dfrac{r}{l}$

$\cos\,\theta\,\tan\,\theta = \left (\dfrac{\cancel{a}}{l} \right ) \cdot \left (\dfrac{r}{\cancel{a}} \right ) = \dfrac{r}{l} = \sin\,\theta$

The field equation for one hoop reduces to,

$dE_{hoop} = \dfrac{\sigma}{2\epsilon_0} \,\sin \theta\, d\theta$

After the change of variable, we redraw the diagram in terms of $d\theta$ and $\theta$,

![After the change of variable]({{ site.baseurl }}{% link i/plane_of_charge10.svg %}){: .centered :}

Something interesting has happened. During the change of variable from $dr$ to $d\theta$ there was a bunch of cancellation. All the $r$'s and $a$'s and $l$'s are gone.

## Electric field from all hoops 

We are finally ready to perform the integration to find the total field from all hoops,

$E = {\displaystyle \int}\_{all\,hoops} dE_{hoop}$

where $E$ is the overall electric field. Substitute for $dE_{hoop}$,

$E = {\displaystyle \int}_{all\,hoops} \,\dfrac{\sigma}{2\epsilon_0} \, \sin \theta\, d\theta$

We need some limits on the integral. What should they be?  
The smallest possible hoop is when radius $r$ is zero, $l$ coincides with $a$, and $\theta$ is zero. The largest hoop is when $r$ is infinite. Line $l$ points out to the horizon, and $\theta$ is $90^{\circ}$or $\pi/2$ radians. So the limits on the integration run from $0 \text{ to } \pi/2$ radians,

$E = {\displaystyle \int}_0^{\pi/2} \dfrac{\sigma}{2\epsilon_0} \,\sin \theta \, d\theta$

$E = -\dfrac{\sigma}{2\epsilon_0} \,\cos \theta \,\bigg\| _{0}^{\pi/2} = -\dfrac{\sigma}{2\epsilon_0} \,(0 - 1) = \dfrac{\sigma}{2\epsilon_0}$

The electric field near an infinite plane of charge is,

$\boxed{ E = \dfrac{\sigma}{2\epsilon_0}\;\text{newtons/coulomb}}$
{: .colorbox :}

We've been keeping track of the direction of the field in our head the whole time. The field points straight away from the plane.

Now is the time to take a moment to go back and see how your predictions came out.

## Summary
{:.no_toc}

The electric field near an infinite plane of charge is,

$E = \dfrac{\sigma}{2\epsilon_0}\;\text{newtons/coulomb}$

Remarkably, the field is independent of the distance away from the plane (the field does not fall off). It doesn't matter if you are one millimeter or one kilometer away from the plane, the electric field is the same.

This example was for an infinite plane of charge. In the real world there is no such thing, but the result applies remarkably well to real planes, as long as the plane is large compared to $a$ and the location is not too close to the edge of the plane.

### Related 
{:.no_toc} 

Khan Academy videos. 

[Field from an infinite plate - part 1](https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage/electric-field/v/proof-advanced-field-from-infinite-plate-part-1)  
[Field from an infinite plate - part 2](https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage/electric-field/v/proof-advanced-field-from-infinite-plate-part-2) 

The derivation Sal does is slightly different than the one in this article.

### Reference
{:.no_toc}

Kip, A. H. (1969), *Fundamentals of Electricity and Magnetism* (2nd edition, McGraw-Hill)
