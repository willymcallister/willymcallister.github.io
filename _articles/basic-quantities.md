---
layout: article
title:  "Charge, current, voltage"
author: Willy McAllister
comments: true
---

Charge, current, and voltage are the cornerstone concepts of electricity. We create our first mental models for these basic electrical quantities.

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

Electrical power is the product of voltage and current, $p = i \, v$, in units of watts.

----

## Charge

Our awareness of electric charge comes from carefully observing nature. We observe a force between objects that, like gravity, seems to act at a distance. Even though the force is invisible, we know it is there. We made up a name for what causes this force. We call it *charge*. 

If you fiddle around with static electricity you will eventually conclude there are two types of electric charge. Opposite charges attract, and like charges repel. That is the most basic rule of electricity. Compare this to gravity. There is only one type of gravity: it only attracts. Gravity never repels. Compared to our daily experience with gravity, electricity can seem kind of weird. 

## Conductors, insulators, semiconductors

**Conductors** are atoms whose outer electrons (valence electrons) have relatively weak bonds to their nuclei, as shown in this fanciful image of a copper atom. When a bunch of metal atoms are together, they gladly share their outer electrons with each other. Metals have a cloud or "swarm" of electrons not associated with a particular nucleus. A very small electric force can make the electron swarm move around in a current. Copper, gold, silver, and aluminum are good conductors.

![Copper atom]({{ site.baseurl }}{% link i/copper_atom.svg %}){: .centered :}

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

![Current flow]({{ site.baseurl }}{% link i/basic_current_flow.svg %}){: .centered :}

{% capture summary %}Current direction and NEETS{% endcapture %}  
{% capture details %}  
We point the current arrow in opposite the direction electrons move. This may seem jarring, but we will make it work. This definition often causes confusion for beginners and people who learned electricity in the military or some technician schools.. 

For example the U.S. Navy [NEETS](https://www.fcctests.com/neets/Neets.htm) program in the 1960's used the opposite convention where current flow is defined in the direction of electron motion. We don't use that here at Spinning Numbers, nor does most of the electrical engineering world. More on this later when we talk about [conventional current direction]({{ site.baseurl }}{% link _videos/conventional-current.md %}).  
{% endcapture %}{% include details.html %} 

Since current is the amount of charge passing through a boundary in some period of time, it can be expressed in general terms with this notation from calculus,

$i = \dfrac{dq}{dt}$

The term "electric current" was first used by André-Marie Ampère. The symbol for current is '$i$'. It comes from the first letter of the French phrase *intensité du courant électrique*.

<details>
<summary>What does the $d$ mean?</summary>

<p>The $d$ in ${dq}/{dt}$ is notation from calculus, it means <em>differential</em>. You can think of $d$ as meaning "a tiny change in ..." </p>

<p>For example, the expression $dt$ means <em>a tiny change in time</em>. When you see $d$ in a ratio, like $dq/dt$, it means, "a tiny change in $q$ (charge) for each tiny change in $t$ (time)." An expression like $dq/dt$ is called a <a href="https://www.khanacademy.org/math/ap-calculus-ab/derivative-introduction-ab/derivative-as-a-limit-ab/v/calculus-derivatives-1-new-hd-version">derivative</a>, and it is what you study in <a href="https://www.khanacademy.org/math/differential-calculus">Differential Calculus</a>.</p>

<p>In calculus, $d$ represents a small amount of change, so small it approaches $0$. A little farther down in this article you will see change indicated with a $\Delta$ symbol, as in $\Delta h$ is a change of height. We use $\Delta$ to indicate a large finite change, like $1$ meter or $1$ second. And we use $d$ to indicate tiny nearly-zero-sized change. </p>

</details>

{% capture summary %}$q$ models charge as a continuous substance{% endcapture %}  
{% capture details %}
You don't need to read this. It is way over-complicated for beginners.

There is a small contradiction we have to accept when we model charge with a continuous variable $q$. In calculus notation $dq$ is an infinitesimal amount of charge. But, you know the smallest charged particle is an electron or proton. They are small, but not infinitely small. And current at the atomic level is these little chunks of charge, not a continuous substance that can be any value.

When we model charge with mathematics $(q)$ there is no sense that charge exists as electrons. This is how people thought about charge before the discovery of the electron and proton. It was thought to be a continuous variable, not quantized to electrons or protons. When we define current with calculus notation as $dq/dt$ this models charge as a continuous number. 

It's similar to the two ways we think about water. If you have a bucket of water you think of it as a continuous substance, not a collection of molecules. In buckets, you don't "count" water, you measure it in cups or liters. But if you go down to the atomic level, water is molecules you can count. If your bucket is full of sand the particles are bigger but you still treat sand as a continuous fluid. If it's a bucket of rocks you might treat it either way.

In the Wikipedia article on [electric current](https://en.wikipedia.org/wiki/Electric_current) you see the definition $I = Q/t$, not $i = dq/dt$, (in the image on the right side). The author is going out of his/her way to avoid using calculus in a simple essay. In the same way, you can talk about the slope of a straight line without invoking calculus, rise/run. 

But, you know when it comes to curvy functions that calculus does a better job of describing "instantaneous slope". EE's deal a lot with curvy sine waves and exponential waveforms, so we need calculus notation when it comes to $\text{RC}$ circuits and real-world signals.

But let's recognize that current (in wires) is carried by electrons. Suppose you pick an extremely short time interval and measure current. If no charge passes through the boundary during that time, then technically the current is $0$ during that interval. 

That's technically correct but not so useful. You could do the same thought experiment with a water hose. Place the imaginary boundary across the end of the hose. You could pick a time interval so short that $0$ water molecules crossed the boundary during that time. True, but not so useful. It is more useful to start with a larger time interval, count some water molecules to get a real current, and then squeeze the time interval down until it is as small as you need for your investigation. In calculus this is *taking a limit*. 

The confusion happens when you model charge as a continuous value and take the limit $(\Delta Q$ reducing down to $dq$ and $\Delta T$ going down to $dt)$, which ignores the fact that at extremely small scale $q$ is actually quantized (electrons). 

In everyday EE we treat charge and current as continuous quantities, like a bucket of water. We very rarely count individual electrons. There are zillions of electrons in most of our circuits, so this is a good model.
{% endcapture %}{% include details.html %}

That's current in a nutshell.

### A few remarks about current
{:.no_toc}

**What carries current in metal?** Since electrons are free to move about in metals, and the metal atoms are not, current in metals is made of moving electrons. Even though electrons do the work in most electronic circuits, we point the current arrow in the direction a *positive* charge would move. This is a very old historical convention. It takes some getting used to, but you can do it. It just means the current arrow points to where the electrons are coming *from*.

**Can current be positive charge?** Yes. There are lots of examples. Current is carried by both positive and negative charges in saltwater: If we put ordinary table salt in water, the mixture becomes a good conductor. Table salt is sodium chloride, NaCl. When salt dissolves in water it becomes free-floating Na$^+$ and Cl$^-$ ions. Both ions respond to electric force and move through the saltwater in opposite directions. In saltwater the current is composed of moving atoms, both positive and negative ions, not free electrons. The electrical currents inside our bodies are moving ions. The same definition of current works: count the number of charges passing by in a fixed amount of time.

**What is the speed of current?** We don't talk very often about the *speed* of current. Answering the question, "How fast is the current flowing?" is really complicated and rarely relevant. Current isn't about meters per second, it's about amount of charge per second. We want to know, "How *much* current is flowing?", not how *fast*. When we talk about how fast something moves in electricity, we are thinking how quickly a *disturbance* moves through a wire or the air, not how fast the electrons are physically moving. Electric disturbances travel close to the speed of light. If you toss a pebble into a pond, you see a ripple moving across the surface. The ripple (a disturbance) moves fast, but the water molecules hardly move at all. 

**How *should* we talk about current?** When discussing current, terms like *through* and *in* make sense. Current flows *through* a resistor; current flows *in* a wire. If you hear, "the current across ...", it should sound funny (as in funny/odd). The words through and across are used for voltage, not current. If you hear, "the speed of the current", that should sound funny, too.

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

![Voltage analogy]({{ site.baseurl }}{% link i/basic_voltage_analogy.svg %}){: .centered :}{:height="219px" width="823px" :}

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
