---
layout: article
title:  "How circuits become equations"
author: Willy McAllister
comments: true
---

"Solving a circuit" means solving a system of simultaneous equations to find currents and voltages. It may seem like luck that you get the right number of equations when you use one of the circuit analysis methods. It's not luck. The methods are designed to reliably capture the information needed to solve a circuit.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

How many equations are needed to solve a circuit?  
Every element contributes two unknowns, $i$ and $v$. So we need two independent equations for each element in the circuit, $2E$, where $E$ is the number of elements. 

Where do these equations come from?  
* $E$ equations come from the $i$-$v$ laws for each circuit element---Ohm's Law and the like.
* An additional $E$ equations come from, 
    * Kirchhoff's Current Law---KCL contributes $N - 1$, where $N$ is the number of nodes.
    * Kirchhoff's Voltage Law---KVL contributes $E - (N - 1)$. 

----

In this article we ask some questions,

* How many equations are required to solve a circuit? 
* Where do they come from? 

The answers to these questions are baked into the different circuit analysis methods, 

* [Direct application of the fundamental laws]({% link _articles/fundamental-laws.md %})
* [Node Voltage Method]({% link _articles/node-voltage.md %})
* [Mesh Current Method]({% link _articles/mesh-current.md %}) and its close relative, the [Loop Current Method]({% link _articles/loop-current.md %})

**How many independent equations are needed to solve a circuit?**

This key question determines the amount of effort required to perform a circuit analysis. As we learned in algebra class when [solving simultaneous equations](https://www.khanacademy.org//math/algebra/systems-of-linear-equations), the number of independent equations you need to solve a system is the same as the number of unknown variables. If you have a system with $10$ unknowns, you need $10$ equations. 

**How many unknowns does a circuit have?**

Every two-terminal element contributes one unknown voltage and one unknown current. So $E$ elements contribute $2E$ unknowns. Therefore, a circuit with $E$ elements requires a system of $2E$ independent equations.

## Concept check: example circuit 

We illustrate these questions with this example circuit. If you want to review your understanding of circuit terminology, check [here]({% link _videos/circuit-terminology.md %}).

![Example circuit]({% link i/equations1.svg %}){: .centered :}

**How many elements are there in the circuit?**

$E = $ \_\_\_\_\_\_ elements.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
This circuit has $E = 5$ elements.  
{% endcapture %}{% include details.html %} 

**How many nodes does the circuit have?**

$N = $ \_\_\_\_\_\_ nodes.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
This circuit has $N = 3$ nodes.

![Circuit with 3 nodes highlighted]({% link i/equations2.svg %}){: .centered :}

{% endcapture %}{% include details.html %} 

**How many loops does the circuit have?**

\_\_\_\_\_\_ loops.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
$6$ loops. The $3$ loops $\goldD{\text{I}}$, $\goldD{\text{II}}$, and $\goldD{\text{III}}$ are called *meshes*. A mesh is a loop that contains no other loops. A mesh is also called an *inner loop*. 

![Circuit with meshes and loops highlighted]({% link i/equations3.svg %}){: .centered :}

 {% endcapture %}{% include details.html %} 

**How many of those loops are meshes?**

\_\_\_\_\_\_ meshes.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
Of the $6$ loops in the circuit, $3$ of them are meshes (also known as *inner loops*). The meshes are numbered $\goldD{\text{I}}$, $\goldD{\text{II}}$, and $\goldD{\text{III}}$.  
{% endcapture %}{% include details.html %} 

**How many equations do we need to solve this circuit?**

\_\_\_\_\_\_\_ equations.

{% capture summary %}show answer{% endcapture %}  
{% capture details %}  
This circuit has $E = 5$ elements. We have to come up with $2E = 10$ independent equations to solve this circuit.  
{% endcapture %}{% include details.html %} 

## Where do equations come from?

Equations originate from two places: constraints imposed by the circuit elements themselves ($i$-$v$ element laws), and by the connections between elements (KCL and KVL). The system of equations you write captures these constraints. 

Half of the equations come from the element laws.  
The other half come from either KCL and KVL.

### Half of the equations come from element laws

Imagine unconnected circuit components scattered about on the tabletop, 

![Scattered circuit elements]({% link i/equations4.svg %}){: .centered :}

Each element has unknown <span style="color:#11accd">current</span> and an unknown <span style="color:#e07d10">voltage</span>,

![Scattered circuit elements with i and v labels]({% link i/equations5.svg %}){: .centered :}

Each element brings along an <span style="color:#1fab54">$i$-$v$ equation</span>. Think of each element as little chunk of math. 

![Scattered circuit elements with element laws]({% link i/equations6.svg %}){: .centered :}

These $i$-$v$ relations represent $E$ independent equations. That's half the required total.

{% capture summary %}What about capacitors and inductors?{% endcapture %}  
{% capture details %}  
This example circuit does not include capacitors or inductors. If it did, each would contribute one $i$-$v$ equation,

$i = \text C \,\dfrac{dv}{dt}\quad$ or $\quad v = \text L\,\dfrac{di}{dt}$  
{% endcapture %}{% include details.html %} 

### Half of the equations come from Kirchhoff's laws 

The remaining $E$ equations come from the constraints created by the connections between elements. An example constraint would be, "These two elements are in series, so their currents have to be the same." We develop $E$ connectivity equations using Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL). 

Let's say a circuit has  $E$ elements and $N$ nodes. Our example has $E = 5$ elements and $N = 3$ nodes. We also know it has $6$ loops, and $3$ of those loops are meshes. 

![Example circuit again]({% link i/equations1.svg %}){: .centered :}

{% capture summary %}Show me the nodes{% endcapture %}  
{% capture details %}  
![Nodes again]({% link i/equations2.svg %}){: .centered :}
{% endcapture %}{% include details.html %} 

{% capture summary %}Show me the loops and meshes{% endcapture %}  
{% capture details %}  
![Loops and meshes again]({% link i/equations3.svg %}){: .centered :}
This example circuit has $6$ loops. The $3$ loops $\goldD{\text{I}}$, $\goldD{\text{II}}$, and $\goldD{\text{III}}$ are called *meshes*. A mesh is a loop that contains no other loops.
{% endcapture %}{% include details.html %} 

Having $3$ nodes and $6$ loops is a lot of possibilities for coming up with $E=5$ more equations, but we have to be careful. The equations we generate have to be *independent* of each other.

## What is an independent equation?

An equation is *linearly independent* if it *cannot* be derived by *linear combinations* other equations. Linear combinations are when you merge equations with add, subtract, or multiply by a constant. 

We'll do an example with a set of KCL equations. One of them is *not* independent because it *can* be derived from other equations. 

### How many independent equations come from KCL?

We can write KCL a equation for every node in the circuit. $N$ nodes will give you $N$ equations. BUT, the set of $N$ equations are *not* independent. One of them is redundant. There is always one *dependent* KCL equation that does not contribute any new information, so it is not needed. 
 
Let's write all three KCL equations and show there's a linear dependence lurking within,

![All three KCL equations]({% link i/number_of_equations1.svg %}){: .centered :}

KCL for node $\green a$: $\quad +i_1 -i_1  = 0$   
KCL for node $\green b$: $\quad +i_1 - i_2 - i_3 +i_{\text S} = 0$    
KCL for node $\green c$: $\quad -i_1 + i_2 + i_3 -i_{\text S} = 0$

Node $a$ has a trivial KCL equation. One current comes in and one goes out. It connects the voltage source to the $20\,\Omega$ resistor and is responsible for delivering $i_1$ to node $b$.

The KCL equations for nodes $b$ and $c$ turn out to be linearly dependent. We demonstrate this by using node $b$'s equation to derive the equation for node $c$. If you multiply node $b$ by $-1$ you end up with node $c$. (This is an example of a linear combination---multiply by a constant.) 

That tells us equations $b$ and $c$ contain the exact same information. That means one of them is redundant. There is no need to carry along both. You can leave one out of the system of equations. The node we leave out is our choice. Usually, we leave out the ground node because it is the most complicated (has the most connections). 

There are $N = 3$ nodes, but the number of *independent* equations is $N-1 = 2$.   

In general, KCL contributes $N-1$ independent equations.

Our equation-finding status so far is,

* We need $2E$ equations.  
* We get $E$ from the $i$-$v$ equation of every element.  
* We get $N-1$ from KCL. 

This leaves $2E - E - (N-1) = E - (N-1)$ equations left to find. 

We get them from KVL.

### How many independent equations come from KVL?

After writing $N-1$ equations using KCL, we came up short of $2E$ equations by $E - (N-1)$. For our example circuit we need $5 - (3-1) = 3$ more equations. Where will these extra equations come from? We use KVL around the loops of the circuit. 

Graph theory tells us two wonderful things, 

* KVL can produce just the right number of independent equations, $E - (N-1)$. 
* $E - (N-1)$ happens to be the same as the number of meshes.

That means we know the required number of KVL equations by counting the meshes. You don't even have to do the $E - (N-1)$ computation. Just count meshes.

Our example circuit has $3$ meshes. We know immediately we need to write $3$ KVL equations; no more, no less. 

{% capture summary %}Limitation: planar vs. non-planar circuits{% endcapture %}
{% capture details %}  
KVL produces $E - (N-1)$ equations for any kind of circuit. You can get those equations with just meshes *only if* the circuit is *planar*.

A planar circuit is one that can be drawn flat, with no crossing wires. If a circuit cannot be drawn flat without crossing wires, it is *non-planar*. Our example circuit is planar, as are most of the circuits you will be asked to analyze by hand.

![Planar and non-planar circuits]({% link i/loop1.svg %}){: .centered }

Left: planar circuit, can be drawn with no crossed wires.  
Right: non-planar circuit, can only be drawn with a crossed wire.
{: .caption :}

The [Loop Current Method]({% link _articles/loop-current.md %}) handles non-planar circuits.  
{% endcapture %}{% include details.html %} 

### Make sure the KVL equations are independent

We want the KVL equations to be independent. This requires a bit of care. 

The simplest guideline: *Write KVL equations for the meshes.* The meshes are guaranteed to produce the right number of equations, and they will be independent.

If for some reason you want to (or have to) include other non-mesh loop equations, there's another guideline. You will get independent equations if *every loop includes one element not in any other loop.* That will usually be enough to give you the equations you need (there's an interesting exception, described below).

### Selecting meshes and loops

Our example circuit has $6$ available loops. From that set of choices, we need to come up with $3$ independent KVL equations.

![Loops and meshes yet again]({% link i/equations3.svg %}){: .centered :}

The simplest way is to pick the three meshes, $\goldD{\text{I}}$, $\goldD{\text{II}}$, and $\goldD{\text{III}}$. We win! The meshes produce the right number of equations, and they are guaranteed to be independent. This is the basis of the [Mesh Current Method]({% link _articles/mesh-current.md %}).

We could choose another valid set of loops from the example circuit, $\greenD{\text{IV}}$, $\blueD{\text V}$, and $\maroonC{\text{VI}}$. Why might this be a good set? 

* $3$ loops provide $3$ equations, as required by $E-(N-1) = 3$.
* Every element is included in a loop.

This set of loops has an interesting feature. Trace out loops $\greenD{\text{IV}}$ and $\blueD{\text V}$ and notice together they contain every element in the circuit. Why do you need another loop equation? Can $\maroonC{\text{VI}}$ be left out? No! We still need $3$ equations. Look again carefully at loops $\greenD{\text{IV}}$ and $\blueD{\text V}$. They share *no* elements. They are actually two separate circuits that don't touch. The job of the loop $\maroonC{\text{VI}}$ equation is to tie the other two loops together. 

## Concept check

Some choices do not meet the guidelines. **Can you tell why?**

* $\goldD{\text I}$, $\blueD{\text V}$, and $\maroonC{\text{VI}}\quad$  

{% capture summary %}why?{% endcapture %}  
{% capture details %}  
This set misses the resistor next to the current source. Every element needs a chance to influence the result.  
{% endcapture %}{% include details.html %} 

* $\greenD{\text{IV}}$ and $\blueD{\text{V}}$ 

{% capture summary %}why?{% endcapture %}  
{% capture details %}  
This set only produces $2$ equations, and $3$ are required. This is true, even though the loops together pass through every element. You still are required to have $3$ equations to fully describe/constrain the circuit. This is why the good set listed above works, $\greenD{\text{IV}}$, $\blueD{\text V}$, and $\maroonC{\text{VI}}$.  
{% endcapture %}{% include details.html %} 

* $\goldD{\text I}$, $\goldD{\text{II}}$, $\goldD{\text{III}}$, and $\maroonC{\text{VI}}$ 

{% capture summary %}why?{% endcapture %}  
{% capture details %}  
You could get the answer with $4$ loops, but it's more than you need. $4$ exceeds the number of required equations, $E-(N-1) = 3$. That means one of the equations is linearly dependent on the others, and can be left out.  
{% endcapture %}{% include details.html %} 

Don't shy away from using loops; just be alert and thoughtful about it.

When might I want to select non-mesh loops? There are some circuits where we *want* to use loops, and others where we are *forced* to use loops in addition to meshes. These special cases are described in the [Loop Current Method]({% link _articles/loop-current.md %}).

## Summary
{:.no_toc}

There are three constraints placed on currents and voltages in a circuit,

* $i$-$v$ element laws
* Kirchhoff's Current Law
* Kirchhoff's Voltage Law

The system of equations you write captures these constraints.

For a circuit with $E$ elements and $N$ nodes, 
* You need $2E$ independent equations to solve the circuit.
* You get  
  * $E$ equations from the $i$-$v$ law for each component (Ohm's Law and the like).
  * $N-1$ independent node equations using KCL.
  * $E - (N-1)$ independent loop equations using KVL.  

Counting the meshes tells you the right number of independent KVL equations for planar circuits.

If you write KVL equations for non-mesh loops, a loop with at least one element not in any other loop is sure to be independent. 

Keep selecting loops and writing equations until you have $E - (N-1)$ equations. 

## Reference

Feldmann, Peter & A. Rohrer, Ronald. (1991). "Proof of the Number of Independent Kirchhoff Equations in an Electrical Circuit." Circuits and Systems, IEEE Transactions on. 38. 681 - 684. [10.1109/31.135739](https://ieeexplore.ieee.org/document/135739/). Also try [here](https://www.researchgate.net/publication/3184434_Proof_of_the_Number_of_Independent_Kirchhoff_Equations_in_an_Electrical_Circuit).

This short paper presents an inductive proof showing: For a circuit with $b$ branches and $n$ nodes, the number of linearly independent KCL node equations is $n - 1$ and the number of independent KVL loop equations of is $b - n + 1$. (An inductive proof starts super simple and adds complexity.) 


