---
layout: article
title:  "Current"
author: Willy McAllister
comments: true
---

Electric current is the flow of charge, similar to the flow of water in a river or garden hose. The key difference: there is one type of water but there are two types of charge---and they move in opposite directions. 

----

#### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----
### Where we are headed
{:.no_toc}

Current is the flow of charge. This is the cornerstone concept in electrical engineering.

----

## Current in wires 

Current in metal wires is carried by electrons. Each atom in a metal wire contributes one or more valence electrons to a "swarm" of electrons free to move around in the metal. Valence electrons are the ones farthest from the nucleus. They are easily pulled away from metal atoms. This swarm behavior is a special property of elements classified as metals. 

![Copper atom]({{ site.baseurl }}{% link i/basic_copper_atom.svg %}){: .centered :}{: height="160px" width="245px" :}

A copper atom has one valence electron in its outer shell. At any normal temperature this valence electron has enough energy to leave its atom and join a 'metallic swarm' of electrons. An applied voltage influences the motion of the swarm.
{: .caption :}

When you apply a voltage to a wire it is equivalent to an *electrical pressure*. Voltage causes an electric force on charged particles (Coulomb's force), and if the particles are able to move, they will. In metals, the valence electrons move around. The other electrons are more tightly bound to the nucleus, so they don't go anywhere. The nucleus (protons and neutrons) are stuck in the atomic lattice, so they don't go anywhere, either.

Which way to they move? Electrons, e$^-$, have a negative charge. They are attracted to the higher voltage, on the left in this image, and repelled by the negative voltage on the right. 

![Current flow in wire]({{ site.baseurl }}{% link i/current_wire.svg %}){: .centered :}{: height="140px" :}

The metals with the loosest electrons (the best [conductors](https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity#Resistivity_and_conductivity_of_various_materials)) are the ones you are familiar with---silver, copper, gold, and aluminum. Copper is much cheaper than silver or gold, so that's why most wires are copper. Inside integrated circuits, most wires are aluminum, because it is easy to make fine patterns with aluminum. 

## Can current be positive charge?

Yes. Current is the movement of any type of charge. It can be carried by both positive and negative charge at the same time. 

A good example is saltwater. Current in saltwater is carried by both positive and negative charge. Table salt is sodium chloride, NaCl. In solid form, the sodium and chlorine atoms are held together by an *ionic bond*, a relatively weak chemical bond. When you put salt in water the water molecules wiggle between the Na and Cl atoms and pry them apart. This is what happens when salt *dissolves*. 

Na and Cl separate and become free-floating, each surrounded by water molecules. In the process Na gladly gives up one of its electrons, and Cl joyously accepts an electron. Na and Cl turn into ions with opposite charge, Na$^+$ and Cl$^-$. 

![Current flow in saltwater]({{ site.baseurl }}{% link i/current_saltwater.svg %}){: .centered :}{: height="140px" :}

Saltwater is a good conductor. Both ions respond to an applied voltage. They move through the saltwater in opposite directions. Na$^+$ is attracted toward negative voltage (on the right in the image) and Cl$^-$ is attracted toward positive voltage (on the left). 

In saltwater the current is composed of positive and negative ions, not free electrons like in metal. The entire charged ion drifts through the water. The electrons do not from atom to atom. 

Electric currents in our bodies are the same thing, moving ions. The water molecules, H$_2$O, are electrically neutral. They don't move in response to the applied voltage. (They might rotate to line up with the electric force, but they don't move any distance.)

{% capture summary %}What happens at the ends? {% endcapture %}  
{% capture details %}  
If you connect the ends of the water tube to a battery with wires you get a current. In the wires current is carried by electrons. In the saltwater current is carried by ions. What happens right where the wire and water touch? You might be brimming with questions.

At this point, here's the answer: It's complicated---please don't ask. There is some electro-chemistry going on that's beyond what I'm trying to teach you about current in this introduction. The water-wire chemical process is called *electrolysis of aqueous sodium chloride*. Look this up if you want to explore further. 

My recommendation is, for now: Apply your curiosity to electric circuits.  
{% endcapture %}{% include details.html %} 

{% capture summary %}Does pure water conduct?{% endcapture %}  
{% capture details %}  
Super pure water without any salt or other ions is a poor conductor. However, there is almost no chance you will come across water this pure. Water is very good at dissolving whatever it comes in contact with, like the walls of the container it is in. It always finds some way to have plenty of salt ions available to conduct. Water pure enough to not conduct only exists in specialized chemistry labs.  
{% endcapture %}{% include details.html %} 

Another place positive and negative ions work together to create current is inside a battery. The chemical processes have moving electrons and positive ions. The current inside fluorescent lamps and neon signs includes positive ions on the move. I don't know any examples where current is just positive charge.

## Visualize current

We visualize current with the most general form of current flow, where there's two types of charge. To visualize current you play a little mind game. Imagine a transparent surface or membrane cutting all the way across the conductor (shown in blue). If charge is moving it may pass through the membrane.

Talk first about charges moving in the same direction. With no voltage, + moving left, - moving left. You count +1 for + charge and -1 for - charge. Net charge movement = 0 and current = 0. Carrying a bucket of water is 0 current. 

![Visualizing general current flow with a little dude]({{ site.baseurl }}{% link i/current_general1.svg %}){: .centered :}{: height="180px" :}

Shrink yourself down to atomic size and station yourself nearby. You are so small you can count individual charges as they pass through the boundary.

Now we have to make an arbitrary---but very important---decision. We have to choose a direction to be the positive direction. Look at positive charge for a second. Suppose there's no voltage applied. A $q+$ might wander through the membrane in either direction, left or right. If it goes back and forth through the membrane, that should count as 0 current (no net motion of positive charge). When it passes through the first time we could count that as +1, and when it goes back through the other way it counts as -1. That sums to 0, which is what we want. (This doesn't mean it became a negative charge, it just means it reduces the positive charge count by 1.)

Each negative charge moving through the boundary heading left counts as +1.  
Each positive charge moving through the boundary heading right counts as +1. 

$q_\text{total} = {\displaystyle \sum_\text{left}} q^- + {\displaystyle \sum_\text{right}} q^+$

Count charges for a fixed amount of time, like one second. Add up the total count of charge for the whole time interval. After the time interval is over, report the current as the total amount of charge divided by the amount of time---in units of charge per second. 

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

## Summary
{:.no_toc}

A good mental image for current is to imagine yourself shrunk down to atomic size. Place an imaginary boundary all the way across a conductor (wire or saltwater tube). Count charges as they pass through the boundary. Current is defined as the number of charges passing through in a fixed amount of time.
