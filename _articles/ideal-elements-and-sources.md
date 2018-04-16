---
layout: article
title:  Ideal elements and sources
author: Willy McAllister
comments: true
--- 

A circuit is made of *elements*. There's usually at least one *source* element to provide the energy to make the circuit do something. The source connects to one or more *components*. The terms *element* and *component* are pretty much interchangeable. 

In this article, we define sources and components as ideal mathematical abstractions. By the end, we will have a nice collection of equations that model the ideal elements. 

The next article is about [real-world circuit elements]({{ site.baseurl }}{% link _articles/real-world-elements.md %}) that come close to the ideal versions.  

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

Some definitions,

**Elements** are either sources or components.

**Sources** provide energy to a circuit. There are two basic types.

* Voltage source
* Current source 

**Components** come in three basic types, each characterized by a different current-voltage relationship. 

* Resistor
* Capacitor
* Inductor

These sources and components have two terminals or connection points. Not surprisingly, they are referred to as *$2$-terminal elements*.

Later on we will learn about components (transistors) that have more than two terminals.

## Ideal sources

### Constant voltage source

The two common symbols for constant voltage sources look like this,

![Voltage source symbols]({{ site.baseurl }}{% link i/5voltage_source_symbols.svg %}){: .centered :}

The symbol on the left is a battery. The long horizontal line represents the positive terminal of the battery, and the short horizontal line is the negative terminal. Sometimes the battery is not marked with $+$ and +-$ signs, so this long-line short-line thing is to memorize. 

The circle symbol represents some other kind of voltage source, a power supply or generator. It is best practice to draw the $+$ and $-$ signs inside the circle instead of on the outside. That way they don't get confused with other voltage labels added to the schematic later.

An ideal constant voltage source has a fixed output voltage, independent of the current drawn by the components connected to its terminals, as shown in this *current versus voltage* plot,

![Voltage source i-v plot]({{ site.baseurl }}{% link i/5constant_voltage_source.svg %}){: .centered :}

The equation for a constant voltage source is, $v = \text V$, where $\text V$ is some constant voltage, like $v=3\,\text V$.

You often see the variable name $e$ associated with voltage, derived from the term "electromotive force" or *emf*. This term is sometimes used when talking about the voltage from a source (battery or generator). You can use either $v$ or $e$ for voltage and everyone will know what you mean.

<details>
<summary>plotting i vs. v</summary>
<p>The plot above is an example of a coordinate system we will come across frequently. The independent variable on the horizontal axis is $v$, and the dependent variable on the vertical axis is $i$. This is called an $i$-$v$ plot.</p>
</details>

### Variable voltage source

An ideal variable voltage source generates a known voltage as a function of time, independent of the current drawn by the components connected to its terminals, as shown in this $voltage$ versus $time$ plot,

![Variable voltage source]({{ site.baseurl }}{% link i/5variable_voltage_source.svg %}){: .centered :}


The equation for a variable voltage source is, $v = v(t)$, where $v(t)$ can be a sine wave or any other time-varying voltage, for example, a single voltage step, or a repeating square wave.

<details>
<summary>More examples of time-varying voltage sources</summary>

<p>Step voltage<img src="/i/5step_voltage_source.svg" alt="Step voltage source" /></p>

<p>Square wave<img src="/i/5square_voltage_source.svg" alt="Square wave voltage source" /></p>

<p>Triangle wave<img src="/i/5triangle_voltage_source.svg" alt="Triangle wave voltage source" /></p>

<p>Sawtooth wave<img src="/i/5sawtooth_voltage_source.svg" alt="Sawtooth wave voltage source" /></p>
</details>

The symbol for a variable voltage source looks like this, or some variation,

![Variable voltage source symbol]({{ site.baseurl }}{% link i/5variable_voltage_source_symbol.svg %}){: .centered :}

The squiggle inside the circle suggests a sine wave generator. You will come across different versions of this symbol for other waveform shapes.

The ideal mathematical model of a voltage source can produce an arbitrarily huge output current if the components it is connected to demand it. That doesn't happen in real life of course. When you simulate a circuit you might see gigantic currents appear by accident. The computer doesn't mind a current of a zillion amperes, it's just a number in computer memory, but it's probably not what you intended.
 
### Constant current source

The symbol for a constant current source looks like this,

![Constant current source symbol]({{ site.baseurl }}{% link i/5constant_current_source_symbol.svg %}){: .centered :}

The arrow indicates the direction of positive current flow.

The voltage at the terminals of an ideal current source becomes whatever is required to push out the constant current, even if that voltage is gigantic. When we build real current sources, of course, the range of operation is significantly restricted compared to the ideal current source abstraction.",\

An ideal constant current source has a fixed output current, independent of the voltage connected to its terminals, as shown in this $current$ versus $voltage$ plot,

![Current source i-v plot]({{ site.baseurl }}{% link i/5constant_current_source.svg %}){: .centered :}

The equation for a constant current source is, $i = \text I$

where $\text I$ is a constant output current, like $i=2\,\text{mA}$. The current is always the same no matter what voltage appears across the source. 

## Resistor

The two symbols for a resistor look like this,

![Resistor symbols]({{ site.baseurl }}{% link i/5resistor_symbols.svg %}){: .centered :}

In the US and Japan the resistor symbol is a zig-zag. In the UK, Europe and other parts of the world, the resistor is drawn as a box.

## Ohm's Law

The voltage across a resistor is directly proportional to the current flowing through it.

$\large v = \text R \, i$

This relationship is known as **Ohm's law**. You'll use this equation *a lot* in your work with circuits. It's the most important equation in electronics.

$\text R$ is a constant of proportionality, representing the *resistance* of the resistor. We measure resistance in units of ohms, denoted by the Greek capital Omega symbol, $\Omega$.

The $i$-$v$ plot for a resistor is shown below. The equation is Ohm's Law solved for $i=v/\text R$. The slope of the resistor line is $1/\text R$.

![Resistor i vs. v plot]({{ site.baseurl }}{% link i/5resistor_i-v_plot.svg %}){: .centered :}  

<details>
<summary>What is the resistance of this resistor?</summary>
<p>Let's work out the resistance of the resistor shown in the graph above. We have to figure out the slope of the line. We need two points to do that. The resistor line <em>always</em> goes through the origin, so that gives us one point on the line, $(0, 0)$. </p>

<p>You can pick any other point on the line to find the slope, so we'll pick an easy one in the upper right. The resistor line goes through the point $(v = 3\,\text V, i = 4\,\text{mA})$. So the slope is $4\,\text{mA}/3\,\text V$. That means $\text R$ is 1/slope or </p>

<p>$\text R = \dfrac{3\,\text V}{4\,\text{mA}} = 750 \,\Omega$</p>
</details>

You can write Ohm's Law in a number of ways. You will use all of these forms all the time. 

$v = i\,\text R \qquad\qquad i = \dfrac{v}{\text R} \qquad\qquad \text R = \dfrac{v}{i}$

Ohm's Law is worth committing to memory.

<details>
<summary>Remembering Ohm's Law</summary>
<p>The way I memorized Ohm's Law was to commit one form to memory. I repeated </p>

<p>$e = i\text R \qquad e \, i\,\text R \qquad e \, i\,\text R \qquad e\, i\,\text R \quad...$ </p>

<p>until it was embedded in my brain like a mantra. ($e$ and $v$ are both used as symbols for voltage). I happened to like the sound of $e$ in my mantra.)</p>

<p>After uttering my mantra, I quickly derive the other forms with simple mental algebra.</p>

<p>This graphic is another way to remember Ohm's Law,</p>

<img src="/i/5ohms_law_circle.svg">

<p>Put your finger or thumb over the variable you want $(v$, $i$, or $\text R)$, and read the equation. For example, to find $\text R$, cover up $\text R$ and read $v/i$. To find $v$, cover $v$ and read  $i\,\text R$.</p>

<p>Choose any method that works for you to remember Ohm's Law. It's worth the effort.</p>
</details>

### Power in a resistor

Power is dissipated by a resistor when current flows through it. 

<details>
<summary>What is power?</summary>
<p>A physicist defines power in the most general way. Power is a <em>rate</em>, the rate at which energy $(U)$ is transformed or transferred.</p>

<p>$p = \dfrac{dU}{dt}$</p>

<p>Power is measured in joules/second (also known as <em>watts</em>).</p>

<h4>Electrical power</h4>

<p>We know voltage is a measure of energy transfer per unit of charge, $dU/dq$.<br>We know current is the rate of flow of charge, $dq/dt$.<br> We can break up $dU/dt$ and express power as,</p>

<p>$p = \dfrac{dU}{dt} = \left (\dfrac{dU}{dq}\right ) \cdot \left (\dfrac{dq}{dt}\right ) = \left (v \right ) \cdot \left (i \right )$</p>

<p>So in electrical systems we measure power as,</p>

<p>$p = v \,i $</p>
</details>

Energetic electrons moving through resistive material collide with the atoms in the material. The each collision transfers energy from the moving electrons into the material. The collisions cause the atomic lattice to vibrate. That means energy that was in the electrons turns into bulk heat in the resistor material. We can use Ohm's Law to express power in a resistor two additional ways. 

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

<p>Power in a resistor is also proportional to $i^2$, so lowering the current by a factor of two also cuts the power by a factor of $4$.</p>

<p>Overall, Aaron and Beth have reduced the power by a factor of $4\times4=16$.</p>
</details>

## Capacitor

The basic equation describing a capacitor relates charge $\text Q$ on the capacitor to the voltage $\text V$ across the capacitor. 

$\text Q = \text C\,\text V$

The constant of proportionality $\text C$ is the *capacitance*. The unit of capacitance is the farad $(\text F)$, and from the equation above we see that, $1 \,\text{farad} = 1 \,\text{coulomb}/\text{volt}$

<details>
<summary>learn more about Q = CV</summary>
<p>Learn how a capacitor is constructed and see how $\text Q = \text C\,\text V$ is derived in this <a href="https://www.khanacademy.org/science/physics/circuits-topic/circuits-with-capacitors/v/capacitors-and-capacitance">video</a>.</p>
</details>

If the charge $\text Q$ is able to move, we have a term for this: moving charge is called *current*. Current is the time rate of change of charge, 

$i = \dfrac{dq}{dt}$

Using this idea that moving charge is current, let's go back to $\text Q = \text C\,\text V$ and take the derivative of both sides with respect to time and see what we get. (When I start talking about things changing with time, I switch from uppercase variable names to lower case, $q$, $i$, and $v$.)

$\dfrac{dq}{dt} = \text C \, \dfrac{dv}{dt}$

and we end up with an equation saying the current in a *capacitor* is directly proportional to the *time rate of change* of the voltage across the capacitor,

$i = \text C \, \dfrac{dv}{dt}$

This equation captures the $i$-$v$ relationship for capacitors. It also tells us that electric circuits can change as time passes.

<details>
<summary>What does $d$ mean?</summary>
<p>The $d$ in $dq/dt$ is notation from calculus. The $d$ stands for <em>differential</em>. </p>
<p>$d$ means "a tiny change in ..." The expression $dt$ means <em>a tiny change in time</em>.</p>
<p> When you see $d$ in a ratio, like $dv/dt$, it means, "a tiny change in $v$ (voltage) for each tiny change in $t$ (time)."</p>
<p>An expression like $dv/dt$ is called a <a href="https://www.khanacademy.org/math/ap-calculus-ab/derivative-introduction-ab/derivative-as-a-limit-ab/v/calculus-derivatives-1-new-hd-version">derivative</a>. This is what you study in <a href="https://www.khanacademy.org/math/differential-calculus">differential calculus</a>.</p>
</details>

The some symbols for a capacitor look like this,

![Capacitor symbols]({{ site.baseurl }}{% link i/5capacitor_symbols.svg %}){: .centered :}

The version with the curved line is used for capacitors that require one terminal to have a positive voltage with respect to the other terminal ("electrolytic" capacitors). The curved line indicates the terminal that needs to be kept at the more negative voltage.

We can flip the capacitor equation around to solve for $v$ in terms of $i$ by integrating both sides, resulting in the integral form of the capacitor $i$-$v$ equation,

$\displaystyle v = \dfrac1{\text C}\, \int_{-\infty}^{\,T} i\,dt$

The $-\infty$ lower limit on the integral suggests that the capacitor's voltage at time $T$ depends not just on the capacitor current right now, but also on the entire past history of the current. That's a long time ago, so we often write this integral starting at some known voltage $v_0$ at some known time like $t=0$, and then keeping track of the changes from there.

<details>
<summary> $\int$ is calculus notation</summary>
<p>The loopy $\int$ symbol is also from calculus. It is the <a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-antiderivatives-ftc/ab-antiderivatives-intro/v/antiderivatives-and-indefinite-integrals">integral</a> sign. The way it works is similar to the summation symbol $\Sigma$ (uppercase Greek letter sigma).</p>
<p>In the equation above, the integral sign tells you to add up the product of current, $i$, times a tiny interval of time, $dt$, for every $t$ starting at time $t=-\infty$ and stopping at time $t=T$. Integration is the opposite of taking the derivative. You study integrals in <a href="https://www.khanacademy.org/math/integral-calculus">integral calculus</a></p>
</details>

### Power and energy in a capacitor

The instantaneous power in watts associated with a capacitor is,

$p = v\,i$

$p = v\,\text C \,\dfrac{dv}\{dt} $

The energy $(U)$ stored in a capacitor is power integrated over time,

$\displaystyle U = \int p \,dt = \int v\,\text C \,\dfrac{dv}{dt}\,dt = \text C\int v \,dv$ 

If we assume the capacitor voltage was $0\,\text V$ at the beginning of the integration, then the integral evaluates to,

$U = \dfrac 12 \,\text C \,v^2$

Unlike a resistor, where the energy is lost to heat, the energy in an ideal capacitor does not dissipate. Instead, energy in the capacitor, in the form of stored charge, is recovered when the charge flows back out of the capacitor. 

## Inductor

The voltage across an *inductor* is directly proportional to the *time rate of change* of current through the inductor. We can express the inductor's $i$-$v$ relationship in mathematical notation as, 

<p>$v = \text L \, \dfrac{di}{dt}$</p>

This property of sensitivity to changing current comes from the inductor's ability to store energy in a surrounding magnetic field. The energy stored in the inductor's magnetic field can return to the circuit and generate an electric current. This is a pretty complicated electromagnetic phenomenon, beyond the scope of this article. So for now, I just want you to remember and embrace the $i$-$v$ equation for an inductor.

<details>
<summary>Learn more about how an inductor works</summary>
<p>To learn more about inductors and magnetic fields, see the <a href="https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields">magnetic fields section</a> of Khan Academy Physics.</p>
</details>

The constant of proportionality $\text L$ is the called the *inductance*. The unit of inductance is the henry, denoted by the capital letter H.

<details>
<summary>L and H</summary>
<p>The symbol for inductance $\text L$ honors Russian physicist Heinrich Lenz for his pioneering work in electromagnetism. (The symbol $\text I$ was already taken for current, which could not be called $\text C$ because that was already taken by the coulomb.)</p>

<p>The unit of inductance is the <em>henry</em>, $\text H$, named after American scientist Joseph Henry (who was the first secretary of the Smithsonian Institution and inventor of the doorbell).</p>
</details>

The symbol for an inductor looks like this,

![Inductor symbol]({{ site.baseurl }}{% link i/5inductor_symbol.svg %}){: .centered :}

It looks like a wire wrapped around in a coil, since that is the usual way to make an inductor.

Similar to the capacitor equation, we can write the inductor equation in integral form to get $i$ in terms of $v$. Notice the kinship between the capacitor and inductor equations. The $i$ and $v$ change places.

$\displaystyle i = \dfrac1{\text L}\int_{-\infty}^{\,T} v\,dt$

$\grayF{\displaystyle v = \dfrac1{\text C}\, \int_{-\infty}^{\,T}  i\,dt}$

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
{:.no_toc}

Here are the three important circuit component $i$-$v$ equations,

$v = i\,\text R\quad\qquad$ resistor $i$-$v$ equation is Ohm's Law

$i = \text C \,\dfrac{dv}{dt}\qquad$ capacitor $i$-$v$ equation

$v = \text L \,\dfrac{di}{dt}\qquad$ inductor $i$-$v$ equation

These are your tools of the trade for circuit analysis.

In addition, we also developed these expressions for power and energy. 

The power in a resistor can be found three ways 

$p =i\,v \quad$ or $\quad p=i^2 \,r \quad$ or $\quad p=v^2/r$

The energy in a capacitor is $\dfrac 12 \,\text C \,v^2$

The energy in an inductor is $\dfrac 12 \,\text L \,i^2$

In the next article we talk about how real-world physical components come close to the mathematical ideal.
