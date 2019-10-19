---
layout: article
title:  "Define the standard electrical units"
author: Willy McAllister
comments: true
---

Electrical units like current and voltage are precisely defined by an international standard.

----

>On May 20, 2019 the [definition of the ampere](https://en.wikipedia.org/wiki/2019_redefinition_of_SI_base_units#Ampere) changed---it is now based on the charge of the electron rather than a force measurement.  
>
>Previous definition: "The ampere is that constant current which, if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed 1 m apart in vacuum, would produce between these conductors a force equal to 2×10−7 newton per meter of length."
>
>New definition: "The ampere, symbol A, is the SI unit of electric current. It is defined by taking the fixed numerical value of the elementary charge $e$ to be 1.602176634×10−19 when expressed in the unit C, which is equal to A⋅s."
>
>The ampere used to be defined by a force, and the coulomb was derived from the ampere. Now it is the other way around. The coulomb is an exact multiple of the elementary charge, $e$, and the ampere is defined as a coulomb/second.

---

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

The standard electrical units are defined in a specific order,

* First, the charge of a proton is given a variable name, $e$, called the *elementary charge*. An electron has charge $-e$.
* Next, the coulomb $(\text C)$ is defined by giving $e$ a precise value in coulombs. 
* Then the ampere $(\text A)$ is defined as a flow of one coulomb per second $\text C/\text s$.
* After that we derive the rest of the electrical units---watt, volt, ohm.  

## Electron charge

In 1897, [J.J. Thomson](https://en.wikipedia.org/wiki/J._J._Thomson) at Cambridge University demonstrated the existence of the electron. In 1913, sixteen years later, [Robert Millikan](https://en.wikipedia.org/wiki/Robert_Andrews_Millikan) at the University of Chicago described his [oil drop experiment](https://en.wikipedia.org/wiki/Oil_drop_experiment) where he established the charge of the electron.

The proton and electron are *elementary particles*. The *elementary charge* is the charge of a proton, usually denoted by $e$ or $q_e$. The charge of a single electron is $−e$. This signed notation can be a little confusing, but you can usually tell from the context if $e$ refers to the charge of a proton or electron. In any case, we know the electron and proton are the smallest particles that carry charge. This charge is the basis for all other electrical units. 

## Coulomb

The *coulomb* is the honorary name for the [SI](#what-is-the-si) unit of charge. As of May 2019 the charge on an electron is defined to be exactly $-e = -1.602176634 \times 10^{-19} \,\text {coulomb}$, (no rounding, no unstated digits). This defines what the coulomb is. It lets us talk about amounts of charge with numbers.

If we take the reciprocal of $e$ the coulomb can be stated as a number of elementary charges,

$1 \,\text{coulomb} = 6.241509074 \times 10^{18} \,\text{elementary charges}$

{% capture summary %}What is the SI?{% endcapture %}  
{% capture details %}  
SI is the modern form of the metric system.

It stands for [International System of Units](https://en.wikipedia.org/wiki/International_System_of_Units), in French: "**S**ystème **I**nternational d'Unités".  

The host organization is *The Bureau of Weights and Measures* (Bureau de Poids et Mesures) Paris, France. The current specification is the 9th edition, 2019.  
[https://www.bipm.org/utils/common/pdf/si-brochure/SI-Brochure-9-EN.pdf](https://www.bipm.org/utils/common/pdf/si-brochure/SI-Brochure-9-EN.pdf) 
{% endcapture %}{% include details.html %} 

## Ampere

One *ampere* is the honorary name for the flow of one coulomb of charge per second. That's the same as saying $6.241509074 \times 10^{18}$ electrons pass by in a second.

$1 \,\text{ampere} = 1\,\text{coulomb}/\text{second}$

$1 \,\text{ampere} = 6.241509074 \times 10^{18}\,\text{electrons}/\text{second}$

### Concept check

**How many electrons are there in $1$ ampere?**  

<details>
<summary>show answer</summary>
<p>One ampere is $1 \,\text{coulomb/second}$.</p>

<p>When a current of $1 \,\text{ampere}$ is flowing in a wire, there are $6.241509074 \times 10^{18}$ electrons flowing by every second.</p>
</details>

**How many coulombs are there in $1$ mole of electrons?**  
One mole of electrons is $6.02214 \times 10^{23}$ electrons—--Avogadro's Number.  

<details>
<summary>show answer</summary>
<p>Divide the number of electrons in a mole by the number of electrons in a coulomb.</p>

<p>$\dfrac{6.02214 \times 10^{23} \,\text{electrons} / \text{mole}}{ 6.24151 \times 10^{18} \,\text{electrons}/\text{coulomb}} = 96{,}485 \text{ coulombs/mole}$</p>

<p>This is known as Faraday's Constant—–not to be confused with the unit of capacitance, the farad. One mole of electrons is about 100,000 coulombs of charge.</p>
</details>

## Derived units

After defining the elementary charge, the coulomb, and the ampere, we derive the rest of the electrical units from these plus other SI base units like the meter, joule, and second. 

### Watt

The *watt* is the honorary name for the unit of power. Power is a rate. It's the rate that energy is transferred or consumed in a certain amount of time. Or, you can say power is the rate of doing work. In standard-speak, $1\,\text{watt}$ is the amount of power which, in one second, gives rise to an energy of $1\,\text{joule}$. 

$1 \,\text{watt} = 1 \,\text{joule}/\,\text{second}$

This is a real physics-y definition of the watt. When we talk about power in electrical systems, we express watts as the product of current and voltage. 

$1 \,\text{watt} = 1 \,\text{ampere} \times 1\,\text{volt}$

### Volt

The *volt* is the honorary name for the unit of electric potential difference. $1$ volt is defined as the potential difference between two points of a wire carrying a current of $1$ ampere when the power dissipated in the wire is $1$ watt.

$1 \,\text{volt} = 1\,\text{watt} / \text{ampere}$

The volt can also be expressed in terms of energy and charge as,

$1\,\text{volt} = 1 \,\text{joule}/\text{coulomb}$

You can find an intuitive description of voltage in the introductory article on [basic electrical quantities]({{ site.baseurl }}{% link _articles/basic-quantities.md %}). For a formal derivation of voltage see [Electric potential and voltage]({{ site.baseurl }}{% link _articles/electric-potential.md %}) in the Electrostatics section.

### Ohm
The *ohm* is the honorary name for the electrical unit of resistance. One ohm is defined as the resistance between two points of a conductor when $1$ volt is applied and a current of $1$ ampere is flowing.

$1 \,\text{ohm} = 1\,\text{volt}/\text{ampere}$

Now we have a basic set of our favorite electrical units.

## Appendix

### What is the SI? 

SI is the modern form of the metric system.

It stands for [International System of Units](https://en.wikipedia.org/wiki/International_System_of_Units), in French: "**S**ystème **I**nternational d'Unités".  

The host organization is [*The Bureau of Weights and Measures*](https://www.bipm.org/en/about-us/) (Bureau de Poids et Mesures) Paris, France. 

The current specification of the SI is the [9th edition, 2019](https://www.bipm.org/utils/common/pdf/si-brochure/SI-Brochure-9-EN.pdf). 

BIPM have prepared a memo on how to measure the basic electrical units, [Mise en pratique for the definition of the ampere and other electric units in the SI](https://www.bipm.org/utils/en/pdf/si-mep/SI-App2-ampere.pdf).

### Pre-2019 definition of the ampere

{% capture summary %}Pre-2019 definition of the ampere{% endcapture %}  
{% capture details %}  
The former pre-2019 definition of the SI unit of current, the *ampere*, involved performing an experiment based on the study of magnetism. I saved this description for historical enjoyment. 

Electric currents in wires give rise to magnetic fields ([Biot–Savart Law](https://en.wikipedia.org/wiki/Biot–Savart_law), 1820).

The magnetic field from one wire causes a magnetic force on a nearby wire ([Ampère's Force Law](https://en.wikipedia.org/wiki/Ampère's_force_law), 1825). 

This is the basis for defining the ampere unit. Here's the official SI definition of the ampere:

>The ampere is that constant current which—if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed $1$ meter apart in vacuum—would produce between these conductors a force equal to $2 \times 10^{-7}$ newtons per meter of length.

This definition means you can do an experiment in your laboratory to generate an accurate $1\,\text{ampere}$ current. The experiment is based on Ampère's force law. If you know the current, length, and spacing of the wires, this law tells you what the force is between the wires. 

To create a standard $1$ ampere, you perform some version of the following experiment. Set up  two $1$-meter-long wires in parallel, $1$ meter apart, and arrange for a way to measure the force on the wires (some kind of strain gauge). 

![Ampere unit experiment]({{ site.baseurl }}{% link i/standard_ampere_unit.svg %}){: .centered :}

Apply the same current to both wires, flowing in the same direction, using adjustable current sources. Each current creates a magnetic field around the two wires. The magnetic fields interact with the moving charged particles (electrons) in the other wire. This generates a mechanical force pulling the wires together. Adjust the currents up or down while measuring the force on a wire. When the force is $2 \times 10^{-7}$ newtons, the current is $1$ ampere, by definition. (This is a conceptual experiment. In [modern standards laboratories](https://www.youtube.com/watch?v=2M_WT92Kq_s) a standard ampere is created by other means.)

Why the unusual value for force?   
The factor $2 \times 10^{-7}$ newtons/meter is historical, brought forward from an even older definition of the ampere. At one time, the ampere was defined as the current that would deposit 0.001118 grams of silver in one second from a silver nitrate solution, known as the *silver ampere*. This definition of the ampere respected that older tradition. 

Additional resources:
<p>Ampère's Force Law <a href="https://en.wikipedia.org/wiki/Ampère's_force_law">https://en.wikipedia.org/wiki/Ampère's_force_law</a></p>

<p>Biot–Savart Law. <a href="https://en.wikipedia.org/wiki/Biot–Savart_law">https://en.wikipedia.org/wiki/Biot–Savart_law</a></p>

<p>Magnetic Forces, Magnetic Fields, and Faraday's Law. Khan Academy. <a href="https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields">https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields</a></p> 
{% endcapture %}{% include details.html %} 