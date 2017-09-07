---
layout: article
title:  "Circuit terminology"
author: Willy McAllister
comments: true
---

We are developing methods for analyzing a circuit. So far we've defined the most common components (resistor, capacitor, and inductor) and sources (voltage and current). Now we need a crisp vocabulary to talk about circuits. This article is a glossary of terms and concepts we use in circuit analysis and design.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

Definitions and concept checks for important features of a circuit, including,
* Symbols
* Wires (lines) and junctions (dots)
* Node and Branch
* Loop and Mesh
* Reference node (ground)

----

## Circuit terms

#### Circuit
comes from the word *circle*. A circuit is a collection of real components, power sources, and signal sources, all connected so current can flow in a complete circle. 

#### Closed circuit
A circuit is *closed* if the circle is complete, if all currents have a path back to where they came from.  

#### Open circuit
A circuit is *open* if the circle is not complete, if there is a gap or opening in the path.  

#### Short circuit
A *short* happens when a path of low resistance is connected (usually by mistake) to a component. The resistor shown below is the intended path for current, and the curved wire going around it is the short. Current is diverted away from its intended path, sometimes with damaging results. The wire *shorts out* the resistor by providing a low-resistance path for current (probably not what the designer intended). 

![Short circuit](https://ka-perseus-images.s3.amazonaws.com/0902a64f5e31852afbfdb7f93898c79f3dd877ae.svg){: height="200px"}{: .centered }

#### Make or break
You *make* a circuit by closing the current path, such as when you close a switch. *Breaking* a circuit is the opposite. Opening a switch *breaks* the circuit.  

![Make and Break](https://ka-perseus-images.s3.amazonaws.com/6e48667b899e34acf82eb4e75f6318c6533a27bb.svg){: height="200px"}{: .centered }

The phrase, "This is a make or break situation." means the situation is definitely going in one of two directions. 

## Schematic terms

#### Schematic
A *schematic* is a drawing of a circuit. A schematic represents circuit elements with symbols and connections as lines.  

#### Elements and components
The term *element* means a component or a source. The term *component* refers to resistors, capacitors, inductors, transistors, etc. Typically we don't include sources when we say component. (This isn't a hard and fast rule.)

#### Symbols
Elements are represented in schematics by *symbols*. Here are the symbols for the common 2-terminal elements. 

![2-terminal component symbols](https://ka-perseus-images.s3.amazonaws.com/dcb543f400f58dd8a635fe8366c6d27d0133ca96.svg){: height="180px"}{: .centered }

#### Lines
Connections between elements are drawn as lines, which we often think of as "wires." When drawn on a schematic, lines represent *perfect* conductors with zero resistance. Every component or source terminal touched by a line has the same voltage. 

#### Dots
Connections between lines can be indicated by *dots.* Dots are an unambiguous indication that lines are connected. If the connection is obvious, you don't have to use a dot. 

![Dots connect wires](https://ka-perseus-images.s3.amazonaws.com/93d01f9853d3485f57740178c083b39cb9e13e84.svg){: height="180px"}{: .centered }

<p class="caption">
(a) and (b) are both good. (c) no dot indicates no connection. <br>   
(d) also indicates no connection; the horizontal wire "hops" over the vertical wire. <br>
(d) is very clear but takes extra effort and space to draw. <br>
For crossing connected lines,  (e) is acceptable, but risks looking too much like (c), so (f) is the better practice.
</p>

#### Reference Designator
When you place an element in a schematic you often give it a unique name, known as a *reference designator*. Examples of reference designators are $\text{R1}$, $\text{C6}$, and $\text{V}_\text{BAT}$. The $1$ in $\text{R1}$ is part of the name, and does not indicate the resistance value. Reference designators are by definition unique for each schematic. They let you identify components by name even if some of them have the same value. It is okay to use reference designators in equations. $\text{R1}$ can be assigned a resistance value, $\text{R1} = 4.7\,\text k\Omega$, and it can be used as a variable in expressions, as in $\text{R2} \cdot \text{C6} = 4.7\,\text k\Omega \cdot 2\,\mu\text F$.

![Reference designators](https://ka-perseus-images.s3.amazonaws.com/d202dca9043bd87fc3089bb5aebfd37853115bbe.svg){: .centered }

<p class="caption">Reference designators give elements unique names, even if their values are the same.</p>

#### Node
A junction where $2$ *or more* elements connect is called a *node*. The schematic below shows a single node (the black dot) formed by the junction of five elements (abstractly represented by orange rectangles). 

![Nodes](https://ka-perseus-images.s3.amazonaws.com/834c6bf16be529083ca2178535de623148d6a296.svg){: .centered }

#### Distributed node 
Since lines on a schematic represent perfect zero-resistance conductors, there is no rule that says lines from multiple elements are required to meet in a single point junction. We can draw the same node as a *distributed* node like the one in the schematic below. These two representations of the node mean exactly the same thing. 

![Distributed node](https://ka-perseus-images.s3.amazonaws.com/fce6b5553187998b22b00b2111941f01f85ff268.svg){: .centered }

A distributed node might be all spread out, with lots of line segments, elbows, and dots. Don't be distracted, it is all just one single node. Connecting schematic elements with perfect conductors means the voltage everywhere on a distributed node is the same.

Here is a realistic-looking schematic with the distributed nodes labeled:

![Real circuit with nodes labeled](https://ka-perseus-images.s3.amazonaws.com/5ac296f425776f84cb95df03dd8faa839ed1f738.svg){: .centered }

**Problem 1: How many nodes are in this schematic?**

![How many nodes in this circuit?](https://ka-perseus-images.s3.amazonaws.com/94edd21fc7d451329bb6662469e8b4a65fd1c632.svg){: .centered }

Pick from: 3 nodes, 4 nodes, 5 nodes, 6 nodes, 8 nodes

<details>
<summary>Show answer</summary>
<p>There are $4$ nodes in the circuit.</p>
<p><img src="https://ka-perseus-images.s3.amazonaws.com/5b93c5a076290304bb0cca81330e6996bc7f4361.svg" alt="circuit with 4 nodes"></p>
<p>$\goldC{\text{Node}\,1}$ is the junction between the voltage source, $\text V0$, and the bottom of $\text R3, \text R4$, and $\text R5$. <br> 
$\purple{\text{Node}\, 2}$ is the junction between the voltage source, $\text V0$, and resistor $\text R1$.  <br>
$\red{\text{Node} \, 3}$ is the junction between resistors $\text R1, \text R2$, and $\text R3$.  <br>
$\green{\text{Node}\,4}$ is the junction between resistors $\text R2, \text R4$, and $\text R5$.</p>
</details>


<details>
<summary>Other definitions of <em>node</em></summary>
<p>Depending on your circuit analysis textbook or web resource, you may come across different definitions for the term <em>node</em>. Authors choose slightly different ways to teach circuit analysis. The goal is to come up with an organized approach for generating a system of independent simultaneous equations (we will do this in an upcoming article). There are a few ways to do this, and they all achieve the same goal, with slight variations in jargon.</p>

<p>In some texts, a <em>node</em> is defined to be the junction between $3$ or more elements. In this teaching style, all nodes are included in a full circuit analysis.</p> 

<p>Another term you may come across is <em>essential node</em>. This also means a node with $3$ or more connected elements. So in this teaching style, nodes have $2$ or more connections, and essential nodes have $3$ or more. Essential nodes *must* be included in a full circuit analysis.</p>

<p>Here at Spinning Numbers, we use the definition where a node is the junction between $2$ or more elements. With this definition, some nodes may be redundant (i.e. not independent).</p>

<p>The $2$-element definition is used by circuit simulation programs like SPICE, which require every junction to have a unique name. That's one reason to use the term <em>node</em> for all junctions.</p>

<p>All these shades of meaning have the same objective. There's no need to worry about which way is "right". If you use another reference alongside Spinning Numbers, check the specific definition of <em>node</em> to see if it's the same as the one we use here.</p>
</details>

#### Branch
A *branch* is a connection between nodes. A branch contains an element (resistor, capacitor, source, etc.). The number of branches in a circuit is equal to the number of elements.

**Problem 2: How many branches are in this circuit?**

![How many branches in this schematic?](https://ka-perseus-images.s3.amazonaws.com/94edd21fc7d451329bb6662469e8b4a65fd1c632.svg){: .centered }

Pick from: 3 branches, 4 branches, 5 branches, 6 branches

<details>
    <summary>Show answer</summary>
    <p>There are 6 branches in this circuit, one for each element,
</p>
<p><img src="https://ka-perseus-images.s3.amazonaws.com/a87212162972863301799cc76bea8d8c25db1d51.svg" alt="Schematic with branches highlighted"></p>
</details>

#### Loop
A *loop* is any closed path going through circuit elements. To draw a loop, select any node as a starting point and draw a path through elements and nodes until the path comes back to the node where you started. There is only one rule: a loop can visit (pass through) a node only *one time*. It is ok if loops overlap or contain other loops. Some of the loops in our circuit are shown here. (You can find others, too. If I counted right, there are six.) 

![Three loops](https://ka-perseus-images.s3.amazonaws.com/678eee017eff9f24e6e0064a6c6f49c679e7a941.svg){: .centered }

<details>
<summary>Show all the loops</summary>
<p>Six loops.</p>
<p><img src="https://ka-perseus-images.s3.amazonaws.com/8bc7594b2ce2f1e36827cc37fae7e4578da48463.svg" alt="All loops"></p>

<p>Just from this simple example you can see the number of loops in a circuit can become quite large. Loop analysis can be quite a burden, so we put a lot of effort going into figuring out simpler methods.</p>
</details>

#### Mesh 

A *mesh* is a loop that has no other loops inside it. You can think of this as one mesh for each "open window" of a circuit.  

**Problem 3: How many meshes are in this circuit?**

![How many meshes in this schematic?](https://ka-perseus-images.s3.amazonaws.com/94edd21fc7d451329bb6662469e8b4a65fd1c632.svg){: .centered }

Pick from: 1 mesh, 2 meshes, 3 meshes, 4 meshes

<details>
<summary>Show answer</summary>
<p>There are 3 meshes in the circuit, one for each "open window" in the circuit,</p>
<p><img src="https://ka-perseus-images.s3.amazonaws.com/e9acafcaa612af370dd958a45c27fd0c2daa89cb.svg" alt="Three meshes"></p>
</details>

#### Reference Node

During circuit analysis we usually pick one of the nodes in the circuit to be the *reference node*. We assign a voltage of $v = 0$ to the reference node. Voltages at the other nodes are measured relative to the reference node. 

You can pick any node to be the reference node, but two common choices that simplify circuit analysis are,

* the negative terminal of the source powering the circuit, or
* the node connected to the greatest number of branches.

#### Ground
The reference node is often referred to as *ground*. The concept of *ground* has three important meanings. 

![Ground stake next to a home](https://fastly.kastatic.org/ka-perseus-images/92a80780c3bef5128a186d4c5bbc30fe4cf24feb.jpg){: .centered }
<p class="caption">A metal stake driven into the ground next to a home. The wire clamped to the stake curves up to the right to provide the safety ground reference for the home's electrical system. Sometimes the grounding wire is clamped to a water pipe where the pipe disappears into the Earth.</p>

Ground is

* the reference point from which voltages are measured,
* the return path carrying electric current back to its source,
* a direct physical connection to the Earth, for safety.
 
<details>
    <summary>Safety ground</summary>
    <p>Any electric device plugged into the wall has very high voltages inside. If the device somehow fails the high internal voltage accidentally touches the metal case, there is a chance of someone getting a very dangerous shock. To avoid this, equipment is designed with a safety feature to direct the potentially large current into the Earth rather than through you. The metal enclosure of the appliance is connected to a safety ground wire (that's the third wire in the power cord). The safety ground goes through the home's electrical system and out to Earth, like in the photo above. Dangerous current is guided to a safe place, into the Earth and away from people. When the appliance or device is working properly, no current flows in the safety ground wire.</p>
</details>

The ground node gets its name from the third meaning. But all three roles are equally important.

You will come across various symbols for ground. They all indicate which node is the reference node.

![Ground symbols](https://ka-perseus-images.s3.amazonaws.com/7d5a24819a48db48fb13ad9ec71f9952389e8a4d.svg){: height="100px"}{: .centered }

## Summary
{:.no_toc}

We now have a full vocabulary for talking about circuits and their sub-parts.   
We will use our new words all the time.


