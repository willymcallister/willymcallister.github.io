---
layout: article
title:  "Resistance and Resistivity"
author: Willy McAllister
comments: true
---

Let's define some of the terms used around resistors. You may have heard the words resistance and resistivity. They sound alike but mean slightly different things. There are two more words related to resistors you should know about: conductance and conductivity. We'll define these four terms and show how they are related. You will use resistance all the time, but the other terms not so much. However, it helps if you've heard of them and can tell them apart. Before reading this article, you should be familiar with [Ohm's Law](https://spinningnumbers.org/a/ideal-elements-and-sources.html#ohms-law), $v = i\,\text R$.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

* Resistance is a specific property of a circuit component (called a resistor), based on its resistivity (a material property) and its shape. The unit of resistance is the ohm, $\Omega$.

* Resistivity is an electrical property of a bulk material, measured in $\Omega \cdot m$, (ohm meters). It gives you an idea for how much the material fights back when you try to flow an electric current through it.

Reciprocals

* Conductance is the reciprocal of resistance. The unit of conductance is the siemens (always with an "s" on the end), with symbol $\text S$. 

* Conductivity is the reciprocal of resistivity, so it too is a bulk material property. The units of conductivity are siemens per meter, $\text S/m$.

* Conductance and conductivity are the same ideas as resistance and resistivity, but with the opposite attitude. They describe how much current is welcomed to flow.


----

## Resistance and resistivity

What's the difference between 'resistance' and 'resistivity'? These two terms capture the idea that materials fight against or resist the flow of current.

### Resistivity

*Resistivity* is the more general term. Resistivity is a property of a bulk material. "Bulk" means "a big chunk of". Suppose you have a chunk of graphite (the stuff used to make black pencil leads). It is actually a mixture of carbon graphite powder, clay, and glue for binder. The mixture has a certain bulk resistivity based on the proportions of what it is made of. Mixing in more carbon powder will make the resistivity lower. Resistivity is the measure of how much this stuff fights against the flow of current. Higher resistivity means more fight.  

### Resistance

*Resistance* is the specific term for the value of a particular resistor. Take your bucket of carbon/clay/glue goop and form some of it into a little rectangular or cylindrical chunk and attach wires to the ends. When the glue dries, you have made a "lumped" circuit element we call a resistor. You can measure its resistance with an ohmmeter. The meter gives you the answer in units of ohms, $\Omega$. Resistance depends on two things: the resistivity of the bulk material AND the shape of the resistor you created.

## Making resistors

You can get create different values of resistance by changing two things: the material OR the shape of the resistor.

The variable name we use for resistivity is usually the Greek lowercase rho, $\rho$ (it looks like a little p, but it's more fun to write because you start at the bottom and swoop upwards).

Here is the equation to figure out resistance if you know resistivity and shape.

![resistor structure](https://upload.wikimedia.org/wikipedia/commons/6/68/Resistivity_geometry.png){: .centered }{: height="200px"}

$\text R = \rho \,\dfrac{l}{\text A}$

$\text R$ is the resistance you are going to get from the structure you built.  
$\rho$ is the resistivity of the bulk material, units: $\Omega \cdot m$.  
$l$ is the length of the chunk of stuff you cut from the bulk material, units: $m$.  
$\text A$ is the area of the ends of the resistor, units: $m^2$. 

If the resistor happens to be a cylinder shape, then you figure out $\text A$ using the area of a circle, $\text A = \pi \, r^2$. The longwinded name for $\text A$ is *cross-sectional area*.

Look at what the equation tells us:
* Resistance $\text R$ scales up and down directly with the material property $\rho$. Using higher resistivity material means a higher resistance value. That makes sense.
* If you make $l$ longer, that makes $\text R$ bigger. That makes sense, too. A longer resistor has higher resistance. There's more resistive material the current has to flow through.
* If you make $\text A$ bigger (the resistor is fatter), that makes $\text R$ smaller. That might take a second to understand. When you make the resistor fatter, there are more parallel paths available for current to flow from one end to the other. For a given voltage across the resistor, more charge makes its way through, and that's the same as saying the resistance is smaller. 

If you switch the equation around and solve for $\rho$ you get this,

$\rho = \text R \,\dfrac{\text A}{l}$

See how this has an expression for area over length, $\text A / l$? These two geometry parameters have units of $m^2/m$, which simplifies to just $m$. This is where the unusual units of resistivity come from: $\Omega \cdot m$. When you say this out loud it's pronounced "ohm meter."

<details>
<summary>image credit</summary>
<p>Resistor image by <a href="//commons.wikimedia.org/wiki/User:Omegatron" title="User:Omegatron">User:Omegatron</a> - Created by <a href="//commons.wikimedia.org/wiki/User:Omegatron" title="User:Omegatron">User:Omegatron</a> using the <a href="https://en.wikipedia.org/wiki/GIMP" class="extiw" title="w:GIMP">GIMP</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=1699802">Link</a></p>

<p>This <a href="https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity">Wikipedia article</a> has the equation for how to figure out resistance if you know resistivity and shape.</p>
</details>

## Measuring resistance and resistivity

How can you measure resistance? We use Ohm's Law of course. An ohmmeter or multimeter has a battery inside it that applies a small voltage to the resistor being measured. If you know the voltage, and you measure the current, then the resistance is $\text R = v/i$.

How do you measure resistivity? That's a bit trickier. You might have a big chunk of some material and you want to know its resistivity. Or you may have a sheet of some unknown metal and you want to identify it by its resistivity. If you use your ohmmeter to measure something from one edge to the other, the number you get is resistance in ohms, not resistivity in ohm$\cdot$meters. The read-out on the meter changes depending on where you poke the probes on the material. This isn't doing the job. 

See if you can think of a way to use an ohmmeter to measure resistivity, before peeking.

<details>
    <summary>Measuring resistivity</summary>
    <p>We can measure resistivity by using the equation from above where we expressed resistivity in terms of resistance, area, and length. To do this, you have to sacrifice some of the material to make the measurement.</p>
 
    <p>$\rho = \text R \dfrac{\text A}{l}$</p>

    <p>If you know all three variables on the right side, you can compute $\rho$. So get out your chisel or scissors and cut off a chunk of your resistive bulk material. Then trim it to a precise size with known $\text A$ and known $l$. Put your ohmmeter probes on the $\text A$ ends of your test piece and read $\text R$ from the ohmmeter. Put all three numbers into the equation and compute $\rho$. Done!</p>
</details>

## Conductance and conductivity

Conductance and conductivity are the same ideas as resistance and resistivity, but with the opposite attitude. They describe how much current is welcomed to flow.

### Conductance

If you take the reciprocal of resistance we call that *conductance*. The unit of conductance is $1/\Omega$ or "inverse ohms". In the modern system of SI units, this has an honorary name, the siemens (with an s on the end). The symbol for siemens is $(\text S)$. The unit is named after Werner von Siemens, a German electrical engineer who founded the company with the same name. 

The idea of conductance is most useful when you have resistors in parallel. See this [article](tbd) on parallel conductance.  

<details>
<summary>mho</summary>
<p>In the old days, $1/\Omega$ was called a "mho" (Ohm spelled backwards), and the symbol for mhos was $\mho$ (inverse ohms, get it?). This terminology is really old fashioned and you shouldn't use it, unless you are writing a paper on the history of electricity.</p>
</details>

### Conductivity

A term closely related to resistivity is *conductivity*. Conductivity is the reciprocal of resistivity.

$\sigma = \dfrac{1}{\rho}$

The units of conductivity are $1/(\Omega \cdot m)$. If you look at the definition of a siemens $(1/\Omega)$ you can express conductivity as siemens per meter,

$\sigma = \text S/m$

## Summary

Here's a summary of the common variable names you will see for the various resistance terms. There's a lot of symbols to keep straight, but don't worry, you will mostly be using just the $\text R$ most of the time. These are not rules or laws, just variables that get used a lot.

name         | variable               | unit           | unit symbol
|------------|:----------------------:|:---------------|:---------------:|
Resistance   | $\text R$              | ohms           | $\Omega$
Conductance  | $\text G$              | siemens        | $\text S$
Resistivity  | $\rho$                 | ohm meters     | $\Omega \cdot m$
Conductivity | $\sigma$               | siemens/meter  | $\text S / m$

* Resistance is a specific property of a circuit component (called a resistor). Resistance is determined based on its resistivity and its shape.

* Resistivity is an electrical property of a bulk material. It tells you how much the material fights back when an electric current flows through it.

* Conductance the the reciprocal of resistance, a property of a specific circuit component.

* Conductivity is the reciprocal of resistivity, so it is a bulk material property.

## Reference

Wikipedia has a nice table of [resistivity and conductivity of various materials](https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity#Resistivity_and_conductivity_of_various_materials). The second column is resistivity, $(\rho)$, and the third  is conductivity, $(\sigma)$. They are reciprocals of each other.
