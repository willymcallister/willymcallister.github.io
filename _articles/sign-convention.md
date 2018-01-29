---
layout: article
title:  "Sign convention for passive components"
author: Willy McAllister
comments: true
---

When you add symbolic labels for voltage and current to an individual circuit element, you should point the current arrow into the terminal with the positive voltage sign. This is called the *sign convention for passive components*. 

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The *sign convention for passive components* says: 

>Point the current arrow into positive voltage terminal of the element. 

This rule allows us to directly apply Ohm's Law $(v = i\,\text R)$ to a resistor. (We don't have to think about including an extra minus sign.)

*Passive* elements dissipate or store power. Resistors, capacitors, and inductors are passive elements. (Diodes and transistors are also passive.)

*Active* elements generate power. Voltage sources and current sources are active elements. 

For passive elements, the power $(P = i \times v)$ has a positive sign. So a positive sign associated with power *dissipation*.

For active elements, the power calculation comes out with a negative sign. So a negative sign is associated with power *generation*.

----

Reminder: In this article we use the conventional current direction, *not* electron current direction.

Veterans: Some military electronic training programs (for example the U.S. Navy NEETS program in the 1960s) use the opposite convention, defining current to flow in the direction of electron motion, but we don't use that here at Spinning Numbers. We follow the SI convention for current direction.

-----

## Symbolic labels for current and voltage

Here's a resistor. For now it is just sitting here on the page all by itself. The only thing we know about is its resistance, $\text R$. For discussion, let's say $\text R = 100 \,\Omega$. We also know $i$ and $v$ are related by Ohm's Law, $v = i\,\text R$. We don't know specific values for $i$ or $v$ because it's not in a circuit, yet. 

![A resistor](/i/8resistor.svg)

One of the first things we might do is put symbolic labels on our resistor to represent voltage and current. That will let us talk about those things and write equations with them.

There are two possible directions I can point the current arrow, and two possible orientations for the voltage $+$ and $-$ signs. 

![2 current arrows, 2 voltage polarities](/i/8symbolic-labels.svg)

If I mix and match all the choices, there are $4$ possible ways to label the resistor.

![4 labeling variations](/i/8symbolic-labels2.svg)

First, please check to see that I drew all the variations correctly. Now, notice there are really only two different versions. See how $a.$ and $d.$ are the same thing, just mirrors of each other? The current arrow points into the $+$ voltage polarity. And $b.$ and $c.$ are also twins, because the current arrow points into the $-$ voltage polarity.

So we actually have just two ways to put symbolic labels on the resistor. Both are valid. You could even use both of them on different resistors in the same circuit. 

![Which way does the voltage polarity go?](/i/8resistor-voltage-puzzle.svg)

**BUT**, one way is a much better choice than the other. Whenever possible, you should point the current arrow into the $+$ voltage sign. Why? Because it means we use the normal version of Ohm's Law, $v = i\,\text R$. If we use the other labeling method (arrow pointing into the negative sign) it forces us to include a minus sign in Ohm's Law, $v = -i\,\text R$.  

In the next two sections we'll justify where that minus sign comes from. If everything so far makes perfect sense, it is okay for you to hop over the next two sections to where we apply this rule to [all passive elements and give some examples](/a/sign-convention.html#sign-convention-for-passive-components). 


## A resistor experiment

Let's apply a current to our resistor. Let the current $i = 10\,\text{ma}$ just for discussion.

Ohm's Law is $v = i \,\text R$

We know the value of $\text R$ is always positive. 

<details>
    <summary>Are there negative resistors?</summary>
    <p>Every resistor in this course has a positive resistance. There are some exotic devices called tunnel diodes that seem to have negative resistance, but they are quite rare. As Borg electrical engineers say, "Resistance is positive."</p>
</details>

Suppose we connect a real battery to a real resistor and touch voltmeter probes to the resistor. The red voltmeter probe defines which resistor terminal is the $+$ polarity of the voltage we read, while the black probe defines the $-$ voltage polarity. 

The following diagram shows two versions of the experiment. The voltmeter touches the resistor the same way in both versions. The thing that's different is the current direction.  
$a.$ The current flows down from the top.  
$b.$ the current flows up from the bottom.

![Resistors and voltmeters](/i/8resistor-voltmeter0.svg)
<p class="caption">$a.$ The voltmeter reads $+1.0\,\text V$, so the red probe is $1.0\,\text V$ <em>above</em> the black probe. $\goldD v = +1\,\text V$.<br>
$b.\,$ The voltmeter reads $-1.0\,\text V$, so the red probe is $1.0\,\text V$ <em>below</em> the black probe. $\goldD v = -1\,\text V$.</p>

We reversed the current direction and the voltage sign change from $+$ to $-$. That makes sense.

The voltmeter diagram on the right can be a mind-bender. It takes a little while to figure out what a negative sign on the voltmeter display means. It's telling us the black probe is at a higher voltage than the red probe.

Our voltmeter diagrams represent the two alternative conventions for labeling resistors. On the left the current arrow goes into the $+$ sign of the voltage polarity. On the right the current arrow goes into the $-$ sign. The voltmeters show the same magnitude voltage, but the one on the right has a minus sign.

## Label resistors to make Ohm's Law easy

Let's see if the theory of Ohm's Law agrees with what our meters say.

First with the current arrow pointing into the $+$ sign.

![Resistor and voltmeter with current arrow going in the plus sign](/i/8resistor-voltmeter1.svg)

Let $\text R = 100 \Omega$, and $i = +10\,\text{ma}$. **Find $v$ using Ohm's Law.**

Plug the values into Ohm's Law: $v = i\,\text R = +10\,\text{ma} \times 100\,\Omega = +1\,\text V$. 

This is great. This is what the voltmeter said. Theory matches experiment!

Now we do it again with the current arrow pointing into the $-$ sign. 

![Resistor and voltmeter with current arrow going in the minus sign](/i/8resistor-voltmeter2.svg)

We use the exact same problem statement. Let's see what happens if we blindly apply the usual version of Ohm's Law.

Let $\text R = 100 \Omega$, and $i = +10\,\text{ma}$. **Find $v$ using Ohm's Law.**

$v = i\,\text R = +10\,\text{ma} \times 100\,\Omega = +1\,\text V$. 

But that isn't what the voltmeter says! The voltmeter reads $-1\,\text V$.

This labeling convention forces us to learn what to do when the current arrow is in this direction. We have to adapt Ohm's Law by including a minus sign, $v = -i\,\text R$. Any time we see a current arrow going into the negative side of a resistor, we have to use this version of Ohm's Law. 

$v = -i\,\text R = -10\,\text{ma} \times 100\,\Omega = -1\,\text V$.

Now the answer comes out matching the voltmeter. 

You may think there is something seriously broken here, but there's not. If we wanted to, we could check every resistor in the circuit to see what which way the current arrow points and add a minus sign when needed. That is a big mental load we can avoid.

That little minus sign could be a source of a lot of silly errors in circuit analysis. So what do engineers do? We try very hard not to label components this way. We discipline ourselves to point the current arrow into the plus sign whenever possible. A whole lot of potential errors simply vanish.

>Point the current arrow into the positive voltage polarity.

![Resistor with a current arrow](/i/8resistor-convention.svg)

The fancy name for this idea is the *sign convention for passive components*.

## Sign convention for passive components

We apply this convention to all passive components, like this:

![Sign convention for I and V polarity](https://ka-perseus-images.s3.amazonaws.com/05dde709db5ebf61d2dbf4085b1e617672f7cd56.svg){: .centered }{: height="180px"}

This labeling convention helps you get the right answer when analyzing a circuit.

<details>
    <summary>What does <em>passive</em> mean?</summary>
    <p>The term <em>passive</em> describes elements that dissipate or temporarily store power, like resistors, inductors, and capacitors. The opposite of passive is <em>active</em>. Batteries and current sources generate power, and are called <em>active</em> elements.
    </p>
</details>
<details>
<summary>What is that voltage arrow?</summary>
<p>The images above show voltage using two notations: with $+$ and $-$ signs, and also with an orange voltage arrow. The voltage arrow points from $-$ towards $+$. The polarity signs and the arrow are redundant. They mean exactly the same thing. You can use either, or both in your schematics.</p>
</details>

### Example 1

![250 ohm resistor example](/i/8example1-0.svg){: .centered }{: height="180px"}

The voltage polarity for this $250\,\Omega$ resistor has been assigned with $+$ at the top. This polarity direction was an arbitrary choice. Something not shown in the surrounding circuit has caused $2\,\text{volts}$ to appear across the resistor. 

Now we add the current arrow using the sign convention for passive components. 

![250 ohm resistor example with current arrow](/i/8example1-1.svg){: .centered }{: height="180px"}

We point the current arrow into the positive terminal. This was not an arbitrary choice. The sign convention for passive components tells us to point the current arrow into the $+$ sign. 

**What is the current, $i$?**

To find the current, apply Ohm's Law:

$i = \dfrac{v}{\text R}$

$i = \dfrac{+2\,\text V}{250\,\Omega}$

$i = +8 \,\text{mA}$

The voltage polarity tells us the top of the resistor is $2\,\text V$ above the bottom of the resistor. Ohm's Law tells us the current is $+8 \,\text{mA}$. The $+$ sign on current means current is flowing in the direction of the arrow, from top to bottom. (Conventional current, not electron current.)

### Example 1x - the other sign convention

What would happen if we labeled the resistor with the other sign convention?  The diagram below shows the same resistor with the same voltage polarity, but the current arrow points *out* of the positive terminal, so the sign convention for passive components is not being used.

![](https://ka-perseus-images.s3.amazonaws.com/f00de133e48415c6a1d99db448fc85cc8095f90f.svg){: .centered }{: height="180px"}

Apply Ohm's Law, exactly the same as Example 1,

$i = \dfrac{+2\,\text V}{250\,\Omega} = +8 \,\text{mA}$

This is telling us the current is $+8 \,\text{mA}$. The $+$ sign means it is flowing in the direction of the arrow. What? That can't be. In a real resistor the current would be flowing the other way. We got the wrong answer. Oh wait! To get the right answer we have to remember to include a $-$ sign in Ohm's Law. 

$i = -i\,\text R = -\dfrac{+2\,\text V}{250\,\Omega} = -8 \,\text{mA}$

Lesson: it's a lot less error prone to use the sign convention for passive components. 

### Example 2

![](https://ka-perseus-images.s3.amazonaws.com/7523be60cbf48f66c7be633c0d24fce327c4add3.svg){: .centered }{: height="180px"}

This $10\,\text k\Omega$ resistor has been labeled with the sign convention for passive components, just like Example 1: The voltage polarity has $+$ at the top and the blue current arrow points down. This time, the current is specified instead of the voltage. The value of the current is $-20 \,\mu\text A$. This may look a little odd, to show $-20 \,\mu\text A$ current flowing in the direction of the arrow. But let's see what happens.

**What is the voltage, $v$?**

We use Ohm's Law to solve for the unknown voltage. Since we've been careful to use the sign convention, all we have to do is plug in the actual values shown on the schematic.

$v = i\,\text R$

$v = -20 \,\mu\text A \times 10\,\text k\Omega$

$v = (-20 \times 10^{-6}) \times (10 \times 10^{+3}) = -200 \times 10^{-3}$

$v = -0.2\,\text V$

The voltage came out with a minus sign, meaning the terminal with the $+$ voltage polarity is $0.2 \,\text V$ *below* the terminal with the $-$ sign. We used the sign convention, and we let the math produce the right sign, even with the negative current. 

## Exceptions

You will run into cases every now and then where you can't or don't want to use the sign convention for passive components. In those cases, the current arrow will be pointing into the negative terminal of the element. When this happens, you don't need to freak out, but your spidey sense should be tingling. You deal with this the same way we did in Example 1x where we included a $-$ sign in Ohm's Law. 

This happened to me as I wrote the article about [RC Natural Response](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-natural-and-forced-response/a/ee-rc-natural-response), in the Formal Derivation section.

<details>
    <summary>spidey sense</summary>
    <p>"The so-called ‘spidey sense’ or ‘spider sense’ generally refers to an extraordinary ability to sense imminent danger, attributed to the comic-book superhero <a href="https://www.youtube.com/watch?v=5Kek3GqbsTk">Spider Man</a>."</p>
</details>

## Power 

The power in a resistor is

$P = i \, v$

>Reminder: Power is energy transferred over a period of time (joules/second).

The sign convention has an impact on how we think about power. Power can be generated or it can be dissipated. When we use the sign convention, power *dissipation* ends up with a positive sign, and power *generation* ends up getting a negative sign.

![Voltage source driving resistor](/i/8voltage-source-and-resistor1.svg){: .centered }{: height="200px"}

$i = v/\text R = 2\,\text V / 250 \,\Omega = 8 \,\text{ma}$

Power *dissipation* gets a positive sign.

$P_\text{resistor} = 8\,\text{ma} \times 2\,\text V = +16\,\text{mw}$


What happens when we apply the *passive* sign convention to an *active* circuit element?

![Voltage source with passive sign convention](/i/8voltage-source-and-resistor2.svg){: .centered }{: height="200px"}

We know the voltage source will provide $8\,\text{ma}$ coming out of its top terminal (Ohm's Law for the resistor tells us that). With the current arrow pointing in the direction shown, the current is expressed as $i = -8\,\text{ma}$. You may think this is another minus sign we want to avoid, but this one is okay to have around, since it doesn't trigger a new version of Ohm's Law.

However, something interesting happens when we compute the power for the voltage source. 

$P_\text{voltage source} = -8\,\text{ma} \times 2\,\text V = -16\,\text{mw}$

The power is negative! That's one of the side effects of using the sign convention for passive components on active elements like voltage sources. It's not a bad thing. If you are carefully tracking power in a system power budget, you compute all the positive power dissipated by passive elements and balance that against all the negative power from active (power generating) elements. Everything should add up to zero.

<details>
    <summary>What the heck is negative power?</summary>
    <p>Power is never negative. Power with a minus sign arises from the arithmetic we use for the sign convention. When talking about power it is clearer to use the words <em>dissipate</em> and <em>generate</em> rather than numeric signs $+$ and $-$.</p>
    <p>If you are an engineer in the power generation industry you might not want to go around bragging that you built a $-10 \,\text{Megawatt}$ solar panel facility, so you are forgiven if you drop the $-$ sign.</p>
</details>
<details>
    <summary>What is negative power good for?</summary>
    <p>The idea of negative power is not a bad thing. If you are creating a power budget for a complicated system, you compute all the positive power dissipated by passive elements and balance that against all the negative power from active (power generating) elements. Everything should add up to zero.</p>
</details>

----

## Summary

The *sign convention for passive components* says: 

>The current arrow points into positive voltage terminal of the element. 

With this sign convention we directly apply Ohm's Law $(v = i\,\text R)$ to resistors.

If you ever see the sign convention being violated, it should grab your attention and remind you to include a minus sign in Ohm's Law.

*Passive* elements dissipate or store power. Resistors, capacitors, and inductors are passive elements, as are diodes and transistors.

*Active* elements generate power. Voltage sources and current sources are  active elements. 

When you use this sign convention on passive elements, the power $(P = i \times v)$ has a positive sign. So a positive sign on power is associated with power *dissipation*.

If you use this sign convention on an active element, the power calculation comes out with a negative sign. So a negative sign on power is associated with power *generation*.
