---
layout: page
title:  "Basic electrical quantities: current, voltage, power"
author: Willy McAllister
comments: true
---

Voltage and current are the cornerstone concepts in electricity.  We will create our first mental models for these basic electrical quantities. We will also talk about power, which is what happens when voltage and current act together.

## Charge

The concept of electricity arises from an observation of nature, We observe a force between objects, that, like gravity, acts at a distance. The source of this force has been given the name **charge**. A very noticeable thing about electric force is that it is large, far greater than the force of gravity. Unlike gravity, however, there are two types of electric charge. Opposite types of charge attract, and like types of charge repel. Gravity has only one type: it only attracts, never repels.

## Conductors and insulators

**Conductors** are made of atoms whose outer, or valence, electrons have relatively weak bonds to their nuclei, as shown in this fanciful image of a copper atom. When a bunch of metal atoms are together, they gladly share their outer electrons with each other, creating a "swarm" of electrons not associated with a particular nucleus. A very small electric force can make the electron swarm move. Copper, gold, silver, and aluminum are  good conductors. So is saltwater.

![Copper atom]({{ site.baseurl }}{% link i/2copper_atom.svg %}){:height="160px" width="245px"}

There are also poor conductors. Tungsten—a metal used for light bulb filaments—and carbon—used in graphite form in pencils—are relatively poor conductors because their electrons are less prone to move.

**Insulators** are materials whose outer electrons are tightly bound to their nuclei. Modest electric forces are not able to pull these electrons free. When an electric force is applied, the electron clouds around the atom stretch and deform in response to the force, but the electrons do not depart. Glass, plastic, stone, and air are insulators. Even for insulators, though, electric force can always be turned up high enough to rip electrons away—this is called breakdown. That's what is happening to air molecules when you see a spark.

**Semiconductor** materials have conduction properties that fall inbetween insulators and conductors. They usually act like insulators, but we can make them act like conductors in certain circumstances. The most well-known semiconductor material is Silicon (atomic number $14$). We have figured out how to finely control the insulating and conducting properties of silicon, allowing us to invent modern marvels like computers and mobile phones. The details of how a semiconductor works is governed by the ideas of quantum mechanics.

## Current
**Current** is the flow of charge. 

Charge flows in a current.

<p>
<details>
<summary>Why did you say that twice?</summary>
<p>Notice the careful grammar here. Current <em>is</em> a flow. It is technically more correct to say "charge flows" than "current flows". However, the common habit among engineers is to say, "current flows". This is such an ingrained habit that it is perfectly acceptable engineering chitchat, as long as you remember that it's actually charge that's moving.</p>
</details>
</p>

Current is reported as the number of charges per unit time passing through a boundary. Visualize placing a boundary all the way through a wire. Station yourself near the boundary and count the number of charges passing by. Report how much charge passed through the boundary in one second. We assign a *positive* sign to current corresponding to the direction a *positive* charge would be moving. 

![Current flow]({{ site.baseurl }}{% link i/2current_flow.svg %}){:height="214px" width="389px"}

Since current is the amount of charge passing through a boundary in a fixed amount of time, it can be expressed mathematically using the following equation:

$i = \dfrac{dq}{dt}$

<p>
<details>
<summary>What does the <em>d</em> mean?</summary>

<p>The $d$ in ${dq}/{dt}$ is notation from calculus, it means <em>differential</em>.   
You can think of $d$ as meaning "a tiny change in ..." </p>

<p>For example, the expression $dt$ means *a tiny change in time*. When you see $d$ in a ratio, like $dq/dt$, it means, "a tiny change in $q$ (charge) for each tiny change in $t$ (time)." An expression like $dq/dt$ is called a <a href="https://www.khanacademy.org/math/ap-calculus-ab/derivative-introduction-ab/derivative-as-a-limit-ab/v/calculus-derivatives-1-new-hd-version">derivative</a>, and it is what you study in <a href="https://www.khanacademy.org/math/differential-calculus">Differential Calculus</a>.</p>

<p>In calculus, $d$ represents a tiny amount of change, so small it becomes "infinitesimally small". That is, the amount of change is allowed to go to zero. A little farther down in this article you will see change indicated with a $\Delta$ symbol, as in $\Delta h$ is a change of height. We use $\Delta$ to indicate a large finite change, like $1$ meter or $1$ second. And we use $d$ to indicate tiny zero-sized change. </p>

<p>That's current in a nutshell.</p>
</details>
</p>

#### A few remarks on current

**What carries current in metal?** Since electrons are free to move about in metals, moving electrons are what makes up the current in metals. The positive nuclei in metal atoms are fixed in place and do not contribute to current. Even though electrons have a negative charge and do almost all the work in most electric circuits, we still define a positive current as the direction a *positive* charge would move. This is a very old historical convention.

**Can current be carried by positive charges?** Yes. There are lots of examples. Current is carried by both positive and negative charges in saltwater: If we put ordinary table salt in water, it becomes a good conductor. Table salt is sodium chloride, NaCl. The salt dissolves in water, into free-floating Na$^+$ and Cl$^-$ ions. Both ions respond to electric force and move through the saltwater solution, in opposite directions. In this case, the current is composed of moving atoms, both positive and negative ions, not just loose electrons. Inside our bodies, electrical currents are moving ions, both positive and negative. The same definition of current works: count the number of charges passing by in a fixed amount of time.

**What causes current?** Charged objects move in response to electric and magnetic forces. These forces come from electric and magnetic fields, which in turn come from the position and motion of other charges.

**What is the speed of current?** We don't talk very often about the *speed* of current. Answering the question, "How fast is the current flowing?" requires understanding of a complex physical phenomenon and is not often relevant. Current usually isn't about meters per second, it's about charge per second. More often, we want to know, "How *much* current is flowing?" all the time.

**How *do* we talk about current?** When discussing current, terms like *through* and *in* make a lot of sense. Current flows *through* a resistor; current flows *in* a wire. If you hear, "the current across ...", it should sound funny/odd.

## Voltage 
To get our initial toehold on the concept of voltage, let's look at an analogy:  
### Voltage resembles gravity
For a mass $m$, a change of height $h$ corresponds to a change in potential energy, $\Delta U = mg\Delta h$.  

For a charged particle $q$, a voltage $V$ corresponds to a change in potential energy, $\Delta U = qV$. 

Voltage in an electric circuit is analogous to the product of $g\cdot \Delta h$. Where $g$ is the acceleration due to gravity and $\Delta h$ is the change of height.  

A ball at the top of the hill rolls down. When it is halfway down, it has given up half of its potential energy.

An electron at the top of a voltage "hill" travels "downhill" through wires and elements of a circuit. It gives up its potential energy, doing work along the way. When the electron is halfway down the hill, it has given up or "dropped" half of its potential energy. 

![Voltage analogy]({{ site.baseurl }}{% link i/2voltage_analogy.svg %}){:height="219px" width="823px"}

For both the ball and the electron, the trip down the hill happens spontaneously. The ball and electron move towards a lower energy state all by themselves. On the trip down, there can be things in the way of the ball, like trees or bears to bounce off. For electrons, we guide electrons using wires and allow them to flow through electronic components, doing interesting things along the way. We call this circuit design.

<p>
<details>
<summary>Why use an analogy?</summary>
                    
<p><b>Why don't you just describe voltage in electrical terms?</b></p>

<p>Voltage is a challenging concept. It's really hard to come up with a simple description of voltage in terms of the fundamental electrical forces. I have not come across a <em>simple</em> description that offers that happy "Aha!" moment. Electricity is a somewhat mysterious force, so be patient, let the wonder hang around for a while.</p>

<p>The most common way to get a feeling for voltage is by an analogy. An analogy is strong if it mimics the underlying principle, and if it helps you predict new things. The "voltage is like gravity" analogy in this article is not perfect, but it is among the best. It is a good place to start.</p>
</details>

<details>
<summary>Limits of this analogy</summary>
<p>Analogies can be become strained. The gravity analogy becomes strained because charged particles are not the same as rolling balls in one very important way. The balls do not repel each other, whereas electrons strongly repel each other. A bunch of balls rolling down a hill does not behave exactly the same as a dense crowd of electrons. Once you get deeper into electronics, a good plan is to start thinking about how charges act in terms of the laws of electricity instead of by analogy to gravity. A complete derivation of voltage is developed in the tutorial on Electrostatics.</p>

<p>If you come across an analogy that improves your understanding, by all means, embrace it. But don't love it too much, or too long.</p>
</details>

<details>
<summary>I'm still fuzzy on the concept of voltage</summary>
<p>The concept of current is simpler to understand compared to voltage. If voltage is puzzling, don't be discouraged. Every engineer I know started out with a hazy notion of voltage, including me. Voltage is a concept that takes time to make friends with.</p>

<p>I love how Professor Richard Feynman, the great physicist and educator from Cal Tech, describes electricity in this <a href="https://www.youtube.com/embed/kS25vitrZ6g?rel=0">9-minute clip</a> from a 1983 interview with the British Broadcasting Corporation (BBC). Enjoy it when you have free time.</p>

<!-- (This video appears to have a home at the BBC: ) \n[//]: (http://www.bbc.co.uk/archive/feynman/10702.shtml) (However, it seems to not want to play if you are outside of the U.K.) -->

</details>
</p>

We can express the voltage between two points mathematically as the change of potential energy experienced by a charge:

$V = \dfrac{\Delta U}{q}$

That's an intuitive description of voltage in a nutshell.

## Power
**Power** is defined as the rate energy is transformed or transferred over time, measured in joules/second. Joules/second is also known as *watts*. 

$1 \,\text{watt} = 1\,\text{joule}/\text{second}$

$\text{power} = \dfrac{\text dU}{\text dt}$

An electric circuit is capable of transferring power. That's the warmth you feel when you put your hand near a lightbulb. Current is the rate of flow of charge, and voltage measures the energy transferred per unit of charge. We can insert these definitions into the equation for power:

$\text{power} = \dfrac{\text dU}{\text dt} = \dfrac{\text dU}{\text dq} \cdot \dfrac{\text dq}{\text dt} = v \,i $

Electrical power is the product of voltage times current. in units of watts.

## Summary

These mental pictures for current and voltage will get us started on all sorts of interesting circuits.

If you want to reach beyond this intuitive description of voltage you can read a more formal mathematical description of electric potential and voltage in the Electrostatics tutorial.
