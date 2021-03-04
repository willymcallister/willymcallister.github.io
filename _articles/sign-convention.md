---
layout: article
title:  "Sign convention for passive components"
author: Willy McAllister
comments: true
---

The sign convention for passive components is a widely understood way to assign polarity to voltages and currents. It defines what we mean by positive and negative voltage and current.

When you label the voltage and current of a circuit element, the convention says you should point the current arrow into the terminal with the positive voltage polarity.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The *sign convention for passive components* is an arbitrary but widely accepted rule that says, 

Point the current arrow into the positive voltage terminal of an element. 

----

>This article is based on conventional current direction, *not* electron current direction.
>
>Veterans: Some military electronic training programs (for example the U.S. Navy [NEETS](https://www.fcctests.com/neets/Neets.htm) program from the 1960's) use the opposite sign convention, defining current to flow in the direction of electron motion. We don't use that convention here at Spinning Numbers. We follow the SI convention for current direction.

-----

## Symbolic labels for current and voltage

Here's a resistor, 

![100 ohm resistor]({{ site.baseurl }}{% link i/sign_convention_resistor100.svg %}){: .centered :}

For now it is just sitting here all by itself. The only thing we know about is its resistance, $\text R = 100 \,\Omega$. The other thing we know is Ohm's Law, $v = i\,\text R$. We don't know specific values for $i$ or $v$ because it's not in a circuit, yet.

One of the first things we might do is add symbolic labels on our resistor to represent voltage and current. That will let us talk about them and include them in equations.

There are two possible directions you might point the current arrow, and two possible orientations for the voltage $+$ and $-$ polarity signs. 

![2 possible current directions, 2 possible voltage polarities]({{ site.baseurl }}{% link i/sign_convention_symbolic_labels1.svg %}){: .centered :}

If you mix and match all the choices, there are $4$ possible ways to label the resistor,

![Four labeling variations]({{ site.baseurl }}{% link i/sign_convention_symbolic_labels2.svg %}){: .centered :}

Please check that I drew all the variations correctly. 

Notice there are really only two different versions. See how $a.$ and $d.$ are the same thing, just mirrors of each other? The current arrow points into the $+$ voltage polarity. 

$b.$ and $c.$ are also twins because the current arrow points into the $-$ voltage polarity.

So there are just two ways to put symbolic labels on the resistor,

![Which voltage polarity to choose?]({{ site.baseurl }}{% link i/sign_convention_resistor_voltage_puzzle.svg %}){: .centered :}

**BUT**, one way is a better choice than the other. When possible, you should point the current arrow into the $+$ voltage sign. Why? Because it means we use the normal version of Ohm's Law, $v = i\,\text R$. If we use the other labeling method (arrow pointing into the negative sign) we have to remember to include a minus sign in Ohm's Law, $v = -i\,\text R$.  

## A resistor experiment

Let's apply a current to our resistor. Let the current be $i = 10\,\text{mA}$ just for discussion.

Ohm's Law is $v = i \,\text R$. We know the value of $\text R$ is always positive. 

{% capture summary %}Are there negative resistors?{% endcapture %}  
{% capture details %}  
Every resistor in this course has a positive resistance. There are some exotic devices called tunnel diodes that seem like they have negative resistance. Tunnel diodes are quite rare. As [Borg](https://www.startrek.com/database_article/borg) electrical engineers say, "Resistance is positive."  
{% endcapture %}{% include details.html %}

Suppose we connect a real battery to a real resistor and touch voltmeter probes to the resistor. The red voltmeter probe defines which resistor terminal we consider to be the $+$ polarity. The black probe defines the $-$ voltage polarity. 

The following diagram shows two versions of the experiment. The red probe touches the upper terminal of the resistor in both versions. That means the $+$ voltage polarity is the upper terminal in both cases. What's different is the current direction. Some external circuit causes a $10\,\text{mA}$ current to flow in the resistor,  

$\text{a.}$ The current flows down from the top.  
$\text{b.}$ The current flows up from the bottom.

![Resistors and voltmeters]({{ site.baseurl }}{% link i/sign_convention_voltmeter0.svg %}){: .centered :}

$\text{a.}$ The meter reads $+1.0\,\text V$, so the red probe is $1.0\,\text V$ <em>above</em> the black probe. $\goldD v = +1\,\text V$.  
$\text{b.}$ The meter reads $-1.0\,\text V$, so the red probe is $1.0\,\text V$ <em>below</em> the black probe. $\goldD v = -1\,\text V$.

The current is reversed between $\text{a.}$ and $\text{b.}$, so the voltage shown on the meter changes from $+$ to $-$. That makes sense.

Voltmeter diagram $\text{b.}$ can be a real mind-bender. The negative sign on the voltmeter display is telling us the black probe is at a higher voltage than the red probe.

Our voltmeter diagrams represent the two alternative conventions for labeling resistors. On the left the current arrow goes into the $+$ sign of the voltage polarity. On the right the current arrow goes into the $-$ sign. The voltmeters show the same magnitude voltage, but the one on the right has a minus sign.

## Label resistors to make Ohm's Law easy

Let's see if Ohm's Law agrees with what our meters say.

First, point the current arrow into the $+$ sign,

![Resistors and voltmeter, current arrow into the plus voltage terminal]({{ site.baseurl }}{% link i/sign_convention_voltmeter1.svg %}){: .centered :}

Let $\text R = 100 \,\Omega$ and $i = +10\,\text{mA}$. 

**Find $v$ using Ohm's Law.**

Plug the values into Ohm's Law: $v = i\,\text R = +10\,\text{mA} \times 100\,\Omega = +1\,\text V$. 

This is great. This is what the voltmeter said. Theory matches experiment!

Now do it again with the current arrow pointing into the $-$ sign. 

![Resistors and voltmeter, current arrow into the minus voltage terminal]({{ site.baseurl }}{% link i/sign_convention_voltmeter2.svg %}){: .centered :}

We use the exact same problem statement. Let's see what happens if we blindly apply the usual version of Ohm's Law.

Let $\text R = 100 \Omega$ and $i = +10\,\text{mA}$. 

**Find $v$ using Ohm's Law.**

$v = i\,\text R = +10\,\text{mA} \cdot 100\,\Omega = +1\,\text V$ 

But that isn't what the voltmeter says! The voltmeter reads $-1\,\text V$.

This labeling convention forces us to learn what to do when the current arrow points in this direction. We adapt Ohm's Law by including a minus sign, $v = -i\,\text R$. 

Any time a current arrow goes into the negative side of a resistor we have to use this version of Ohm's Law, 

$v = -i\,\text R = -10\,\text{mA} \times 100\,\Omega = -1\,\text V$

Now the answer comes out matching the voltmeter. 

Here's the problem. That little minus sign is a source of a lot of silly errors in circuit analysis. So what do engineers do? We try not to label components this way. We discipline ourselves to point the current arrow into the plus sign when possible. A whole lot of potential errors simply vanish.

Point the current arrow into the positive voltage polarity,

![Resistors with a current arrow]({{ site.baseurl }}{% link i/sign_convention_resistor_convention.svg %}){: .centered :}

The fancy name for this idea is the *sign convention for passive components*.

## Sign convention for passive components

We apply the convention to all passive components like this,

![Sign convention for passive components]({{ site.baseurl }}{% link i/sign_convention_for_passives.svg %}){: .centered :}

The labeling convention helps you get the right answer when analyzing a circuit.

<details>
<summary>What is that voltage arrow?</summary>
<p>The images above show voltage using two notations: with $+$ and $-$ signs, and also with an orange voltage arrow. The voltage arrow points from $-$ to $+$. The polarity signs and the arrow are redundant, they mean exactly the same thing. You can use either or both in your schematics.</p>
</details>

### Example 1

![250 ohm resistor]({{ site.baseurl }}{% link i/sign_convention_example1_0.svg %}){: .centered :}

The voltage polarity for this $250\,\Omega$ resistor has been assigned with $+$ at the top. This polarity direction was an arbitrary choice. Something (not shown) in the surrounding circuit causes $2\,\text V$ to appear across the resistor. 

Now we add the current arrow using the sign convention for passive components, 

![250 ohm resistor with current arrow]({{ site.baseurl }}{% link i/sign_convention_example1_1.svg %}){: .centered :}

We point the current arrow into the positive terminal. This was *not* an arbitrary choice. The sign convention for passive components tells us to point the current arrow into the $+$ sign. 

**What is current $i$?**

To find the current, apply Ohm's Law,

$i = \dfrac{v}{\text R}$

$i = \dfrac{+2\,\text V}{250\,\Omega}$

$i = +8 \,\text{mA}$

The voltage polarity tells us the top of the resistor is $2\,\text V$ above the bottom of the resistor. Ohm's Law tells us the current is $+8 \,\text{mA}$. The $+$ sign on current means current is flowing in the direction of the arrow, from top to bottom. (Conventional current, not electron current.)

### Example 1x - the other sign convention

What would happen if we labeled the resistor with the other sign convention?  The diagram below shows the same resistor with the same voltage polarity, but the current arrow points *out* of the positive terminal, so the sign convention for passive components is not being used.

![The other sign convention]({{ site.baseurl }}{% link i/sign_convention_other.svg %}){: .centered :}

Apply Ohm's Law, exactly the same as Example 1,

$i = \dfrac{+2\,\text V}{250\,\Omega} = +8 \,\text{mA}$

This is telling us the current is $+8 \,\text{mA}$. The $+$ sign means it is flowing in the direction of the arrow. What? That can't be. In a real resistor the current flows the other way. We got the wrong answer. Oh wait! To get the right answer we have to remember to include a $-$ sign in Ohm's Law. 

$i = -i\,\text R = -\dfrac{+2\,\text V}{250\,\Omega} = -8 \,\text{mA}$

Lesson: You make fewer errors if you use the sign convention for passive components. 

### Example 2

![10k resistor]({{ site.baseurl }}{% link i/sign_convention_ex2.svg %}){: .centered :}

This $10\,\text k\Omega$ resistor has been labeled with the sign convention for passive components, just like Example 1: The voltage polarity has $+$ at the top and the blue current arrow points into the positive sign. This time, the current is specified instead of the voltage. The value of the current is $-20 \,\mu\text A$. This may look a little odd, to show $-20 \,\mu\text A$ current flowing in the direction of the arrow, but let's see what happens.

**Find voltage $v$.**

We use Ohm's Law to solve for the unknown voltage. Since we've been careful to use the sign convention all we have to do is plug in the actual values shown on the schematic,

$v = i\,\text R$

$v = -20 \,\mu\text A \cdot 10\,\text k\Omega$

$v = -20 \times 10^{-6} \cdot 10 \times 10^{+3} = -200 \times 10^{-3}$

$v = -0.2\,\text V$

The voltage came out with a minus sign, meaning the terminal with the $+$ voltage polarity is $0.2 \,\text V$ *below* the terminal with the $-$ sign. We used the sign convention, and we let the math produce the right sign, even with the negative current. 

## Exceptions

You will run into cases every now and then where you can't or don't want to use the sign convention for passive components. In those cases, the current arrow will be pointing into the negative terminal of the element. When this happens, you don't need to freak out, but your spidey sense should be tingling. You deal with this the same way we did in Example 1x where we included a $-$ sign in Ohm's Law. 

This situation came up when I wrote the formal derivation of the [RC natural response]({{ site.baseurl }}{% link _articles/rc-natural-response-derivation.md %}#model-the-circuit).

<details>
    <summary>spidey sense</summary>
    <p>"The so-called ‘spidey sense’ or ‘spider sense’ generally refers to an extraordinary ability to sense imminent danger, attributed to the comic-book superhero <a href="https://www.youtube.com/watch?v=5Kek3GqbsTk">Spider Man</a>."</p>
</details>

## Power 

The power in a resistor is,

$P = i \, v$

Power is energy transferred over a period of time, measured in joules/second.

The sign convention has an impact on how we think about power. Power can be generated or it can be dissipated. When we use the sign convention, power *dissipation* ends up with a positive sign, and power *generation* ends up with a negative sign. Let's find the power dissipated by the $250\,\Omega$ resistor,

![Voltage source driving resistor]({{ site.baseurl }}{% link i/sign_convention_voltage_source_and_resistor1.svg %}){: .centered :}

First find the current,

$i = \dfrac{v}{\text R} = \dfrac{2\text V}{250 \,\Omega} = 8 \,\text{mA}$

Then find the power,

$P_\text{resistor} = i\,v = 8\,\text{mA} \cdot 2\,\text V = +16\,\text{mW}$

Power *dissipation* has a positive sign.

What happens if we apply the *passive* sign convention to the voltage source?

![Voltage source with passive sign convention]({{ site.baseurl }}{% link i/sign_convention_voltage_source_and_resistor2.svg %}){: .centered :}

We know the voltage source will provide $8\,\text{mA}$ coming out of its top terminal (Ohm's Law for the resistor tells us that). With the current arrow pointing in the direction shown, the current is $i = -8\,\text{mA}$.

Something interesting happens when we compute the power of the voltage source. 

$P_\text{voltage source} = i\,v = -8\,\text{mA} \cdot 2\,\text V = -16\,\text{mW}$

The voltage source is a power generator. Power *generation* has a negative sign. 

The negative sign is a side effects of using the sign convention for passive components on power-generating elements like the voltage source.

<details>
    <summary>Is there such a thing as negative power?</summary>
    <p>Power is never actually negative. The minus sign comes from using the sign convention for passive components. If you are talking to someone about power it is clearer to use the words <em>dissipate</em> and <em>generate</em> rather than numeric signs $+$ and $-$.</p>
    <p>If you are an engineer in the power generation industry you might not want to go around bragging that you built a $-100 \,\text{Megawatt}$ solar panel facility, so you are forgiven if you don't mention the $-$ sign.</p>
</details>
<details>
    <summary>What is negative power good for?</summary>
    <p>The idea of negative power is not a bad thing. If you are creating a power budget for a complicated system, you compute all the positive power dissipated by passive elements and balance that against all the negative power from power-generating elements. Everything should add up to zero.</p>
</details>

----

## Summary

The *sign convention for passive components* says, 

The current arrow points into positive voltage terminal of the element. 

With this sign convention we directly apply Ohm's Law $(v = i\,\text R)$ to resistors.

If you ever see the sign convention being violated, it should grab your attention and remind you to include a minus sign in Ohm's Law.

When you use the sign convention on passive elements $(\text R, \text L, \text C)$, power $P = i \, v$ has a positive sign. Positive power is associated with power *dissipation*.

If you apply the passive sign convention to a power-generating element, the power comes out with a negative sign. Negative power is associated with power *generation*.
