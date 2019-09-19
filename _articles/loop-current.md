---
layout: article
title:  "Loop current method"
author: Willy McAllister
comments: true
---

The Loop Current Method is a small variation on the [mesh current method]({{ site.baseurl }}{% link _articles/mesh-current.md %}). It accounts for two special cases that give the mesh method trouble. We describe the special cases and show how to deal with them.

Written by Willy McAllister.

----

### Contents
{:.no_toc}

* Will be replaced with the ToC
{:toc}

----

### Where we're headed 
{:.no_toc}

The two special cases are a non-planar circuit (one that can't be drawn without crossed wires) and a circuit with a current source shared between two meshes. 

To analyze circuits like this, you include equations for some non-mesh loops. Make sure every loop includes a circuit element that is not part of any other loop. The steps in the Loop Current Method are otherwise the same as the Mesh Current Method.  

----

The Loop Current Method, just like the Mesh Current Method, is based on [Kirchhoff's Voltage Law]({{ site.baseurl }}{% link _articles/kirchhoffs-voltage-law.md %}) (KVL). We resort to the Loop Current Method in two special cases.

## Special case: non-planar circuit

The Mesh Current Method works for circuits that are *planar*. 

* A circuit is *planar* if it can be drawn on a flat surface without crossed wires. All the schematics you have seen up to now are planar. The schematic below on the left is planar.  For planar circuits, we use the Mesh Current Method and write the equations based on *meshes*. This always works for planar circuits. 

* A *non-planar* circuit is shown below on the right. It has has to be drawn with at least one crossed wire, there's no way to draw it flat. Since there is no way to redraw the circuit to avoid a crossed wire, the circuit on the right is non-planar.

![Planar and non-planar circuits]({{ site.baseurl }}{% link i/loop1.svg %}){: .centered }

Left: planar circuit, can be drawn with no crossed wires.  
Right: non-planar circuit, can only be drawn with a crossed wire.
{: .caption :}

If a circuit is non-planar we *must* use the Loop Current Method.

## Special case: shared current source

A second special case is when you come across a current source shared between two meshes. This is another time when you *may* want to include a non-mesh loop in the system of equations. 

![Current source shared between two nodes]({{ site.baseurl }}{% link i/loop2.svg %}){: .centered }

Both mesh $\goldD{\text I}$ and mesh $\goldD{\text{II}}$ pass through the current source, $\text I_\text S$. It is possible (but irksome) to write and solve mesh equations for this configuration. (Try it and see what it's like. It is quite awkward to figure out the voltage at the node above the current source.)

 This is a time when you might want to use a loop. You can drop one of the meshes and replace it with the loop that goes around both meshes, as shown here for loop $\greenD{\text{III}}$.

![Select a mesh and a loop]({{ site.baseurl }}{% link i/loop3.svg %}){: .centered }


You then solve the system of equations exactly the same as the Mesh Current Method. 

In other textbooks you may see loop $\greenD{\text{III}}$ referred to as a *supermesh*.

## Select loops

We can make a small adjustment to the Mesh Current Method to help us with the two special cases---in addition to meshes, allow loops to participate in the equation-building process. 

When you select loops, 

* Make sure every circuit element participates in a loop or mesh. Every element needs to have a chance to influence the solution.
* Make sure at least one element in each loop is not part of any other loop or mesh. This assures the loop equations are independent.

These rules generate just the right number of independent equations to solve the circuit.

Take a look at the previous schematic. Do you see how the mesh and loop are defined to follow these two guidelines?

## Loop Current Method

The Loop Current Method is a variation on the Mesh Current Method,

* Identify the meshes, (the open windows of the circuit) **and loops (other closed paths)**.
* Assign a current variable to each mesh **or loop**. Use a consistent direction  (clockwise or counterclockwise).
* Write Kirchhoff's Voltage Law equations around each mesh **and loop**.
* Solve the resulting system of equations for mesh **and loop** currents.
* Solve for any element currents and voltages you want with Ohm's Law.

It is beneficial to switch to the Loop method if the circuit is non-planar, or there is a current source shared by two meshes. 

To assure you have independent equations, make sure every loop includes a circuit element that is not part of any other loop.