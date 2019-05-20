---
layout: article
title:  "Defining the standard electrical units"
author: Willy McAllister
comments: true
---

Electrical units can be described in a formal manner. That's what we are going to do in this article. Don't try to memorize all this the first time you read it. Come back later when you want to go a little deeper into the strict definitions of electrical units. 

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

The standard electrical units are defined in a specific order. 

>As of May 20, 2019 the definition of the Ampere has been changed---it is now based on the charge of the electron rather than a force measurement.  
>
>2019 definition: The ampere, symbol A, is the SI unit of electric current. It is defined by taking the fixed numerical value of the elementary charge e to be 1.602176634×10−19 when expressed in the unit C, which is equal to A⋅s.
>
>Previous definition: The ampere is that constant current which, if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed 1 m apart in vacuum, would produce between these conductors a force equal to 2×10−7 newton per metre of length.
>
>[Redefinition of SI base units](https://en.wikipedia.org/wiki/2019_redefinition_of_SI_base_units#Ampere)
>
>This article will revised in the near future.

## Ampere is a base unit

The *ampere* is defined first. In the SI, the ampere is an SI *base unit*, which means the ampere is the only electrical unit defined as the outcome of an experiment. 

<details>
<summary>What is the SI?</summary>
<p><strong>SI</strong> is the <a href="https://en.wikipedia.org/wiki/International_System_of_Units">International System of Units</a>, in French "<strong>S</strong>ystème <strong>I</strong>nternational d'Unités". It is the modern form of the metric system.</p>

<p><em>The International System of Units (SI)</em>. Organisation Intergouvernementale De La Convention Du Mètre. 8th ed. Paris, France, 2006.
<a href="https://www.bipm.org/utils/common/pdf/si_brochure_8_en.pdf">https://www.bipm.org/utils/common/pdf/si_brochure_8_en.pdf</a></p>
</details>

## All the rest are derived units

After defining the ampere, we *derive* the rest of the electrical units, starting with the *coulomb* and the *charge on an electron*. Then we continue on to the rest of our favorites, the *watt*, the *volt*, and the *ohm*. We derive these additional electrical units from the SI base units (the ampere, along with the meter, kilogram, and second). 

## Ampere

The definition of the SI unit of current, the *ampere*, emerges from the study of magnetism.  

Electric currents in wires give rise to magnetic fields ([Biot–Savart Law](https://en.wikipedia.org/wiki/Biot–Savart_law), 1820).

The magnetic field from one wire causes a magnetic force on a nearby wire ([Ampère's Force Law](https://en.wikipedia.org/wiki/Ampère's_force_law), 1825). 

This is the basis for defining the ampere unit. Here's the official SI definition of the ampere:

>The ampere is that constant current which—if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed $1$ meter apart in vacuum—would produce between these conductors a force equal to $2 \times 10^{-7}$ newtons per meter of length.

This definition means you can do an experiement in your laboratory to generate an accurate $1\,\text{ampere}$ current. The experiment is based on Ampère's force law. If you know the current, length, and spacing of the wires, this law tells you what the force is between the wires. 

To create a standard $1$ ampere, you perform some version of the following experiment. Set up  two $1$-meter-long wires in parallel, $1$ meter apart, and arrange for a way to measure the force on the wires (some kind of strain gauge). 

![Ampere unit experiment]({{ site.baseurl }}{% link i/standard_ampere_unit.svg %}){: .centered :}

Apply the same current to both wires, flowing in the same direction, using adjustable current sources. Each current creates a magnetic field around the two wires. The magnetic fields interact with the moving charged particles (electrons) in the other wire. This generates a mechanical force pulling the wires together. Adjust the currents up or down while measuring the force on a wire. When the force is $2 \times 10^{-7}$ newtons, the current is $1$ ampere, by definition. (This is a conceptual experiment. In [modern standards laboratories](https://www.youtube.com/watch?v=2M_WT92Kq_s) a standard ampere is created by other means.)

<details>
<summary>Why the unusual value for force?</summary>
<p>The factor $2 \times 10^{-7}$ newtons/meter is historical, brought forward from an older definition of the ampere. At one time, the ampere was defined as the current that would deposit 0.001118 grams of silver in one second from a silver nitrate solution, known as the <em>silver ampere</em>. Today's SI definition of the ampere respects that older tradition.</p>
</details>

## Coulomb
The *coulomb* is the SI unit of charge. The size of a coulomb is derived from the ampere. One coulomb is defined as the amount of charge flowing when the current is $1$ ampere.

$1 \,\text{ampere} = 1\,\text{coulomb}/\text{second}$

or equivalently,

$1 \,\text{coulomb} = 1\,\text{ampere} \cdot \,\text{second}$


## Electron charge

In 1897, J.J. Thomson proved the existence of the electron. Twelve years later, starting in 1909, Robert Millikan performed his oil drop experiments to establish the charge of the electron.

The charge on an electron can be expressed as $e^- = -1.602176565 \times 10^{-19} \,\text {coulomb}$.

If we invert this expression, we see that the coulomb can be stated in terms of number of electron charges:

$1 \,\text{coulomb} = 6.241509343 \times 10^{18} \,\text{electrons}$

### Concept check

**How many electrons in 1 ampere?**  

<details>
<summary>Answer</summary>
<p>One ampere is $1 \,\text{coulomb/second}$.</p>

<p>Answer: When a current of $1 \,\text{ampere}$ is flowing in a wire, there are $6.241509343 \times 10^{18}$ electrons flowing by every second.</p>
</details>

**How many coulombs are there in 1 mole of electrons?**  
One mole of electrons is $6.02214 \times 10^{23}$ electrons — Avogadro's Number.  

<details>
<summary>Answer</summary>
<p>Divide the number of electrons in a mole by the number of electrons in a coulomb.</p>

<p>$\dfrac{6.02214 \times 10^{23} \,\text{electrons} / \text{mole}}{ 6.24151 \times 10^{18} \,\text{electrons}/\text{coulomb}} = 96{,}485 \text{ coulombs/mole}$</p>

<p>This is known as Faraday's Constant—not to be confused with the unit of capacitance, the farad.</p>

<p>Answer: One mole of electrons is about 100,000 coulombs of charge.</p>
</details>

## Watt

The *watt* is the unit of power. Power is the rate of energy transferred or consumed in a certain amount of time; or, you can say power is the rate of doing work. In standard-speak, $1\,\text{watt}$ is the amount of power which, in one second, gives rise to an energy of $1\,\text{joule}$. 

$1 \,\text{watt} = 1 \,\text{joule}/\,\text{second}$

This is a real physics-y definition of the watt. When we talk about power in electrical systems, we can express watts as the product of current and voltage. 

$1 \,\text{watt} = 1 \,\text{ampere} \times 1\,\text{volt}$


## Volt

The *volt*  is the unit of electric potential difference—electric potential difference is also known as *voltage*. The size of 1 volt is officially defined as the potential difference between two points of a wire carrying a current of 1 ampere when the power dissipated in the wire is 1 watt.

$1 \,\text{volt} = 1\,\text{watt} / \text{ampere}$

The volt can also be expressed in terms of energy and charge as,

$1\,\text{volt} = 1 \,\text{joule}/\text{coulomb}$

You can find an intuitive description of voltage in the introductory article on [basic electrical quantities]({{ site.baseurl }}{% link _articles/basic-quantities.md %}). Also, there is a formal derivation of the meaning of voltage at the very end of the [electrostatics section](https://www.khanacademy.org/science/electrical-engineering/ee-electrostatics) on Khan Academy.

## Ohm
The *ohm* is the electrical unit of resistance. One ohm is defined as the resistance between two points of a conductor when 1 volt is applied and a current of 1 ampere is flowing.

$1 \,\text{ohm} = 1\,\text{volt}/\text{ampere}$

We've now defined, in order, a basic set of our favorite electrical units.

## Systems of Units
Over the last 200 years, there have been three main systems of scientific units: 

* SI
* MKS
* cgs

**SI** is the International System of Units—in French, **S**ystème **I**nternational d'Unités. It is the modern form of the metric system and is the most widely used system of measurement. The system was published in 1960 as the result of discussions that started in 1948. SI is based on the metre-kilogram-second system (MKS). In the United States, the SI is used in science, medicine, government, technology, and engineering.

**MKS** is based on measuring lengths in meters, mass in kilograms, and time in seconds. MKS is generally used in engineering and beginning physics. It was proposed in 1901. The most familiar units of electricity and magnetism—ohm, farad, coulomb, etc.—are MKS units.

**cgs** is based on measuring lengths in centimeters, mass in grams, and time in seconds. It was introduced in 1874. The cgs system is commonly used in theoretical physics. The difference between the SI and cgs systems goes much deeper than a simple scaling of the units for length and mass.

There are seven SI *base units*. All other units are derived from these seven.

### SI base units
{:.no_toc}

| Name    |  Symbol      | Quantity            |
|:--------|:------------:|---------------------|
| meter   | $\text{m}$   | length              |
| kilogram| $\text{kg}$  | mass                | 
| second  | $\text{s}$   | time                |
| ampere  |  $\text{A}$  | electric current    |
| kelvin  | $\text{K}$   | temperature         |
| candela | $\text{cd}$  | luminous intensity  |
| mole    | $\text{mol}$ | amount of substance |

One SI base unit comes from electricity: the ampere. The ampere has the same lofty status as the meter, kilogram, and second. It is defined as its own thing, not in terms of other units. 

<details>
<summary>Which came first, the ampere or the coulomb?</summary>
<p>There was a long debate in the 1930s and 40s to select between the ampere or the coulomb as the SI base unit representing electricity. It could have gone either way. One unit or the other could be normal scale, but not both. In the end, Monsieur Ampère's unit won the day. As a result, the ampere feels like a relatively normal-sized unit. On one hand, the coulomb is also normal-sized, $1\,\text{ampere}/\text{second}$, or it may seem like the coulomb is huge (in the sense that it takes a gigantic number of electrons to add up to one coulomb).</p>
</details>

<details>
<summary>How much charge is a coulomb?</summary>
<p>It is pretty easy for the power company to push 1 ampere of current (1 coulomb/second) through power lines to the wall plug. </p>

<p>But, suppose we were somehow able to physically isolate $1 \,\text{coulomb}$ of charge. What would that be like? Well, it would create an absolutely gigantic force. Let's put a number to it. We will do that by using Coulomb's Law to compute the force between two $1 \,\text{coulomb}$ charges placed $1 \,\text{meter}$ apart. So what you have is a ball of positive charge on one side and a ball of negative charge a meter away, so there is a strong force of attraction between them.</p>

<p>$\vec F = K \,\dfrac{q_0\, q_1}{r^2}$</p>

<p>Where $K = 9 \times 10^9$ newton-meter$^2$/coulomb$^2$</p>

<p>$\vec F = 9 \times 10^9 \cdot \dfrac{1 \cdot 1}{1^2} = 9 \times 10^9 \,\text{newtons}$</p>

<p>This is the force you would feel if a fully-loaded oil supertanker was sitting on your head! What this means is that isolated whole coulombs of charge never happen in nature.</p>
</details>

### SI derived units used in electricity
{:.no_toc}

The remaining electrical units are SI *derived* units, formed by combinations of the base units. If the ampere is the "first" electrical unit, these derived electrical units follow close behind.

|   Name  |  Symbol     | Quantity     | in terms of other SI units         |
|:--------|:-----------:|--------------|:----------------------------------:|
| coulomb | $\text{C}$  | charge                  | $\text A \cdot \text s$ |
| watt    | $\text{W}$  | power                   | $\text J / \text s$     |
| volt    | $\text{V}$  | voltage (electric potential difference) | $\text W / \text A $ |
| ohm     | $\Omega$    | resistance, impedance   | $\text V / \text A$     |
| farad   | $\text{F}$  | capacitance             | $\text C / \text V$     |
| henry   | $\text{H}$  | inductance              | $\text{Wb} / \text A$   |
| hertz   | $\text{Hz}$ | frequency               | $\text s^{-1}$          |
| siemens | $\text{S}$  | conductance| $\text A / \text V$ or $1/\Omega$    |
| weber   | $\text{Wb}$ | magnetic flux           | $\text V \cdot \text s$ |
| tesla   | $\text{T}$  | magnetic field strength | $\text{Wb} / \text m^2$ |


<details>
<summary>Resources</summary>

<p>"Ampère's Force Law." Wikipedia. December 4, 2015. <a href="https://en.wikipedia.org/wiki/Ampère's_force_law">https://en.wikipedia.org/wiki/Ampère's_force_law</a></p>

<p>"Biot–Savart Law." Wikipedia. March 4, 2016. <a href="https://en.wikipedia.org/wiki/Biot–Savart_law">https://en.wikipedia.org/wiki/Biot–Savart_law</a></p>

<p>"International System of Units." Wikipedia. March 4, 2016. <a href="https://en.wikipedia.org/wiki/International_System_of_Units">https://en.wikipedia.org/wiki/International_System_of_Units</a></p>

<p>"Magnetic Forces, Magnetic Fields, and Faraday's Law." Khan Academy. <a href="https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields">https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields</a></p>

<p><em>The International System of Units (SI)</em>. Organisation Intergouvernementale De La Convention Du Mètre. 8th ed. Paris, France, 2006.
<a href="https://www.bipm.org/utils/common/pdf/si_brochure_8_en.pdf">https://www.bipm.org/utils/common/pdf/si_brochure_8_en.pdf</a></p>
</details>
