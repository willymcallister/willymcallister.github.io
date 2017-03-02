---
layout: article
title:  "Defining the standard electrical units"
author: Willy McAllister
comments: true
---

Electrical units can be described in a formal manner, and that's what we are going to do in this article. The standard electrical units are defined in a specific order. 

The *ampere* is defined first. It is called an SI *base unit*, the only electrical unit derived from the outcome of an experiment. 

From the ampere, we *derive* all the rest of the electrical units. Next up after the ampere comes the *coulomb* and *charge on an electron*. 

Then we derive the rest of our favorites, the *watt*, the *volt*, and the *ohm*. 

These *derived* electrical units are defined in terms of the ampere and other SI base units (meter, kilogram, second). 

<p>
<details>
<summary>What does SI mean?</summary>
<p><b>SI</b> is the International System of Units, in French "Système International d'Unités". It is the modern form of the metric system.</p>
</details>
</p>

## Ampere
The definition of the SI unit of current, the **ampere**, comes from the study of magnetism. Electric currents in wires give rise to magnetic fields (Biot–Savart Law, 1820). Those magnetic fields in turn give rise to magnetic forces on the wires (Ampere's Force Law, 1825). Two parallel wires carrying a current will exert a force between them. The official SI definition of the ampere is as follows:

The ampere is that constant current which—if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed $1$ meter apart in vacuum—would produce between these conductors a force equal to $2 \times 10^{-7}$ newtons per meter of length.

The definition of the ampere comes from the outcome of an experiment you can do in a laboratory. The experiment is based on [Ampère's force law](https://en.wikipedia.org/wiki/Amp%C3%A8re%27s_force_law). To create a standard $1$ ampere, you perform some version of the following experiment. Set up  two $1$-meter-long wires in parallel, $1$ meter apart, and arrange for a way to measure the force on the wires (some kind of strain gauge). 

![Ampere unit experiment]({{ site.baseurl }}{% link i/4ampere_unit.svg %}){:height="234px" width="420px"}

Apply the same current to both wires, flowing in the same direction, using adjustable current sources. Each current creates a magnetic field around the two wires. The magnetic fields interact with the moving charged particles (electrons) in the other wire. This generates a mechanical force pushing the wires together. Adjust the currents up or down while measuring the force on a wire. When the force is $2 \times 10^{-7}$ newtons, the current is $1$ ampere, by definition. 

<p>
<details>
<summary>Why the unusual value for force?</summary>
<p>The factor $2 \times 10^{-7}$ newtons/meter is historical, brought forward from an older definition of the ampere. At one time, the ampere was defined as the current that would deposit 0.001118 grams of silver in one second from a silver nitrate solution, known as the <em>silver ampere</em>. Today's SI definition of the ampere respects that older tradition.</p>
</details>
</p>

## Coulomb
The **coulomb** is the SI unit of charge. The size of a coulomb is derived from the ampere. One coulomb is defined as the amount of charge flowing when the current is $1$ ampere.

$1 \,\text{ampere} = 1\,\text{coulomb}/\text{second}$

or equivalently,

$1 \,\text{coulomb} = 1\,\text{ampere} \cdot \,\text{second}$


## Electron charge

In 1897, J.J. Thompson proved the existence of the electron. Twelve years later, starting in 1909, Robert Millikan performed his oil drop experiments to establish the charge of the electron.

The charge on an electron can be expressed as $e^- = -1.602176565 \times 10^{-19} \,\text {coulomb}$.

If we invert this expression, we see that the coulomb can be stated in terms of number of electron charges:

$1 \,\text{coulomb} = 6.241509343 \times 10^{18} \,\text{electrons}$

### Concept check

**How many electrons in 1 ampere?**  

<p>
<details>
<summary>Answer</summary>
<p>One ampere is $1 \,\text{coulomb/second}$.</p>

<p>Answer: When a current of $1 \,\text{ampere}$ is flowing in a wire, there are $6.241509343 \times 10^{18}$ electrons flowing by every second.</p>
</details>
</p>

**How many coulombs are there in 1 mole of electrons?**  
One mole of electrons is $6.02214 \times 10^{23}$ electrons — Avogadro's Number.  

<p>
<details>
<summary>Answer</summary>
<p>One mole of electrons corresponds to the below amount of coulombs:</p>

<p>$\dfrac{6.02214 \times 10^{23} \,\text{electrons} / \text{mole}}{ 6.24151 \times 10^{18} \,\text{electrons}/\text{coulomb}} = 96{,}485 \text{ coulombs/mole}$</p>

<p>This is known as Faraday's Constant—not to be confused with the unit of capacitance, the farad.</p>

<p>Answer: One mole of electrons is about 100,000 coulombs of charge.</p>
</details>
</p>

## Watt

The **watt** is the unit of power. Power is the rate of energy transferred or consumed per unit of time; equivalently, power is the rate of doing work. In standard-speak, the watt is the power which in one second gives rise to energy of 1 joule. 

$1 \,\text{watt} = 1 \,\text{joule}/\,\text{second}$

## Volt

The **volt**  is the unit of electric potential difference—electric potential difference is also known as **voltage**. The size of 1 volt is officially defined as the potential difference between two points of a wire carrying a current of 1 ampere when the power dissipated in the wire is 1 watt.

$1 \,\text{volt} = 1\,\text{watt} / \text{ampere}$

The volt can also be expressed in terms of energy and charge as,

$1\,\text{volt} = 1 \,\text{joule}/\text{coulomb}$

You can find an intuitive description of voltage in the introductory article on basic electrical quantities. Also, there is a formal derivation of the meaning of voltage in the electrostatics section.

## Ohm
The **ohm** is the electrical unit of resistance. One ohm is defined as the resistance between two points of a conductor when 1 volt is applied and a current of 1 ampere is flowing.

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

There are seven SI **base units**. All other units are derived from these seven.

### SI base units

| Name    |  Symbol      | Quantity            |
|:--------|:------------:|---------------------|
| meter   | $\text{m}$   | length              |
| kilogram| $\text{kg}$  | mass                | 
| second  | $\text{s}$   | time                |
| ampere  |  $\text{A}$  | electric current    |
| kelvin  | $\text{K}$   | temperature         |
| candela | $\text{cd}$  | luminous intensity  |
| mole    | $\text{mol}$ | amount of substance |
|         |              |                     |

One SI base unit comes from electricity: the ampere. The ampere has the same lofty status as the meter, kilogram, and second. It is defined as its own thing, not in terms of other units. 

<p>
<details>
<summary>ampere vs. coulomb</summary>
<p>There was a long debate in the 1930s and 1940s within the international standards community to select the ampere or the coulomb as the SI base unit representing electricity. It could have gone either way. One or the other could be normal scale, but not both. In the end, Monsieur Ampère's unit won the day. As a result, the ampere feels like a relatively normal-sized unit, whereas the coulomb seems huge (in the sense that it takes a huge number of electrons to add up to one coulomb).</p>

<p>It is pretty easy for the power company to push 1 ampere (1 coulomb/second) through power lines to a wall plug. But, if you were somehow able to phsically isolate $1 \,\text{coulomb}$ of charge, it would create a gigantic force. Let's put a number to it by using Coulomb's Law to compute the force between two $1 \,\text{coulomb}$ charges placed $1 \,\text{meter}$ apart:</p>

<p>$\vec F = K \,\dfrac{q_0\, q_1}{r^2} \,,\qquad K = 9 \times 10^9$ newton-meter/coulomb$^2$</p>

<p>$\vec F = 9 \times 10^9 \cdot \dfrac{1 \cdot 1}{1^2} = 9 \times 10^9 \,\text{newtons}$</p>

<p>This is the force you would feel if a fully-loaded oil supertanker was sitting on your head.</p>
</details>
</p>

### SI derived units used in electricity

The remaining electrical units are SI **derived** units, formed by combinations of the base units. If the ampere is the "first" electrical unit, these derived electrical units follow close behind.

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
|         |             |                         |                         |


<p>
<details>
<summary>References</summary>
<p>"Ampère's Force Law." Wikipedia. December 4, 2015. <a href="https://en.wikipedia.org/wiki/Ampère's_force_law">https://en.wikipedia.org/wiki/Ampère's_force_law</a></p>

<p>"Biot–Savart Law." Wikipedia. March 4, 2016. <a href="https://en.wikipedia.org/wiki/Biot–Savart_law">https://en.wikipedia.org/wiki/Biot–Savart_law</a></p>

<p>"International System of Units." Wikipedia. March 4, 2016. <a href="https://en.wikipedia.org/wiki/International_System_of_Units">https://en.wikipedia.org/wiki/International_System_of_Units</a></p>

<p>"Magnetic Forces, Magnetic Fields, and Faraday's Law." Khan Academy. <a href="https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields">https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields</a></p>

<p><em>The International System of Units (SI)</em>. Organisation Intergouvernementale De La Convention Du Mètre. 8th ed. Paris, France, 2006.
<a href="http://www.bipm.org/utils/common/pdf/si_brochure_8_en.pdf">http://www.bipm.org/utils/common/pdf/si_brochure_8_en.pdf</a></p>
</details>
</p>

