---
layout: article
title:  "Electric potential and voltage"
author: Willy McAllister
comments: true
---

We explore what happens when charges move around (slowly) in an electric field. We learn about the electric form of potential energy, and what it means to *do work* on a charge. 

Some new similar-sounding terms are defined --- electric potential energy, electric potential, and electric potential difference. We end with a formal definition of *voltage*.

This is a highly technical article. If you are new to voltage or just getting started, check out this [video]({{ site.baseurl }}{% link _videos/voltage.md %}) and [article]({{ site.baseurl }}{% link _articles/basic-quantities.md %}#voltage) for an introduction to voltage.

Written by Willy McAllister. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we are headed
{:.no_toc}

We push a test charge around in an electric field to see what happens to its potential energy. 

If we normalize the test charge to a value of $1$, its potential energy is called *potential*. Potential is a property of the location, even if a charged particle is not there. 

If we move a unit test charge between two locations in an electric field its potential changes. The special honorary name for *potential difference* is *voltage*.

---
## Force, work, and potential energy

We start off with a quick review of the physics concepts of force, work, and energy. You can also brush up [here](https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy).

### Force
{:.no_toc}

*Force* is a push or a pull, any interaction that changes the motion of an object. $\vec F = m\,\vec a$. 

### Work
{:.no_toc}

*Work* in physics is "force acting through a distance". We write this with a vector equation, 

$W = \vec F \cdot \vec d$ 

The $\cdot$ dot operator in a vector equation indicates a [dot product](https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/electric-motors/v/the-dot-product). We can also write this using the definition of dot product,

$W =  \|\vec F\| \, \|\vec d\| \, \cos \theta$

$\theta$ is the angle between the $\vec F$ vector and the direction the object moves, represented by $\vec d$.

When you take the dot product of two vectors you end up with a scalar number. That means work is a scalar. It has a magnitude but no direction.

### Energy
{:.no_toc}

*Energy* is "the ability to do work." When an object has energy that means it has the ability to do work.

*Kinetic energy* is energy an object has by virtue of its velocity. An apple has kinetic energy as it falls. It has the ability to do work. When it bonks you on the head it causes a force through a distance.

*Potential energy* is energy an object has by virtue of its location in a field. An apple hanging in a tree has the potential to do work if drops. (It's not doing work right now, but it has the potential.)

{% capture summary %}What is a field?{% endcapture %}  
{% capture details %}  
A *field* is a physical quantity that has a value everywhere in space. As an example, temperature is a field. Every point in space has a temperature. Since temperature is a scalar quantity (has magnitude but does not have direction) it is called a *scalar field*. 

Wind is another type of field. At every point in the atmosphere the air is moving at some speed in some direction. That means each point in space is associated with a vector quantity. That makes wind a *vector field*. Gravity and magnetism are other examples of vector fields, as are [electric fields]({{ site.baseurl }}{% link _articles/electric-field.md %}). 
{% endcapture %}{% include details.html %}

### Work and potential energy are closely related 
{:.no_toc}

As you do work on an object by moving it with a force, potential energy is stored in the object. The increase of potential energy is equal to the work done while pushing the object to its new location.

It's hard to figure out the potential energy of something if it's just sitting in one spot. If we move the object (do work on it), that allows us to discover its potential energy. 

## What is electric potential energy?

An electric charge located in an electric field has *electric potential energy*. Here is our strategy for discovering what that is,

* We put a charged object in an electric field.
* We do some work to make it move. 
* That changes the object's potential energy by an equal amount. (The joules of work become joules of potential energy in the object.)
* The difference in potential energy provides the hint we need to figure out the potential energy of the object when it is standing still.

Let's set up a simple charge arrangement and ask a few questions. 

Begin with two positive charges, separated by some distance $a$.  

![Two positive charges]({{ site.baseurl }}{% link i/electric_potential1.svg %}){: .centered :}

$Q$ and $q$ are positive, so they repel $q$ with a force described by Coulomb's Law,  

$\vec F_q = \dfrac{1}{4\pi\epsilon_0}\dfrac{q\,Q}{a^2}\hat r$

$\hat r$ ("r-hat") is a vector with magnitude $1$ that points in the direction of interest. $\hat r$ is needed to make the right side a vector expression. In this example we know the force vector for $q$ points straight away from $Q$. 

We can also describe the force on $q$ in terms of the electric field created by $Q$. The force on $q$ is $Q$'s electric field multiplied by the size of $q$,

$\vec F_q = q\,\vec E_Q$

The [electric field]({{ site.baseurl }}{% link _articles/electric-field.md %}#electric-field-near-an-isolated-point-charge) everywhere in space surrounding point charge $Q$ is,

$\vec E_Q = \dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{r^2}\hat r$ 

The electric field vectors are [radial lines]({{ site.baseurl }}{% link _articles/electric-field.md %}#visualize-the-electric-field-near-a-point-charge) pointing outward from $Q$.  

![Electric field from a positive charge]({{ site.baseurl }}{% link i/electric_potential3a.svg %}){: .centered :}

At the specific distance $a$ away from $Q$, the electric field is,

$\vec E_{Qa} = \dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{a^2}\hat r$ 

### Doing work in an electric field

Assume big $Q$ is glued to the page, or held in place by a thumbtack so it can't move. Little $q$ is our test charge. We <u>slowly</u> push $q$ toward $Q$ and think about its electric potential energy.

What does it mean to do work in an electric field? You are doing work when you push one charge closer to a repelling charge, (or pull it away from an attracting charge).

We recruit a little dude to emphasize something has to hold $q$ in place so it doesn't move off to the left. The little dude pushes back on $q$ with exactly the repelling force from $Q$. 

![Two positive charges and a little dude]({{ site.baseurl }}{% link i/electric_potential2.svg %}){: .centered :}

Now we'll put the little dude to *work*. 

If the little dude pushes just slightly harder, $q$ will move closer to $Q$. That movement requires *work*. That work is stored as additional potential energy in $q$. 

![Charge q moves from a to b]({{ site.baseurl }}{% link i/electric_potential4.svg %}){: .centered :}

#### How hard is slightly harder?
{:.no_toc}

For electrostatics problems we want *quasi-static motion*. That way we don't have to worry about the kinetic energy of a mass or the magnetic field from a moving charge. 

The force is just barely greater than $q \vec E$, making sure $\vec F_{ext} - q \vec E$ is vanishingly small. 

![External force = -q E]({{ site.baseurl }}{% link i/electric_potential6.svg %}){: .centered :}

$q$ moves without speeding it up, so there is no acceleration and no kinetic energy term. Going this slow means moving $q$ to a new spot will take infinite time. This doesn't bother us because we are just talking about it, not waiting for it to actually happen.  

Let's find out what happens in detail.

**How much work is done moving $q$ from point $a$ to point $b$ in an electric field?**
 
By definition, the amount of work done is force times distance, 

$W = \vec F \cdot \vec d$ 

The electric field from $Q$ provides the force, $\vec F = q \,\vec E$.

$W = q \vec E \cdot \vec d$ 

If we expand the [dot product](https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/electric-motors/v/the-dot-product) it becomes 

$W = q\,\|\vec E\|\, \|\vec d\|\, \cos \theta$

What is the angle between the force vector and the direction of motion? The electric field lines from $Q$ point straight out, and we were told the little dude is pushing $q$ straight at $Q$. The motion is directly aligned with the electric field, so the angle $\theta$ is $0$, and $\cos 0 = 1$. The work is simply the product of magnitudes, 

$W = q\,\|\vec E\|\,\|\vec d\|$ 

The distance moved is $\|\vec d\| = \|\,a - b\,\|$.

What is the electric field strength? This is a bit trickier, because the field strength is different at every point along the path. The closer $q$ gets to $Q$, the greater the repulsion and the harder the little dude has to push to make $q$ move. 

We find out how much work is required at every point along the path and add it all up with an integral. 

Let's create two new variables, $r$ and $dr$, to talk about the trip from $a$ to $b$.

![Define new variables r and dr]({{ site.baseurl }}{% link i/electric_potential5.svg %}){: .centered :}

* Let $r$ be the distance from $Q$ to the current position of $q$. 
* Let $dr$ be a tiny change in distance. $dr$ is so tiny we can consider the electric field (and force) to be constant over this distance.

For our specific example near a point charge, the electric field surrounding $Q$ is,

$\vec E = \dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{r^2}\hat r$ 

The little dude applies an external force in the opposite direction of the electric field, $\vec F_{ext} = -q\,\vec E$.

![External force = -q E]({{ site.baseurl }}{% link i/electric_potential6.svg %}){: .centered :}

The external force required to hold $q$ perfectly still is,

$\vec F_{ext} = -q\,\vec E = -q \, \dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{r^2}\hat r$ 

This is also the force required to move $q$ in [*quasi-static motion*](#how-hard-is-slightly-harder). (Actually the little dude pushes with a tiny bit more force, but the added push is practically zero.)

The force is different for every value of $r$, which means the work needed to move $q$ changes at every $r$. Let's take it one step at a time. Consider the trip from $a$ to $b$ as a sequence of tiny steps of size $dr$. 

Over a tiny distance $dr$ the force changes hardly at all. In fact, $dr$ is so small we consider the force to be constant from the beginning to the end of the movement. 

**What is the tiny bit of work $dW$ needed to move a distance $dr$?** 

From the definition of work,

$dW = -q\,\vec E \cdot \vec{dr}$

Distance $dr$ is so small we assume $\vec E$ doesn't change while the work is being done. We plug in a single value for $\vec E$ at radius $r$,

$dW = -q \,\dfrac{1}{4\pi\epsilon_0}\dfrac{Q}{r^2}\cdot\vec{dr}$

This is the amount of work needed to move $q$ a distance $dr$. And it is also the amount of potential energy $q$ gains from that work. The little dude does the work, $q$ gets the potential energy.

**What is the amount of work needed to move from $a$ to $b$?**

To get the total work going from $a$ to $b$ we set up an integral to add the tiny work amounts,

$\displaystyle W_{ab} = \int_a^b -q\vec E \cdot \vec{dr}$

$\displaystyle W_{ab} = -\dfrac{q\,Q}{4\pi\epsilon_0} \int_a^b \dfrac{1}{r^2} \,dr$

(I've dropped the vector notation because we know everything is in a straight line.)

Can you solve this definite integral?

{% capture summary %}hint: integral of a power of $x${% endcapture %}  
{% capture details %}  
The integral of $x^n$ is, 

$\displaystyle \int x^n dx = \dfrac{x^{n+1}}{n+1}$, for any $n \ne -1$ 

In our example $n$ is $-2$.

$\displaystyle \int_a^b r^{-2} dr = \dfrac{r^{-2+1}}{-2+1}\,\bigg \|\_a^b = \dfrac{r^{-1}}{-1}\,\bigg \|\_a^b = -\dfrac{1}{r}\,\bigg \|_a^b$  

{% endcapture %}{% include details.html %} 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$\displaystyle W_{ab} = -\dfrac{q\,Q}{4\pi\epsilon_0} \left (-\dfrac{1}{r} \right )\bigg \|_a^b$
{% endcapture %}{% include details.html %} 

The work required to bring a charge $q$ from position $a$ to position $b$ near point charge $Q$ is, 

$\displaystyle W_{ab} =  \dfrac{q\,Q}{4\pi\epsilon_0} \left ( \frac{1}{b} - \frac{1}{a}\right )$

If location $b$ is closer to $Q$ than $a$, the work is positive. The little dude does work on $q$. If $b$ is farther away, the work is negative, meaning $q$ does work on the little dude.

### Electric potential energy

Up to this point we've been talking about *work*. Now we equate work to a change of potential energy. The change of potential energy stored in $q$ is *equal* to the work done on $q$.

$\displaystyle \text{electric potential energy change}\_{ab} = \int_a^b -q \vec E \cdot dr$

$\displaystyle \text{electric potential energy change}\_{ab} = \dfrac{q\,Q}{4\pi\epsilon_0} \left ( \frac{1}{b} - \frac{1}{a}\right )$

We can fiddle with this expression and something special emerges.

Multiply out the terms,

$\displaystyle \text{electric potential energy change}_{ab} =  \left (\dfrac{q\,Q}{4\pi\epsilon_0} \frac{1}{b} \right ) - \left (\dfrac{q\,Q}{4\pi\epsilon_0} \frac{1}{a} \right )$

If the whole equation is the change of potential energy, then the two individual terms represent the total potential energy of $q$ when sitting still at each location.

$\dfrac{q\,Q}{4\pi\epsilon_0} \dfrac{1}{a}$ is the starting potential energy of $q$ when it is at location $a$.

$\dfrac{q\,Q}{4\pi\epsilon_0} \dfrac{1}{b}$ is the ending potential energy of $q$ when it is at location $b$.

Give the two terms a variable name so we can talk about them. Let,

$U_r =  \dfrac{q\,Q}{4\pi\epsilon_0} \dfrac{1}{r}$

And we write a change in potential energy as,

$\text{electric potential energy change}_{ab} =  U_b - U_a$

$U_r$ is the *electric potential energy* of charge $q$ when it is distance $r$ away from $Q$.

#### Something to notice
{:.no_toc}

The expression for potential energy change only mentions the end points. It doesn't matter what route you take from  $a$ to $b$. The change of potential energy only depends on where you start and where you end. This is just like taking a hike on a mountainside. Your overall change of elevation depends only on where you started and where you ended.

## Electric potential

Remember how we defined electric field by ["normalizing"]({{ site.baseurl }}{% link _articles/electric-field.md %}#electric-field-defined) electric force? 

$\vec E = \dfrac{\vec F}{q}$

You think of electric field as either, 

* the force per coulomb
* the force when the test charge is $1$

In a similar way we define a new term, *electrical potential*, the normalized version of electric potential energy,

$\text{electric potential} = \dfrac{U_r}{q}$

You can think of electric potential as either,

* the potential energy per coulomb
* the potential energy when the test charge is $1$

We've taken the word "potential" and made it into a noun, instead of an adjective.

Electric <u>potential energy</u> has units of joules.  
Electric <u>potential</u> has units of joules/coulomb.

Electric potential can be viewed as a property of space. Even if you take away $q$, the potential still exists at that location. Electric potential is a scalar field surrounding $Q$. 

## Electric potential near a point charge

What is the electric potential near a point charge? 

Earlier we defined potential energy near a point charge,

$U_r =  \dfrac{q\,Q}{4\pi\epsilon_0} \dfrac{1}{r}$

To find the potential we normalize by dividing both sides by $q$, 

$\dfrac{U_r}{q} =  \dfrac{Q}{4\pi\epsilon_0} \dfrac{1}{r}$

This is the definition of electric potential near a point charge. The potential only depends on $Q$, (there is no $q$ on the right side). You can think of potential as a property of the space surrounding $Q$. 

### Visualize electric potential

Let's visualize what the potential looks like. Potential is a scalar, so there are no vector arrows in this visualization. At any given radius away from $Q$ the potential is the same. It doesn't matter what the direction is. Picture in your mind a sphere with $Q$ at the center. Everywhere on the sphere has the same potential. The sphere is an "equipotential" contour (*equi* = equal, *potential* = potential). On a flat page we draw equipotential contours as circles.

![Equipotential circles around point charge Q]({{ site.baseurl }}{% link i/electric_potential7.svg %}){: .centered :}

The charge in the center is $Q$. The circles are "equipotential contours". Test charge $q$ is shown at two different distances, $a$ and $b$. If $q$ isn't there, the potential still exists.
{: .caption :}

Images like this don't do a great job showing the magnitude falling off as $1/r$. You have to imagine that in your head.

## Electric potential difference

As we did before, we move a test charge from $a$ to $b$, but this time we make $q$ a *unit* test charge and we measure the difference in *potential* instead of potential energy. 

Compute the potential at the starting point and the ending point. Then subtract start from the end,

$\text{electric potential difference}_{ab} =  \dfrac{U_b}{q} - \dfrac{U_a}{q}$

## Voltage

Electric potential difference gets a very special name. 

Electric potential difference is called *voltage*.

The voltage between points $a$ and $b$ is,

$V\_{ab} = \text{electric potential difference}_{ab} =\dfrac{U_b}{q} - \dfrac{U_a}{q}$

This is the formal definition of voltage. 

Voltage is measured it in units of *volts*, to honor the inventor of the battery. 

### Voltage near a point charge

If the potential field is created by a point charge, the voltage between points $a$ and $b$ is,

$V\_{ab} = \dfrac{U_b}{q} - \dfrac{U_a}{q}$

$V\_{ab} = \dfrac{Q}{4\pi\epsilon_0} \dfrac{1}{b} - \dfrac{Q}{4\pi\epsilon_0} \dfrac{1}{a}$

$V\_{ab} = \dfrac{Q}{4\pi\epsilon_0} \left (\dfrac{1}{b} - \dfrac{1}{a} \right )$

These are the same equations as potential energy, but $q$ doesn't appear on the right side.

## Concept check
#### Problem 1: Voltage near a point charge
{:.no_toc}

Let point charge $Q = 1\,\text{nC}$. 

This is about how much charge you accumulate if you rub your feet on carpet on a dry day.

**What is the voltage (the potential difference) between a point $1\,\text{cm}$ away and $3\,\text{cm}$ away from $Q$?**

$\dfrac{1}{4\pi\epsilon_0} = 9\times 10^9 \,\text{n\-m}^2/\text C^2$

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
The point farther away is at a lower potential, so we'll call that $a$.

$a = 0.03\,\text m$, $b = 0.01\,\text m$

$V\_{ab} = \dfrac{Q}{4\pi\epsilon_0} \left (\dfrac{1}{b} - \dfrac{1}{a} \right )$

$V\_{ab} = (1\times 10^{-9}\,\text{C}) \cdot (9 \times 10^9\,\text{n\-m}^2/\text C^2) \cdot \left (\dfrac{1}{0.01\,\text m} - \dfrac{1}{0.03\,\text m} \right )$  

$V\_{ab} = (1\times 10^{-9}\,\text{C}) \cdot (9 \times 10^9\,\text{n\-m}^2/\text C^2) \cdot (100 - 33.3)$ 

$V\_{ab} = (9) \cdot (66.6)$

$V\_{ab} = 600\,\text V$
{% endcapture %}{% include details.html %} 

The voltage is quite high. Imagine how high it gets as you reach to touch a door knob. Redo the calculation as your finger gets closer to the metal knob.

#### Problem 2: Dimensional analysis
{:.no_toc}

**Show that volts is equivalent to joules per coulomb.**

Use the dimensions in the potential equation as a starting point.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}    
$\text{volts} = (\text{C}) \cdot (\text{n\-m}^2/\text C^2) \cdot \left (\dfrac{1}{\text m} - \dfrac{1}{\text m} \right )$

$\text{volts} = (\cancel{\text{C}}) \cdot (\text{n\-m}^{\cancel 2}/\text C^{\cancel 2}) \cdot \left (\dfrac{1}{\cancel{\text m}} - \dfrac{1}{\cancel{\text m}} \right )$

$\text{volts} = \dfrac{\text{n-m}}{\text C}$ or $\dfrac{\text J}{\text C}$
{% endcapture %}{% include details.html %} 

#### Problem 3: Work near a point charge
{:.no_toc}

If you know the electric potential in some region of space and you are asked to find the work required to move a charged object between two locations, 

1. Find the potential at the start and end positions.
2. Subtract the starting potential from the ending potential to get the difference. 
3. Multiply the potential difference by the charge of the introduced object $q$.

Introduce test charge $q = 2 \,\text{nC}$ in the vicinity of $Q$. 

**How much work does it take to move $q$ from $1\,\text m$ away to $1\,\text{mm}$ away from $Q$?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
The general definition of work in an electric field is,

$W_{ab} = \displaystyle{\int_a^b} -qE \cdot dr$

For an electric field created by a point charge the work is,

$W_{ab} =  \dfrac{q\,Q}{4\pi\epsilon_0} \left ( \dfrac{1}{b} - \dfrac{1}{a}\right )$

$W_{ab} =  2\times 10^{-9} \cdot 1\times 10^{-9}\cdot 9 \times 10^9 \cdot \left ( \dfrac{1}{0.001\,\text m} - \dfrac{1}{1\,\text m}\right )$

$W_{ab} =  18\times 10^{-9} \cdot \left ( 1000 - 1 \right )$

$W_{ab} =  18\times 10^{-6} \,\text J$

{% endcapture %}{% include details.html %} 

## Summary
{:.no_toc}

The terms we've been tossing around probably all sound alike. It's hard to keep it straight, and it drives most of us nuts. 
 
* **Electric potential energy** is a property of a charged object, by virtue of its location in an electric field. Potential energy depends on both $Q$ and $q$. Electric potential energy exists only if a charged object is occupying the location. 
* **Electric potential** is normalized potential energy. The test charge $q$ is assumed to have a value of $1$. Potential is a property of space. A location has electric potential even if there is no charged particle there.
* **Electric potential difference** is the work needed to move a unit test charge from one location to another location in an electric field. Electric potential difference is the change of potential energy experienced by a unit test charge.
* **Voltage** is another name for electric potential difference.

The voltage near a point charge $Q$ is,

$V\_{ab} = \dfrac{Q}{4\pi\epsilon_0} \left (\dfrac{1}{b} - \dfrac{1}{a} \right )$


In this article the electric field comes from a point charge, but the definitions are valid for any electric field. 

### References
{:.no_toc}

Kip, A. H. (1969), *Fundamentals of Electricity and Magnetism* (2nd edition, McGraw-Hill)

## Addendum (advanced)

### Absolute voltage

We defined voltage in terms of the difference in electric potential at two locations, the potential difference between here and there. Voltage is the difference in potential between two points. 

Is there a notion of an *absolute* potential difference (an absolute voltage)? Is there an answer to, "Tell me the voltage <u>here</u> without reference to some other point."? Yes there is, in a sense. 

The convention is to say $v=0$ at infinity. With this convention a meaning for absolute voltage emerges. Starting at location $a = \infty$, the voltage at a location $r$ away from a point charge becomes,

$\text{V}_{r} = \left (\dfrac{Q}{4\pi\epsilon_0} \dfrac{1}{r} \right ) - \cancel{\left (\dfrac{Q}{4\pi\epsilon_0} \dfrac{1}{\infty} \right )}$

The second term goes to zero. This make the absolute voltage at a location the external work required to bring a unit test charge "up from" infinity to location $r$, 

$\text{V}_{r}  = \dfrac{Q}{4\pi\epsilon_0} \dfrac{1}{r}$

This isn't magic. It's just a turn of phrase or verbal sleight-of-hand. Absolute voltage is the same as saying the voltage at location $r$ is the potential difference between $r$ and infinity. It works as long as everyone in the conversation shares the assumption that the reference point for zero voltage is out at infinity. It is always safe to stick with the definition: voltage is a potential difference.

Caution: The concept of absolute voltage is rarely used. You measure voltages with your voltmeter. It probably didn't come with a black probe cable that reaches to infinity. It's best to have two points in mind when talking about voltage. 

### How much is a volt?

Something is missing from this article. There are no details on the size of a volt. The *volt* is an "[SI derived unit]({{ site.baseurl }}{% link _articles/standard-electrical-units.md %}#all-the-rest-are-derived-units)". The size of a volt is derived from the definitions of the ampere and the watt. See the article [Defining the standard electrical units]({{ site.baseurl }}{% link _articles/standard-electrical-units.md %}#volt).
