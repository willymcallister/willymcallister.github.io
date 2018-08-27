---
layout: article
title:  "Delta-Wye derivations"
author: Willy McAllister
comments: true
---

This article presents derivations of the $\Delta - \text Y$ transformation equations. The first one is for the three equations going from $\Delta$ to $\text Y$. Going in the opposite direction, $\text Y$ to $\Delta$, the algebra is harder, and there are two versions of this derivation. One does it with strictly algebraic manipulation. It works, but seems a bit convoluted. The second derivation is based on viewing the resistors as conductances before diving into the math. This one is a nice demonstration of *duality* and symmetry. 

There is no need to memorize the transformation equations. If the need arises, you can look them up. And no engineer ever needs to produce the following derivations on the spot. They are presented here for your amusement.

You can find a full introduction to the Delta-Wye transform equations in this [article]({{ site.baseurl }}{% link _articles/delta-wye-resistor-networks.md %}).

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

## Objective

The resistance between any pair of terminals has to be the same in both the $\Delta$ and $\text Y$ configurations. For example, in $\Delta$, the resistance across the top between terminals $x$ and $y$ is $Rc \parallel (Ra+Rb)$. In $\text Y$, the resistance between terminals $x$ and $y$ is $R1 + R2$.

![Delta and Wye configuration](https://ka-perseus-images.s3.amazonaws.com/05cc24f20113bc6937dec9b8e85ee09e032d2a66.svg){: .centered }

Given the three resistor values on one side, we are going to derive the resistor values on the other side, going both ways.

## $\Delta$ to $\text Y$ derivation

This derivation was contributed by Khan Academy learner [_phidot_](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-resistor-circuits/a/ee-delta-wye-resistor-networks?qa_expand_key=kaencrypted_ad2413cde556298b64a98d41d01fd684_cd6a16e8a8a657a21f768c0ff04804160d977a939ac691b3ecd6f7ee4a7f3b908c3a74bcab01337d6533d3b2cd73bf8f6ff245d796c6ba5cd4935e7434b49ff5a41f9fde6e3e3b40568f65d949ebef1c2069c478d967b52cc4b9a4782497244937b838cd8908e0ad3a3a524e87a524e6f816e4f6f1312d1554b5f5586074aab1f7d6c61e4d62263fecf53eb29522e61469af6deb96ff91ae7303c04481bb2de0). Let's figure out $R1$ in the $\text Y$ configuration in terms of $\Delta$ resistors $(Ra, Rb, Rc)$. We write a set of three simultaneous equations describing the resistance between each pair of terminals. 

$R_{xy}: \quad R1 + R2 = Rc \parallel (Ra+Rb)$  
$R_{yz}: \quad R2 + R3 = Ra \parallel (Rb+Rc)$  
$R_{zx}: \quad R3 + R1 = Rb \parallel (Rc+Ra)$

The left side is the resistance in the $\text Y$ configuration, the right side is the resistance in the $\Delta$ configuration. $R_{xy}$ stands for the resistance between terminals $x$ and $y$.
  
>The symbol $\parallel$ is shorthand notation for "in parallel with",  
$R_i \parallel R_j = R_i \,R_j / (R_i + R_j)$

When we look at terminals $x$ and $y$, we assume terminal $z$ isn't connected to anything, so the current in $\text R3$ is $0$. 

<details>
<summary>Tell me more about the assumption</summary>
<p>We can make this assumption because we know resistors are <a href="/a/linearity.html">linear</a> devices and we can apply the principle of <a href="/a/superposition.html">superposition</a>. (If you haven't studied linearity and superposition yet, please trust me for now that the assumption is a good one.)</p>
</details> 

Let's attempt to isolate $R1$ on the left side. We combine the equations with this operation, 

$(\quad[R_{xy}]\quad + \quad [R_{zx}]\quad - \quad [R_{yz}]\quad)\, / 2$

Fill in all the left sides,

$( [R1 + R2] + [R3 + R1] - [R2 + R3] ) / 2$

$(R1+\,\cancel{R2}\,+\,\cancel{R3}+R1\,-\,\cancel{R2}\,-\,\cancel{R3})/2 = 2R1/2 = R1$

This verifies the operation isolates $R1$ on the left side. Now do the same operation on the right side,

$R1 = ( \,Rc \parallel (Ra+Rb) + Rb \parallel (Rc+Ra) - Ra \parallel (Rb+Rc)\, ) / 2$

Replace the $\parallel$ symbol with the proper formula for two parallel resistors,

$R1 = ($  
$\qquad\quad Rc(Ra+Rb)/(Rc+(Ra+Rb) \,+$  
$\qquad\quad Rb(Rc+Ra)/(Rb+(Rc+Ra) \,-$  
$\qquad\quad Ra(Rb+Rc)/(Ra+(Rb+Rc)$  
$\qquad ) \,/ 2$

Notice the denominator is the same in all three terms,

$R1 = \dfrac{Rc(Ra+Rb) + Rb(Rc+Ra) - Ra(Rb+Rc)}{2(Ra+Rb+Rc)}$

Multiply everything out and search for cancellations,

$R1 = \dfrac{\cancel{RaRc} \,+ RcRb + RbRc + \,\cancel{RbRa} \,- \,\cancel{RaRb} \,+\, \cancel{RaRc}}{2(Ra+Rb+Rc)}$

$R1 = \dfrac{\cancel{2}\,RbRc}{\cancel{2}( Ra+Rb+Rc )}$

$R1 = \dfrac{Rb\,Rc}{Ra+Rb+Rc}$

That's it! This expression tells us how to compute $\text Y$ resistor $R1$ from the given $\Delta$ resistors. The procedure for finding $R2$ and $R3$ is the same, with different subscripts. The specific operations you use on the equations are,

To isolate $R2: ([R_{xy}] + [R_{yz}] - [R_{zx}]) / 2 $  
To isolate $R3: ([R_{yz}] + [R_{zx}] - [R_{xy}]) / 2 $

## $\text Y$ to $\Delta$ derivation

Going in this direction the algebra is trickier. I found two derivations I admire. 
* Start with the $\Delta \rightarrow \text Y$ equastions and use algebra to solve in reverse
* Convert the resistors ($R$) to conductances ($G$) and start from scratch

### $\text Y$ to $\Delta$ derivation using just algebra

This first derivation is based on a video by [Mohiuddin Jewel](https://youtu.be/4DS3q2Ao2FM?t=14m26s).

![Delta and Wye configuration](https://ka-perseus-images.s3.amazonaws.com/05cc24f20113bc6937dec9b8e85ee09e032d2a66.svg){: .centered }

We're going to start with the three equations from the $\Delta$ to $\text Y$ transformation and solve for the lettered resistors $(Ra, Rb, Rc)$. To review,

$R1 = \dfrac{Rb\,Rc}{Ra + Rb + Rc}$

$R2 = \dfrac{Ra\,Rc}{Ra + Rb + Rc}$

$R3 = \dfrac{Ra\,Rb}{Ra + Rb + Rc}$

These steps may seem a bit goofy, but they work. First, divide the $R3$ equation by the $R1$ equation,

$\dfrac{R3}{R1} = \dfrac{\dfrac{Ra\,Rb}{Ra + Rb + Rc}}{\dfrac{Rb\,Rc}{Ra + Rb + Rc}}$

The $Ra + Rb + Rc$ terms are common to the top and bottom, so they cancel, leaving,

$\dfrac{R3}{R1} = \dfrac{Ra\,Rb}{Rb\,Rc} = \dfrac{Ra}{Rc}$

or, solving for $Ra$,

$Ra = \dfrac{R3\,Rc}{R1}$

Next, divide the equation for $R3$ by the equation for $R2$. The same kind of cancellation happens, giving us,

$\dfrac{R3}{R2} = \dfrac{Ra\,Rb}{Ra\,Rc} = \dfrac{Rb}{Rc}$

or, solving for $Rb$,

$Rb = \dfrac{R3\,Rc}{R2}$

Now we plug in our expressions for $Ra$ and $Rb$ into the equation for $R2$, 

$R2 = \dfrac{\dfrac{R3\,Rc}{R1}\,Rc}{\dfrac{R3\,Rc}{R1} + \dfrac{R3\,Rc}{R2} + Rc}$

A bunch of common $Rc$ terms cancel out, leaving,

$R2 = \dfrac{\dfrac{R3\,Rc}{R1}}{\dfrac{R3}{R1} + \dfrac{R3}{R2} + 1}$

Now we work on the denominator. The LCM of the three terms in the denominator is $R1\,R2$. Perform the addition by multiplying each term by the approprite form of $1$,

$R2 = \dfrac{\dfrac{R3\,Rc}{R1}}{\dfrac{R3}{R1}\dfrac{R2}{R2} + \dfrac{R3}{R2}\dfrac{R1}{R1} + 1\dfrac{R1\,R2}{R1\,R2}}$

$R2 = \dfrac{\dfrac{R3\,Rc}{R1}}{\dfrac{R3\,R2 + R3\,R1 + R1\,R2}{R1\,R2}}$

Two $R1$ terms and two $R1$ terms cancel, 

$\cancel{R2} \rightarrow 1 = \dfrac{\dfrac{R3\,Rc}{\cancel{R1}}}{\dfrac{R3\,R2 + R3\,R1 + R1\,R2}{\cancel{R1}\,\cancel{R2}}}$

$1 = \dfrac{R3\,Rc}{R3\,R2 + R3\,R1 + R1\,R2}$

and now we can solve for $Rc$,

$Rc = \dfrac{R3\,R2 + R3\,R1 + R1\,R2}{R3}$

Done! This expression tells us how to compute $\Delta$ resistor $Rc$ from the given  $\text Y$ resistors. You can derive $Ra$ and $Rb$ with the same technique using different patterns of dividing equations.

### $\text Y$ to $\Delta$ derivation using conductance

This second derivation involves transforming the resistors into conductances. After changing to conductance, the derivation follows exactly the steps we did in the first derivation in this article, $\Delta$ to $\text Y$. The resistance model and conductance model are called *duals* of each other. 

Every resistor is replaced with its equivalent conductance, $G = \dfrac{1}{R}.$

The rule for conductance in parallel is the sum of the conductances,

$G_{\text{parallel}} = G_i + G_j$

The rule for two conductances in series is similar to two resistors in parallel,

$G_{\text{series}} = \dfrac{G_i\,G_j}{G_i + G_j}$

![Delta-Wye with conductances]({{ site.baseurl }}{% link i/delta-wye1.svg %}){: .centered :}

Our strategy is to short circuit the conductance opposite the terminal in question and figure out the conductance. For example, suppose we are looking at terminal $x$. We short out $Ga$ on the opposite side by connecting a wire between $y$ and $z$. You can think of it as connecting both $y$ and $z$ to ground. Then we compute the conductance between terminal $x$ and ground and call this $G_x$. Shorting out the $Ga$ is the dual of leaving resistor $R1$ resistor open while figuring out $R_{yz}$ up above.

![Delta-Wye with conductances]({{ site.baseurl }}{% link i/delta-wye2.svg %}){: .centered :}

In the $\Delta$ configuration, the conductance from $x$ to ground is $Gb$ in parallel with $Gc$, or,

 $G_x = Gb + Gc$ 

In the $\text Y$ configuration, the conductance from $x$ to ground is $G1$ in series with the parallel combination of $G2$ and $G3$, or 

$G_x = G1 \cdots G2 \parallel G3 = \dfrac{G1 \, (G2+G3)}{G1+(G2+G3)}\quad(\cdots$ means series and $\parallel$ means parallel)

$G_x$ has to be the same for $\Delta$ and $\text Y$, so we set these equal,

$G_x: Gb + Gc = G1(G2+G3)/(G1+G2+G3)$  

and construct two more equations to describe all three terminals,

$G_y: Ga + Gc = G2(G1+G3)/(G1+G2+G3)$  

$G_z: Ga + Gb = G3(G1+G2)/(G1+G2+G3)$  

Notice how these three equations are nearly identical to their duals, $G_{xy}, G_{yz}, G_{zx}$, shown at the beginning of the first derivation. 

Let's isolate $Gb$. We combine the equations with this operation, 

$(\quad[G_x]\quad + \quad [G_z]\quad - \quad [G_y]\quad)\,/2$

The left side becomes,

$([Gb + Gc] + [Ga + Gb] - [Ga + Gc])\,/2$

We get a bunch of cancellation,

$((Gb+\,\cancel{Gc}\,+\,\cancel{Ga}\,+\,Gb\,-\,\cancel{Ga}\,-\,\cancel{Gc})\,/2 = \dfrac{2Gb}{2} = Gb$

This verifies that the operation isolates $Gb$. Now apply the same operation to the right hand side,

$Gb = ($  
$\qquad\quad G1(G2+G3)/(G1+G2+G3) \,+$  
$\qquad\quad G3(G1+G2)/(G1+G2+G3) \,-$  
$\qquad\quad G2(G1+G3)/(G1+G2+G3)$  
$\qquad ) \,/ 2$

Notice the denominator is the same in all three terms,

$Gb = \dfrac{G1(G2+G3) + G3(G1+G2) - G2(G1+G3)}{2(G1+G2+G3)}$

Multiply everything out and search for cancellations,

$Gb = \dfrac{\cancel{G1\,G2} \,+ G1\,G3 + G3\,G1 + \,\cancel{G3\,G2} \,-\, \cancel{G2\,G1} \,+ \,\cancel{G2\,G3}}{2(G1+G2+G3)}$

$Gb = \dfrac{\cancel{2}\,G1\,G3}{\cancel{2}(G1+G2+G3)}$

$Gb = \dfrac{G1\,G3}{G1+G2+G3}$

This expression tells us how to compute $\Delta$ conductance $Gb$ from the given $\text Y$ conductances. The procedure for finding $Ga$ and $Gc$ is the same. You get to come up with the combining operation to apply to the simultaneous equations.

If you want to convert $Gb$ to resistance, here's how. Replace $Gb$ with $\dfrac{1}{Rb}$, etc.

$\dfrac{1}{Rb}=\dfrac{\dfrac{1}{R1\,R3}}{\dfrac{1}{R1}+\dfrac{1}{R2}+\dfrac{1}{R3}}$

Go to work on the denominator. The LCM of the three fractions is $R1\,R2\,R3$. Multiply each term by an appropriate form of $1$ and add fractions.

$\dfrac{1}{Rb}=\dfrac{\dfrac{1}{R1\,R3}}{\dfrac{R2\,R3}{R1\,R2\,R3}+\dfrac{R1\,R3}{R1\,R2\,R3}+\dfrac{R1\,R2}{R1\,R2\,R3}}$

$\dfrac{1}{Rb}=\dfrac{\dfrac{1}{R1\,R3}}{\dfrac{R2\,R3+R1\,R3+R1\,R2}{R1\,R2\,R3}}$

Now we turn a summersault to simplify the expression,

$\dfrac{1}{Rb}=\dfrac{\dfrac{1}{\cancel{R1}\,\cancel{R3}}\,(\cancel{R1}\,R2\,\cancel{R3})}{R2\,R3+R1\,R3+R1\,R2}$

And a bit more cancellation gives us,

$\dfrac{1}{Rb}=\dfrac{R2}{R2\,R3+R1\,R3+R1}$

One more flip to get the expression for $Rb$ we've been looking for,

$Rb=\dfrac{R2\,R3+R1\,R3+R1\,R2}{R2}$

$Ra$ and $Rc$ go through the same process. 





