---
layout: article
title:  How and inductor works
author: Willy McAllister
comments: true
---

When you make an inductor your goal is to create a component that behaves like the ideal inductor equation, 

$v = \text L \,\dfrac{di}{dt}$

This article is a simplified description of how an inductor does its thing. I won't tell you why we want to create this equation. We will talk about that another time. For now, we want to talk about how we can build a physical object that creates the inductor $i$-$v$ equation.

The theory of how inductors actually work is pretty complicated in the fine details. To learn more about inductors and their magnetic fields, see the [magnetic fields](https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields) section of Khan Academy Physics. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Inductors use magnetism

First, a little magnetism. Any wire carrying a current generates a magnetic field in the surrounding region. This important little fact was discovered by Danish scientist [Hans Christian Ørsted](https://en.wikipedia.org/wiki/Hans_Christian_%C3%98rsted) in 1820. Up to that time, everyone thought electricity and magnetism were two separate things. Ørsted showed they were related, and introduced the concept of *electromagnetism*.

The red lines in these images represent the magnetic field. Here's a single straight wire carrying a current, $i$. The magnetic field lines flow in circles around the wire. 

![](/i/6inductor_straight_wire.svg){: .centered }

<details>
<summary>How do we know the magnetic field is there?</summary>
<p>How can you tell if a magnetic field exists? By using a magnetic field sensor.<br>  
You already know what that is, it's called a compass.</p>

<img src="/i/6-3compass.png" alt="Compass" height="200px" />

<img src="/i/6-3compass_align.jpg" alt="Compass" height="200px" />


<p>Hold a wire near the compass. If there is no current in the wire, the needle of the compass lines up with the magnetic field of the Earth, and points towards magnetic north. If you switch on a current, the compass needle will twitch and try to line up with the magnetic field from the wire. That's how you tell the magnetic field is there.</p>

<p>If you let the current run steady, the compass needle will return to magnetic north. That means there is no magnetic field from the wire when the current is unchanging.</p>

<p>Now turn off the current. The needle will twitch again, in the other direction! The magnetic field is back, but in the other direction. A current generates a magnetic field when the current is *changing*. </p>

<p>The compass acts as your "eyes" to let you "see" the magnetic field. This is one example where electrical engineers create "eyes" to let us see invisible things. This is one reason a lot of people think EE's are wizards.</p>
</details>

If we wrap the wire into a coil shape, the magnetic field becomes concentrated on the inside of the coil.

![](/i/6inductor_coil.svg){: .centered }

Each individual section of wire still has the same field lines as in the straight wire example. In the center of the coil, all the field lines from all the neighboring loops point in the same direction. See if you can work this out in your mind.

![](/i/6inductor_coil2.svg){: .centered }

<details>
<summary>Magnetic lines and the Right Hand Rule</summary>
<p>You may notice in these magnetic field diagrams that both the current and the magnetic lines have arrowheads. The direction of these arrows is not arbitrary, it is a property of nature. If you know one of the arrows, you can figure out the other by using the handy Right Hand Rule. If you peek into a classroom where the professor is teaching Electricity and Magnetism, you will see the professor and all the students using this rule. </p>

<p>Right Hand Rule <img src="/i/6right_hand_rule.svg" alt="Right Hand Rule"></p>
<p>Using your RIGHT hand, wrap your fingers around the wire with your thumb pointing in the direction of current (conventional current flow, not electron flow). The magnetic field line arrows will be flowing out of your fingertips.
</p>
<p>See if you can use the Right Hand Rule to confirm that the arrows in the previous coil images are correct.</p>

<p>Pro tip: If you are right-handed, *put your pencil down* when you use the rule. The most common error is using your left hand to do the Right Hand Rule, which gives you the wrong answer. If you want to do something with your left hand, use it as the wire.</p>

</details>

### Inductor $i$-$v$ equation

So where does the inductor $i$-$v$ equation come from? 

* A constant current (moving charge) creates a nearby constant magnetic field.

* A *changing* current (also moving charge) creates a *changing* magnetic field.
* A *changing* magnetic field creates a constant electric field in the nearby wire (a voltage).
* A constant electric field (a voltage) causes charge to move (a current). 

Can you see the circular argument in the last three statements? Changing current makes a changing magnetic field. A changing magnetic field makes a voltage, and therefore a current. 

This is the key trick played by an inductor: 

A *changing* current creates a *changing* magnetic field, which creates a *constant* electric field (a constant voltage). We write this mathematically with a familiar-looking equation: 

$v = \text L \dfrac{di}{dt}$

You will often hear people say the current in an inductor "wants" to keep flowing. This comes from the back-and-forth dance between current and magnetic field. They have a reinforcing effect on each other. The current and magnetic field *induce* each other. This is where the inductor gets its name.

### Parasitics

Real inductors differ from the ideal equation in a few important ways. Since inductors are made of long wires, they often have a significant parasitic resistance. This extra resistance is the main parasitic of an inductor.

The other unavoidable feature of inductors is they take up a lot of space. The magnetic field exists in the volume of space around and inside the inductor. The coil of wire has to be big enough to surround a large amount of magnetic field to achieve a significant inductance. It is rare to see an inductor designed into an integrated circuit. 

### Analogy to mass

Inductance in an electrical system is analogous to mass in a mechanical system. Magnetic energy is stored in an inductor in the same sense that kinetic energy is stored in a moving mass. 

An inductor reminds me of a rotating flywheel (a wheel with a heavy rim). You can't instantly stop spinning flywheel. There's too much energy stored in the wheel. If you spin a bicycle wheel really fast and then grab it with your hand, you get quite a jolt of energy and the wheel takes a little while to stop. It seems like the wheel "wants" to keep going. Likewise, the current in an inductor "wants" to keep going and does not stop instantaneously. The energy in an inductor is stored in its magnetic field.

### Increasing inductance

To get higher inductance (higher $\text{L}$), inductors are made by winding wire in a coil. Putting different kinds of magnetic material inside the coil can intensify the magnetic field even more. This toroidal inductor (*toroid* means donut-shaped) is wound around a core of iron/ceramic material called *ferrite*. (You can't see the ferrite core, it is covered by the copper wire.)

![](https://ka-perseus-images.s3.amazonaws.com/f4a0082fa2acce037c5c146a1e5dcfb3b74a65f0.png){: .centered }

The ferrite core concentrates and intensifies the magnetic field more than just an air core, which increases the value of inductance, $\text{L}$.

## Just for fun
We finish up with this astonishing image of an air-core inductor. This large copper coil was part of a wireless telegraph station built in New Jersey, USA in 1912. It could send a message 4000 miles (6400 km), all the way across the Atlantic Ocean to Germany. Wow. Needless to say, most inductors are *much* smaller.

![](https://ka-perseus-images.s3.amazonaws.com/5eb33430f28a5d2c61daf7f29b39c27084d3f34f.jpg){: .centered }

----

#### Photo credits
{:.no_toc}
  
Inductor photo from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Basic_Inductor_with_B-field.svg), public domain  
Large air-core coil from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Large_antenna_loading_coil.jpg), public domain

Compass https://pixabay.com/en/compass-directions-north-south-159202/
https://commons.wikimedia.org/wiki/File:Compass_align.jpg

Michael Faraday and Henry discovered that an electric current can be created by a moving magnet.

Hans Christian Ørsted Oersted discovered in 1820 that an electric current creates a magnetic field (moves a compass needle). The magnetic field is generated *when the current changes*. A steady current makes no magnetic field, but if you turn the current on or off, a momentary magnetic field is *induced*. (Oersted was the first person to isolate pure Aluminum.)