---
layout: article
title:  "Rarely asked questions"
author: Willy McAllister
comments: true
---

A collection of amusing, interesting, (and possibly useful), engineering questions.

See if you can work out answers on your own before peeking at the answer.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Physics

#### What does a force of $1$ newton feel like?

Think of a common object that pushes on your hand with a force of $1$ newton.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
The definition of a newton is,

$1 \,\text N = 1 \,\dfrac{\text{kg} \cdot \text m}{\text s^2}$

Newton's first law of motion is $F = m\, a$.

$m$ is the mass of the object, measured in kilograms.

In a gravitational field we give $a$ a different name, the acceleration due to gravity is called $g$. The first law becomes,

$F = m \, g$

On the surface of Earth, $g$ is measured to be $9.8 \,\frac{meters}{sec^2}$.

For this exercise, to be lazy, we round $g$ to $10$,

$F = 10 \, m$

To get an $F$ of $1\,\text N$, think of something that weighs $0.1\,\text{kg} \,(100\,\text{grams}$ or $3.5\,\text{oz})$. 

In honor of Isaac Newton, I pick an apple. Check how much an apple weighs the next time you visit the grocery store. Rest an apple on your hand and the force you feel is,

$F = 10 \cdot 0.1 = 1 \,\text N$

Answer: On earth, a newton of force feels like an apple resting on your hand.
{% endcapture %}{% include details.html %}

#### How far does light travel in $1$ ns?  

The speed of light in a vacuum is $3 \times 10^8\,\text{meters/sec}$.  

{% capture summary %}show answer{% endcapture %}  
{% capture details %}    
In $1\,\text{sec}$ light travels $3 \times 10^8\,\text{meters}$.  

In $1\,\text{ns}\,(1 \times 10^{-9}\,\text{seconds})$ light travels,

$3 \times 10^{8-9} \,\text{meters} = 3 \times 10^{-1}\,\text{meters}$ or $30\,\text{centimeters}$ or about $1\,\text{foot}$.

Answer: light travels a foot per nanosecond.

If someone asks, "How long is a nanosecond?", hold your hands a foot apart.

Enjoy Admiral Grace Hopper's [nanosecond wire](https://www.youtube.com/watch?v=JEpsKnWZrJ8).
{% endcapture %}{% include details.html %}

#### How many coulombs are there in a mole of electrons?

The charge on an electron is a measured value, 
$e^- = -1.60218 \times 10^{-19} \,\text {coulomb}$.

A mole of anything is $6.02214 \times 10^{23}\,\dfrac{\text{particles}}{\text{mole}}\qquad$ (Avogadro's Number)

{% capture summary %}show answer{% endcapture %}  
{% capture details %}    
$1$ mole of electrons has a charge of, 

$1.60218 \times 10^{-19} \,\dfrac{\text C}{ \text e^-} \cdot 6.02214 \times 10^{23} \,\dfrac{\text e^-}{\text{mole}} = 96{,}485 \,\dfrac{\text C}{ \text{mole}}$

This is known as Faraday's Constant. 

Answer: One mole of electrons is about $100{,}000$ coulombs of negative charge.
{% endcapture %}{% include details.html %} 

#### How does electric force compare to the force of gravity? 

Do a thought experiment where you pluck an electron from $1$ out of every $10$ million molecules in an apple and transfer those electrons into another apple. The first apple will have an excess of positive charge, the second will have an excess of negative charge. Compute the electric force between the apples if they are $1$ meter apart. Compare that to the gravitational force between an apple and Earth---a force of about [$1$ newton](#what-does-a-force-of-1-newton-feel-like). 

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Let's model our apple as a sphere with diameter $7\frac{1}{4}$ cm. This sphere has a volume of,

$V_{\text{apple}} = \dfrac{4\pi}{3} \,r^3 =  \dfrac{4\pi}{3}\left (\dfrac{0.0725\,\text m}{2} \right)^3 = 0.000200 \,\text{m}^3 = 200 \,\text{cm}^3$

**How many moles of molecules are there in an apple?** 

The density of atoms in an apple (and just about any other solid) is about $3 \times 10^{22}$ molecules per cubic centimeter. That's a good number to remember. So an apple contains about $200 \,\text{cm}^3 \cdot 3 \times 10^{22} \,\text{molecules}/\text{cm}^3 = 6 \times 10^{24}$ molecules. 

In moles that would be, 

$\dfrac{6 \times 10^{24}\,\text{molecules}/\text{apple}}{6. 02 \times 10^{23} \,\text{molecules}/{\text{mole}}} = 10 \,\text{moles of molecules in an apple}$

**After transferring an electron from 1 out of every 10 million molecules, what is the excess charge on each apple?** 

A mole of electrons contains $100{,}000$ coulombs of electron charge. If we just think about a single electron on each molecule in the apple, how many coulombs is that?

$10\,\text{moles/apple} \times 10^5 \,\text{coulombs/mole} = 10^6 \,\text{coulombs/apple}$

From this we pick out an electron from $1$ out of $10$ million molecules,

$\dfrac{10^6 \,\text{coulombs}} {\text{transfer }1 \,\text{in} \,10^6 \,\text{electrons}} = 1 \,\text{coulomb of charge transferred}$

Our first apple is missing a coulomb of electrons so it has a charge of $+1\,\text C$. Our second apple has an extra coulomb of electrons so it has a charge of $-1\,\text C$.

**What is the attractive force between a $+1 \,\text C$ apple and a $-1 \,\text C$ apple if they are $1$ meter apart?**

This calls for Coulomb's Law to compute the force,

$\vec F = K \,\dfrac{q_0\, q_1}{r^2} \,,\qquad K = 9 \times 10^9\,\text{newton-meter}/\text{coulomb}^2$

$\vec F = 9 \times 10^9 \cdot \dfrac{1 \cdot 1}{1^2} = 9 \times 10^9\,\text{newtons}$
 
This is the force you would feel if a fully-loaded oil supertanker was sitting on your head. ([LR2 supertanker](https://en.wikipedia.org/wiki/Tanker_(ship)#Tanker_capacity))

![Suezmax supertanker]({{ site.baseurl }}{% link i/supertanker.jpg %}){: .centered :}

Gravity is very very weak. Every molecule in the apple is attracted to every molecule in our huge planet, and yet, even with this huge attractive mass nearby it is super easy to lift an apple against the force of gravity. 

To generate the electric force, we plucked an electron from $1$ out of $10$ million apple molecules and put them in another apple a meter away. The resulting electric force is unimaginably huge. 

The electric force is so strong the vast majority of positive and negative charges have found a mate of the other sign and become neutral. That's why electric forces are not so apparent in our everyday lives. Almost every charge is neutralized. In electric circuits we take advantage of very slight imbalances in charge.

Answer: The electric force is a lot bigger than gravity, REALLY A LOT.
{% endcapture %}{% include details.html %}

#### Personal measurement tools

Here are some measurement tools you carry around with you, 

$1$ cm is the width of your little finger.  
$1$ inch is the distance from knuckle to knuckle on a finger.   
$1$ cubit is the distance from your elbow to the tip of your middle finger.  
(Noah's Ark was dimensioned in cubits.)    
Your arm span is about the same as your height. ([Vitruvian man](https://en.wikipedia.org/wiki/Vitruvian_Man)) 

A grape has a volume of about $1$ cubic centimeter $(\text{cc})$. $1\,\text{cc}$ of water weights $1$ gram, so use a grape to think about grams. A US five cent coin (nickel) weights $5$ grams or $5$ grapes. A US penny weights half as much as a nickel, about $2.5$ grapes.

The fathom (six feet or 1.8 meters) is how sailors measure depth. It comes from your arm span. Sailors measured depth by throwing a weighted rope over the side. They pull the rope up arm over arm and count how many pulls to lift the weight to the surface. That's the depth in fathoms.

## Electronics

#### How many electrons pass by in $1$ ns when the current is $1$ nA?

{% capture summary %}show answer{% endcapture %}  
{% capture details %}    
A current of $1$ ampere is defined as $1$ coulomb/second.  
A current of $1$ nanoampere is $10^{-9}$ coulomb/second.  
A charge of $-1$ coulomb has $6.24\times 10^{18}$ electrons. 

Ignoring the sign of the electron,  
$1$ ampere = $6.24 \times10^{18}$ electrons/second

Scaling down to nanoamperes,  
A current of $1$ nanoampere is $6.24 \times10^{(18-9)} \,\text e^- / \,\text{s} = 6.24 \times 10^9\,\text e^- / \,\text{s}$   

($1$ nanoampere is $6.24$ billion electrons/second.)

Now shorten the time from a second to a nanosecond, 

$1$ nanoampere for $1$ nanosecond is $6.24 \times 10^{9} \,\text e^-/ \,\text s \cdot 10^{-9} \,\text s = 6.24 \times 10^0 \,\text e^- / \,\text{ns}$

Answer: $1$ nanoampere is a current of $6.24$ electrons passing by every nanosecond.
{% endcapture %}{% include details.html %} 

#### How far does electricity go in $1\,\text{ns}ns, on a circuit board? an integrated circuit?

The distance a signal moves depends on the material it is moving through.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}    
When electromagnetic waves travel through something other than a vacuum the wave slows down. The slowdown depends on the material, characterized by its _dielectric constant_, also called [_relative permittivity_](https://en.wikipedia.org/wiki/Relative_permittivity), symbol $\epsilon$ (epsilon) or sometimes $\kappa$ (kappa). 

We know the dielectric constant of common electronic materials, 

* Air is a shade greater than $1$ (a negligible slowdown compared to vacuum).  
* Teflon$\text{\textregistered}$ (the surface on non-stick pots and pans) is $2$.  
* Most circuit boards are $4$ (that's why the material is called FR4).
* Silicon is $11$.
* Water is whopping $80$. Light travels $80$ times slower in water than it does in air. Whenever you use a touchscreen it senses the water in your fingertip as it slows down an AC signal. That's why a pencil doesn't work on a touchscreen---no water.

If you run a digital system clock at $2.5$ GHz that means there is $\dfrac{1}{2.5\times 10^9} = 0.4\,\text{nsec}$ between each rising clock edge. 

On a printed circuit board ($\epsilon = 4$) the signal travels $4$ times slower than light in a vacuum: $1\,\dfrac{\text{ft}}{\text{ns}}/4 = 3$ inches in $1$ nsec, or $1.2$ inches $(3$ cm$)$ in one clock tick $(0.4$ nsec$)$. 

On a silicon integrated circuit ($\epsilon = 11$) the signal travels $1\,\dfrac{\text{ft}}{\text{ns}}/11$ or only about $1\,\text{inch}$ in a nanosecond, or $0.43$ inches $(1\,\text{cm})$ in one clock tick $(0.4\,\text{nsec})$.

This is why super high-speed signals in modern computers and mobile phones are confined to a single integrated circuit less than $1$ centimeter across to make sure signals reach their destination in time. This is one of the reasons why computer speeds have not progressed beyond $4\,\text{GHz}$ in the last ten years or so. The speed of light in silicon is a key limiting factor.
{% endcapture %}{% include details.html %} 

#### How many silicon atoms fit across $15$ nanometers?  

A modern silicon integrated circuit process has features as small as $15\,\text{nm}$. How many silicon atoms span this distance? 

{% capture summary %}show answer{% endcapture %}  
{% capture details %} 
$1\,\text{nanometer} = 10\,\text{angstrom}, \mathring{\text A}$

A silicon atom is about $0.2\,\text{nm}$ or $20\,\mathring{\text A}$ in diameter. The spacing between atoms in a crystal is $0.235\,\text{nm}$ or $2.35\,\mathring{\text A}$ in a [zig-zag pattern](https://www.princeton.edu/~maelabs/mae324/glos324/silicon.htm). 

![Silicon crystal]({{ site.baseurl }}{% link i/silicon_crystal.gif %}){: .centered :}

Silicon crystal structure. The distance between the two colored Si atoms is $2.35\,\mathring{\text A}$.
{: .caption :}

$15 \,\text{nm} / .235 \,\text{nm silicon atomic spacing} = 64$ silicon atoms 

Answer: $64$ silicon atoms fit across a $15\,\text{nm}$ feature.

Chip makers have mastered manufacturing at the atomic level. 
{% endcapture %}{% include details.html %}

#### How many impurity atoms do you add to silicon to make a transistor?  

Impurities like boron and phosphorous are added to pure silicon to turn it into a transistor. The concentration of impurity atoms ranges between $10^{13}/\text{cm}^3$ and $10^{18}/\text{cm}^3$. 

The density of silicon (and just about any other solid) is $3 \times 10^{22}$ atoms per $\text{cm}^3$. 

What is the ratio of impurity atoms to silicon atoms?

{% capture summary %}show answer{% endcapture %}  
{% capture details %} 
We'll assume a concentration of $10^{15}\,\text{impurity atoms}/\text{cm}^3$.

The ratio of silicon atoms to impurity atoms is,

$3 \times 10^{(22-15)} = 3 \times 10^6$ 

Answer: The ratio is one impurity atom for every three million silicon atoms. 

This changes silicon from an insulator into a transistor, the basis of the electronic age.
{% endcapture %}{% include details.html %}

#### How many square microns are there in a square millimeter?

A *micron* is engineering slang for a micrometer, a linear distance of $10^{-6}\,\text{meter}$, $\mu\text m$. It is common laziness to drop the $\text m$ and write a dimension as $2\,\mu$ (two microns). 
 
{% capture summary %}show answer{% endcapture %}  
{% capture details %}    
A $1\,\text{mm}$ square is $1000\,\text{micrometers}$ on a side, $1000\,\mu$.

The area of the square is $1000\,\mu \times 1000\,\mu = 1 \times 10^6$ square microns.

Answer: A $1\,\text{mm}$ square is a million square microns.

In a modern IC process the area of a simple gate like a 2-input NAND is around $1\,\mu^2$.

If you are designing a custom integrated circuit $1$ mm on a side, your design has $1$ million square microns. That is a lot of area to work with---your chip will be fantastic.
{% endcapture %}{% include details.html %}

#### How much is a puff?

The pins of an integrated circuit have a capacitance of about $1\,\text{pF}$. You can make your own $1\,\text{pF}$ (picofarad or "puff") capacitor by twisting two $1\text{-inch}\,(2\,\text{cm})$ pieces of regular insulated hookup wire together.

![Twisted pair]({{ site.baseurl }}{% link i/twisted_pair.svg %}){: .centered :}

If you have a capacitance meter in your lab (these are not common) measure your twisted pair to confirm its value. 

#### What is your capacitance to the surroundings?

The capacitance between your head and the ceiling is about $10\,\text{pF}$. If you are wearing shoes your capacitance to the floor is about $100 \,\text{pF}$.

[Wikipedia: Body capacitance](https://en.wikipedia.org/wiki/Body_capacitance)

## Microfluidics

I worked in a microfluidics research group. We designed printers to spit DNA and antibodies onto glass slides. These little nuggets helped our intuition.

#### How big is a microliter?

{% capture summary %}show answer{% endcapture %}  
{% capture details %}    
$1$ liter is the volume of a cube $10$ cm on a side, $10 \,\text{cm} \times 10 \,\text{cm} \times 10 \,\text{cm}$, or $1000$ cm$^3$.  

$1$ microliter is $10^{-6}$ liter, or $10^{-6} \times 10^3  = 10^{-3}$ cm$^3$ 

$10^{-3}$ cm$^3$ is the volume of a cube with sides $0.1 \,\text{cm} \times 0.1 \,\text{cm} \times 0.1 \,\text{cm}$ 

$0.1$ cm is $1$ mm, so, 

Answer: $1$ microliter is the volume of a cube $1$ mm on a side. (a small droplet)

![Cube microliter]({{ site.baseurl }}{% link i/cube_microliter.svg %}){: .centered }

A glucose meter requires about $1.6$ microliters of blood to perform an accurate test.
{% endcapture %}{% include details.html %}

#### How big is a nanoliter?

{% capture summary %}show answer{% endcapture %}  
{% capture details %}    
$1$ liter is the volume of a cube $10$ cm on a side, $10$ cm 
$\times 10$ cm x $10$ cm, or $1000$ cm$^3$.

$1$ nanoliter is $10^{-9}$ liter, or $10^{-9}\times 10^3 = 10^{-6}$ cm$^3$ 

$10^{-6}$ cm$^3$ is the volume of a cube with dimensions $0.01$ cm $\times 0.01$ cm $\times 0.01$ cm. 

$0.01$ cm is $0.1$ mm or $100$ microns, so, 

Answer: $1$ nanoliter is the volume of a cube $100$ microns on a side.

![Cube nanoliter]({{ site.baseurl }}{% link i/cube_nanoliter.svg %}){: .centered }

$1$ cubic micron, $\mu^3 = 10^{-6}$ nanoliter

$1$ red blood cell $= 100 \,\mu^3$, [source](https://book.bionumbers.org/how-big-is-a-human-cell/)
{% endcapture %}{% include details.html %}

#### How many water molecules are there in a raindrop?

![Raindrop]({{ site.baseurl }}{% link i/raindrop.svg %}){: .centered }

A raindrop is roughly a sphere, with a diameter of about $2\,\text{mm}$, or a radius of $1\,\text{mm}$.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}
A $2\,\text{mm}$ sphere has a radius of $1\,\text{mm}$ and a volume of,

$\dfrac{4}{3}\pi\,r^3 = \dfrac{4}{3}\pi\,0.001^3 = \dfrac{4}{3}\pi\,\text{mm}^3 = 4.2\,\text{mm}^3 = 4.2\,\mu\text L$

(We learned above that a $1$ millimeter cube has a volume of $1$ microliter.)

![Cube milliliter]({{ site.baseurl }}{% link i/cube_milliliter.svg %}){: .centered }{: height="240px" :}

There are $10\times 10\times 10 = 1000\,\mu\text{L}$ in $1\,\text{mL}$. A $1\,\text{cm}$ cube was once called a $\text{cc}$ for <em>cubic centimeter</em>. Now it is called a milliliter or $\text{mL}$. A doctor or nurse might abbreviated it to "mil" when you get a shot.
{: .caption :}

Molecular weight tells you how much a mole of that substance weighs in grams. A water molecule (H<sub>2</sub>O) has a molecular weight of $18$ $(16$ for O plus $1$ for each H$)$. That means $1\,\text{mole}$ of water weighs $18\,\text{grams}$. 

How big is a mole $(18\,\text{grams})$ of water? We need to know the density of water. It is $1\,\text{gram}/\text{mL}$. That means $18\,\text{grams}$ of water fills $18\,\text{mL}$. How many moles of water fit in $1\,\text{mL}$? $1/18$ of a mole. 

How many molecules is that? The number of molecules is Avogadro's Number times the number of moles, 

$6.022\times 10^{23}\,\text{particles/mole} \times 1/18\,\text{mole} = 3.33 \times 10^{22}\,\text{molecules}$

That's how many water molecules fit in a cubic centimeter.

Now find how many moles of water fit in a raindrop,

$\dfrac{1\,\text{mole}}{18\,\text{mL}} \times \dfrac{1\,\text{mL}}{1000\,\mu\text L}\times \dfrac{4.2\,\mu\text L}{\text{raindrop}} = \dfrac{4.2}{18{,}000} = 233\times 10^{-6}\dfrac{\text{mole}}{\text{raindrop}}$

Now that we know the moles we can find the number of molecules. It's Avogadro's Number times the number of moles, 

$6.022\times 10^{23}\,\text{particles/mole} \times 233\times 10^{-6}\,\text{mole} = 1.4 \times 10^{20}\,\text{molecules}$. 

Answer: There are $1.4 \times 10^{20}$ water molecules in a raindrop. That's $140$ billion billion. 


This is a pretty silly thing to know, but if you want a take-away message... For just about any liquid or solid there are $3 \times 10^{22}$-ish molecules in $1\,\text{cm}^3$ (within a factor of $10$).
{% endcapture %}{% include details.html %}

## Counting

Electricity is everywhere our lives. 

#### How many electric motors are there in your house?

#### How many LED's do you own?

#### How many microprocessors do you have? 

Computer, game system, blender, car, watch, mobile phone, washing machine ...

## Engineers love rounding

I did plenty rounding in these problems. There are a few reasons why engineers love rounding so much. 

The point of the problems presented here is to illustrate a wisdom. Sometimes the wisdom is captured in a single significant digit, so there's no point in carrying along extra digits. In fact, extra digits might disguise the point of the problem by making it seem specific to water or apples. When the answer is in scientific notation sometimes just the exponent matters, the mantissa part doesn't matter at all---the density of most stuff is somewhere around $10^{22}$ molecules per cubic centimeter.

The main reason engineers love rounding is because we work with manufactured objects like resistors and transistors. The parts we work with have large tolerances. It costs a lot to buy parts with small tolerance. Transistors and diodes have a strong dependence on temperature. If we want our designs to work over a large temperature range we can't rely on digits of accuracy of a transistor parameter. We have to design an excellent amplifier where the gain of the transistors are anywhere between $50$ and $500$. 

Our love of rounding is part of the engineering art.
