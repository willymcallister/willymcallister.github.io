---
layout: article
title:  "Diode as a circuit element"
author: Willy McAllister
comments: true
---

![](https://ka-perseus-images.s3.amazonaws.com/5b73b4b8d4e2ea86300b0080dd00eb675519684b.jpg){: .centered :}
<p class="caption">These small glass packages have silicon diodes inside. The black band at one end indicates the side where current flows out of the diode.</p>

The diode is our first semiconductor device. A diode's distinctive feature is that it conducts current in one direction, but not the other. We won't go into the details of how a diode does this, or how it's made. Fortunately, you don't have to know how to make a diode before you can use it in a circuit.

Written by Willy McAllister.

<details>
<summary>What is a semiconductor?</summary>
<p><em>Semiconductor</em> materials fall between insulators and conductors. Semiconductors usually act like insulators, but, we control how much they conduct by changing how they are made and by applying voltages. </p>

<p>The most well-known and well-understood semiconductor material is Silicon (Si, atomic number $14$). Silicon is by far the most common material used for creating semiconductor devices. More is known about silicon than perhaps any other material on Earth.</p>

<p>Other semiconductor materials include germanium (Ge, atomic number $32$, right below Silicon on the periodic table), and gallium-arsenide, a  $1 : 1$ ratio of Gallium and Arsenic, also known as GaAs, (atomic numbers $31$ and $33$, on either side of germanium).</p> 

<img src="https://ka-perseus-images.s3.amazonaws.com/c77db171beea62246927026f663c05f9b9200997.svg" height="200px">
<p class="caption">A portion of the periodic table showing silicon (Si) and other nearby semiconductor materials. B - boron, C - carbon, N - nitrogen, Al - aluminum, Si - silicon, P - phosphorus, Ga - gallium, Ge - germanium, As - arsenic.</p>

<p>Our ability to finely control the conducting properties of silicon allows us to create modern marvels like computers and mobile phones and every other complex electronic device. The details of how a semiconductor works are governed by quantum mechanics.</p>
</details>


----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed
{:.no_toc}

A diode conducts strongly in one direction, and practically $0$ in the other. 

The $i$-$v$ curve of a diode is modeled by this non-linear equation, 

$i = \text I_\text S \left ( e^{\,qv/k\text T} -1  \right )$


<details>
    <summary>terms</summary>
<p>$i$ is the current through the diode.  <br>
$\text I_{\text S}$ is the reverse saturation current. For silicon, typically $10^{-12}\,\text{ampere}$.  <br>
$e$ is the base of the natural logarithm, $2.71828\cdots$.  <br>
$q$ is the charge on an electron,  $1.602 \times 10^{-19} \,\text{coulomb}$. <br> 
$v$ is the voltage across the diode.  <br>
$k$ is Boltzmann's constant, $1.380\times 10^{-23} \,\text{joule/kelvin}$  <br>
$\text T$ is the temperature in kelvin. Room temperature is about $300\,\text{kelvin}$.</p>
</details>

* Understand diode terms like *forward bias,* *reverse bias*, and *saturation current*. 
* Identify the terminals of a real-world diode. 
* Solve a diode circuit using a graphical method.

---

## Diode symbol

The schematic symbol for a diode looks like this,

![Diode symbol]({{ site.baseurl }}{% link i/diode_symbol.svg %}){: .centered :}{: height="140px" :}

The black arrow &#9658; in the symbol points in the same direction as the diode's forward current, $\blueD i$. The diode's voltage, $\goldD v$, is oriented with the $+$ sign on the end where forward current comes *into* the diode, just like the [sign convention for passive components]({{ site.baseurl }}{% link _articles/sign-convention.md %}). The curved orange arrow is optional; it indicates the voltage polarity.

## Diode terminals

When you draw diodes, the symbol clearly indicates the direction of forward current flow. You don't really need names for the two terminals, but if you want to know, they are the *Anode* and *Cathode*. 

![](https://ka-perseus-images.s3.amazonaws.com/7e12795c2c4153585c25efff09dcb25ecff0530f.svg){: .centered :}{: height="200px" :}

### How can I remember the anode and cathode?

For the longest time I could not remember which end of the diode was the anode and which was the cathode, I looked it up every time. I finally came up with this memory aid. The German word for cathode is *Kathode*. The big K kind of looks like a diode symbol. 

Flip the diode symbol around until it reads like a K. The Kathode is the terminal on the left.

![](https://ka-perseus-images.s3.amazonaws.com/7f258f408e2260db65ba3f38e10100a0e1a03eb6.svg){: .centered :}{: height="200px" :}

### Identify the terminals of a real-world diode

If you are handling real diodes to build a circuit, you have to figure out which way to point the diode. Real-world diodes are so small there isn't room to paint a little diode symbol on them, so you need to identify the terminals some other way.

Diodes come in all sorts of tiny packages. There are a few ways to indicate which diode terminal is which. 
 
![](https://ka-perseus-images.s3.amazonaws.com/08729c61b492c6b714e5ae5a8d65f3f459ab6f30.jpg){: .centered :}{: height="200px" :}

![](https://ka-perseus-images.s3.amazonaws.com/0e17d02f7df24eb2c1b5aa57bb91fb45dd4b0879.jpg){: .centered :}{: height="200px" :}

Diode packages like the glass and black plastic cylinders shown above usually have a painted bar near one end. The bar on the package is the bar of the diode symbol, so it indicates the cathode.

![](https://ka-perseus-images.s3.amazonaws.com/a316b5290f6557685a376de32e77708cb7fbf45c.svg){: .centered :}{: height="200px" :}

<p class="caption">The stripe (any contrasting color) corresponds to the diode's cathode.</p>

This red LED (light emitting diode) has wire leads of different length. The forward current goes into the longer lead (anode). The package may have a bump or tab sticking out on the forward current side.

![](https://ka-perseus-images.s3.amazonaws.com/b2c3f6b827ee8ada3eb9a5776013761d05e1d847.svg){: .centered :}{: height="200px" :}

<p class="caption">The longer lead corresponds to the diode's anode.</p>

### Identify the terminals with a multimeter

A reliable way to verify the identity of the terminals is using a multimeter to figure out the forward current direction. On the resistance setting, $\Omega$, the meter puts a small voltage on its test leads (this is why an ohm meter needs a battery). You  use that small voltage to see which way current flows. 

![](https://ka-perseus-images.s3.amazonaws.com/3fa8e14bb7c2a6e1afa7bccfa50d188a797eda76.svg){: .centered :}

The diode is flipped in each image. If the ohm-meter reads a finite resistance, that means the diode is conducting a small current in the forward direction, and the red $+$ lead from the meter is touching the anode. If the resistance reads O.L (for overload), the diode is not conducting current. That means the red $+$ test lead is touching the cathode.

Your meter might have a diode setting, a little diode symbol. If it does, it will display the forward voltage when the red lead is touching the forward current terminal (the anode) as shown below.

![](https://ka-perseus-images.s3.amazonaws.com/ed5a26773a3006293b964849aece72cad7da69f5.jpg){: .centered :}{: height="200px" :}

## Types of diodes

There are many types of diodes, differing in materials and processing, and specialized for different uses. Here are a few, (some of these terms haven't been defined yet)

* Silicon diode - Silicon is the most common material for making diodes. Silicon has a typical forward voltage of $0.6-0.7\,\text V$.
* Germanium diode - Made from a different element. Germanium diodes have a lower forward voltage of $0.25-0.30\,\text V$.
* Schottky diode - Made from direct contact between silicon and metal. The forward voltage is lower than regular silicon diodes, in the range of $0.15$ to $0.45\,\text V$. This is the diode in a "catwhisker" crystal radio.
![Schottky diode symbol]({{ site.baseurl }}{% link i/diode_schottky.svg %}){: .centered :}{: height="100px" :}
* Zener diode - Intentionally operated in the breakdown region, used as a voltage reference.
![Zener diode symbol]({{ site.baseurl }}{% link i/diode_zener.svg %}){: .centered :}{: height="100px" :}
* LED (light-emitting diode) - Does what its name says. Otherwise, it acts like a regular diode with a forward voltage somewhere between $2$ and $4\,\text V$ depending on the color. LEDs are made of materials on either side of Silicon on the periodic table. For example, you can make a yellow LED from gallium arsenide phosphide (GaAsP).
* Photodiode - This diode has a window to let light fall directly on the silicon surface. The current in the diode is proportional to the intensity of light. Solar cells are photodiodes.
* Small signal diode or switching diode - A silicon diode constructed to be very fast changing from forward current to reverse current and back. This is done by making the diode physically very small.

## Diode $i$-$v$ characteristic

A diode is a [non-linear device]({{ site.baseurl }}{% link _articles/linearity-RLC.md %}#non-linear-electronic-components). This is a typical $i$-$v$ curve for a silicon diode,

![Silicon diode i-v characteristic]({{ site.baseurl }}{% link i/diode1.svg %}){: .centered :}

<p class="caption">Diode $i$-$v$ curve of a silicon diode. A positive voltage (anode voltage higher than cathode voltage) puts the diode in its forward biased region. A negative voltage means the diode is operating in its reverse biased region.</p>

Take an oridinary diode and apply different voltages to it, and write down the current at each voltage. This plot is what your $i$-$v$ data will look like.

## Forward bias

Let's say we place a small positive voltage, like $+0.2$ volts, across a silicon diode. That puts us just a little bit to the right of the origin of the $i$-$v$ curve. With this small positive voltage, very little forward current flows. If we increase the voltage up to around $+0.6\,\text V$ a measurable current starts to flow through the diode in the forward direction (in the direction of the arrow &#9658; ). As the voltage moves a little above $0.6\,\text V$, the current through the diode rises rapidly. The $i$-$v$ curve is nearly vertical at this point (it tips a little to the right). 

With a positive voltage on its terminals, we say the diode is *forward biased*. A diode is forward biased when its voltage is anywhere on the $+$voltage side of the origin. In normal operation, the voltage across a forward biased silicon diode is somewhere between  $0.60 -0.75\,\text V$. If you force the voltage higher than $0.75$ volts, the diode current goes way up and it may overheat.

## Reverse bias

If you apply a negative voltage to a diode, so the $-$cathode terminal is higher voltage than the $+$anode terminal, this puts us on the left side of the $i$-$v$ curve. We say the diode is *reverse biased*. In the reverse direction, the current is very close to zero, just ever so slightly negative. 

There is a tiny bit of current that flows when a diode is reverse biased. We call it the *reverse saturation current*. This current flows in the opposite direction of the arrow &#9658;, from the cathode towards the anode. A well-made diode has a typical reverse current of $10^{-9}$ to $10^{-12}\,\text A$. In most situations, this is close enough to zero to be ignored. In some cases (like an integrated circuit with millions of diodes), the reverse saturation current becomes important and you give it a bad-sounding name: *leakage current*.

<details>
<summary>What does "bias" mean?</summary>
<p>You hear the word <em>bias</em> in conversations about diodes and transistors. It does not have a single precise definition.</p> 

<p>In everyday use, <em>bias</em> can be negative, implying unfairness or favoritism, "The rules are biased against me." Or it might describe a tendency, "They show a bias for taking action." Or "The goalkeeper has a bias for jumping to the left on penalty kicks."</p>

<p>In electronics, <em>bias</em> comes up in only a few situations. It has the sense of pulling towards one side. When talking about diodes as we are doing here, <em>forward bias</em> means an applied voltage is tugging the diode towards the forward conducting side of its $i$-$v$ curve. <em>Reverse bias</em> is the opposite, a negative voltage pulls the diode into its <em>reverse bias region</em> where it does not conduct.</p>

<p>The other place you talk about bias: You apply a <em>bias voltage</em> to the terminals of a transistor to place it in a voltage range where it works best. For example, if a transistor works best when its input terminal is between $1$ and $3$ volts, you apply a bias voltage centered at $2$ volts, right in the middle of its happy zone.</p>
</details>

## Reverse breakdown

A reverse biased diode can't hold out forever. When the voltage reaches a high negative value known as the *breakdown voltage*, $\text{V}\_{\text{br}}$, the diode starts to conduct in the reverse direction. At breakdown, the current sharply increases and becomes very high in the negative direction. A breakdown voltage $\text{V}\_\text{br}$ of $-50\,\text V$ is typical of ordinary diodes. Most of the time you don't allow the diode voltage to get near $\text{V}\_\text{br}$. 

## Diode $i$-$v$ equation

The diode $i$-$v$ relationship can be modeled with an equation. This equation is based on the physics underlying the diode action, along with careful measurements on real diodes. 

$i = \text I_\text S \left ( e^{\,qv/k\text T} -1  \right )$

![Silicon diode i-v curve]({{ site.baseurl }}{% link i/diode2.svg %}){: .centered :}

The equation covers the voltage range around the origin. It not cover where the diode breaks down. 

This plot looks more like an elbow than an exponential curve. The exponential-ness shows up if we zoom in the vertical current scale a whole bunch $(\text{milliamperes}$ $\rightarrow$ $\text{picoamperes})$. (The voltage scale is zoomed in, too.). 

![Silicon diode i-v curve close up]({{ site.baseurl }}{% link i/diode3.svg %}){: .centered :}

You can see the tiny negative reverse saturation current $-\text I_{\text S}$ flowing backwards through the diode when the diode is reverse biased. 

A typical value for $\text I_{\text S}$ in silicon is $10^{-12}\,\text A$, ($1$ picoampere). For germanium diodes, a typical value is a lot higher, $10^{-6}\,\text A$, ($1$ microampere).

## Inside the diode $i$-$v$ equation

>This section dives into the diode equation in some detail. You don't need this to use a diode in a circuit. It is okay to jump down to the example.

$i = \text I_\text S \left ( e^{\,qv/k\text T} -1  \right )$

There are many parameters in the diode equation. Let's go through them carefully.

Look for $v$, the voltage across the diode. It's up in the exponent. This explains why current $i$ has an exponential dependence on voltage $v$. 

Now lets look at all that other stuff up in the exponent of $e^{\,qv/k\text T}$. We know exponents have no dimensions. That means the other terms in the exponent $(q/k\text T)$ have to combine together to end up with units of $1/\text{volts}$. 

$q$ is the charge on an electron, in coulombs: $q = 1.602 \times 10^{-19} \,\text C$.

$k$ is the Boltzmann constant: $k = 1.380\times 10^{-23} \,\text{J/K}\,\text{(joules per kelvin)}$

$\text T$ is the temperature measured from absolute zero in $\text{kelvin}$ or $\text K$. A temperature of absolute zero, or $0\,\text K$ is $-273\,^{\circ}\text C\,\text {(celsius)}$. If a particle is at $\text T = 300\,\text K$, (room temperature), then its average kinetic energy is, 

$k\text T = 1.380\times 10^{-23} \,\text{J/K}\cdot 300\,\text K = 4.14\times 10^{-21}\,\text J$ 

If the particle happens to be an electron, we can talk about its energy per charge. *Energy per charge* might sound familiar. Its other name is *voltage*. 

$\dfrac{k\text T}{q} = \dfrac {4.14 \times 10^{-21}\,\text J} {1.602\times 10^{-19}\,\text C} = 25.8 \approx 26 \,\text{mV}$

At room temperature,  $k\text T/q$ is $26$ millivolts. That's the energy of an average everyday electron. The exponent of the diode equation can be written as $v/26\,\text{mV}$. See how this relates the diode voltage to the average energy of an electron? Boltzmann's constant connects our macro world to the micro atomic world.

If your diode is at room temperature, the diode equation becomes,

$i = \text I_\text S \left ( e^{\,v/26\text{mV}} -1  \right )$

When the diode voltage is greater than $26\,\text{mV}$ the exponent term grows rapidly. When the diode voltage is less than $26\,\text{mV}$, the exponent term is small and the $1$ term dominates.

<details>
    <summary>Boltzmann's constant</summary>
    <p>The Boltzmann constant is a very important number in physics. It connects the world we see and sense with the atomic-scale world of atoms and electrons. Suppose you have a chamber filled with gas molecules. You can measure the temperature of the chamber (a macro-world measurement). If the chamber gets warmer, down at the atomic level the gas molecules have higher kinetic energy. If you know the temperature of the gas, the Boltzmann constant $k$ relates the temperature to the average kinetic energy of a molecule. $k$ shows up wherever behavior at the atomic level is related to what happens in the macro world. Diodes conducting current is one such case. There are tons of others.</p>
    <p>The units of Boltzmann's constant are joules (of kinetic energy) per kelvin. Physicists write Boltzmann's constant as $k_B$.</p>
    <p>David dos Santos, KA's physics fellow tells you more about <a href="https://www.khanacademy.org/science/in-in-class11th-physics/in-in-phy-kinetic-theory/in-in-kinetic-molecular-theory-of-gas/v/boltzmanns-constant">Boltzmann's constant</a></p>
</details>

<details>
    <summary>"per kelvin" sounds funny</summary>
    <p>Temperature in Celsius or Fahrenheit is measured in "degrees celsius" or "degrees  fahrenheit". We write temperatures as $23\,^\circ\text C$ or $73\,^\circ\text F$, with the little circle $^\circ$ degree symbol. </p>
    <p>The units of absolute temperature are kelvin. Kelvin are defined to already <em>be</em> degrees. So we say "kelvin" instead of "degrees kelvin", since that would be redundant. The temperature in kelvin is written without the little degree circle, like this: $-273\,^{\circ}\text C\ = 0\,\text K$.</p>
    <p>The size of a kelvin is the same as a degree celcius. The only difference is the kelvin scale starts at absolute $0$ and the celcius scale starts at the freezing point of water.</p>
    <p>Try not to confuse big $\text K$ the unit for kelvin with little $k$ for Boltzmann's constant.</p>
</details>

<details>
    <summary>300 K is a nice warm room</summary>
    <p>$300\,\text K$ is $27^{\circ}\text C$ or $80^{\circ}\text F$, which is a pretty warm room. Engineers like round number that are easy to remember, so we use $300\,\text K$ for room temperature. This is close enough for circuit design.</p>
</details>

<details>
    <summary>kT on q</summary>
    <p>My physics teacher prounounced $k\text T/q$ as "kT on q". I always liked the sound of that. The reciprocal is, of course, "q on kT".</p>
</details>

## Diodes are sensitive to temperature

Since temperature $\text T$ appears in the diode $i$-$v$ equation, we know the diode curve changes at different temperatures. Increasing temperature shifts the $i$-$v$ curve to the right.


![Silicon diode i-v curve at -40C, +27C, and +85C]({{ site.baseurl }}{% link i/diode4.svg %}){: .centered :}

<p class="caption">Silicon diode equation at $\text T = -40^{\circ}\text C, \text T = +27^{\circ}\text C$, and $\text T = +85^{\circ}\text C$. Warmer temperatures shift the diode curve to the right.</p>


## Diode circuit example

Let's build a circuit with a green light-emitting diode (LED).

![LED and resistor circuit]({{ site.baseurl }}{% link i/diode_LED_circuit.svg %})  $\quad$ ![](https://ka-perseus-images.s3.amazonaws.com/d461a0e645ba757934bb811cd07e8ede7122c3f1.jpg) 

We begin with the usual analytical approach, but it gets very hard very soon.

The unknowns are $\blueD i$ and the voltage across the diode, $\goldD{v_\text{D}}$. (We don't care so much about the voltage across the resistor.) Everything shares the same current, so let's write equations for current.

The diode current $i$ in terms of $v_{\text D}$ comes from the diode equation,

$i = \text I_\text S \left ( e^{\,v_{\text D}/26\text{mV}} -1  \right )$

Ohm's Law for the resistor is,

$i = \dfrac{v_\text{R}}{120\,\Omega}$

Let's modify this a little to get $i$ in terms of $v_{\text D}$ instead of $v_{\text R}$. 

**Can you express $v_{\text R}$ in terms of $v_{\text D}$?** 

<details>
<summary>show answer</summary>
<p>Using KVL around the loop, we know $v_{\text R} = 3.3\,\text V - v_{\text{D}}$, so the resistor current becomes,</p>

<p>$i = \dfrac{3.3\,\text V - v_{\text{D}}}{120\,\Omega}$</p>
</details>

I'll rearrange the equation to make it look like a line in the slope-intercept form. (The reason will be revealed in a moment.)

$i = -\dfrac{1}{120\,\Omega}\,v_{\text D} + \dfrac{3.3\,\text V}{120\,\Omega}$

$i = -\dfrac{1}{120\,\Omega}\,v_{\text D} + 27.5\,\text{mA}$  

The slope of the line is $-\dfrac{1}{120}$. The $i$-intercept is $27.5\,\text{mA}$.

Now we set the two equations equal to get one equation in one unknown, $v_{\text D}$,  

$\text I_\text S \left ( e^{\,v_{\text D}/26\text{mV}} -1  \right ) = -\dfrac{1}{120}\,v_{\text D} + 27.5$


This non-linear equation is hard to solve. You will probably never be asked to find an analytical solution when the diode equation is involved. The usual approach with diodes is to go for an approximate answer with either a graphical solution or computer simulation. 

<details>
    <summary>load line</summary>
    <p>When resistor has its upper terminal connected to a fixed voltage $(+3\,\text V$ in this case$)$ it produces an equation of a line with a distinctive negative slope. This line has the nickname <em>load line</em>. Load lines come up again when we study transistors.</p>
</details>

### Graphical solution

Let's go back to the two simultaneous equations with two unknowns, $i$ and $v_\text D$,

$i = \text I_\text S \left ( e^{\,v_{\text D}/26\text{mV}} -1  \right )$

$i = -\dfrac{1}{120\,\Omega}\,v_{\text D} + 27.5\,\text{mA}$   

We can try to solve these two equations analytically, but it's a big pain in the neck. Instead, it's okay to be practical about it and go for an approximate answer using graphical methods. The strategy is to plot the two functions on the same graph and find where they cross. At the point of intersection, the current in the resistor equals the current in the diode.

![LED diode curve with resistor load line]({{ site.baseurl }}{% link i/diode5.svg %}){: .centered :}

<p class="caption">Graphical solution to the resistor-LED circuit. The blue line is a plot of the diode equation. The green line is a plot of the resistor "load line" equation. The red point where the two graphs intersect is where the current in the diode and resistor are the same.</p>

We get a fairly accurate answer by reading the intersection point from the graph,

$v_{\text D} = 1.7\,\text V \qquad i =  13\,\text{mA}$

Reading the graph is usually all the accuracy you need. $13\,\text{mA}$ will turn on the LED. 

<details>
<summary>Tell me more about this LED diode curve</summary>
<p>LED's are made of elements on either side of Si in the periodic table. For example, Gallium Arsenide Phosphide (GaAsP) is one of the materials used to make red LED's. With these alternate materials, the forward voltage of an LED diode is different than silicon's $0.65\,\text V$ forward voltage. </p>

<p>The diode equation gets a small tweak to allow the equation to achieve a better fit to real LED's. As shown here, a new factor $\text N$ appears in the exponent. $\text N = 1$ for silicon, and falls between $1$ and $2$ for other materials.</p>

<p>$i = \text I_\text S \left ( e^{\,qv/\text N k\text T} -1  \right )$
</p>

<p>$\text N$ moves the LED curve to the right relative to silicon diodes. For the LED diode graphed here, $\text I_\text S = 2.38\times 10^{-18}\text A$ and $\text N = 1.85$. This results in a forward voltage of about $1.7\,\text V$.</p>

<p>$\text N$ has the fancy name <em>emission coefficient</em>, which is simply a fudge factor to allow the math to fit the real world.</p>
</details>

### Concept check

problem 1  
**What is the current when the diode voltage $v_\text D$ is $0$?**

$i = $ \_\_\_\_\_\_ $\,\text{mA}$

<details>
<summary>show answer</summary>
<p>In the equation of the load line, let $v_\text D = 0$ and solve for $i$.</p>
<p>$i = -\dfrac{1}{120\,\Omega}\,0 + 27.5\,\text{mA} = 27.5\,\text{mA}$</p>   
<p>Or just look at the graph and see where the resistor line crosses the $i$ axis: $27.5\,\text{mA}$.</p>
</details>

problem 2  
**What is the voltage when the resistor load line touches the $v$-axis?**

$v = $ \_\_\_\_\_\_ $\text V$

<details>
<summary>show answer</summary>
<p>You can use the equation of the resistor load line: Let $i=0$ and solve for $v$.</p>

<p>$0 = -\dfrac{1}{120\,\Omega}\,v_{\text D} + 27.5\,\text{mA}$</p>

<p>$v_{\text D} = 27.5\,\text{mA}\cdot 120\,\Omega = 3.3\,\text V$</p>

<p>Or, look at the graph to see where the resistor load line crosses the voltage axis: $v = 3.3\,\text V$.</p>
</details>

problem 3  
**Does the $i$-axis intercept of the resistor load line depend on the value of $\text R$?**

Yes or No.

<details>
    <summary>show answer</summary>
<p>The load line touches the $i$-axis at,</p>

<p>$i\,\bigg |_{v=0} = \dfrac{\text V_{\text{BAT}}}{\text R}$</p>

<p>So, yes, the value of $\text R$ changes the point where the load line touches the $i$-axis.</p>
</details>


problem 4  
**Does the $v$-axis intercept of the resistor load line depend on the value of $\text R$?**

Yes or No.

<details>
    <summary>show answer</summary>
    <p>When $i=0$, there is no current in the resistor, so there is no voltage across it. That means it does not matter what the value of $\text R$ is. The load line touches the $v$-axis at,</p>

<p>$v\,\bigg |_{i=0} = \text V_{\text{BAT}}$</p>

<p>So, no, the value of $\text R$ has no effect on where the line hits the $v$-axis. It crosses the $v$-axis at $\text V_{\text{BAT}}$ for any value of $\text R$.</p>
</details>

### Brighter

Suppose you build this circuit and the LED is not bright enough. The brightness goes up if you increase the current. **How might you do that?** Try changing something about the circuit to increase brightness. Then sketch a new graphical solution. 

<details>
    <summary>brighter LED</summary>
    <p>One way to get more diode current is to reduce the series resistance. Lower resistance makes the resistor load line steeper. If we reduce the resistor from $200\,\Omega$ down to $100\,\Omega$ and replot the load line, we get a new solution,</p>

<p><img class="centered" src="/i/diode6.svg" /></p>

<p>Reducing the resistor to $100\,\Omega$ tips the load line upwards and raises the $i$-axis intercept up to $3.3\,\text V / 100\,\Omega = 33\,\text{mA}$. The LED current increases from $13\,\text{mA}$ to a bit more than $15\,\text{mA}$, making it brighter.</p> 

<p>You could also see what happens if you increase the supply voltage. The resistor line moves in a different way when the voltage is adjusted. Go ahead give that a try on your own.</p>
</details>

### Why have a resistor?

Suppose we want maximum brightness and the simplest circuit. How about leaving out the resistor altogether? 

**Think this through: Is this a good idea or a bad idea?**

Hint: Imagine what happens to the resistor load line as the resistor transitions gradually from $100\,\Omega$ to $0\,\Omega$.

<details>
<summary>show answer</summary>
<p>If we make the resistor smaller and smaller, the resistor load line gets steeper and steeper. The bottom of the load line is anchored at the power supply value, $3.3\,\text V$, and the intersection with the $i$ axis goes up and up and up. When the resistor value reaches $0\,\Omega$ the load line is vertical.</p>

<p><img class="centered" src="/i/diode7.svg"></p>

<p>When $\text R = 0\,\Omega$, the load line points straight up and does not intersect the diode curve until way way up there at some very high current. Two things can happen at this point. The diode burns out from the excess heat, or, assuming the diode survives, the battery runs down in just a little while. </p>

<p>It turns out to be a bad idea to leave out the resistor. You always want to put a resistor in there to "absorb" the difference in voltage between the diode's forward voltage and the power supply.</p>
</details>

## Summary
{:.no_toc}

The schematic symbol and terminal names for a diode,

![](https://ka-perseus-images.s3.amazonaws.com/7e12795c2c4153585c25efff09dcb25ecff0530f.svg){: .centered :}{: height="200px" :}

The diode can be modeled by this equation,

$i = \text I_\text S \left ( e^{\,qv/k\text T} -1  \right )$

$\text I_{\text S}$ is the *saturation current*.  For silicon diodes, a typical saturation current is $\text I_{\text S}=10^{-12}\,\text A$. 

In the exponent of the diode equation, the term $k\text T/q $ is equivalent to $26\,\text{mV}$ if the diode is near room temperature. $k$ is Boltzmann's constant, $\text T$ is the temperature in kelvin, and $q$ is the charge on an electron in coulombs. 

Near room temperature, the diode equation can be written as,

$i = \text I_\text S \left ( e^{\,v/26\text{mV}} -1  \right )$

We demonstrated a graphical solution for a diode circuit. In general, graphical methods are a good way to approach circuits with non-linear elements.

