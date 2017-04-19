---
layout: article
title:  Ideal elements and sources
author: Willy McAllister
comments: true
---

# DRAFT

An electric circuit is made of *elements*. Elements include at least one *source*. The source is connected to a bunch of *components*. We are going to describe sources and components with ideal mathematical abstractions. By the end of this article, we will have a nice collection of equations, which can be combined to generate lots of useful electronic functions. The next article describes real-world components that come close to the ideal abstractions we define here.

**Elements** are either sources or components.

**Sources** provide energy to a circuit. There are two basic types.

* Voltage source
* Current source 

**Components** come in three basic types, each characterized by a different voltage-current relationship. 

* Resistor
* Capacitor
* Inductor

These sources and components have two terminals or connection points. Not surprisingly, they are referred to as *$2$-terminal elements*.

## Ideal sources

### Constant voltage source

An ideal constant voltage source has a fixed output voltage, independent of the current drawn by the components connected to its terminals, as shown in this *current versus voltage* plot:

![](web+graphie://ka-perseus-graphie.s3.amazonaws.com/e3cd09700257ac256ae8c7ba9b0c01dad7bf5ad9)

The equation for a constant voltage source is,

$v = \text V$

where $\text V$ is some constant output voltage, like $v=3\,\text V$. 

You frequently see the variable name $e$ associated with voltage, derived from the term "electromotive force" or *emf*. This term is sometimes used when talking about the voltage from a source (battery or generator). 

<details>
<summary>plotting i vs. v</summary>
<p>The plot above is an example of a coordinate system we will come across frequently. The coordinates are current $(i)$ and voltage $(v)$. The independent variable on the horizontal axis is $v$, and the dependent variable on the vertical axis is $i$. This plot is called an $i$-$v$ plot.</p>
</details>

The two common symbols for constant voltage sources:

![](https://ka-perseus-images.s3.amazonaws.com/4e123e061012c4d50a9c56c5b483dfa5ccc02b53.svg)

The symbol on the left is used for a battery. The longer horizontal line on the battery symbol represents the positive terminal of the battery, and the shorter horizontal line represents the negative terminal. The circle symbol represents some other source of voltage, often a power supply. It is a good practice to draw the $+$ and $-$ signs inside the circle.

### Variable voltage source

An ideal variable voltage source generates a known voltage as a function of time, independent of the current drawn by the components connected to its terminals, as shown in this $voltage$ versus $time$ plot:

web+graphie://ka-perseus-graphie.s3.amazonaws.com/c08429f9d12b06457325a6f8a74041637afbe042

The equation for a variable voltage source is,

$v = v(t)$

$v(t)$ can be a sine wave or any other time-varying voltage, for example, a single voltage step, or a repeating square wave.

<details>
<summary>examples</summary>
<p>More examples of time-varying voltage sources.</p>

Voltage step
image 1 web+graphie://ka-perseus-graphie.s3.amazonaws.com/f5530bbf5f617f66cc1f5cb03b30ee1a3323972b

Square wave
image 2 web+graphie://ka-perseus-graphie.s3.amazonaws.com/2556f24d2ea7787195db7b9b09998d0fd7266acb

Triangle wave
image 3 web+graphie://ka-perseus-graphie.s3.amazonaws.com/46ee3d1ba945f95ad671acbb2d4cd607319981ad

Sawtooth wave
image 4 web+graphie://ka-perseus-graphie.s3.amazonaws.com/e1335c6168ea3c16683e765311011f3e8ca8ef26
</details>

The symbol for a variable voltage source:

![](https://ka-perseus-images.s3.amazonaws.com/dc21e4ebc5112e0851933480c9fe9bd68abad78f.svg)

The squiggle inside the circle suggests this particular symbol represents a sine wave generator. You will come across variations of this symbol for different waveform shapes.

These ideal mathematical abstractions of voltage sources can produce arbitrarily huge output current if the components they are connected to demand it. That doesn't happen in real life, of course. One place gigantic currents pop up is when you simulate a circuit. The computer doesn't mind a current of a zillion amperes, but it's probably not what you intended.

 
### Constant current source

An ideal constant current source has a fixed output current, independent of the voltage connected to its terminals, as shown in this $current$ versus $voltage$ plot:

web+graphie://ka-perseus-graphie.s3.amazonaws.com/cbc3f5b492834108cb3679319abb0e80293687db

The equation for a constant current source is,

$i = \text I$

where $\text I$ is a constant output current, like $i=2\,\text mA$.

The symbol for a constant current source:

![](https://ka-perseus-images.s3.amazonaws.com/40c6b24b67d47ea198ae30184d2f2c4c3fb190a3.svg)

The arrow indicates the direction of positive current flow.

The voltage at the terminals of an ideal current source becomes whatever is required to push out the constant current, even if that voltage is gigantic. When we build real current sources, of course, the range of operation is significantly restricted compared to the ideal current source abstraction.",\

## Resistor

The voltage across a *resistor* is directly proportional to the current flowing through it.

$\large v = \text R \, i \qquad \normalsize \text{Ohm's Law}$

This relationship is known as **Ohm's law**. You'll use this equation *a lot* in your work with circuits.

$\text R$ is a constant of proportionality, representing the *resistance*. Resistance has units of ohms, denoted by the Greek capital Omega symbol, $\Omega$.

The $i$-$v$ graph for a resistor is shown below. The equation plotted is $i=v/\text R$, so the slope of the line is $1/\text R$.

INTERACTION GRAPH OF RESISTOR

The symbols for a resistor:

![](https://ka-perseus-images.s3.amazonaws.com/92bdbb1ab8cfc9e3d76d8df7e40d3d8431efc55a.svg)

In the US and Japan the resistor symbol is a zig-zag. In the UK, Europe and other parts of the world,  the resistor is often drawn as a box.

Ohm's Law can be written a number of ways, all of them useful, 

$v = i\,\text R \qquad\qquad i = \dfrac{v}{\text R} \qquad\qquad \text R = \dfrac{v}{i}$

Ohm's Law is worth committing to memory.

<details>
<summary>remembering Ohm's Law</summary>
<p>The way I memorized Ohm's Law was to commit one form to memory. I repeated </p>

<p>$e = i\text R \qquad e \, i\,\text R \qquad e \, i\,\text R \qquad e\, i\,\text R \quad...$ </p>

<p>until it was embedded in my brain like a mantra. ($e$ and $v$ are both used as symbols for voltage). I happened to like the sound of $e$ in my mantra.)</p>

<p>After uttering my mantra, I quickly derive the other forms with simple mental algebra.</p>

<p>This graphic is another way to remember Ohm's Law,</p>

<img src="https://ka-perseus-images.s3.amazonaws.com/e1c2bc762dbe5b37a3089eea32a7ec53a9acb05d.svg">

<p>Place a finger or thumb over the variable you want $(v$, $i$, or $\text R)$, and read the equation. For example, to find $\text R$, cover up $\text R$ and read off $v/i$. To find $v$, cover $v$ and read off $i\,\text R$.</p>

<p>You should choose any method that works for you to remember Ohm's Law. It will be worth the effort.</p>
</details>

### Power in a resistor

Power is dissipated by a resistor when current flows through it. 

<details>
<summary>What is power?</summary>
<p>This is how a physicist defines power, in the most general way. *Power* is a *rate*. Power is the rate at which energy $(U)$ is transformed or transferred.</p>

<p>$p = \dfrac{\text dU}{\text dt}$</p>

<p>Power is measured in joules/second (also known as *watts*).</p>

<p>We know voltage is a measure of energy transfer per unit of charge, $\text dU/\text dq$  
We know current is the rate of flow of charge, $\text dq/\text dt$  
So we express power as,</p>

<p>$p = \dfrac{\text dU}{\text dt} = \dfrac{\text dU}{\text dq} \cdot \dfrac{\text dq}{\text dt} \quad$ or</p>

<p>$p = v \,i $</p>
</details>

Energetic electrons moving through resistive material collide with the atoms in the material. The each collision transfers energy from the moving electrons into the material. The collisions cause the atomic lattice to vibrate. That means energy that was in the electrons turns into bulk heat in the resistor material. Power can be expressed three ways using Ohm's Law. 

$p = v\,i$

$p = (\text i\,\text R)\, i = i^2 \,\text R$

$p = v\left (\dfrac{v}\{\text R}\right ) = \dfrac{v^2\}\{\text R}$

The last two expressions reveal that power in a resistor goes up (or down) proportional to the *square* of voltage or current. 

* Increase either voltage or current by a factor of $2$, the power consumed goes up by a factor of $4$. 

* Reduce either voltage or current by half, and you reduce the power by 

<details>
<summary>what?</summary>
<p>Power is proportional to both $v^2$ and to $i^2$. If you cut either voltage or current by a factor of $2$, the power goes down by a factor of $4$.</p>
</details>

* Aaron finds a way to reduce the voltage across a resistor by a factor of two. When Beth looks at Aaron's new design, she figures out how to cut the current in the resistor by a factor of two.

<details>
<summary>How much has the power dissipated by the resistor been changed?</summary>
<p>Power in a resistor is proportional to $v^2$, so lowering voltage by a factor of $2$ cuts the power by a factor of $4$.</p>

<p>Power in a resistor is also porportional to $i^2$, so lowering the current by a factor of two also cuts the power by a factor of $4$.</p>

<p>Overall, Aaron and Beth have reduced the power by a factor of $4\times4=16$.</p>
</details>


## Capacitor

The basic equation describing a capacitor relates charge on the capacitor to the voltage across the capacitor. 

<details>
<summary>learn more</summary>
<p>Learn how a capacitor is constructed and see how $\text Q = \text C\,\text V$ is derived in this [video](https://www.khanacademy.org/science/physics/circuits-topic/circuits-with-capacitors/v/capacitors-and-capacitance).</p>
</details>

$\text Q = \text C\,\text V$

The constant of proportionality $\text C$ is the *capacitance*. Capacitance has units of farads, symbolized by the capital letter $\text F$. The unit of capacitance is the farad, and from the equation above we see that, $1 \,\text{farad} = 1 \,\text{coulomb}/\text{volt}$

If the charge can move, we have a term for this; moving charge is called *current*. Current is the time rate of change of charge, 

$i = \dfrac{dq\}{dt}$

Using this idea, let's take the derivative of both sides of $\,\text Q = \text C\,\text V$ with respect to time and see what we get,

$\dfrac{dq}{dt} = \text C \, \dfrac{dv\}{dt\}$

and we end up with an equation saying the current in a *capacitor* is directly proportional to the *time rate of change* of the voltage across the capacitor,

$i = \text C \, \dfrac{dv}\{dt}$

This capacitor equation captures the $i$-$v$ relationship for capacitors. It also tells us that electric circuits can be affected by time.

The symbols for a capacitor:

![](https://ka-perseus-images.s3.amazonaws.com/6f39a31cf53ef849bdd45bdc1efa5735e18b51b6.svg)

The version with the curved line is used for capacitors manufactured in a way that requires one terminal to have a positive voltage with respect to the other terminal. The curved line indicates the terminal that needs to be kept at the more negative voltage.

We can flip the capacitor equation around to solve for $v$ in terms of $i$ by integrating both sides, resulting in the integral form of the capacitor equation,

$\displaystyle v = \dfrac1{\text C}\, \int_{-\infty}^{\,T} i\,dt$

The $-\infty$ lower limit on the integral suggests that the capacitor's voltage at time $T$ depends not just on the capacitor current right now, but on the entire past history of the current. That's a long time ago, so we often write this integral starting at some known voltage $v_0$ at some known time like $t=0$, and then keeping track of the changes from there.


### Power and energy in a capacitor

The instantaneous power in watts associated with a capacitor is,

$p = v\,i$

$p = v\,\text C \,\dfrac{dv}\{dt} $

The energy $(U)$ stored in a capacitor is power integrated over time,

$\displaystyle U = \int p \,dt = \int v\,\text C \,\dfrac{dv}{dt}\,dt = \text C\int v \,dv$ 

If we assume the capacitor voltage was $0\,\text V$ at the beginning of the integration, then the integral evaluates to:

$U = \dfrac 12 \,\text C \,v^2$

Unlike a resistor, where the energy is lost to heat, the energy in an ideal capacitor does not dissipate. Instead, energy in the capacitor, in the form of stored charge, is recovered when the charge flows back out of the capacitor. 

## Inductor

The voltage across an *inductor* is directly proportional to the *time rate of change* of current through the inductor, 

<p>$\large v = \text L \, \dfrac{di}{dt}$</p>

This property arises from the inductor's ability to store energy in a surrounding magnetic field. The stored magnetic energy can return to the circuit by generating an electric current.

<details>
<summary>Learn more about how an inductor works.</summary>
<p>To learn more about inductors and magnetic fields, see [the magnetic fields section](/science/physics/magnetic-forces-and-magnetic-fields) of Khan Academy Physics.</p>
</details>

The constant of proportionality $\text L$ is the called the *inductance*. The unit of inductance is the henry, denoted by the capital letter H.

<details>
<summary>L and H</summary>
<p>The symbol for inductance is $\text L$, honoring Russian physicist Heinrich Lenz for his pioneering work in electromagnetism. (The symbol $\text I$ was already taken for current, which could not be called $\text C$ because that was already taken by the coulomb.)</p>

<p>The unit of inductance is the *henry*, and the symbol for the *unit* is $\text H$, named after American scientist Joseph Henry (first secretary of the Smithsonian Institution and inventor of the doorbell).</p>
</details>

The reason this property of inductance arises in coils of wire is a complex topic involving the intimate relationship between electricity and magnetism, which is beyond the scope of this article. For now, please trust that the voltage across an inductor is proportional to the rate of change of current.

The symbol for an inductor:

![](https://ka-perseus-images.s3.amazonaws.com/92a1931b3616c60726374ffbc18701f560f43de2.svg)

It looks like a wire wrapped in a coil, since that is the usual way to make an inductor.

Similar to the capacitor equation, we can write the inductor equation in integral form to get $i$ in terms of $v$. Notice the kinship between the capacitor and inductor equations.

$\displaystyle i = \dfrac1{\text L}\int_{-\infty}^{\,T} v\,dt$
$\qquad\qquad\qquad \grayF{\displaystyle v = \dfrac1{\text C}\, \int_{-\infty}^{\,T}  i\,dt} $

The $-\infty$ lower limit on the integral means the inductor's current at time $T$ depends on the entire past history of the inductor voltage. We usually write this integral starting from some known current $i_0$ at some known time like $t=0$, and then keeping track of the changes from there.

$\displaystyle i = \dfrac1{\text L}\, \int_{\,0}^{\,T} v\,dt + i_0$

### Power and energy in an inductor

The instantaneous power in watts associated with an inductor is

$p = i\,v$

$p = i\,\text L \, \dfrac{di}{dt}$

The energy $(U)$ stored in the magnetic field of an inductor is power integrated over time,

$\displaystyle U = \int p \,dt = \int i\,\text L \, \dfrac{di}{dt}\,dt = \text L\int i \,di$

$U = \dfrac 12 \,\text L \,i^2$

Unlike a resistor, where the energy is lost to heat, the energy in an ideal inductor does not dissipate. Instead, the energy stored in the inductor's magnetic field can be fully recovered when the energy in the magnetic field gets converted back into an electric current in the wire.

## Summary of ideal component equations

Here are the three important circuit component $i$-$v$ equations,

$v = i\,\text R\quad\qquad$ resistor $i$-$v$ equation is Ohm's Law

$i = \text C \,\dfrac{dv}{dt}\qquad$ capacitor $i$-$v$ equation

$v = \text L \,\dfrac{di}{dt}\qquad$ inductor $i$-$v$ equation

These are your tools of the trade for circuit analysis.

In addition, we also developed these expressions for power and energy. 

The power in a resistor can be found three ways 

$p =i\,v \quad$ $\quad p=i^2 \,r \quad$ $\quad p=v^2/r$

The energy in a capacitor is $\dfrac 12 \,\text C \,v^2$

The energy in an inductor is $\dfrac 12 \,\text L \,i^2$

In the next article we talk about how real-world physical components come close to the mathematical ideal.
