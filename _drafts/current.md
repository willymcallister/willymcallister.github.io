---
layout: article
title:  "Current"
author: Willy McAllister
comments: true
---

Current is a cornerstone concept in electrical engineering. Current is the flow of charge, similar to the flow of water in a river or garden hose. 

The key difference between flowing water and flowing charge: there is one type of water but there are two types of charge---and they move in opposite directions. It's a bit tricky.

This article describes a mental picture---a way to think about current at the atomic level.

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----
### Where we are headed
{:.no_toc}

Current is the flow of charge. Current can be negative charge, positive charge, or a combination of both.

The current arrow is defined to point in the direction *positive* charge moves. The arrow points this way even if the current is in metal wires where the moving charges are negative electrons. 

----

Remember when we learned about electric force (Coulomb's Law)? It has a similar form as the law of gravity. 

$\vec F_e \propto \dfrac{q_1\,q_2}{r^2}\quad$  and $\quad\vec F_g \propto \dfrac{m_1\,m_2}{r^2}$ 

Both have a product on top and the same $1/r^2$ denominator. But there is a key difference. There is only one kind of gravity (attract) and two types of electric force (attract and repel). This feature is the source of weirdness for electric current. As we establish a notation for current direction we have to confront that difference. It is easy to get confused, so let's go through this carefully.

## Current in wires 

In metal wires current is carried by electrons. Each atom in a metal wire contributes a valence electron to a "swarm" of electrons floating around in the metal. Valence electrons are the ones farthest from the nucleus---they are easily pulled away from metal atoms. This swarm behavior is a special property of elements we classify as metals. 

{% capture image %}copper_atom.svg{% endcapture %}
{% capture alt %}Copper atom{% endcapture %}
{% capture caption %}
A copper atom has 29 protons and electrons, and 35 neutrons. One electron is the single *valence* electron in its outer shell. At any normal temperature this valence electron has enough energy to leave its atom and join a 'swarm' of electrons. 
{% endcapture %}{% include image_left_with_caption.html %}

>$e$ is the symbol for the elementary charge (the charge on a proton). $e^+$ emphasizes that we're talking about a positive charge. $e^-$ is the charge of an electron.

If there is no voltage present the electrons in the swarm  move around randomly, in every direction. A voltage placed on the ends of a wire represents an *electrical pressure*---an electric force in the wire (Coulomb's force). If charged particles in the wire are able to move, they will. The electrons in the swarm are free to move.

Which way do the swarm electrons move? Electrons, $e^-$, have a negative charge. They are attracted to the higher voltage, shown on the left, and repelled by the negative voltage shown on the right. That's an electric current. 

![Current flow in wire]({{ site.baseurl }}{% link i/current_wire.svg %}){: .centered :}{: height="140px" :}

The metals with the loosest electrons (the best [conductors](https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity#Resistivity_and_conductivity_of_various_materials)) are the ones you are familiar with---silver, copper, gold, and aluminum. Copper is much cheaper than silver or gold, so that's why most wires are copper. Inside integrated circuits, most wires are aluminum, because it is easy to make fine patterns with aluminum. 

What about the other 28 copper electrons in each copper atom? They are tightly bound to the nucleus. They don't go anywhere, so they don't contribute to current.

What about the positive charge? The nucleus is made of positively charged protons and neutral neutrons. The protons feel the electrical pressure and get tugged toward the negative voltage, but they are stuck in the atomic lattice. The nucleus doesn't go anywhere, so protons don't contribute to current.

## Current in saltwater

Current is the movement of any type of charge. Current can be carried by negative charge or positive charge or both positive and negative charge at the same time. 

A good example is saltwater. Current in saltwater is carried by both positive and negative charge at the same time. We start with a little bit of chemistry. Ordinary table salt is sodium chloride, NaCl. Neutral sodium and chlorine atoms look like this,

{% capture image %}sodium_atom.svg{% endcapture %}
{% capture alt %}Sodium atom{% endcapture %}
{% capture caption %}
Sodium has 11 protons and electrons, and 12 neutrons. Like copper, a sodium atom has one valence electron in its outer shell. It does not take very much energy for that electron to escape from its atom. If the valence electron departs, sodium is left with a [stable octet](https://www.khanacademy.org/test-prep/mcat/chemical-processes/covalent-bonds/a/single-and-multiple-covalent-bonds) as its outer occupied shell.
{% endcapture %}{% include image_left_with_caption.html %}

{% capture image %}chlorine_atom.svg{% endcapture %}
{% capture alt %}Chlorine atom{% endcapture %}
{% capture caption %}
Chlorine has 17 protons and electrons, and 18 neutrons. A chlorine atom has seven electrons in its outer shell. It is one short of a stable octet. That open spot attracts nearby electrons.
{% endcapture %}{% include image_left_with_caption.html %}

In solid form, the sodium and chlorine atoms are held together when they share that valence electron. It's called an *ionic bond*. As chemical bonds go, an ionic bond is relatively weak and easy to break. When you sprinkle salt in water the water molecules wiggle between the Na and Cl atoms and pry them apart. We say the salt *dissolves*. 

The ionic bond is broken and Na and Cl move apart and become free-floating ions. Each ion is surrounded by water molecules. In the process Na donates its valence electron and a nearby Cl accepts it. Both end up with a stable octet. Na and Cl turn into ions with opposite charge, Na$^+$ and Cl$^-$. 

![Current flow in saltwater]({{ site.baseurl }}{% link i/current_saltwater.svg %}){: .centered :}{: height="140px" :}

Now back to electricity. Saltwater is a good conductor. Both ions respond to an applied voltage. They move through the saltwater in opposite directions. Na$^+$ is attracted toward negative voltage (on the right) and repelled by the positive voltage. Cl$^-$ is attracted to the positive voltage (on the left) and repelled by the negative voltage. This movement of charge is an electric current.

In saltwater the moving charges are positive and negative ions, not free electrons like in metal. Whole charged ions drift through the water. The electrons do not hop from atom to atom. 

Electric currents in our bodies are made of moving ions, both positive and negative. Another place positive and negative ions work together is inside a battery. The battery's chemical reactions involve the motion of electrons and positive ions. (I don't know any examples where current is just positive charge.)

{% capture summary %}Does pure water conduct?{% endcapture %}  
{% capture details %}  
Super pure water without any salt or other ions is a poor conductor. It takes a great deal of energy to rip an electron away from a water molecule. Water pure enough to not conduct only exists in specialized chemistry labs. There is almost no chance you will come across water this pure. Water is very good at dissolving whatever it comes in contact with, even from the walls of the container it is in. Water always finds plenty of salt ions to dissolve.   
{% endcapture %}{% include details.html %} 

{% capture summary %}What happens where wires touch the water? {% endcapture %}  
{% capture details %}
![Current flow in saltwater]({% link i/current_saltwater1.svg %}){: .centered :}{: height="180px" :}
If you connect wires from a battery to the ends of the water tube you get a current. In the saltwater part of the circuit current is carried by Na$^+$ and Cl$^-$ ions. In the wires current is carried by $e^-$ electrons. 

What happens where the wire and water touch? You may be bubbling with questions.

The answer is: It's complicated. 

There is some electro-chemistry going on at the interface between metal and saltwater (the two light blue ovals). This chemistry is way beyond what I'm trying to teach you in this introduction to current and moving charge.

The informal answer is: Where the positive wire touches the water a chemical reaction causes the extra electron on each chloride ion to enter the wire. Over at the negative wire a reaction causes electrons to hop off the wire into solution and attach to a sodium ion.

The wire-to-saltwater and saltwater-to-wire chemical processes are called *electrolysis of aqueous sodium chloride*. Look this up if you want to explore further. 

My recommendation is---just for now---save curiosity about electrolysis for another time and stick with me here as we visualize current.  
{% endcapture %}{% include details.html %} 

## Visualize current

Here's a way to visualize current---you play a little mind game. In the following examples we we use the most general concept of current, with both types of moving charge. We are not talking about a specific physical wire or water path. We are also not talking about *amperes* or *coulombs*. Just counting moving charges.

**Example 1:** Just positive charge: Positive charge is repelled by the positive voltage and attracted toward the negative voltage. This is the "downhill" direction for positive charge. Our goal: Determine how much current is flowing,

{% capture image %}current_general0p.svg{% endcapture %} 
{% capture alt %}Flow of positive charge through a membrane, observed by a little dude.{% endcapture %}
{% capture height %}200px{% endcapture %} 
{% include image_centered_without_caption.html %}

Imagine a thin membrane (blue) stretched all the way across the conducting path. The membrane allows charge to pass through. Because the membrane stretches all the way across the conductor, ALL charge has to go through it. There's no path where charge can sneak around the membrane.

Shrink yourself down to atomic size and stand near the membrane. You are so small you can see individual charges as they pass through the membrane. 

Count charges for a fixed amount of time as they pass through the membrane. After the time interval is over, report the current in units of charge per second. 

**Suppose you count $1000$ positive ions passing through the membrane in one second. What is the current?**

{% capture summary %}show answer{% endcapture %}
{% capture details %}
Assume each positive ion particle has a single elementary charge, $e^+$.

The current is $1000\,e^+/\text{sec}$. 
{% endcapture %}{% include details.html %}

**Example 2:** Just negative charge: The voltage is the same, so the negative charge moves in the opposite direction (for negative charge, "downhill" is toward the positive voltage, away from the negative voltage). We do the same drill,

{% capture image %}current_general0n.svg{% endcapture %} 
{% capture alt %}Flow of negative charge through a membrane{% endcapture %}
{% capture height %}200px{% endcapture %} 
{% include image_centered_without_caption.html %}

Shrink down. Count charges as they pass through the membrane. After the time interval is over, report the current in units of charge per second. 

**This time you count $20{,}000$ electrons in one nanosecond. What is the current?**

{% capture summary %}show answer{% endcapture %}
{% capture details %}
The current is $20{,}000\,e^-/\text{nsec}$.
{% endcapture %}{% include details.html %}

**Example 3:** The most general form of current flow---two types of charge at the same time. 

{% capture image %}current_general1.svg{% endcapture %} 
{% capture alt %}Flow of positive and negative charge through a membrane{% endcapture %}
{% capture height %}200px{% endcapture %} 
{% include image_centered_without_caption.html %}

You measure current the same way---count the charges moving through the membrane in a fixed time interval. 

**In $1$ second you observe $300$ positive charges and $300$ negative charges going through the membrane in opposite directions. What is the current?**

{% capture summary %}show answer{% endcapture %}
{% capture details %}
This is kind of tricky. It is not clear how to answer this. So for now we give a long answer: The current is $300 \, e^+/\text{sec}$ going right plus $300 \, e^-/\text{sec}$ going left.
{% endcapture %}{% include details.html %}

In summary, this is a good mental model of current: Imagine a transparent membrane. It cuts all the way across the current path. Count charges as they pass through the membrane. Report current as charge per second. 

## Direction START HERE

Example 3 reveals the complexity of reporting current. This can be a big source of confusion for beginners. 

-------------
There are multiple signed quantities involved in current. We have +/- charge moving around and +/- current direction. If you try to think about both signed quantities at the same time it gets to be too much.

What we do in a complicated situation like this is split the problem into smaller parts. This is the standard engineering methodology. First we talk about charge. Then we talk about direction. 

Charge has + and - signs. 
Charge obeys the familiar rule: opposite charge attracts, like charge repels. When subjected to an electric field or voltage difference, the charges with opposite signs move in opposite directions. 

Current has + and - signs. 
The sign of the current is defined in terms of the motion of positive charge (this is the “convention”). 

Step 1: 
Label the wire with a Current Arrow. The current arrow indicates your choice of the direction of positive current. (Like drawing an arrow on a map indicating which way is North.)

Step 2: 
If positive charge moves the same direction as the current arrow, the value of current is positive (has a + sign). 
If positive charge moves opposite the direction of the current arrow, the current is negative (has a - sign).

If you want to know what negative charge is doing, it’s always the opposite of whatever positive charge does.
-----------------



We need to come up with a better way to describe current direction. It is kind of clever how we do this. 

Where should this detail go?
{% capture summary %}Why are ammeters so dumb?{% endcapture %}
{% capture details %}
There's a bit of reality that makes measuring current challenging. Our instrument for measuring current, the *ammeter*, cannot tell what type of charge is moving. Positive charge moving one way registers exactly the same as negative charge moving the other way. The ammeter gives the same answer in both cases. In real life we can't ask our atomic-sized self what types of charge are moving. 

It is hard to tell what kind of charge is moving. Here's a generalized conductor with some free-to-move charge. (We don't care about the fixed charges---they don't contribute to current.) 
{% capture image %}current2.svg{% endcapture %} 
{% capture alt %}Neutral conductor. Same amount of charge on both sides.{% endcapture %}
{% capture height %}160px{% endcapture %} 
{% include image_centered_without_caption.html %}
Count up the charge on both sides of the conductor. On the left there are two $+$ and two $-$ charges. That adds up to $2e^+ + 2e^- = 0$ net charge. The right side is the same situation, $2e^+ + 2e^- = 0$ net charge.

Now imagine a single negative charge (an electron) moves from the left side to the right side. That is a tiny atomic-level current. What happens to the net charge on each side?
{% capture image %}current3.svg{% endcapture %} 
{% capture alt %}One electron moves from left to right. One extra negative charge on the right, one less negative charge on the left.{% endcapture %}
{% capture height %}160px{% endcapture %} 
{% include image_centered_without_caption.html %}
The left side has one excess positive charge (one missing electron), for a net charge of $2e^+ + 1e^- = +1$. The right side has one excess negative charge (one extra electron) for a net charge of $2e^+ + 3e^- = -1$.

What if a single positive charge (a proton or positive ion) moves from the right side to the left side? What happens to the net charge on each side?
{% capture image %}current4.svg{% endcapture %} 
{% capture alt %}One positive charge moves from right to left. One extra positive charge on the left, one less positive charge on the right.{% endcapture %}
{% capture height %}160px{% endcapture %} 
{% include image_centered_without_caption.html %}
The left side has one excess positive charge, for a net charge of $3e^+ + 2e^- = +1$.  
The right side is missing one positive charge for a net charge of $1e^+ + 2e^- = -1$.

The last two examples have the same charge imbalance! How can you tell them apart? Ha! Without an atomic microscope or some serious experimentation you can't.
{% endcapture %}{% include details.html %}

Something that contributes to the complexity of current flow are all the signed quantities, 
* $+/-$ direction
* $+/-$ charge 
* $+/-$ voltage

It is quite challenging to keep all of these straight. If you think you head might explode, be patient. We will work this all out.

When current is confined to a line (a wire or tube of water) there are two possible directions charge can move---this way or that way. This is so simple we don't have to use vector notation, it works fine to just use $+$ and $-$ signs to distinguish the two possible physical directions. 

Next we decide which way is positive and which way is negative. If we say a current is *positive*, what does that mean? 

We start by adding an arrow to the wire. The arrow (blue) defines what we mean by positive current,

 {% capture image %}current14.svg{% endcapture %} 
{% capture alt %}Current arrows define what we mean by positive current{% endcapture %}
{% capture caption %}The blue arrow on a wire it defines the direction of positive current. If the actual current (black arrow) flows in the direction of the blue arrow we say it is a positive current. If the actual current current flows against the direction of the arrow, it is a negative current.{% endcapture %}
{% include image_centered_with_caption.html %}

So far, I hope this doesn't seem to complicated. Up to now we haven't mentioned positive or negative charge, we've just talked about the abstract idea of a 'current'.

This is pretty complicated You may not have noticed, but there are three arithmetic signs mixed together,

* Two directions along a wire. The blue current arrow defines $+$, and $-$ is the other way. The direction of the blue arrow is your choice.
* The value of an actual current is a signed quantity. $i = +2\,\text{mA}$ and  $i =-2\,\text{mA}$ are valid values. 
     - If an actual current turns out to have a $+$ sign it's going in the same direction as the blue arrow. If it ends up with a $-$ sign, it's going in the opposite direction.
* Two types of charge. We named charges $+$ and $-$. Electrons ended up with the $-$ name.
    - *By convention*, the blue arrow tracks the movement of *positive* charge. Electrons flow in the opposite direction, against the arrow.

I'll show you how to resolve this with the help of a simple and elegant idea from analytical geometry (a class you take after calculus). In addition to assigning direction to moving charge, we also assign a direction to the membrane surface. 

Here is a particle moving through a membrane, it can pass through in either direction,

{% capture image %}current10.svg{% endcapture %} 
{% capture alt %}Particle moving through a membrane{% endcapture %}
{% include image_centered_without_caption.html %}

Which way is positive movement? Which way is negative? To establish a reference for positive movement we assign a direction to the membrane surface, a little arrow. It's job is to define the positive direction for a particle passing through,

{% capture image %}current11.svg{% endcapture %} 
{% capture alt %}Membrane surface with directional unit vector{% endcapture %}
{% capture caption %}In both cases the unit vector attached to the surface points to the right. The particle in the left is moving in the same direction as the surface vector. So it's movement is positive. On the right, the particle is moving opposite the surface vector, so it is moving in the negative direction.{% endcapture %}
{% include image_centered_with_caption.html %}

Now that we have a surface vector, how do we count particles when we measure current? You combine the charge of the particle with the direction of the surface vector. $\text{count} = \text{count} + q \vec s$.

Now that we have a clearer idea of surface direction, let's go back to the current example from above with two types of moving charge. As you can see in this image, I've added a direction vector to the membrane. 

{% capture image %}current12.svg{% endcapture %} 
{% capture alt %}Two types of charge move through a membrane with a directional vector pointing to the right (toward negative voltage).{% endcapture %}
{% include image_centered_without_caption.html %}

I picked the direction vector to point in the same direction as positive charge movement. This is an arbitrary choice, but, very importantly, it follows a convention used throughout science and engineering. The vector points in the direction of positive charge movement.

Now let's measure the current by counting charge. We do this carefully and take into account the direction vector on the membrane.


A positive $e^+$ traveling right counts a $1$.  
A negative $e^-$ traveling left counts as $1$ (not $-1$).

What's the direction of the current?  

Answer: $500 \, e^+/\text{sec}$.

{% capture image %}current_general0pa.svg{% endcapture %} 
{% capture alt %}The current arrow points in the direction of positive charge flow.{% endcapture %}
{% capture height %}250px{% endcapture %} 
{% capture caption %}The positive charges move to the right, so the current arrow points to the right.{% endcapture %}
{% include image_centered_with_caption.html %}

**What's the direction of the current?** Be careful. Think about the sign of the moving charge before you answer. 

{% capture image %}current_general0na.svg{% endcapture %} 
{% capture alt %}The current arrow points opposite the direction of negative charge flow.{% endcapture %}
{% capture height %}250px{% endcapture %} 
{% capture caption %}The negative charges move to the left. To account for the $-$ charge of the electron, we point the current arrow to the right!{% endcapture %}
{% include image_centered_with_caption.html %}

This may seem totally strange. The current arrow points in the opposite direction of the movement of negative charge. One of the reasons is, in real life, we can't look at a wire or water-filled tube and tell what type of charge is moving. With this convention for the current arrow, the direction doesn't depend on what kind of charge is moving. It is always the direction positive charge would move.

Write something about how you get a negative charge by removing positive charge. Show why e- moving left is the same as e+ moving right.


Now we have to make an arbitrary---but very important---decision. We have to choose a direction to be the positive direction. Look at positive charge for a second. Suppose there's no voltage applied. A $q+$ might wander through the membrane in either direction, left or right. If it goes back and forth through the membrane, that should count as 0 current (no net motion of positive charge). When it passes through the first time we could count that as +1, and when it goes back through the other way it counts as -1. That sums to 0, which is what we want. (This doesn't mean it became a negative charge, it just means it reduces the positive charge count by 1.)

Each negative charge moving through the boundary heading left counts as +1.  
Each positive charge moving through the boundary heading right counts as +1. 

$q_\text{total} = {\displaystyle \sum_\text{left}} q^- + {\displaystyle \sum_\text{right}} q^+$



That is current in a nutshell. 

### Concept check

**1.** The image above has 5 negative charges and 5 positive charges moving in response to the electric force caused by the applied voltage. Suppose tiny you watches for 1 millisecond and you see all those charges pass through the membrane. 

**What is the current?**

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Assume the magnitude of each charge is an *elementary charge* (the charge on a proton). 

We observe that the positive and negative charges are moving through the boundary in opposite directions. That's important.  

The amount of charge passing through the boundary is $5 + 5 = 10$ elementary charges. The time interval is 1 millisecond. 

Report the current as $10$ elementary charges/millisecond.
{% endcapture %}{% include details.html %} 

**2.** Now go back to the saltwater example but take the voltage away. This removes the electric force tugging on the ions. Tilt the tube so the saltwater flows to the left. Make yourself tiny and put an imaginary membrane across the tube. You observe 100 water molecules, 10 Na$^+$ ions, and 10 Cl$^-$ ions passing through from right to left in 10 nanoseconds. 

**What is the current?**

Hint: How much charge is moving? For a water molecule: Oxygen is atomic number 8, so it has 8 protons and 8 electrons. Hydrogen has 1 of each, and there are two of them. So the total for a water molecule is 10 protons and 10 electrons. Na$^+$ has 11 protons and 10 electrons. Cl$^-$ has 17 protons and 18 electrons. The total is 38 moving protons and 38 moving electrons.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Ha! It's a trick question. The current is $0$.

There is all kinds of charge moving around, but they are all moving in the same direction. When electrons and protons move through the boundary in the *same* direction, their charges cancel each other. The water current might be big, but the electric current is $0$. 

If you walk around with a bucket of water, that is a lot of moving charge, but it's not an electric current. The charges have to be going in opposite directions to get electric current. That happens when there is an electric force present, which we call voltage. Voltage is coming up soon.
{% endcapture %}{% include details.html %} 

Talk about charges moving in the same direction, like carrying a bucket of water.
With no voltage, + moving left, - moving left.  
You count +1 for + charge and -1 for - charge.  
Net charge movement = 0 and current = 0. 
Carrying a bucket of water is 0 current. 

## Measure current

When we assign a number to an amount of current, we report a single number. We don't report two numbers (number of negative charges per second and number of positive charges per second) because the instruments we use to measure current (ammeters) can't tell what kind of charge is moving. To an ammeter, positive charge moving left looks exactly like negative charge moving right.

In the first concept check above we had $5 + 5 = 10$ charges moving through the membrane. An ammeter senses $10$ but it can't tell that it's made from $5$ and $5$. As far as the ammeter is concerned, $5 + 5 = 10$, $10 + 0 = 10$, and $0 + 10 = 10$ are all the same current.

## Assign direction

Now we have kind of a weird problem. We have charge moving in two directions, but our instrument measures the total current. Clearly there are two possible directions for current. If you switch the battery around the charges change direction. 

The direction of current is the direction a *positive* charge would be moving. 

![Current flow]({{ site.baseurl }}{% link i/basic_current_flow.svg %}){: .centered :}

{% capture summary %}Current direction and NEETS{% endcapture %}  
{% capture details %}  
We point the current arrow in opposite the direction electrons move. This may seem jarring, but we will make it work. This definition often causes confusion for beginners and people who learned electricity in the military or some technician schools.. 

For example the U.S. Navy NEETS program in the 1960's used the opposite convention where current flow is defined in the direction of electron motion. We don't use that here at Spinning Numbers, nor does most of the electrical engineering world. More on this later when we talk about [conventional current direction]({{ site.baseurl }}{% link _videos/conventional-current.md %}).  
{% endcapture %}{% include details.html %} 

Since current is the amount of charge passing through a boundary in some period of time, it can be expressed in general terms with this notation from calculus,

$i = \dfrac{dq}{dt}$

The term "electric current" was first used by André-Marie Ampère. The symbol for current is '$i$'. It comes from the first letter of the French phrase *intensité du courant électrique*.

{% capture summary %}What does $d$ mean?{% endcapture %}  
{% capture details %}  
The $d$ in ${dq}/{dt}$ is notation from calculus, it stands for *differential*. $d$ means "a tiny change in ..."

For example, the expression $dt$ means *a tiny change in time*. When you see $d$ in a ratio, like $dq/dt$, it means, "a tiny change in $q$ (charge) for each tiny change in $t$ (time)." An expression like $dq/dt$ is called a [derivative](https://www.khanacademy.org/math/ap-calculus-ab/derivative-introduction-ab/derivative-as-a-limit-ab/v/calculus-derivatives-1-new-hd-version). It is what you study in [differential calculus](https://www.khanacademy.org/math/differential-calculus). 

In calculus, $d$ represents a small amount of change, so small it approaches $0$. A little farther down in this article you will see change indicated with a $\Delta$ symbol, as in $\Delta h$ is a change of height. We use $\Delta$ to indicate a large finite change. We use $d$ to indicate tiny essentially-zero-sized change. 
{% endcapture %}{% include details.html %} 

{% capture summary %}$q$ models charge as a continuous substance{% endcapture %}  
{% capture details %}
You don't need to read this. It is over-complicated for beginners.

The variable name we use for charge is $q$ or $Q$. This habit goes all the way back to Coulomb himself.

There is a small contradiction we have to accept when we measure charge as a continuous variable $q$. In calculus notation $dq$ is an infinitesimal amount of charge. But, you know the smallest charged particle is an electron or proton. They are small, but not infinitely small. Current at the atomic level is made up of these little chunks of charge, not a continuous substance that can be any value.

When we model charge with mathematics $(q)$ there is no sense that charge exists as electrons. This is how people thought about charge before the discovery of the electron and proton. It was thought to be a continuous (invisible) substance, not quantized into electrons or protons. When we define current with calculus notation $dq/dt$ this treats charge as a continuous number. 

It's similar to the way we think about water. If you have a bucket of water you think of it as a continuous substance. In buckets, you don't "count" water, you measure it in cups or liters. But if you go down to the atomic level, water is molecules you can count. If your bucket is full of sand the particles are bigger but you still usually treat sand as a continuous fluid. If it's a bucket of rocks you might treat it either way.

In the Wikipedia article on [electric current](https://en.wikipedia.org/wiki/Electric_current) you see the definition $I = Q/t$, not $i = dq/dt$, (in the image on the right side). The author is going out of his/her way to avoid using calculus, similar to how you can talk about the slope of a straight line without invoking calculus, rise/run. 

But, when it comes to curvy functions, calculus does a much better job of describing "instantaneous slope". EE's deal a lot with curvy sine waves and exponential waveforms, so we need calculus when it comes to really understanding $\text{RC}$ circuits and real-world signals.

Current in wires is carried by electrons. Suppose you pick an extremely short time interval to measure current. If no charge passes through the boundary during that time, then technically the current is $0$ during that interval. 

That's technically correct but not so useful. You could do the same thought experiment with a water hose. Place the imaginary boundary across the end of the hose. You could pick a time interval so short that $0$ water molecules crossed the boundary during that time. True, but not so useful. It is more useful to start with a larger time interval, count some water molecules to get a real current, and then squeeze the time interval down until it is as small as you need. In calculus this is *taking a limit*. 

In EE we nearly always treat charge and current as continuous quantities. It's very rare to count individual electrons. There are zillions of electrons moving around in most of our circuits, so this is a good model.
{% endcapture %}{% include details.html %}

The same definition of current works for ion currents as it does for electron current in a wire: count the number of charges passing by a certain spot in a fixed amount of time.

Current in a nutshell:

Current is the flow of charge. 

Charge flows in a current.

{% capture summary %}Why did you say that twice?{% endcapture %}  
{% capture details %}  
There is some careful grammar here. Current *is* a flow. It is technically more correct to say "charge flows" than "current flows". However, the common habit among engineers is to say, "current flows". 

This is such an ingrained habit that it is perfectly acceptable in engineering chitchat, as long as you know that it's actually charge that's moving.  
{% endcapture %}{% include details.html %} 

**What is the speed of current?** We don't talk very often about the *speed* of current. "How fast is the current flowing?" is a really complicated question and rarely relevant. Current isn't about meters per second, it's about amount of charge per second. We want to know, "How *much* current is flowing?", not how *fast*. 

When we talk about how fast something moves in electricity, we are most often asking how quickly a *disturbance* moves, not how fast the electrons are moving. Electric disturbances travel close to the speed of light. If you toss a pebble into a pond, you see a ripple moving across the surface. The ripple (a disturbance) moves fast, but the water molecules hardly move at all. 

**How *should* we talk about current?** When discussing current, terms like *through* and *in* make sense. Current flows *through* a resistor; current flows *in* a wire. If you hear, "what is the current across that resistor", it should sound funny (as in funny/odd). The words through and across are used for voltage, not current. If you hear, "the speed of the current", that should sound funny, too.

### Current direction

Even though electrons do the work in most electronic circuits, we point the current arrow in the direction a *positive* charge would move. This is a very old historical convention. It takes some getting used to, but you can do it. It just means the current arrow points to where the electrons are coming *from*.

Are there times when moving charge is not a current? Suppose you have a bucket of saltwater full of free floating sodium and chloride ions. If you pick up the bucket and walk across the room there is tons of moving charge. Is that count an electric current? No! The positive and negative charge are all moving in the same direction. To get a current you need a voltage, and the $+$ and $-$ charges move in opposite directions.

## Summary
{:.no_toc}

A good mental image for current: Shrink yourself down to atomic size. Place an imaginary membrane all the way across the conductor (wire or saltwater tube or whatever). Count charges as they pass by. Current is the number of charges passing through the membrane in a fixed amount of time.

## Tristan

I was wondering if you had any problems worked out using the electron flow convention. I get the fact that they are just conventions and I often see people say that the analysis will be the same, but I want to know HOW it’s the same.

- Tristan

Your questions about conventional current vs electron current are universal to beginning electrical engineers. It bugs every beginner. 

The current direction and the resulting resistor voltage have to be arranged in a certain way so Ohm’s Law ends up with the right sign and voltmeters give the right answer. When current flows through a resistor you have to know which end will have the more positive voltage.

Ohm's Law: $v = i \,\text R. If $\text R$ is positive (it always is) and $i$ (current) is positive, then when you measure $v$ with a voltmeter it has to read a positive number. There’s a critical relationship between current direction and the + and - voltage polarity on a resistor. This is called the Sign Convention for Passive Components.

There are two valid ways to do this... 

If we define current by electron direction: Current flows out of the negative terminal of a battery and into the *negative* voltage polarity of a resistor. The $-$ voltage polarity label on the resistor is where the current arrow points in. The $+$ sign appears where the current flows out of the resistor. 

If we define current direction by positive charge direction ("conventional current direction"): Current flows out of the positive terminal of a battery and into the *positive* voltage polarity of a resistor. You put the $+$ voltage polarity label on the resistor where the current arrow points in, and a $-$ sign where the current flows out of the resistor. 

## NEETS

Almost everyone uses conventional current direction. The one exception I’m aware of is a U.S. Military electronics training program, the Navy Electricity and Electronics Training Series (NEETS). NEETS defined current direction to be the direction electrons move. Military trainees in many electrical and electronic-related fields are taught this convention.

[NEETS modules](https://www.fcctests.com/neets/Neets.htm)

If you open Module 1 Matter, Energy, and Direct Current, you find the electron current convention illustrated in Figure 3.2 Basic flashlight schematic (page 3-4). It shows the current arrow pointing out of the negative terminal of the battery. The schematics are drawn with the negative terminal of the battery toward the top of the diagram, with the positive battery terminal pointing down. 

On page 3-49 it tells you how to assign voltage polarity if you know the direction of current… “In working with Kirchhoff’s law, positive and negative polarities are assigned in the direction of current flow.” Notice importantly the current arrow points into the *negative* voltage polarity on the resistors in Figure 3-22.


Here’s the advice I give everyone: Your mind is tracking the motion of electrons. That’s totally fine. The positive current arrow may seem odd or stupid. However, I want you to start doing some Ohm’s Law problems using the current arrow in the conventional direction along with the sign convention for passive components. You will start out thinking about both conventional and electron current. In short while you will think less about electron current and just work with conventional current direction. In a week you will be converted. Welcome to the club.

- Willy

Okay thank you! A lot of this makes a lot of sense. I am loading up the document now to look at some of those examples. What's funny is I actually finished my entire circuits class(mesh, nodal, superposition, ac theory) using conventional current and let it pass me by. 

A few days ago I tripped back across the idea of how the electrons actually flow and I realized I didn't truly get it all. 

A couple concerns I have:
1. Why wouldn't the electron flow have a negative value? If $dq/dt$ defines current and the change in charge is an overall negative one, wouldn't that make the current negative? Or is this Dq/dt concept treating all charge as the same and ignoring sign?
2. Building off this point, if the value should be negative, then isn't this the same as our present convention? Because a negative current leaving the negative means it is actually a positive current leaving the positive.

To add to this, another thing I have commonly read on posts about this topic, is that with electron flow, there is just a lot more negative signs, how is this true? It doesn't really seem like it changes much.

- Tristan


Tristan wrote:

\>\> A few days ago I tripped back across the idea of how the electrons actually flow and I realized I didn't truly get it all. 

The current arrow reminds me of how weather vanes work. What direction does the arrow on a weathervane point? Does it point where the wind is going to, or where the wind is coming from? You could design a weather vane to do either. Is one of them right? No. The choice is arbitrary, but what is the usual convention for weather vane design? Weather vanes point in the direction the wind is coming *from*. Does the design choice have any impact on what the wind is “actually” doing. No. Why was the weather vane design convention chosen that way? Because sailors on ships with sails that had to be trimmed were more concerned with the origin of the wind than where it was going. So a West wind is coming from the West, and blows your ship East. 

\>\> A couple concerns I have:
\>\> 1. Why wouldn't the electron flow have a negative value? If $dq/dt$ defines current and the change in charge is an overall negative one, wouldn't that make the current negative? Or is this $dq/dt$ concept treating all charge as the same and ignoring sign?

Change in time, dq is positive. Change in charge, $dq$ can have either sign, depending on two things: the sign of the moving charge AND the direction the moving charge is moving. These two signs combine to determine $dq$. This is the part that’s easy to stumble on. In a wire, you get to define the direction of positive current. You only have two reasonable choices,  This way and That way. The choice is arbitrary. We most often use arithmetic signs to distinguish the two directions; this is the job of the current arrow. If you apply a voltage to the wire such that the current arrow points from the + voltage sign toward the - voltage sign. Electrons will move towards the more positive voltage, which is in the negative current direction (opposite the direction of the arrow). The negative direction multiplied by the negative charge gives you a positive current. If you work this through pretending that positive charge is moving in the opposite direction you get exactly the same answer. So it’s not that we ignore the sign of moving charge, but rather two negatives (charge and direction) combine to make a positive number.

\>\>2. Building off this point, if the value should be negative, then isn't this the same as our present convention? Because a negative current leaving the negative means it is actually a positive current leaving the positive.

Yes this is the “Conventional Current Direction”. If you want to switch to the electron current convention you have to modify the definition of current by adding a negative sign. 

$I = dq/dt$   conventional current convention

$I = -dq/dt$ electron current convention

Some people think Conventional Current Direction is some sort of lazy mistake, that we don’t want to correct a very old “error”. I prefer to think of it as a gift to modern engineers. It reminds us of the richness of Charge (two types!) compared to moving mass. (There is only one sign for mass, and gravity only pulls, never pushes.)

- Willy



Just referring back to this I am literally so close to understanding just one thing. When you say a negative current combined with a negative direction is a positive current, it isn’t actually a positive current coming out of the minus terminal right? Instead it is a negative current coming out of the negative side which is the same as a positive current coming out of the positive and hence acts the same as a positive?

- Tristan


I guess I am confused because assuming positive direction is from + to - that would mean that both directions have positive current flow when you account for charge and direction?
- Tristan


Tristan,

Your most recent email arrived about 30 seconds ago. I’ve been working on this response for a couple of days… 

Tristan wrote,
\>\> electrons moving from the - and the positive moving from the + are both positive, how does that make sense?

That’s a good question. I have a challenging time explaining this clearly, but that won’t stop me from trying. Here goes...

I’m not trying to say that negative charge moving from the $-$ terminal is the same atomic-level process as positive charge moving from the $+$ terminal. However, it is very hard to tell these two situations apart. Using just a voltmeter or ammeter you can’t distinguish between these two types of charge movement. They register the same on the instruments. Let me illustrate why,

Suppose you have two pails. Each pail contains $20$ charged marbles. $10$ positive charges, $10$ negative. You have a meter with two probes, one probe sticks into each pail and measures the difference in charge between the pails. The meter probes are arranged so the meter reads a positive number when the Right pail has higher net charge than the Left.

$x_1$

$0_{right} - 0_{left} = 0$

$0_{\text{right}} - 0_{\text{left}} = 0$

Both pails start out neutral, $10$ positive and $10$ negative charges in each pail. The meter reads $0$. The charge computation is,   
Left: $+10 -10 = 0$,  
Right: $+10 - 10 = 0$,  
Meter reads the difference: $0_\text{right} - 0_\text{left} = 0$

Move one positive charge from the Left pail to the Right pail. Right now has 11 positive charges, Left has $9$. Both pails still have $10$ negative charges. What does the meter read? The computation is,  
Left: $+9 - 10 = -1$,   
Right: $+11 - 10 = +1$,  
Meter reads the difference: $+1_\text{right} - -1_\text{left} = +2$.   
The Right pail has a net charge $2$ greater than the Left pail.

Move the extra positive charge back to Left and the meter goes back to $0$. 

Now move one negative charge from the Right pail to the Left pail (opposite of what we did in the previous step. Left pail now has $11$ negative charges. The Right pail has $9$ negative charges. Both pails still have $10$ positive charges. What does the meter read? The computation is: 
Left: $+10 - 11 = -1$, Right: $+10 - 9 = +1$, Meter reads the difference: $+1_{right} - -1_\text{left} = +2$.
The Right pail has a net charge $2$ greater than the Left pail.

The answer came out the same as the previous step where we moved a positive charge the other way!

These two examples illustrate the symmetry of $+$ and $-$ charges moving in opposite directions.

Now I throw a blanket over the pails while you look at the meter. When I move the charges, you can’t tell by looking at the meter which kind of charge I moved. The meter gives the same response. Your eyes (and mine) cannot peer down at the atoms and electrons in a wire. There’s always a blanket thrown over our circuits. 

This thought experiment shows the two types of current are equivalent from viewpoint of the real-world (the meter reading). 

- Willy

Exactly it tells you that 2 marbles in total moved to the right pail regardless of how you look at it. But the best way to represent it regardless of how that happened is 2 marbles to the right. You could also say -2 marbles to the left. It’s the same thing. So therefore when we think of negative and positive charge moving, if positive charge moving left to right is the same as negative charge moving right to left, then that means in either case there is positive 2A moving from left to right. 

What I’m posing, however, is that if you look from the negative charge perspective it is -2A flowing from right to left. -2A actually IS flowing from right to left but we know that 2A out of the positive is easier. 

What I thought you were saying earlier (could be a false interpretation on my part) was that you could say +2A was coming out of either terminal WITHOUT ever changing your current definition. This I believe to be false because either way you define it, the current in opposite directions must have OPPOSITE signs, correct? The easiest way to think about this for me is if - charges are passing a point that is a -dq/dt, so record it as such and draw the arrow from - to plus and we obviously know we can flip that arrow and make it 2A from + to - and it is the exact same thing. 

In my opinion it would be easier if everyone that thought electron flow was the better way, would just write their currents as - amperage leaving the - terminal. There’s no sense in forcing it to be positive if we’ve already determined what’s flowing as negative. Not to mention in this format what you’re writing is 100% true. A current arrow pointing out of the minus labeled -# A is correct because there are NEGATIVE coulombs moving in that arrow direction. Let me know your thoughts on this line of thinking.

- Tristan


>>What I thought you were saying earlier (could be a false interpretation on my part) was that you could say +2A was coming out of either terminal WITHOUT ever changing your current definition. This I believe to be false because either way you define it, the current in opposite directions must have OPPOSITE signs, correct? 

Correct.

In my opinion it would be easier if everyone that thought electron flow was the better way, would just write their currents as - amperage leaving the - terminal. There’s no sense in forcing it to be positive if we’ve already determined what’s flowing as negative. Not to mention in this format what you’re writing is 100% true. A current arrow pointing out of the minus labeled -# A is correct because there are NEGATIVE coulombs moving in that arrow direction. Let me know your thoughts on this line of thinking.

You can certainly point a current arrow this way when solving a circuit. You will get the same correct answers as when you point the arrow the other way. But be sure when you do this you still respect the Sign Convention for Passive Components. That means the voltage label on a nearby resistor has to have its + terminal on the side where the current arrow is pointing IN. 

Exercise: Draw a circuit with a 2V battery and a 2kOhm resistor. Orient the battery so the + terminal is toward the top of the page. 
Solve for the current using the conventional method
Draw the current arrow on the top branch pointing towards the resistor. This is the “positive charge flow” direction.
Add a voltage label to the resistor, assign polarity as suggested by the Sign Convention for Passive Components.
Solve for current using Ohm’s Law. Your answer should come out 1mA. 
Solve for the current using your proposed method.
Draw the current arrow on the bottom branch pointing toward the resistor. This is the electron flow direction. 
Add a voltage label to the resistor, assign polarity according to the Sign convention for Passive Components. You will put a + sign at the bottom of the resistor and a negative at the top. This indicates that v_R, the voltage across the resistor, is equal to -2V. (This may look a bit odd since these signs will be opposite of the battery. If you are comfortable with this small oddity, then your arrow choice is working just fine.)
Solve the current using Ohm’s Law. Your answer should come out -1mA, which is correct.

- Willy


Got it this makes a TON of sense. So my only other question is if we defined the electron flow as positive current we’d have to use a different passive sign convention, correct?

- Tristan

\>\> if we defined the electron flow as positive current we’d have to use a different passive sign convention, correct?

Correct. You can build a perfectly consistent current convention using electron current coupled with a flipped sign convention. This in fact is how the 1960s Military’s NEETS program I mentioned a while ago is written. The system works, it’s just not the one most engineers and scientists use. 

- Willy


From a recent KA question in Conventional Current Direction  
So, if I turn on my TV, does it mean that the current will be going from the TV to the plug, whilst the "Electron Current" will be from the plug to the TV? If I am right, isn't this entire concept unnecessary, when we could have just defined the direction of current as the same as that of the electrons?

It's not as crazy as that. We are not pretending the current is going the other way. What we are doing is pointing the current arrow in the direction the electrons are coming from.

It's like how sailors talk about the wind, or how weathervanes work. If you ask a sailor to point at the wind, he or she will point in the direction the wind is coming from. A "north wind" flows from the north. The sailor isn't crazy, and isn't pretending the wind goes the other way. It is just the common understanding amongst sailors about how to name the wind direction.

We do the same with electric current. The reason is electrons have a negative charge--that negative sign is why the direction seems backwards. We define current direction in terms of the motion of positive charge.

And just to be super complete... The current in your TV's power cord is AC "alternating current". It changes direction 50 or 60 times per second. The idea of current direction in AC circuits isn't so useful, since it switches around so often. The first circuits we study in Electronics are based on DC "direct current", where the power source is typically a battery. Defining current direction in DC circuits is important. It is confusing at first, but I promise you will get used to it soon.
