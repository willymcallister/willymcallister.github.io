---
layout: article
title:  "How circuits become equations"
author: Willy McAllister
comments: true
---

"Solving a circuit" means solving a system of simultaneous equations. 

It may seem like luck that you get the right number of equations when you use one of the circuit analysis methods. Luck is not involved. The methods reliably capture the information needed to solve a circuit.

In this article we ask some questions,

* How many equations are required to solve a circuit? 
* Where do they come from? 

The answers to these questions are baked into the different circuit analysis methods, 

* [Direct application of the fundamental laws]({{ site.baseurl }}{% link _articles/fundamental-laws.md %})
* [Node Voltage Method]({{ site.baseurl }}{% link _articles/node-voltage.md %})
* [Mesh Current Method]({{ site.baseurl }}{% link _articles/mesh-current.md %}) and its close relative, the 
* [Loop Current Method]({{ site.baseurl }}{% link _articles/loop-current.md %})

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

When we solve a circuit that means finding the voltage and current for every element. Every element has two unknowns, $i$ and $v$. That means we need twice as many independent equations as there are elements to solve the circuit . 

Where do these equations come from?  

* Half come from the $i$-$v$ laws for each circuit element.
* The other half come from, 
    * $N - 1$ from Kirchhoff's Current Law, where $N$ is the number of nodes.
    * $E - (N - 1)$ from Kirchhoff's Voltage Law, where $E$ is the number of elements. 

----

How many independent equations are needed to solve a circuit?

This key question determines the amount of effort required to perform a circuit analysis. As we learned in algebra class when [solving simultaneous equations](https://www.khanacademy.org//math/algebra/systems-of-linear-equations), the number of independent equations you need to solve a system is the same as the number of unknown variables. If you have a system with $10$ unknowns, you need $10$ equations. 

How many unknowns does a circuit have? Every two-terminal element contributes one unknown voltage and one unknown current. So $E$ elements contribute $2E$ unknowns.

>A circuit with $E$ elements requires a system of $2E$ independent equations.

## Circuit terminology concept check

As we discuss this idea in abstract terms, we will also use this real circuit example. If you want to review your understanding of circuit terminology, check [here]({{ site.baseurl }}{% link _videos/circuit-terminology.md %}).

![](https://ka-perseus-images.s3.amazonaws.com/8309b48b32c77e0e946ace775000ed6f7dcd4986.svg){: .centered :}

**How many elements are there in the circuit?**

$E = $ \_\_\_\_\_\_ elements.

<details>
    <summary>show answer</summary>
    <p>This circuit has $E=5$ elements.</p>
</details>

**How many nodes does the circuit have?**

$N = $ \_\_\_\_\_\_ nodes.

<details>
    <summary>show answer</summary>
    <p>$N=3$ nodes.</p>
    <p><img src="https://ka-perseus-images.s3.amazonaws.com/4c073ba7d00cca015ae8354a8e57dc86bab419b9.svg"></p>
</details>

**How many loops does the circuit have?**

\_\_\_\_\_\_ loops.

<details>
    <summary>show answer</summary>
    <p>$6$ loops. The $3$ loops $\goldD{\text{I}}$, $\goldD{\text{II}}$, and $\goldD{\text{III}}$ are called <em>meshes</em>. A mesh is a loop that contains no other loops. A mesh is also called an <em>inner loop</em>.</p>
    <p><img src="https://ka-perseus-images.s3.amazonaws.com/22611a54c3bb46d663ab72234ff8287e84515713.svg"></p>
</details>

**How many of those loops are meshes?**

\_\_\_\_\_\_ meshes.

<details>
    <summary>show answer</summary>
    <p>Of the $6$ loops in the circuit, $3$ of them are meshes (also known as <em>inner loops</em>). The meshes are numbered $\goldD{\text{I}}$, $\goldD{\text{II}}$, and $\goldD{\text{III}}$.</p>
</details>

**How many equations do we need to solve this circuit?**

\_\_\_\_\_\_\_ equations.

<details>
    <summary>show answer</summary>
    <p>This circuit has $E = 5$ elements. We have to come up with $2E = 10$ independent equations to solve this circuit.</p>
</details>

## Where do equations come from?

The equations come from two sources: the circuit elements themselves, and how the elements are connected to each other. 

All currents and voltages in a circuit are constrained by,

* $i$-$v$ element laws
* Kirchhoff's Current Law (KCL)
* Kirchhoff's Voltage Law (KVL)

The system of equations you write captures these constraints. Half of the equations come from the individual element laws. The other half come from either KCL and KVL. Kirchhoff's Laws capture how circuit elements interact with each other.

### Half of the equations come from element laws

Imagine unconnected circuit components scattered about on the tabletop. 

![](https://ka-perseus-images.s3.amazonaws.com/f6c23e7cf5491924eecedcc76a7e0c3051cd4b04.svg){: .centered :}

Each element has unknown <span style="color:#11accd">current</span> and <span style="color:#e07d10">voltage</span>,

![](https://ka-perseus-images.s3.amazonaws.com/4f2f4d524a4d1b53fa0a1b1a7d4db8523363a319.svg){: .centered :}

Each element brings along an <span style="color:#1fab54">$i$-$v$ equation</span>. Think of each element as little chunk of math. 

![](https://ka-perseus-images.s3.amazonaws.com/295cb1ef8ac43f1a95bcf2fe690957c59ae4f7f8.svg){: .centered :}

These $i$-$v$ relations represent $E$ independent equations. That's half the required total.

<details>
<summary>What about capacitors and inductors?</summary>
<p>This example circuit does not include capacitors or inductors. If it did, each capacitor or inductor would contribute one $i$-$v$ equation,</p>
<p>$i = \text C \,\dfrac{dv}{dt}\quad$ or $\quad v = \text L\,\dfrac{di}{dt}$</p>
</details>

### Half of the equations come from Kirchhoff's laws 

The remaining $E$ equations come from the constraints caused by the connections between elements. Circuit connections constrain the voltages and currents of individual elements to be certain values. An example of a constraint would be, "these two elements are in series, so their currents have to be the same." We can develop $E$ connectivity equations using Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL). 

Let's say a circuit has  $E$ elements and $N$ nodes. 

<details>
<summary>Elements and branches are the same thing.</summary>
<p><em>Element</em> and <em>branch</em> mean just about the same thing in circuit analysis. Every element (resistor, capacitor, inductor, source, or other $2$-terminal component) contributes one branch to a circuit. <em>Branch</em> is the graph theory term for a path connecting two nodes. When talking about a circuit as a graph, it is common to use the terms <em>node</em> and <em>branch</em> to describe the junctions and paths in the graph. In this article, I will stick with $E$ as the name for the number of elements/branches.</p>
</details>

Our example circuit has $E = 5$ elements (branches) and $N = 3$ nodes. We also know the circuit has $6$ loops, $3$ of which are meshes. 

![](https://ka-perseus-images.s3.amazonaws.com/8309b48b32c77e0e946ace775000ed6f7dcd4986.svg){: .centered :}

<details>
<summary>Show me the nodes</summary>
<p><img class="centered" src="https://ka-perseus-images.s3.amazonaws.com/3c309a96f3b7b761f5cfee1f6452dbd6af5ba25c.svg" height="200px"></p>
</details>

<details>
<summary>Show me the loops and meshes</summary>
<p><img class="centered" src="https://ka-perseus-images.s3.amazonaws.com/a8aeeee64dbb51248fcf2b4b858f7dd33dc8a2f8.svg" height="200px"></p>
<p>This example circuit has $6$ loops. The $3$ loops $\goldD{\text{I}}$, $\goldD{\text{II}}$, and $\goldD{\text{III}}$ are called <em>meshes</em>. A mesh is a loop that contains no other loops.</p>
</details>

Having $3$ nodes and $6$ loops is a lot of possibilities for coming up with $E=5$ more equations, but we have to be careful. The equations we generate have to be independent of each other.

## What is an *independent* equation?

An equation is *linearly independent* if it *can't* be derived by *linear combinations* other equations. Linear combinations are when you merge equations with add, subtract or multiply by a constant. We'll cover an example of a set of KCL equations. One of them is *not* independent because it *can* be derived from other equations. 

### How many independent equations come from KCL?

We can write KCL a equation for every node in the circuit. This will give you $N$ equations. BUT, all $N$ KCL equations are *not* independent. One of them is redundant. There is always one *dependent* equation that does not contribute any new information, so it is not needed. 

{% capture summary %}What does linear dependence look like?{% endcapture %}  
{% capture details %}  
Let's write all three KCL node equations for our example circuit and show there's a linear dependence lurking there.

![All three KCL equations]({{ site.baseurl }}{% link i/number_of_equations1.svg %}){: .centered :}

KCL for node $\green a$: $\quad +i_1 -i_1  = 0$   
KCL for node $\green b$: $\quad +i_1 - i_2 - i_3 +i_{\text S} = 0$    
KCL for node $\green c$: $\quad -i_1 + i_2 + i_3 -i_{\text S} = 0$

Node $a$ has a trivial KCL equation. There is one current coming in, and one going out. We keep this equation because it connects the voltage source to the $20\,\Omega$ resistor, and is responsible for delivering $i_1$ to node $b$.

The KCL equations for node $b$ and node $c$ are linear dependent. We demonstrate this by using node $b$'s KCL equation to derive the KCL equation for node $c$. If you multiply node $b$ by $-1$ you end up with node $c$. That tells us they contain the exact same information.

That means either node $b$ or node $c$ is redundant. You can leave one of them out of the system of equations.

The number of nodes is $N = 3$, but the number of *in*dependent equations is $N-1 = 2$.   
{% endcapture %}{% include details.html %} 

With KCL we get credit for $N-1$ independent equations. In our example circuit we have $3$ nodes, so KCL gives us $3-1=2$ KCL equations.

The node we leave out is a choice. Usually, we leave out the ground node because it is the most complicated (has the most connections). Our equation-finding status so far is:

We need $2E$ equations.  
We get $E$ from the $i$-$v$ equation of every element.  
We get $N-1$ from KCL. 

This leaves $2E - E - (N-1) = E - (N-1)$ equations left to find. 

We get them from KVL.

### How many independent equations come from KVL?

After writing $N-1$ equations using KCL, we came up short of $2E$ equations by $E - (N-1)$. For our example circuit we need $5 - (3-1) = 3$ more equations. Where will these extra equations come from? We use KVL around the loops of the circuit. 

Graph theory tells us two wonderful things, 

* KVL can produce just the right number of independent equations, $E - (N-1)$. 
* $E - (N-1)$ happens to be the same as the number of meshes.

That means we know the required number of KVL equations by counting the meshes. You don't even have to do the $E - (N-1)$ computation. Just count meshes.

Our example circuit has $3$ meshes. We know immediately we need to write $3$ KVL equations; no more, no less. 

<details>
<summary>Limitation: planar vs. non-planar circuits</summary>
<p>KVL will produce $E - (N-1)$ equations for any kind of circuit, but we can only use the meshes if the circuit is <em>planar</em>.</p>

<p>A planar circuit is one that can be drawn flat, with no crossing wires. If a circuit cannot be drawn flat without crossing wires, it's <em>non-planar</em>. Our example circuit is planar, as are most of the circuits you will be asked to analyze by hand.</p>

<p>The Loop Current Method handles non-planar circuits.</p>
</details>

### Make sure the KVL equations are independent

We want the KVL equations to be independent. This requires a bit of care. 

The simplest guideline: *Write KVL equations for the meshes.* The meshes are guaranteed to produce the right number of equations, and they will be independent.

If for some reason you want to (or have to) include other non-mesh loop equations, there's another guideline. You will get independent equations if *every loop includes one element not in any other loop.* That will usually be enough to give you the equations you need (there's an interesting exception, described below).

### Picking meshes and loops

Our example circuit has $6$ available loops. From that set of choices, we need to come up with $3$ independent KVL equations.

![](https://ka-perseus-images.s3.amazonaws.com/22611a54c3bb46d663ab72234ff8287e84515713.svg)

The simplest way is to pick the three meshes, $\goldD{\text{I}}$, $\goldD{\text{II}}$, and $\goldD{\text{III}}$. You are a winner! The meshes produce the right number of equations, and they are guaranteed to be independent. This is the basis of the [Mesh Current Method]({{ site.baseurl }}{% link _articles/mesh-current.md %}).

We could choose another valid set of loops from the example circuit, $\greenD{\text{IV}}$, $\blueD{\text V}$, and $\maroonC{\text{VI}}$. Why might this be a good set? 

* $3$ loops provide $3$ equations, as required by $E-(N-1) = 3$.
* Every element is included in a loop.

This set of loops has an interesting feature. Trace out loops $\greenD{\text{IV}}$ and $\blueD{\text V}$ and notice together they contain every element in the circuit. Why do you need another loop equation? Can $\maroonC{\text{VI}}$ be left out? No! We still need $3$ equations. Look again carefully at loops $\greenD{\text{IV}}$ and $\blueD{\text V}$. They share *no* elements. They are actually two separate circuits that don't touch. The job of the loop $\maroonC{\text{VI}}$ equation is to tie the other two loops together. 

## Concept check

Some choices do not meet the guidelines. **Can you tell why?**

* $\goldD{\text I}$, $\blueD{\text V}$, and $\maroonC{\text{VI}}\quad$  

<details><summary>why?</summary>
<p>This set misses the resistor next to the current source. Every element needs a chance to influence the result.</p>
</details>

* $\greenD{\text{IV}}$ and $\blueD{\text{V}}\quad$ 

<details><summary>why?</summary>
<p>This set only produces $2$ equations, and $3$ are required. This is true, even though the loops together pass through every element. You still are required to have $3$ equations to fully describe/constrain the circuit. This is why the good set listed above works, $\greenD{\text{IV}}$, $\blueD{\text V}$, and $\maroonC{\text{VI}}$.</p>
</details>

* $\goldD{\text I}$, $\goldD{\text{II}}$, $\goldD{\text{III}}$, and $\maroonC{\text{VI}}\quad$ 

<details>
    <summary>why?</summary>
    <p>You could get the answer with $4$ loops, but it's more than you need. $4$ exceeds the number of required equations, $E-(N-1) = 3$. That means one of the equations is linearly dependent on the others, and can be left out.</p>
</details>

Don't shy away from using loops; just be alert and thoughtful about it.

When might I want to select non-mesh loops? There are some circuits where we *want* to use loops, and others where we are *forced* to use loops in addition to meshes. These special cases are described in the [Loop Current Method]({{ site.baseurl }}{% link _articles/loop-current.md %}).

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

Counting the meshes tells you the right number of independent KVL equations.

If you write KVL equations for non-mesh loops, a loop with at least one element not in any other loop is sure to be independent. 

Keep selecting loops and writing equations until you have $E - (N-1)$ equations. 

## Reference
This brief paper presents a compact inductive proof (starts simple, adds complexity) that the number of linearly independent KCL node equations of a b-branch n-node connected circuits is n - 1 and the number of independent KVL loop equations is b - n + 1. 

Feldmann, Peter & A. Rohrer, Ronald. (1991). "Proof of the Number of Independent Kirchhoff Equations in an Electrical Circuit." Circuits and Systems, IEEE Transactions on. 38. 681 - 684. [10.1109/31.135739](https://ieeexplore.ieee.org/document/135739/).