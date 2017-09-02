---
layout: article
title:  "Mesh current method"
author: Willy McAllister
comments: true
---

The Mesh Current Method is one of two well-organized methods for solving a circuit. (The other is the [Node Voltage Method]({{ site.baseurl }}{% link _articles/node-voltage.md %}).) The Mesh Current Method is a beautiful application of [Kirchhoff's Voltage Law](electrical-engineering/ee-circuit-analysis/a/ee-kirchhoffs-laws) (KVL).

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

**Mesh Current Method**

* Identify the meshes (the open windows of a circuit).
* Assign a current variable to each mesh, using a consistent direction.
* Write Kirchhoff's Voltage Law around each mesh. 
* Solve the resulting system of equations.
* Solve the individual element currents and voltages with Ohm's Law.

Exception: If the circuit is [*non-planar*](#exception-non-planar-circuits), or you have a current source shared by two meshes, use the [Loop Current Method]({{ site.baseurl }}{% link _articles/loop-current.md %}). The [Loop Current Method](w/a/ee-loop-current-method) is a small variation of the Mesh Current Method.

----

## Loops and meshes

We need to understand two special circuit terms: *loop* and *mesh*.

![Loop and mesh definitions](https://ka-perseus-images.s3.amazonaws.com/1e11477a94abdb9c8b8768f103cdb598fe9b5583.svg){: .centered :}

A *loop* is any closed path around a circuit. To trace a loop, start at any component terminal and trace a path through connected elements until you get back to where you started. There is only one rule: A loop is allowed to go through an element just one time (so you don't get loops that look like a figure-8). In the circuit above, there are three loops, two solid loops, $\text I$ and $\text{II}$, and one dashed loop, $\text{III}$, all the way around the outside.  

If we trace the loops in the clockwise direction, the three loops in our circuit go through

<p>$\begin{aligned}
&\text{Loop I:}  &&\text{V1 - R1 - R3} \\  
&\text{Loop II:} &&\text{R3 - R2 - V2} \\  
&\text{Loop III: (dashed loop)} &&\text{V1 - R1 - R2 - V2}
\end{aligned}$</p>

A *mesh* is a restricted kind of loop; a mesh is a loop that contains no other loops. In the circuit above, loops $\text I$ and $\text{II}$ are *meshes* because there are no smaller loops inside. The dashed loop around the outside is not a mesh, because it contains two other loops.

In the Mesh Current Method, we use the meshes to generate KVL equations. This always gives us the right number of independent equations. 

<details>
<summary>What does the word <em>mesh</em> mean?</summary>
<p>The everyday word <em>mesh</em> has two meanings, </p>

<ul>
<li>Mesh describes the <em>material</em> making up a network of wire or thread, as in, "Our fishing nets are made of a mesh of strong cord."</li>
<li>Mesh is also the <em>spaces</em> between the individual strands of a network of wire or thread, "If the mesh is too big, small fish can swim through the holes and escape."</li>
</ul>

<p>In circuit analysis, when we say a mesh traces around an "open window" of a circuit, we are using the second meaning, where mesh refers to the open spaces between the branches of the network. Look for the open windows to quickly identify the meshes in a circuit.</p>
</details>

## Mesh current

We now define another new term, *mesh current*. Up to now current has usually referred to an *element current* (the current flowing through an element). When we use the term *mesh current* we are talking about an imagined current flowing around a mesh. 

Mesh current a bit of an odd idea, but stick with me. In the following circuit, let us define *mesh currents* $i_{\text I}$ and $i_{\text{II}}$ flowing around meshes $\text I$ and $\text{II}$, with the positive direction of the currents indicated by the arrows.

![](https://ka-perseus-images.s3.amazonaws.com/edc62ed8622fe041dacc34fdf690d346b7830687.svg){: .centered :}

It is clear that $i_{\text I}$ is the current flowing in source $\text V1$ and resistor $\text R1$. Likewise, $i_{\text{II}}$ is the current flowing in resistor $\text R2$ and source $\text V2$. But what is going on with the current in $\text R3$?

Let's take a close-up look at $\text R3$ in the middle branch of the circuit. What is the element current flowing through $\text R3$?

![R3 mesh currents](https://ka-perseus-images.s3.amazonaws.com/29d8fda8ba2dc18baec3f7e8ea0711c8944c49d7.svg){: .centered :}

The way the mesh currents are drawn, it looks like both of them are going through $\text R3$, in opposite directions. Can this be true? Yes it can, because we can use a very important concept called *the principle of superposition*.

### The principle of superposition

*Superposition* is a fancy word for *add*. In the case of $\text R3$, we are using the principle of superposition when we say the two mesh currents, $i_{\text I}$ and $i_{\text{II}}$ add up to the actual current in the resistor, $i_{\text R3}$. 

$ +i_{\text R3} = +i_{\text I} - i_{\text{II}}$

The two mesh currents *superimpose* (add up) to form the actual element current in $\text R3$. The arrow for mesh current $i_{\text I}$ points in the same direction as branch current $i_{\text R3}$, giving it a $+$ sign in the superposition equation. The arrow for mesh current $i_{\text{II}}$ points in the opposite direction, so it gets a $-$ sign in the equation.

### Linearity

We get to use superposition with ideal resistors is because an ideal resistor has the property of *linearity*. Linearity means if we multiply the voltage by a constant $a$, then the current is multiplied by the same constant $a$.

$v = i\,\text R$

$a\,v = a\,i\,\text R$

For an ideal resistor, this works for any $a$, which means an ideal resistor is linear. (For a real-world resistor $a$ can get only so big before the resistor burns up.)

Linearity means we get to use the principle of superposition. Superposition means we are free to define multiple mesh currents flowing in a single circuit element. And that means we can use the Mesh Current Method to solve circuits! 

If you want to learn more about linearity and superposition, check out [Linearity]({{ site.baseurl }}{% link _articles/linearity.md %}) and [Superposition]({{ site.baseurl }}{% link _articles/superposition.md %}).

## Mesh current practice

problem 1  
**Find the element current $i_{\text{Rx}}$.**

![Problem 1 resistor](https://ka-perseus-images.s3.amazonaws.com/2c5a472d2c8fc200c78136b7fd54dbbbe69db93f.svg)

$\large i_{\text{Rx}} = $ \_\_\_\_\__ $\text{mA}$

<details>
<summary>show answer</summary>
<p>$4\,\text{mA}$ is flowing down through $\text{Rx}$, the same direction as the element current arrow, $i_{\text{Rx}}$. </p> 
<p>$3\,\text{mA}$ is flowing up through $\text{Rx}$, opposing the direction of the element current arrow, $i_{\text{Rx}}$. </p>

<p>By superposition, $i_{\text{Rx}} = +4\,\text{mA} - 3\,\text{mA} = +1\,\text{mA}$</p>
</details>

problem 2  
**Find the element current $i_{\text{Ry}}$.**

![Problem 2 resistor](https://ka-perseus-images.s3.amazonaws.com/3091979a6831a59b241114e131d07f7ceb77d9ce.svg)

$\large i_{\text{Ry}} = $ \_\_\_\_\__ $\text{mA}$

<details>
<summary>show answer</summary>
<p>Mesh $\text I$ has $2\,\text{mA}$ opposing the direction of the element current arrow, $i_{\text{Ry}}$. So it goes in with a minus sign.</p>  
<p>Mesh $\text{II}$ has $-2\,\text{mA}$ flowing in the same direction as the element current arrow, $i_{\text{Rx}}$. So it also goes in with a minus sign.</p> 

<p>By superposition, $i_{\text{Ry}} = -2\,\text{mA} - 2\,\text{mA} = -4\,\text{mA}$</p>
</details>

The whole idea of mesh currents is a little weird. They exist and don't exist at the same time. That's why I really like to use this method whenever I can.

## Mesh Current Method

The Mesh Current Method is this sequence of steps, 

* Identify the meshes, (the open windows of the circuit).
* Assign a mesh current variable to each mesh, using a consistent direction (all clockwise or all counterclockwise).
* Write Kirchhoff's Voltage Law around each mesh. Do Ohm's Law in your head.
* Solve the resulting system of equations for all mesh currents.
* Solve for element currents and voltages by superimposing mesh currents and using Ohm's Law.

We will demonstrate the Mesh Current Method with this circuit,

![](https://ka-perseus-images.s3.amazonaws.com/2cfc66ef5aae1acc46b83c2801241ce9bb3f6b3d.svg){: .centered :}

### Identify the meshes

Our circuit has two meshes. We identify two mesh currents and call them $i_{\text I}$ and $i_{\text{II}}$. These are going to be the independent variables. Important: the current directions are the same. Both flow in a clockwise direction.

![](https://ka-perseus-images.s3.amazonaws.com/3df8436d90000da5d39dd3da851952c01778479c.svg){: .centered :}

By defining a current in every mesh, you are guaranteed to have enough independent equations to solve the circuit.

### Write Kirchhoff's Voltage Law around each mesh

To get ready, we mark up the schematic with element currents (blue arrows) and element voltages (orange $+$ and $-$), using the [sign convention for passive components]({{ site.baseurl }}{% link _articles/sign-convention.md %}). 

![](https://ka-perseus-images.s3.amazonaws.com/026d8d4fa92a7c18c29daca9a6edf3dc1185b431.svg){: .centered :}

$\Rightarrow$ **Mesh Current essential skill - scribble on the schematic!**

* Draw element currents first (before assigning voltages). It is a good idea to point currents in the same direction as the nearby mesh current. You can't always do this. (Notice where $i_{\text{II}}$ flows up against the $1\,\text k\Omega$ current arrow. This is okay, it will work out fine in the end.) 
* Then add element voltages with the $+$ sign near the incoming current arrow (the passive sign convention).

Now write an equation for each mesh using Kirchhoff's Voltage Law. Each term in the equation is a voltage, and the sum is equal to zero. Here is how to include each voltage term:

* If one mesh current flows through a resistor, enter the voltage as resistance $\times$ mesh current.
* If two mesh currents flow through a component, include their difference in the Ohm's Law expression, just like we did above in the mesh current practice.
* When you come to a voltage source, it simply goes in as its voltage value. 

#### Equation for mesh $\text I$, step-by-step  

We start in the lower left corner of the schematic, and travel clockwise around mesh $\text I$. 

![KVL schematic for mesh I]({{ site.baseurl }}{% link i/mesh_current1.svg %}){: .centered :}

* The first element we come to is the $5\,\text V$ voltage source. We first encounter the orange $-$ sign of the voltage source. That means we will experience a voltage *rise* going through the source. Because it is a rise, it goes into the equation with a $+$ sign, as $+5\,\text V$. 

$\text{mesh I :}\quad+5\,\text V \,...$

* The second element we come to is the $2\,\text k\Omega$ resistor. The voltage across this resistor is $2\,\text k\Omega \cdot i_{\text{I}}$.  (This is what it means to "do Ohm's Law in your head.") This resistor's green current arrow is in the same direction as mesh current $i_\text{I}$. The orange $+$ voltage sign tells us we will be experiencing a voltage *drop* going through this component, so this term goes into the equation with a $-$ sign, as $-2000 \,i_{\text I}$.

$\text{mesh I :}\quad+5\,\text V - 2000 \, i_{\text I} \,...$

* Next we come to the $1\,\text k\Omega$ resistor. This is the tricky one. It has two mesh currents flowing in opposite directions, $i_{\text I}$ and $i_{\text{II}}$. The element current in the resistor is $(i_{\text I} - i_{\text{II}})$. We put $i_{\text I}$ first because it flows in the same direction as the green element current. The voltage term is therefore $1\,\text k\Omega \cdot (i_{\text I} - i_{\text{II}})$. We come to the orange $+$ voltage sign first, which tells us there's a voltage *drop* going through the resistor. Therefore, this term goes into the equation with a $-$ sign, as $-1\,\text k\Omega \cdot (i_{\text I} - i_{\text{II}})$.

$\text{mesh I :}\quad+5\,\text V - 2000 \, i_{\text I} - 1000\, (i_{\text{I}} - i_{\text{II}}) \,...$

* The trip around mesh $\text I$ is complete, and we set the sum of voltages to zero, 

$\text{mesh I :}\quad+5\,\text V - 2000 \, i_{\text I} - 1000\, (i_{\text{I}} - i_{\text{II}}) = 0$

**Summary of mesh  $\text I$**

![KVL equation for mesh I]({{ site.baseurl }}{% link i/mesh_current2.svg %}){: .centered :}

#### Equation for mesh $\text{II}$, step-by-step  

We start at the bottom of the $1\,\text k\Omega$ resistor, and travel clockwise around the mesh. 

![KVL schematic for mesh II]({{ site.baseurl }}{% link i/mesh_current3.svg %}){: .centered :}

* The first element is the $1\,\text k\Omega$ resistor, and it has two mesh currents flowing through it. The net current in the resistor is $(i_{\text I} - i_{\text{II}})$. The first term is $i_{\text I}$ because it matches the direction of the green element current arrow. Since we are entering this resistor from the bottom, at its orange $-$ sign, we will experience a voltage *rise* going through it, so the term we include in the equation is $+ 1000 \, (i_{\text I} - i_{\text{II}})$.

$\text{mesh II :}\quad +1000 \, (i_{\text I} - i_{\text{II}}) \,...$

* The next component is the $2\,\text k\Omega$ resistor at the top right of the schematic, with just $i_{\text{II}}$ flowing through it. This is a voltage drop, so it enters the equation as $-2000 \cdot i_{\text{II}}$.

$\text{mesh II :}\quad +1000 \, (i_{\text I} - i_{\text{II}}) - 2000 \, i_{\text{II}} \,...$

* The last thing we come to is the $2\,\text V$ source. With sources, just enter their voltage value. We see a voltage *drop* going through this source, so it goes into the equation as $-2\,\text V$. 

$\text{mesh II :}\quad +1000 \, (i_{\text I} - i_{\text{II}}) - 2000 \, i_{\text{II}} -2\,\text V\,...$

* And finish up by setting the sum to zero,

$\text{mesh II :}\quad +1000 \, (i_{\text I} - i_{\text{II}}) - 2000 \, i_{\text{II}} -2\,\text V = 0$

**Summary of mesh $\text{II}$**

![KVL equation for mesh II]({{ site.baseurl }}{% link i/mesh_current4.svg %}){: .centered :}

### Solve the system of mesh equations

The mesh equations copied from above,

<p>$\begin{aligned}
&\text{mesh I :} &&+5\,\text V - 2000 \, i_{\text I} - 1000\, (i_{\text{I}} - i_{\text{II}}) = 0 \\
&\text{mesh II :} &&+1000 \, (i_{\text I} - i_{\text{II}}) - 2000 \, i_{\text{II}} -2\,\text V = 0
\end{aligned}$</p>

To begin, multiply out terms and move constants to the right side,

<p>$\begin{aligned}
&\text{mesh I :} && - 2000 \, i_{\text I} - 1000\, i_{\text{I}} + 1000\, i_{\text{II}} = -5 \\
&\text{mesh II :} && +1000 \, i_{\text I} - 1000\, i_{\text{II}} - 2000 \, i_{\text{II}} = +2
\end{aligned}$</p>

Combine like terms to get a tidy system of equations,

<p>$\begin{aligned}
&\text{mesh I :} && - 3000 \, i_{\text I} + 1000\, i_{\text{II}} = -5 \\

&\text{mesh II :} && +1000 \, i_{\text I} - 3000\, i_{\text{II}} = +2
\end{aligned}$</p>

Our strategy will be to eliminate $i_{\text I}$ by multiplying the $\text{mesh II}$ equation by $3$ and adding it to the first equation. Here's the multiplication of the mesh $\text{II}$ equation,

<p>$\begin{aligned}
&\text{mesh II :}  &3 \times [+1000 \, i_{\text I} - 3000\, i_{\text{II}} = +2 \,] \\  
&                  &= [+3000 \, i_{\text I} - 9000\, i_{\text{II}} = +6 \,]
\end{aligned}$</p>

Now add the two equations. The $i_{\text I}$ terms cancel, leaving just an $i_{\text{II}}$ term,

<p>$\begin{aligned}
&\text{mesh I :} &[\cancel{-3000 \, i_{\text I}} + 1000\, i_{\text{II}} &= -5 \,] \\
&\text{mesh II :} & \underline{+ \quad [\cancel{+3000 \, i_{\text I}} - 9000\, i_{\text{II}}} & \underline{\:= +6 \,]} \\  
&&- 8000\, i_{\text{II}} &= +1 \\  
&&i_{\text{II}} &= +1\,/-8000 \\  
&&i_{\text{II}} &= -0.125 \,\text{mA}
\end{aligned}$</p>

Mesh current $i_{\text{II}}$ came out with a negative sign. That means this current flows counterclockwise, opposite the direction of the $i_{\text{II}}$ mesh current arrow.

We have one mesh current. Let's go for the other one.  
Plug $i_{\text{II}}$ into a mesh equation to get the other current. Let's use the equation for mesh $\text{I}$,

<p>$\begin{aligned}
\text{mesh I :} \quad -3000 \, i_{\text I} + 1000\, i_{\text{II}} &= -5 \\
- 3000 \, i_{\text I} + 1000\, (-0.125)  &= -5 \\
- 3000 \, i_{\text I}  &= -5 + 0.125 \\
i_{\text I}  &= -4.875\,/-3000 \\
i_{\text I}  &= +1.625\,\text{mA}
\end{aligned}$</p>

The two mesh currents are now solved.  

![Summary of mesh currents]({{ site.baseurl }}{% link i/mesh_current6.svg %}){: .centered :}

We move on to find the currents and voltages for individual elements.

### Solve for element currents and voltages

For any element carrying only one mesh current, we immediately know its element current. It's the same as the mesh current,

$i_{2\,\text k\Omega \text{ left}} = +i_{\text I} = \blueD{+1.625\,\text{mA}}$

$i_{2\,\text k\Omega \text{ right}} = +i_{\text{II}} = \blueD{-0.125\,\text{mA}}$

The $1\,\text k\Omega$ resistor in the middle carries two mesh currents, so we use superposition to find the element current,

$i_{1\text k\Omega} = i_{\text I} - i_{\text{II}} = +1.625\,\text{mA} -  (-0.125\,\text{mA}) = \blueD{+1.75\,\text{mA}}$

And finally we find the voltage at the node between the three resistors using Ohm's Law on the $1\,\text k\Omega$ resistor,

$v_{1\text k\Omega} = 1\,\text k\Omega \cdot 1.75\,\text{mA} = \goldD{1.75\,\text V}$

![Cmomplete solution]({{ site.baseurl }}{% link i/mesh_current5.svg %}){: .centered :}{: height="220px"}


Congratulations! We analyzed a circuit using the Mesh Current Method.

## Choosing a method

We have two efficient methods for analyzing circuits, Node Voltage and Mesh Current. Which is the best? It depends on the circuit. Count the number of meshes and compare that to the number of nodes. Which number is smaller, meshes or nodes? It is best to choose the method with fewer simultaneous equations. If the meshes and nodes are the same, or nearly the same, choose the method you understand the best.

## Exception: non-planar circuits
The Mesh Current Method described above works on *planar* circuits (circuits that can be drawn flat, without crossing wires). The circuits in this article are planar, and most of the circuits you will come across will be, too. A circuit is *non-planar* if there's no way to draw it without crossing wires. We have to make a small modification to the mesh method, and it gets the name *Loop Current Method*. Most of the steps are the same, but we are allowed to include loops in addition to just meshes. We'll talk more about non-planar and loops in the [Loop Current Method]({{ site.baseurl }}{% link _articles/loop-current.md %}) article.

## Summary
{:.no_toc}

The steps of the Mesh Current Method are,

* Identify the meshes (the open windows of a circuit).
* Assign a current variable to each mesh, using a consistent direction  (clockwise or counterclockwise).
* Write Kirchhoff's Voltage Law around each mesh. 
  * If one mesh current flows in a resistor, the voltage term goes in as $\text R \, i_{mesh}$. 
  * If two mesh currents flow in *opposite* directions, the voltage goes in as $\text R\,(i_{mesh 1} - i_{mesh 2})$. 
  * If two mesh currents flow in the *same* direction in a resistor, the voltage goes in as $\text R\,(i_{mesh 1} + i_{mesh 2})$.
  * Voltage sources go in as voltages.
* Solve the resulting system of equations.
* Solve for individual element currents and voltages using Ohm's Law.

If the circuit is non-planar, or there is a current source shared between two meshes, it's best to use the [Loop Current Method]({{ site.baseurl }}{% link _articles/loop-current.md %}).