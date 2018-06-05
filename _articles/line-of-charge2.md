---
layout: article
title:  "Line of charge - test charge to the side"
author: Willy McAllister
comments: true
---

We look at the electric field from a line of charge $Q$, where the test charge $q$ is off to the side of the line. We compute the electric field (instead of the electric force) at the location of the test charge. 

![Line of charge with a test charge off to the side]({{ site.baseurl }}{% link i/line_of_charge2_1.svg %}){: .centered :}

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Predictions

First off, I would like you to predict how this will turn out. Assume the test charge is positioned right across from the mid-point of the line. 

P1a. What direction is $q$ being pushed or pulled by the line of charge? \_\_\_\_\_\_\_\_\_\_\_\_\_\_  

P2. If $Q$ is positive, what direction does the electric field vector point at the location of test charge $q$? \_\_\_\_\_\_\_\_\_\_\_\_\_\_

P4. Can you identify any symmetry we could use during the derivation?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_

P4. In the previous example the test charge was off the end of the line. We found the force went down as $1/\text{distance}^2$. For this example, with the test location to the side, how will the electric field go down? \_\_\_\_\_\_\_\_\_\_\_\_\_\_ (faster or slower than $1/\text{distance}^2$)? Make a guess at a function. \_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Electric field near a line of charge

**What is the electric field at location $q$?**

We begin by giving names to some of the distances so we can talk about them.

Assume the line is length $L$, and the total charge on the line is $Q$.  
Assume $Q$ is evenly distributed along the line (no gaps or clumps).  
Assume test charge $q$ is distance $a$ away from the line, opposite the mid-point.  
Assume both $q$ and $Q$ are positive charges. 

![Line of charge with a test charge off to the side]({{ site.baseurl }}{% link i/line_of_charge2_2.svg %}){: .centered :}

{% capture summary %}is $q$ needed?{% endcapture %}  
{% capture details %}  
This question is about the electric field at the location of test charge $q$. Electric field is defined as the force *per unit charge* at a location in space. Technically, for an electric field question, we could remove $q$ from the problem and just think about the point in space where $q$ was. When I do e-field problems I like to include $q$ as the unit test charge. It helps me visualize the e-field if there's an physical thing at the location. I imagine gluing a $q$ on the end of an imaginary wooden stick and holding it in the e-field. I can feel the force tugging on it. You can do the problem either way, with or without $q$.
{% endcapture %}{% include details.html %} 

We start by finding a general expression for the electric field for any length $L$ and any separation $a$. Then we will look at a particularly useful case where the line is very long relative to the distance to the test charge, $L \gg a$.

### Strategy

The theoretical tool we have is Coulomb's Law. However, Coulomb's Law only works when you have two point charges. In this problem one of the charges is distributed in a line shape. What do we do now? The approach we take for this and all other electrostatic problems is,

* Describe the distributed charge as a collection of individual point charges.
* Figure out the contribution of each point charge to electric field.
* Shamelessly exploit geometric symmetry to simplify the problem.
* It is common to find the direction and magnitude separately.
* To find the magnitude, add up (integrate) all the contributions from every point charge.   

### Charge density

Before diving in, let's take a moment to define a useful parameter. The total charge on the line is $Q$. The amount of charge in $1$ meter of line is,

 $\lambda = \dfrac{Q}{L}$ coulombs/meter

$\lambda$ is called the *linear charge density*. ($\lambda$ is the Greek "L" for length or linear.)

If you want to know the charge in a given length of line, multiply $\lambda$ coulombs/meter by the length in meters,

$q_\text{contained in length x} = \lambda \,x$ 

If a line is $5$ cm long and contains $2\times 10^{-9}$ coulomb, $(2\,\text{nC})$,
* **What is the linear charge density?**  
* **How much charge is contained in $2$ mm of the line?**

{% capture summary %}show answers{% endcapture %}  
{% capture details %}  
Linear charge density, $\lambda = q/x$

$\lambda = 2\times 10^{-9} / 0.05 = 4 \times 10^{-8} = 40$ nC/m.

Charge contained in $2$ mm of line, $q = \lambda x$

$q_{1\text{mm}} = 40 \times 10^{-9} \cdot 0.002 = 8 \times 10^{-11} = 80$ pC 
{% endcapture %}{% include details.html %} 

### Electric field

Let's model the line as a whole bunch of point charges by breaking it into tiny little sections. We make each section so small we can consider it to be a point charge for the purposes of Coulomb's Law. 

Let's create some more variables to describe the location of a point charge named $dQ$,

![Line of charge with a test charge off to the side]({{ site.baseurl }}{% link i/line_of_charge2_3.svg %}){: .centered :}

* $dQ$ is a tiny bit of charge contained in a tiny length of the line, $dx$.  
* $a$ is the distance from the line to the location of test charge $q$.  
* $x$ is the distance from $a$ to $dQ$. 
* $r$ is the distance from $dQ$ to the test charge.
* $\theta$ is the angle between $a$ and $r$.
* $dE$ is the tiny bit of electric field contributed by $dQ$. It points the same direction as $r$.

Now that we've named everything we can think of, we are ready to attack the problem.

**What is the electric field at the location of test charge $q$ from a small chunk of charge, $dQ$?** 

In general, the [electric field around a point charge](link to electric field article) is,

$E = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{Q}{r^2}$

(where $Q$ is any arbitrary amount of charge.)

>The electric field is a vector quantity, so technically these equations should use vector notation. For simplicity, we'll work on the magnitude and direction separately.

We insert $dQ$ as the source of the electric field,

$dE = \dfrac{1}{4\pi\epsilon_0}\dfrac{dQ}{r^2}$

We can restate $dQ$ in terms of the charge density parameter, $dQ = \lambda\,dx$,

$dE = \dfrac{1}{4\pi\epsilon_0}\,\lambda\,\dfrac{dx}{r^2}$

Now we have the electric field expressed with just geometry variables, $dx$ and $r$, where everything else is a constant. 

#### Change of variables

At this point we could express $r$ and $\theta$ in terms of $x$,

$r = \dfrac{x}{\sin \theta}\quad$ and $\quad\theta = \tan^{-1}\dfrac{x}{a}$ 

and create an equation in just $x$. Then we would attempt to integrate $dx$ along the line to find the electric field. But this integration turns out to be a significant pain. Instead, we do something else (I wouldn't expect you to come up with this idea, but some clever person did and passed it along to all of us.) ...

The natural independent variable for this problem is the angle $\theta$. The integration is simplified if we eliminate $x$, $dx$, and $r$, and recast the equation in terms of $\theta$ and $d\theta$. What we are doing here is called a *change of variable*. A change of variable is simply a change of perspective. 
 
Changing the variable means we have to find an expression for $\text d\theta$ in terms of $\text dx$. Here is the triangle we are dealing with,

![Triangle]({{ site.baseurl }}{% link i/line_of_charge2_3a.svg %}){: .centered :}

From the definition of tangent we know $\tan \theta = \dfrac{x}{a}$

This definition includes $x$ and $\theta$. That's a good place to start. We take the derivative of $x$ with respect to $\theta$,

$x = a\,\tan\theta$

$\dfrac{dx}{d\theta} = \dfrac{d}{d\theta} (a\,\tan \theta)$

$\dfrac{dx}{d\theta} = a\, \sec^2 \theta$

$\blueD{dx = a\, \sec^2 \theta \,d\theta}$

This gives us a way to turn $dx$ into $d\theta$. 

The electric field expression includes a $1/r^2$ term. Let's fuss with $r^2$ until we can get it in terms of $\theta$. Looking back at the triangle diagram above, the definition of cosine includes $r$ and $\theta$,

$\cos \theta = \dfrac{a}{r}$

$r = a\,\dfrac{1}{\cos\theta} = a \, \sec \theta$

We square both sides to get an expression for $r^2$,

$\maroonD{r^2 = a^2 \, \sec^2 \,\theta}$

Now we can write $\dfrac{dx}{r^2}$ as,

$\dfrac{dx}{r^2} = \dfrac{\blueD{a\, \sec^2 \theta \,d\theta}}{\maroonD{a^2 \, \sec^2 \theta}}$

Enjoy some cancellation, 

$\dfrac{dx}{r^2} = \dfrac{\blueD{\cancel{a}\, \cancel{\sec^2 \theta} \,d\theta}}{\maroonD{a^{\cancel{2}} \, \cancel{\sec^2 \theta}}}$

and we end up with a way to replace $dx$ and $r$ with $d\theta$ and the constant $a$,

$\dfrac{dx}{r^2} = \dfrac{d\theta}{a}$

This goes into the equation for the electric field contribution from $dQ$,

$dE = \dfrac{1}{4\pi\epsilon_0}\,\lambda \,\dfrac{d\theta}{a}$

With the change of variables, we redraw the diagram in terms of $d\theta$. Here is the before and after view of the change of variable,

![Before change of variable]({{ site.baseurl }}{% link i/line_of_charge2_3.svg %})$\quad \longrightarrow \quad$
![After change of variable]({{ site.baseurl }}{% link i/line_of_charge2_4.svg %})

With the $dx$ perspective, we drag $dx$ from one end of the line to the other. With a $d\theta$ perspective we stand at $q$ and scan our eyes through a range of angles from one end of the line to the other. In the end, its the equivalent integration, but with $d\theta$ the math turns out to be a lot easier.

#### Symmetry

There comes a time in every electrostatics problem where you look for symmetry. We try to squeeze as much juice out of symmetry as possible to simplify the inevitable integration.

In this problem we have left-right symmetry. For every point on the left side of the line there is a corresponding point to the right. (Recall we assumed the test charge $q$ was positioned across from the mid-point of the line.) Let's see what we can do with that.

The next diagram show how point charge $dQ$ generates an electric field vector $dE$ at location $q$. $dQ$ is on the right side of the line, so the little $dE$ vector points down and to the left, along the same line as $r$. The diagram also shows $dE$ broken into two component vectors, $dE_x$ and $dE_y$.

![E-field x and y components]({{ site.baseurl }}{% link i/line_of_charge2_5.svg %}){: .centered :}

* $dE_x$ is the horizontal part of $dE$, parallel to the line of charge.
* $dE_y$ is the vertical part of $dE$, pointing straight away from the line.

Now consider another $dQ$, the same distance $x$ away from the mid-point but this time on the left side. The angles and distances are all the same, just flipped over. We break $dE$ into it's two components just like before,

![dE on the left side of the line, E-field x and y components]({{ site.baseurl }}{% link i/line_of_charge2_5a.svg %}){: .centered :}

Look at the two previous diagrams and notice the direction of the two $dE_x$ vectors. They point in opposite directions. They cancel! For every $dQ$ on the right there is a symmetric $dQ$ on the left. All the $dE_x$'s cancel out. There is no $x$ component to the resulting e-field.

The symmetric $dE_y$'s are identical and they all point in the same downward direction. Therefore all the $dE_y$ components add and reinforce each other. Each symmetric pair of $dQ$ point charges contribute $2$ downward pointing $dE_y$ electric field vectors. 

How big is $dE_y$ compared to $dE$? We scale down the electric field $dE$ by the cosine of the angle $\theta$, 

![dEy is dE scaled by cosine]({{ site.baseurl }}{% link i/line_of_charge2_6.svg %}){: .centered :}

We get the y-component of the electric field if we include the $\cos \theta$ factor in the e-field equation from above,

$dE_y = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{\lambda}{a}\, \cos \theta\,d\theta$

Symmetry summary: By exploiting symmetry we discovered every $dE_x$ cancels out, leaving only the contributions of all the $dE_y$'s. We know the electric field vector points in the downward $y$ direction, straight away from the line.

#### Integration

We are ready to integrate (add up) all the contributions from each $dQ$ to get the total electric field. We sweep the limits of the integral between $\pm\theta$, where $\theta$ is the angle to either end of the line.

$\displaystyle E_y = \int_{-\theta}^{+\theta} \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a} \,\cos \theta \,d\theta$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a} \,\sin\,\theta \,\bigg\| _{-\theta}^{+\theta}$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a}\,(\sin \theta - \sin(-\theta))$

A useful trig identity: $\sin(-\theta) = -\sin \theta$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a}\, 2 \sin \theta$

See that $2$ sneak in there? That's the doubling of the $dE_y$ vector we talked about in the symmetry discussion.

This is the *general* solution for the electric field for any length of line, $L$, at any distance $a$ away from the mid-point of the line. 

## Useful case: really long line of charge

Now we look at the useful case where the line of charge is very long relative to the separation $a$, or $L \gg a$. 

Imagine you stand at $q$ and turn your head to look towards either end of the very long line. The ends of the line are way off in the distance. Your head turns (very nearly) $\pm\,90^{\circ}$ ($\pm\,\pi/2$ radians). These angles become the limits on the integration.

$\displaystyle E_y = \int_{-\pi/2}^{+\pi/2} \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a} \,\cos \theta \,d\theta$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a} \,\sin\,\theta \,\bigg\| _{-\pi/2}^{+\pi/2} = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a}\,(+1 - -1) = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a}\,(2)$

$\boxed{E_y = \dfrac{\lambda}{2\pi\epsilon_0} \dfrac{1}{a}}$

This is a *specific* solution for the electric field for a very long line, at any distance $a$ away from the mid-point of the line. 

Observation: With point charges the field falls off as $1/\text{(distance)}^2$. For a long line of charge the field to the side falls off as $1/\text{(distance)}$ where the distance is $a$.

Predictions: Please take a moment now to go back to the predictions you made at the beginning of the article. How did you do? (If you didn't do so well, don't worry. This is a hard problem. Try again on the next article on a plane of charge.) 

## Summary
{:.no_toc}

The general solution for the electric field near the mid-point of a line of charge,

$\displaystyle E_y = \dfrac{\lambda}{2\pi\epsilon_0} \dfrac{\sin \theta}{a}$

The solution when the line of charge is very long,

$E_y = \dfrac{\lambda}{2\pi\epsilon_0} \dfrac{1}{a}$

$\lambda$ is the linear charge density,

 $\lambda = \dfrac{Q}{L}$ coulombs/meter


### Reference
{:.no_toc}

Kip, A. H. (1969), *Fundamentals of Electricity and Magnetism* (2nd edition, McGraw-Hill), p. 30.