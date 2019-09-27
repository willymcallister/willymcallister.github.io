---
layout: article
title:  "Resistivity"
author: Willy McAllister
comments: true
---

You may have heard the terms *resistivity* and *resistance* as they relate to *resistors*. They sound alike but have slightly different meaning. Resistivity and resistance capture the idea that materials fight against the flow of current. 

There are two more resistor words you should know about: *conductivity* and *conductance*. Conductivity and conductance are the same ideas as resistivity and resistance, but with the opposite attitude. They describe how much current is welcomed to flow.

This article assumes you are familiar with [Ohm's Law](https://spinningnumbers.org/a/ideal-elements-and-sources.html#ohms-law), $v = i\,\text R$.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

* *Resistivity* is an electrical property of bulk material---a measure of how much the material fights back when you push an electric current through it. The unit of resistivity is $\Omega \cdot \text m$, (ohm meters).

* *Resistance* is the property of a circuit component called a *resistor*. Resistance is derived from two things: the *resistivity* of the material used to make the resistor, and the shape of the resistor. The unit of resistance is the ohm, $\Omega$.

* *Conductivity* is the reciprocal of resistivity, also a property of bulk material. The unit of conductivity is $\text S/\text m$, (siemens per meter).

* *Conductance* is the reciprocal of resistance. The unit of conductance is the siemens, with symbol $\text S$. 

----

## Resistivity

*Resistivity* is a property of bulk material. "Bulk" means "a big chunk of" or "a bucket of." Resistivity is the measure of how much the bulk stuff fights against the flow of current. Higher resistivity means more fight. 

The variable name for resistivity is usually the Greek lowercase rho, $\rho$. It looks like a little p, but it's more fun to write because you start at the bottom and swoop up. 

Graphite (a form of carbon) [conducts electricity](https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity#Resistivity_and_conductivity_of_various_materials) about $100\times$ less than copper. It is used to make resistors (and pencil leads). To make resistors you mix together powdered graphite, clay, and glue. A bucket of this mixture has a bulk resistivity based on the proportions of carbon, clay, and glue. You adjust the proportions up and down to get any resistivity you want. If you mix in more carbon powder that makes the resistivity lower.

## Resistance

*Resistance* is the value of a particular resistor. Take your bucket of carbon/clay/glue goop and pull out a little blob. Form it into a little rectangle or cylinder. Attach wires to the ends. When the glue dries, you have a "lumped" circuit element called a resistor. The resistance depends the resistivity of the bulk material AND the shape of the resistor.

Resistance is the measure of how much a specific resistor fights against the flow of current. Higher resistance means more fight. 

## Making resistors

Let's make a rectangular resistor,

![resistor structure]({{ site.baseurl }}{% link i/resistivity_geometry.svg %}){: .centered }

You get different values of resistance by changing two things---the resistivity of the bulk material OR the shape of the resistor.

If you know the resistivity and the shape then the resistance is,

$\text R = \rho \,\dfrac{l}{A}$

$\text R$ is the resistance of the specific structure you built, units: ohms, $\Omega$.  
$\rho$ is the resistivity of the bulk material, units: $\Omega \cdot m$.  
$l$ is the length of the resistor, units: $m$.  
$A$ is the area of the ends of the resistor, units: $m^2$. 

(If the resistor is a cylinder you figure out $A$ using the area of a circle, $A = \pi \, r^2$.)

The equation tells us,

* Resistance $\text R$ scales up and down directly with the material property $\rho$. Using higher resistivity material means a higher resistance value. That makes sense.

* If you make $l$ longer then $\text R$ gets bigger. A longer resistor has higher resistance. There's more resistive material the current has to flow through. That makes sense, too. It's like stringing out resistors in series.

* If you make $A$ bigger (the resistor gets fatter) then $\text R$ gets *smaller*. That might take a second to sink in. When you make the resistor fatter there are more paths available for current to flow. It's like connecting skinny resistors side-by-side in parallel. 

If you solve the resistance equation for $\rho$ you get,

$\rho = \text R \,\dfrac{A}{l}$

Notice the term with area over length, which has units of $m^2/m$. This simplifies to just meters, $m$. So the units of resistivity are $\Omega \cdot m$, "ohm meter.""

## Measuring resistance

How do you measure resistance? We use Ohm's Law of course. An ohmmeter or multimeter has a battery inside it that applies a small voltage to the resistor being measured. The meter knows the voltage and measures the current, then it calculates the resistance, $\text R = v/i$.

## Measuring resistivity

You might have a big chunk of some material and you want to know its resistivity. Or you may have a sheet of an unknown material and you want to identify it by measuring its resistivity. How do you measure resistivity? That's a bit tricky. 

You might try to use an ohmmeter to measure between two points. But, the meter tells you resistance in ohms, not resistivity in ohm$\cdot$meters. Depending on where you jab the probes into the material the the meter gives a different number. This isn't doing the job. 

Can you can think of a way to use an ohmmeter to measure resistivity?

{% capture summary %}Measure resistivity{% endcapture %}  
{% capture details %}  
We measure resistivity using the equation where we found resistivity in terms of resistance, area, and length, 
 
$\rho = \text R \dfrac{A}{l}$

You basically sacrifice some material to build a carefully dimensioned resistor. You can compute $\rho$ if you know all three variables on the right side. Get out your chisel or scissors and cut off a chunk of bulk material. 

Trim it to a precise size with known $A$ and known $l$. Touch your ohmmeter probes on the $A$ ends of the test piece and read $\text R$ from the ohmmeter. Put all three numbers into the equation and compute $\rho$.  
{% endcapture %}{% include details.html %} 

## Conductance

The reciprocal of resistance is called *conductance*. The unit of conductance is $1/\Omega$ or "inverse ohms". In the SI system this unit has an honorary name, the siemens (always with an s on the end). The symbol for siemens is $(\text S)$. The unit is named after Werner von Siemens, a German electrical engineer who founded the company with the same name. 

The idea of conductance is most useful when you have resistors in parallel. See this article on [parallel conductance]({{ site.baseurl }}{% link _articles/parallel-conductance.md %}).  

{% capture summary %}moh{% endcapture %}  
{% capture details %}  
In the old days, $1/\Omega$ was called a "mho" (Ohm spelled backwards), and the symbol for mhos was $\mho$ (inverse ohms, get it?). This terminology is old fashioned and you shouldn't use it (unless you are writing a paper on the history of electricity).  
{% endcapture %}{% include details.html %} 

Where $\text R$ as the common variable name for resistance, the common variable name for conductance is $\text G$. I think this is because the letter $\text G$ has a slight resemblance to $\Omega$ rolled over on its side. It is not fully upside down, but reminds us of the antique $\mho$ symbol. 

## Conductivity

The reciprocal of resistivity is called *conductivity*.

$\sigma = \dfrac{1}{\rho}$

The unit of conductivity is $1/(\Omega \cdot m)$. If you regroup the parenthesis you get $(1/\Omega)/m$. Since the definition of a siemens is $1/\Omega$ you express conductivity as siemens per meter,

$\sigma = \text S/m$

## Summary
{:.no_toc}

There's a lot of names and symbols to keep straight, but don't worry, you will use $\text R$ most of the time.

name         | variable               | unit           | unit symbol
|------------|:----------------------:|:---------------|:---------------:|
Resistance   | $\text R$              | ohms           | $\Omega$
Conductance  | $\text G$              | siemens        | $\text S$
Resistivity  | $\rho$                 | ohm meters     | $\Omega \cdot m$
Conductivity | $\sigma$               | siemens/meter  | $\text S / m$

* Resistance is a property of a circuit component called a resistor. Resistance is based on two things: resistivity and shape.

* Resistivity is a property of bulk material. It tells you how much the material fights back when an electric current flows through it.

* Conductance the the reciprocal of resistance, a property of a specific circuit component.

* Conductivity is the reciprocal of resistivity, so it is a bulk material property.
