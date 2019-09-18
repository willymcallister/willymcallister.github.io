---
layout: article
title:  "Resistance and Resistivity"
author: Willy McAllister
comments: true
---

You may have heard the terms *resistance* and *resistivity* as they relate to *resistors*. They sound alike but mean slightly different things. 

There are two more resistor words you should know about: *conductance* and *conductivity*. 

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

* *Resistance* is the property of a circuit component called a resistor. Resistance is derived from two things---the *resistivity* of the material used to make the resistor, and the shape of the resistor. The unit of resistance is the ohm, $\Omega$.

* *Resistivity* is an electrical property of bulk material. Resistivity is a measure of how much the material fights back when you push an electric current through it. Resistivity is measured in units of $\Omega \cdot m$, (ohm meters).

* *Conductance* is the reciprocal of resistance. The unit of conductance is the siemens, with symbol $\text S$. 

* *Conductivity* is the reciprocal of resistivity, so it too is a bulk material property. The units of conductivity are siemens per meter, $\text S/m$.

Conductance and conductivity are the same ideas as resistance and resistivity, but with the opposite attitude. They describe how much current is welcomed to flow.

Before reading this article make sure you are familiar with [Ohm's Law](https://spinningnumbers.org/a/ideal-elements-and-sources.html#ohms-law), $v = i\,\text R$.

----

## Resistance and resistivity

*Resistance* and *resistivity* capture the idea that materials fight against or resist the flow of current.

### Resistivity
{:.no_toc}

*Resistivity* is the more general term. Resistivity is a property of a bulk material. "Bulk" means "a big chunk of" or "a bucket of." 

Suppose you have a chunk of graphite. The graphite form of carbon conducts electricity, [about $100\times$ less than copper](https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity#Resistivity_and_conductivity_of_various_materials). It is used to make resistors and pencil leads. The actual stuff for making resistors is a mix of graphite powder, clay, and glue. A bucketful of this mixture has a bulk resistivity based on the proportions of carbon, clay, and glue. You adjust the proportions up and down to get any resistivity you want. If you mix in more carbon powder that makes the resistivity lower.

Resistivity is the measure of how much the bulk stuff fights against the flow of current. Higher resistivity means more fight. 

The variable name for resistivity is usually the Greek lowercase rho, $\rho$. It looks like a little p, but it's more fun to write because you start at the bottom and swoop up. 

### Resistance
{:.no_toc}

*Resistance* is the value of a particular resistor. Take your bucket of carbon/clay/glue goop and pull out a little blob. Form it into a little rectangle or cylinder. Attach wires to the ends. When the glue dries, you have a "lumped" circuit element called a resistor. The resistance depends the resistivity of the bulk material AND the shape of the resistor.

Resistance is the measure of how much a specific resistor fights against the flow of current. Higher resistance means more fight. 

## Making resistors

Let's make a rectangular resistor,

![resistor structure]({{ site.baseurl }}{% link i/resistivity_geometry.svg %}){: .centered }

You get different values of resistance by changing two things---the resistivity of the bulk material OR the shape of the resistor.

If you know the resistivity of the bulk material and the shape of the resistor then its resistance is,

$\text R = \rho \,\dfrac{l}{A}$

$\text R$ is the resistance you get from the specific structure you built, units: ohms, $\Omega$.  
$\rho$ is the resistivity of the bulk material, units: $\Omega \cdot m$.  
$l$ is the length of the thing you made from the bulk material, units: $m$.  
$A$ is the area of the ends of the resistor, units: $m^2$. 

(If the resistor is a cylinder you figure out $A$ using the area of a circle, $A = \pi \, r^2$.)

The equation tells us,

* Resistance $\text R$ scales up and down directly with the material property $\rho$. Using higher resistivity material means a higher resistance value. That makes sense.
* If you make $l$ longer that makes $\text R$ bigger. A longer resistor has higher resistance.  That makes sense, too. There's more resistive material the current has to flow through.
* If you make $A$ bigger (the resistor is fatter) that makes $\text R$ smaller. That might take a second to sink in. When you make the resistor fatter there are more paths available for current to flow from one end to the other. For a given voltage across the resistor, more charge makes its way through, and that's the same as saying the resistance is smaller. 

If you switch the equation around and solve for $\rho$ you get this,

$\rho = \text R \,\dfrac{A}{l}$

Notice the expression for area over length. These two geometry terms have units of $m^2/m$, which simplifies to just meters, $m$. This is where the units of resistivity come from: $\Omega \cdot m$. When you say this it's pronounced "ohm meter."

## Measuring resistance

How do you measure resistance? We use Ohm's Law of course. An ohmmeter or multimeter has a battery inside it that applies a small voltage to the resistor being measured. The meter knows the voltage and measures the current, then it calculates the resistance, $\text R = v/i$.

## Measuring resistivity

You might have a big chunk of some material and you want to know its resistivity. Or you may have a sheet of an unknown metal and you want to identify it by measuring its resistivity. How do you measure resistivity? That's a bit trickier. 

If you use an ohmmeter to measure from one edge to the other the number you get is resistance in ohms, not resistivity in ohm$\cdot$meters. Depending on where you poke the probes into the material the the meter gives a different number. This isn't doing the job. 

See if you can think of a way to use an ohmmeter to measure resistivity, before peeking.

{% capture summary %}Measure resistivity{% endcapture %}  
{% capture details %}  
We can measure resistivity using the equation from above where we expressed resistivity in terms of resistance, area, and length, 
 
$\rho = \text R \dfrac{A}{l}$

You have to sacrifice some of the material to make the measurement. You can compute $\rho$ if you know all three variables on the right side. Get out your chisel or scissors and cut off a chunk of resistive bulk material. 

Trim it to a precise size with known $A$ and known $l$. Touch your ohmmeter probes on the $A$ ends of the test piece and read $\text R$ from the ohmmeter. Put all three numbers into the equation and compute $\rho$.  
{% endcapture %}{% include details.html %} 

## Conductance and conductivity

Conductance and conductivity are the same ideas as resistance and resistivity, but with the opposite attitude. They describe how much current is welcomed to flow.

### Conductance
{:.no_toc}

If you take the reciprocal of resistance we call that *conductance*. The unit of conductance is $1/\Omega$ or "inverse ohms". In the modern system of SI units this has an honorary name, the siemens (always with an s on the end). The symbol for siemens is $(\text S)$. The unit is named after Werner von Siemens, a German electrical engineer who founded the company with the same name. 

The idea of conductance is most useful when you have resistors in parallel. See this article on [parallel conductance]({{ site.baseurl }}{% link _articles/parallel-conductance.md %}).  

{% capture summary %}moh{% endcapture %}  
{% capture details %}  
In the old days, $1/\Omega$ was called a "mho" (Ohm spelled backwards), and the symbol for mhos was $\mho$ (inverse ohms, get it?). This terminology is old fashioned and you shouldn't use it (unless you are writing a paper on the history of electricity).  
{% endcapture %}{% include details.html %} 

Where $\text R$ as the common variable name for resistance, the common variable name for conductance is $\text G$. I think this is because the letter $\text G$ has a slight resemblance to $\Omega$ rolled over on its side. It is not fully upside down, but reminds us of the antique $\mho$ symbol. 


### Conductivity
{:.no_toc}

*Conductivity* is closely related to resistivity. Conductivity is the reciprocal of resistivity.

$\sigma = \dfrac{1}{\rho}$

The units of conductivity are $1/(\Omega \cdot m)$. I can regroup the parenthesis to get $(1/\Omega)/m$. Since the definition of a siemens  is $1/\Omega$ you can express conductivity as siemens per meter,

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

* Resistance is a specific property of a circuit component (called a resistor). Resistance is based on resistivity and shape.

* Resistivity is a property of a bulk material. It tells you how much the material fights back when an electric current flows through it.

* Conductance the the reciprocal of resistance, a property of a specific circuit component.

* Conductivity is the reciprocal of resistivity, so it is a bulk material property.
