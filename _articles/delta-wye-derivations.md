---
layout: article
title:  "Delta-Wye derivations"
author: Willy McAllister
comments: true
---

We derive the $\Delta \leftrightarrow \text Y$ transformation equations. 

![Delta and Wye configurations with labeled nodes and resistors.]({{ site.baseurl }}{% link i/delta_wye3.svg %}){: .centered :} 

Find an introduction to the Delta-Wye transformation in this [article]({{ site.baseurl }}{% link _articles/delta-wye-resistor-networks.md %}).

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

Please don't memorize these transformations. If the need arises, you can look them up. These derivations never appear on a test. They are presented here for your amusement.

## $\Delta$ to $\text Y$ derivation

![Delta and Wye configurations with labeled nodes and resistors.]({{ site.baseurl }}{% link i/delta_wye3a.svg %}){: .centered :} 

Our goal is to find a relationship between the three given $\Delta$ resistances $R_{\Delta abc}$ and the three unknown $\text Y$ resistances $R_{\text Y 123}$ so the overall resistance between pairs of terminals is the same. For example, we want $R_{xy}$ to be the same for $\Delta$ as it is for $\text Y$. 

Finding $R_{xy}$ and the others is a bit tricky without a surrounding circuit for context. We build a context and apply the principle of superposition.

### Superposition
{:.no_toc}

If you have an arbitrary network of resistors, how do you find its resistance? You might attach a voltage or current source and measure $I$ and $V$. The ratio $V/I$ is the overall resistance $R$ of the network.

Imagine a black box with three resistors inside. The resistors are connected as either a $\Delta$ or $\text Y$ --- you don't know which. To find the overall resistance between terminals of a black box we construct an imaginary experimental setup. Connect three current sources to the black box like this,

![Delta-Wye resistance black box]({{ site.baseurl }}{% link i/delta_wye25.svg %}){: .centered :}

With this experimental setup we can set currents and measure voltages. We can compute ratios of voltage to current, like $V_{xy} / I_{xy} = R_{xy}$.
{: .caption :} 

We seek a relationship between $R_{\Delta abc}$ and $R_{\text Y 123}$ so the given currents and the measured voltages---and therefore the resistances---are identical for $\Delta$ and $\text Y$. If we find such a relationship then the $\Delta$ and $\text Y$ are *equivalent*. Equivalent means if we choose just the right resistor values we can't tell if $\Delta$ or $\text Y$ is inside the black box based on observations we make from outside the black box. When that's the case, $\Delta$ and $\text Y$ are interchangeable.

If we open the lid of the black box there are the two possible circuits inside,

![Delta-Wye resistance superposition circuits in delta and wye form]({{ site.baseurl }}{% link i/delta_wye26.svg %}){: .centered :}

Let's work out expressions for ratios of $\dfrac{V}{I} = R$ for both sides.

Whenever you see multiple power sources connected to linear elements (resistors are linear) it's time to consider the [Principle of Superposition]({% link _articles/superposition.md %}). (This experimental setup is basically an excuse to invoke Superposition.)

Here is the first of three superposition sub-circuits with two current sources suppressed,

![Delta-Wye resistance with current sources suppressed]({{ site.baseurl }}{% link i/delta_wye27.svg %}){: .centered :}

To suppress a current source replace it with an open. 
{: .caption :}

In the $\Delta$ configuration the resistance between terminals $x$ and $y$ is $Rc$ in parallel with the series combination of $Ra$ and $Rb$,

$R_{xy} = Rc \parallel (Ra \text{---} Rb) = \dfrac{Rc\, (Ra + Rb)}{Rc + (Ra + Rb)}$ 

>Symbol $\parallel$ is a shorthand notation for "in parallel with," $\,R_i \parallel R_j = R_i \,R_j / (R_i + R_j)$
>Symbol $\text{---}$ is a shorthand notation for "in series with," $\,R_i \,\text{---}\, R_j = R_i + R_j$

In $\text Y$ the resistance between $x$ and $y$ is the series combination of $R1$ and $R2$,

$R_{xy} = R1 + R2$

We want $R_{xy}$ to be the same in both the $\Delta$ and $\text Y$ configurations, so set them equal, 

$R_{xy}: \quad R1 + R2 = Rc \,(Ra + Rb)/(Ra + Rb + Rc)$   

Now draw the other two sub-circuits for yourself and find $R_{yz}$ and $R_{zx}$. Each sub-circuit has one active current source and two suppressed sources. You end up with a set of three simultaneous equations for the resistance between each pair of terminals,

$R_{xy}: \quad R1 + R2 = Rc \,(Ra + Rb)/(Ra + Rb + Rc)$   
$R_{yz}: \quad R2 + R3 = Ra \,(Rb + Rc)/(Ra + Rb + Rc)$  
$R_{zx}: \quad R3 + R1 = Rb \,(Rc + Ra)/(Ra + Rb + Rc)$

### Solve
{:.no_toc}

Let's isolate $R1$. Combine the three equations with this operation, 

$(\quad R_{xy}\quad + \quad R_{zx}\quad - \quad R_{yz}\quad)\, / 2$

Verify this operation isolates $R1$ on the left side,

$( \,[R1 + R2] + [R3 + R1] - [R2 + R3] \,) / 2$

$(R1+\,\cancel{R2}\,+\,\cancel{R3}+R1\,-\,\cancel{R2}\,-\,\cancel{R3})/2$

$2R1/2$

$R1\quad \checkmark$

Now do the same operation on the right side,

$R1 = (Rc(Ra+Rb)/(Ra+Rb+Rc) \,+$  
$\qquad\quad Rb(Rc+Ra)/(Ra+Rb+Rc) \,-$  
$\qquad\quad Ra(Rb+Rc)/(Ra+Rb+Rc)\,)\, / 2$  

Notice the denominator is the same in all three terms,

$R1 = \dfrac{Rc(Ra+Rb) + Rb(Rc+Ra) - Ra(Rb+Rc)}{2(Ra+Rb+Rc)}$

Multiply everything out and hunt for cancellations,

$R1 = \dfrac{\cancel{RaRc} \,+ RcRb + RbRc + \,\cancel{RbRa} \,- \,\cancel{RaRb} \,-\, \cancel{RaRc}}{2(Ra+Rb+Rc)}$

$R1 = \dfrac{\cancel{2}\,RbRc}{\cancel{2}( Ra+Rb+Rc )}$

$R1 = \dfrac{Rb\,Rc}{Ra+Rb+Rc}$

That's it! This expression lets you compute $\text Y$ resistor $R1$ from the given $\Delta$ resistors. 

The procedure to find $R2$ and $R3$ is the same, with different subscripts. The specific operations you use on the equations are,

To isolate $R2: (\,[R_{xy}] + [R_{yz}] - [R_{zx}]\,) / 2 $  
To isolate $R3: (\,[R_{yz}] + [R_{zx}] - [R_{xy}]\,) / 2 $

The $\Delta$ to $\text Y$ transformation is,

$\quad R1 = \dfrac{Rb\,Rc}{Ra + Rb + Rc}$

$\quad R2 = \dfrac{Ra\,Rc}{Ra + Rb + Rc}$

$\quad R3 = \dfrac{Ra\,Rb}{Ra + Rb + Rc}$

(All the denominators are the same.)

## $\text Y$ to $\Delta$ derivation

The algebra for $\text Y$ to $\Delta$ is harder. I found two derivations I admire,

* Start with the result from the $\Delta \rightarrow \text Y$ transformation and use algebra to solve in reverse. It works, but seems a bit convoluted.
* Convert from resistance $R$ to conductance $G$ and solve from scratch. The result is symmetric with the $\Delta$ to $\text Y$ derivation.

### $\text Y$ to $\Delta$ derivation with just algebra

![Delta and Wye configurations with labeled nodes and resistors.]({{ site.baseurl }}{% link i/delta_wye3b.svg %}){: .centered :} 

We start with the three transformation equations from $\Delta$ to $\text Y$. These equations express $R_{\text Y123}$ in terms of $R_{\Delta abc}$. If the system of equations is a sock, reach down into the sock and pull it inside out to find each $\Delta$ resistor $R_{\Delta abc}$ in terms of $R_{\text Y123}$. 

To review, the $\Delta$ to $\text Y$ equations are,

$R1 = \dfrac{Rb\,Rc}{Ra + Rb + Rc}$

$R2 = \dfrac{Ra\,Rc}{Ra + Rb + Rc}$

$R3 = \dfrac{Ra\,Rb}{Ra + Rb + Rc}$

We go after $Rc$ first. Divide the $R3$ equation by the $R1$ equation,

$\dfrac{R3}{R1} = \cfrac{\cfrac{Ra\,Rb}{Ra + Rb + Rc}}{\cfrac{Rb\,Rc}{Ra + Rb + Rc}}$

The $Ra + Rb + Rc$ terms are common to the top and bottom, so they cancel,

$\dfrac{R3}{R1} = \dfrac{Ra\,Rb}{Rb\,Rc} = \dfrac{Ra}{Rc}$

or, solving for $Ra$,

$Ra = \dfrac{R3\,Rc}{R1}$

Next, divide the equation for $R3$ by the equation for $R2$. The same kind of cancellation happens,

$\dfrac{R3}{R2} = \dfrac{Ra\,Rb}{Ra\,Rc} = \dfrac{Rb}{Rc}$

or, solving for $Rb$,

$Rb = \dfrac{R3\,Rc}{R2}$

Now we plug in our expressions for $Ra$ and $Rb$ into the equation for $R2$, 

$R2 = \cfrac{\cfrac{R3\,Rc}{R1}\,Rc}{\cfrac{R3\,Rc}{R1} + \cfrac{R3\,Rc}{R2} + Rc}$

A bunch of common $Rc$ terms cancel out,

$R2 = \cfrac{\cfrac{R3\,Rc}{R1}}{\dfrac{R3}{R1} + \cfrac{R3}{R2} + 1}$

The least common multiple of the terms in the denominator is $R1\,R2$. Perform the addition in the denominator by multiplying each term by the appropriate form of $1$,

$R2 = \cfrac{\dfrac{R3\,Rc}{R1}}{\cfrac{R3}{R1}\cfrac{R2}{R2} + \cfrac{R3}{R2}\cfrac{R1}{R1} + 1\cfrac{R1}{R1}\cfrac{R2}{R2}}$

leaving us with,

$R2 = \dfrac{\dfrac{R3\,Rc}{R1}}{\cfrac{R3\,R2 + R3\,R1 + R1\,R2}{R1\,R2}}$

Two $R1$ terms and two $R2$ terms cancel, 

$\cancel{R2} \rightarrow 1 = \cfrac{\cfrac{R3\,Rc}{\cancel{R1}}}{\cfrac{R3\,R2 + R3\,R1 + R1\,R2}{\cancel{R1}\,\cancel{R2}}}$

$1 = \dfrac{R3\,Rc}{R3\,R2 + R3\,R1 + R1\,R2}$

and now we solve for $Rc$,

$Rc = \dfrac{R3\,R2 + R3\,R1 + R1\,R2}{R3}$

Done! This expression tells us how to compute $\Delta$ resistor $Rc$ from the given  $\text Y$ resistors. You can derive $Ra$ and $Rb$ with the same technique using different patterns of dividing equations.

The $\text Y$ to $\Delta$ transformation is,

$\quad Ra = \dfrac{R3\,R2 + R3\,R1 + R1\,R2}{R1}$

$\quad Rb = \dfrac{R3\,R2 + R3\,R1 + R1\,R2}{R2}$

$\quad Rc = \dfrac{R3\,R2 + R3\,R1 + R1\,R2}{R3}$

(All the numerators are the same.)

{% capture details %}
Wikipedia has a similar [derivation](https://en.wikipedia.org/wiki/Y-%CE%94_transform#Y-load_to_%CE%94-load_transformation_equations), with equally mind-numbing algebra.

Let $R_T = Ra+Rb+Rc$.

As a reminder, the $\Delta$ to $\text Y$ equations are,

$R_{1} = {\dfrac {RbRc}{R_T}}$   (1)

$R_{2} = {\dfrac {RaRc}{R_T}}$   (2)

$R_{3} = {\dfrac {RaRb}{R_T}}$   (3)

Multiply pairs of equations,

$R_{1}R_{2}={\dfrac{RaRbRc^{2}}{R_T^{2}}}$   (4)

$R_{1}R_{3}={\dfrac{RaRb^{2}Rc}{R_T^{2}}}$   (5)

$R_{2}R_{3}={\dfrac{Ra^{2}RbRc}{R_T^{2}}}$   (6)

and the sum of these equations is,

$R_{1}R_{2}+R_{1}R_{3}+R_{2}R_{3}={\dfrac {RaRbRc^{2}+RaRb^{2}Rc+Ra^{2}RbRc}{R_T^{2}}}$   (7)

Factor $RaRbRc$ from the right side, which leaves $R_T$ in the numerator, canceling with an $R_T$ in the denominator.

<p>
${\begin{aligned}
R_{1}R_{2}+R_{1}R_{3}+R_{2}R_{3} &= {}{\dfrac {\left(RaRbRc\right)\left(Ra+Rb+Rc\right)}{R_T^{2}}} \\
&={}{\dfrac {RaRbRc}{R_T}}
\end{aligned}}$ (8)
</p>

Divide (8) by (1)

<p>
${\begin{aligned}
\dfrac{R_{1}R_{2}+R_{1}R_{3}+R_{2}R_{3}}{R_{1}} &= {} \dfrac{RaRbRc}{R_T} \dfrac{R_T}{RbRc} \\
&= {}Ra
\end{aligned}}$
</p>

which is the $\text Y$ to $\Delta$ equation for $Ra$. 

Divide (8) by expressions for $R_{2}$ or $R_{3}$ to find the other two equations.
{% endcapture %}
{% capture summary %}yet another derivation{% endcapture %}{% include details.html %}

### $\text Y$ to $\Delta$ derivation with conductance

This derivation converts resistance to conductance. The system of equations is the dual of the derivation for $\Delta$ to $\text Y$.

Replace each resistor with its corresponding conductance, $G = \dfrac{1}{R}.$

![Delta-Wye with conductances]({{ site.baseurl }}{% link i/delta_wye20.svg %}){: .centered :}

{% capture details %}
The rule to combine conductances in parallel is the sum of the conductances,

$G_{\text{parallel}} = G_i + G_j$

The rule to combine two conductances in series is similar to two resistors in parallel,

$G_{\text{series}} = \dfrac{G_i\,G_j}{G_i + G_j}$

If you have $\text N$ conductances in series combine them with,

$\dfrac{1}{G_{series}} = \dfrac{1}{\dfrac{1}{G_i}+\dfrac{1}{G_j}+...+\dfrac{1}{G_\text N}}$

With conductance the form of Ohm's Law we use is $\text I = \text G \, \text V$, or $\text G = \dfrac{\text I}{\text V}$.

{% endcapture %}
{% capture summary %}review: equivalent conductance{% endcapture %}{% include details.html %}

Our goal is to find a relationship between the three $\Delta$ conductances $G_{\Delta abc}$ and the three $\text Y$ conductances $G_{\text Y 123}$ such that the overall conductance between any pair of terminals is the same. 

### Superposition
{:.no_toc}

Imagine a black box with three resistors inside. They are connected as either a $\Delta$ or $\text Y$ --- you don't know which. Now build an imaginary experimental setup. Connect three voltage sources like this,

![Delta-Wye conductance black box]({{ site.baseurl }}{% link i/delta_wye24.svg %}){: .centered :}

With this experimental setup we can set the voltages and measure the currents. We can compute ratios of current to voltage, like $I_x / V_x = G_x$.
{: .caption :} 

We are trying to find the right relationship between $G_{\Delta abc}$ and $G_{\text Y 123}$ so the given three voltages and the measured three currents are identical. If we find that relationship then the $\Delta$ and $\text Y$ are *equivalent*, which means either configuration could be inside the black box and we can't tell them apart by with observations made from outside. That means they are interchangeable.

If we open the lid of the black box, here are the two possible circuits,

![Delta-Wye conductance superposition]({{ site.baseurl }}{% link i/delta_wye22.svg %}){: .centered :}

Let's develop expressions for ratios of $\dfrac{I}{V} = G$ for both sides.

Whenever you see multiple power sources connected to linear elements (resistors are linear) it's time to crack open the [Principle of Superposition]({% link _articles/superposition.md %}). (This experimental setup is a clever way to let us invoke Superposition.)

Here is the first of three superposition sub-circuits with two voltage sources suppressed,

![Delta-Wye conductances voltage sources suppressed]({{ site.baseurl }}{% link i/delta_wye23.svg %}){: .centered :}

To suppress a voltage source replace it with a short. $y$ and $z$ are now connected to ground. 
{: .caption :}

Start with terminal $x$. Compute the ratio of $I_x$ to $V_x$, the conductance between terminal $x$ and ground. Call this $G_x$. 

In the $\Delta$ configuration the conductance from $x$ to ground is $Gb$ in parallel with $Gc$,

$G_x = Gb + Gc$ 

In the $\text Y$ configuration the conductance from $x$ to ground is $G1$ in series with the parallel combination of $G2$ and $G3$,

$G_x = G1 \,\text{---}\, (G2 \parallel G3) = \dfrac{G1 \, (G2+G3)}{G1+(G2+G3)}$

>Symbol $\parallel$ is shorthand for "in parallel with," $\quad G_i \,\parallel \, G_j = G_i + G_j$  
>Symbol $\text{---}$ is shorthand for "in series with," $\quad G_i \,\text{---}\, G_j = G_i \,G_j / (G_i + G_j)$

We want $G_x$ to be the same for $\Delta$ and $\text Y$, so set them equal,

$G_x: \quad Gb + Gc = G1(G2+G3)/(G1+G2+G3)$  

Now draw the other two sub-circuits on your own. Construct two more equations,

$G_y: \quad Ga + Gc = G2(G1+G3)/(G1+G2+G3)$  

$G_z: \quad Ga + Gb = G3(G1+G2)/(G1+G2+G3)$  

This is our system of three equations. Notice they are nearly identical to the equations at the beginning of the [$\Delta$ to $\text Y$ derivation](#delta-to-text-y-derivation), $R_{xy}, R_{yz}, R_{zx}$. The rest of the algebra is the same.

### Solve
{:.no_toc}

Let's use the three equations to isolate $Gb$. Combine the equations with this operation, 

$(\quad[G_x]\quad + \quad [G_z]\quad - \quad [G_y]\quad)\,/2$

The left side becomes,

$([Gb + Gc] + [Ga + Gb] - [Ga + Gc])\,/2$

There's a bunch of cancellation,

$(Gb+\,\cancel{Gc}\,+\,\cancel{Ga}\,+\,Gb\,-\,\cancel{Ga}\,-\,\cancel{Gc})\,/2$

$\dfrac{2Gb}{2}$

$Gb\quad \checkmark\quad$ This verifies the combining operation isolates $Gb$. 

Now apply the same operation to the right side,

$Gb = [\,G1(G2+G3)/(G1+G2+G3) \,+$  
$\qquad\quad G3(G1+G2)/(G1+G2+G3) \,-$  
$\qquad\quad G2(G1+G3)/(G1+G2+G3) \,]\,/ 2$

Notice the denominator is the same in all three terms,

$Gb = \dfrac{G1(G2+G3) + G3(G1+G2) - G2(G1+G3)}{2(G1+G2+G3)}$

Multiply everything out and search for cancellations,

$Gb = \dfrac{\cancel{G1\,G2} \,+ G1\,G3 + G3\,G1 + \,\cancel{G3\,G2} \,-\, \cancel{G2\,G1} \,- \,\cancel{G2\,G3}}{2(G1+G2+G3)}$

$Gb = \dfrac{\cancel{2}\,G1\,G3}{\cancel{2}(G1+G2+G3)}$

$Gb = \dfrac{G1\,G3}{G1+G2+G3}$

Done! This tells us how to compute $\Delta$ conductance $Gb$ from the given $\text Y$ conductances. 

The procedure for finding $Ga$ and $Gc$ is the same.

#### Optional: convert conductance to resistance
{:.no_toc}

Do you want to convert this conductance form back to resistance? We should end up with the same equation as the [all-algebra derivation](#text-y-to-delta-derivation-using-just-algebra). Replace every $G$ with $\dfrac{1}{R}$,

$\dfrac{1}{Rb}=\cfrac{\cfrac{1}{R1}\cfrac{1}{R3}}{\cfrac{1}{R1}+\cfrac{1}{R2}+\cfrac{1}{R3}}$

Go to work on the denominator. The least common multiple of the three fractions is $R1\,R2\,R3$. Multiply each term by an appropriate form of $1$ and add fractions.

$\dfrac{1}{Rb}=\cfrac{\cfrac{1}{R1\,R3}}{\cfrac{R2\,R3}{R1\,R2\,R3}+\cfrac{R1\,R3}{R1\,R2\,R3}+\cfrac{R1\,R2}{R1\,R2\,R3}}$

$\dfrac{1}{Rb}=\cfrac{\cfrac{1}{R1\,R3}}{\cfrac{R2\,R3+R1\,R3+R1\,R2}{R1\,R2\,R3}}$

Now we turn a somersault to bring $R1\,R2\,R3$ to the numerator,

$\dfrac{1}{Rb}=\dfrac{\dfrac{1}{\cancel{R1}\,\cancel{R3}}\,(\cancel{R1}\,R2\,\cancel{R3})}{R2\,R3+R1\,R3+R1\,R2}$

Some cancellation gives us,

$\dfrac{1}{Rb}=\dfrac{R2}{R2\,R3+R1\,R3+R1\,R2}$

One more flip to get the expression for $Rb$ we've been looking for,

$Rb=\dfrac{R2\,R3+R1\,R3+R1\,R2}{R2}$

This matches the result from the algebraic derivation we did for $\text Y$ to $\Delta$. 

## Summary
{:.no_toc}

As I mentioned in the introduction, please don't bother to memorize these transformation equations, it's not worth the effort. These circuits are rare (except in power engineering where they come up more often). You can always look them up.

## Credits
{:.no_toc}

The $\Delta$ to $\text Y$ derivation was contributed by Khan Academy learner [_phidot_](https://www.khanacademy.org/profile/phidot/discussion). 

The first $\text Y$ to $\Delta$ derivation is based on a video by [Mohiuddin Jewel](https://youtu.be/4DS3q2Ao2FM?t=14m26s).
