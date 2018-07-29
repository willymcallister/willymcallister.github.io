---
layout: article
title:  "Basic electrical quantities: charge, current, voltage"
author: Willy McAllister
comments: true
---

Charge is the stuff electricity is made of. Voltage and current are the cornerstone concepts in electricity. 

We create our first mental pictures of current and voltage. 

Power happens when voltage and current act together.

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----
### Where we are headed
{:.no_toc}

Current is the flow of charge. It is similar to the flow of water in a river or garden hose. The key difference is there is one type of water but there are two types of charge, moving in opposite directions. 

Voltage is the honorary name of *electric potential difference*. Voltage is similar to the change of potential energy that happens to a mass when it's lifted or lowered. 

Electrical power is the product of voltage and current, $p = i \times v$, in units of watts.

----

## Charge

Our awareness of electric charge comes from carefully observing nature. We observe a force between objects that, like gravity, seems to act at a distance. Even though the force is invisible, we know it is there. We made up a name for what causes this force. We call it *charge*. 

If you fiddle around with static electricity you will eventually conclude there are two types of electric charge. Opposite charges attract, and like charges repel. That is the most basic rule of electricity. Compare this to gravity. There is only one type of gravity: it only attracts. Gravity never repels. Compared to our daily experience with gravity, electricity can seem kind of weird. 

## Conductors, insulators, semiconductors

**Conductors** are atoms whose outer electrons (valence electrons) have relatively weak bonds to their nuclei, as shown in this fanciful image of a copper atom. When a bunch of metal atoms are together, they gladly share their outer electrons with each other. Metals have a cloud or "swarm" of electrons not associated with a particular nucleus. A very small electric force can make the electron swarm move around in a current. Copper, gold, silver, and aluminum are good conductors.

![Copper atom]({{ site.baseurl }}{% link i/2copper_atom.svg %}){: .centered :}{:height="160px" width="245px" :}

There are also relatively poor conductors. Tungsten — a metal used for the filament in an incandescent light bulb — is a relatively poor conductor compared to copper. When you put a voltage on a tungsten filament it resists the flow of current and gets really hot. Carbon in graphite form used in pencils is a relatively poor conductor. The electrons in these materials are less likely to escape from an atom. (An exotic form of carbon called graphene turns out to be a superb conductor).

**Insulators** are materials whose outer electrons are tightly bound to their nuclei. Modest voltages can't pull electrons free. When a voltage is applied to an insulator the electron clouds around the atoms stretch and deform, but the electrons do not depart. Glass, plastic, stone, and air are insulators. Even for insulators, though, electric force can always be turned up high enough to rip electrons away—we call this breakdown. That's what happens to air molecules when you see a spark.

**Semiconductor** materials have conduction properties falling between insulators and conductors. Pure semiconductors act like insulators. We can make them act like conductors by adding faint amounts of impurity atoms, and applying voltage. The most well-known semiconductor material is Silicon (atomic number $14$, right below Carbon). We know how to finely control the insulating and conducting properties of silicon, enabling the invention of modern marvels like computers and mobile phones. The atomic-level details of how semiconductor devices work is governed by the theories of quantum mechanics.

## Current

Current is the flow of charge. 

Charge flows in a current.

<details>
<summary>Why did you say that twice?</summary>
<p>Notice the careful grammar here. Current <em>is</em> a flow. It is technically more correct to say "charge flows" than "current flows". However, the common habit among engineers is to say, "current flows". This is such an ingrained habit that it is perfectly acceptable engineering chitchat, as long as you remember that it's actually charge that's moving.</p>
</details>

When we give a number for current, it is reported as the number of charges per unit time passing through a boundary. To visualize current, imagine placing a boundary all the way across a wire. Station yourself near the boundary and count the number of charges passing by. Count how much charge passed through the boundary in one second, and report that as the current. We say the direction of current is the direction a *positive* charge would be moving. 

![Current flow]({{ site.baseurl }}{% link i/2current_flow.svg %}){: .centered :}

{% capture summary %}Current direction and NEETS{% endcapture %}  
{% capture details %}  
This definition of current direction often causes confusion. It is opposite the direction electrons move. There are some training programs (for example the U.S. Navy NEETS program) that use the convention where current flow is defined as electron motion, but we don't use that here at Spinning Numbers, nor does most of the electrical engineering world. More on this later when we talk about [conventional current direction]({{ site.baseurl }}{% link _videos/conventional-current.md %}).  
{% endcapture %}{% include details.html %} 

Since current is the amount of charge passing through a boundary in some period of time, it can be expressed in general terms using this notation from calculus,

$i = \dfrac{dq}{dt}$

The term "electric current" was first used by André-Marie Ampère. The symbol for current is '$i$'. It comes from the first letter of the French phrase *intensité du courant électrique*.

<details>
<summary>What does the $d$ mean?</summary>

<p>The $d$ in ${dq}/{dt}$ is notation from calculus, it means <em>differential</em>. You can think of $d$ as meaning "a tiny change in ..." </p>

<p>For example, the expression $dt$ means <em>a tiny change in time</em>. When you see $d$ in a ratio, like $dq/dt$, it means, "a tiny change in $q$ (charge) for each tiny change in $t$ (time)." An expression like $dq/dt$ is called a <a href="https://www.khanacademy.org/math/ap-calculus-ab/derivative-introduction-ab/derivative-as-a-limit-ab/v/calculus-derivatives-1-new-hd-version">derivative</a>, and it is what you study in <a href="https://www.khanacademy.org/math/differential-calculus">Differential Calculus</a>.</p>

<p>In calculus, $d$ represents a small amount of change, so small it approaches $0$. A little farther down in this article you will see change indicated with a $\Delta$ symbol, as in $\Delta h$ is a change of height. We use $\Delta$ to indicate a large finite change, like $1$ meter or $1$ second. And we use $d$ to indicate tiny nearly-zero-sized change. </p>

</details>

That's current in a nutshell.

### A few remarks about current
{:.no_toc}

**What carries current in metal?** Since electrons are free to move about in metals, moving electrons are the current in metal. The positive nuclei in metal atoms are fixed in place and do not contribute to current. Even though electrons do almost all the work in most electric circuits, we still say a positive current as the direction a *positive* charge would move. This is a very old historical convention. It takes some getting used to, but you can do it.

**Can current be made of positive charges?** Yes. There are lots of examples. Current is carried by both positive and negative charges in saltwater: If we put ordinary table salt in water, it becomes a good conductor. Table salt is sodium chloride, NaCl. The salt dissolves in water into free-floating Na$^+$ and Cl$^-$ ions. Both ions respond to electric force and move through the saltwater solution in opposite directions. In this case, the current is composed of moving atoms, both positive and negative ions, not just free electrons. The electrical currents inside our bodies are moving ions. The same definition of current works: count the number of charges passing by in a fixed amount of time.

**What causes current?** Charged objects move in response to electric and magnetic forces. These forces come from electric and magnetic fields, which in turn come from other nearby charges.

**What is the speed of current?** We don't talk very often about the *speed* of current. Answering the question, "How fast is the current flowing?" is really complicated and rarely relevant. Current isn't about meters per second, it's about charge per second. We want to know, "How *much* current is flowing?", not "how fast". When we talk about how fast something moves in electricity, we are thinking how fast a *disturbance* moves through a wire or the air, not how fast the electrons themselves are moving. Disturbances travel near the speed of light. It's like when you see a ripple moving across a pond. The ripple disturbance moves fast, but the water hardly moves at all. 

**How *should* we talk about current?** When discussing current, terms like *through* and *in* make sense. Current flows *through* a resistor; current flows *in* a wire. If you hear, "the current across ...", it should sound funny/odd. We use the words through and across with voltage, not current. If you hear, "the speed of the current", that should sound funny, too.

## Voltage 

To get our initial toehold on the concept of voltage, we create an analogy, 

**Voltage resembles gravity.**

Here's how gravitational potential energy works:  
For a mass $m$, a change of height $h$ corresponds to a change in potential energy, $\Delta U = mg\Delta h$.  

Here's how voltage works:  
For a charged particle $q$, a voltage $V$ corresponds to a change in potential energy, $\Delta U = qV$. 

Voltage in an electric circuit is analogous to the product of $g\cdot \Delta h$. Where $g$ is the acceleration due to gravity and $\Delta h$ is the change of height.  

A ball at the top of the hill rolls down. When it is halfway down, it has given up half of its potential energy.

An electron at the top of a voltage "hill" travels "downhill" through wires and elements of a circuit. It gives up its potential energy, doing work along the way. When the electron is halfway down the hill, it has given up or "dropped" half of its potential energy. 

![Voltage analogy]({{ site.baseurl }}{% link i/2voltage_analogy.svg %}){: .centered :}{:height="219px" width="823px" :}

For both the ball and the electron the trip down the hill happens spontaneously. The ball and electron move to a lower energy state all by themselves. On the trip down there can be things in the way of the ball, like trees or bears to bounce off. We guide electrons using wires and allow them to flow through electronic components, doing interesting things along the way. We call this circuit design.

<details>
<summary>Why use an analogy?</summary>
                    
<p><strong>Why don't you just describe voltage in science terms?</strong></p>

<p>Voltage is a challenging concept. It's really hard to come up with a simple description of voltage in terms of the fundamental electrical forces. I have not come across a <em>simple</em> description that offers that happy "Aha!" moment. Electricity is a somewhat mysterious force, so be patient, let the wonder hang around for a while.</p>

<p>The most common way to get a feeling for voltage is by an analogy. An analogy is strong if it mimics the underlying principle, and if it helps you predict new things. The "voltage is like gravity" analogy in this article is not perfect, but it is among the best. It is a good place to start.</p>
</details>

<details>
<summary>Limits of this analogy</summary>
<p>Analogies can be become strained. The gravity analogy becomes strained because charged particles are not the same as rolling balls in one very important way. The rolling balls do not repel each other, but electrons strongly repel each other. Balls rolling down a hill do not behave exactly the same as a crowd of electrons.</p> 

<p>As you get deeper into electronics, you will begin thinking about voltage in terms of the laws of electricity instead of an analogy to gravity. A complete derivation of voltage is is pretty hard. We talk about it at the end of the [Electrostatics]({{ site.baseurl }}{% link _topics/topic-electrostatics.md %}) section.</p>

<p>If you come across an analogy that improves your understanding, by all means, embrace it. But don't love it too much, or too long.</p>
</details>

<details>
<summary>I'm still fuzzy on the concept of voltage</summary>
<p>The concept of current is simpler to understand compared to voltage. If voltage is puzzling, don't be discouraged. Every engineer I know started out with a hazy notion of voltage, including me. Voltage is a concept that takes time to make friends with.</p>

<p>I love how Professor Richard Feynman, the great physicist and educator from Cal Tech, describes electricity in this <a href="https://www.youtube.com/embed/kS25vitrZ6g?rel=0">9-minute clip</a> from a 1983 interview with the British Broadcasting Corporation (BBC). Enjoy it when you have free time.</p>

<!-- (This video appears to have a home at the BBC: ) \n[//]: (https://www.bbc.co.uk/archive/feynman/10702.shtml) (However, it seems to not want to play if you are outside of the U.K.) -->

</details>

The voltage between two points is mathematically expressed as the change of potential energy of a charge,

$V = \dfrac{\Delta U}{q}$

The $\Delta$ symbol stands for "a change of" some quantity.

That's an intuitive description of voltage in a nutshell.

## Power

*Power* is defined as the rate energy is transformed or transferred over time. Power is measured in joules/second. A joule/second is also known as a *watt*. 

$1 \,\text{watt} = 1\,\text{joule}/\text{second}$

In calculus notation, power is written like this<

$\text{power} = \dfrac{dU}{dt}$

where $U$ is energy and $t$ is time.

An electric circuit is capable of transferring power from one place to another. Power is the warmth you feel when you put your hand near a light bulb or your mobile phone gets warm. 

Voltage measures the energy transferred per unit of charge, $dU/dq$. Current is the rate of movement of charge, $dq/dt$. If we insert these definitions into the equation for power we get,

$p = \dfrac{dU}{dt} = \dfrac{dU}{dq} \cdot \dfrac{dq}{dt} = v \,i$

Electrical power is the product of voltage times current, in units of watts.

$p = v\,i$

## Summary
{:.no_toc}

These mental images for current and voltage are good enough to get you started in your study of electricity. Over time these ideas will mature and evolve.

If you want to reach beyond the intuitive description of voltage you can read a more formal mathematical description of electric potential and voltage in the [Electrostatics sequence]({{ site.baseurl }}{% link _topics/topic-electrostatics.md %}).
