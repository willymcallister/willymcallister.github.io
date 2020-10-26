---
layout: article
title:  "Line of charge - test charge to the side"
author: Willy McAllister
comments: true
---

We look at the electric field around a line of charge.   

![Line of charge with a test charge off to the side]({{ site.baseurl }}{% link i/line_of_charge2_1.svg %}){: .centered :}

Test charge $q$ is off to the side of the line. This time we find the electric field instead of the electric force. 

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Related articles

* [Electric field]({{ site.baseurl }}{% link _articles/electric-field.md %})

---

## Predictions

Before diving in, I would like you to predict how this will turn out. Assume the test charge is positioned across from the mid-point of a line of charge. 

P1. What direction is $q$ being pushed or pulled by the line of charge?  

P2. What direction does the electric field vector point at the location of test charge $q$?  

P3. Describe any symmetry we could use during the derivation.   

P4. In the previous example the test charge was off the end of the line. We found the force fell off as $1/\text{distance}^2$. For this example, with the test location to the side, will the electric field fall off faster or slower than $1/\text{distance}^2$? 

P5. If you feel brave, make a guess at a function.  

## Electric field near a line of charge

**What is the electric field at location $q$?**

We begin by adding names to some distances and making a few assumptions.

![Line of charge with a test charge off to the side]({{ site.baseurl }}{% link i/line_of_charge2_2.svg %}){: .centered :}

Assume the line is length $L$, and the total charge on the line is $Q$.  
Assume $Q$ is evenly distributed along the line (no gaps or clumps).  
Assume test charge $q$ is distance $a$ away from the line, opposite the mid-point.  
Assume both $q$ and $Q$ are positive charges. 

{% capture summary %}is $q$ needed?{% endcapture %}  
{% capture details %}  
This question is about the electric field at the location of test charge $q$. Electric field is defined as the *force per unit charge* at a location in space. So it does not matter what the value of $q$ is, since it is normalized out in the definition. Technically, for an electric field question, we could remove $q$ and just think about the electric field at the point in space where $q$ was. 

When I do e-field problems I like to include $q$. It helps me visualize the e-field if there's an imaginary charge at the location. I glue $q$ on the end of a wooden stick and hold it in the e-field. I feel the force pushing on $q$. 

You can do the problem either way, with or without $q$.
{% endcapture %}{% include details.html %} 

We start by finding a general expression for the electric field for any length $L$ and any separation $a$. Then we will look at a particularly useful case where the line is very long relative to the distance to the test charge, $L \gg a$.

### Strategy

The theoretical tool we have is Coulomb's Law. However, Coulomb's Law operates on two point charges. In this problem one of the charges is distributed in a line shape. What do we do now? The approach we take for this and other electrostatic problems is,

* Describe the distributed charge as a collection of individual point charges.
* Figure out the contribution of each point charge to the electric field.
* Shamelessly exploit geometric symmetry to simplify the problem.
* It is common to find the direction and magnitude separately.
* To find the magnitude, add up (integrate) all the contributions from every point charge.   

### Charge density

Before diving in, let's take a moment to define a useful parameter, the *linear charge density*. 

The total charge on the line is $Q$. How much charge is there in $1$ meter of line? That would be the total charge divided by the length of the line,

 $\lambda = \dfrac{Q}{L}$ coulombs/meter

($\lambda$ lambda is the lowercase Greek "l". It stands for length or linear.)

How would you find the charge in a given length of line? Multiply $\lambda$ by the length in meters,

$q_\text{ in length x} = \lambda \,x$ 

Example: If a line is $5$ cm long and contains $2\times 10^{-9}$ coulomb $(2\,\text{nC})$,

**What is the linear charge density?** 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Linear charge density, $\lambda = q/x$

$\lambda = 2\times 10^{-9} / 0.05 = 4 \times 10^{-8} = 40$ nC/m. 
{% endcapture %}{% include details.html %} 

**How much charge is contained in $2$ mm of the line?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Flip the charge density equation around, $q = \lambda \, x$

$q_{\text{ in } 1\text{ mm}} = 40 \times 10^{-9} \times 0.002 = 8 \times 10^{-11} = 80$ pC 
{% endcapture %}{% include details.html %} 

### Electric field from a line of charge

We model the line as a collection of point charges by breaking it into tiny little sections. We make each section so small we can consider it to be a point charge for the purposes of Coulomb's Law. 

Let's create some more variables to describe the location of a point charge named $dQ$,

![Line of charge with a test charge to the side]({% link i/line_of_charge2_3.svg %}){: .centered :}

* $dQ$ is a tiny bit of charge contained in a tiny length of the line, $dx$.  
* $a$ is the distance from the line to the location of test charge $q$.  
* $x$ is the distance from $a$ to $dQ$. 
* $r$ is the distance from $dQ$ to the test charge.
* $\theta$ is the angle between $a$ and $r$.
* $dE$ is the tiny bit of electric field contributed by $dQ$. It points the same direction as $r$.

Now that we've named everything we can think of, we are ready to attack the problem.

**What is the electric field at the location of $q$ from a small chunk of charge, $dQ$?** 

The general form of the [electric field]({% link _articles/electric-field.md %}) from a point charge $q_p$ is,

$E = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{q_p}{r^2}$

{% capture details %}
Electric field is a vector quantity, so technically these equations should use vector notation. For simplicity, we'll work on magnitude and direction separately.
{% endcapture %}
{% capture summary %}vector notation{% endcapture %}{% include details.html %}

Each point charge $dQ$ along the line generates an electric field with magnitude $dE$,

$dE = \dfrac{1}{4\pi\epsilon_0}\dfrac{dQ}{r^2}$

We can express $dQ$ in terms of the overall charge density of the line times the length of the little chunk of line it occupies, 

$dQ = \lambda\,dx$

$dE = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{\lambda\,dx}{r^2}$

Now we have the electric field expressed with just geometry variables, $dx$ and $r$. 

At this point it is possible to express <span class="tooltip">$r$ in terms of $x$ <span class="tooltipcontent"><img src="{% link i/line_of_charge2_3.svg %}" alt="Line of charge with a test charge to the side"></span></span>,

$r = \dfrac{x}{\sin \theta}$ 

This is nice because it gives us an equation in just $x$ and $dx$,

$dE = \dfrac{1}{4\pi\epsilon_0}\,\dfrac{\lambda\,dx}{\left (\dfrac{x^2}{\sin^2 \theta} \right )}$

Now that we have a single variable we can attempt to integrate both sides of the equation along the line to find the total electric field. But, as you might imagine, this integral turns out to be a major pain. Instead, we do something else (I wouldn't expect you to come up with this idea, but some clever person did and passed it along to all of us.) ...

#### Change of variables

The natural independent variable for this problem is the angle $\theta$. The integration is simplified if we recast $x$ and $dx$ in terms of $\theta$ and $d\theta$. This is called a *change of variable*. A change of variable is a change of perspective. 
 
To perform the change variables we have to find an expression for $\text d\theta$ in terms of $\text dx$. Here is the triangle we are dealing with,

![Triangle]({{ site.baseurl }}{% link i/line_of_charge2_3a.svg %}){: .centered :}

From the definition of tangent (opposite over adjacent) we know $\tan \theta = \dfrac{x}{a}$ 

(I picked the tangent function because it includes both $x$ and $\theta$.) 

$x = a\,\tan\theta$

Take the derivative of both sides with respect to $\theta$,

$\dfrac{dx}{d\theta} = \dfrac{d}{d\theta} (a\,\tan \theta)$

$\dfrac{dx}{d\theta} = a\, \sec^2 \theta$

$\blueD{dx = a\, \sec^2 \theta \,d\theta}$

This is how we turn $dx$ into $d\theta$. 

The electric field expression includes a $1/r^2$ term. Let's fuss with $r^2$ until we can get it in terms of $\theta$. Looking at the triangle diagram again,

![Triangle]({{ site.baseurl }}{% link i/line_of_charge2_3a.svg %}){: .centered :}

The definition of cosine (adjacent over hypotenuse) is, $\cos \theta = \dfrac{a}{r}$

$r = a\,\dfrac{1}{\cos\theta} = a \, \sec \theta$

We square both sides to get an expression for $r^2$,

$\maroonD{r^2 = a^2 \, \sec^2 \,\theta}$

This lets us write $\dfrac{dx}{r^2}$ as,

$\dfrac{dx}{r^2} = \dfrac{\blueD{a\, \sec^2 \theta \,d\theta}}{\maroonD{a^2 \, \sec^2 \theta}}$

Enjoy some cancellation, 

$\dfrac{dx}{r^2} = \dfrac{\blueD{\cancel{a}\, \cancel{\sec^2 \theta} \,d\theta}}{\maroonD{a^{\cancel{2}} \, \cancel{\sec^2 \theta}}}$

and we end up with a way to replace $dx$ and $r^2$ with $d\theta$ and the constant $a$,

$\dfrac{dx}{r^2} = \dfrac{d\theta}{a}$

The electric field from $dQ$ that started as,

$dE = \dfrac{1}{4\pi\epsilon_0}\,\lambda\,\dfrac{dx}{r^2}$ 

becomes, 

$dE = \dfrac{1}{4\pi\epsilon_0}\,\lambda \,\dfrac{d\theta}{a}$

After the change of variables, we redraw the diagram in terms of $d\theta$. Here is the diagram before and after the change of variable,

![Before change of variable]({{ site.baseurl }}{% link i/line_of_charge2_3.svg %})$\quad \longrightarrow \quad$
![After change of variable]({{ site.baseurl }}{% link i/line_of_charge2_4.svg %})

With the $dx$ perspective, we stand at $dx$ and drag it from one end of the line to the other. With a $d\theta$ perspective we stand at $q$ and scan our eyes through a range of angles from one end of the line to the other. In the end, its the equivalent integration, but with $d\theta$ the math turns out to be a lot easier.

#### Symmetry

There comes a time in every electrostatics problem where you look for symmetry. We try to squeeze as much juice out of symmetry as possible to simplify the inevitable integration.

In this problem we have left-right symmetry. For every point on the left side of the line there is a corresponding point to the right. (Recall we assumed the test charge $q$ was positioned across from the mid-point of the line.) Let's see what we can do with that.

The next diagram show how point charge $dQ$ generates an electric field vector $dE$ at location $q$. $dQ$ is shown on the right side of the line, so the little $dE$ vector points down and to the left, along the same line as $r$. The diagram also shows $dE$ broken into two component vectors, $dE_x$ and $dE_y$.

![E-field x and y components]({{ site.baseurl }}{% link i/line_of_charge2_5.svg %}){: .centered :}

* $dE_x$ is the horizontal part of $dE$, parallel to the line of charge.
* $dE_y$ is the vertical part of $dE$, pointing straight away from the line.

Now consider another $dQ$, the same distance $x$ away from the mid-point but on the left side. The angles and distances are the same, just flipped over. We break $dE$ into its two components just like before,

![dE on the left side of the line, E-field x and y components]({{ site.baseurl }}{% link i/line_of_charge2_5a.svg %}){: .centered :}

Look at the two previous diagrams and notice the magnitude and direction of the two $dE_x$ vectors. They have the same magnitude, but they point in opposite directions. They cancel! For every $dQ$ on the right there is a symmetric $dQ$ on the left. All the $dE_x$'s cancel out. By symmetry, we figured out the total electric field has no $x$-component.

Now look back at the $y$-components. The $dE_y$'s from the left and right sides are are identical. They have the same magnitude and point in the same downward direction. Therefore the symmetric $dE_y$'s reinforce each other. Each left and right $dQ$ pair contributes $2$ downward $dE_y$ electric field vectors. 

How big is $dE_y$? How much of $dE$ points in the $y$ direction? We scale down $dE$ by the cosine of angle $\theta$,

![dEy is dE scaled by cosine]({{ site.baseurl }}{% link i/line_of_charge2_6.svg %}){: .centered :}

We know the $x$-component is $0$, leaving only a $y$-component. We know the $y$-component has a cosine scale factor. This changes our e-field expression from,

$dE = \dfrac{1}{4\pi\epsilon_0}\,\lambda \,\dfrac{d\theta}{a}$

to

$dE_y = dE\,\cos \theta = \dfrac{1}{4\pi\epsilon_0}\,\lambda\, \dfrac{\cos \theta\,d\theta}{a}$

Symmetry summary: By exploiting symmetry we discovered every $dE_x$ cancels out, leaving only the contributions of all the $dE_y$'s. We know the electric field vector points down, in the $y$ direction, straight away from the line.

#### Integration

At last we are ready to add up (integrate) all the contributions from each $dQ$ to get the total electric field. The limits of the integral sweep between $\pm\theta$. If you stand at location $q$, $\theta$ is the angle you turn your head to look at either end of the line.

![Theta is the limit of integration]({{ site.baseurl }}{% link i/line_of_charge2_7.svg %}){: .centered :}

$\displaystyle E_y = \int_{-\theta}^{+\theta} \dfrac{1}{4\pi\epsilon_0} \lambda\,\dfrac{\cos \theta \,d\theta}{a}$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a} \,\int_{-\theta}^{+\theta} \cos \theta \,d\theta$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a} \,\sin\,\theta \,\bigg\| _{-\theta}^{+\theta}$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a}\,[\,\sin \theta - \sin(-\theta)\,]$

Here's a handy trig identity to help with the sine subtraction: $\sin(-\theta) = -\sin \theta$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a}\,[\,\sin \theta - (-\sin \theta)\,]$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a}\, 2 \sin \theta$

This is the *general* solution for the electric field for any length of line, $L$, at any distance from the mid-point of the line, $a$. 

See that $2$ sneak in there? That's the doubling of the $dE_y$ vector we talked about in the symmetry discussion.

## Useful case: a really long line of charge

Now we look at the useful case where the line of charge is very long relative to the separation, or $L \gg a$. 

Stand at $q$ and turn your head either way to look toward the ends of the very long line. The ends are way off in the distance. Your head turns (very nearly) $\pm\,90^{\circ}$ ($\pm\,\pi/2$ radians). These angles become the limits of the integration.

$\displaystyle E_y = \int_{-\pi/2}^{+\pi/2} \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a} \,\cos \theta \,d\theta$

$\displaystyle E_y = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a} \,\sin\,\theta \,\bigg\| _{-\pi/2}^{+\pi/2} = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a}\,(+1 - -1) = \dfrac{1}{4\pi\epsilon_0} \dfrac{\lambda}{a}\,(2)$

$\boxed{E_y = \dfrac{\lambda}{2\pi\epsilon_0} \dfrac{1}{a}}$
{: .colorbox :}

This is the *specific* solution for the electric field from a very long line, at any distance $a$ away from the mid-point. 

Notice: For a long line of charge the electric field to the side falls off as $1/\text{(distance)}$ where the distance is $a$.

Predictions: Take a moment now to go back to the predictions you made at the beginning. How did you do? (If you didn't do so well, don't worry. This is a hard problem. Keep trying ... The next article is about a [plane of charge]({{ site.baseurl }}{% link _articles/plane-of-charge.md %}).) 

## Summary
{:.no_toc}

The general solution for the electric field near the mid-point of a line of charge is,

$\displaystyle E_y = \dfrac{\lambda}{2\pi\epsilon_0} \dfrac{\sin \theta}{a}$

$a$ is the distance away from the midpoint of the line.

$\theta$ is the angle from the point of interest to either end of the line.

$\lambda$ is the linear charge density of the line, $\lambda = \dfrac{Q}{L}$ coulombs/meter.


If the line of charge is very long the solution is,

$E_y = \dfrac{\lambda}{2\pi\epsilon_0} \dfrac{1}{a}$


 The electric field to the side of a long line falls of as $\dfrac{1}{a}$.

 We used our wits to exploit the symmetry of the problem to simplify the integration and decide the direction of the electric field.


### Reference
{:.no_toc}

Kip, A. H. (1969), *Fundamentals of Electricity and Magnetism* (2nd edition, McGraw-Hill), p. 30.